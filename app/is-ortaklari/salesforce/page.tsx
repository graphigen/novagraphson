"use client"

import React from "react"
import { motion } from "framer-motion"
import { Users, Shield, Globe, BarChart3, CheckCircle, ArrowRight, Activity, Target, ArrowLeft, ShoppingCart, Building, FileText, Zap, Lock, TrendingUp, Scale, Cloud } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
 

export default function SalesforcePage() {
  const { openForm } = useContactForm()

  const features = [
    {
      icon: Users,
      title: "CRM Sistemi",
      description: "Kapsamlı müşteri ilişkileri yönetimi"
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      description: "Güçlü bulut tabanlı platform"
    },
    {
      icon: BarChart3,
      title: "Analitik",
      description: "Gelişmiş analitik ve raporlama"
    },
    {
      icon: Shield,
      title: "Güvenlik",
      description: "Endüstri standardı güvenlik"
    }
  ]

  const solutions = [
    {
      title: "Sales Cloud",
      description: "Satış süreçlerinizi optimize edin ve satış performansınızı artırın",
      benefits: [
        "Lead yönetimi",
        "Fırsat takibi",
        "Satış pipeline",
        "Performans raporlama"
      ],
      novaGraphUsage: "Müşteri satış süreçlerini optimize etme ve performans artırma"
    },
    {
      title: "Service Cloud",
      description: "Müşteri hizmetlerinizi dijitalleştirin ve müşteri memnuniyetini artırın",
      benefits: [
        "Case yönetimi",
        "Knowledge base",
        "Live chat",
        "Müşteri portalı"
      ],
      novaGraphUsage: "Müşteri hizmet süreçlerini dijitalleştirme ve verimlilik artırma"
    },
    {
      title: "Marketing Cloud",
      description: "Pazarlama kampanyalarınızı otomatikleştirin ve ROI'nizi artırın",
      benefits: [
        "Email marketing",
        "Campaign automation",
        "Lead scoring",
        "Analytics"
      ],
      novaGraphUsage: "Müşteri pazarlama kampanyalarını optimize etme ve dönüşüm artırma"
    },
    {
      title: "Platform",
      description: "Özel uygulamalar geliştirin ve iş süreçlerinizi otomatikleştirin",
      benefits: [
        "Low-code development",
        "App builder",
        "Integration tools",
        "Custom objects"
      ],
      novaGraphUsage: "Müşteri iş süreçlerini otomatikleştirme ve özel çözümler geliştirme"
    }
  ]

  const useCases = [
    {
      title: "Satış Ekipleri",
      description: "Satış ekiplerinin verimliliğini artıran CRM çözümleri",
      icon: Users,
      benefits: [
        "Lead yönetimi",
        "Fırsat takibi",
        "Satış raporlama",
        "Performans analizi"
      ]
    },
    {
      title: "Müşteri Hizmetleri",
      description: "Müşteri hizmetleri ekiplerinin verimliliğini artırma",
      icon: Shield,
      benefits: [
        "Case yönetimi",
        "Knowledge base",
        "Live chat",
        "Müşteri portalı"
      ]
    },
    {
      title: "Pazarlama Ekipleri",
      description: "Pazarlama kampanyalarını optimize etme",
      icon: BarChart3,
      benefits: [
        "Campaign automation",
        "Lead scoring",
        "Email marketing",
        "Analytics"
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
                <Button variant="outline" className="flex items-center gap-2 bg-white backdrop-blur-md border-white/20 text-[#0070d2] hover:bg-white/30">
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
              className="inline-flex items-center justify-center space-x-2 bg-white backdrop-blur-md text-[#0070d2] px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg border border-white/20"
            >
              <Users className="w-4 h-4 flex-shrink-0" />
              <span>İş Ortağımız</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#0070d2] mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-100">Salesforce</span> ile İş Süreçlerinizi Dijitalleştirin
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Dünyanın en güçlü CRM platformu Salesforce ile müşteri ilişkilerinizi güçlendirin, 
              satışlarınızı artırın ve iş süreçlerinizi optimize edin.
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
                onClick={() => openForm("Salesforce CRM Hizmetleri")}
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
              Salesforce ile Neler Yapabilirsiniz?
            </h2>
            <p className="text-xl text-[#345f99] max-w-3xl mx-auto">
              İş süreçlerinizi dijitalleştirmek için ihtiyacınız olan tüm araçlar Salesforce'ta.
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
                    <feature.icon className="w-10 h-10 text-[#0070d2]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#345f99]">
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
            <h2 className="text-4xl font-bold text-[#0070d2] mb-6">
              NovaGraph ile Salesforce Çözümleri
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              CRM stratejinizi NovaGraph'in uzmanlığı ile optimize edin
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
                    <CardTitle className="text-2xl font-bold text-[#0070d2] mb-4">
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
            <p className="text-xl text-[#345f99] max-w-3xl mx-auto">
              Salesforce ile farklı iş süreçleriniz için CRM çözümleri
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
                      <useCase.icon className="w-8 h-8 text-[#0070d2]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {useCase.title}
                    </CardTitle>
                    <CardDescription className="text-[#345f99]">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-[#345f99]">{benefit}</span>
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
            <h2 className="text-4xl font-bold text-[#0070d2] mb-6">
              Neden NovaGraph ile Salesforce?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              CRM stratejinizi uzman ekibimizle optimize edin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Uzman Ekip",
                description: "Salesforce platformunda uzmanlaşmış deneyimli ekibimizle hizmetinizdeyiz"
              },
              {
                icon: Zap,
                title: "Hızlı Kurulum",
                description: "Hızlı ve etkili CRM sistemi kurulumu ile kısa sürede sonuç alın"
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
                <Card className="h-full bg-white backdrop-blur-md rounded-3xl border border-white/20 p-8 hover:bg-white transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-400 rounded-2xl shadow-xl flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-[#0070d2]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#0070d2]">
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
              NovaGraph'in Salesforce Kullanımı
            </h2>
            <p className="text-xl text-[#345f99] max-w-3xl mx-auto">
              CRM stratejinizi NovaGraph'in uzmanlığı ile optimize edin
            </p>
          </motion.div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  CRM Stratejisi Dönüşümü
                </h3>
                <p className="text-[#345f99] mb-6">
                  NovaGraph olarak Salesforce platformunu kullanarak müşterilerinizin CRM stratejilerini 
                  dönüştürüyoruz. Satış süreçleri, müşteri hizmetleri, pazarlama kampanyaları ve özel uygulamalar ile 
                  işletmelerini dijitalleştiriyoruz.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-[#345f99]">Satış süreçleri optimizasyonu</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-[#345f99]">Müşteri hizmetleri dijitalleştirme</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-[#345f99]">Pazarlama kampanyası otomasyonu</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-[#345f99]">Özel uygulama geliştirme</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-blue-500 rounded-full shadow-2xl flex items-center justify-center">
                  <Users className="w-16 h-16 text-[#0070d2]" />
                </div>
                <p className="text-[#345f99]">
                  CRM stratejinizi NovaGraph'in uzmanlığı ile optimize edin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
