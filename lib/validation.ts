// Form validation ve güvenlik fonksiyonları
export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

// Input sanitization
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return ''
  
  return input
    .replace(/[<>]/g, '') // HTML tag'leri kaldır
    .replace(/javascript:/gi, '') // JavaScript protokolü engelle
    .replace(/data:/gi, '') // Data URI engelle
    .replace(/vbscript:/gi, '') // VBScript engelle
    .replace(/on\w+=/gi, '') // Event handler'ları engelle
}

// Email validation
export function validateEmail(email: string): ValidationResult {
  const errors: string[] = []
  
  if (!email) {
    errors.push('E-posta adresi gereklidir')
    return { isValid: false, errors }
  }
  
  const sanitizedEmail = sanitizeInput(email)
  
  // Email format kontrolü
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(sanitizedEmail)) {
    errors.push('Geçerli bir e-posta adresi giriniz')
  }
  
  // Length kontrolü
  if (sanitizedEmail.length > 254) {
    errors.push('E-posta adresi çok uzun')
  }
  
  // XSS koruması için tehlikeli karakterler
  if (/[<>"']/.test(sanitizedEmail)) {
    errors.push('E-posta adresinde geçersiz karakterler bulunuyor')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

// Phone validation
export function validatePhone(phone: string): ValidationResult {
  const errors: string[] = []
  
  if (!phone) {
    errors.push('Telefon numarası gereklidir')
    return { isValid: false, errors }
  }
  
  const sanitizedPhone = sanitizeInput(phone)
  
  // Sadece rakam, boşluk, +, -, ( ve ) karakterlerine izin ver
  const phoneRegex = /^[\d\s+\-()]+$/
  if (!phoneRegex.test(sanitizedPhone)) {
    errors.push('Telefon numarasında sadece rakam, boşluk ve +-() karakterleri kullanabilirsiniz')
  }
  
  // Length kontrolü (8-15 karakter)
  if (sanitizedPhone.length < 8 || sanitizedPhone.length > 15) {
    errors.push('Telefon numarası 8-15 karakter arasında olmalıdır')
  }
  
  // En az 8 rakam olmalı
  const digitCount = sanitizedPhone.replace(/\D/g, '').length
  if (digitCount < 8) {
    errors.push('Telefon numarası en az 8 rakam içermelidir')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

// Text validation (name, company name, sector)
export function validateText(text: string, fieldName: string, minLength: number = 2, maxLength: number = 100): ValidationResult {
  const errors: string[] = []
  
  if (!text) {
    errors.push(`${fieldName} gereklidir`)
    return { isValid: false, errors }
  }
  
  const sanitizedText = sanitizeInput(text)
  
  // Length kontrolü
  if (sanitizedText.length < minLength) {
    errors.push(`${fieldName} en az ${minLength} karakter olmalıdır`)
  }
  
  if (sanitizedText.length > maxLength) {
    errors.push(`${fieldName} en fazla ${maxLength} karakter olabilir`)
  }
  
  // Sadece harf, rakam, boşluk ve yaygın karakterlere izin ver
  const textRegex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ0-9\s\-\.&,()]+$/
  if (!textRegex.test(sanitizedText)) {
    errors.push(`${fieldName} sadece harf, rakam, boşluk ve yaygın karakterler içerebilir`)
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

// URL validation
export function validateUrl(url: string): ValidationResult {
  const errors: string[] = []
  
  if (!url) {
    return { isValid: true, errors: [] } // URL opsiyonel
  }
  
  const sanitizedUrl = sanitizeInput(url)
  
  // URL çok uzunsa hata ver
  if (sanitizedUrl.length > 2048) {
    errors.push('URL çok uzun')
    return { isValid: false, errors }
  }
  
  // Boş string kontrolü
  if (sanitizedUrl.trim().length === 0) {
    return { isValid: true, errors: [] }
  }
  
  // Eğer URL'de protokol yoksa, geçerli kabul et (kullanıcı istediği gibi yazabilir)
  // Sadece çok uzun olmaması yeterli
  return {
    isValid: true,
    errors: []
  }
}

// Budget validation
export function validateBudget(budget: number, currency: string): ValidationResult {
  const errors: string[] = []
  
  if (typeof budget !== 'number' || isNaN(budget)) {
    errors.push('Geçerli bir bütçe miktarı giriniz')
    return { isValid: false, errors }
  }
  
  if (budget < 0) {
    errors.push('Bütçe miktarı negatif olamaz')
  }
  
  if (budget > 1000000) {
    errors.push('Bütçe miktarı çok yüksek')
  }
  
  // Currency validation
  const validCurrencies = ['TL', 'USD', 'EUR']
  if (!validCurrencies.includes(currency)) {
    errors.push('Geçersiz para birimi')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

// Array validation (platforms, regions, ages)
export function validateArray(array: unknown[], fieldName: string, minItems: number = 1, maxItems: number = 20): ValidationResult {
  const errors: string[] = []
  
  if (!Array.isArray(array)) {
    errors.push(`${fieldName} geçerli bir liste olmalıdır`)
    return { isValid: false, errors }
  }
  
  if (array.length < minItems) {
    errors.push(`En az ${minItems} ${fieldName} seçmelisiniz`)
  }
  
  if (array.length > maxItems) {
    errors.push(`En fazla ${maxItems} ${fieldName} seçebilirsiniz`)
  }
  
  // Array içindeki her item'ı sanitize et
  array.forEach((item, index) => {
    if (typeof item === 'string') {
      const sanitized = sanitizeInput(item)
      if (sanitized !== item) {
        errors.push(`${fieldName} listesinde geçersiz karakterler bulunuyor`)
      }
    }
  })
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

// Form data validation
interface ContactFormData {
  companyName?: string;
  sector?: string;
  name?: string;
  email?: string;
  phone?: string;
  serviceCategory?: string;
  selectedService?: string;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: string[] = []
  
  // Company name validation
  if (data.companyName) {
    const companyNameResult = validateText(data.companyName, 'Firma adı', 2, 100)
    errors.push(...companyNameResult.errors)
  }
  
  // Sector validation
  if (data.sector) {
    const sectorResult = validateText(data.sector, 'Sektör', 2, 50)
    errors.push(...sectorResult.errors)
  }
  
  // Name validation
  if (data.name) {
    const nameResult = validateText(data.name, 'Ad soyad', 2, 50)
    errors.push(...nameResult.errors)
  }
  
  // Email validation
  if (data.email) {
    const emailResult = validateEmail(data.email)
    errors.push(...emailResult.errors)
  }
  
  // Phone validation
  if (data.phone) {
    const phoneResult = validatePhone(data.phone)
    errors.push(...phoneResult.errors)
  }
  
  // Service validation
  if (!data.serviceCategory || !data.selectedService) {
    errors.push('Hizmet seçimi gereklidir')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

// Rate limiting için basit token bucket
export class RateLimiter {
  private tokens: Map<string, { count: number; resetTime: number }> = new Map()
  private maxRequests: number
  private windowMs: number
  
  constructor(maxRequests: number = 10, windowMs: number = 60000) {
    this.maxRequests = maxRequests
    this.windowMs = windowMs
  }
  
  isAllowed(identifier: string): boolean {
    const now = Date.now()
    const record = this.tokens.get(identifier)
    
    if (!record || now > record.resetTime) {
      // Yeni window başlat
      this.tokens.set(identifier, {
        count: 1,
        resetTime: now + this.windowMs
      })
      return true
    }
    
    if (record.count >= this.maxRequests) {
      return false
    }
    
    record.count++
    return true
  }
  
  getRemaining(identifier: string): number {
    const record = this.tokens.get(identifier)
    if (!record) return this.maxRequests
    
    const now = Date.now()
    if (now > record.resetTime) return this.maxRequests
    
    return Math.max(0, this.maxRequests - record.count)
  }
}
