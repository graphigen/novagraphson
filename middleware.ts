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

  // Zeabur ve Cloudflare için CORS headers
  response.headers.set('Access-Control-Allow-Origin', 'https://novagraph.com.tr')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  // Zeabur için cache headers
  if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  } else if (request.nextUrl.pathname.startsWith('/_next/image/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  } else if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
  } else {
    response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate')
  }

  // Zeabur ve Cloudflare için hotlink koruması
  const referer = request.headers.get('referer')
  const host = request.headers.get('host')
  
  if (referer && !referer.includes('novagraph.com.tr') && !referer.includes('localhost') && !referer.includes('zeabur.app') && !referer.includes('cloudflare.com') && !referer.includes('clusters.zeabur.com')) {
    // Hotlink koruması - sadece resim dosyaları için
    if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
      return new NextResponse('Forbidden', { status: 403 })
    }
  }

  // Cloudflare için güvenlik başlıkları
  const cfConnectingIp = request.headers.get('cf-connecting-ip')
  if (cfConnectingIp) {
    response.headers.set('X-Real-IP', cfConnectingIp)
  }

  // Zeabur için güvenlik başlıkları
  const xForwardedFor = request.headers.get('x-forwarded-for')
  if (xForwardedFor) {
    response.headers.set('X-Forwarded-For', xForwardedFor)
  }

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
