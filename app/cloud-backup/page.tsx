"use client"

import { motion } from "framer-motion"
import { Cloud, CheckCircle, ArrowRight, Zap, Shield, Globe, Users, Phone, Mail, MessageCircle, HardDrive, Database, Server, Settings, Monitor, Router, Network, Wifi, Lock, Eye, Bell, Flame, UserCheck } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CTABanner } from "@/components/CTABanner"

export default function CloudBackupPage() {
  const { openForm } = useContactForm()

  const services = [
    {
      title: "Bulut Yedekleme",
      description: "Güvenli ve erişilebilir bulut yedekleme çözümleri.",
      icon: Cloud,
      features: [
        "Otomatik Yedekleme",
        "Şifreli Depolama",
        "Hızlı Geri Yükleme",
        "7/24 Erişim"
      ],
      stats: [
        { label: "Depolama", value: "1TB+" },
        { label: "Şifreleme", value: "AES-256" },
        { label: "Erişim", value: "7/24" }
      ]
    },
    {
      title: "Yerel Yedekleme",
      description: "Yerel ağda güvenli yedekleme sistemleri.",
      icon: HardDrive,
      features: [
        "NAS Yedekleme",
        "Disk Yedekleme",
        "Ağ Yedekleme",
        "Otomatik Senkronizasyon"
      ],
      stats: [
        { label: "Kapasite", value: "10TB+" },
        { label: "Hız", value: "1Gbps" },
        { label: "Güvenlik", value: "100%" }
      ]
    }
  ]

  const features = [
    {
      icon: Zap,
      title: "Hızlı Yedekleme",
      description: "Otomatik ve hızlı yedekleme işlemleri"
    },
    {
      icon: Shield,
      title: "Güvenli Depolama",
      description: "En son şifreleme teknolojileri"
    },
    {
      icon: Globe,
      title: "7/24 Erişim",
      description: "Kesintisiz erişim ve yönetim"
    },
    {
      icon: Users,
      title: "Uzman Ekip",
      description: "Deneyimli ve sertifikalı teknik personel"
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
              <Cloud className="w-4 h-4 flex-shrink-0" />
              <span>Bulut & Backup</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight px-4">
              Güvenli <span className="text-blue-600">Yedekleme</span> Çözümleri
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-10 max-w-2xl mx-auto px-4">
              Güvenli ve erişilebilir yedekleme çözümleri ile verilerinizi koruyoruz.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => openForm("Bulut & Backup")}
              >
                Teklif Al
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Neden NovaGraph Bulut & Backup?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Güvenli ve erişilebilir yedekleme çözümleri ile verilerinizi koruyoruz.
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

      {/* Services Grid - 2x1 Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bulut & Backup Çözümlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Güvenli ve erişilebilir yedekleme çözümleri ile verilerinizi koruyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <service.icon className="w-10 h-10 text-blue-600" />
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
                    <div className="grid grid-cols-1 gap-3">
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
