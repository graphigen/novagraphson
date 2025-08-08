"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Globe, Users, CheckCircle, ArrowRight, Activity, Lock, Database, Monitor, TrendingUp, Scale, ArrowLeft } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Head from "next/head"

export default function CloudflarePage() {
  const { openForm } = useContactForm()

  const features = [
    {
      icon: Shield,
      title: "Güvenlik",
      description: "DDoS koruması ve web uygulaması güvenlik duvarı"
    },
    {
      icon: Zap,
      title: "Performans",
      description: "Global CDN ile hızlı içerik dağıtımı"
    },
    {
      icon: Globe,
      title: "DNS Hizmetleri",
      description: "Hızlı ve güvenilir DNS çözümleme"
    },
    {
      icon: Lock,
      title: "SSL/TLS",
      description: "Ücretsiz SSL sertifikaları ve şifreleme"
    }
  ]

  const solutions = [
    {
      title: "DDoS Koruması",
      description: "Gelişmiş DDoS koruması ile web sitenizi saldırılara karşı koruyun",
      benefits: [
        "Otomatik DDoS tespiti ve engelleme",
        "Layer 3, 4 ve 7 saldırı koruması",
        "Gerçek zamanlı tehdit analizi",
        "Sıfır kesinti garantisi"
      ],
      novaGraphUsage: "Müşteri web sitelerini DDoS saldırılarına karşı koruma ve kesintisiz hizmet sağlama"
    },
    {
      title: "CDN (Content Delivery Network)",
      description: "Global CDN ile web sitenizin performansını artırın",
      benefits: [
        "200+ ülkede 200+ veri merkezi",
        "Otomatik içerik optimizasyonu",
        "Görsel ve video sıkıştırma",
        "Mobil optimizasyon"
      ],
      novaGraphUsage: "Müşteri web sitelerinin global performansını optimize etme ve hızlandırma"
    },
    {
      title: "Web Application Firewall (WAF)",
      description: "Web uygulamalarınızı kötü niyetli saldırılara karşı koruyun",
      benefits: [
        "SQL injection koruması",
        "XSS saldırı engelleme",
        "Bot trafiği filtreleme",
        "Özelleştirilebilir güvenlik kuralları"
      ],
      novaGraphUsage: "Müşteri web uygulamalarını güvenlik tehditlerine karşı koruma"
    },
    {
      title: "DNS Hizmetleri",
      description: "Hızlı ve güvenilir DNS çözümleme hizmetleri",
      benefits: [
        "100ms'den düşük yanıt süreleri",
        "Otomatik yük dengeleme",
        "Coğrafi yönlendirme",
        "DNS güvenliği (DNSSEC)"
      ],
      novaGraphUsage: "Müşteri domain'lerinin hızlı ve güvenli DNS çözümlemesi"
    }
  ]

  const useCases = [
    {
      title: "E-ticaret Güvenliği",
      description: "E-ticaret sitelerinizi güvenlik tehditlerine karşı koruyun",
      icon: Shield,
      benefits: [
        "Ödeme güvenliği sağlama",
        "Bot trafiği engelleme",
        "DDoS saldırı koruması",
        "SSL sertifika yönetimi"
      ]
    },
    {
      title: "Web Sitesi Hızlandırma",
      description: "Web sitelerinizin yükleme hızını artırın",
      icon: Zap,
      benefits: [
        "Global CDN optimizasyonu",
        "Görsel sıkıştırma",
        "Browser caching",
        "Mobil performans"
      ]
    },
    {
      title: "API Güvenliği",
      description: "API'lerinizi güvenlik tehditlerine karşı koruyun",
      icon: Lock,
      benefits: [
        "API rate limiting",
        "Bot koruması",
        "DDoS koruması",
        "SSL/TLS şifreleme"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-orange-900">
      <Head>
        <title>NovaGraph - Cloudflare İş Ortağı</title>
        <meta name="description" content="Dünyanın en güvenilir CDN ve güvenlik platformu Cloudflare ile web sitenizin performansını artırın, güvenliğinizi sağlayın ve kullanıcı deneyimini optimize edin." />
      </Head>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-orange-800">
        <div className="absolute inset-0 bg-orange-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="flex justify-start mb-8">
              <Link href="/is-ortaklari">
                <Button variant="outline" className="flex items-center gap-2 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30">
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
              className="inline-flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg border border-white/30"
            >
              <Shield className="w-4 h-4 flex-shrink-0" />
              <span>İş Ortağımız</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-100">Cloudflare</span> ile Web Güvenliğinizi Güçlendirin
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Dünyanın en güvenilir CDN ve güvenlik platformu Cloudflare ile web sitenizin performansını artırın, 
              güvenliğinizi sağlayın ve kullanıcı deneyimini optimize edin.
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
                onClick={() => openForm("Cloudflare Güvenlik Hizmetleri")}
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
              Cloudflare ile Neler Yapabilirsiniz?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Web sitenizin güvenliğini ve performansını artırmak için ihtiyacınız olan tüm araçlar Cloudflare'de.
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
                    <div className="w-20 h-20 mx-auto mb-4 bg-orange-500 rounded-3xl shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-orange-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              NovaGraph ile Cloudflare Çözümleri
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Web güvenliğinizi NovaGraph'in uzmanlığı ile optimize edin
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
                <Card className="h-full bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 hover:bg-white/20 transition-all duration-300">
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
                    <div className="mt-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
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
              Cloudflare ile farklı web siteleriniz için güvenlik ve performans çözümleri
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
                    <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-2xl shadow-xl flex items-center justify-center">
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
      <section className="py-20 bg-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Neden NovaGraph ile Cloudflare?
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Web güvenliğinizi uzman ekibimizle optimize edin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Uzman Ekip",
                description: "Cloudflare platformunda uzmanlaşmış deneyimli ekibimizle hizmetinizdeyiz"
              },
              {
                icon: Zap,
                title: "Hızlı Kurulum",
                description: "Hızlı ve güvenli güvenlik sistemi kurulumu ile kısa sürede sonuç alın"
              },
              {
                icon: Shield,
                title: "Güvenlik",
                description: "Endüstri standardı güvenlik ve DDoS koruması çözümleri"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 hover:bg-white/20 transition-all duration-300">
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
              NovaGraph'in Cloudflare Kullanımı
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Web güvenliğinizi NovaGraph'in uzmanlığı ile optimize edin
            </p>
          </motion.div>

          <div className="bg-orange-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Güvenlik Stratejisi Dönüşümü
                </h3>
                <p className="text-gray-700 mb-6">
                  NovaGraph olarak Cloudflare platformunu kullanarak müşterilerinizin web güvenlik stratejilerini 
                  dönüştürüyoruz. DDoS koruması, CDN optimizasyonu ve güvenlik çözümleri ile 
                  web sitelerini koruyoruz.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">DDoS koruması ve güvenlik çözümleri</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">CDN optimizasyonu ve performans artırımı</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">SSL sertifika yönetimi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">Sürekli destek ve izleme</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-orange-500 rounded-full shadow-2xl flex items-center justify-center">
                  <Shield className="w-16 h-16 text-white" />
                </div>
                <p className="text-gray-600">
                  Web güvenliğinizi NovaGraph'in uzmanlığı ile optimize edin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
