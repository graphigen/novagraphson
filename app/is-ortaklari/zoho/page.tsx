"use client"

import React from "react"
import { motion } from "framer-motion"
import { Users, Mail, Calendar, FileText, BarChart3, ShoppingCart, CheckCircle, ArrowRight, Zap, Shield, Database, Monitor, Activity, TrendingUp, Globe, Settings, Target, ArrowLeft } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Head from "next/head"

export default function ZohoPage() {
  const { openForm } = useContactForm()

  const features = [
    {
      icon: Users,
      title: "CRM Çözümleri",
      description: "Müşteri ilişkileri yönetimi ve satış otomasyonu"
    },
    {
      icon: Mail,
      title: "E-posta Hizmetleri",
      description: "Kurumsal e-posta ve iletişim çözümleri"
    },
    {
      icon: Calendar,
      title: "İş Süreçleri",
      description: "Proje yönetimi ve iş akışı otomasyonu"
    },
    {
      icon: FileText,
      title: "Doküman Yönetimi",
      description: "Bulut tabanlı doküman ve dosya yönetimi"
    }
  ]

  const solutions = [
    {
      title: "Zoho CRM",
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
      title: "Zoho Mail",
      description: "Kurumsal e-posta hizmeti ile profesyonel iletişim çözümleri",
      benefits: [
        "Özel domain e-posta adresleri",
        "Gelişmiş güvenlik özellikleri",
        "Takvim ve kişi yönetimi",
        "Mobil senkronizasyon"
      ],
      novaGraphUsage: "Müşteri şirketlerinin profesyonel e-posta altyapısını kurma ve yönetme"
    },
    {
      title: "Zoho Projects",
      description: "Proje yönetimi ve iş akışı otomasyonu ile ekip verimliliğini artırın",
      benefits: [
        "Görev yönetimi ve takibi",
        "Zaman takibi ve raporlama",
        "Dosya paylaşımı",
        "Ekip işbirliği araçları"
      ],
      novaGraphUsage: "Müşteri projelerinin etkin yönetimi ve ekip verimliliğini artırma"
    },
    {
      title: "Zoho Workplace",
      description: "Entegre iş uygulamaları ile ofis verimliliğini artırın",
      benefits: [
        "Kelime işlemci ve elektronik tablo",
        "Sunum araçları",
        "Dosya depolama ve paylaşım",
        "Gerçek zamanlı işbirliği"
      ],
      novaGraphUsage: "Müşteri ofis uygulamalarının dijitalleştirilmesi ve verimlilik artırma"
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
      title: "Proje Yönetimi",
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Head>
        <title>NovaGraph - Zoho İş Ortağı</title>
        <meta name="description" content="Zoho ile iş süreçlerinizi dijitalleştirin. Müşteri ilişkilerinizi güçlendirin, satış süreçlerinizi optimize edin ve ekip verimliliğinizi artırın." />
        <meta name="keywords" content="Zoho, CRM, E-posta, Proje Yönetimi, Doküman Yönetimi, İş Ortağı, NovaGraph" />
        <meta name="author" content="NovaGraph" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="flex justify-start mb-8">
              <Link href="/is-ortaklari">
                <Button variant="outline" className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white">
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
              className="inline-flex items-center justify-center space-x-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg"
            >
              <Users className="w-4 h-4 flex-shrink-0" />
              <span>İş Ortağımız</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Zoho</span> ile İş Süreçlerinizi Dijitalleştirin
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Kapsamlı iş uygulamaları platformu Zoho ile müşteri ilişkilerinizi güçlendirin, 
              satış süreçlerinizi optimize edin ve ekip verimliliğinizi artırın.
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
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto text-lg"
                onClick={() => openForm("Zoho İş Uygulamaları")}
              >
                İletişime Geç
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Zoho ile Neler Yapabilirsiniz?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İş süreçlerinizi dijitalleştirmek için ihtiyacınız olan tüm uygulamalar Zoho'da.
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
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              NovaGraph ile Zoho Çözümleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zoho'nun güçlü iş uygulamalarını NovaGraph uzmanlığı ile birleştirerek müşterilerinizin iş süreçlerini optimize ediyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 group h-full backdrop-blur-sm"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{solution.title}</h3>
                    <p className="text-gray-600 text-lg">{solution.description}</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4 text-lg">Faydalar</h4>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h4 className="font-bold text-blue-900 mb-2 text-lg">NovaGraph Kullanımı</h4>
                    <p className="text-blue-800">{solution.novaGraphUsage}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
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
              Zoho ile farklı iş süreçleriniz için yönetim çözümleri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 group h-full backdrop-blur-sm"
              >
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    <useCase.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 text-lg">{useCase.description}</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-4 text-lg">Faydalar</h4>
                  <ul className="space-y-3">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Neden Zoho?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kapsamlı iş uygulamaları platformu olan Zoho'nun avantajları.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Entegrasyon</h3>
              <p className="text-gray-600 text-lg">Tüm uygulamalar arasında sorunsuz entegrasyon</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Güvenlik</h3>
              <p className="text-gray-600 text-lg">Endüstri standardı güvenlik ve veri koruması</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ölçeklenebilirlik</h3>
              <p className="text-gray-600 text-lg">İşletmenizin büyümesine uygun ölçeklenebilir çözümler</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
