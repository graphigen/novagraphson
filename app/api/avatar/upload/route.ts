import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// Güvenlik konfigürasyonu
const SECURITY_CONFIG = {
  // Dosya boyut limitleri (bytes)
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_IMAGE_DIMENSIONS: 2048, // 2048x2048px
  
  // İzin verilen dosya türleri
  ALLOWED_MIME_TYPES: [
    'image/jpeg',
    'image/jpg', 
    'image/png',
    'image/webp',
    'image/gif'
  ],
  
  // İzin verilen dosya uzantıları
  ALLOWED_EXTENSIONS: ['.jpg', '.jpeg', '.png', '.webp', '.gif'],
  
  // Tehlikeli dosya türleri (reddedilecek)
  BLOCKED_MIME_TYPES: [
    'application/x-executable',
    'application/x-msdownload',
    'application/x-msi',
    'application/x-msdos-program',
    'application/x-msdos-windows',
    'application/x-msi',
    'application/x-msi-installer',
    'application/x-msi-installer-package',
    'application/x-msi-installer-package-installer',
    'application/x-msi-installer-package-installer-package',
    'application/x-msi-installer-package-installer-package-installer',
    'text/html',
    'text/javascript',
    'application/javascript',
    'application/x-javascript',
    'text/plain',
    'application/x-shockwave-flash',
    'application/x-shockwave-flash-player',
    'application/x-shockwave-flash-player-plugin',
    'application/x-shockwave-flash-player-plugin-installer',
    'application/x-shockwave-flash-player-plugin-installer-package',
    'application/x-shockwave-flash-player-plugin-installer-package-installer',
    'application/x-shockwave-flash-player-plugin-installer-package-installer-package',
    'application/x-shockwave-flash-player-plugin-installer-package-installer-package-installer'
  ],
  
  // Rate limiting
  RATE_LIMIT: {
    MAX_UPLOADS_PER_IP: 10,
    WINDOW_MS: 60 * 60 * 1000 // 1 saat
  }
};

// Rate limiting için in-memory store
const uploadRateLimitStore = new Map<string, { count: number; resetTime: number }>();

function isUploadRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = uploadRateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    uploadRateLimitStore.set(ip, {
      count: 1,
      resetTime: now + SECURITY_CONFIG.RATE_LIMIT.WINDOW_MS
    });
    return false;
  }
  
  if (record.count >= SECURITY_CONFIG.RATE_LIMIT.MAX_UPLOADS_PER_IP) {
    return true;
  }
  
  record.count++;
  return false;
}

