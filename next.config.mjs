import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // optimizePackageImports can cause runtime/vendor chunk mismatches with some libraries in dev
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'novagraph.com.tr' },
      { protocol: 'https', hostname: 'www.novagraph.com.tr' },
    ],
    unoptimized: false,
  },
  // Production output configuration
  output: 'standalone',
  // Remove powered by header
  poweredByHeader: false,
  // Remove trailing slash
  trailingSlash: false,
  // Base path configuration
  basePath: '',
  // Asset prefix
  assetPrefix: '',
  // Webpack configuration for module resolution
  webpack: (config, { isServer, dev }) => {
    // Add module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(process.cwd()),
      '@/components': path.resolve(process.cwd(), 'components'),
      '@/contexts': path.resolve(process.cwd(), 'contexts'),
      '@/lib': path.resolve(process.cwd(), 'lib'),
      '@/app': path.resolve(process.cwd(), 'app'),
      '@/hooks': path.resolve(process.cwd(), 'hooks'),
      '@/styles': path.resolve(process.cwd(), 'styles'),
    }

    // Avoid ambiguous resolution that can confuse Next's dev bundler
    // Leave default modules resolution
    
    return config
  },
  // Production headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Domain',
            value: 'novagraph.com.tr',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // X-XSS-Protection modern tarayıcılarda etkisiz, kaldırıldı
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Temel bir CSP (görseli bozmayacak şekilde gevşek bırakıldı)
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none'",
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ]
  },
  // Redirects for production
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ]
  },

}

export default nextConfig
