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
    // Development için localhost kısıtlaması olmayan API key
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY_DEV || 'AIzaSyDWE8krTb17oA3BI_nwlo7LyOTuhrSFCPk'
  },
  production: {
    apiUrl: 'https://novagraph.com.tr',
    debug: false,
    hotReload: false,
    // Production için novagraph.com.tr kısıtlı API key
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY_PROD || 'AIzaSyDWE8krTb17oA3BI_nwlo7LyOTuhrSFCPk'
  }
}

// Mail konfigürasyonu - Güncellenmiş ayarlar
export const mailConfig = {
  host: process.env.MAIL_HOST || 'mail.novagraph.com.tr',
  port: parseInt(process.env.MAIL_PORT || '587'), // SMTP Port 587
  secure: false, // STARTTLS kullan
  auth: {
    user: process.env.MAIL_USER || 'info@novagraph.com.tr',
    pass: process.env.MAIL_PASS || '0907CGTY..'
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256'
  },
  requireTLS: true, // STARTTLS kullandığımız için true
  logger: true,
  debug: true,
  connectionTimeout: 60000, // 60 saniye
  greetingTimeout: 30000, // 30 saniye
  socketTimeout: 60000 // 60 saniye
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

// Google Maps API key getter - Gelişmiş
export const getGoogleMapsApiKey = (): string => {
  // Development için özel API key
  if (isDevelopment) {
    const devApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY_DEV
    if (devApiKey) {
      return devApiKey
    }
  }
  
  // Production için özel API key
  if (isProduction) {
    const prodApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY_PROD
    if (prodApiKey) {
      return prodApiKey
    }
  }
  
  // Fallback olarak config'den al
  const currentConfig = getCurrentConfig()
  return currentConfig.googleMapsApiKey
}
