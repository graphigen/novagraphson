import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting için gelişmiş in-memory store
const rateLimitStore = new Map<string, { count: number; resetTime: number; blocked: boolean; blockUntil: number }>()

// Rate limiting fonksiyonu - geliştirildi
function isRateLimited(ip: string, userAgent: string): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(ip)
  
  // IP bloklanmış mı kontrol et
  if (record?.blocked && now < record.blockUntil) {
    return true
  }
  
  if (!record || now > record.resetTime) {
    // Yeni window başlat (1 dakika)
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + 60000,
      blocked: false,
      blockUntil: 0
    })
    return false
  }
  
  // Rate limit aşıldı mı?
  if (record.count >= 100) {
    // IP'yi 5 dakika blokla
    record.blocked = true
    record.blockUntil = now + 300000
    return true
  }
  
  record.count++
  return false
}

// Bot detection - geliştirildi
function isBot(userAgent: string): boolean {
  const botPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
    /httrack/i,
    /wget/i,
    /curl/i,
    /python/i,
    /java/i,
    /perl/i,
    /ruby/i,
    /php/i,
    /go-http-client/i,
    /okhttp/i,
    /apache-httpclient/i,
    /scrapy/i,
    /selenium/i,
    /puppeteer/i,
    /playwright/i,
    /cypress/i,
    /headless/i,
    /phantomjs/i,
    /casperjs/i,
    /nightmare/i,
    /zombie/i
  ]
  
  return botPatterns.some(pattern => pattern.test(userAgent))
}

// Suspicious request detection - geliştirildi
function isSuspiciousRequest(request: NextRequest): boolean {
  const url = request.nextUrl.pathname
  const query = request.nextUrl.search
  const headers = request.headers
  
  // Directory traversal attempts
  if (url.includes('..') || url.includes('~') || url.includes('\\') || url.includes('//')) {
    return true
  }
  
  // SQL injection attempts - genişletildi
  const sqlPatterns = [
    /union\s+select/i,
    /drop\s+table/i,
    /delete\s+from/i,
    /insert\s+into/i,
    /update\s+set/i,
    /exec\s+xp_/i,
    /exec\s+sp_/i,
    /select\s+from/i,
    /where\s+1\s*=\s*1/i,
    /or\s+1\s*=\s*1/i,
    /and\s+1\s*=\s*1/i,
    /sleep\s*\(/i,
    /benchmark\s*\(/i,
    /waitfor\s+delay/i
  ]
  
  if (sqlPatterns.some(pattern => pattern.test(url + query))) {
    return true
  }
  
  // XSS attempts - genişletildi
  const xssPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /data:text\/html/i,
    /vbscript:/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /<form/i,
    /<input/i,
    /<textarea/i,
    /<select/i,
    /<button/i,
    /<link/i,
    /<meta/i,
    /<base/i,
    /<applet/i,
    /<marquee/i,
    /<xmp/i,
    /<plaintext/i
  ]
  
  if (xssPatterns.some(pattern => pattern.test(url + query))) {
    return true
  }
  
  // Command injection attempts
  const commandPatterns = [
    /;.*\$/i,
    /`.*`/i,
    /\$\(.*\)/i,
    /&&.*/i,
    /\|\|.*/i,
    /;.*/i,
    /&.*/i,
    /\|.*/i,
    /<.*>/i,
    /\(.*\)/i
  ]
  
  if (commandPatterns.some(pattern => pattern.test(url + query))) {
    return true
  }
  
  // Suspicious headers
  const suspiciousHeaders = [
    'x-forwarded-for',
    'x-real-ip',
    'x-forwarded-proto',
    'x-forwarded-host',
    'x-forwarded-port'
  ]
  
  // Proxy header manipulation detection
  const clientIp = headers.get('x-forwarded-for') || headers.get('x-real-ip')
  if (clientIp && clientIp.includes(',')) {
    // Multiple IPs in header - potential proxy manipulation
    return true
  }
  
  return false
}

// CSRF token validation
function validateCSRFToken(request: NextRequest): boolean {
  const method = request.method
  if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') {
    return true // Safe methods
  }
  
  // CSRF token kontrolü (basit implementasyon)
  const csrfToken = request.headers.get('x-csrf-token')
  const origin = request.headers.get('origin')
  const referer = request.headers.get('referer')
  
  // Origin ve Referer kontrolü
  if (origin && !origin.includes('novagraph.com.tr') && !origin.includes('localhost')) {
    return false
  }
  
  if (referer && !referer.includes('novagraph.com.tr') && !referer.includes('localhost')) {
    return false
  }
  
  return true
}

