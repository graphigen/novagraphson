"use client"

import { useState, useCallback, useEffect, useMemo, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Megaphone,
  Globe,
  Mail,
  MessageCircle,
  Smartphone,
  MousePointerClick,
  Building2,
  Link as LinkIcon,
  Plus,
  Trash2,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  ArrowLeft
} from "lucide-react"
import { validateEmail, validatePhone, validateText, validateUrl, validateBudget, validateArray, sanitizeInput } from "@/lib/validation"

type Currency = "TL" | "USD" | "EUR"

type SocialAccount = {
  platform: "Instagram" | "Facebook" | "YouTube" | "LinkedIn"
  url: string
}

type FormData = {
  // Step 1
  selectedPlatforms: string[]
  unsureAskForSuggest: boolean

  // Step 2
  companyName: string
  sector: string
  productDescription: string
  websiteUrl: string
  socialAccounts: SocialAccount[]
  sectorSuggestedPlatforms: string[]

  // Step 3
  budgetCurrency: Currency
  monthlyBudget: number
  targetAges: string[]
  targetGender: "Kadın" | "Erkek" | "Her İkisi"
  targetRegions: string[]

  // Step 4
  fullName: string
  email: string
  phone: string
  kvkkAccepted: boolean
  marketingAccepted: boolean
}

const STORAGE_KEY = "marketingStrategyApplication.v1"

const platformOptions = [
  { value: "Google Ads", icon: MousePointerClick },
  { value: "Meta Ads (Facebook & Instagram)", icon: Megaphone },
  { value: "Yandex Ads", icon: Globe },
  { value: "TikTok Ads", icon: Smartphone },
  { value: "Criteo", icon: Megaphone },
  { value: "Mail Marketing", icon: Mail },
  { value: "SMS Marketing", icon: MessageCircle },
  { value: "WhatsApp Marketing", icon: MessageCircle },
]

const sectors = [
  "E-Ticaret ve Online Perakende",
  "Sağlık & Estetik",
  "Yeme-İçme & Restoran",
  "Sanayi & Üretim",
  "Gayrimenkul & İnşaat",
  "Turizm & Otelcilik",
  "Eğitim & Danışmanlık",
  "Lojistik & Kargo",
  "Moda & Tasarım",
  "Diğer",
]

const sectorRecommendations: Record<string, string[]> = {
  "Sağlık & Estetik": ["Bookimed", "WhatClinic", "Trustpilot", "RealSelf", "DoktorTakvimi"],
  "Turizm & Otelcilik": ["Trivago", "Etstur", "Booking", "Hotels.com", "Expedia"],
  "Yeme-İçme & Restoran": ["Tripadvisor", "Yemeksepeti", "Zomato", "OpenTable"],
  "E-Ticaret ve Online Perakende": ["Trendyol", "Hepsiburada", "N11", "Amazon", "Etsy"],
  "Gayrimenkul & İnşaat": ["Sahibinden", "Zingat", "Emlakjet", "Remax"],
  "Eğitim & Danışmanlık": ["Udemy", "Coursera", "LinkedIn Learning"],
  "Lojistik & Kargo": ["ShipStation", "EasyShip", "UPS Marketplace"],
  "Moda & Tasarım": ["Pinterest", "Instagram Shop", "Depop"],
  "Sanayi & Üretim": ["Alibaba", "Made-in-China", "ThomasNet"],
}

const ageOptions = ["18–24", "25–34", "35–44", "45+"]

