/**
 * Güvenlik Utility Fonksiyonları
 * NovaGraph Teknoloji - Güvenlik Katmanları
 */

import { NextRequest } from 'next/server';
import crypto from 'crypto';

// Güvenlik konfigürasyonu
export const SECURITY_CONFIG = {
  // Rate limiting
  RATE_LIMIT: {
    DEFAULT_WINDOW_MS: 60 * 1000, // 1 dakika
    DEFAULT_MAX_REQUESTS: 100,
    UPLOAD_WINDOW_MS: 60 * 60 * 1000, // 1 saat
    UPLOAD_MAX_REQUESTS: 10,
    LOGIN_WINDOW_MS: 15 * 60 * 1000, // 15 dakika
    LOGIN_MAX_ATTEMPTS: 5
  },
  
  // Input validation
  INPUT_LIMITS: {
    MAX_STRING_LENGTH: 1000,
    MAX_EMAIL_LENGTH: 254,
    MAX_PHONE_LENGTH: 20,
    MAX_NAME_LENGTH: 100,
    MAX_COMPANY_LENGTH: 100,
    MAX_MESSAGE_LENGTH: 2000,
    MAX_URL_LENGTH: 2048
  },
  
  // File upload
  FILE_UPLOAD: {
    MAX_SIZE: 5 * 1024 * 1024, // 5MB
    ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'],
    ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    MAX_FILENAME_LENGTH: 100
  },
  
  // Session & Authentication
  SESSION: {
    MAX_AGE: 24 * 60 * 60 * 1000, // 24 saat
    REFRESH_THRESHOLD: 5 * 60 * 1000, // 5 dakika
    MAX_CONCURRENT_SESSIONS: 3
  }
};

// Rate limiting store (in-memory - production'da Redis kullanılmalı)
const rateLimitStores = new Map<string, Map<string, { count: number; resetTime: number; blocked: boolean; blockUntil: number }>>();

/**
 * Rate limiting kontrolü
 */
export function isRateLimited(
  key: string, 
  storeName: string = 'default',
  maxRequests: number = SECURITY_CONFIG.RATE_LIMIT.DEFAULT_MAX_REQUESTS,
  windowMs: number = SECURITY_CONFIG.RATE_LIMIT.DEFAULT_WINDOW_MS
): boolean {
  if (!rateLimitStores.has(storeName)) {
    rateLimitStores.set(storeName, new Map());
  }
  
  const store = rateLimitStores.get(storeName)!;
  const now = Date.now();
  const record = store.get(key);
  
  // IP bloklanmış mı kontrol et
  if (record?.blocked && now < record.blockUntil) {
    return true;
  }
  
  if (!record || now > record.resetTime) {
    // Yeni window başlat
    store.set(key, {
      count: 1,
      resetTime: now + windowMs,
      blocked: false,
      blockUntil: 0
    });
    return false;
  }
  
  if (record.count >= maxRequests) {
    // IP'yi blokla (5 dakika)
    record.blocked = true;
    record.blockUntil = now + 5 * 60 * 1000;
    return true;
  }
  
  record.count++;
  return false;
}

/**
 * IP adresi al
 */
export function getClientIP(request: NextRequest): string {
  return request.ip || 
         request.headers.get('x-forwarded-for')?.split(',')[0] || 
         request.headers.get('x-real-ip') || 
         'unknown';
}

/**
 * User-Agent analizi
 */
