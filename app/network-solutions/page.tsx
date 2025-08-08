"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle, ArrowRight, Zap, Globe, Users, Phone, Mail, MessageCircle, Network, Wifi, Router, Server, HardDrive, Database, Lock, Eye, Bell, Flame, UserCheck, Cpu, Settings, Monitor } from "lucide-react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTABanner } from "@/components/CTABanner"

export default function NetworkSolutionsPage() {
  const { openForm } = useContactForm()

  const services = [
    {
      title: "Firewall Kurulumu",
      description: "Güvenli ve güvenilir ağ koruma sistemleri.",
      icon: Shield,
      features: [
        "Hardware Firewall",
        "Software Firewall", 
        "Cloud Firewall",
        "Güvenlik Politikaları"
      ],
      stats: [
        { label: "Koruma Oranı", value: "99.9%" },
        { label: "Tepki Süresi", value: "<1ms" },
        { label: "Uptime", value: "99.9%" }
      ]
    },
    {
      title: "Antivirüs Kurulumu",
      description: "Kapsamlı virüs koruması ve güvenlik çözümleri.",
      icon: Shield,
      features: [
        "Gerçek Zamanlı Koruma",
        "Otomatik Güncelleme",
        "Web Filtreleme",
        "E-posta Güvenliği"
      ],
      stats: [
        { label: "Virüs Tespiti", value: "100%" },
        { label: "Güncelleme", value: "Otomatik" },
        { label: "Performans", value: "Minimal" }
      ]
    },
    {
      title: "Network Kurulumu",
      description: "Profesyonel ağ altyapısı ve yönetimi.",
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
      title: "Wireless Network",
      description: "Hızlı ve güvenli kablosuz ağ çözümleri.",
      icon: Wifi,
      features: [
        "Wi-Fi 6 Teknolojisi",
        "Mesh Network",
        "Güvenlik Protokolleri",
        "Performans Optimizasyonu"
      ],
      stats: [
        { label: "Hız", value: "9.6Gbps" },
        { label: "Kapsama", value: "500m²" },
        { label: "Cihaz", value: "100+" }
      ]
    }
  ]

  const features = [
    {
      icon: Shield,
      title: "Güvenli Ağ",
      description: "En son güvenlik teknolojileri ile korunan ağlar"
    },
    {
      icon: Zap,
      title: "Hızlı Performans",
      description: "Yüksek hızda ve düşük gecikme süreli ağlar"
    },
    {
      icon: Globe,
      title: "7/24 İzleme",
      description: "Kesintisiz ağ izleme ve yönetim hizmeti"
    },
    {
      icon: Users,
      title: "Uzman Destek",
      description: "Deneyimli network uzmanlarından destek"
    }
  ]

  const firewallTypes = [
    {
      name: "Hardware Firewall",
      icon: Shield,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      features: ["Fiziksel Cihaz", "Yüksek Performans", "Enterprise"]
    },
    {
      name: "Software Firewall",
      icon: Shield,
      color: "bg-gradient-to-br from-gray-50 to-gray-100",
      borderColor: "border-gray-200",
      features: ["Yazılım Tabanlı", "Esnek Yapılandırma", "Maliyet Etkin"]
    },
    {
      name: "Cloud Firewall",
      icon: Shield,
      color: "bg-gradient-to-br from-blue-50 to-indigo-100",
      borderColor: "border-blue-200",
      features: ["Bulut Tabanlı", "Ölçeklenebilir", "7/24 Erişim"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center justify-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 lg:mb-8 shadow-sm">
              <Shield className="w-4 h-4 flex-shrink-0" />
              <span>Ağ Çözümleri</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight px-4">
              Güvenli <span className="text-blue-600">Ağ Altyapısı</span> Çözümleri
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-10 max-w-2xl mx-auto px-4">
              İşletmenizin ağ güvenliğini en üst seviyede tutan firewall, antivirüs ve network çözümleri. 
              Hızlı, güvenli ve ölçeklenebilir ağ altyapısı.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => openForm("Ağ Çözümleri")}
              >
                Teklif Al
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Firewall Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Firewall Türleri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İhtiyaçlarınıza uygun firewall çözümleri ile ağınızı koruyun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firewallTypes.map((firewall, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`${firewall.color} ${firewall.borderColor} rounded-2xl p-8 border-2 border-transparent group-hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                      <firewall.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{firewall.name}</h3>
                    <div className="space-y-2">
                      {firewall.features.map((feature, featureIndex) => (
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
              Neden NovaGraph Ağ Çözümleri?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Güvenli ve performanslı ağ çözümleri ile işletmenizi geleceğe taşıyoruz.
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
              Ağ Çözümlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Güvenli ve performanslı ağ çözümleri ile işletmenizi geleceğe taşıyoruz.
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
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
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
                  {service.title === "Firewall Kurulumu" && (
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 border border-blue-200 shadow-xl">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Shield className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Ağ Güvenlik Duvarı</h3>
                        </div>
                        <div className="relative">
                          {/* World Network Visualization */}
                          <div className="relative w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-4 mb-4">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center">
                                <Globe className="w-12 h-12 text-blue-600" />
                              </div>
                            </div>
                            {/* Network Connections */}
                            <div className="absolute top-4 left-4 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
                            <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
                            <div className="absolute bottom-4 left-4 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
                            <div className="absolute bottom-4 right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
                            {/* Firewall Shield */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center border-4 border-red-300">
                                <Shield className="w-16 h-16 text-red-600" />
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            {[
                              { value: "99.9%", label: "Koruma", color: "text-red-600" },
                              { value: "7/24", label: "İzleme", color: "text-blue-600" },
                              { value: "Gerçek Zamanlı", label: "Tespit", color: "text-green-600" }
                            ].map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-xl p-3 text-center shadow-sm"
                              >
                                <div className={`text-lg font-bold ${item.color}`}>{item.value}</div>
                                <div className="text-xs text-gray-600">{item.label}</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {service.title === "Antivirüs Kurulumu" && (
                    <div className="relative">
                      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200 shadow-xl">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Shield className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Antivirüs Koruması</h3>
                        </div>
                        <div className="space-y-4">
                          {[
                            { label: "Virüs Tespiti", value: "100%", progress: 100, color: "bg-green-500" },
                            { label: "Güncelleme", value: "Otomatik", progress: 85, color: "bg-blue-500" },
                            { label: "Performans", value: "Minimal", progress: 95, color: "bg-purple-500" }
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

                  {service.title === "Network Kurulumu" && (
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 border border-blue-200 shadow-xl">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Network className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Network Altyapısı</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { value: "10Gbps", label: "Ağ Hızı", color: "text-blue-600" },
                            { value: "100%", label: "Kapsama", color: "text-green-600" },
                            { value: "99.9%", label: "Güvenlik", color: "text-purple-600" },
                            { value: "7/24", label: "Destek", color: "text-orange-600" }
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                              className="bg-white rounded-xl p-4 text-center shadow-sm"
                            >
                              <div className={`text-lg font-bold ${item.color}`}>{item.value}</div>
                              <div className="text-xs text-gray-600">{item.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {service.title === "Wireless Network" && (
                    <div className="relative">
                      <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-3xl p-8 border border-indigo-200 shadow-xl">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Wifi className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Wi-Fi 6 Teknolojisi</h3>
                        </div>
                        <div className="space-y-4">
                          {[
                            { label: "Hız", value: "9.6Gbps", color: "text-indigo-600" },
                            { label: "Kapsama", value: "500m²", color: "text-blue-600" },
                            { label: "Cihaz", value: "100+", color: "text-green-600" }
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

      <Footer />
    </div>
  )
}