// Request size validation
function validateRequestSize(request: NextRequest): boolean {
  const contentLength = request.headers.get('content-length')
  if (contentLength) {
    const size = parseInt(contentLength)
    if (size > 10 * 1024 * 1024) { // 10MB limit
      return false
    }
  }
  return true
}

export function middleware(request: NextRequest) {
  // Environment detection
  const isDev = process.env.NODE_ENV === 'development'
  const isStaging = process.env.NODE_ENV === 'test'
  const isProd = process.env.NODE_ENV === 'production'
  
  // Development ortamında sadece temel güvenlik
  if (isDev) {
    // Sadece temel security headers
    const response = NextResponse.next()
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Powered-By', 'NovaGraph')
    return response
  }
  
  // Staging ve Production'da tam güvenlik
  if (isStaging || isProd) {
    // Request size validation
    if (!validateRequestSize(request)) {
      return new NextResponse('Request too large', { status: 413 })
    }
    
    // CSRF validation
    if (!validateCSRFToken(request)) {
      return new NextResponse('Forbidden', { status: 403 })
    }
    
    const response = NextResponse.next()
    
    // IP adresini al
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const userAgent = request.headers.get('user-agent') || ''

    // Bot detection
    if (isBot(userAgent)) {
      // Bot'ları daha sıkı rate limit'e tabi tut
      if (isRateLimited(`bot-${ip}`, userAgent)) {
        return new NextResponse('Too Many Requests', { status: 429 })
      }
    }

    // Suspicious request detection
    if (isSuspiciousRequest(request)) {
      console.warn(`🚨 Suspicious request detected from ${ip}: ${request.nextUrl.pathname}`)
      // Suspicious request'leri logla ve blokla
      return new NextResponse('Forbidden', { status: 403 })
    }

    // Rate limiting
    if (isRateLimited(ip, userAgent)) {
      return new NextResponse('Too Many Requests', { status: 429 })
    }

    // Security headers - geliştirildi
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=()')
    response.headers.set('X-Powered-By', 'NovaGraph')
    response.headers.set('X-DNS-Prefetch-Control', 'off')
    response.headers.set('X-Download-Options', 'noopen')
    response.headers.set('X-Permitted-Cross-Domain-Policies', 'none')
    
    // Content Security Policy (CSP) - geliştirildi
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https: wss: https://va.vercel-scripts.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "media-src 'self'",
      "worker-src 'self' blob:",
      "child-src 'self' blob:",
      "frame-src 'self'"
    ].join('; ')
    
    response.headers.set('Content-Security-Policy', csp)

    // Cache headers
    if (request.nextUrl.pathname.startsWith('/_next/static/')) {
      response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    } else if (request.nextUrl.pathname.startsWith('/_next/image/')) {
      response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    } else if (request.nextUrl.pathname.startsWith('/api/')) {
      response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    } else {
      response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate')
    }

    return response
  }
  
  // Development ortamında da CSP ekle
  const response = NextResponse.next()
  
  // Development için daha esnek CSP
  const devCsp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https: blob:",
    "font-src 'self' data: https://fonts.gstatic.com",
    "connect-src 'self' https: wss: https://va.vercel-scripts.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "media-src 'self'",
    "worker-src 'self' blob:",
    "child-src 'self' blob:",
    "frame-src 'self'"
  ].join('; ')
  
  response.headers.set('Content-Security-Policy', devCsp)
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