export function analyzeUserAgent(userAgent: string): {
  isBot: boolean;
  isMobile: boolean;
  isSuspicious: boolean;
  browser: string;
  os: string;
} {
  const ua = userAgent.toLowerCase();
  
  // Bot detection
  const botPatterns = [
    'bot', 'crawler', 'spider', 'scraper', 'scraper', 'crawler',
    'googlebot', 'bingbot', 'yandexbot', 'baiduspider', 'facebookexternalhit',
    'twitterbot', 'linkedinbot', 'whatsapp', 'telegrambot', 'discordbot',
    'slackbot', 'slack-imgproxy', 'slackbot-link-expanding', 'slackbot-image-expanding',
    'rogerbot', 'dotbot', 'ia_archiver', 'archive.org_bot', 'ia_archiver-web.archive.org',
    'archive.org_bot', 'ia_archiver-web.archive.org', 'archive.org_bot-web.archive.org',
    'ia_archiver-web.archive.org', 'archive.org_bot-web.archive.org', 'ia_archiver-web.archive.org'
  ];
  
  const isBot = botPatterns.some(pattern => ua.includes(pattern));
  
  // Mobile detection
  const mobilePatterns = ['mobile', 'android', 'iphone', 'ipad', 'windows phone'];
  const isMobile = mobilePatterns.some(pattern => ua.includes(pattern));
  
  // Suspicious patterns
  const suspiciousPatterns = [
    'curl', 'wget', 'python', 'java', 'perl', 'ruby', 'php',
    'scanner', 'probe', 'test', 'check', 'verify', 'validate',
    'security', 'vulnerability', 'exploit', 'hack', 'attack'
  ];
  
  const isSuspicious = suspiciousPatterns.some(pattern => ua.includes(pattern));
  
  // Browser detection
  let browser = 'Unknown';
  if (ua.includes('chrome')) browser = 'Chrome';
  else if (ua.includes('firefox')) browser = 'Firefox';
  else if (ua.includes('safari')) browser = 'Safari';
  else if (ua.includes('edge')) browser = 'Edge';
  else if (ua.includes('opera')) browser = 'Opera';
  
  // OS detection
  let os = 'Unknown';
  if (ua.includes('windows')) os = 'Windows';
  else if (ua.includes('mac')) os = 'macOS';
  else if (ua.includes('linux')) os = 'Linux';
  else if (ua.includes('android')) os = 'Android';
  else if (ua.includes('ios')) os = 'iOS';
  
  return { isBot, isMobile, isSuspicious, browser, os };
}

/**
 * Input sanitization
 */
export function sanitizeInput(input: string, options: {
  maxLength?: number;
  allowHtml?: boolean;
  allowScripts?: boolean;
} = {}): string {
  const { maxLength = SECURITY_CONFIG.INPUT_LIMITS.MAX_STRING_LENGTH, allowHtml = false, allowScripts = false } = options;
  
  let sanitized = input.trim();
  
  // Length check
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }
  
  // HTML tag removal (if not allowed)
  if (!allowHtml) {
    sanitized = sanitized.replace(/<[^>]*>/g, '');
  }
  
  // Script removal (if not allowed)
  if (!allowScripts) {
    sanitized = sanitized
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/vbscript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .replace(/data:/gi, '');
  }
  
  // Dangerous characters
  sanitized = sanitized
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
  
  return sanitized;
}

/**
 * Email validation
 */
export function validateEmail(email: string): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!email) {
    errors.push('Email adresi gerekli');
    return { isValid: false, errors };
  }
  
  if (email.length > SECURITY_CONFIG.INPUT_LIMITS.MAX_EMAIL_LENGTH) {
    errors.push(`Email çok uzun (max ${SECURITY_CONFIG.INPUT_LIMITS.MAX_EMAIL_LENGTH} karakter)`);
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push('Geçersiz email formatı');
  }
  
  // Disposable email check
  const disposableDomains = [
    'tempmail.org', 'guerrillamail.com', 'mailinator.com', '10minutemail.com',
    'throwaway.email', 'temp-mail.org', 'sharklasers.com', 'grr.la'
  ];
  
  const domain = email.split('@')[1];
  if (disposableDomains.includes(domain)) {
    errors.push('Geçici email adresleri kabul edilmez');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Phone validation
 */
export function validatePhone(phone: string): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!phone) {
    return { isValid: true, errors: [] }; // Phone is optional
  }
  
  if (phone.length > SECURITY_CONFIG.INPUT_LIMITS.MAX_PHONE_LENGTH) {
    errors.push(`Telefon çok uzun (max ${SECURITY_CONFIG.INPUT_LIMITS.MAX_PHONE_LENGTH} karakter)`);
  }
  
  // Turkish phone number format
  const phoneRegex = /^(\+90|0)?[5][0-9]{9}$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
    errors.push('Geçersiz telefon formatı (örn: +90 5XX XXX XX XX)');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * CSRF token oluştur
 */
export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

/**
 * CSRF token doğrula
 */
