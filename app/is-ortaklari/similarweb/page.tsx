"use client"

import React from "react"
import { motion } from "framer-motion"
import { Globe, TrendingUp, Target, BarChart3, CheckCircle, ArrowRight, Activity, Users, ArrowLeft, ShoppingCart, Building, FileText, Zap, Lock, Search, Scale, Shield } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
 

export default function SimilarWebPage() {
  const { openForm } = useContactForm()

  const features = [
    {
      icon: Globe,
      title: "Traffic Analysis",
      description: "Detaylı trafik analizi ve raporlama"
    },
    {
      icon: TrendingUp,
      title: "Competitive Intelligence",
      description: "Rakip analizi ve istihbarat"
    },
    {
      icon: Target,
      title: "Market Research",
      description: "Pazar araştırması ve analizi"
    },
    {
      icon: BarChart3,
      title: "Digital Insights",
      description: "Dijital içgörüler ve raporlama"
    }
  ]

  const solutions = [
    {
      title: "Traffic Analizi",
      description: "Web sitenizin trafik performansını analiz edin ve optimize edin",
      benefits: [
        "Ziyaretçi analizi",
        "Traffic kaynakları",
        "Coğrafi dağılım",
        "Cihaz analizi"
      ],
      novaGraphUsage: "Müşteri web sitelerinin trafik performansını analiz etme ve optimizasyon önerileri sunma"
    },
    {
      title: "Rakip Analizi",
      description: "Rakiplerinizi analiz edin ve pazarlama stratejilerinizi geliştirin",
      benefits: [
        "Rakip trafik analizi",
        "Pazar payı analizi",
        "Rakip stratejileri",
        "Benchmark analizi"
      ],
      novaGraphUsage: "Müşteri rakip analizi ve pazarlama stratejisi geliştirme"
    },
    {
      title: "Pazar Araştırması",
      description: "Pazar trendlerini analiz edin ve fırsatları keşfedin",
      benefits: [
        "Pazar trendleri",
        "Sektör analizi",
        "Fırsat analizi",
        "Risk değerlendirmesi"
      ],
      novaGraphUsage: "Müşteri pazar araştırması ve strateji geliştirme"
    },
    {
      title: "Dijital İçgörüler",
      description: "Dijital performansınızı analiz edin ve optimize edin",
      benefits: [
        "Performans metrikleri",
        "Kullanıcı davranışı",
        "Dönüşüm analizi",
        "ROI hesaplama"
      ],
      novaGraphUsage: "Müşteri dijital performans analizi ve optimizasyon"
    }
  ]

  const useCases = [
    {
      title: "E-ticaret Siteleri",
      description: "E-ticaret sitelerinin trafik performansını artırma",
      icon: ShoppingCart,
      benefits: [
        "Traffic analizi",
        "Rakip analizi",
        "Pazar araştırması",
        "Satış optimizasyonu"
      ]
    },
    {
      title: "Kurumsal Web Siteleri",
      description: "Kurumsal web sitelerinin dijital performansını artırma",
      icon: Building,
      benefits: [
        "Traffic analizi",
        "Rakip analizi",
        "Pazar araştırması",
        "Marka görünürlüğü"
      ]
    },
    {
      title: "Dijital Pazarlama",
      description: "Dijital pazarlama kampanyalarının performansını artırma",
      icon: TrendingUp,
      benefits: [
        "Kampanya analizi",
        "ROI hesaplama",
        "Performans optimizasyonu",
        "Strateji geliştirme"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-purple-900">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-purple-800">
        <div className="absolute inset-0 bg-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="flex justify-start mb-8">
              <Link href="/is-ortaklari">
                <Button variant="outline" className="flex items-center gap-2 bg-white backdrop-blur-md border-white/20 text-gray-900 hover:bg-white/30">
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
              className="inline-flex items-center justify-center space-x-2 bg-white backdrop-blur-md text-gray-900 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg border border-white/20"
            >
              <Globe className="w-4 h-4 flex-shrink-0" />
              <span>İş Ortağımız</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-100">SimilarWeb</span> ile Rakip Analizinizi Güçlendirin
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Dünyanın en güçlü dijital istihbarat platformu SimilarWeb ile rakiplerinizi analiz edin, 
              pazar fırsatlarını keşfedin ve dijital stratejinizi optimize edin.
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
                className="bg-white text-purple-800 hover:bg-purple-50 px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto text-lg"
                onClick={() => openForm("SimilarWeb Rakip Analizi Hizmetleri")}
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
              SimilarWeb ile Neler Yapabilirsiniz?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rakip analizinizi güçlendirmek için ihtiyacınız olan tüm araçlar SimilarWeb'de.
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
                  <div className="w-20 h-20 bg-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                    <feature.icon className="w-10 h-10 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
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
      <section className="py-20 bg-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              NovaGraph ile SimilarWeb Çözümleri
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Rakip analizi stratejinizi NovaGraph'in uzmanlığı ile optimize edin
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
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-purple-100 text-lg">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                          <span className="text-purple-100">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-white backdrop-blur-md rounded-2xl border border-white/20">
                      <p className="text-purple-100 font-medium">
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
              SimilarWeb ile farklı sektörlerde rakip analizi çözümleri
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
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-2xl shadow-xl flex items-center justify-center">
                      <useCase.icon className="w-8 h-8 text-gray-900" />
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
                          <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Neden NovaGraph ile SimilarWeb?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Rakip analizi stratejinizi uzman ekibimizle optimize edin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Uzman Ekip",
                description: "SimilarWeb platformunda uzmanlaşmış deneyimli ekibimizle hizmetinizdeyiz"
              },
              {
                icon: Zap,
                title: "Hızlı Analiz",
                description: "Hızlı ve etkili rakip analizi ile kısa sürede sonuç alın"
              },
              {
                icon: Shield,
                title: "Güvenilir Veri",
                description: "En güncel ve doğru dijital istihbarat verileri ile stratejinizi geliştirin"
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
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-400 rounded-2xl shadow-xl flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-gray-900" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-purple-100 text-center">
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
              NovaGraph'in SimilarWeb Kullanımı
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rakip analizi stratejinizi NovaGraph'in uzmanlığı ile optimize edin
            </p>
          </motion.div>

          <div className="bg-purple-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Rakip Analizi Stratejisi Dönüşümü
                </h3>
                <p className="text-gray-700 mb-6">
                  NovaGraph olarak SimilarWeb platformunu kullanarak müşterilerinizin rakip analizi stratejilerini 
                  dönüştürüyoruz. Kapsamlı dijital istihbarat, pazar analizi ve fırsat belirleme ile 
                  rekabet avantajı sağlıyoruz.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Rakip analizi ve pazar araştırması</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Dijital istihbarat ve trend analizi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Fırsat belirleme ve strateji geliştirme</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Sürekli izleme ve raporlama</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-purple-500 rounded-full shadow-2xl flex items-center justify-center">
                  <Globe className="w-16 h-16 text-gray-900" />
                </div>
                <p className="text-gray-600">
                  Rakip analizi stratejinizi NovaGraph'in uzmanlığı ile optimize edin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
