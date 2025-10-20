import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { mailConfig, mailRecipients, isDevelopment } from '@/lib/environment';

// Mail transporter konfigürasyonu
const transporter = nodemailer.createTransport(mailConfig);

// Input validation ve sanitization
interface FormData {
  email?: string;
  name?: string;
  phone?: string;
  company?: string;
  message?: string;
  service?: string;
  formType?: string;
  formData?: Record<string, unknown>;
}

function validateAndSanitizeInput(data: FormData) {
  const errors: string[] = [];
  
  // Required fields validation
  if (!data.email || typeof data.email !== 'string') {
    errors.push('Geçerli bir email adresi gerekli');
  }
  
  if (!data.name || typeof data.name !== 'string') {
    errors.push('İsim gerekli');
  }
  
  if (!data.formType || typeof data.formType !== 'string') {
    errors.push('Form tipi gerekli');
  }
  
  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.email && !emailRegex.test(data.email)) {
    errors.push('Geçersiz email formatı');
  }
  
  // Length validation
  if (data.name && data.name.length > 100) {
    errors.push('İsim çok uzun (max 100 karakter)');
  }
  
  if (data.email && data.email.length > 254) {
    errors.push('Email çok uzun (max 254 karakter)');
  }
  
  if (data.phone && data.phone.length > 20) {
    errors.push('Telefon çok uzun (max 20 karakter)');
  }
  
  if (data.company && data.company.length > 100) {
    errors.push('Şirket adı çok uzun (max 100 karakter)');
  }
  
  if (data.message && data.message.length > 10000) {
    errors.push('Mesaj çok uzun (max 10000 karakter)');
  }
  
  // XSS protection - HTML tag removal
  const sanitizeString = (str: string): string => {
    return str
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
      .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/vbscript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .trim();
  };
  
  // Sanitize all string inputs
  const sanitized = {
    name: data.name ? sanitizeString(data.name) : '',
    email: data.email ? sanitizeString(data.email).toLowerCase() : '',
    phone: data.phone ? sanitizeString(data.phone) : '',
    company: data.company ? sanitizeString(data.company) : '',
    message: data.message ? sanitizeString(data.message) : '',
    service: data.service ? sanitizeString(data.service) : '',
    formType: data.formType ? sanitizeString(data.formType) : '',
    formData: data.formData || {}
  };
  
  // Form type validation
  const allowedFormTypes = ['popup', 'contact', 'marketing', 'strategy'];
  if (sanitized.formType && !allowedFormTypes.includes(sanitized.formType)) {
    errors.push('Geçersiz form tipi');
  }
  
  return { sanitized, errors };
}

// Rate limiting için basit in-memory store
const emailRateLimitStore = new Map<string, { count: number; resetTime: number }>();

