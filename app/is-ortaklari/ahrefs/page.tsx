"use client"

import React from "react"
import { motion } from "framer-motion"
import { Search, TrendingUp, Target, BarChart3, Globe, Users, CheckCircle, ArrowRight, Zap, Shield, Database, Monitor, Activity, Eye, Star, ShoppingCart, MapPin, FileText, ArrowLeft } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
 

export default function AhrefsPage() {
  const { openForm } = useContactForm()

  const features = [
    {
      icon: Search,
      title: "SEO Analizi",
      description: "Rakip analizi ve anahtar kelime araştırması ile SEO stratejinizi güçlendirin"
    },
    {
      icon: TrendingUp,
      title: "Performans İzleme",
      description: "Web sitenizin arama motoru performansını gerçek zamanlı takip edin"
    },
    {
      icon: Target,
      title: "Hedef Kitle Analizi",
      description: "Hedef kitlenizin arama davranışlarını analiz edin"
    },
    {
      icon: BarChart3,
      title: "Detaylı Raporlama",
      description: "Kapsamlı SEO raporları ile stratejinizi optimize edin"
    }
  ]

  const solutions = [
    {
      title: "Anahtar Kelime Araştırması",
      description: "Yüksek potansiyelli anahtar kelimeleri keşfedin ve rekabet analizi yapın",
      benefits: [
        "Rakip anahtar kelimelerini analiz edin",
        "Arama hacmi ve zorluk seviyesini öğrenin",
        "Uzun kuyruk anahtar kelimeleri keşfedin",
        "Anahtar kelime fırsatlarını belirleyin"
      ],
      novaGraphUsage: "NovaGraph müşterileri için SEO stratejisi geliştirme ve içerik planlaması"
    },
    {
      title: "Rakip Analizi",
      description: "Rakiplerinizin SEO stratejilerini analiz edin ve fırsatları yakalayın",
      benefits: [
        "Rakip web sitelerinin performansını izleyin",
        "Backlink profillerini analiz edin",
        "İçerik stratejilerini keşfedin",
        "Pazar fırsatlarını belirleyin"
      ],
      novaGraphUsage: "Müşterilerin rakiplerini analiz ederek rekabet avantajı sağlama"
    },
    {
      title: "Site Denetimi",
      description: "Web sitenizin SEO sorunlarını tespit edin ve düzeltin",
      benefits: [
        "Teknik SEO sorunlarını tespit edin",
        "Sayfa hızı optimizasyonu yapın",
        "İçerik kalitesini değerlendirin",
        "Kullanıcı deneyimini iyileştirin"
      ],
      novaGraphUsage: "Müşteri web sitelerinin SEO performansını optimize etme"
    },
    {
      title: "Backlink Analizi",
      description: "Backlink profilinizi analiz edin ve yeni link fırsatları keşfedin",
      benefits: [
        "Mevcut backlinklerinizi analiz edin",
        "Zararlı linkleri tespit edin",
        "Yeni link fırsatlarını keşfedin",
        "Link building stratejisi geliştirin"
      ],
      novaGraphUsage: "Müşterilerin domain otoritesini artırma ve SEO skorlarını yükseltme"
    }
  ]

  const useCases = [
    {
      title: "E-ticaret SEO Optimizasyonu",
      description: "E-ticaret sitelerinin arama motoru görünürlüğünü artırın",
      icon: ShoppingCart,
      benefits: [
        "Ürün sayfalarının SEO performansını optimize edin",
        "Kategori sayfalarının sıralamasını yükseltin",
        "Arama hacmi yüksek ürün anahtar kelimelerini keşfedin",
        "Rakip e-ticaret sitelerini analiz edin"
      ]
    },
    {
      title: "Yerel SEO Stratejisi",
      description: "Yerel işletmelerin arama motoru görünürlüğünü artırın",
      icon: MapPin,
      benefits: [
        "Yerel anahtar kelimeleri araştırın",
        "Google My Business optimizasyonu yapın",
        "Yerel backlink fırsatlarını keşfedin",
        "Yerel rakipleri analiz edin"
      ]
    },
    {
      title: "İçerik Stratejisi Geliştirme",
      description: "SEO odaklı içerik stratejisi geliştirin",
      icon: FileText,
      benefits: [
        "Trend konuları keşfedin",
        "İçerik boşluklarını tespit edin",
        "İçerik performansını analiz edin",
        "İçerik takvimi oluşturun"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-orange-50">
      
      {/* Hero Section - Dark Background */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-orange-100">
        <div className="absolute inset-0 bg-orange-50/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-start mb-8"
            >
              <Link href="/is-ortaklari">
                <Button variant="outline" className="flex items-center gap-2 bg-white backdrop-blur-md border-white/20 text-white hover:bg-white/30">
                  <ArrowLeft className="w-4 h-4" />
                  Geri Dön
                </Button>
              </Link>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center space-x-2 bg-white backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg border border-white/20"
            >
              <Search className="w-4 h-4 flex-shrink-0" />
              <span>İş Ortağımız</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Ahrefs</span> ile SEO Stratejinizi Güçlendirin
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Dünyanın en gelişmiş SEO araçlarından biri olan Ahrefs ile web sitenizin arama motoru performansını optimize edin, 
              rakiplerinizi analiz edin ve organik trafiğinizi artırın.
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
                className="bg-white text-orange-800 hover:bg-orange-50 px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto text-lg"
                onClick={() => openForm("Ahrefs SEO Hizmetleri")}
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
              Ahrefs ile Neler Yapabilirsiniz?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dünyanın en gelişmiş SEO araçlarının güçlü özellikleri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 mx-auto mb-4 bg-orange-400 rounded-3xl shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section - Dark Background */}
      <section className="py-20 bg-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              NovaGraph ile Ahrefs Çözümleri
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              SEO stratejinizi NovaGraph'in uzmanlığı ile optimize edin
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
                    <CardTitle className="text-2xl font-bold text-white mb-4">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-orange-100 text-lg">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                          <span className="text-orange-100">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-white backdrop-blur-md rounded-2xl border border-white/20">
                      <p className="text-orange-100 font-medium">
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ahrefs ile farklı sektörlerde SEO stratejilerinizi optimize edin
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
                    <div className="w-16 h-16 mx-auto mb-4 bg-orange-400 rounded-2xl shadow-xl flex items-center justify-center">
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
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
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 bg-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Neden NovaGraph ile Ahrefs?
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              SEO stratejinizi uzman ekibimizle optimize edin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Uzman Ekip",
                description: "Ahrefs platformunda uzmanlaşmış deneyimli ekibimizle hizmetinizdeyiz"
              },
              {
                icon: Zap,
                title: "Hızlı Optimizasyon",
                description: "Hızlı ve etkili SEO optimizasyonu ile kısa sürede sonuç alın"
              },
              {
                icon: Shield,
                title: "Güvenilir Analiz",
                description: "En güncel ve doğru SEO verileri ile stratejinizi geliştirin"
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
                    <div className="w-16 h-16 mx-auto mb-4 bg-orange-400 rounded-2xl shadow-xl flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-orange-100 text-center">
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
              NovaGraph'in Ahrefs Kullanımı
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SEO stratejinizi NovaGraph'in uzmanlığı ile optimize edin
            </p>
          </motion.div>

          <div className="bg-orange-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  SEO Stratejisi Dönüşümü
                </h3>
                <p className="text-gray-700 mb-6">
                  NovaGraph olarak Ahrefs platformunu kullanarak müşterilerinizin SEO stratejilerini 
                  dönüştürüyoruz. Kapsamlı analitik, rakip analizi ve anahtar kelime araştırması ile 
                  organik trafiği artırıyoruz.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">SEO analizi ve strateji geliştirme</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">Rakip analizi ve fırsat belirleme</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">Anahtar kelime araştırması ve optimizasyonu</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">Sürekli performans izleme ve raporlama</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-orange-400 rounded-full shadow-2xl flex items-center justify-center">
                  <Search className="w-16 h-16 text-white" />
                </div>
                <p className="text-gray-600">
                  SEO stratejinizi NovaGraph'in uzmanlığı ile optimize edin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
