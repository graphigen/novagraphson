"use client"

import { useState, useEffect } from "react"
import { X, Building2, User, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { validateContactForm, sanitizeInput } from "@/lib/validation"

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
  service?: string
}

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

// Removed city selection per request

const serviceCategories = [
  {
    value: "digital",
    label: "Dijital Çözümler",
    services: [
      "Web Tasarım",
      "Dijital Pazarlama",
      "SEO",
      "Grafik Tasarım",
      "Video Prodüksiyon",
      "CRM Sistemleri",
    ],
  },
  {
    value: "it-security",
    label: "IT & Güvenlik Çözümleri",
    services: [
      "Altyapı Hizmetleri",
      "Ağ Çözümleri",
      "Sunucu Sistemleri",
      "Bulut & Backup",
      "Mail & Lisans",
      "Teknik Servis",
      "BT Bakım",
      "Güvenlik Sistemleri",
    ],
  },
]

// Removed contact reason selection per request

export function ContactForm({ isOpen, onClose, service }: ContactFormProps) {
  const [formData, setFormData] = useState({
    // Kurumsal Bilgiler
    companyName: "",
    sector: "",
    // Kişisel Bilgiler
    name: "",
    email: "",
    phone: "",
    serviceCategory: "",
    selectedService: service || "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationErrors, setValidationErrors] = useState<string[]>([])
  const [showSuccess, setShowSuccess] = useState(false)

  const findCategoryByService = (svc: string) => {
    const matched = serviceCategories.find(cat => cat.services.includes(svc))
    return matched?.value || ""
  }

  useEffect(() => {
    if (service) {
      const category = findCategoryByService(service)
      setFormData(prev => ({ ...prev, selectedService: service, serviceCategory: category }))
    }
  }, [service])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Form validation
    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      setValidationErrors(validation.errors)
      return
    }
    
    // Clear previous errors
    setValidationErrors([])
    setIsSubmitting(true)
    
    try {
      // Mail gönderme API'sine istek
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.companyName,
          service: formData.selectedService,
          message: `${formData.companyName} firmasından ${formData.name} kişisi ${formData.selectedService} hizmeti için başvuru yapmıştır.`,
          formType: 'popup'
        }),
      });

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || 'Mail gönderilemedi');
      }
      
      setShowSuccess(true)
      
      // Auto-close success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false)
        onClose()
      }, 3000)
      
    } catch (error) {
      console.error("Form submission error:", error)
      setValidationErrors(["Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin."])
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    // Sanitize input
    const sanitizedValue = sanitizeInput(value)
    
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }))
    
    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([])
    }
  }

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[200] p-3">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg md:max-w-xl p-6 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Teşekkürler!</h2>
          <p className="text-gray-600 mb-4">Form başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</p>
          
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Firma:</strong> {formData.companyName}</p>
            <p><strong>Ad Soyad:</strong> {formData.name}</p>
            <p><strong>Hizmet:</strong> {formData.selectedService}</p>
          </div>
          
          <Button 
            onClick={onClose} 
            className="mt-6 w-full"
            variant="outline"
          >
            Kapat
          </Button>
        </div>
      </div>
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[200] p-3">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg md:max-w-xl max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">İletişim Formu</h2>
            <p className="text-gray-600 mt-0.5 text-sm">Size en kısa sürede dönüş yapacağız</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Validation Errors */}
        {validationErrors.length > 0 && (
          <div className="mx-4 mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-red-600" />
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-5 text-sm">
          {/* Kurumsal Bilgiler */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-3">
              <Building2 className="w-5 h-5 text-blue-600" />
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Kurumsal Bilgiler</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="companyName">Firma Ünvanı *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  placeholder="Firma adınızı girin"
                  required
                  maxLength={100}
                  minLength={2}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="sector">Sektör *</Label>
                <Select value={formData.sector} onValueChange={(value) => handleInputChange("sector", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sektör seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map((sector) => (
                      <SelectItem key={sector} value={sector}>
                        {sector}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Kişisel Bilgiler */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-3">
              <User className="w-5 h-5 text-blue-600" />
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Kişisel Bilgiler</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="name">Ad Soyad *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Adınızı ve soyadınızı girin"
                  required
                  maxLength={50}
                  minLength={2}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-posta *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="E-posta adresinizi girin"
                  required
                  maxLength={254}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Telefon numaranızı girin"
                  required
                  maxLength={15}
                  minLength={8}
                />
              </div>
              
              {/* Hizmet Seçimi - Adım 1: Kategori */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="serviceCategory">Hizmet Kategorisi *</Label>
                <Select
                  value={formData.serviceCategory}
                  onValueChange={(value) => handleInputChange("serviceCategory", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Hizmet kategorisi seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Hizmet Seçimi - Adım 2: Spesifik Hizmet */}
              {formData.serviceCategory && (
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="selectedService">Hizmet *</Label>
                  <Select
                    value={formData.selectedService}
                    onValueChange={(value) => handleInputChange("selectedService", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Hizmet seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceCategories
                        .find(cat => cat.value === formData.serviceCategory)
                        ?.services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Gönderiliyor..." : "Formu Gönder"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
