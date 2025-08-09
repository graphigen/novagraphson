"use client"

import React from "react"
import { motion } from "framer-motion"
import { Settings, CheckCircle, ArrowRight, Zap, Shield, Globe, Users, Phone, Mail, MessageCircle, Wrench, Monitor, Database, Server, HardDrive, Activity, AlertTriangle, Clock, TrendingUp } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CTABanner } from "@/components/CTABanner"

export default function ITMaintenancePage() {
  const { openForm } = useContactForm()

  const services = [
    {
      title: "Periyodik Bakım Hizmetleri",
      description: "Düzenli IT bakım hizmetleri ile sistemlerinizi optimize edin.",
      icon: Settings,
      features: [
        "Sistem Kontrolü ve Optimizasyon",
        "Güvenlik Güncellemeleri",
        "Performans İzleme",
        "Yedekleme Kontrolü",
        "Ağ İzleme ve Raporlama",
        "Donanım Bakımı"
      ],
      stats: [
        { label: "Bakım Sıklığı", value: "Aylık" },
        { label: "Uptime", value: "99.9%" },
        { label: "Destek", value: "7/24" }
      ]
    },
    {
      title: "Acil Müdahale Hizmetleri",
      description: "Kritik durumlarda hızlı müdahale ve sorun çözme.",
      icon: AlertTriangle,
      features: [
        "7/24 Acil Destek",
        "Uzaktan Müdahale",
        "Yerinde Servis",
        "Hızlı Sorun Çözümü",
        "Sistem Kurtarma",
        "Veri Güvenliği"
      ],
      stats: [
        { label: "Tepki Süresi", value: "2 Saat" },
        { label: "Çözüm Oranı", value: "98%" },
        { label: "Müşteri Memnuniyeti", value: "100%" }
      ]
    },
    {
      title: "Proaktif İzleme",
      description: "Sistemlerinizi sürekli izleyerek sorunları önceden tespit edin.",
      icon: Activity,
      features: [
        "Gerçek Zamanlı İzleme",
        "Performans Analizi",
        "Kapasite Planlama",
        "Güvenlik Taraması",
        "Otomatik Uyarılar",
        "Detaylı Raporlama"
      ],
      stats: [
        { label: "İzleme Süresi", value: "7/24" },
        { label: "Tespit Oranı", value: "95%" },
        { label: "Önleme Başarısı", value: "90%" }
      ]
    },
    {
      title: "Sistem Optimizasyonu",
      description: "Sistemlerinizi en yüksek performansta çalıştırın.",
      icon: TrendingUp,
      features: [
        "Performans Optimizasyonu",
        "Kaynak Yönetimi",
        "Hızlandırma",
        "Güvenlik Güçlendirme",
        "Yazılım Güncellemeleri",
        "Konfigürasyon"
      ],
      stats: [
        { label: "Performans Artışı", value: "40%" },
        { label: "Enerji Tasarrufu", value: "25%" },
        { label: "Güvenlik", value: "100%" }
      ]
    }
  ]

  const features = [
    {
      icon: Zap,
      title: "Hızlı Müdahale",
      description: "24 saat içinde müdahale eden uzman ekip"
    },
    {
      icon: Shield,
      title: "Güvenli Sistemler",
      description: "En son güvenlik standartlarına uygun bakım"
    },
    {
      icon: Globe,
      title: "7/24 İzleme",
      description: "Kesintisiz sistem izleme ve kontrol"
    },
    {
      icon: Users,
      title: "Uzman Ekip",
      description: "Deneyimli ve sertifikalı teknik personel"
    }
  ]

  const maintenanceTypes = [
    {
      name: "Periyodik Bakım",
      icon: Settings,
      features: ["Aylık Kontroller", "Güvenlik Güncellemeleri", "Performans Optimizasyonu"]
    },
    {
      name: "Acil Müdahale",
      icon: AlertTriangle,
      features: ["7/24 Destek", "Hızlı Müdahale", "Sorun Çözümü"]
    },
    {
      name: "Proaktif İzleme",
      icon: Activity,
      features: ["Gerçek Zamanlı", "Otomatik Uyarılar", "Önleyici Bakım"]
    },
    {
      name: "Sistem Optimizasyonu",
      icon: TrendingUp,
      features: ["Performans Artışı", "Kaynak Yönetimi", "Güvenlik"]
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
              <Settings className="w-4 h-4 flex-shrink-0" />
              <span>BT Bakım</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight px-4">
              Profesyonel <span className="text-blue-600">IT Bakım</span> Hizmetleri
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto px-4">
              İşletmenizin IT altyapısını düzenli bakım hizmetleri ile optimize ediyoruz. 
              Sistemlerinizin sürekli performanslı çalışması için kapsamlı bakım çözümleri.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => openForm("BT Bakım")}
              >
                Teklif Al
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Types Section - 4x1 Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              BT Bakım Türleri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İhtiyaçlarınıza uygun bakım çözümleri ile sistemlerinizi koruyun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenanceTypes.map((maintenance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group text-center h-full"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <maintenance.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{maintenance.name}</h3>
                <ul className="space-y-2">
                  {maintenance.features.map((feature, featureIndex) => (
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
              Neden NovaGraph BT Bakım?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profesyonel IT bakım hizmetleri ile sistemlerinizi güvende tutun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Services Grid - 2x2 Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              BT Bakım Çözümlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kapsamlı IT bakım hizmetleri ile sistemlerinizi optimize ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
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
                    <div className="grid grid-cols-3 gap-3">
                      {service.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="bg-gray-50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-blue-600">{stat.value}</div>
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

    </div>
  )
}
