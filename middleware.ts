import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting için basit in-memory store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Rate limiting fonksiyonu
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(ip)
  
  if (!record || now > record.resetTime) {
    // Yeni window başlat (1 dakika)
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + 60000
    })
    return false
  }
  
  if (record.count >= 100) { // 1 dakikada max 100 request
    return true
  }
  
  record.count++
  return false
}

// Bot detection
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
    /cypress/i
  ]
  
  return botPatterns.some(pattern => pattern.test(userAgent))
}

// Suspicious request detection
function isSuspiciousRequest(request: NextRequest): boolean {
  const url = request.nextUrl.pathname
  
  // Directory traversal attempts
  if (url.includes('..') || url.includes('~') || url.includes('\\')) {
    return true
  }
  
  // SQL injection attempts
  const sqlPatterns = [
    /union\s+select/i,
    /drop\s+table/i,
    /delete\s+from/i,
    /insert\s+into/i,
    /update\s+set/i,
    /exec\s+xp_/i,
    /exec\s+sp_/i
  ]
  
  if (sqlPatterns.some(pattern => pattern.test(url))) {
    return true
  }
  
  // XSS attempts
  const xssPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /data:text\/html/i,
    /vbscript:/i
  ]
  
  if (xssPatterns.some(pattern => pattern.test(url))) {
    return true
  }
  
  return false
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
    return response
  }
  
  // Staging ve Production'da tam güvenlik
  if (isStaging || isProd) {
    const response = NextResponse.next()
    
    // IP adresini al
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const userAgent = request.headers.get('user-agent') || ''

    // Bot detection
    if (isBot(userAgent)) {
      // Bot'ları rate limit'e tabi tut
      if (isRateLimited(`bot-${ip}`)) {
        return new NextResponse('Too Many Requests', { status: 429 })
      }
    }

    // Suspicious request detection
    if (isSuspiciousRequest(request)) {
      console.warn(`Suspicious request detected from ${ip}: ${request.nextUrl.pathname}`)
      return new NextResponse('Forbidden', { status: 403 })
    }

    // Rate limiting
    if (isRateLimited(ip)) {
      return new NextResponse('Too Many Requests', { status: 429 })
    }

    // Security headers
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
    response.headers.set('X-Powered-By', 'NovaGraph')
    
    // Content Security Policy (CSP)
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'"
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
  
  // Development ortamında NextResponse.next() döndür
  return NextResponse.next()
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
