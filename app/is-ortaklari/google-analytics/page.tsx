"use client"

import React from "react"
import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Target, Users, Globe, CheckCircle, ArrowRight, Activity, Eye, Star, ShoppingCart, MapPin, FileText, ArrowLeft, Zap, Shield, Database, Monitor, Scale, Building } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
 

export default function GoogleAnalyticsPage() {
  const { openForm } = useContactForm()

  const features = [
    {
      icon: BarChart3,
      title: "Traffic Analizi",
      description: "Detaylı ziyaretçi ve trafik analizi"
    },
    {
      icon: Users,
      title: "Kullanıcı Davranışı",
      description: "Kullanıcı davranışları ve etkileşim analizi"
    },
    {
      icon: Target,
      title: "Conversion Tracking",
      description: "Dönüşüm takibi ve hedef analizi"
    },
    {
      icon: Eye,
      title: "Real-time Reports",
      description: "Gerçek zamanlı raporlama ve izleme"
    }
  ]

  const solutions = [
    {
      title: "Web Sitesi Analitik",
      description: "Web sitenizin performansını detaylı olarak analiz edin ve optimize edin",
      benefits: [
        "Ziyaretçi trafiği analizi",
        "Sayfa performansı takibi",
        "Kullanıcı davranışı analizi",
        "A/B test sonuçları"
      ],
      novaGraphUsage: "Müşteri web sitelerinin performansını analiz etme ve optimizasyon önerileri sunma"
    },
    {
      title: "E-ticaret Analitik",
      description: "E-ticaret sitenizin satış performansını ve müşteri davranışlarını analiz edin",
      benefits: [
        "Satış dönüşüm takibi",
        "Ürün performans analizi",
        "Müşteri yolculuğu analizi",
        "Gelir raporlama"
      ],
      novaGraphUsage: "Müşteri e-ticaret sitelerinin satış performansını artırma ve optimizasyon"
    },
    {
      title: "Conversion Tracking",
      description: "Hedef dönüşümlerinizi takip edin ve optimize edin",
      benefits: [
        "Hedef dönüşüm tanımlama",
        "Dönüşüm yolculuğu analizi",
        "Funnel analizi",
        "ROI hesaplama"
      ],
      novaGraphUsage: "Müşteri kampanyalarının dönüşüm oranlarını artırma ve optimizasyon"
    },
    {
      title: "Real-time Monitoring",
      description: "Web sitenizin gerçek zamanlı performansını izleyin",
      benefits: [
        "Gerçek zamanlı trafik",
        "Aktif kullanıcı sayısı",
        "Sayfa görüntüleme analizi",
        "Anlık raporlama"
      ],
      novaGraphUsage: "Müşteri web sitelerinin gerçek zamanlı performans izleme ve optimizasyon"
    }
  ]

  const useCases = [
    {
      title: "E-ticaret Siteleri",
      description: "E-ticaret sitelerinin satış performansını analiz etme",
      icon: ShoppingCart,
      benefits: [
        "Satış dönüşüm analizi",
        "Ürün performans takibi",
        "Müşteri davranış analizi",
        "Gelir optimizasyonu"
      ]
    },
    {
      title: "Kurumsal Web Siteleri",
      description: "Kurumsal web sitelerinin performansını analiz etme",
      icon: Building,
      benefits: [
        "Ziyaretçi trafiği analizi",
        "İçerik performans takibi",
        "Kullanıcı deneyimi analizi",
        "SEO performansı"
      ]
    },
    {
      title: "Blog ve İçerik Siteleri",
      description: "Blog ve içerik sitelerinin etkileşim analizi",
      icon: FileText,
      benefits: [
        "İçerik performans analizi",
        "Okuyucu davranış analizi",
        "Engagement metrikleri",
        "İçerik optimizasyonu"
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
                <Button variant="outline" className="flex items-center gap-2 bg-white backdrop-blur-md border-white/20 text-[#bf5320] hover:bg-white/30">
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
              className="inline-flex items-center justify-center space-x-2 bg-white backdrop-blur-md text-[#bf5320] px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg border border-white/20"
            >
              <BarChart3 className="w-4 h-4 flex-shrink-0" />
              <span>İş Ortağımız</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#bf5320] mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-100">Google Analytics</span> ile Veri Odaklı Kararlar Alın
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Dünyanın en güçlü web analitik platformu Google Analytics ile web sitenizin performansını analiz edin, 
              kullanıcı davranışlarını anlayın ve veri odaklı kararlar alın.
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
                onClick={() => openForm("Google Analytics Hizmetleri")}
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
              Google Analytics ile Neler Yapabilirsiniz?
            </h2>
            <p className="text-xl text-[#9f4623] max-w-3xl mx-auto">
              Web sitenizin performansını analiz etmek için ihtiyacınız olan tüm araçlar Google Analytics'te.
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
                    <feature.icon className="w-10 h-10 text-[#bf5320]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#9f4623]">
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
            <h2 className="text-4xl font-bold text-[#bf5320] mb-6">
              NovaGraph ile Google Analytics Çözümleri
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Veri analizi stratejinizi NovaGraph'in uzmanlığı ile optimize edin
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
                    <CardTitle className="text-2xl font-bold text-[#bf5320] mb-4">
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
            <p className="text-xl text-[#9f4623] max-w-3xl mx-auto">
              Google Analytics ile farklı web siteleriniz için analitik çözümleri
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
                      <useCase.icon className="w-8 h-8 text-[#bf5320]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {useCase.title}
                    </CardTitle>
                    <CardDescription className="text-[#9f4623]">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-[#9f4623]">{benefit}</span>
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
            <h2 className="text-4xl font-bold text-[#bf5320] mb-6">
              Neden NovaGraph ile Google Analytics?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Veri analizi stratejinizi uzman ekibimizle optimize edin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Uzman Ekip",
                description: "Google Analytics platformunda uzmanlaşmış deneyimli ekibimizle hizmetinizdeyiz"
              },
              {
                icon: Zap,
                title: "Hızlı Analiz",
                description: "Hızlı ve etkili veri analizi ile kısa sürede sonuç alın"
              },
              {
                icon: Shield,
                title: "Güvenilir Veri",
                description: "En güncel ve doğru veri analizi ile stratejinizi geliştirin"
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
                      <benefit.icon className="w-8 h-8 text-[#bf5320]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#bf5320]">
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
              NovaGraph'in Google Analytics Kullanımı
            </h2>
            <p className="text-xl text-[#9f4623] max-w-3xl mx-auto">
              Veri analizi stratejinizi NovaGraph'in uzmanlığı ile optimize edin
            </p>
          </motion.div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Veri Analizi Stratejisi Dönüşümü
                </h3>
                <p className="text-[#9f4623] mb-6">
                  NovaGraph olarak Google Analytics platformunu kullanarak müşterilerinizin veri analizi stratejilerini 
                  dönüştürüyoruz. Kapsamlı analitik, kullanıcı davranışı analizi ve performans izleme ile 
                  veri odaklı kararlar alıyoruz.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-[#9f4623]">Veri analizi ve raporlama</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-[#9f4623]">Kullanıcı davranışı analizi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-[#9f4623]">Performans izleme ve optimizasyonu</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-[#9f4623]">Sürekli destek ve danışmanlık</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-blue-500 rounded-full shadow-2xl flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-[#bf5320]" />
                </div>
                <p className="text-[#9f4623]">
                  Veri analizi stratejinizi NovaGraph'in uzmanlığı ile optimize edin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
