import { useState, useEffect } from "react"

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

export const useCookieConsent = () => {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load preferences from localStorage
    const savedPreferences = localStorage.getItem("cookieConsent")
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences)
        setPreferences(parsed)
      } catch (error) {
        console.error("Error parsing cookie preferences:", error)
      }
    }
    setIsLoaded(true)
  }, [])

  const savePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences)
    localStorage.setItem("cookieConsent", JSON.stringify(newPreferences))
  }

  const hasConsent = (type: keyof CookiePreferences) => {
    if (!preferences) return false
    return preferences[type]
  }

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    }
    savePreferences(allAccepted)
  }

  const acceptNecessary = () => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    }
    savePreferences(necessaryOnly)
  }

  return {
    preferences,
    isLoaded,
    savePreferences,
    hasConsent,
    acceptAll,
    acceptNecessary
  }
} 