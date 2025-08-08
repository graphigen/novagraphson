/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.svg', 'novagraph.com.tr', 'www.novagraph.com.tr'],
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
  webpack: (config, { isServer }) => {
    // Add module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '.',
      '@/components': './components',
      '@/contexts': './contexts',
      '@/lib': './lib',
      '@/app': './app',
      '@/hooks': './hooks',
      '@/styles': './styles',
    }
    
    // Improve module resolution
    config.resolve.modules = ['node_modules', '.']
    
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
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
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
