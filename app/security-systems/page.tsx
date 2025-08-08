"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle, ArrowRight, Zap, Globe, Users, Phone, Mail, MessageCircle, Camera, Bell, Flame, UserCheck, HardDrive, Database, Server, Settings, Monitor, Router, Network, Wifi, Lock, Eye } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CTABanner } from "@/components/CTABanner"

export default function SecuritySystemsPage() {
  const { openForm } = useContactForm()

  const services = [
    {
      title: "IP Kamera Kurulumu",
      description: "Yüksek çözünürlüklü IP kamera sistemleri.",
      icon: Camera,
      features: [
        "4K Çözünürlük",
        "Gece Görüşü",
        "Uzaktan İzleme",
        "Kayıt Sistemi"
      ],
      stats: [
        { label: "Çözünürlük", value: "4K" },
        { label: "Gece Görüşü", value: "50m" },
        { label: "Kayıt", value: "30 Gün" }
      ]
    },
    {
      title: "Alarm Sistemleri",
      description: "Güvenilir alarm ve sensör sistemleri.",
      icon: Bell,
      features: [
        "Sensör Ağı",
        "Merkezi İzleme",
        "Mobil Bildirim",
        "7/24 Koruma"
      ],
      stats: [
        { label: "Sensör Sayısı", value: "20+" },
        { label: "Tepki Süresi", value: "3sn" },
        { label: "Güvenlik", value: "99.9%" }
      ]
    },
    {
      title: "Yangın Sistemleri",
      description: "Erken uyarı ve söndürme sistemleri.",
      icon: Flame,
      features: [
        "Algılama",
        "Söndürme",
        "Acil Bildirim",
        "Otomatik Sistem"
      ],
      stats: [
        { label: "Algılama", value: "Gerçek Zamanlı" },
        { label: "Söndürme", value: "Otomatik" },
        { label: "Bildirim", value: "5sn" }
      ]
    },
    {
      title: "PDKS Sistemleri",
      description: "Personel devam kontrolü ve geçiş sistemleri.",
      icon: UserCheck,
      features: [
        "Geçiş Kontrolü",
        "Yüz Tanıma",
        "Raporlama",
        "Zaman Takibi"
      ],
      stats: [
        { label: "Kullanıcı", value: "1000+" },
        { label: "Tanıma Süresi", value: "0.5sn" },
        { label: "Doğruluk", value: "99.9%" }
      ]
    }
  ]

  const features = [
    {
      icon: Shield,
      title: "Güvenli Sistemler",
      description: "En son güvenlik teknolojileri ile korunan sistemler"
    },
    {
      icon: Zap,
      title: "Hızlı Tepki",
      description: "Saniyeler içinde tepki veren alarm sistemleri"
    },
    {
      icon: Globe,
      title: "7/24 İzleme",
      description: "Kesintisiz güvenlik izleme ve yönetim hizmeti"
    },
    {
      icon: Users,
      title: "Uzman Destek",
      description: "Deneyimli güvenlik uzmanlarından destek"
    }
  ]

  const securityTypes = [
    {
      name: "IP Kamera",
      icon: Camera,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      features: ["4K Çözünürlük", "Gece Görüşü", "Uzaktan İzleme"]
    },
    {
      name: "Alarm Sistemi",
      icon: Bell,
      color: "bg-gradient-to-br from-gray-50 to-gray-100",
      borderColor: "border-gray-200",
      features: ["Sensör Ağı", "Merkezi İzleme", "Mobil Bildirim"]
    },
    {
      name: "Yangın Sistemi",
      icon: Flame,
      color: "bg-gradient-to-br from-blue-50 to-indigo-100",
      borderColor: "border-blue-200",
      features: ["Algılama", "Söndürme", "Acil Bildirim"]
    },
    {
      name: "PDKS Sistemi",
      icon: UserCheck,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      features: ["Geçiş Kontrolü", "Yüz Tanıma", "Raporlama"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center justify-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 lg:mb-8 shadow-sm">
              <Shield className="w-4 h-4 flex-shrink-0" />
              <span>Güvenlik Sistemleri</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight px-4">
              Güvenilir <span className="text-blue-600">Güvenlik Sistemleri</span> Çözümleri
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-10 max-w-2xl mx-auto px-4">
              Güvenilir ve akıllı güvenlik sistemleri ile işletmenizi koruyoruz.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => openForm("Güvenlik Sistemleri")}
              >
                Teklif Al
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Güvenlik Sistemleri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İhtiyaçlarınıza uygun güvenlik çözümleri ile işletmenizi koruyun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityTypes.map((security, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`${security.color} ${security.borderColor} rounded-2xl p-8 border-2 border-transparent group-hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                      <security.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{security.name}</h3>
                    <div className="space-y-2">
                      {security.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-700">{feature}</span>
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

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Neden NovaGraph Güvenlik Sistemleri?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Güvenilir ve akıllı güvenlik sistemleri ile işletmenizi koruyoruz.
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

      {/* Services Grid - 4x1 Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Güvenlik Sistemleri Çözümlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Güvenilir ve akıllı güvenlik sistemleri ile işletmenizi koruyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0">
                    <service.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-3">İstatistikler</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {service.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="bg-gray-50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
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

    </div>
  )
}
