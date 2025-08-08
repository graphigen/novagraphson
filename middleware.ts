import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Development ortamında middleware'i devre dışı bırak
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next()
  }

  const response = NextResponse.next()

  // Güvenlik başlıkları
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')

  // Hotlink koruması
  const referer = request.headers.get('referer')
  const host = request.headers.get('host')
  
  // Resim dosyaları için hotlink koruması
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|ico)$/i)) {
    if (referer && !referer.includes(host || '') && !referer.includes('localhost')) {
      // Hotlink tespit edildi - 403 Forbidden döndür
      return new NextResponse('Forbidden', { status: 403 })
    }
  }

  // API güvenliği
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // API rate limiting için basit kontrol
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // CORS başlıkları
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  }

  // Directory listing engelleme
  if (request.nextUrl.pathname.endsWith('/') && request.nextUrl.pathname !== '/') {
    return new NextResponse('Forbidden', { status: 403 })
  }

  // Güvenlik için belirli dosya türlerini engelleme
  const blockedExtensions = ['.env', '.git', '.htaccess', '.htpasswd', '.ini', '.log', '.sql', '.bak', '.backup']
  const pathname = request.nextUrl.pathname.toLowerCase()
  
  for (const ext of blockedExtensions) {
    if (pathname.includes(ext)) {
      return new NextResponse('Forbidden', { status: 403 })
    }
  }

  // User-Agent kontrolü (bot engelleme)
  const userAgent = request.headers.get('user-agent') || ''
  const suspiciousBots = [
    'bot', 'crawler', 'spider', 'scraper', 'httrack', 'wget', 'curl', 'python', 'java', 'perl'
  ]
  
  const isSuspiciousBot = suspiciousBots.some(bot => 
    userAgent.toLowerCase().includes(bot)
  )
  
  if (isSuspiciousBot) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
