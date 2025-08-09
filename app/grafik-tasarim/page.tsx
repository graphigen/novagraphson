"use client"

import React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ContactForm } from "@/components/ContactForm"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, 
  TrendingUp, 
  Target, 
  Globe, 
  ArrowRight, 
  Star, 
  Award, 
  Clock, 
  DollarSign,
  CheckCircle,
  Eye,
  Instagram,
  Monitor,
  Phone,
  Mail,
  MessageCircle,
  RefreshCw,
  Image,
  Package,
  BookOpen,
  Palette,
  Brush,
  Grid,
  Layout,
  Sparkles,
  Brain,
  RotateCcw as RotateIcon,
  Target as TargetIcon2,
  Zap as ZapIcon2,
  CheckCircle as CheckCircleIcon2,
  Heart
} from "lucide-react"

export default function GrafikTasarimPage() {
  const [activeTab, setActiveTab] = useState("logo")
  const { isOpen, service, closeForm, openForm } = useContactForm()
  
  const designProcessRef = useRef(null)
  const servicesRef = useRef(null)
  const toolsRef = useRef(null)
  
  const isDesignProcessInView = useInView(designProcessRef, { once: true, margin: "-100px" })
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const isToolsInView = useInView(toolsRef, { once: true, margin: "-100px" })

  const designStages = [
    { 
      stage: "Keşif", 
      icon: Search, 
      color: "bg-blue-100 text-blue-600",
      description: "Markanızı ve hedef kitlenizi analiz ediyoruz",
      tools: ["Marka Analizi", "Rekabet Araştırması", "Hedef Kitle"]
    },
    { 
      stage: "Konsept", 
      icon: Palette, 
      color: "bg-indigo-100 text-indigo-600",
      description: "Yaratıcı konseptler geliştiriyoruz",
      tools: ["Mood Board", "Sketches", "Renk Paleti"]
    },
    { 
      stage: "Tasarım", 
      icon: Brush, 
      color: "bg-blue-100 text-blue-600",
      description: "Profesyonel tasarımlar oluşturuyoruz",
      tools: ["Adobe Creative Suite", "Figma", "Sketch"]
    },
    { 
      stage: "Revizyon", 
      icon: RefreshCw, 
      color: "bg-gray-100 text-gray-600",
      description: "Mükemmelliğe ulaşana kadar iyileştiriyoruz",
      tools: ["Müşteri Geri Bildirimi", "Optimizasyon", "Final"]
    }
  ]

  const services = [
    {
      id: "logo",
      title: "Logo & Kurumsal Kimlik",
      description: "Markanızı temsil edecek benzersiz logo tasarımları",
      icon: Image,
      color: "from-blue-500 to-blue-600",
      features: ["Logo Tasarımı", "Kartvizit", "Antetli Kağıt", "Kurumsal Renkler"]
    },
    {
      id: "packaging",
      title: "Ambalaj Tasarımı",
      description: "Ürününüzü öne çıkaran yaratıcı ambalaj tasarımları",
      icon: Package,
      color: "from-indigo-500 to-indigo-600",
      features: ["Kutu Tasarımı", "Etiket Tasarımı", "3D Mockup", "Üretim Hazırlığı"]
    },
    {
      id: "social",
      title: "Sosyal Medya Tasarımı",
      description: "Instagram, Facebook ve diğer platformlar için etkileyici tasarımlar",
      icon: Instagram,
      color: "from-blue-500 to-indigo-600",
      features: ["Post Tasarımı", "Story Tasarımı", "Banner Tasarımı", "Template Set"]
    },
    {
      id: "catalog",
      title: "Katalog & Broşür Tasarımı",
      description: "Profesyonel katalog ve broşür tasarımları",
      icon: BookOpen,
      color: "from-blue-600 to-blue-700",
      features: ["Katalog Tasarımı", "Broşür Tasarımı", "Flyer Tasarımı", "Baskı Hazırlığı"]
    },
    {
      id: "3d",
      title: "3D Ürün Görselleştirme",
      description: "Ürünlerinizi 3D olarak görselleştirin",
      icon: RotateIcon,
      color: "from-indigo-600 to-indigo-700",
      features: ["3D Modelleme", "Render", "Animasyon", "VR Görüntüleme"]
    },
    {
      id: "uiux",
      title: "UI/UX Arayüz Tasarımı",
      description: "Kullanıcı dostu ve modern arayüz tasarımları",
      icon: Monitor,
      color: "from-blue-500 to-indigo-600",
      features: ["Web Tasarımı", "Mobil App", "Prototip", "Kullanıcı Testi"]
    }
  ]

  const designTools = [
    {
      category: "Adobe Creative Suite",
      tools: [
        { name: "Photoshop", icon: Image, description: "Görsel düzenleme ve manipülasyon" },
        { name: "Illustrator", icon: Brush, description: "Vektör grafik tasarımı" },
        { name: "InDesign", icon: BookOpen, description: "Sayfa düzeni ve yayıncılık" },
        { name: "XD", icon: Monitor, description: "UI/UX prototipleme" }
      ]
    },
    {
      category: "Modern Araçlar",
      tools: [
        { name: "Figma", icon: Grid, description: "İşbirlikçi tasarım platformu" },
        { name: "Sketch", icon: Layout, description: "Mac için tasarım aracı" },
        { name: "Canva", icon: Sparkles, description: "Hızlı tasarım çözümleri" },
        { name: "Blender", icon: RotateIcon, description: "3D modelleme ve animasyon" }
      ]
    }
  ]

  const designPrinciples = [
    {
      principle: "Hiyerarşi",
      icon: TargetIcon2,
      description: "Görsel önem sırası ile bilgiyi organize ediyoruz",
      color: "from-blue-500 to-blue-600"
    },
    {
      principle: "Denge",
      icon: ZapIcon2,
      description: "Simetrik ve asimetrik denge ile uyumlu tasarımlar",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      principle: "Kontrast",
      icon: CheckCircleIcon2,
      description: "Renk, boyut ve tipografi ile görsel çekicilik",
      color: "from-blue-600 to-blue-700"
    },
    {
      principle: "Tutarlılık",
      icon: Grid,
      description: "Marka kimliği boyunca tutarlı tasarım dili",
      color: "from-indigo-600 to-indigo-700"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Smooth Transition Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Palette className="w-4 h-4" />
              <span>Grafik Tasarım Hizmetleri</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Yaratıcı ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Profesyonel</span> Grafik Tasarım
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Markanızı öne çıkaran etkileyici grafik tasarım çözümleri.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openForm("Grafik Tasarım")}
              >
                Teklif Al
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tasarım Sürecimiz */}
      <section className="mobile-section bg-white" ref={designProcessRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
              <Brush className="w-4 h-4 mr-2" />
              Profesyonel Süreç
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tasarım Sürecimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her projede sistematik bir yaklaşım izliyoruz. Keşiften final teslime kadar her adımı profesyonelce yönetiyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 mobile-grid-gap lg:gap-16 items-center">
            {/* Sol Taraf - Flat Minimal Açıklama */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Detaylı Analiz</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Markanızı, hedef kitlenizi ve rakiplerinizi detaylı olarak analiz ediyoruz. 
                      Bu analiz sonucunda size en uygun tasarım stratejisini belirliyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Palette className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Yaratıcı Konsept</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Analiz sonuçlarına göre yaratıcı konseptler geliştiriyoruz. 
                      Mood board, renk paleti ve tipografi seçimleriyle markanızın kişiliğini yansıtıyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brush className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Profesyonel Tasarım</h3>
                    <p className="text-gray-600 leading-relaxed">
                      En son tasarım araçları ve teknolojileri kullanarak profesyonel tasarımlar oluşturuyoruz. 
                      Her detayı özenle planlıyoruz.
                    </p>
                  </div>
                </div>
              </div>

              {/* Flat Minimal İstatistikler */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-xs font-semibold text-blue-600">+25%</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Tamamlanan Proje</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Heart className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-xs font-semibold text-blue-600">+15%</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">300+</div>
                  <div className="text-sm text-gray-600">Mutlu Müşteri</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-xs font-semibold text-blue-600">Hızlı</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">3-5 Gün</div>
                  <div className="text-sm text-gray-600">Ortalama Teslimat</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-xs font-semibold text-blue-600">+3</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <div className="text-sm text-gray-600">Tasarım Ödülü</div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Flat Minimal Süreç Kartları */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {designStages.map((stage, index) => (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group"
                >
                  <Card className="border border-gray-200 bg-white rounded-xl overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                    <CardHeader className="p-4 text-center bg-gray-50 border-b border-gray-200">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm border border-gray-200">
                        <stage.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">{stage.stage}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-3">
                        <div className="text-gray-600 text-sm leading-relaxed">{stage.description}</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {stage.tools.map((tool, idx) => (
                            <span key={idx} className="inline-block bg-gray-50 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium border border-gray-200 hover:bg-gray-100 transition-colors">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler Bölümü */}
      <section className="mobile-section bg-gray-50" ref={servicesRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
              <Palette className="w-4 h-4 mr-2" />
              Uzman Hizmetler
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Grafik Tasarım Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her ihtiyaca uygun, özelleştirilmiş grafik tasarım çözümleri sunuyoruz.
            </p>
          </div>
          
          {/* Flat Minimal Modern Grid Tasarımı */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mobile-grid-gap">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group"
              >
                <Card className="border border-gray-200 bg-white rounded-2xl h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                  {/* Flat Header */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
                    {/* Minimal Background Pattern */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-4 right-4 w-16 h-16 border border-gray-300 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 bg-gray-300 rounded-full"></div>
                    </div>
                    
                    {/* Service Icon - Flat Design */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-200">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    
                    {/* Service Title - Minimal Typography */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  {/* Flat Content */}
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Features as Minimal Tags */}
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-200 hover:bg-gray-100 transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tasarım Araçları */}
      <section className="py-20 bg-white" ref={toolsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
              <Grid className="w-4 h-4 mr-2" />
              Profesyonel Araçlar
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kullandığımız Tasarım Araçları</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En güncel ve profesyonel tasarım araçlarını kullanarak kaliteli sonuçlar elde ediyoruz.
            </p>
          </div>
          
          <div className="space-y-12">
            {designTools.map((category, categoryIndex) => (
              <div key={category.category}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (toolIndex * 0.1) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -4 }}
                    >
                      <Card className="border border-gray-200 bg-white rounded-xl h-full hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shadow-sm border border-gray-200 mb-4 mx-auto">
                            <tool.icon className="w-6 h-6 text-blue-600" />
                  </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
                </CardContent>
              </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tasarım Prensipleri */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
              <Brain className="w-4 h-4 mr-2" />
              Tasarım Felsefesi
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tasarım Prensiplerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her tasarımda uyguladığımız temel prensiplerle etkili ve anlamlı sonuçlar elde ediyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPrinciples.map((principle, index) => (
              <motion.div
                key={principle.principle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <Card className="border border-gray-200 bg-white rounded-xl h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shadow-sm border border-gray-200 mb-4">
                      <principle.icon className="w-6 h-6 text-blue-600" />
                </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{principle.principle}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Tasarım Projenizi Başlatmaya Hazır mısınız?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uzman ekibimizle birlikte markanızı görsel olarak güçlendirin.
            </p>
          </div>

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

          <div className="text-center">
            <button 
              onClick={() => openForm("Grafik Tasarım")}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              İletişime Geç
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <ContactForm isOpen={isOpen} onClose={closeForm} service={service} />
    </div>
  )
} 