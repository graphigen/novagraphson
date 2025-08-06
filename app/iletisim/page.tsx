"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ContactForm } from "@/components/ContactForm"
import { useContactForm } from "@/contexts/ContactFormContext"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ArrowRight,
  MessageSquare,
  Building2,
  User,
  CheckCircle
} from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function IletisimPage() {
  const { isOpen, service, closeForm, openForm } = useContactForm()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "+90 (212) 555 0123",
      link: "tel:+902125550123"
    },
    {
      icon: Mail,
      title: "E-posta",
      value: "info@novagraph.com.tr",
      link: "mailto:info@novagraph.com.tr"
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "Atakent, 243. Sk. No:6, 34307 Küçükçekmece/İstanbul",
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              İletişim
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Bizimle İletişime Geçin
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Projelerinizi hayata geçirmek için buradayız. Aklınızdaki fikirleri dinleyip, en doğru çözümleri birlikte üretelim.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="lg:order-1">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">İletişim Formu</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Teşekkürler!</h3>
                      <p className="text-gray-600">Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Ad Soyad *</Label>
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">E-posta *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Şirket Adı</Label>
                          <Input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            className="w-full"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Mesaj *</Label>
                        <Textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="w-full"
                          placeholder="Projeniz hakkında bize bilgi verin..."
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Gönderiliyor...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="w-4 h-4 mr-2" />
                            Gönder
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:order-2">
              <div className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{info.title}</h4>
                          <a 
                            href={info.link} 
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Working Hours */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Çalışma Saatleri</h3>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pazartesi – Cumartesi</h4>
                      <p className="text-gray-600">10.00 – 18.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                Konum
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ofislerimiz</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                İstanbul'un farklı bölgelerinde hizmet veren ofislerimiz
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* 1. Ofis */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Harita Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">NovaGraph - 1. Ofis</h3>
                        <p className="text-blue-100">Atakent, Küçükçekmece / İstanbul</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-white bg-opacity-20 rounded-full"></div>
                      <div className="w-3 h-3 bg-white bg-opacity-20 rounded-full"></div>
                      <div className="w-3 h-3 bg-white bg-opacity-20 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Google Maps */}
                <div className="relative h-80">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDWE8krTb17oA3BI_nwlo7LyOTuhrSFCPk&q=Atakent,243.Sk.No:6,34307+Küçükçekmece/İstanbul&zoom=14"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-b-2xl"
                  ></iframe>
                  
                  {/* Overlay Bilgiler */}
                  <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg px-4 py-3 max-w-xs">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">NovaGraph</div>
                        <div className="text-xs text-gray-600">1. Ofis</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-700">
                      Atakent, 243. Sk. No:6<br />
                      34307 Küçükçekmece/İstanbul
                    </div>
                  </div>
                </div>
                
                {/* Harita Alt Bilgileri */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">1. Ofis</span>
                      </div>
                    </div>
                    <a 
                      href="https://maps.google.com/?q=Atakent,243.Sk.No:6,34307+Küçükçekmece/İstanbul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
                    >
                      <span>Yol Tarifi Al</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Ofis */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Harita Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">NovaGraph - 2. Ofis</h3>
                        <p className="text-blue-100">Kemalpaşa, Küçükçekmece / İstanbul</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-white bg-opacity-20 rounded-full"></div>
                      <div className="w-3 h-3 bg-white bg-opacity-20 rounded-full"></div>
                      <div className="w-3 h-3 bg-white bg-opacity-20 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Google Maps */}
                <div className="relative h-80">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDWE8krTb17oA3BI_nwlo7LyOTuhrSFCPk&q=Kemalpaşa,Osmanbey+Sk.No:60/B,34295+Küçükçekmece/İstanbul&zoom=14"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-b-2xl"
                  ></iframe>
                  
                  {/* Overlay Bilgiler */}
                  <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg px-4 py-3 max-w-xs">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">NovaGraph</div>
                        <div className="text-xs text-gray-600">2. Ofis</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-700">
                      Kemalpaşa, Osmanbey Sk. No:60/B<br />
                      34295 Küçükçekmece/İstanbul
                    </div>
                  </div>
                </div>
                
                {/* Harita Alt Bilgileri */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">2. Ofis</span>
                      </div>
                    </div>
                    <a 
                      href="https://maps.google.com/?q=Kemalpaşa,Osmanbey+Sk.No:60/B,34295+Küçükçekmece/İstanbul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
                    >
                      <span>Yol Tarifi Al</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Hemen Tanışalım</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Birlikte güçlü projeler üretmek için ilk adımı atın.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              onClick={() => openForm("İletişim")}
            >
                              İletişime Geç
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ContactForm isOpen={isOpen} onClose={closeForm} service={service} />
    </div>
  )
} 