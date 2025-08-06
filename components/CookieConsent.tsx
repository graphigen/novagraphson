"use client"
import { useState, useEffect } from "react"
import { X, Settings, Shield, Info, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      // Small delay to ensure page is loaded
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    setIsSaving(true)
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted))
    
    // Trigger analytics if accepted
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted"
      })
    }
    
    setTimeout(() => {
      setShowBanner(false)
      setIsSaving(false)
    }, 500)
  }

  const handleAcceptNecessary = () => {
    setIsSaving(true)
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    }
    setPreferences(necessaryOnly)
    localStorage.setItem("cookieConsent", JSON.stringify(necessaryOnly))
    
    // Disable analytics if not accepted
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied"
      })
    }
    
    setTimeout(() => {
      setShowBanner(false)
      setIsSaving(false)
    }, 500)
  }

  const handleSavePreferences = () => {
    setIsSaving(true)
    localStorage.setItem("cookieConsent", JSON.stringify(preferences))
    
    // Update analytics based on preferences
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: preferences.analytics ? "granted" : "denied",
        ad_storage: preferences.marketing ? "granted" : "denied"
      })
    }
    
    setTimeout(() => {
      setShowBanner(false)
      setShowSettings(false)
      setIsSaving(false)
    }, 500)
  }

  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    if (key === "necessary") return // Necessary cookies can't be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4 sm:p-6 animate-in slide-in-from-bottom duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Çerez Politikası</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-medium">GDPR Uyumlu</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 sm:mb-0">
                  Web sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz. 
                  Bu çerezler, site performansını analiz etmek ve size kişiselleştirilmiş içerik sunmak için kullanılır. 
                  <a href="/privacy" className="text-blue-600 hover:underline ml-1 font-medium">
                    Gizlilik Politikamızı
                  </a> 
                  inceleyebilirsiniz.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSettings(true)}
                  className="flex items-center gap-2"
                  disabled={isSaving}
                >
                  <Settings className="w-4 h-4" />
                  Ayarlar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAcceptNecessary}
                  className="flex items-center gap-2"
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                      Kaydediliyor...
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4" />
                      Sadece Gerekli
                    </>
                  )}
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptAll}
                  className="flex items-center gap-2"
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-blue-600 rounded-full animate-spin"></div>
                      Kaydediliyor...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Tümünü Kabul Et
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Çerez Ayarları</h2>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-medium">GDPR Uyumlu</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(false)}
                  disabled={isSaving}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <h3 className="font-medium text-gray-900">Gerekli Çerezler</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Her zaman aktif</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Bu çerezler web sitesinin temel işlevlerini sağlamak için gereklidir ve devre dışı bırakılamaz.
                    Örnek: oturum yönetimi, güvenlik, dil tercihleri.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-blue-600" />
                    <h3 className="font-medium text-gray-900">Analitik Çerezler</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Bu çerezler, web sitesinin nasıl kullanıldığını anlamamıza ve performansını iyileştirmemize yardımcı olur.
                    Örnek: Google Analytics, sayfa görüntüleme sayıları, kullanıcı davranışları.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => handlePreferenceChange("analytics")}
                    disabled={isSaving}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-purple-600" />
                    <h3 className="font-medium text-gray-900">Pazarlama Çerezleri</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Bu çerezler, size ilgili reklamlar ve pazarlama kampanyaları göstermek için kullanılır.
                    Örnek: Facebook Pixel, Google Ads, retargeting çerezleri.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => handlePreferenceChange("marketing")}
                    disabled={isSaving}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Preferences Cookies */}
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-orange-600" />
                    <h3 className="font-medium text-gray-900">Tercih Çerezleri</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Bu çerezler, tercihlerinizi hatırlamak ve size kişiselleştirilmiş bir deneyim sunmak için kullanılır.
                    Örnek: tema tercihleri, dil seçimi, bölge ayarları.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.preferences}
                    onChange={() => handlePreferenceChange("preferences")}
                    disabled={isSaving}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* GDPR Notice */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-900 mb-1">GDPR Uyumluluğu</h4>
                    <p className="text-sm text-blue-700">
                      Bu çerez ayarları, Avrupa Birliği Genel Veri Koruma Yönetmeliği (GDPR) uyarınca hazırlanmıştır. 
                      Tercihlerinizi istediğiniz zaman değiştirebilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-2 justify-end">
                <Button
                  variant="outline"
                  onClick={() => setShowSettings(false)}
                  disabled={isSaving}
                >
                  İptal
                </Button>
                <Button
                  onClick={handleSavePreferences}
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-blue-600 rounded-full animate-spin mr-2"></div>
                      Kaydediliyor...
                    </>
                  ) : (
                    "Tercihleri Kaydet"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 