function usePersistentForm<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial)
  const isInitializedRef = useRef(false)
  const lastSavedValueRef = useRef<string>('')
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Load from localStorage only once on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key)
      if (raw) {
        const parsed = JSON.parse(raw)
        setValue({ ...initial, ...parsed })
      }
      isInitializedRef.current = true
    } catch (error) {
      console.error('Error loading from localStorage:', error)
      isInitializedRef.current = true
    }
  }, [key, initial])

  // Create a stable setValue function that also saves to localStorage with debouncing
  const setValueAndSave = useCallback((newValue: T | ((prev: T) => T)) => {
    setValue(prev => {
      const result = typeof newValue === 'function' ? (newValue as (prev: T) => T)(prev) : newValue
      
      // Save to localStorage with debouncing to prevent excessive writes
      if (isInitializedRef.current) {
        // Clear existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
        
        // Set new timeout for debounced save
        timeoutRef.current = setTimeout(() => {
          try {
            const serialized = JSON.stringify(result)
            if (serialized !== lastSavedValueRef.current) {
              lastSavedValueRef.current = serialized
              localStorage.setItem(key, serialized)
            }
          } catch (error) {
            console.error('Error saving to localStorage:', error)
          }
        }, 300) // 300ms debounce
      }
      
      return result
    })
  }, [key])

  const clear = useCallback(() => {
    try {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
      localStorage.removeItem(key)
      lastSavedValueRef.current = ''
    } catch (error) {
      console.error('Error clearing localStorage:', error)
    }
  }, [key])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return { value, setValue: setValueAndSave, clear }
}