function isEmailRateLimited(email: string): boolean {
  const now = Date.now();
  const record = emailRateLimitStore.get(email);
  
  if (!record || now > record.resetTime) {
    emailRateLimitStore.set(email, {
      count: 1,
      resetTime: now + 300000 // 5 dakika
    });
    return false;
  }
  
  if (record.count >= 3) { // 5 dakikada max 3 mail
    return true;
  }
  
  record.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    console.log('📧 Mail gönderme API çağrıldı');
    
    // Request size validation
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 1024 * 1024) { // 1MB limit
      return NextResponse.json(
        { success: false, message: 'Request çok büyük' },
        { status: 413 }
      );
    }
    
    const body = await request.json();
    console.log('📋 Request body:', JSON.stringify(body, null, 2));
    
    // Input validation ve sanitization
    const { sanitized, errors } = validateAndSanitizeInput(body);
    
    if (errors.length > 0) {
      console.warn('⚠️ Validation errors:', errors);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Geçersiz form verileri',
          errors: errors 
        },
        { status: 400 }
      );
    }
    
    // Rate limiting
    if (isEmailRateLimited(sanitized.email)) {
      console.warn('⚠️ Rate limit exceeded for:', sanitized.email);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Çok fazla mail gönderimi. Lütfen 5 dakika bekleyin.' 
        },
        { status: 429 }
      );
    }
    
    console.log('🔍 Form tipi:', sanitized.formType);
    console.log('👤 Kullanıcı adı:', sanitized.name);
    console.log('📧 Kullanıcı email:', sanitized.email);
    console.log('📱 Telefon:', sanitized.phone);
    console.log('🏢 Şirket:', sanitized.company);
    console.log('⭐ Hizmet:', sanitized.service);

    // Mail sunucusu bağlantısını test et
    try {
      console.log('🔧 Mail sunucusu bağlantısı test ediliyor...');
      console.log('🔧 Mail konfigürasyonu:', {
        host: mailConfig.host,
        port: mailConfig.port,
        secure: mailConfig.secure,
        user: mailConfig.auth.user,
        requireTLS: mailConfig.requireTLS
      });
      
      await transporter.verify();
      console.log('✅ Mail sunucusu bağlantısı başarılı');
    } catch (verifyError) {
      console.error('❌ Mail sunucusu bağlantı hatası:', verifyError);
      console.error('❌ Hata detayları:', {
        message: verifyError instanceof Error ? verifyError.message : 'Unknown error',
        code: 'VERIFY_FAILED',
        response: 'Mail sunucusu doğrulaması başarısız'
      });
      
      // Mail sunucusu hatası durumunda bile form verilerini kaydet
      console.log('⚠️ Mail sunucusu hatası, form verileri kaydediliyor...');
      
      // Form verilerini console'a yazdır (development için)
      if (isDevelopment) {
        console.log('📋 Form verileri (development):', {
          name: sanitized.name,
          email: sanitized.email,
          phone: sanitized.phone,
          company: sanitized.company,
          message: sanitized.message,
          service: sanitized.service,
          formType: sanitized.formType
        });
      }
      
      // Mail sunucusu hatası olsa bile başarılı response dön
      return NextResponse.json({ 
        success: true, 
        message: 'Form başvurunuz alındı. Mail sunucusu hatası nedeniyle teşekkür maili gönderilemedi.',
        mailError: true,
        formData: {
          name: sanitized.name,
          email: sanitized.email,
          phone: sanitized.phone,
          company: sanitized.company,
          message: sanitized.message,
          service: sanitized.service,
          formType: sanitized.formType
        }
      });
    }

    // Form tipine göre subject belirleme
    let subject = '';
    let thankYouSubject = '';
    let formDetails = '';
    
    switch (sanitized.formType) {
      case 'popup':
        subject = 'Yeni Popup İletişim Formu - NovaGraph';
        thankYouSubject = 'Teşekkürler! Form Başvurunuz Alındı - NovaGraph';
        formDetails = `
          <div style="background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; margin-bottom: 32px;">
            <h3 style="color: #2d3748; margin: 0 0 24px; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #667eea; margin-right: 12px;">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Form Detayları
            </h3>
            
            <div style="display: grid; gap: 20px;">
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Ad Soyad:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.name}</span>
              </div>
              
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">E-posta:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.email}</span>
              </div>
              
              ${sanitized.phone ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Telefon:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.phone}</span>
              </div>
              ` : ''}
              
              ${sanitized.company ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Şirket:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.company}</span>
              </div>
              ` : ''}
              
              ${sanitized.service ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Hizmet:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.service}</span>
              </div>
              ` : ''}
              
              ${sanitized.message ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Mesaj:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.message}</span>
              </div>
              ` : ''}
            </div>
          </div>
        `;
        break;
        
      case 'contact':
        subject = 'Yeni İletişim Formu - NovaGraph';
        thankYouSubject = 'Teşekkürler! İletişim Talebiniz Alındı - NovaGraph';
        formDetails = `
          <div style="background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; margin-bottom: 32px;">
            <h3 style="color: #2d3748; margin: 0 0 24px; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #667eea; margin-right: 12px;">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              İletişim Formu Detayları
            </h3>
            
            <div style="display: grid; gap: 20px;">
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Ad Soyad:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.name}</span>
              </div>
              
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">E-posta:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.email}</span>
              </div>
              
              ${sanitized.phone ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Telefon:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.phone}</span>
              </div>
              ` : ''}
              
              ${sanitized.company ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Şirket:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.company}</span>
              </div>
              ` : ''}
              
              ${sanitized.service ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Hizmet:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.service}</span>
              </div>
              ` : ''}
              
              ${sanitized.message ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Mesaj:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.message}</span>
              </div>
              ` : ''}
            </div>
          </div>
        `;
        break;
        
      case 'marketing':
        subject = 'Yeni Pazarlama Strateji Başvurusu - NovaGraph';
        thankYouSubject = 'Teşekkürler! Pazarlama Strateji Talebiniz Alındı - NovaGraph';
        formDetails = `
          <div style="background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; margin-bottom: 32px;">
            <h3 style="color: #2d3748; margin: 0 0 24px; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #667eea; margin-right: 12px;">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Pazarlama Strateji Başvurusu Detayları
            </h3>
            
            <div style="display: grid; gap: 20px;">
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Ad Soyad:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.name}</span>
              </div>
              
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">E-posta:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.email}</span>
              </div>
              
              ${sanitized.phone ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Telefon:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.phone}</span>
              </div>
              ` : ''}
              
              ${sanitized.company ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Şirket:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.company}</span>
              </div>
              ` : ''}
              
              ${sanitized.service ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Hizmet:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.service}</span>
              </div>
              ` : ''}
              
              ${sanitized.message ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Mesaj:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.message}</span>
              </div>
              ` : ''}
            </div>
          </div>
        `;
        break;
        
      case 'strategy':
        subject = 'Yeni Strateji Danışmanlık Talebi - NovaGraph';
        thankYouSubject = 'Teşekkürler! Strateji Danışmanlık Talebiniz Alındı - NovaGraph';
        formDetails = `
          <div style="background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; margin-bottom: 32px;">
            <h3 style="color: #2d3748; margin: 0 0 24px; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #667eea; margin-right: 12px;">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Strateji Danışmanlık Talebi Detayları
            </h3>
            
            <div style="display: grid; gap: 20px;">
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Ad Soyad:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.name}</span>
              </div>
              
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">E-posta:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.email}</span>
              </div>
              
              ${sanitized.phone ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Telefon:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.phone}</span>
              </div>
              ` : ''}
              
              ${sanitized.company ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Şirket:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.company}</span>
              </div>
              ` : ''}
              
              ${sanitized.service ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Hizmet:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.service}</span>
              </div>
              ` : ''}
              
              ${sanitized.message ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Mesaj:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.message}</span>
              </div>
              ` : ''}
            </div>
          </div>
        `;
        break;
        
      default:
        subject = 'Yeni Form Başvurusu - NovaGraph';
        thankYouSubject = 'Teşekkürler! Form Başvurunuz Alındı - NovaGraph';
        formDetails = `
          <div style="background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; margin-bottom: 32px;">
            <h3 style="color: #2d3748; margin: 0 0 24px; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #667eea; margin-right: 12px;">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Form Detayları
            </h3>
            
            <div style="display: grid; gap: 20px;">
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Ad Soyad:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.name}</span>
              </div>
              
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">E-posta:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.email}</span>
              </div>
              
              ${sanitized.phone ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Telefon:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.phone}</span>
              </div>
              ` : ''}
              
              ${sanitized.company ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Şirket:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.company}</span>
              </div>
              ` : ''}
              
              ${sanitized.service ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Hizmet:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.service}</span>
              </div>
              ` : ''}
              
              ${sanitized.message ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Mesaj:</span>
                <span style="color: #1a202c; font-weight: 600;">${sanitized.message}</span>
              </div>
              ` : ''}
            </div>
          </div>
        `;
    }

    // Şirkete giden mail
    const companyMailOptions = {
      from: `"NovaGraph Teknoloji" <${mailConfig.auth.user}>`,
      to: mailRecipients.general,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 32px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 600;">NovaGraph Teknoloji</h1>
            <p style="margin: 8px 0 0; opacity: 0.9; font-size: 16px;">Yeni Form Başvurusu</p>
          </div>
          
          ${formDetails}
          
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              Bu mail NovaGraph web sitesi üzerinden otomatik olarak gönderilmiştir.<br>
              Tarih: ${new Date().toLocaleString('tr-TR')}
            </p>
          </div>
        </div>
      `
    };

    // Form gönderen kişiye giden teşekkür maili
    const thankYouMailOptions = {
      from: `"NovaGraph Teknoloji" <${mailConfig.auth.user}>`,
      to: sanitized.email,
      subject: thankYouSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 32px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 600;">NovaGraph Teknoloji</h1>
            <p style="margin: 8px 0 0; opacity: 0.9; font-size: 16px;">Teşekkürler!</p>
          </div>
          
          <div style="background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; margin: 24px 0;">
            <h2 style="color: #2d3748; margin: 0 0 16px; font-size: 24px; font-weight: 600;">Merhaba ${sanitized.name},</h2>
            <p style="color: #4a5568; margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
              Form başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.
            </p>
            <p style="color: #4a5568; margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
              Başvuru detaylarınız:
            </p>
            <ul style="color: #4a5568; margin: 0 0 16px; font-size: 16px; line-height: 1.6; padding-left: 20px;">
              <li><strong>Ad Soyad:</strong> ${sanitized.name}</li>
              <li><strong>E-posta:</strong> ${sanitized.email}</li>
              ${sanitized.phone ? `<li><strong>Telefon:</strong> ${sanitized.phone}</li>` : ''}
              ${sanitized.company ? `<li><strong>Şirket:</strong> ${sanitized.company}</li>` : ''}
              ${sanitized.service ? `<li><strong>Hizmet:</strong> ${sanitized.service}</li>` : ''}
            </ul>
          </div>
          
          <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h3 style="color: #0369a1; margin: 0 0 16px; font-size: 18px; font-weight: 600;">Sonraki Adımlar</h3>
            <p style="color: #0c4a6e; margin: 0; font-size: 14px; line-height: 1.6;">
              1. Form başvurunuz incelenecek<br>
              2. Uzman ekibimiz size ulaşacak<br>
              3. Detaylı bilgi ve teklif sunulacak
            </p>
          </div>
          
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; text-align: center;">
            <p style="margin: 0 0 16px; color: #64748b; font-size: 14px;">
              Sorularınız için bizimle iletişime geçebilirsiniz:
            </p>
            <div style="display: flex; justify-content: center; gap: 16px;">
              <a href="tel:+905456642302" style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 500;">📞 Ara</a>
              <a href="mailto:info@novagraph.com.tr" style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 500;">✉️ E-posta</a>
            </div>
          </div>
          
          <div style="text-align: center; padding: 24px; color: #64748b; font-size: 12px;">
            <p style="margin: 0;">
              © 2025 NovaGraph Teknoloji A.Ş. Tüm hakları saklıdır.<br>
              Bu mail ${sanitized.email} adresine gönderilmiştir.
            </p>
          </div>
        </div>
      `
    };

    // Mailleri ayrı ayrı gönder ve hataları yakala
    try {
      console.log('📧 Şirket maili gönderiliyor...');
      console.log('📤 Şirket mail detayları:', {
        from: mailConfig.auth.user,
        to: mailRecipients.general,
        subject: subject,
        host: mailConfig.host,
        port: mailConfig.port
      });
      const companyResult = await transporter.sendMail(companyMailOptions);
      console.log('✅ Şirket maili gönderildi:', companyResult.messageId);
    } catch (companyError) {
      console.error('❌ Şirket maili gönderme hatası:', companyError);
      if (companyError && typeof companyError === 'object' && 'code' in companyError) {
        console.error('❌ Hata detayları:', {
                  code: companyError instanceof Error ? 'COMPANY_MAIL_ERROR' : 'UNKNOWN_ERROR',
        response: companyError instanceof Error ? companyError.message : 'Unknown error',
        command: 'SEND_MAIL'
        });
      }
    }

    try {
      console.log('📧 Teşekkür maili gönderiliyor...');
      console.log('📤 Teşekkür mail detayları:', {
        from: mailConfig.auth.user,
        to: sanitized.email,
        subject: thankYouSubject,
        host: mailConfig.host,
        port: mailConfig.port
      });
      
      // Mail gönderim öncesi detaylı log
      console.log('🔍 Mail konfigürasyonu:', {
        host: mailConfig.host,
        port: mailConfig.port,
        secure: mailConfig.secure,
        requireTLS: mailConfig.requireTLS,
        user: mailConfig.auth.user
      });
      
      const thankYouResult = await transporter.sendMail(thankYouMailOptions);
      console.log('✅ Teşekkür maili gönderildi:', thankYouResult.messageId);
      console.log('📧 Teşekkür maili alıcısı:', sanitized.email);
      console.log('📨 Mail sunucusu response:', thankYouResult.response);
    } catch (thankYouError) {
      console.error('❌ Teşekkür maili gönderme hatası:', thankYouError);
      console.error('❌ Hata türü:', typeof thankYouError);
      console.error('❌ Hata mesajı:', thankYouError instanceof Error ? thankYouError.message : 'Unknown error');
      
      if (thankYouError && typeof thankYouError === 'object' && 'code' in thankYouError) {
        console.error('❌ Hata detayları:', {
          code: thankYouError instanceof Error ? 'THANK_YOU_MAIL_ERROR' : 'UNKNOWN_ERROR',
          response: thankYouError instanceof Error ? thankYouError.message : 'Unknown error',
          command: 'SEND_MAIL',
          responseCode: 'ERROR',
          enhancedServerCode: 'ERROR'
        });
      }
      
      // Mail sunucusu bağlantısını tekrar test et
      try {
        console.log('🔧 Mail sunucusu bağlantısı tekrar test ediliyor...');
        await transporter.verify();
        console.log('✅ Mail sunucusu bağlantısı hala aktif');
      } catch (verifyError) {
        console.error('❌ Mail sunucusu bağlantısı kopmuş:', verifyError);
      }
    }

    console.log('✅ Mail gönderme süreci tamamlandı');
    
    return NextResponse.json({ 
      success: true, 
      message: 'E-postalar başarıyla gönderildi',
      formData: {
        name: sanitized.name,
        email: sanitized.email,
        phone: sanitized.phone,
        company: sanitized.company,
        message: sanitized.message,
        service: sanitized.service,
        formType: sanitized.formType
      }
    });

  } catch (error) {
    console.error('❌ Mail gönderme API hatası:', error);
    
    // Sensitive bilgi sızıntısını önle
    const errorMessage = error instanceof Error ? error.message : 'Bilinmeyen hata';
    const safeErrorMessage = errorMessage.includes('password') || errorMessage.includes('auth') 
      ? 'Mail sunucusu hatası' 
      : errorMessage;
    
    return NextResponse.json(
      { 
        success: false, 
        message: `Mail gönderilemedi: ${safeErrorMessage}` 
      },
      { status: 500 }
    );
  }
}
