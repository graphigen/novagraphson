// Environment detection ve port yönetimi
export const isProduction = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'
export const isStaging = process.env.NODE_ENV === 'staging'

export const getPort = (): number => {
  if (isProduction) return 80
  if (isStaging) return 3001
  return 3000 // development default
}

export const getEnvironment = (): string => {
  if (isProduction) return 'production'
  if (isStaging) return 'staging'
  return 'development'
}

export const isServer = typeof window === 'undefined'
export const isClient = !isServer

// Environment-specific konfigürasyonlar
export const config = {
  development: {
    apiUrl: 'http://localhost:3000',
    debug: true,
    hotReload: true
  },
  staging: {
    apiUrl: 'http://localhost:3001',
    debug: true,
    hotReload: true
  },
  production: {
    apiUrl: 'https://novagraph.com.tr',
    debug: false,
    hotReload: false
  }
}

export const getCurrentConfig = () => {
  const env = getEnvironment()
  return config[env as keyof typeof config] || config.development
}
