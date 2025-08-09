"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Head from "next/head"
import { 
  MessageSquare, 
  Headphones, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Activity, 
  Target, 
  Globe, 
  ArrowLeft, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  Zap, 
  Shield,
  Bot,
  FileText,
  BarChart3
} from "lucide-react"

export default function ZendeskPage() {
  return (
    <div className="min-h-screen bg-blue-900">
      <Head>
        <title>NovaGraph - Zendesk Müşteri Deneyimi</title>
        <meta name="description" content="Zendesk müşteri deneyimi platformu ile müşteri hizmetlerinizi optimize edin, müşteri memnuniyetini artırın ve iş süreçlerinizi dijitalleştirin." />
        <meta name="keywords" content="Zendesk, müşteri deneyimi, NovaGraph, müşteri hizmetleri, satış, iş süreçleri" />
      </Head>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-blue-800">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/is-ortaklari">
              <Button variant="outline" className="bg-white backdrop-blur-md border-white/20 text-white hover:bg-white/30">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Geri Dön
              </Button>
            </Link>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Badge className="px-6 py-3 bg-white backdrop-blur-md border-white/20 text-white shadow-lg">
                İş Ortağımız
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-white">Müşteri Deneyimi Platformu</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-100">
                Zendesk
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Müşteri hizmetleri, satış ve müşteri deneyimi yönetimi için kapsamlı çözümler sunan 
              Zendesk ile müşteri memnuniyetini artırın ve iş süreçlerinizi optimize edin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="px-8 py-4 bg-white text-blue-800 hover:bg-blue-50 rounded-2xl shadow-2xl hover:shadow-3xl w-full sm:w-auto text-lg"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const event = new CustomEvent('openContactForm', { 
                      detail: { service: 'Zendesk Çözümleri' } 
                    })
                    window.dispatchEvent(event)
                  }
                }}
              >
                İletişime Geç
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Light Background */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Zendesk'in Güçlü Özellikleri
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Müşteri deneyimini dönüştüren kapsamlı platform özellikleri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Müşteri Hizmetleri",
                description: "7/24 müşteri desteği, ticket yönetimi ve otomatik yanıt sistemleri"
              },
              {
                icon: Headphones,
                title: "Çoklu Kanal Desteği",
                description: "E-posta, telefon, chat, sosyal medya ve self-service portalı"
              },
              {
                icon: Users,
                title: "Takım Yönetimi",
                description: "Agent performans takibi, workload dağıtımı ve iş akışı optimizasyonu"
              },
              {
                icon: Bot,
                title: "AI Destekli Chatbot",
                description: "Yapay zeka destekli otomatik müşteri hizmetleri ve akıllı yönlendirmeler"
              },
              {
                icon: BarChart3,
                title: "Analitik & Raporlama",
                description: "Detaylı performans metrikleri, müşteri memnuniyeti analizi ve trend raporları"
              },
              {
                icon: Shield,
                title: "Güvenlik & Uyumluluk",
                description: "GDPR, SOC2, ISO27001 uyumluluğu ve gelişmiş güvenlik özellikleri"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200 text-center">
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
      <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              NovaGraph ile Zendesk Çözümleri
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Müşteri deneyimi platformunuzu NovaGraph'in uzmanlığı ile optimize edin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Platform Kurulumu & Konfigürasyonu",
                description: "Zendesk platformunun kurulumu, özelleştirilmesi ve iş süreçlerinize entegrasyonu",
                features: [
                  "Müşteri hizmetleri süreçlerinin analizi ve optimizasyonu",
                  "Özel ticket formları ve iş akışları tasarımı",
                  "Çoklu kanal entegrasyonu ve otomasyonu",
                  "Agent eğitimi ve süreç dokümantasyonu"
                ]
              },
              {
                title: "Gelişmiş Analitik & Raporlama",
                description: "Müşteri deneyimi verilerinizi analiz ederek iş kararlarınızı destekleyin",
                features: [
                  "Özel dashboard ve KPI raporları tasarımı",
                  "Müşteri memnuniyeti trend analizi",
                  "Agent performans metrikleri ve optimizasyonu",
                  "Predictive analytics ve trend tahminleme"
                ]
              },
              {
                title: "AI & Otomasyon Entegrasyonu",
                description: "Yapay zeka destekli chatbot ve otomasyon çözümleri ile verimliliği artırın",
                features: [
                  "Akıllı chatbot tasarımı ve eğitimi",
                  "Otomatik ticket kategorilendirme ve yönlendirme",
                  "Sentiment analysis ve müşteri duygu analizi",
                  "Predictive customer service çözümleri"
                ]
              },
              {
                title: "Sürekli Optimizasyon & Destek",
                description: "Platform performansını sürekli izleyerek sürekli iyileştirme sağlayın",
                features: [
                  "Düzenli performans değerlendirmesi ve optimizasyonu",
                  "Yeni özellik entegrasyonu ve güncellemeler",
                  "7/24 teknik destek ve sorun giderme",
                  "Kullanıcı eğitimi ve süreç iyileştirme"
                ]
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white backdrop-blur-md rounded-3xl border border-white/20 p-8 hover:bg-white transition-all duration-300">
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
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-100">{feature}</span>
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

      {/* Use Cases Section - Light Background */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Zendesk ile farklı sektörlerde müşteri hizmetleri çözümleri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "E-ticaret Platformu",
                description: "Büyük ölçekli e-ticaret platformunda müşteri hizmetleri süreçlerinin %60 verimlilik artışı ile optimize edilmesi",
                metrics: ["%60 verimlilik artışı", "2 saat ortalama yanıt süresi", "%85 müşteri memnuniyeti"]
              },
              {
                title: "Fintech Şirketi",
                description: "Finansal hizmetler sektöründe güvenlik odaklı müşteri deneyimi platformu kurulumu ve yönetimi",
                metrics: ["%40 maliyet azalması", "7/24 destek", "GDPR uyumluluğu"]
              },
              {
                title: "SaaS Ürün Şirketi",
                description: "Yazılım ürünü için çoklu kanal destek sistemi ve self-service portalı entegrasyonu",
                metrics: ["%70 self-service kullanımı", "3 kanal entegrasyonu", "%90 çözüm oranı"]
              },
              {
                title: "Eğitim Kurumu",
                description: "Online eğitim platformu için öğrenci ve öğretmen destek sistemi kurulumu",
                metrics: ["5000+ aktif kullanıcı", "24 saat yanıt garantisi", "%95 memnuniyet oranı"]
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                      {useCase.title}
                    </CardTitle>
                    <CardDescription className="text-gray-200 text-lg">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3">
                      {useCase.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-100 font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - Dark Background */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Neden NovaGraph ile Zendesk?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Müşteri deneyimi platformunuzu uzman ekibimizle optimize edin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Uzman Ekip",
                description: "Zendesk platformunda uzmanlaşmış deneyimli ekibimizle hizmetinizdeyiz"
              },
              {
                icon: Zap,
                title: "Hızlı Kurulum",
                description: "Hızlı ve etkili platform kurulumu ile kısa sürede operasyonel hale getirin"
              },
              {
                icon: Shield,
                title: "Güvenlik Odaklı",
                description: "En yüksek güvenlik standartları ve uyumluluk gereksinimleri ile çalışırız"
              },
              {
                icon: Activity,
                title: "Sürekli Destek",
                description: "7/24 teknik destek ve sürekli optimizasyon hizmetleri sunuyoruz"
              },
              {
                icon: Target,
                title: "Özelleştirilmiş Çözümler",
                description: "İş süreçlerinize özel tasarlanmış Zendesk çözümleri geliştiriyoruz"
              },
              {
                icon: Star,
                title: "Kanıtlanmış Başarı",
                description: "100+ başarılı Zendesk projesi ile kanıtlanmış uzmanlığımız"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white backdrop-blur-md rounded-3xl border border-white/20 p-8 hover:bg-white transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-xl flex items-center justify-center">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              NovaGraph'in Zendesk Kullanımı
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Müşteri deneyimi platformunuzu NovaGraph'in uzmanlığı ile optimize edin
            </p>
          </motion.div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Müşteri Deneyimi Dönüşümü
                </h3>
                <p className="text-gray-100 mb-6">
                  NovaGraph olarak Zendesk platformunu kullanarak müşterilerinizin müşteri deneyimi 
                  süreçlerini dönüştürüyoruz. Kapsamlı analitik, AI destekli otomasyon ve 
                  çoklu kanal entegrasyonu ile müşteri memnuniyetini artırıyoruz.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-100">Platform kurulumu ve konfigürasyonu</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-100">Özelleştirilmiş iş akışları tasarımı</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-100">AI destekli chatbot entegrasyonu</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-100">Gelişmiş analitik ve raporlama</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-2xl flex items-center justify-center">
                  <MessageSquare className="w-16 h-16 text-white" />
                </div>
                <p className="text-gray-200">
                  Müşteri deneyimi platformunuzu NovaGraph'in uzmanlığı ile optimize edin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
