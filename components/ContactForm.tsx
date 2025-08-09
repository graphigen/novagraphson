"use client"

import { useState, useEffect } from "react"
import { X, Building2, User, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

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
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    
    setIsSubmitting(false)
    onClose()

    // Reset form
    setFormData({
      companyName: "",
      sector: "",
      name: "",
      email: "",
      phone: "",
      serviceCategory: service ? findCategoryByService(service) : "",
      selectedService: service || "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
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
                />
              </div>
              
              {/* Hizmet Seçimi - Adım 1: Kategori */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="serviceCategory">Hizmet Kategorisi *</Label>
                <Select
                  value={formData.serviceCategory}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, serviceCategory: value, selectedService: "" }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Kategori seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Hizmet Seçimi - Adım 2: Alt Hizmet */}
              {formData.serviceCategory && (
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="service">Hizmet *</Label>
                  <Select
                    value={formData.selectedService}
                    onValueChange={(value) => handleInputChange("selectedService", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Hizmet seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceCategories
                        .find((cat) => cat.value === formData.serviceCategory)?.services
                        .map((svc) => (
                          <SelectItem key={svc} value={svc}>
                            {svc}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3 pt-5 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-5 py-2"
            >
              İptal
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? "Gönderiliyor..." : "Gönder"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
