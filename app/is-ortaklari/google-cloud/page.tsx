"use client"

import React from "react"
import { motion } from "framer-motion"
import { Cloud, Server, Database, Shield, Zap, Globe, Users, CheckCircle, ArrowRight, Activity, Lock, Cpu, HardDrive, Network, Monitor, TrendingUp, Scale, Globe2, ArrowLeft, ShoppingCart } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
 

export default function GoogleCloudPage() {
  const { openForm } = useContactForm()

  const features = [
    {
      icon: Cloud,
      title: "Bulut Altyapısı",
      description: "Ölçeklenebilir ve güvenilir bulut altyapısı"
    },
    {
      icon: Server,
      title: "Compute Engine",
      description: "Yüksek performanslı sanal makine hizmetleri"
    },
    {
      icon: Database,
      title: "Cloud Storage",
      description: "Güvenli ve ölçeklenebilir depolama"
    },
    {
      icon: Shield,
      title: "Güvenlik",
      description: "Endüstri standardı güvenlik ve uyumluluk"
    }
  ]

  const solutions = [
    {
      title: "Google Compute Engine",
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
      title: "Google Cloud Storage",
      description: "Güvenli ve ölçeklenebilir bulut depolama çözümleri",
      benefits: [
        "Yüksek erişilebilirlik",
        "Otomatik yedekleme",
        "Güvenlik ve şifreleme",
        "Maliyet etkin depolama"
      ],
      novaGraphUsage: "Müşteri verilerinin güvenli depolanması ve yedeklenmesi"
    },
    {
      title: "BigQuery",
      description: "Büyük veri analizi ve iş zekası çözümleri",
      benefits: [
        "Hızlı veri analizi",
        "SQL sorguları",
        "Machine Learning entegrasyonu",
        "Gerçek zamanlı analitik"
      ],
      novaGraphUsage: "Müşteri verilerinin analizi ve iş zekası raporları oluşturma"
    },
    {
      title: "Cloud Functions",
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
      description: "Web uygulamalarınızı Google Cloud'da güvenli ve ölçeklenebilir şekilde barındırın",
      icon: Globe,
      benefits: [
        "Yüksek erişilebilirlik ve performans",
        "Otomatik ölçeklendirme",
        "Güvenlik ve uyumluluk",
        "Maliyet optimizasyonu"
      ]
    },
    {
      title: "Veri Analizi ve ML",
      description: "Büyük veri analizi ve makine öğrenmesi çözümleri",
      icon: Activity,
      benefits: [
        "Hızlı veri işleme",
        "Machine Learning modelleri",
        "Gerçek zamanlı analitik",
        "Ölçeklenebilir altyapı"
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
                <Button variant="outline" className="flex items-center gap-2 bg-white backdrop-blur-md border-orange-200 text-white hover:bg-white/30">
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
              className="inline-flex items-center justify-center space-x-2 bg-white backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg border border-orange-200"
            >
              <Cloud className="w-4 h-4 flex-shrink-0" />
              <span>İş Ortağımız</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-100">Google Cloud</span> ile Bulut Altyapınızı Güçlendirin
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Google'un güçlü bulut platformu ile işletmenizin dijital dönüşümünü hızlandırın, 
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
                onClick={() => openForm("Google Cloud Hizmetleri")}
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Google Cloud ile Neler Yapabilirsiniz?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bulut altyapınızı güçlendirmek için ihtiyacınız olan tüm hizmetler Google Cloud'da.
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
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
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
            <h2 className="text-4xl font-bold text-white mb-6">
              NovaGraph ile Google Cloud Çözümleri
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Bulut altyapınızı NovaGraph'in uzmanlığı ile optimize edin
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
                <Card className="h-full bg-white backdrop-blur-md rounded-3xl border border-orange-200 p-8 hover:bg-white transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white mb-4">
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
                    <div className="mt-6 p-4 bg-white backdrop-blur-md rounded-2xl border border-orange-200">
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Kullanım Alanları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Google Cloud ile farklı iş ihtiyaçlarınız için bulut çözümleri
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
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {useCase.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Neden NovaGraph ile Google Cloud?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Bulut altyapınızı uzman ekibimizle optimize edin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Uzman Ekip",
                description: "Google Cloud platformunda uzmanlaşmış deneyimli ekibimizle hizmetinizdeyiz"
              },
              {
                icon: Zap,
                title: "Hızlı Deployment",
                description: "Hızlı ve güvenli bulut deployment ile kısa sürede sonuç alın"
              },
              {
                icon: Shield,
                title: "Güvenlik",
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
                <Card className="h-full bg-white backdrop-blur-md rounded-3xl border border-orange-200 p-8 hover:bg-white transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-400 rounded-2xl shadow-xl flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              NovaGraph'in Google Cloud Kullanımı
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bulut altyapınızı NovaGraph'in uzmanlığı ile optimize edin
            </p>
          </motion.div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Bulut Stratejisi Dönüşümü
                </h3>
                <p className="text-gray-700 mb-6">
                  NovaGraph olarak Google Cloud platformunu kullanarak müşterilerinizin bulut stratejilerini 
                  dönüştürüyoruz. Ölçeklenebilir altyapı, güvenlik ve maliyet optimizasyonu ile 
                  dijital dönüşümü hızlandırıyoruz.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Bulut altyapısı kurulumu ve yönetimi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Güvenlik ve uyumluluk çözümleri</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Maliyet optimizasyonu ve yönetimi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Sürekli destek ve izleme</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-blue-500 rounded-full shadow-2xl flex items-center justify-center">
                  <Cloud className="w-16 h-16 text-white" />
                </div>
                <p className="text-gray-600">
                  Bulut altyapınızı NovaGraph'in uzmanlığı ile optimize edin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
