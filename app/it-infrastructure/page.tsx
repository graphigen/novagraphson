"use client"

import { motion } from "framer-motion"
import { Cpu, Network, Settings, CheckCircle, ArrowRight, Zap, Shield, Globe, Users, Phone, Mail, MessageCircle, Monitor, Server, HardDrive, Router } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CTABanner } from "@/components/CTABanner"

export default function ITInfrastructurePage() {
  const { openForm } = useContactForm()

  const services = [
    {
      title: "Teknolojik Ürünler",
      description: "Profesyonel teknolojik ürün seçimi ve kurulumu.",
      icon: Cpu,
      features: [
        "Bilgisayar Sistemleri",
        "Sunucu Donanımları",
        "Network Ekipmanları",
        "Depolama Çözümleri"
      ],
      stats: [
        { label: "Ürün Çeşidi", value: "1000+" },
        { label: "Garanti", value: "3 Yıl" },
        { label: "Destek", value: "7/24" }
      ]
    },
    {
      title: "Network Ağı",
      description: "Kapsamlı ağ altyapısı ve yönetimi.",
      icon: Network,
      features: [
        "Kablolama Sistemleri",
        "Wireless Network",
        "Network Güvenliği",
        "Yönetim ve İzleme"
      ],
      stats: [
        { label: "Ağ Hızı", value: "10Gbps" },
        { label: "Kapsama", value: "100%" },
        { label: "Güvenlik", value: "99.9%" }
      ]
    },
    {
      title: "Patch Panel Kurulumu",
      description: "Profesyonel patch panel sistemleri.",
      icon: Settings,
      features: [
        "Patch Panel Montajı",
        "Kablolama Testi",
        "Dokümantasyon",
        "Kalite Kontrolü"
      ],
      stats: [
        { label: "Port Sayısı", value: "48" },
        { label: "Kategori", value: "Cat6a" },
        { label: "Test", value: "100%" }
      ]
    },
    {
      title: "Switch ve VLAN Kurulumu",
      description: "Gelişmiş switch ve VLAN yapılandırması.",
      icon: Network,
      features: [
        "Switch Yapılandırması",
        "VLAN Kurulumu",
        "Güvenlik Ayarları",
        "Yönetim Arayüzü"
      ],
      stats: [
        { label: "Switch", value: "24 Port" },
        { label: "VLAN", value: "10+" },
        { label: "Yönetim", value: "Web" }
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

  const infrastructureTypes = [
    {
      name: "Teknolojik Ürünler",
      icon: Cpu,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      features: ["Bilgisayar", "Sunucu", "Network"]
    },
    {
      name: "Network Ağı",
      icon: Network,
      color: "bg-gradient-to-br from-gray-50 to-gray-100",
      borderColor: "border-gray-200",
      features: ["Kablolama", "Wireless", "Güvenlik"]
    },
    {
      name: "Patch Panel",
      icon: Settings,
      color: "bg-gradient-to-br from-blue-50 to-indigo-100",
      borderColor: "border-blue-200",
      features: ["Montaj", "Test", "Dokümantasyon"]
    },
    {
      name: "Switch & VLAN",
      icon: Network,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      features: ["Yapılandırma", "Yönetim", "Güvenlik"]
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
              <Cpu className="w-4 h-4 flex-shrink-0" />
              <span>IT Altyapısı</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight px-4">
              Güçlü <span className="text-blue-600">IT Altyapısı</span> Çözümleri
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-10 max-w-2xl mx-auto px-4">
              Güvenilir ve performanslı IT altyapısı çözümleri ile işletmenizi geleceğe taşıyoruz.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => openForm("IT Altyapısı")}
              >
                Teklif Al
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              IT Altyapısı Hizmetleri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İhtiyaçlarınıza uygun IT altyapısı çözümleri ile işletmenizi geleceğe taşıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureTypes.map((infra, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`${infra.color} ${infra.borderColor} rounded-2xl p-8 border-2 border-transparent group-hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                      <infra.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{infra.name}</h3>
                    <div className="space-y-2">
                      {infra.features.map((feature, featureIndex) => (
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
              Neden NovaGraph IT Altyapısı?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Güvenilir ve performanslı IT altyapısı çözümleri ile işletmenizi geleceğe taşıyoruz.
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

      {/* Services Grid - 2x2 Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              IT Altyapısı Çözümlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Güvenilir ve performanslı IT altyapısı çözümleri ile işletmenizi geleceğe taşıyoruz.
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