export function validateCSRFToken(token: string, storedToken: string): boolean {
  if (!token || !storedToken) return false;
  return crypto.timingSafeEqual(Buffer.from(token, 'hex'), Buffer.from(storedToken, 'hex'));
}

/**
 * Password strength check
 */
export function checkPasswordStrength(password: string): {
  score: number; // 0-4
  feedback: string[];
  isStrong: boolean;
} {
  const feedback: string[] = [];
  let score = 0;
  
  if (password.length < 8) {
    feedback.push('Şifre en az 8 karakter olmalı');
  } else {
    score++;
  }
  
  if (/[a-z]/.test(password)) score++;
  else feedback.push('Küçük harf ekleyin');
  
  if (/[A-Z]/.test(password)) score++;
  else feedback.push('Büyük harf ekleyin');
  
  if (/[0-9]/.test(password)) score++;
  else feedback.push('Rakam ekleyin');
  
  if (/[^A-Za-z0-9]/.test(password)) score++;
  else feedback.push('Özel karakter ekleyin');
  
  return {
    score,
    feedback,
    isStrong: score >= 4
  };
}

/**
 * SQL Injection detection
 */
export function detectSQLInjection(input: string): boolean {
  const sqlPatterns = [
    /(\b(select|insert|update|delete|drop|create|alter|exec|execute|union|script)\b)/i,
    /(--|\/\*|\*\/|xp_|sp_|@@|char\(|nchar\(|varchar\(|nvarchar\(|cast\(|convert\(|declare\s+@|exec\s+sp_)/i,
    /(\b(and|or)\b\s+\d+\s*[=<>])/i,
    /(\b(and|or)\b\s+['"][^'"]*['"]\s*[=<>])/i,
    /(\b(and|or)\b\s+\w+\s*[=<>])/i
  ];
  
  return sqlPatterns.some(pattern => pattern.test(input));
}

/**
 * XSS detection
 */
export function detectXSS(input: string): boolean {
  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /vbscript:/gi,
    /on\w+\s*=/gi,
    /data:\s*text\/html/gi,
    /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
    /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
    /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi
  ];
  
  return xssPatterns.some(pattern => pattern.test(input));
}

/**
 * Path traversal detection
 */
export function detectPathTraversal(input: string): boolean {
  const traversalPatterns = [
    /\.\.\//g,
    /\.\.\\/g,
    /\/\.\./g,
    /\\\.\./g,
    /%2e%2e%2f/gi,
    /%2e%2e%5c/gi,
    /%252e%252e%255c/gi,
    /%252e%252e%252f/gi
  ];
  
  return traversalPatterns.some(pattern => pattern.test(input));
}

/**
 * Log security event
 */
export function logSecurityEvent(
  event: string,
  details: Record<string, any>,
  severity: 'low' | 'medium' | 'high' | 'critical' = 'medium'
): void {
  const logEntry = {
    timestamp: new Date().toISOString(),
    event,
    severity,
    details,
    environment: process.env.NODE_ENV || 'development'
  };
  
  console.log(`🔒 SECURITY [${severity.toUpperCase()}]: ${event}`, logEntry);
  
  // Production'da bu log'lar güvenli bir log servisine gönderilmeli
  // Örnek: Winston, Bunyan, veya cloud logging service
}

/**
 * Security headers
 */
export function getSecurityHeaders(): Record<string, string> {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
  };
}

/**
 * Environment check
 */
export function checkSecurityEnvironment(): {
  isSecure: boolean;
  warnings: string[];
  recommendations: string[];
} {
  const warnings: string[] = [];
  const recommendations: string[] = [];
  
  // HTTPS check
  if (process.env.NODE_ENV === 'production' && !process.env.HTTPS) {
    warnings.push('HTTPS zorunlu değil');
    recommendations.push('HTTPS kullanımını zorunlu hale getirin');
  }
  
  // Environment variables check
  if (!process.env.NODE_ENV) {
    warnings.push('NODE_ENV tanımlanmamış');
    recommendations.push('NODE_ENV environment variable tanımlayın');
  }
  
  // Rate limiting check
  if (process.env.NODE_ENV === 'production') {
    recommendations.push('Production\'da Redis veya başka bir persistent store kullanın');
  }
  
  return {
    isSecure: warnings.length === 0,
    warnings,
    recommendations
  };
}
