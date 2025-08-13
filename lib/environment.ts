// Environment detection ve port yönetimi
export const isProduction = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'

export const getPort = (): number => {
  if (isProduction) return 80
  return 3000 // development default
}

export const getEnvironment = (): string => {
  if (isProduction) return 'production'
  return 'development'
}

export const isServer = typeof window === 'undefined'
export const isClient = !isServer

// Environment-specific konfigürasyonlar
export const config = {
  development: {
    apiUrl: 'http://localhost:3000',
    debug: true,
    hotReload: true,
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyDWE8krTb17oA3BI_nwlo7LyOTuhrSFCPk'
  },
  production: {
    apiUrl: 'https://novagraph.com.tr',
    debug: false,
    hotReload: false,
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyDWE8krTb17oA3BI_nwlo7LyOTuhrSFCPk'
  }
}

// Mail konfigürasyonu
export const mailConfig = {
  host: process.env.MAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.MAIL_PORT || '587'), // TLS port
  secure: false, // TLS kullan
  auth: {
    user: process.env.MAIL_USER || 'cagatayyumlu@gmail.com',
    pass: process.env.MAIL_PASS || process.env.GMAIL_APP_PASSWORD || ''
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256'
  },
  requireTLS: true,
  logger: true,
  debug: true
}

// Mail alıcı bilgileri
export const mailRecipients = {
  contact: 'cagatayyumlu@gmail.com, cagatay@novagraph.com.tr',
  marketing: 'cagatayyumlu@gmail.com, cagatay@novagraph.com.tr',
  general: 'cagatayyumlu@gmail.com, cagatay@novagraph.com.tr'
}

export const getCurrentConfig = () => {
  const env = getEnvironment()
  return config[env as keyof typeof config] || config.development
}

// Google Maps API key getter
export const getGoogleMapsApiKey = (): string => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  if (!apiKey) {
    console.warn('Google Maps API key bulunamadı. Environment variable NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ayarlanmalı.')
    return 'AIzaSyDWE8krTb17oA3BI_nwlo7LyOTuhrSFCPk' // Fallback key
  }
  return apiKey
}
