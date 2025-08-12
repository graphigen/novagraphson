"use client"

import { useState, useCallback, useEffect } from "react"
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"

// Marketing channels options
const marketingChannels = [
  "Google Ads",
  "Meta Ads (Facebook & Instagram)",
  "Yandex Ads",
  "TikTok Ads",
  "Criteo",
  "Mail Marketing",
  "SMS Marketing",
  "WhatsApp Marketing"
]

// Business types
const businessTypes = [
  "E-ticaret",
  "Hizmet",
  "Üretim",
  "Eğitim",
  "Sağlık",
  "Finans",
  "Turizm",
  "Diğer"
]

// Budget ranges
const budgetRanges = [
  "5.000 TL - 10.000 TL",
  "10.000 TL - 25.000 TL",
  "25.000 TL - 50.000 TL",
  "50.000 TL - 100.000 TL",
  "100.000 TL+"
]

// Form data interface
interface FormData {
  companyName: string
  contactPerson: string
  email: string
  phone: string
  businessType: string
  marketingChannels: string[]
  budget: string
  description: string
  currentChallenges: string
  goals: string
}

// Custom hook for form persistence without infinite loops
function useFormStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage only once
  useEffect(() => {
    try {
      const stored = localStorage.getItem(key)
      if (stored) {
        const parsed = JSON.parse(stored)
        setValue(parsed)
      }
    } catch (error) {
      console.error("Error loading from localStorage:", error)
    }
    setIsLoaded(true)
  }, [key])

  // Save to localStorage when value changes (but only after initial load)
  const updateValue = useCallback((newValue: T) => {
    setValue(newValue)
    if (isLoaded) {
      try {
        localStorage.setItem(key, JSON.stringify(newValue))
      } catch (error) {
        console.error("Error saving to localStorage:", error)
      }
    }
  }, [key, isLoaded])

  const clearStorage = useCallback(() => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error("Error clearing localStorage:", error)
    }
  }, [key])

  return { value, updateValue, clearStorage }
}

export default function PazarlamaStratejiBasvurusu() {
  const { openForm } = useContactForm()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form data with proper storage management
  const { value: formData, updateValue: setFormData, clearStorage } = useFormStorage<FormData>("marketing-strategy-form", {
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessType: "",
    marketingChannels: [],
    budget: "",
    description: "",
    currentChallenges: "",
    goals: ""
  })

  // Navigation functions
  const nextStep = useCallback(() => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }, [currentStep])

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }, [currentStep])

  // Form update functions
  const updateField = useCallback((field: keyof FormData, value: any) => {
    setFormData({ ...formData, [field]: value })
  }, [formData, setFormData])

  const toggleChannel = useCallback((channel: string) => {
    const current = formData.marketingChannels
    const updated = current.includes(channel)
      ? current.filter(c => c !== channel)
      : [...current, channel]
    updateField("marketingChannels", updated)
  }, [formData.marketingChannels, updateField])

  // Form submission
  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Clear storage after successful submission
      clearStorage()
      
      // Open contact form for follow-up
      openForm()
      
      // Reset to first step
      setCurrentStep(1)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }, [clearStorage, openForm])

  // Validation
  const canProceed = useCallback(() => {
    switch (currentStep) {
      case 1:
        return formData.companyName && formData.contactPerson && formData.email && formData.phone
      case 2:
        return formData.businessType && formData.marketingChannels.length > 0
      case 3:
        return formData.budget && formData.description
      case 4:
        return formData.currentChallenges && formData.goals
      default:
        return false
    }
  }, [currentStep, formData])

  // Progress calculation
  const progress = (currentStep / 4) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => window.history.back()}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900">
                Pazarlama Strateji Başvurusu
              </h1>
            </div>
            <button
              onClick={(e) => openForm()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              İletişime Geç
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Adım {currentStep} / 4
            </span>
            <span className="text-sm text-gray-500">
              %{Math.round(progress)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step 1: Company Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Şirket Bilgileri
                </h2>
                <p className="text-gray-600">
                  Temel bilgilerinizi girin, size en uygun pazarlama stratejisini hazırlayalım.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Şirket Adı *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Şirket adınızı girin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yetkili Kişi *
                  </label>
                  <input
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => updateField("contactPerson", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ad soyad"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Business & Marketing */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  İş ve Pazarlama Bilgileri
                </h2>
                <p className="text-gray-600">
                  İş türünüzü ve kullanmak istediğiniz pazarlama kanallarını seçin.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    İş Türü *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {businessTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => updateField("businessType", type)}
                        className={`p-3 text-sm font-medium rounded-lg border transition-all ${
                          formData.businessType === type
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-300 hover:border-gray-400 text-gray-700"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Pazarlama Kanalları *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {marketingChannels.map((channel) => (
                      <button
                        key={channel}
                        onClick={() => toggleChannel(channel)}
                        className={`p-3 text-sm font-medium rounded-lg border transition-all flex items-center justify-between ${
                          formData.marketingChannels.includes(channel)
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-300 hover:border-gray-400 text-gray-700"
                        }`}
                      >
                        <span>{channel}</span>
                        {formData.marketingChannels.includes(channel) && (
                          <Check className="w-4 h-4" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Budget & Description */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Bütçe ve Açıklama
                </h2>
                <p className="text-gray-600">
                  Bütçe aralığınızı ve proje detaylarını belirtin.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Bütçe Aralığı *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {budgetRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() => updateField("budget", range)}
                        className={`p-3 text-sm font-medium rounded-lg border transition-all ${
                          formData.budget === range
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-300 hover:border-gray-400 text-gray-700"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proje Açıklaması *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => updateField("description", e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Projeniz hakkında detaylı bilgi verin..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Challenges & Goals */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Zorluklar ve Hedefler
                </h2>
                <p className="text-gray-600">
                  Karşılaştığınız zorlukları ve hedeflerinizi paylaşın.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mevcut Zorluklar *
                  </label>
                  <textarea
                    value={formData.currentChallenges}
                    onChange={(e) => updateField("currentChallenges", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Şu anda karşılaştığınız pazarlama zorlukları neler?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hedefler *
                  </label>
                  <textarea
                    value={formData.goals}
                    onChange={(e) => updateField("goals", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Bu proje ile neyi başarmak istiyorsunuz?"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-8 border-t">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all ${
                currentStep === 1
                  ? "border-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Önceki</span>
            </button>

            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                  canProceed()
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <span>Sonraki</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                  canProceed() && !isSubmitting
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Gönderiliyor...</span>
                  </>
                ) : (
                  <>
                    <span>Başvuruyu Gönder</span>
                    <Check className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
