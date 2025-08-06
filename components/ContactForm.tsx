"use client"

import { useState, useEffect } from "react"
import { X, Building2, User, Mail, Phone, MapPin, Briefcase, MessageSquare } from "lucide-react"
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
  "E-Ticaret",
  "Sağlık",
  "Eğitim",
  "Finans",
  "Teknoloji",
  "Turizm",
  "Gıda",
  "İnşaat",
  "Otomotiv",
  "Medya",
  "Diğer"
]

const cities = [
  "İstanbul",
  "Ankara",
  "İzmir",
  "Bursa",
  "Antalya",
  "Adana",
  "Konya",
  "Gaziantep",
  "Kayseri",
  "Mersin",
  "Diğer"
]

const services = [
  "Web Tasarım",
  "Dijital Pazarlama",
  "SEO",
  "Grafik Tasarım",
  "CRM Sistemleri",
  "Video Prodüksiyon"
]

const contactReasons = [
  "Toplantı Talebi",
  "Fiyat Teklifi"
]

export function ContactForm({ isOpen, onClose, service }: ContactFormProps) {
  const [formData, setFormData] = useState({
    // Kurumsal Bilgiler
    companyName: "",
    sector: "",
    city: "",
    // Kişisel Bilgiler
    name: "",
    email: "",
    phone: "",
    selectedService: service || "",
    contactReason: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (service) {
      setFormData(prev => ({ ...prev, selectedService: service }))
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
      city: "",
      name: "",
      email: "",
      phone: "",
      selectedService: service || "",
      contactReason: ""
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">İletişim Formu</h2>
            <p className="text-gray-600 mt-1">Size en kısa sürede dönüş yapacağız</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Kurumsal Bilgiler */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Kurumsal Bilgiler</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              
              <div className="space-y-2">
                <Label htmlFor="city">Şehir *</Label>
                <Select value={formData.city} onValueChange={(value) => handleInputChange("city", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Şehir seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Kişisel Bilgiler */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <User className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Kişisel Bilgiler</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="service">Hizmet *</Label>
                <Select value={formData.selectedService} onValueChange={(value) => handleInputChange("selectedService", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Hizmet seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="contactReason">İletişim Nedeni *</Label>
                <Select value={formData.contactReason} onValueChange={(value) => handleInputChange("contactReason", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="İletişim nedenini seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactReasons.map((reason) => (
                      <SelectItem key={reason} value={reason}>
                        {reason}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-6 py-2"
            >
              İptal
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? "Gönderiliyor..." : "Gönder"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
