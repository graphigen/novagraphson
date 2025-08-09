"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/ContactForm"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Video, 
  Camera, 
  Play, 
  Zap, 
  Users, 
  Target, 
  Sparkles, 
  Film, 
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  TrendingUp,
  Monitor,
  Shield,
  Mail,
  MessageSquare,
  Plus,
  ArrowUpRight,
  Laptop,
  Tablet,
  Gauge,
  Eye,
  MousePointer,
  FileText,
  Image,
  Settings,
  Edit,
  Search,
  Send,
  Phone,
  MessageCircle,
  ClipboardList,
  PenTool,
  Code2,
  TestTube,
  GraduationCap,
  Building2,
  ShoppingCart,
  Calendar,
  Mic,
  Award
} from "lucide-react"
import { motion } from "framer-motion"

export default function VideoProduksiyonPage() {
  const { isOpen, service, closeForm, openForm } = useContactForm()

  const services = [
    {
      icon: Building2,
      title: "Kurumsal Tanıtım Filmi",
      description: "Şirketinizin değerlerini, misyonunu ve vizyonunu yansıtan profesyonel kurumsal tanıtım filmleri",
      features: ["Kurumsal kimlik analizi", "Senaryo yazımı", "Profesyonel çekim", "Drone görüntüleri", "Post-prodüksiyon"],
      price: "15.000 ₺'den başlayan",
      color: "blue"
    },
    {
      icon: ShoppingCart,
      title: "Ürün Tanıtım Videosu",
      description: "Ürünlerinizi en etkili şekilde tanıtan, satışları artıran ürün tanıtım videoları",
      features: ["Ürün analizi", "Yaratıcı senaryo", "360° çekim", "Animasyon", "Seslendirme"],
      price: "8.000 ₺'den başlayan",
      color: "green"
    },
    {
      icon: Calendar,
      title: "Etkinlik & Organizasyon Videoları",
      description: "Etkinliklerinizi ölümsüzleştiren, organizasyonlarınızı belgeleyen profesyonel videolar",
      features: ["Etkinlik planlaması", "Çoklu kamera", "Canlı çekim", "Hızlı montaj", "Sosyal medya uyumlu"],
      price: "5.000 ₺'den başlayan",
      color: "purple"
    },
    {
      icon: Smartphone,
      title: "Sosyal Medya İçerikleri",
      description: "Platformlara özel, etkileşimi artıran sosyal medya video içerikleri",
      features: ["Platform analizi", "Trend uyumlu", "Hızlı teslimat", "Etkileşim odaklı", "Çoklu format"],
      price: "2.500 ₺'den başlayan",
      color: "pink"
    },
    {
      icon: Mic,
      title: "Röportaj & Testimonial Videolar",
      description: "Müşteri deneyimlerini ve başarı hikayelerini anlatan etkileyici röportaj videoları",
      features: ["Röportaj planlaması", "Profesyonel ses", "Işık düzeni", "Montaj", "Altyazı"],
      price: "3.500 ₺'den başlayan",
      color: "orange"
    },
    {
      icon: Eye,
      title: "Drone Çekimleri",
      description: "Yüksek kaliteli drone görüntüleri ile projelerinizi farklı bir perspektiften sunun",
      features: ["Drone operatörü", "4K çekim", "Hava görüntüleri", "Güvenlik", "Lisanslı uçuş"],
      price: "4.000 ₺'den başlayan",
      color: "indigo"
    }
  ]

  const features = [
    {
      icon: Camera,
      title: "Profesyonel Ekipman",
      description: "4K kameralar, drone, profesyonel ışık ve ses ekipmanları"
    },
    {
      icon: Users,
      title: "Deneyimli Ekip",
      description: "10+ yıl deneyimli prodüksiyon ekibi"
    },
    {
      icon: Zap,
      title: "Hızlı Teslimat",
      description: "7-15 gün içinde tamamlanan projeler"
    },
    {
      icon: Award,
      title: "Kalite Garantisi",
      description: "%100 müşteri memnuniyeti garantisi"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Brief & Analiz",
      description: "İhtiyaçlarınızı analiz edip detaylı brief hazırlıyoruz"
    },
    {
      step: "02",
      title: "Senaryo & Planlama",
      description: "Yaratıcı senaryo yazımı ve çekim planlaması"
    },
    {
      step: "03",
      title: "Prodüksiyon",
      description: "Profesyonel ekipmanlarla çekim süreci"
    },
    {
      step: "04",
      title: "Post-Prodüksiyon",
      description: "Montaj, renk düzenleme ve finalize"
    }
  ]

  const stats = [
    {
      number: "500+",
      label: "Tamamlanan Proje",
      icon: Film
    },
    {
      number: "50+",
      label: "Mutlu Müşteri",
      icon: Users
    },
    {
      number: "4.9/5",
      label: "Müşteri Puanı",
      icon: Star
    },
    {
      number: "24/7",
      label: "Destek",
      icon: MessageCircle
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Smooth Transition Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              <span>Video Prodüksiyon Hizmetleri</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Video</span> Prodüksiyon
              </h1>
              <p className="text-xl lg:text-2xl text-blue-600 font-semibold">
                Markanızı güçlendirecek profesyonel video içerikler
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
              Markanızı güçlendirecek, hedef kitlenizi etkileyecek profesyonel video prodüksiyon çözümleri sunuyoruz. 
              Kurumsal tanıtım filmlerinden sosyal medya içeriklerine kadar tüm ihtiyaçlarınızı karşılıyoruz.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center group shadow-lg hover:shadow-xl"
                onClick={() => openForm("Video Prodüksiyon")}
              >
                Prodüksiyon Danışmanlığı
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Video Prodüksiyon Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-2">
              Her türlü video prodüksiyon ihtiyacınız için profesyonel çözümler sunuyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow bg-white rounded-2xl overflow-hidden group">
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Neden NovaGraph Video Prodüksiyon?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-2">
              Profesyonel ekipmanlar ve deneyimli ekibimizle kaliteli video içerikler üretiyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow bg-white rounded-2xl">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Çalışma Sürecimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-2">
              Profesyonel video prodüksiyon sürecimiz 4 adımda tamamlanır.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="text-center border-0 shadow-sm bg-white rounded-2xl h-full">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Video Prodüksiyon Projenizi Başlatalım</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
              Markanızı güçlendirecek profesyonel video içerikler için hemen iletişime geçin.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
              <p className="text-gray-600 mb-4">+90 (212) 555 0123</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Hemen Ara</button>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">E-posta</h3>
              <p className="text-gray-600 mb-4">info@novagraph.com.tr</p>
              <button className="text-green-600 hover:text-green-700 font-medium">E-posta Gönder</button>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">+90 (555) 123 4567</p>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">WhatsApp'tan Yaz</button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button 
              onClick={() => openForm("Video Prodüksiyon")}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              İletişime Geç
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <ContactForm isOpen={isOpen} onClose={closeForm} service={service} />
    </main>
  )
} 