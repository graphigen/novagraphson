"use client"

import { motion } from "framer-motion"
import { Server, CheckCircle, ArrowRight, Zap, Shield, Globe, Users, Phone, Mail, MessageCircle, HardDrive, Database, Cpu, Settings, Monitor, Router, Network, Wifi, Lock, Eye, Bell, Flame, UserCheck } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CTABanner } from "@/components/CTABanner"

export default function ServerSystemsPage() {
  const { openForm } = useContactForm()

  const services = [
    {
      title: "Sunucu Kurulumları",
      description: "Profesyonel sunucu kurulumu ve yapılandırması.",
      icon: Server,
      features: [
        "Sunucu Donanım Seçimi",
        "İşletim Sistemi Kurulumu",
        "Yapılandırma ve Optimizasyon",
        "Test ve Doğrulama"
      ],
      stats: [
        { label: "Kurulum Süresi", value: "24h" },
        { label: "Garanti", value: "3 Yıl" },
        { label: "Uptime", value: "99.9%" }
      ]
    },
    {
      title: "NAS Cihazı Kurulumu",
      description: "Güvenli ve erişilebilir depolama çözümleri.",
      icon: HardDrive,
      features: [
        "NAS Cihazı Seçimi",
        "Kurulum ve Yapılandırma",
        "Kullanıcı Yönetimi",
        "Yedekleme Stratejileri"
      ],
      stats: [
        { label: "Depolama", value: "10TB+" },
        { label: "Erişim", value: "7/24" },
        { label: "Güvenlik", value: "AES-256" }
      ]
    },
    {
      title: "İmaj Kurulumu",
      description: "Hızlı ve güvenilir sistem imajları.",
      icon: Database,
      features: [
        "Sistem İmajı Oluşturma",
        "Deployment Stratejileri",
        "Otomatik Kurulum",
        "Güncelleme Yönetimi"
      ],
      stats: [
        { label: "Kurulum Süresi", value: "15dk" },
        { label: "Başarı Oranı", value: "100%" },
        { label: "Otomasyon", value: "Tam" }
      ]
    },
    {
      title: "SQL Server",
      description: "Veritabanı sunucu kurulumu ve yönetimi.",
      icon: Database,
      features: [
        "SQL Server Kurulumu",
        "Veritabanı Tasarımı",
        "Performans Optimizasyonu",
        "Güvenlik Yapılandırması"
      ],
      stats: [
        { label: "Performans", value: "1000+ TPS" },
        { label: "Güvenlik", value: "SSL/TLS" },
        { label: "Yedekleme", value: "Otomatik" }
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

  const operatingSystems = [
    {
      name: "Ubuntu Server",
      version: "22.04 LTS",
      icon: Server,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      features: ["LTS Desteği", "Güvenlik", "Performans"]
    },
    {
      name: "CentOS",
      version: "8.x",
      icon: Server,
      color: "bg-gradient-to-br from-gray-50 to-gray-100",
      borderColor: "border-gray-200",
      features: ["Enterprise", "Stabilite", "Uyumluluk"]
    },
    {
      name: "Windows Server",
      version: "2022",
      icon: Server,
      color: "bg-gradient-to-br from-blue-50 to-indigo-100",
      borderColor: "border-blue-200",
      features: ["Active Directory", "GUI", "Microsoft Ecosystem"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center justify-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 lg:mb-8 shadow-sm">
              <Server className="w-4 h-4 flex-shrink-0" />
              <span>Sunucu Sistemleri</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight px-4">
              Güçlü <span className="text-blue-600">Sunucu Altyapısı</span> Çözümleri
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto px-4">
              İşletmenizin ihtiyaçlarına özel sunucu sistemleri kurulumu ve yönetimi. 
              Güvenilir, ölçeklenebilir ve performanslı çözümler.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => openForm("Sunucu Sistemleri")}
              >
                Teklif Al
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Systems Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Desteklenen İşletim Sistemleri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En popüler ve güvenilir işletim sistemleri ile sunucu kurulumu yapıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {operatingSystems.map((os, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`${os.color} ${os.borderColor} rounded-2xl p-8 border-2 border-transparent group-hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                      <os.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{os.name}</h3>
                    <Badge className="bg-blue-100 text-blue-800 mb-4">{os.version}</Badge>
                    <div className="space-y-2">
                      {os.features.map((feature, featureIndex) => (
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Neden NovaGraph Sunucu Sistemleri?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Güvenilir ve performanslı sunucu çözümleri ile işletmenizi geleceğe taşıyoruz.
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Custom Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sunucu Sistemlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Güvenilir ve performanslı sunucu çözümleri ile işletmenizi geleceğe taşıyoruz.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Service Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Özellikler</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">İstatistikler</h4>
                        <div className="space-y-3">
                          {service.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                              <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Custom UI Component */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  {service.title === "Sunucu Kurulumları" && (
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 border border-blue-200 shadow-xl">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Server className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Sunucu Kurulum Süreci</h3>
                        </div>
                        <div className="space-y-4">
                          {[
                            { step: 1, title: "Donanım Seçimi", color: "bg-blue-500" },
                            { step: 2, title: "OS Kurulumu", color: "bg-blue-500" },
                            { step: 3, title: "Yapılandırma", color: "bg-blue-500" },
                            { step: 4, title: "Test & Doğrulama", color: "bg-green-500" }
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                              className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                            >
                              <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                                {item.step}
                              </div>
                              <span className="text-gray-700 font-medium">{item.title}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {service.title === "NAS Cihazı Kurulumu" && (
                    <div className="relative">
                      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200 shadow-xl">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <HardDrive className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">NAS Depolama Sistemi</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { value: "10TB+", label: "Depolama", color: "text-blue-600" },
                            { value: "7/24", label: "Erişim", color: "text-green-600" },
                            { value: "AES-256", label: "Şifreleme", color: "text-purple-600" },
                            { value: "100%", label: "Güvenlik", color: "text-orange-600" }
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                              className="bg-white rounded-xl p-4 text-center shadow-sm"
                            >
                              <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
                              <div className="text-sm text-gray-600">{item.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {service.title === "İmaj Kurulumu" && (
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 border border-blue-200 shadow-xl">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Database className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Otomatik İmaj Sistemi</h3>
                        </div>
                        <div className="space-y-4">
                          {[
                            { label: "Kurulum Süresi", value: "15dk", progress: 90, color: "bg-green-500" },
                            { label: "Başarı Oranı", value: "100%", progress: 100, color: "bg-blue-500" }
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                              className="bg-white rounded-xl p-4 shadow-sm"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                                <span className="text-sm font-bold text-blue-600">{item.value}</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${item.progress}%` }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                  className={`${item.color} h-2 rounded-full`}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {service.title === "SQL Server" && (
                    <div className="relative">
                      <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-3xl p-8 border border-indigo-200 shadow-xl">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Database className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Veritabanı Performansı</h3>
                        </div>
                        <div className="space-y-4">
                          {[
                            { label: "TPS", value: "1000+", color: "text-indigo-600" },
                            { label: "Güvenlik", value: "SSL/TLS", color: "text-green-600" },
                            { label: "Yedekleme", value: "Otomatik", color: "text-blue-600" }
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                              className="bg-white rounded-xl p-4 shadow-sm"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                                <span className={`text-lg font-bold ${item.color}`}>{item.value}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
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
