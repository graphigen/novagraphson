"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactForm } from "@/components/ContactForm"
import { useContactForm } from "@/contexts/ContactFormContext"
import { 
  Search, 
  TrendingUp, 
  Target, 
  Globe, 
  ArrowRight, 
  DollarSign,
  CheckCircle,
  Eye,
  MousePointer,
  Instagram,
  Smartphone,
  Monitor,
  Phone,
  Mail,
  MessageCircle,
  User,
  Download,
  Heart,
  Send,
  Video,
  Smile,
  MoreHorizontal,
  Wifi,
  Battery,
  Signal,
  ShoppingCart,
  Share2,
  BarChart3
} from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function DijitalPazarlamaPage() {
  const [activeTab, setActiveTab] = useState("whatsapp")
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const { isOpen, service, closeForm, openForm } = useContactForm()
  
  const omniChannelRef = useRef(null)
  const remarketingRef = useRef(null)
  const funnelRef = useRef(null)
  const dashboardRef = useRef(null)
  
  const isOmniChannelInView = useInView(omniChannelRef, { once: true, margin: "-100px" })
  const isRemarketingInView = useInView(remarketingRef, { once: true, margin: "-100px" })
  const isFunnelInView = useInView(funnelRef, { once: true, margin: "-100px" })
  const isDashboardInView = useInView(dashboardRef, { once: true, margin: "-100px" })

  const funnelStages = [
    { 
      stage: "Farkındalık", 
      icon: Eye, 
      color: "bg-blue-100 text-blue-600",
      description: "Potansiyel müşterilerin markanızı keşfetmesi",
      platforms: ["Arama Motorları", "Sosyal Medya", "Display Reklamlar"],
      percentage: "100%"
    },
    { 
      stage: "İlgi", 
      icon: Heart, 
      color: "bg-purple-100 text-purple-600",
      description: "Hedef kitlenin ürünlerinize ilgi göstermesi",
      platforms: ["Retargeting", "E-posta", "Sosyal Medya"],
      percentage: "45%"
    },
    { 
      stage: "Değerlendirme", 
      icon: Search, 
      color: "bg-green-100 text-green-600",
      description: "Müşterilerin detaylı araştırma yapması",
      platforms: ["Arama Reklamları", "Karşılaştırma", "İncelemeler"],
      percentage: "25%"
    },
    { 
      stage: "Satın Alma", 
      icon: ShoppingCart, 
      color: "bg-orange-100 text-orange-600",
      description: "Dönüşümün gerçekleşmesi",
      platforms: ["Dönüşüm Optimizasyonu", "Remarketing", "Kişiselleştirme"],
      percentage: "12%"
    }
  ]

  const remarketingSteps = [
    { step: 1, title: "Ürün İnceleme", description: "Kullanıcı ürün sayfasını ziyaret eder", icon: Eye, color: "bg-blue-500", action: "Ürünü inceliyor" },
    { step: 2, title: "Site Terk", description: "Kullanıcı siteyi terk eder", icon: ArrowRight, color: "bg-gray-500", action: "Siteyi terk ediyor" },
    { step: 3, title: "Google'da Görünüm", description: "Arama sonuçlarında reklam", icon: Search, color: "bg-green-500", action: "Google'da reklam görüyor" },
    { step: 4, title: "Instagram'da Görünüm", description: "Sosyal medyada reklam", icon: Instagram, color: "bg-purple-500", action: "Instagram'da reklam görüyor" },
    { step: 5, title: "Haber Sitesinde", description: "Display reklam ağında", icon: Globe, color: "bg-orange-500", action: "Haber sitesinde reklam görüyor" },
    { step: 6, title: "Dönüşüm", description: "Kullanıcı satın alma yapar", icon: CheckCircle, color: "bg-green-600", action: "Satın alma yapıyor!" }
  ]

  const funnelSteps = [
    { step: "Reklam Tıklaması", count: "15,420", percentage: "100%", color: "bg-blue-500" },
    { step: "Web Ziyareti", count: "12,890", percentage: "83.6%", color: "bg-indigo-500" },
    { step: "Form Doldurma", count: "3,210", percentage: "20.8%", color: "bg-blue-600" },
    { step: "Satın Alma", count: "1,890", percentage: "12.3%", color: "bg-blue-700" }
  ]

  const dashboardData = [
    { metric: "Gösterimler", value: "2.4M", change: "+15%", icon: Eye, color: "text-blue-600" },
    { metric: "Tıklamalar", value: "45.2K", change: "+8%", icon: MousePointer, color: "text-blue-600" },
    { metric: "Dönüşümler", value: "3.8K", change: "+12%", icon: CheckCircle, color: "text-blue-600" },
    { metric: "ROAS", value: "4.2x", change: "+0.8x", icon: DollarSign, color: "text-blue-600" }
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isRemarketingInView) {
      setIsPlaying(true);
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          const nextStep = (prev + 1) % remarketingSteps.length;
          return nextStep;
        });
      }, 3000);
    } else {
      setIsPlaying(false);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRemarketingInView, remarketingSteps.length]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Smooth Transition Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Dijital Reklam Uzmanı
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Dijital Reklam Yönetimi
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Tüm dijital kanallarda markanızı öne çıkarın. Reklamlarınız doğru yerde, doğru kişiye, doğru zamanda ulaşsın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => openForm("Dijital Pazarlama")}
              >
                İletişime Geç
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Omni-Channel Reklam Stratejisi - Yeniden Tasarlandı */}
      <section className="py-20 bg-white" ref={omniChannelRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Her Kanaldan Erişim: Omni-Channel Yaklaşım</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşteriniz hangi platformda olursa olsun, markanız her zaman görünür. Omni-channel stratejimizle reklamlarınız potansiyel müşterinizin çevresini kuşatır.
            </p>
          </div>
          
          {/* Yeni Omni-Channel Tasarım */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol Taraf - Açıklama ve İstatistikler */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Çoklu Platform Stratejisi</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Google Ads'den TikTok'a, Meta'dan Snapchat'e kadar tüm dijital platformlarda 
                      markanızı konumlandırıyoruz. Her platformun kendine özgü avantajlarını kullanarak 
                      maksimum erişim sağlıyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Hedef Kitle Optimizasyonu</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Her platform için özel hedef kitle segmentasyonu yapıyoruz. Demografik, 
                      davranışsal ve ilgi alanına göre reklamlarınızı optimize ediyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sürekli Performans İzleme</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Tüm platformlardaki performansınızı gerçek zamanlı olarak izliyoruz. 
                      Hangi platformun daha iyi sonuç verdiğini analiz ederek bütçenizi optimize ediyoruz.
                    </p>
                  </div>
                </div>
              </div>

              {/* Platform İstatistikleri */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">6+</div>
                  <div className="text-sm text-gray-600">Platform</div>
                </div>
                <div className="text-center p-4 bg-blue-100 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700">2.5M+</div>
                  <div className="text-sm text-gray-600">Toplam Erişim</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">4.2x</div>
                  <div className="text-sm text-gray-600">Ortalama ROAS</div>
                </div>
                <div className="text-center p-4 bg-blue-100 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700">85%</div>
                  <div className="text-sm text-gray-600">Başarı Oranı</div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Funnel Kartları */}
            <div className="grid grid-cols-2 gap-4">
              {funnelStages.map((stage, index) => (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="border-0 shadow-sm bg-white rounded-xl overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader className="p-4 text-center">
                      <div className={`w-12 h-12 ${stage.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <stage.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-base font-bold text-gray-900">{stage.stage}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 text-center">
                      <div className="space-y-2">
                        <div className="text-sm text-gray-600">{stage.description}</div>
                        <div className="text-xs text-gray-500">
                          <div className="font-semibold text-gray-900 mb-1">{stage.percentage}</div>
                          <div className="text-xs">
                            {stage.platforms.map((platform, idx) => (
                              <span key={idx} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded mr-1 mb-1 text-xs">
                                {platform}
                              </span>
                            ))}
                          </div>
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

      {/* Raporlama & Ölçümleme - Taşındı */}
      <section className="py-20 bg-gray-50" ref={dashboardRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Her Tıklama Takibimizde</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tüm kanallardan alınan verileri analiz ederek detaylı raporlar sunuyoruz. Hangi kampanya ne kadar dönüşüm getirdi, şeffaf biçimde gösteriyoruz.
            </p>
          </div>
          
          {/* Analytics Dashboard Component */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gray-50 p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Reklam Performans Dashboard</h3>
                  <p className="text-sm text-gray-600">Son 30 günlük veriler</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Rapor İndir</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <Share2 className="w-4 h-4" />
                    <span>Paylaş</span>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6">
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {dashboardData.map((metric, index) => (
                  <motion.div
                    key={metric.metric}
                    className="bg-gray-50 rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <metric.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="text-sm font-semibold text-blue-600">{metric.change}</div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.metric}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Chart Placeholder */}
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <div className="text-lg font-semibold text-gray-900 mb-2">Performans Grafiği</div>
                <div className="text-sm text-gray-600">Detaylı analiz ve trend grafikleri burada görüntülenir</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giden Müşteri Geri Gelir - Yeni Tasarım */}
      <section className="py-20 bg-white" ref={remarketingRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giden Müşteri Geri Gelir</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ziyaret edip ayrılan kullanıcıları yeniden yakalıyoruz. Etkili yeniden pazarlama stratejilerimizle dönüşüm oranlarını artırıyoruz.
            </p>
          </div>

          {/* Dikey Akış Animasyonu */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Merkez Çizgi */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 h-full"></div>

              {/* Adım 1: Kullanıcı Web Sitesini Terk Eder */}
              <motion.div
                className="relative mb-16"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  {/* Sol Taraf - Açıklama */}
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                      <div className="flex items-center justify-end space-x-3 mb-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <ArrowRight className="w-5 h-5 text-gray-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Site Terk</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Kullanıcı web sitesini terk eder</p>
                    </div>
                  </div>

                  {/* Merkez Nokta */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-white shadow-md"></div>

                  {/* Sağ Taraf - Web Sitesi Mockup */}
                  <div className="w-1/2 pl-8">
                    <motion.div
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                      initial={{ scale: 1 }}
                      whileInView={{ scale: [1, 0.95, 1] }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {/* Browser Header */}
                      <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">novagraph.com.tr</div>
                      </div>
                      {/* Site Content */}
                      <div className="p-4">
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded mb-3 w-3/4"></div>
                        <div className="h-20 bg-gray-100 rounded mb-3"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </motion.div>
                    {/* Kullanıcı İkonu */}
                    <motion.div
                      className="absolute left-1/2 transform -translate-x-1/2 mt-4"
                      initial={{ x: 0 }}
                      whileInView={{ x: [0, 20, 40] }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Adım 2: Google Ads Üzerinden Yeniden Hedefleme */}
              <motion.div
                className="relative mb-16"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  {/* Sol Taraf - Google Ads Mockup */}
                  <div className="w-1/2 pr-8">
                    <motion.div
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {/* Google Header */}
                      <div className="bg-white px-4 py-3 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                            <Search className="w-3 h-3 text-white" />
                          </div>
                          <div className="text-sm font-medium text-gray-900">Google Arama</div>
                        </div>
                      </div>
                      {/* Search Results */}
                      <div className="p-4">
                        <div className="space-y-3">
                          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                          {/* Ad */}
                          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                            <div className="flex items-center space-x-2 mb-1">
                              <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Reklam</div>
                              <div className="text-xs text-gray-500">novagraph.com.tr</div>
                            </div>
                            <div className="text-sm font-medium text-blue-700 mb-1">Web Tasarım Hizmetleri</div>
                            <div className="text-xs text-gray-600">Profesyonel web tasarım çözümleri. %25 indirim fırsatı!</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Merkez Nokta */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>

                  {/* Sağ Taraf - Açıklama */}
                  <div className="w-1/2 pl-8">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Search className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Google Ads</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Arama sonuçlarında hedefli reklam</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Adım 3: Instagram (Meta Ads) Üzerinde Yeniden Karşılaşma */}
              <motion.div
                className="relative mb-16"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  {/* Sol Taraf - Açıklama */}
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                      <div className="flex items-center justify-end space-x-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Instagram className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Instagram Ads</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Sosyal medyada sponsorlu içerik</p>
                    </div>
                  </div>

                  {/* Merkez Nokta */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>

                  {/* Sağ Taraf - Instagram Mockup */}
                  <div className="w-1/2 pl-8">
                    <motion.div
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      {/* Instagram Header */}
                      <div className="bg-white px-4 py-3 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
                              <Instagram className="w-3 h-3 text-white" />
                            </div>
                            <div className="text-sm font-medium text-gray-900">Instagram</div>
                          </div>
                          <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Sponsorlu</div>
                        </div>
                      </div>
                      {/* Post Content */}
                      <div className="p-4">
                        <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-3 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <Monitor className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-xs text-blue-700 font-medium">Web Tasarım</div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-gray-900 mb-1">Modern Web Tasarım Hizmetleri</div>
                        <div className="text-xs text-gray-600 mb-3">Profesyonel ve dönüşüm odaklı web siteleri</div>
                        <div className="bg-blue-600 text-white text-center py-2 rounded-lg text-sm font-medium">
                          Teklif Al
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Adım 4: WhatsApp ve SMS Bildirimi */}
              <motion.div
                className="relative mb-16"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  {/* Sol Taraf - Telefon Mockup */}
                  <div className="w-1/2 pr-8">
                    <motion.div
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      viewport={{ once: true }}
                    >
                      {/* Phone Header */}
                      <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-3 h-3 text-white" />
                          </div>
                          <div className="text-sm font-medium">WhatsApp</div>
                        </div>
                        <div className="text-xs">14:32</div>
                      </div>
                      {/* Notifications */}
                      <div className="p-4 space-y-3">
                        {/* WhatsApp Notification */}
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <div className="text-xs font-medium text-gray-900">NovaGraph</div>
                          </div>
                          <div className="text-xs text-gray-700">🎉 Kaçırdığınız fırsatı yakalayın! %25 indirim hala geçerli.</div>
                        </div>
                        {/* SMS Notification */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                            <div className="text-xs font-medium text-gray-900">SMS</div>
                          </div>
                          <div className="text-xs text-gray-700">NovaGraph: Özel teklifiniz hazır! novagraph.com.tr</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Merkez Nokta */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-md"></div>

                  {/* Sağ Taraf - Açıklama */}
                  <div className="w-1/2 pl-8">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">WhatsApp & SMS</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Doğrudan mesajlaşma kanalları</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Adım 5: Mail Marketing */}
              <motion.div
                className="relative mb-16"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  {/* Sol Taraf - Açıklama */}
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                      <div className="flex items-center justify-end space-x-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">E-Mail Marketing</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Kişiselleştirilmiş e-posta kampanyası</p>
                    </div>
                  </div>

                  {/* Merkez Nokta */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-700 rounded-full border-4 border-white shadow-md"></div>

                  {/* Sağ Taraf - Email Mockup */}
                  <div className="w-1/2 pl-8">
                    <motion.div
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      {/* Email Header */}
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                              <Mail className="w-3 h-3 text-white" />
                            </div>
                            <div className="text-sm font-medium text-gray-900">Gelen Kutusu</div>
                          </div>
                          <div className="text-xs text-gray-500">14:35</div>
                        </div>
                      </div>
                      {/* Email Content */}
                      <div className="p-4">
                        <div className="border-l-4 border-blue-600 pl-3 mb-3">
                          <div className="text-sm font-medium text-gray-900">🚀 Web Tasarım Projenizi Başlatalım!</div>
                          <div className="text-xs text-gray-600">NovaGraph <span className="text-gray-400">•</span> info@novagraph.com.tr</div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 text-center">
                          <div className="text-lg font-bold text-blue-700 mb-2">%25 İndirim</div>
                          <div className="text-sm text-gray-700 mb-3">Web tasarım hizmetlerimizde özel fırsat</div>
                          <div className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium inline-block">
                            Teklif Al
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Adım 6: Kullanıcı Siteye Geri Döner */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  {/* Sol Taraf - Gelişmiş Site Mockup */}
                  <div className="w-1/2 pr-8">
                    <motion.div
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.4 }}
                      viewport={{ once: true }}
                    >
                      {/* Browser Header */}
                      <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">novagraph.com.tr</div>
                      </div>
                      {/* Enhanced Site Content */}
                      <div className="p-4">
                        <div className="h-4 bg-blue-600 rounded mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded mb-3 w-3/4"></div>
                        <div className="h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded mb-3 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-6 h-6 bg-blue-600 rounded-full mx-auto mb-1 flex items-center justify-center">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <div className="text-xs text-blue-700 font-medium">Hoş Geldiniz!</div>
                          </div>
                        </div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </motion.div>
                    {/* Kullanıcı İkonu - Geri Dönüş */}
                    <motion.div
                      className="absolute left-1/2 transform -translate-x-1/2 mt-4"
                      initial={{ x: 40 }}
                      whileInView={{ x: [40, 20, 0] }}
                      transition={{ duration: 1.5, delay: 1.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Merkez Nokta */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-md"></div>

                  {/* Sağ Taraf - Başarı Mesajı */}
                  <div className="w-1/2 pl-8">
                    <motion.div
                      className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Başarılı Geri Dönüş!</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Müşteri yeniden siteye döndü ve satın alma yaptı</p>
                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <div className="text-sm font-medium text-green-800">🎉 Dönüşüm Tamamlandı</div>
                        <div className="text-xs text-green-600 mt-1">Müşteri başarıyla kazanıldı</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp + SMS + Mail Marketing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Direkt Mesajlaşma Kanalları</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Etkileşimi artıran, doğrudan mesaj kanallarıyla hedef kitlenize ulaşın.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol Taraf - Açıklama */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp Pazarlama</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Müşterilerinizle doğrudan iletişim kurun. Yüksek açılma oranları ve anında yanıt alma imkanı ile 
                      satışlarınızı artırın. Kişiselleştirilmiş mesajlar ve otomatik yanıtlar ile müşteri deneyimini iyileştirin.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">SMS Pazarlama</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Geniş kitlelere hızlıca ulaşın. %98 açılma oranı ile en etkili pazarlama kanallarından biri. 
                      Acil kampanyalar, indirim duyuruları ve özel teklifler için ideal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">E-Mail Pazarlama</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Detaylı içerikler ve görsel zenginlik ile müşterilerinizi etkileyin. Segmentasyon ve 
                      kişiselleştirme ile hedef kitlenize özel kampanyalar oluşturun.
                    </p>
                  </div>
                </div>
              </div>

              {/* İstatistikler */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">SMS Açılma Oranı</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-700">85%</div>
                  <div className="text-sm text-gray-600">WhatsApp Yanıt Oranı</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">42%</div>
                  <div className="text-sm text-gray-600">E-Mail Tıklama Oranı</div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Mockup'lar */}
            <div>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="whatsapp" className="flex items-center space-x-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>WhatsApp</span>
                  </TabsTrigger>
                  <TabsTrigger value="sms" className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4" />
                    <span>SMS</span>
                  </TabsTrigger>
                  <TabsTrigger value="mail" className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>E-Mail</span>
                  </TabsTrigger>
                </TabsList>
                
                {/* Tab Content Container - Sabit Yükseklik */}
                <div className="min-h-[500px] relative">
                  <TabsContent value="whatsapp" className="absolute inset-0 data-[state=inactive]:hidden">
                    {/* WhatsApp Mockup */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden max-w-sm mx-auto h-full flex flex-col">
                      {/* Phone Header */}
                      <div className="bg-green-500 text-white p-4 flex items-center justify-between flex-shrink-0">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold">NovaGraph</div>
                            <div className="text-xs opacity-90">Çevrimiçi</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Video className="w-5 h-5" />
                          <Phone className="w-5 h-5" />
                          <MoreHorizontal className="w-5 h-5" />
                        </div>
                      </div>
                      
                      {/* Chat Messages */}
                      <div className="p-4 space-y-4 bg-gray-50 flex-1 overflow-y-auto">
                        {/* Date Separator */}
                        <div className="text-center">
                          <div className="inline-block bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
                            Bugün
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <div className="bg-green-500 text-white rounded-lg px-4 py-2 max-w-xs relative">
                            <div className="text-sm">Merhaba! Size nasıl yardımcı olabilirim? 👋</div>
                            <div className="text-xs opacity-75 mt-1 flex items-center justify-end space-x-1">
                              <span>14:32</span>
                              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg px-4 py-2 max-w-xs shadow-sm relative">
                            <div className="text-sm">Web tasarım hizmetleriniz hakkında bilgi almak istiyorum</div>
                            <div className="text-xs text-gray-500 mt-1">14:33</div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <div className="bg-green-500 text-white rounded-lg px-4 py-2 max-w-xs relative">
                            <div className="text-sm">Harika! Size özel %25 indirim fırsatımız var. Hemen inceleyin: novagraph.com.tr 🎉</div>
                            <div className="text-xs opacity-75 mt-1 flex items-center justify-end space-x-1">
                              <span>14:34</span>
                              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg px-4 py-2 max-w-xs shadow-sm relative">
                            <div className="text-sm">Teşekkürler! Hemen bakacağım 😊</div>
                            <div className="text-xs text-gray-500 mt-1">14:35</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Message Input */}
                      <div className="bg-gray-50 p-4 border-t border-gray-200 flex-shrink-0">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <Smile className="w-4 h-4 text-gray-600" />
                          </div>
                          <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center">
                            <input 
                              type="text" 
                              placeholder="Mesaj yazın..." 
                              className="flex-1 outline-none text-sm"
                              disabled
                            />
                          </div>
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Send className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="sms" className="absolute inset-0 data-[state=inactive]:hidden">
                    {/* SMS Mockup */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden max-w-sm mx-auto h-full flex flex-col">
                      {/* Phone Header */}
                      <div className="bg-gray-800 text-white p-4 flex items-center justify-between flex-shrink-0">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <Smartphone className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold">NovaGraph</div>
                            <div className="text-xs opacity-90">+90 555 123 4567</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Wifi className="w-4 h-4" />
                          <Signal className="w-4 h-4" />
                          <Battery className="w-4 h-4" />
                        </div>
                      </div>
                      
                      {/* SMS Content */}
                      <div className="p-4 bg-gray-50 flex-1 flex items-end">
                        <div className="bg-blue-600 text-white rounded-lg px-4 py-3 max-w-xs ml-auto">
                          <div className="text-sm">
                            🎉 NovaGraph'tan özel fırsat! Web tasarım hizmetlerimizde %25 indirim. Detaylar için: novagraph.com.tr
                          </div>
                          <div className="text-xs opacity-75 mt-2">14:35</div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="mail" className="absolute inset-0 data-[state=inactive]:hidden">
                    {/* Email Mockup */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden max-w-2xl mx-auto h-full flex flex-col">
                      {/* Email Header */}
                      <div className="bg-gray-50 p-6 border-b border-gray-200 flex-shrink-0">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                              <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">NovaGraph</div>
                              <div className="text-sm text-gray-600">info@novagraph.com.tr</div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">14:36</div>
                        </div>
                        <div className="text-lg font-bold text-gray-900 mb-2">🚀 Web Tasarım Projenizi Başlatalım!</div>
                        <div className="text-sm text-gray-600">Değerli müşterimiz, size özel fırsatlarımızı kaçırmayın.</div>
                      </div>
                      
                      {/* Email Content */}
                      <div className="p-6 flex-1 overflow-y-auto">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-gray-900 mb-2">%25 İndirim</div>
                            <div className="text-lg text-gray-600 mb-4">Web tasarım hizmetlerimizde özel fırsat</div>
                            <Button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
                              Teklif Al
                            </Button>
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-600 leading-relaxed">
                          <p className="mb-4">Merhaba,</p>
                          <p className="mb-4">NovaGraph olarak, dijital dönüşümünüzde yanınızdayız. Modern ve etkili web tasarım çözümlerimizle markanızı dijital dünyada öne çıkarıyoruz.</p>
                          <p className="mb-4">Bu e-postayı alan değerli müşterilerimize özel %25 indirim fırsatımızı kaçırmayın!</p>
                          <p>Saygılarımızla,<br />NovaGraph Ekibi</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Dönüşüm Odaklı Kampanyalar */}
      <section className="py-20 bg-white" ref={funnelRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dönüşüm için Optimizasyon</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reklam bütçeniz boşa gitmesin. Satış, form doldurma ve diğer dönüşümler için optimize edilmiş kampanyalar kurguluyoruz.
            </p>
          </div>
          
          {/* Optimize Edilmemiş vs Optimize Edilmiş Reklamlar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Optimize Edilmemiş Reklamlar */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Optimize Edilmemiş Reklamlar</h3>
                  <p className="text-gray-600">Kötü sonuçlar ve kayıplar</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="font-semibold text-gray-900">Gösterimler</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-600">1.2M</div>
                    <div className="text-sm text-gray-500">Düşük kalite</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <MousePointer className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="font-semibold text-gray-900">Tıklamalar</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-600">8.5K</div>
                    <div className="text-sm text-gray-500">%0.7 CTR</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="font-semibold text-gray-900">Dönüşümler</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-600">127</div>
                    <div className="text-sm text-gray-500">%1.5 Oran</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="font-semibold text-gray-900">ROAS</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-600">0.8x</div>
                    <div className="text-sm text-gray-500">Zarar</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Sonuçlar:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Yüksek maliyet, düşük dönüşüm</li>
                  <li>• Hedef kitle uyumsuzluğu</li>
                  <li>• Reklam yorgunluğu</li>
                  <li>• Bütçe israfı</li>
                </ul>
              </div>
            </div>

            {/* Optimize Edilmiş Reklamlar */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Optimize Edilmiş Reklamlar</h3>
                  <p className="text-blue-700">Mükemmel sonuçlar ve kazançlar</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Eye className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-900">Gösterimler</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">2.4M</div>
                    <div className="text-sm text-blue-500">Yüksek kalite</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <MousePointer className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-900">Tıklamalar</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">45.2K</div>
                    <div className="text-sm text-blue-500">%1.9 CTR</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-900">Dönüşümler</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">3.8K</div>
                    <div className="text-sm text-blue-500">%8.4 Oran</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-900">ROAS</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">4.2x</div>
                    <div className="text-sm text-blue-500">Kâr</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">Sonuçlar:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Düşük maliyet, yüksek dönüşüm</li>
                  <li>• Hedef kitle uyumu</li>
                  <li>• Sürekli optimizasyon</li>
                  <li>• Maksimum ROI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Anasayfadaki gibi yeniden tasarlandı */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dijital Reklamlarınızı Büyütmek İçin Hazır mısınız?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uzman ekibimizle birlikte markanızı dijital dünyada zirveye taşıyın.
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
              onClick={() => openForm("Dijital Pazarlama")}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              İletişime Geç
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ContactForm isOpen={isOpen} onClose={closeForm} service={service} />
    </div>
  )
} 