export default function MarketingStrategyApplicationPage() {
  const initialData: FormData = useMemo(
    () => ({
      selectedPlatforms: [],
      unsureAskForSuggest: false,
      companyName: "",
      sector: "",
      productDescription: "",
      websiteUrl: "",
      socialAccounts: [],
      sectorSuggestedPlatforms: [],
      budgetCurrency: "TL",
      monthlyBudget: 0,
      targetAges: [],
      targetGender: "Her İkisi",
      targetRegions: [],
      fullName: "",
      email: "",
      phone: "",
      kvkkAccepted: false,
      marketingAccepted: false,
    }),
    []
  )

  const { value: formData, setValue: setFormData, clear } = usePersistentForm<FormData>(
    STORAGE_KEY,
    initialData
  )
  const [step, setStep] = useState<number>(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const totalSteps = 4
  const progress = Math.round(((step - 1) / totalSteps) * 100)

  const toggleArrayValue = (key: keyof FormData, val: string) => {
    setFormData(prev => {
      const arr = new Set<string>((prev[key] as unknown as string[]) || [])
      if (arr.has(val)) arr.delete(val)
      else arr.add(val)
      return { ...prev, [key]: Array.from(arr) }
    })
  }

  const validateStep = (stepNumber: number): boolean => {
    const errors: string[] = []
    
    switch (stepNumber) {
      case 1:
        if (formData.selectedPlatforms.length === 0 && !formData.unsureAskForSuggest) {
          errors.push("En az bir platform seçmelisiniz veya öneri istemelisiniz")
        }
        break
        
      case 2:
        const companyNameResult = validateText(formData.companyName, "Firma adı", 2, 100)
        errors.push(...companyNameResult.errors)
        
        const sectorResult = validateText(formData.sector, "Sektör", 2, 50)
        errors.push(...sectorResult.errors)
        
        const productResult = validateText(formData.productDescription, "Ürün açıklaması", 10, 500)
        errors.push(...productResult.errors)
        
        if (formData.websiteUrl) {
          const urlResult = validateUrl(formData.websiteUrl)
          errors.push(...urlResult.errors)
        }
        
        if (formData.socialAccounts.length > 0) {
          const socialResult = validateArray(formData.socialAccounts, "Sosyal medya hesapları", 0, 10)
          errors.push(...socialResult.errors)
        }
        break
        
      case 3:
        const budgetResult = validateBudget(formData.monthlyBudget, formData.budgetCurrency)
        errors.push(...budgetResult.errors)
        
        if (formData.targetAges.length === 0) {
          errors.push("En az bir hedef yaş grubu seçmelisiniz")
        }
        
        if (!formData.targetGender) {
          errors.push("Hedef cinsiyet seçmelisiniz")
        }
        
        if (formData.targetRegions.length === 0) {
          errors.push("En az bir hedef bölge seçmelisiniz")
        }
        break
        
      case 4:
        const nameResult = validateText(formData.fullName, "Ad soyad", 2, 50)
        errors.push(...nameResult.errors)
        
        const emailResult = validateEmail(formData.email)
        errors.push(...emailResult.errors)
        
        const phoneResult = validatePhone(formData.phone)
        errors.push(...phoneResult.errors)
        
        if (!formData.kvkkAccepted) {
          errors.push("KVKK metnini kabul etmelisiniz")
        }
        break
    }
    
    return errors.length === 0
  }

  // Memoized validation results to prevent infinite re-renders
  const step1Valid = useMemo(() => {
    return formData.selectedPlatforms.length > 0 || formData.unsureAskForSuggest
  }, [formData.selectedPlatforms, formData.unsureAskForSuggest])

  const step2Valid = useMemo(() => {
    return formData.companyName.length >= 2 && 
           formData.sector.length >= 2 && 
           formData.productDescription.length >= 10
  }, [formData.companyName, formData.sector, formData.productDescription])

  const step3Valid = useMemo(() => {
    return formData.targetAges.length > 0 && 
           formData.targetGender && 
           formData.targetRegions.length > 0
  }, [formData.targetAges, formData.targetGender, formData.targetRegions])

  const step4Valid = useMemo(() => {
    return formData.fullName.length >= 2 && 
           formData.email.includes('@') && 
           formData.phone.length >= 10 && 
           formData.kvkkAccepted
  }, [formData.fullName, formData.email, formData.phone, formData.kvkkAccepted])

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, totalSteps))
      setValidationErrors([])
    }
  }

  const handlePrev = () => {
    setStep(prev => Math.max(prev - 1, 1))
    setValidationErrors([])
  }

  const handleSubmit = async () => {
    if (validateStep(step)) {
      try {
        // Sanitize form data before sending
        const sanitizedData = {
          name: sanitizeInput(formData.fullName),
          email: sanitizeInput(formData.email),
          phone: sanitizeInput(formData.phone),
          company: sanitizeInput(formData.companyName),
          service: 'Pazarlama Strateji Danışmanlığı',
          message: `
<h2 style="color: #1f2937; font-size: 24px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
🎯 Pazarlama Strateji Başvurusu Detayları
</h2>

<div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
  <h3 style="color: #374151; font-size: 18px; font-weight: 600; margin-bottom: 15px;">🏢 Şirket Bilgileri</h3>
  <div style="margin-bottom: 10px;"><strong>Şirket Adı:</strong> ${sanitizeInput(formData.companyName)}</div>
  <div style="margin-bottom: 10px;"><strong>Sektör:</strong> ${sanitizeInput(formData.sector)}</div>
  <div style="margin-bottom: 10px;"><strong>Ürün/Hizmet:</strong> ${sanitizeInput(formData.productDescription)}</div>
  ${formData.websiteUrl ? `<div style="margin-bottom: 10px;"><strong>Website:</strong> <a href="${sanitizeInput(formData.websiteUrl)}" style="color: #3b82f6;">${sanitizeInput(formData.websiteUrl)}</a></div>` : ''}
</div>

<div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
  <h3 style="color: #374151; font-size: 18px; font-weight: 600; margin-bottom: 15px;">📱 Seçilen Platformlar</h3>
  <div style="margin-bottom: 10px;"><strong>Platformlar:</strong> ${formData.selectedPlatforms.map(p => sanitizeInput(p)).join(', ')}</div>
  <div style="margin-bottom: 10px;"><strong>Aylık Bütçe:</strong> ${formData.monthlyBudget} ${formData.budgetCurrency}</div>
</div>

<div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
  <h3 style="color: #374151; font-size: 18px; font-weight: 600; margin-bottom: 15px;">🎯 Hedef Kitle</h3>
  <div style="margin-bottom: 8px;"><strong>Yaş Aralığı:</strong> ${formData.targetAges.map(age => sanitizeInput(age)).join(', ')}</div>
  <div style="margin-bottom: 8px;"><strong>Cinsiyet:</strong> ${sanitizeInput(formData.targetGender)}</div>
  <div style="margin-bottom: 8px;"><strong>Hedef Bölgeler:</strong> ${formData.targetRegions.map(region => sanitizeInput(region)).join(', ')}</div>
</div>

${formData.socialAccounts.length > 0 ? `
<div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
  <h3 style="color: #374151; font-size: 18px; font-weight: 600; margin-bottom: 15px;">📱 Sosyal Medya Hesapları</h3>
  ${formData.socialAccounts.map(acc => `<div style="margin-bottom: 8px;"><strong>${sanitizeInput(acc.platform)}:</strong> <a href="${sanitizeInput(acc.url)}" style="color: #3b82f6;">${sanitizeInput(acc.url)}</a></div>`).join('')}
</div>
` : ''}

<div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
  <h3 style="color: #374151; font-size: 18px; font-weight: 600; margin-bottom: 15px;">✅ Onaylar</h3>
  <div style="margin-bottom: 8px;"><strong>KVKK Onayı:</strong> ${formData.kvkkAccepted ? '✅ Evet' : '❌ Hayır'}</div>
  <div style="margin-bottom: 8px;"><strong>Pazarlama İletişimi:</strong> ${formData.marketingAccepted ? '✅ Evet' : '❌ Hayır'}</div>
</div>

<div style="background: #3b82f6; color: white; padding: 15px; border-radius: 8px; text-align: center; font-weight: 600;">
  🚀 Bu başvuru ${new Date().toLocaleDateString('tr-TR')} tarihinde alınmıştır.
</div>
            `,
            formType: 'marketing'
          };

        // Mail gönderme API'sine istek
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sanitizedData),
        });

        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.message || 'Mail gönderilemedi');
        }
        
        setShowSuccess(true);
        clear();
        setValidationErrors([]);
      } catch (error) {
        console.error("Form submission error:", error);
        setValidationErrors(["Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin."]);
      }
    }
  };

  const handleInputChange = (field: keyof FormData, value: any) => {
    // Remove sanitizeInput call to allow spaces and normal typing
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([])
    }
  }

  if (showSuccess) {
    return (
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Teşekkürler! Talebiniz başarıyla alındı.
          </h1>
          <p className="text-gray-600 mb-6">En geç 48 saat içinde size dönüş yapacağız.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a href="https://wa.me/905456642302" target="_blank" rel="noopener noreferrer">
                WhatsApp üzerinden hızlı destek
              </a>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Pazarlama Strateji Başvurusu
          </h1>
          <p className="text-gray-600">Kısa adımlarla ihtiyacınızı anlayıp, en doğru stratejiyi önerelim.</p>
        </div>

        {/* Validation Errors */}
        {validationErrors.length > 0 && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium text-red-800">Lütfen aşağıdaki hataları düzeltin:</span>
            </div>
            <ul className="text-sm text-red-700 space-y-1">
              {validationErrors.map((error, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                  {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Progress + Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Adım {step} / {totalSteps}</span>
            <span>%{progress}</span>
          </div>
          <Progress value={progress} />
          <div className="mt-3 grid grid-cols-4 gap-3">
            {[1,2,3,4].map(n => (
              <div key={n} className={`h-1.5 rounded ${n <= step ? "bg-blue-600" : "bg-gray-200"}`} />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Hangi dijital pazarlama platformlarında reklam vermek istiyorsunuz?</CardTitle>
                <p className="text-gray-600 text-sm">Birden fazla seçebilirsiniz.</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {platformOptions.map((p) => {
                    const Icon = p.icon
                    const selected = formData.selectedPlatforms.includes(p.value)
                    return (
                      <button
                        key={p.value}
                        type="button"
                        onClick={() => toggleArrayValue("selectedPlatforms", p.value)}
                        className={`border rounded-lg p-3 text-left transition ${selected ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-sm">{p.value}</span>
                        </div>
                      </button>
                    )
                  })}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={formData.unsureAskForSuggest}
                      onCheckedChange={() => {
                        handleInputChange("unsureAskForSuggest", !formData.unsureAskForSuggest)
                      }}
                    />
                    <span className="text-sm text-gray-600">Hangi platformları kullanacağımı bilmiyorum, öneri verin</span>
                  </div>
                </div>
              </CardContent>
              <div className="flex items-center justify-between mt-4">
                <Button type="button" variant="outline" onClick={handlePrev} disabled={step === 1}>
                  <ChevronLeft className="w-4 h-4 mr-2" /> Geri
                </Button>
                <Button type="button" disabled={!step1Valid} onClick={handleNext}>
                  Devam <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Firmanızı tanıyalım</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Firma Ünvanı *</Label>
                    <Input
                      value={formData.companyName}
                      onChange={e => handleInputChange("companyName", e.target.value)}
                      placeholder="Örn. NovaGraph Teknoloji A.Ş."
                    />
                    <p className="text-xs text-gray-500">
                      En az 2 karakter giriniz
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>Sektör *</Label>
                    <Select
                      value={formData.sector}
                      onValueChange={(v) => handleInputChange("sector", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sektör seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        {sectors.map(s => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500">
                      Lütfen sektörünüzü listeden seçin
                    </p>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label>Ürün / Hizmet Açıklaması *</Label>
                    <Textarea
                      value={formData.productDescription}
                      onChange={e => handleInputChange("productDescription", e.target.value)}
                      placeholder="Kısaca ürün ve hizmetlerinizi anlatın (en az 10 karakter)"
                      rows={3}
                    />
                    <p className="text-xs text-gray-500">
                      En az 10 karakter giriniz
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>Web Sitesi (URL) - Opsiyonel</Label>
                    <Input
                      value={formData.websiteUrl}
                      onChange={e => handleInputChange("websiteUrl", e.target.value)}
                      placeholder="https://www.firmaadi.com"
                    />
                    <p className="text-xs text-gray-500">
                      Geçerli bir URL girin (http:// veya https:// ile başlamalı)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>Sosyal Medya Hesapları</Label>
                    <div className="space-y-2">
                      {formData.socialAccounts.map((acc, idx) => (
                        <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                          <Select
                            value={acc.platform}
                            onValueChange={(v: SocialAccount["platform"]) => {
                              const next = [...formData.socialAccounts]
                              next[idx] = { ...next[idx], platform: v }
                              setFormData(prev => ({ ...prev, socialAccounts: next }))
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Platform" />
                            </SelectTrigger>
                            <SelectContent>
                              {(["Instagram","Facebook","YouTube","LinkedIn"] as const).map(p => (
                                <SelectItem key={p} value={p}>{p}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Input
                            value={acc.url}
                            onChange={e => {
                              const next = [...formData.socialAccounts]
                              next[idx] = { ...next[idx], url: e.target.value }
                              setFormData(prev => ({ ...prev, socialAccounts: next }))
                            }}
                            placeholder="https://..."
                            className="sm:col-span-2"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              const next = formData.socialAccounts.filter((_, i) => i !== idx)
                              setFormData(prev => ({ ...prev, socialAccounts: next }))
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={() => setFormData(prev => ({ ...prev, socialAccounts: [...prev.socialAccounts, { platform: "Instagram", url: "" }] }))}
                      >
                        <Plus className="w-4 h-4 mr-2" /> Hesap ekle
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Sektöre Göre Otomatik Platform Önerileri */}
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <p className="font-medium">Sektöre Göre Otomatik Platform Önerileri (çoklu seçim)</p>
                  </div>
                  {formData.sector ? (
                    <div className="flex flex-wrap gap-2">
                      {(sectorRecommendations[formData.sector] || []).map(pl => {
                        const selected = formData.sectorSuggestedPlatforms.includes(pl)
                        return (
                          <button
                            key={pl}
                            type="button"
                            onClick={() => toggleArrayValue("sectorSuggestedPlatforms", pl)}
                            className={`px-3 py-1.5 rounded-full text-sm border transition ${selected ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`}
                          >
                            {pl}
                          </button>
                        )
                      })}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">Önerileri görmek için sektör seçin.</p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <Button type="button" variant="outline" onClick={handlePrev}>
                    <ChevronLeft className="w-4 h-4 mr-2" /> Geri
                  </Button>
                  <Button type="button" disabled={!step2Valid} onClick={handleNext}>
                    Devam <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Step 2 Validation Status */}
                {!step2Valid && (
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm font-medium text-yellow-800">Lütfen aşağıdaki alanları doldurun:</span>
                    </div>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      {formData.companyName.length < 2 && (
                        <li>• Firma adı en az 2 karakter olmalıdır</li>
                      )}
                      {formData.sector.length < 2 && (
                        <li>• Sektör seçimi yapmalısınız</li>
                      )}
                      {formData.productDescription.length < 10 && (
                        <li>• Ürün açıklaması en az 10 karakter olmalıdır</li>
                      )}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Hedef kitlenizi ve bütçenizi belirtin</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Aylık Reklam Bütçesi</Label>
                    <div className="flex items-center gap-2">
                      <Select
                        value={formData.budgetCurrency}
                        onValueChange={(v: Currency) => handleInputChange("budgetCurrency", v)}
                      >
                        <SelectTrigger className="w-28">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="TL">TL</SelectItem>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="EUR">EUR</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        type="number"
                        min={0}
                        value={Number.isFinite(formData.monthlyBudget) ? formData.monthlyBudget : 0}
                        onChange={e => handleInputChange("monthlyBudget", Number(e.target.value))}
                        placeholder="Örn. 25000"
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Hedef Cinsiyet</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Kadın","Erkek","Her İkisi"].map(g => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => handleInputChange("targetGender", g as FormData["targetGender"])}
                          className={`border rounded-md py-2 text-sm ${formData.targetGender===g?"border-blue-600 bg-blue-50":"border-gray-200 hover:bg-gray-50"}`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label>Hedef Yaş Aralığı</Label>
                    <div className="flex flex-wrap gap-2">
                      {ageOptions.map(a => (
                        <button
                          key={a}
                          type="button"
                          onClick={() => toggleArrayValue("targetAges", a)}
                          className={`px-3 py-1.5 rounded-full text-sm border ${formData.targetAges.includes(a)?"border-blue-600 bg-blue-50":"border-gray-200 hover:bg-gray-50"}`}
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label>Hedef Bölge (ülke/şehir)</Label>
                    <RegionEditor
                      regions={formData.targetRegions}
                      onChange={(regions) => handleInputChange("targetRegions", regions)}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button type="button" variant="outline" onClick={handlePrev}>
                    <ChevronLeft className="w-4 h-4 mr-2" /> Geri
                  </Button>
                  <Button type="button" disabled={!step3Valid} onClick={handleNext}>
                    Devam <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Sizinle iletişime geçebilmemiz için bilgilerinizi paylaşın</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Ad Soyad *</Label>
                    <Input
                      value={formData.fullName}
                      onChange={e => handleInputChange("fullName", e.target.value)}
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>E-posta *</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={e => handleInputChange("email", e.target.value)}
                      placeholder="ornek@firma.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Telefon *</Label>
                    <Input
                      value={formData.phone}
                      onChange={e => handleInputChange("phone", e.target.value)}
                      placeholder="05xx xxx xx xx"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 text-sm">
                    <Checkbox
                      checked={formData.kvkkAccepted}
                      onCheckedChange={(v) => handleInputChange("kvkkAccepted", Boolean(v))}
                    />
                    <span>
                      Kişisel verilerimin <a className="text-blue-600 hover:underline" href="/privacy" target="_blank" rel="noopener noreferrer">gizlilik politikası</a> kapsamında işlenmesini kabul ediyorum.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 text-sm">
                    <Checkbox
                      checked={formData.marketingAccepted}
                      onCheckedChange={(v) => handleInputChange("marketingAccepted", Boolean(v))}
                    />
                    <span>Tarafıma pazarlama ve kampanya iletişimi yapılmasına izin veriyorum. (Opsiyonel)</span>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <Button type="button" variant="outline" onClick={handlePrev}>
                    <ChevronLeft className="w-4 h-4 mr-2" /> Geri
                  </Button>
                  <Button type="button" disabled={!step4Valid} onClick={handleSubmit}>
                    Danışmanlık Talebini Gönder
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Navigation - Removed duplicate buttons, keeping only step-specific buttons */}
      </div>
    </section>
  )
}

function RegionEditor({ regions, onChange }: { regions: string[]; onChange: (v: string[]) => void }) {
  const [input, setInput] = useState("")
  return (
    <div>
      <div className="flex gap-2 mb-2">
        <Input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Örn. Türkiye/İstanbul veya Almanya/Berlin"
        />
        <Button
          type="button"
          onClick={() => {
            const v = input.trim()
            if (!v) return
            if (regions.includes(v)) return
            onChange([...regions, v])
            setInput("")
          }}
        >
          Ekle
        </Button>
      </div>
      {regions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {regions.map((r, idx) => (
            <Badge key={idx} variant="secondary" className="flex items-center gap-2">
              {r}
              <button
                type="button"
                onClick={() => onChange(regions.filter((_, i) => i !== idx))}
                className="hover:text-red-600"
                aria-label={`Remove ${r}`}
              >
                ×
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}