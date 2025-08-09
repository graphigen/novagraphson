"use client"

import React from "react"
import { motion } from "framer-motion"
import { Users, MessageSquare, Calendar, FileText, BarChart3, ShoppingCart, CheckCircle, ArrowRight, Zap, Shield, Database, Monitor, Activity, TrendingUp, Globe, Settings, Target, ArrowLeft } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
 

export default function Bitrix24Page() {
  const { openForm } = useContactForm()

  const features = [
    {
      icon: Users,
      title: "CRM Sistemi",
      description: "Müşteri ilişkileri yönetimi ve satış otomasyonu"
    },
    {
      icon: MessageSquare,
      title: "İletişim Araçları",
      description: "Ekip içi iletişim ve mesajlaşma platformu"
    },
    {
      icon: Calendar,
      title: "Proje Yönetimi",
      description: "Görev takibi ve proje yönetimi araçları"
    },
    {
      icon: FileText,
      title: "Doküman Yönetimi",
      description: "Bulut tabanlı dosya ve doküman yönetimi"
    }
  ]

  const solutions = [
    {
      title: "Bitrix24 CRM",
      description: "Kapsamlı müşteri ilişkileri yönetimi platformu ile satış süreçlerinizi optimize edin",
      benefits: [
        "Müşteri takibi ve yönetimi",
        "Satış pipeline yönetimi",
        "Raporlama ve analitik",
        "Mobil uygulama desteği"
      ],
      novaGraphUsage: "Müşterilerin satış süreçlerini optimize etme ve müşteri ilişkilerini güçlendirme"
    },
    {
      title: "Bitrix24 İletişim",
      description: "Ekip içi iletişim ve mesajlaşma platformu ile verimliliği artırın",
      benefits: [
        "Anlık mesajlaşma",
        "Video konferans",
        "Dosya paylaşımı",
        "Grup sohbetleri"
      ],
      novaGraphUsage: "Müşteri ekiplerinin iletişimini güçlendirme ve işbirliğini artırma"
    },
    {
      title: "Bitrix24 Projeler",
      description: "Proje yönetimi ve görev takibi ile ekip verimliliğini artırın",
      benefits: [
        "Görev atama ve takibi",
        "Zaman yönetimi",
        "Proje takvimi",
        "İlerleme raporlama"
      ],
      novaGraphUsage: "Müşteri projelerinin etkin yönetimi ve ekip verimliliğini artırma"
    },
    {
      title: "Bitrix24 Portal",
      description: "Kurumsal portal ve intranet çözümü ile bilgi yönetimini optimize edin",
      benefits: [
        "Doküman yönetimi",
        "Bilgi paylaşımı",
        "Çalışan portalı",
        "Güvenli erişim"
      ],
      novaGraphUsage: "Müşteri şirketlerinin bilgi yönetimini dijitalleştirme ve verimlilik artırma"
    }
  ]

  const useCases = [
    {
      title: "Küçük ve Orta Ölçekli İşletmeler",
      description: "KOBİ'ler için uygun maliyetli iş çözümleri",
      icon: Target,
      benefits: [
        "Düşük maliyetli CRM çözümleri",
        "Kolay kullanım ve kurulum",
        "Ölçeklenebilir paketler",
        "Türkçe destek"
      ]
    },
    {
      title: "Satış Ekipleri",
      description: "Satış ekiplerinin verimliliğini artıran araçlar",
      icon: Users,
      benefits: [
        "Satış pipeline yönetimi",
        "Müşteri takibi",
        "Performans raporlama",
        "Mobil satış uygulamaları"
      ]
    },
    {
      title: "Proje Ekipleri",
      description: "Proje ekiplerinin işbirliğini güçlendiren platformlar",
      icon: Calendar,
      benefits: [
        "Görev atama ve takibi",
        "Zaman yönetimi",
        "Dosya paylaşımı",
        "İlerleme raporlama"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-green-900">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-green-800">
        <div className="absolute inset-0 bg-green-900/20"></div>
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
              <Users className="w-4 h-4 flex-shrink-0" />
              <span>İş Ortağımız</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-100">Bitrix24</span> ile İş Süreçlerinizi Dijitalleştirin
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Kapsamlı iş uygulamaları platformu Bitrix24 ile müşteri ilişkilerinizi güçlendirin, 
              ekip verimliliğinizi artırın ve projelerinizi başarıyla yönetin.
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
                className="bg-white text-green-800 hover:bg-green-50 px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto text-lg"
                onClick={() => openForm("Bitrix24 İş Uygulamaları")}
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
              Bitrix24 ile Neler Yapabilirsiniz?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İş süreçlerinizi dijitalleştirmek için ihtiyacınız olan tüm araçlar Bitrix24'te.
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
                  <div className="w-20 h-20 bg-green-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-2xl">
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
      <section className="py-20 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              NovaGraph ile Bitrix24 Çözümleri
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              İş süreçleri stratejinizi NovaGraph'in uzmanlığı ile optimize edin
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
                    <CardDescription className="text-green-100 text-lg">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                          <span className="text-green-100">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-white backdrop-blur-md rounded-2xl border border-orange-200">
                      <p className="text-green-100 font-medium">
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
              Bitrix24 ile farklı iş süreçleriniz için yönetim çözümleri
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
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-2xl shadow-xl flex items-center justify-center">
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
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Neden NovaGraph ile Bitrix24?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              İş süreçleri stratejinizi uzman ekibimizle optimize edin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Uzman Ekip",
                description: "Bitrix24 platformunda uzmanlaşmış deneyimli ekibimizle hizmetinizdeyiz"
              },
              {
                icon: Zap,
                title: "Hızlı Kurulum",
                description: "Hızlı ve etkili iş uygulamaları kurulumu ile kısa sürede sonuç alın"
              },
              {
                icon: Shield,
                title: "Güvenilir Platform",
                description: "Endüstri standardı güvenlik ve veri koruması çözümleri"
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
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-400 rounded-2xl shadow-xl flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-green-100 text-center">
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
              NovaGraph'in Bitrix24 Kullanımı
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İş süreçleri stratejinizi NovaGraph'in uzmanlığı ile optimize edin
            </p>
          </motion.div>

          <div className="bg-green-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  İş Süreçleri Dijitalleştirme Stratejisi
                </h3>
                <p className="text-gray-700 mb-6">
                  NovaGraph olarak Bitrix24 platformunu kullanarak müşterilerinizin iş süreçlerini 
                  dijitalleştiriyoruz. CRM sistemleri, ekip iletişimi, proje yönetimi ve doküman yönetimi ile 
                  işletmelerini dönüştürüyoruz.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">CRM sistemi ve müşteri yönetimi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Ekip iletişimi ve işbirliği</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Proje yönetimi ve görev takibi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Doküman yönetimi ve bilgi paylaşımı</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-green-500 rounded-full shadow-2xl flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <p className="text-gray-600">
                  İş süreçleri stratejinizi NovaGraph'in uzmanlığı ile optimize edin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
