"use client"

import { motion } from "framer-motion"
import { Mail, CheckCircle, ArrowRight, Zap, Shield, Globe, Users, Phone, MessageCircle, Lock, HardDrive, Database, Server, Settings, Monitor, Router, Network, Wifi, Eye, Bell, Flame, UserCheck } from "lucide-react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTABanner } from "@/components/CTABanner"

export default function MailLicensesPage() {
  const { openForm } = useContactForm()

  const services = [
    {
      title: "Microsoft 365",
      description: "Kurumsal Microsoft 365 çözümleri ve lisans yönetimi.",
      icon: Mail,
      features: [
        "Office 365 Kurulumu",
        "Exchange Online",
        "SharePoint Online",
        "Teams Entegrasyonu",
        "OneDrive Depolama",
        "Güvenlik ve Uyumluluk"
      ],
      stats: [
        { label: "Kullanıcı Kapasitesi", value: "1000+" },
        { label: "Depolama", value: "1TB/Kullanıcı" },
        { label: "Güvenlik", value: "Enterprise" }
      ]
    },
    {
      title: "Google Workspace",
      description: "Google Workspace kurulumu ve yönetimi.",
      icon: Globe,
      features: [
        "Gmail Kurumsal",
        "Google Drive",
        "Google Meet",
        "Admin Panel Yönetimi",
        "Google Calendar",
        "Google Docs"
      ],
      stats: [
        { label: "Kullanıcı Kapasitesi", value: "500+" },
        { label: "Depolama", value: "30GB/Kullanıcı" },
        { label: "Güvenlik", value: "2FA" }
      ]
    },
    {
      title: "Outlook Kurulumu",
      description: "Profesyonel Outlook kurulumu ve yapılandırması.",
      icon: Mail,
      features: [
        "Outlook Kurulumu",
        "E-posta Yapılandırması",
        "Takvim Senkronizasyonu",
        "Güvenlik Ayarları",
        "Otomatik Yedekleme",
        "Mobil Erişim"
      ],
      stats: [
        { label: "Kurulum Süresi", value: "2 Saat" },
        { label: "Senkronizasyon", value: "Gerçek Zamanlı" },
        { label: "Güvenlik", value: "SSL/TLS" }
      ]
    }
  ]

  const features = [
    {
      icon: Zap,
      title: "Hızlı Kurulum",
      description: "24 saat içinde tamamlanan profesyonel kurulum"
    },
    {
      icon: Shield,
      title: "Güvenli Sistemler",
      description: "En son güvenlik standartlarına uygun sistemler"
    },
    {
      icon: Globe,
      title: "7/24 Destek",
      description: "Kesintisiz teknik destek ve bakım hizmeti"
    },
    {
      icon: Users,
      title: "Uzman Ekip",
      description: "Deneyimli ve sertifikalı teknik personel"
    }
  ]

  const licenseTypes = [
    {
      name: "Microsoft 365",
      icon: Mail,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      features: ["Office Uygulamaları", "Cloud Depolama", "Teams", "Exchange"]
    },
    {
      name: "Google Workspace",
      icon: Globe,
      color: "bg-gradient-to-br from-gray-50 to-blue-50",
      borderColor: "border-gray-200",
      features: ["Gmail", "Drive", "Meet", "Calendar"]
    },
    {
      name: "Outlook",
      icon: Mail,
      color: "bg-gradient-to-br from-blue-50 to-indigo-100",
      borderColor: "border-blue-200",
      features: ["E-posta", "Takvim", "Kişiler", "Görevler"]
    },
    {
      name: "Lisans Yönetimi",
      icon: Lock,
      color: "bg-gradient-to-br from-gray-50 to-gray-100",
      borderColor: "border-gray-200",
      features: ["Lisans Takibi", "Yenileme", "Optimizasyon", "Raporlama"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center justify-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 lg:mb-8 shadow-sm">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>Mail & Lisans</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight px-4">
              Profesyonel <span className="text-blue-600">Mail Sistemleri</span> ve Lisans Yönetimi
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-10 max-w-2xl mx-auto px-4">
              Kurumsal mail sistemleri kurulumu ve lisans yönetimi hizmetleri. 
              Microsoft 365, Google Workspace ve Outlook çözümleri.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => openForm("Mail & Lisans")}
              >
                Teklif Al
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* License Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mail & Lisans Türleri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İhtiyaçlarınıza uygun mail sistemleri ve lisans çözümleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {licenseTypes.map((license, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group text-center h-full"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <license.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{license.name}</h3>
                <ul className="space-y-2">
                  {license.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Neden NovaGraph Mail & Lisans?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kurumsal mail sistemleri ve lisans yönetimi için kapsamlı çözümler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - 3x1 Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mail & Lisans Çözümlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kurumsal mail sistemleri ve lisans yönetimi için kapsamlı çözümler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group h-full"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Özellikler</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">İstatistikler</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="bg-gray-50 rounded-lg p-3 text-center">
                          <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                          <div className="text-xs text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Ana sayfadaki gibi */}
      <CTABanner />

      <Footer />
    </div>
  )
}
