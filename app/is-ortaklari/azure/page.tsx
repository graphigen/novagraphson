"use client"

import React from "react"
import { motion } from "framer-motion"
import { Cloud, Server, Database, Shield, Zap, Globe, Users, CheckCircle, ArrowRight, Activity, Lock, Cpu, HardDrive, Network, Monitor, TrendingUp, Scale, Globe2, ArrowLeft, ShoppingCart } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
 

export default function AzurePage() {
  const { openForm } = useContactForm()

  const features = [
    {
      icon: Cloud,
      title: "Bulut Altyapısı",
      description: "Ölçeklenebilir ve güvenilir bulut altyapısı çözümleri"
    },
    {
      icon: Server,
      title: "Sanal Makineler",
      description: "Yüksek performanslı sanal makine hizmetleri"
    },
    {
      icon: Database,
      title: "Veritabanı Hizmetleri",
      description: "Yönetilen veritabanı ve depolama çözümleri"
    },
    {
      icon: Shield,
      title: "Güvenlik",
      description: "Endüstri standardı güvenlik ve uyumluluk"
    }
  ]

  const solutions = [
    {
      title: "Azure Virtual Machines",
      description: "Ölçeklenebilir sanal makine hizmetleri ile işletmenizin işlem gücü ihtiyaçlarını karşılayın",
      benefits: [
        "Windows ve Linux VM desteği",
        "Otomatik ölçeklendirme",
        "Yüksek erişilebilirlik",
        "Maliyet optimizasyonu"
      ],
      novaGraphUsage: "Müşterilerin web uygulamaları ve sistemleri için güvenilir hosting altyapısı sağlama"
    },
    {
      title: "Azure App Services",
      description: "Web uygulamalarınızı kolayca geliştirin, dağıtın ve ölçeklendirin",
      benefits: [
        "Çoklu dil desteği",
        "Otomatik ölçeklendirme",
        "SSL sertifika yönetimi",
        "DevOps entegrasyonu"
      ],
      novaGraphUsage: "Müşteri web uygulamalarının hızlı geliştirilmesi ve dağıtılması"
    },
    {
      title: "Azure SQL Database",
      description: "Yönetilen ilişkisel veritabanı hizmeti ile veritabanı yönetimi kolaylaşır",
      benefits: [
        "Otomatik yedekleme ve güncelleme",
        "Yüksek erişilebilirlik",
        "Güvenlik ve uyumluluk",
        "Akıllı performans"
      ],
      novaGraphUsage: "Müşteri uygulamaları için güvenilir ve yönetilen veritabanı altyapısı kurma"
    },
    {
      title: "Azure Functions",
      description: "Sunucusuz bilgi işlem ile uygulamalarınızı optimize edin",
      benefits: [
        "Sunucusuz mimari",
        "Otomatik ölçeklendirme",
        "Çoklu dil desteği",
        "Maliyet etkinlik"
      ],
      novaGraphUsage: "Müşteri uygulamalarının sunucusuz mimari ile optimize edilmesi"
    }
  ]

  const useCases = [
    {
      title: "Web Uygulaması Hosting",
      description: "Web uygulamalarınızı Azure'da güvenli ve ölçeklenebilir şekilde barındırın",
      icon: Globe,
      benefits: [
        "Yüksek erişilebilirlik ve performans",
        "Otomatik ölçeklendirme",
        "Güvenlik ve uyumluluk",
        "Maliyet optimizasyonu"
      ]
    },
    {
      title: "Veri Yedekleme ve Arşivleme",
      description: "Kritik verilerinizi güvenli şekilde yedekleyin ve arşivleyin",
      icon: Database,
      benefits: [
        "Otomatik yedekleme stratejileri",
        "Uzun süreli arşivleme",
        "Veri kurtarma çözümleri",
        "Maliyet etkin depolama"
      ]
    },
    {
      title: "E-ticaret Altyapısı",
      description: "E-ticaret siteleriniz için güvenilir ve ölçeklenebilir altyapı",
      icon: ShoppingCart,
      benefits: [
        "Yüksek trafik desteği",
        "Güvenli ödeme altyapısı",
        "Stok yönetimi entegrasyonu",
        "Müşteri verisi koruması"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-blue-900">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-blue-800">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="flex justify-start mb-8">
              <Link href="/is-ortaklari">
                <Button variant="outline" className="flex items-center gap-2 bg-white backdrop-blur-md border-white/20 text-[#003c71] hover:bg-white/30">
                  <ArrowLeft className="w-4 h-4" />
                  Geri Dön
                </Button>
              </Link>
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center space-x-2 bg-white backdrop-blur-md text-[#003c71] px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg border border-white/20"
            >
              <Cloud className="w-4 h-4 flex-shrink-0" />
              <span>İş Ortağımız</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#003c71] mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-100">Azure</span> ile Bulut Altyapınızı Güçlendirin
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Microsoft'un güçlü bulut platformu Azure ile işletmenizin dijital dönüşümünü hızlandırın, 
              maliyetlerinizi optimize edin ve güvenliğinizi artırın.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto text-lg"
                onClick={() => openForm("Azure Bulut Hizmetleri")}
              >
                İletişime Geç
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Light Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Azure ile Neler Yapabilirsiniz?
            </h2>
            <p className="text-xl text-[#3a587a] max-w-3xl mx-auto">
              Bulut altyapınızı güçlendirmek için ihtiyacınız olan tüm araçlar Azure'da.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0 p-8">
                  <div className="w-20 h-20 bg-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                    <feature.icon className="w-10 h-10 text-[#003c71]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#3a587a]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section - Dark Background */}
      <section className="py-20 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#003c71] mb-6">
              NovaGraph ile Azure Çözümleri
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Bulut altyapısı stratejinizi NovaGraph'in uzmanlığı ile optimize edin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white backdrop-blur-md rounded-3xl border border-white/20 p-8 hover:bg-white transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#003c71] mb-4">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-blue-100 text-lg">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-100">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-white backdrop-blur-md rounded-2xl border border-white/20">
                      <p className="text-blue-100 font-medium">
                        <strong>NovaGraph Kullanımı:</strong> {solution.novaGraphUsage}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section - Light Background */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Kullanım Alanları
            </h2>
            <p className="text-xl text-[#3a587a] max-w-3xl mx-auto">
              Azure ile farklı iş ihtiyaçlarınız için bulut çözümleri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-2xl shadow-xl flex items-center justify-center">
                      <useCase.icon className="w-8 h-8 text-[#003c71]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {useCase.title}
                    </CardTitle>
                    <CardDescription className="text-[#3a587a]">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-[#3a587a]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - Dark Background */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#003c71] mb-6">
              Neden NovaGraph ile Azure?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Bulut altyapısı stratejinizi uzman ekibimizle optimize edin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Uzman Ekip",
                description: "Azure platformunda uzmanlaşmış deneyimli ekibimizle hizmetinizdeyiz"
              },
              {
                icon: Zap,
                title: "Hızlı Kurulum",
                description: "Hızlı ve güvenli bulut altyapısı kurulumu ile kısa sürede sonuç alın"
              },
              {
                icon: Shield,
                title: "Güvenli Altyapı",
                description: "Endüstri standardı güvenlik ve uyumluluk çözümleri"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white backdrop-blur-md rounded-3xl border border-white/20 p-8 hover:bg-white transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-400 rounded-2xl shadow-xl flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-[#003c71]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#003c71]">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-blue-100 text-center">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NovaGraph Usage Section - Light Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              NovaGraph'in Azure Kullanımı
            </h2>
            <p className="text-xl text-[#3a587a] max-w-3xl mx-auto">
              Bulut altyapısı stratejinizi NovaGraph'in uzmanlığı ile optimize edin
            </p>
          </motion.div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Bulut Altyapısı Stratejisi Dönüşümü
                </h3>
                <p className="text-[#3a587a] mb-6">
                  NovaGraph olarak Azure platformunu kullanarak müşterilerinizin bulut altyapısı stratejilerini 
                  dönüştürüyoruz. Sanal makineler, web uygulamaları, veritabanları ve sunucusuz çözümler ile 
                  işletmelerini dijitalleştiriyoruz.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-[#3a587a]">Sanal makine ve hosting çözümleri</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-[#3a587a]">Web uygulaması geliştirme ve dağıtımı</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-[#3a587a]">Veritabanı yönetimi ve optimizasyonu</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-[#3a587a]">Sunucusuz mimari ve maliyet optimizasyonu</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-blue-500 rounded-full shadow-2xl flex items-center justify-center">
                  <Cloud className="w-16 h-16 text-[#003c71]" />
                </div>
                <p className="text-[#3a587a]">
                  Bulut altyapısı stratejinizi NovaGraph'in uzmanlığı ile optimize edin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