// Dosya güvenlik kontrolü
function validateFileSecurity(file: File, buffer: Buffer): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // MIME type kontrolü
  if (!SECURITY_CONFIG.ALLOWED_MIME_TYPES.includes(file.type)) {
    errors.push(`Geçersiz dosya türü: ${file.type}`);
  }
  
  // Dosya uzantısı kontrolü
  const extension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
  if (!SECURITY_CONFIG.ALLOWED_EXTENSIONS.includes(extension)) {
    errors.push(`Geçersiz dosya uzantısı: ${extension}`);
  }
  
  // Dosya boyutu kontrolü
  if (file.size > SECURITY_CONFIG.MAX_FILE_SIZE) {
    errors.push(`Dosya çok büyük: ${(file.size / 1024 / 1024).toFixed(2)}MB (max: ${SECURITY_CONFIG.MAX_FILE_SIZE / 1024 / 1024}MB)`);
  }
  
  // Tehlikeli dosya türleri kontrolü
  if (SECURITY_CONFIG.BLOCKED_MIME_TYPES.includes(file.type)) {
    errors.push(`Güvenlik nedeniyle bu dosya türü reddedildi: ${file.type}`);
  }
  
  // Dosya içeriği kontrolü (magic bytes)
  const magicBytes = buffer.slice(0, 8);
  const magicBytesHex = magicBytes.toString('hex').toLowerCase();
  
  // JPEG kontrolü
  if (file.type === 'image/jpeg' && !magicBytesHex.startsWith('ffd8ff')) {
    errors.push('Geçersiz JPEG dosyası (magic bytes uyumsuz)');
  }
  
  // PNG kontrolü
  if (file.type === 'image/png' && !magicBytesHex.startsWith('89504e47')) {
    errors.push('Geçersiz PNG dosyası (magic bytes uyumsuz)');
  }
  
  // GIF kontrolü
  if (file.type === 'image/gif' && !magicBytesHex.startsWith('47494638')) {
    errors.push('Geçersiz GIF dosyası (magic bytes uyumsuz)');
  }
  
  // WebP kontrolü
  if (file.type === 'image/webp' && !magicBytesHex.startsWith('52494646')) {
    errors.push('Geçersiz WebP dosyası (magic bytes uyumsuz)');
  }
  
  // Dosya adı güvenlik kontrolü
  const fileName = file.name.toLowerCase();
  const dangerousPatterns = [
    '..', '\\', '/', ':', '*', '?', '"', '<', '>', '|',
    'script', 'javascript', 'vbscript', 'data:', 'vbscript:',
    'onload', 'onerror', 'onclick', 'onmouseover', 'onfocus'
  ];
  
  for (const pattern of dangerousPatterns) {
    if (fileName.includes(pattern)) {
      errors.push(`Dosya adında tehlikeli karakter/kelime tespit edildi: ${pattern}`);
      break;
    }
  }
  
  // Dosya boyutu 0 kontrolü
  if (file.size === 0) {
    errors.push('Boş dosya yüklenemez');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Dosya adı sanitizasyonu
function sanitizeFileName(fileName: string): string {
  return fileName
    .replace(/[^a-zA-Z0-9.-]/g, '_') // Sadece alfanumerik, nokta ve tire
    .replace(/_{2,}/g, '_') // Birden fazla alt çizgiyi tek alt çizgi yap
    .replace(/^_+|_+$/g, '') // Başta ve sonda alt çizgi varsa kaldır
    .substring(0, 100); // Maksimum 100 karakter
}

export async function POST(request: NextRequest) {
  try {
    console.log('📤 Avatar upload API çağrıldı');
    
    // IP adresi al
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    console.log('🌐 IP adresi:', ip);
    
    // Rate limiting kontrolü
    if (isUploadRateLimited(ip)) {
      console.warn('⚠️ Rate limit exceeded for IP:', ip);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Çok fazla dosya yükleme denemesi. Lütfen 1 saat bekleyin.' 
        },
        { status: 429 }
      );
    }
    
    // Request size kontrolü
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > SECURITY_CONFIG.MAX_FILE_SIZE) {
      console.warn('⚠️ Request too large:', contentLength);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Request çok büyük' 
        },
        { status: 413 }
      );
    }
    
    // FormData parse et
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      console.warn('⚠️ No file provided');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Dosya bulunamadı' 
        },
        { status: 400 }
      );
    }
    
    console.log('📁 Dosya bilgileri:', {
      name: file.name,
      type: file.type,
      size: file.size,
      lastModified: new Date(file.lastModified).toISOString()
    });
    
    // Dosya buffer'ını al
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Dosya güvenlik kontrolü
    const securityValidation = validateFileSecurity(file, buffer);
    if (!securityValidation.isValid) {
      console.warn('⚠️ Security validation failed:', securityValidation.errors);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Dosya güvenlik kontrolünden geçemedi',
          errors: securityValidation.errors
        },
        { status: 400 }
      );
    }
    
    // Dosya adını sanitize et
    const sanitizedFileName = sanitizeFileName(file.name);
    const timestamp = Date.now();
    const finalFileName = `${timestamp}_${sanitizedFileName}`;
    
    console.log('🔒 Sanitized filename:', finalFileName);
    
    // Upload dizinini oluştur
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'avatars');
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
      console.log('📁 Upload dizini oluşturuldu:', uploadDir);
    }
    
    // Dosyayı kaydet
    const filePath = join(uploadDir, finalFileName);
    await writeFile(filePath, buffer);
    
    console.log('✅ Dosya başarıyla kaydedildi:', filePath);
    
    // Başarılı response
    return NextResponse.json({
      success: true,
      message: 'Avatar başarıyla yüklendi',
      data: {
        fileName: finalFileName,
        originalName: file.name,
        size: file.size,
        type: file.type,
        url: `/uploads/avatars/${finalFileName}`,
        uploadedAt: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('❌ Avatar upload hatası:', error);
    
    // Sensitive bilgi sızıntısını önle
    const errorMessage = error instanceof Error ? error.message : 'Bilinmeyen hata';
    const safeErrorMessage = errorMessage.includes('path') || errorMessage.includes('permission') 
      ? 'Dosya sistemi hatası' 
      : 'Dosya yükleme hatası';
    
    return NextResponse.json(
      { 
        success: false, 
        message: safeErrorMessage 
      },
      { status: 500 }
    );
  }
}

// OPTIONS method için CORS headers
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}
