"use client"

import React from "react"
import { motion } from "framer-motion"
import { Cloud, Server, Database, Shield, Zap, Globe, Users, CheckCircle, ArrowRight, Activity, Lock, Cpu, HardDrive, Network, Monitor, TrendingUp, Scale, Globe2, ArrowLeft, ShoppingCart } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
 

export default function AmazonAWSPage() {
  const { openForm } = useContactForm()

  const features = [
    {
      icon: Cloud,
      title: "Bulut Altyapısı",
      description: "Ölçeklenebilir ve güvenilir bulut altyapısı çözümleri"
    },
    {
      icon: Server,
      title: "Sunucu Hizmetleri",
      description: "Yüksek performanslı sunucu ve işlem gücü hizmetleri"
    },
    {
      icon: Database,
      title: "Veritabanı Çözümleri",
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
      title: "EC2 (Elastic Compute Cloud)",
      description: "Ölçeklenebilir sanal sunucu hizmetleri ile işletmenizin işlem gücü ihtiyaçlarını karşılayın",
      benefits: [
        "İhtiyaca göre ölçeklenebilir sunucu kapasitesi",
        "Farklı işletim sistemleri desteği",
        "Otomatik yedekleme ve kurtarma",
        "Maliyet optimizasyonu"
      ],
      novaGraphUsage: "Müşterilerin web uygulamaları ve sistemleri için güvenilir hosting altyapısı sağlama"
    },
    {
      title: "S3 (Simple Storage Service)",
      description: "Yüksek dayanıklılık ve düşük maliyetli bulut depolama çözümü",
      benefits: [
        "99.999999999% dayanıklılık garantisi",
        "Sınırsız depolama kapasitesi",
        "Gelişmiş güvenlik özellikleri",
        "Otomatik yedekleme ve arşivleme"
      ],
      novaGraphUsage: "Müşteri verilerinin güvenli depolanması ve yedeklenmesi için bulut depolama çözümleri"
    },
    {
      title: "RDS (Relational Database Service)",
      description: "Yönetilen ilişkisel veritabanı hizmeti ile veritabanı yönetimi kolaylaşır",
      benefits: [
        "Otomatik yedekleme ve güncelleme",
        "Yüksek erişilebilirlik",
        "Çoklu bölge desteği",
        "Güvenlik ve uyumluluk"
      ],
      novaGraphUsage: "Müşteri uygulamaları için güvenilir ve yönetilen veritabanı altyapısı kurma"
    },
    {
      title: "CloudFront",
      description: "Global içerik dağıtım ağı ile web sitenizin performansını artırın",
      benefits: [
        "Dünya çapında hızlı içerik dağıtımı",
        "DDoS koruması",
        "SSL/TLS sertifika yönetimi",
        "Gerçek zamanlı analitik"
      ],
      novaGraphUsage: "Müşteri web sitelerinin global performansını optimize etme ve hızlandırma"
    }
  ]

  const useCases = [
    {
      title: "Web Uygulaması Hosting",
      description: "Web uygulamalarınızı AWS'de güvenli ve ölçeklenebilir şekilde barındırın",
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
    <div className="min-h-screen bg-[#fff7e6]">
      
      {/* Hero Section - Dark Background */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-[#fff7e6]">
        <div className="absolute inset-0 bg-[#fff7e6]/20"></div>
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
                <Button variant="outline" className="flex items-center gap-2 bg-white backdrop-blur-md border-[#fff2cc] text-[#663c00] hover:bg-white/30">
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
              className="inline-flex items-center justify-center space-x-2 bg-[#fff7e6] backdrop-blur-md text-[#663c00] px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg border border-[#fff2cc]"
            >
              <Cloud className="w-4 h-4 flex-shrink-0" />
              <span>İş Ortağımız</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#663c00] mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9900] to-[#ffcc80]">Amazon AWS</span> ile Bulut Altyapınızı Güçlendirin
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-[#7a5900] mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Dünyanın en güvenilir ve ölçeklenebilir bulut altyapısı olan Amazon AWS ile işletmenizin dijital dönüşümünü hızlandırın, 
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
                className="bg-white text-orange-800 hover:bg-[#fff7e6] px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto text-lg"
                onClick={() => openForm("Amazon AWS Bulut Hizmetleri")}
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
              Amazon AWS ile Neler Yapabilirsiniz?
            </h2>
            <p className="text-xl text-[#7a5900] max-w-3xl mx-auto">
              Dünyanın en güvenilir bulut altyapısının güçlü özellikleri
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
                    <div className="w-20 h-20 mx-auto mb-4 bg-[#fff7e6] rounded-3xl shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-10 h-10 text-[#663c00]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#7a5900] text-center">
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
      <section className="py-20 bg-[#fff7e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#663c00] mb-6">
              NovaGraph ile Amazon AWS Çözümleri
            </h2>
            <p className="text-xl text-[#7a5900] max-w-3xl mx-auto">
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
                <Card className="h-full bg-white backdrop-blur-md rounded-3xl border border-[#fff2cc] p-8 hover:bg-white transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#663c00] mb-4">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-[#7a5900] text-lg">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#ff9900] mt-0.5 flex-shrink-0" />
                          <span className="text-[#7a5900]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-white backdrop-blur-md rounded-2xl border border-[#fff2cc]">
                      <p className="text-[#7a5900] font-medium">
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
            <p className="text-xl text-[#7a5900] max-w-3xl mx-auto">
              Amazon AWS ile farklı iş ihtiyaçlarınız için bulut çözümleri
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
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#fff7e6] rounded-2xl shadow-xl flex items-center justify-center">
                      <useCase.icon className="w-8 h-8 text-[#ff9900]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {useCase.title}
                    </CardTitle>
                    <CardDescription className="text-[#7a5900]">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#ff9900]" />
                          <span className="text-[#7a5900]">{benefit}</span>
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
      <section className="py-20 bg-[#fff7e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#663c00] mb-6">
              Neden NovaGraph ile Amazon AWS?
            </h2>
            <p className="text-xl text-[#7a5900] max-w-3xl mx-auto">
              Bulut altyapınızı uzman ekibimizle optimize edin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Uzman Ekip",
                description: "AWS platformunda uzmanlaşmış deneyimli ekibimizle hizmetinizdeyiz"
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
                <Card className="h-full bg-white backdrop-blur-md rounded-3xl border border-[#fff2cc] p-8 hover:bg-white transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#fff7e6] rounded-2xl shadow-xl flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-[#ff9900]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#663c00]">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#7a5900] text-center">
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
              NovaGraph'in Amazon AWS Kullanımı
            </h2>
            <p className="text-xl text-[#7a5900] max-w-3xl mx-auto">
              Bulut altyapınızı NovaGraph'in uzmanlığı ile optimize edin
            </p>
          </motion.div>

          <div className="bg-[#fff7e6] rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Bulut Stratejisi Dönüşümü
                </h3>
                <p className="text-[#7a5900] mb-6">
                  NovaGraph olarak Amazon AWS platformunu kullanarak müşterilerinizin bulut stratejilerini 
                  dönüştürüyoruz. Ölçeklenebilir altyapı, güvenlik ve maliyet optimizasyonu ile 
                  dijital dönüşümü hızlandırıyoruz.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#ff9900]" />
                    <span className="text-[#7a5900]">Bulut altyapısı kurulumu ve yönetimi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#ff9900]" />
                    <span className="text-[#7a5900]">Güvenlik ve uyumluluk çözümleri</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#ff9900]" />
                    <span className="text-[#7a5900]">Maliyet optimizasyonu ve yönetimi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#ff9900]" />
                    <span className="text-[#7a5900]">Sürekli destek ve izleme</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-[#fff7e6] rounded-full shadow-2xl flex items-center justify-center">
                  <Cloud className="w-16 h-16 text-[#ff9900]" />
                </div>
                <p className="text-[#7a5900]">
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
