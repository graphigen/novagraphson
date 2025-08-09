"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/ContactForm"
import { useContactForm } from "@/contexts/ContactFormContext"
import { 
  Search, 
  TrendingUp, 
  Target, 
  Zap, 
  ArrowRight, 
  Star, 
  CheckCircle,
  BarChart3,
  Eye,
  MousePointer,
  Calendar,
  DollarSign,
  Award,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Camera,
  Video,
  Image,
  FileText,
  Settings,
  Heart,
  ShoppingCart,
  Instagram,
  Download,
  User,
  MessageCircle,
  Phone,
  MoreHorizontal,
  Smile,
  Send,
  Wifi,
  Signal,
  Battery,
  Users,
  ArrowUpRight,
  Clock,
  Link,
  GraduationCap,
  ChevronDown
} from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

// Sabit sayı formatı fonksiyonu - hydration hatasını önlemek için
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

// Grafik bileşeni - client-side'da render edilecek
const PerformanceGraph = ({ isInView }: { isInView: boolean }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="relative h-96 w-full bg-gray-100 rounded-lg animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-500">Grafik yükleniyor...</div>
        </div>
      </div>
    )
  }

  const dataPoints = [
    { x: 100, y: 395, value: 300, month: "Ocak" },
    { x: 233, y: 380, value: 4800, month: "Şubat" },
    { x: 366, y: 320, value: 15200, month: "Mart" },
    { x: 499, y: 240, value: 28500, month: "Nisan" },
    { x: 632, y: 140, value: 48000, month: "Mayıs" },
    { x: 765, y: 5, value: 64200, month: "Haziran" }
  ]

  return (
    <div className="relative h-96 w-full">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 800 400" 
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Grid Lines */}
        <defs>
          <pattern id="grid" width="100" height="80" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 80" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
          </pattern>
        </defs>
        
        {/* Background Grid */}
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Y-axis labels */}
        <g className="text-gray-500 text-sm">
          <text x="20" y="30" className="font-medium">64K</text>
          <text x="20" y="110" className="font-medium">48K</text>
          <text x="20" y="190" className="font-medium">32K</text>
          <text x="20" y="270" className="font-medium">16K</text>
          <text x="20" y="350" className="font-medium">0</text>
        </g>
        
        {/* X-axis labels */}
        <g className="text-gray-500 text-sm">
          <text x="100" y="390" textAnchor="middle" className="font-medium">Ocak</text>
          <text x="233" y="390" textAnchor="middle" className="font-medium">Şubat</text>
          <text x="366" y="390" textAnchor="middle" className="font-medium">Mart</text>
          <text x="499" y="390" textAnchor="middle" className="font-medium">Nisan</text>
          <text x="632" y="390" textAnchor="middle" className="font-medium">Mayıs</text>
          <text x="765" y="390" textAnchor="middle" className="font-medium">Haziran</text>
        </g>
        
        {/* Data points */}
        {dataPoints.map((point, index) => (
          <g key={index}>
            {/* Hover area */}
            <circle
              cx={point.x}
              cy={point.y}
              r="20"
              fill="transparent"
              className="cursor-pointer hover:fill-blue-50 transition-all duration-200"
              onMouseEnter={(e) => {
                const tooltip = e.currentTarget.nextElementSibling as SVGElement;
                if (tooltip) tooltip.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const tooltip = e.currentTarget.nextElementSibling as SVGElement;
                if (tooltip) tooltip.style.opacity = "0";
              }}
            />
            
            {/* Tooltip */}
            <g
              className="pointer-events-none transition-opacity duration-200"
              style={{ opacity: 0 }}
            >
              {/* Tooltip background */}
              <rect
                x={point.x - 50}
                y={point.y - 60}
                width="100"
                height="50"
                rx="8"
                fill="#1f2937"
                className="drop-shadow-lg"
              />
              {/* Tooltip arrow */}
              <polygon
                points={`${point.x},${point.y - 10} ${point.x - 8},${point.y} ${point.x + 8},${point.y}`}
                fill="#1f2937"
              />
              {/* Tooltip text */}
              <text
                x={point.x}
                y={point.y - 40}
                textAnchor="middle"
                className="text-sm font-semibold fill-white"
              >
                {formatNumber(point.value)}
              </text>
              <text
                x={point.x}
                y={point.y - 25}
                textAnchor="middle"
                className="text-xs fill-gray-300"
              >
                {point.month}
              </text>
            </g>
            
            {/* Data point circle */}
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#3b82f6"
              stroke="#ffffff"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
            />
          </g>
        ))}
        
        {/* Smooth bezier curve path */}
        <motion.path
          d="M 100,395 C 150,395 180,380 233,380 C 280,380 320,320 366,320 C 410,320 450,240 499,240 C 550,240 590,140 632,140 C 680,140 720,5 765,5"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  )
}

export default function SEOPage() {
  const graphRef = useRef(null)
  const isInView = useInView(graphRef, { once: true, margin: "-100px" })
  const { isOpen, service, closeForm, openForm } = useContactForm()

  const benefits = [
    {
      icon: Users,
      title: "Daha Fazla Ziyaretçi",
      description: "Üst sıralarda yer alarak daha fazla potansiyel müşteriye ulaşın."
    },
    {
      icon: Shield,
      title: "Marka Güvenilirliği",
      description: "Google'da üst sıralarda yer alarak markanızın güvenilirliğini artırın."
    },
    {
      icon: TrendingUp,
      title: "Uzun Vadeli Sonuçlar",
      description: "SEO çalışmaları kalıcı sonuçlar verir ve sürekli trafik artışı sağlar."
    },
    {
      icon: DollarSign,
      title: "Yüksek Yatırım Getirisi",
      description: "Düşük maliyetle yüksek getiri elde edin, reklam maliyetlerinizi azaltın."
    }
  ]

  const process = [
    {
      step: "01",
      title: "Anahtar Kelime Araştırması",
      description: "Hedef kitlenizin aradığı anahtar kelimeleri tespit ediyoruz",
      icon: Search
    },
    {
      step: "02", 
      title: "Teknik SEO Analizi",
      description: "Sitenizin teknik SEO sorunlarını analiz ediyoruz",
      icon: Search
    },
    {
      step: "03",
      title: "İçerik Optimizasyonu", 
      description: "İçeriklerinizi SEO uyumlu hale getiriyoruz",
      icon: Search
    },
    {
      step: "04",
      title: "Backlink Stratejisi",
      description: "Güçlü backlink stratejisi ile otoritenizi artırıyoruz", 
      icon: Globe
    },
    {
      step: "05",
      title: "Raporlama ve İzleme",
      description: "Sürekli izleme ve detaylı raporlama yapıyoruz",
      icon: Search
    }
  ]

  const whyChooseUs = [
    {
      icon: Users,
      title: "SEO Uzman Ekibi",
      description: "Deneyimli SEO uzmanlarımızla en güncel teknikleri uyguluyoruz."
    },
    {
      icon: Search,
      title: "Güncel Algoritma Bilgisi", 
      description: "Google'ın en son algoritma güncellemelerini takip ediyoruz."
    },
    {
      icon: Search,
      title: "Şeffaf Raporlama",
      description: "Düzenli raporlarla SEO performansınızı şeffaf şekilde takip edin."
    },
    {
      icon: Target,
      title: "Sektöre Özel Stratejiler",
      description: "Sektörünüze özel SEO stratejileri geliştiriyoruz."
    }
  ]

  const faqs = [
    {
      question: "SEO çalışması ne kadar sürer?",
      answer: "SEO çalışması genellikle 3-6 ay içinde ilk sonuçları vermeye başlar. Tam etkili sonuçlar için 6-12 ay gerekebilir."
    },
    {
      question: "Hangi anahtar kelimelerde çalışabiliriz?",
      answer: "Hedef kitlenizin aradığı, rekabet seviyesi uygun ve işletmenizle ilgili tüm anahtar kelimelerde çalışabiliriz."
    },
    {
      question: "SEO çalışması sonrası garantili sonuç alır mıyım?",
      answer: "SEO organik bir süreçtir ve garantili sonuç vermez, ancak doğru stratejilerle kesinlikle iyileşme sağlarız."
    },
    {
      question: "Mevcut web sitem SEO uyumlu değil, ne yapmalıyım?",
      answer: "Önce teknik SEO analizi yapıp, gerekli düzenlemeleri öneriyoruz. Gerekirse yeni SEO uyumlu site tasarımı önerebiliriz."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Smooth Transition Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4" />
              <span>SEO Hizmetleri</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Arama Motorlarında <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Zirveye Çıkın</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Anahtar kelimelerde üst sıralara yerleşin, organik trafiğinizi artırın.
            </p>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openForm("SEO")}
            >
              SEO Analizi Al
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white rounded-xl overflow-hidden group h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-gray-900">{benefit.title}</CardTitle>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col h-full">
                  <CardDescription className="text-gray-600 mb-6 mobile-text">
                    {benefit.description}
                  </CardDescription>
                  
                  {/* UI Component */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border border-blue-200 flex-1 overflow-hidden">
                    {benefit.title === "Daha Fazla Ziyaretçi" && (
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm font-medium text-gray-900">Ziyaretçi Trafiği</div>
                          <div className="text-xs text-green-600 font-medium">↑ +250%</div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Users className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Organik Ziyaretçi</div>
                              <div className="text-xs text-gray-500">Google arama sonuçlarından</div>
                            </div>
                            <div className="text-sm font-bold text-blue-600">1,250</div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <TrendingUp className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Önceki Ay</div>
                              <div className="text-xs text-gray-500">Karşılaştırma</div>
                            </div>
                            <div className="text-sm font-bold text-green-600">+180%</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {benefit.title === "Marka Güvenilirliği" && (
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm font-medium text-gray-900">Marka Otoritesi</div>
                          <div className="text-xs text-green-600 font-medium">✓ Güvenilir</div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <Shield className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Domain Authority</div>
                              <div className="text-xs text-gray-500">Moz skoru</div>
                            </div>
                            <div className="text-sm font-bold text-green-600">78/100</div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Star className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Güven Skoru</div>
                              <div className="text-xs text-gray-500">Google tarafından</div>
                            </div>
                            <div className="text-sm font-bold text-blue-600">A+</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {benefit.title === "Uzun Vadeli Sonuçlar" && (
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm font-medium text-gray-900">Sürdürülebilirlik</div>
                          <div className="text-xs text-purple-600 font-medium">∞ Kalıcı</div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <TrendingUp className="w-5 h-5 text-purple-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Büyüme Trendi</div>
                              <div className="text-xs text-gray-500">6 aylık süreç</div>
                            </div>
                            <div className="text-sm font-bold text-purple-600">↑ Sürekli</div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <Clock className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Kalıcılık</div>
                              <div className="text-xs text-gray-500">Sonuçların süresi</div>
                            </div>
                            <div className="text-sm font-bold text-green-600">∞ Sürekli</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {benefit.title === "Yüksek Yatırım Getirisi" && (
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm font-medium text-gray-900">ROI Analizi</div>
                          <div className="text-xs text-orange-600 font-medium">💰 %300</div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                              <DollarSign className="w-5 h-5 text-orange-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Yatırım Getirisi</div>
                              <div className="text-xs text-gray-500">6 aylık dönem</div>
                            </div>
                            <div className="text-sm font-bold text-orange-600">%300</div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <TrendingUp className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Reklam Tasarrufu</div>
                              <div className="text-xs text-gray-500">Google Ads'e göre</div>
                            </div>
                            <div className="text-sm font-bold text-green-600">%75</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timeline Container */}
            <div className="relative max-w-4xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Timeline Steps */}
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="relative flex items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6 shadow-sm">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-600">{step.step}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <Badge className="bg-blue-100 text-blue-800">Adım {step.step}</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    
                    {/* UI Component */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                      {step.title === "Anahtar Kelime Araştırması" && (
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-sm font-medium text-gray-900">Keyword Research Tool</div>
                            <div className="flex space-x-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            {/* Search Box */}
                            <div className="relative">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input 
                                type="text" 
                                value="SEO hizmeti" 
                                readOnly
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm text-gray-700"
                              />
                            </div>
                            {/* Analysis Results */}
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-red-50 rounded-lg p-3">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-xs font-medium text-red-700">Rekabet</span>
                                  <span className="text-xs text-red-600 font-bold">Yüksek</span>
                                </div>
                                <div className="w-full bg-red-200 rounded-full h-2">
                                  <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                                </div>
                              </div>
                              <div className="bg-blue-50 rounded-lg p-3">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-xs font-medium text-blue-700">Hacim</span>
                                  <span className="text-xs text-blue-600 font-bold">10K-100K</span>
                                </div>
                                <div className="w-full bg-blue-200 rounded-full h-2">
                                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {step.title === "Teknik SEO Analizi" && (
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-sm font-medium text-gray-900">Technical Audit Report</div>
                            <div className="flex space-x-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm font-medium text-gray-900">Sayfa Hızı</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold text-green-600">92</span>
                                <span className="text-xs text-gray-500">/100</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-sm font-medium text-gray-900">Mobil Uyumluluk</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold text-blue-600">88</span>
                                <span className="text-xs text-gray-500">/100</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span className="text-sm font-medium text-gray-900">Core Web Vitals</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold text-yellow-600">75</span>
                                <span className="text-xs text-gray-500">/100</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {step.title === "İçerik Optimizasyonu" && (
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-sm font-medium text-gray-900">Content Optimization</div>
                            <div className="flex space-x-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            {/* Content Editor Mockup */}
                            <div className="border border-gray-200 rounded-lg p-3">
                              <div className="space-y-2">
                                <div className="w-full h-4 bg-gray-200 rounded"></div>
                                <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                                <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
                              </div>
                              <div className="flex space-x-2 mt-3">
                                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                                  <span className="text-xs font-bold text-blue-600">H1</span>
                                </div>
                                <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                                  <span className="text-xs font-bold text-green-600">H2</span>
                                </div>
                                <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                                  <span className="text-xs font-bold text-purple-600">H3</span>
                                </div>
                              </div>
                            </div>
                            {/* SEO Score */}
                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                              <span className="text-sm font-medium text-gray-900">SEO Skoru</span>
                              <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold text-green-600">95</span>
                                <span className="text-xs text-gray-500">/100</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {step.title === "Backlink Stratejisi" && (
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-sm font-medium text-gray-900">Backlink Analysis</div>
                            <div className="flex space-x-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <Globe className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-medium text-gray-900">Domain Authority</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold text-purple-600">75</span>
                                <span className="text-xs text-gray-500">/100</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <Link className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-medium text-gray-900">Backlink Sayısı</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold text-blue-600">1,250</span>
                                <span className="text-xs text-gray-500">link</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <Shield className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium text-gray-900">Güvenli Linkler</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold text-green-600">98%</span>
                                <span className="text-xs text-gray-500">temiz</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {step.title === "Raporlama ve İzleme" && (
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-sm font-medium text-gray-900">Performance Dashboard</div>
                            <div className="flex space-x-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <TrendingUp className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium text-gray-900">Organik Trafik</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold text-green-600">+95%</span>
                                <span className="text-xs text-gray-500">artış</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <Target className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-medium text-gray-900">Sıralama</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold text-blue-600">#3</span>
                                <span className="text-xs text-gray-500">ortalama</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <TrendingUp className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-medium text-gray-900">CTR Oranı</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold text-purple-600">8.5%</span>
                                <span className="text-xs text-gray-500">tıklama</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Graph Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Modern Card Component */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden" ref={graphRef}>
            {/* Header */}
            <div className="p-8 border-b border-gray-100">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Organik Trafik Artışı</h3>
                <p className="text-gray-600 text-lg">SEO stratejileri sonrası elde edilen büyüme</p>
              </div>
            </div>
            
            {/* Graph Container */}
            <div className="p-8">
              <PerformanceGraph isInView={isInView} />
              
              {/* Description */}
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold text-green-600">
                  6 ayda %21.300 artış
                </p>
              </div>
              
              {/* Stats summary */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900">64,200</div>
                  <div className="text-sm text-gray-500 mt-1">Toplam Ziyaret</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600">+21,300%</div>
                  <div className="text-sm text-gray-500 mt-1">Artış Oranı</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600">6</div>
                  <div className="text-sm text-gray-500 mt-1">Ay Süreç</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600">10,700</div>
                  <div className="text-sm text-gray-500 mt-1">Ortalama/Ay</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white rounded-xl overflow-hidden group h-full flex flex-col">
                <CardHeader className="p-6 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-gray-900">{item.title}</CardTitle>
                    <ArrowUpRight className="w-5 h-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex flex-col h-full">
                  <CardDescription className="text-gray-600 mb-6">
                    {item.description}
                  </CardDescription>
                  
                  {/* UI Component */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200 flex-1">
                    {item.title === "SEO Uzman Ekibi" && (
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-sm font-medium text-gray-900">Uzman Profili</div>
                          <div className="text-xs text-blue-600 font-medium">✓ Sertifikalı</div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <GraduationCap className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Deneyim</div>
                              <div className="text-xs text-gray-500">Ortalama yıl</div>
                            </div>
                            <div className="text-sm font-bold text-blue-600">8.5</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <Award className="w-4 h-4 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Sertifika</div>
                              <div className="text-xs text-gray-500">Google, Moz, SEMrush</div>
                            </div>
                            <div className="text-sm font-bold text-green-600">15+</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                              <Users className="w-4 h-4 text-purple-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Ekip Büyüklüğü</div>
                              <div className="text-xs text-gray-500">Aktif uzman</div>
                            </div>
                            <div className="text-sm font-bold text-purple-600">12</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {item.title === "Güncel Algoritma Bilgisi" && (
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-sm font-medium text-gray-900">Algoritma Takibi</div>
                          <div className="text-xs text-green-600 font-medium">🔄 Güncel</div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <Clock className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Güncelleme</div>
                              <div className="text-xs text-gray-500">Son güncelleme</div>
                            </div>
                            <div className="text-sm font-bold text-blue-600">2 gün</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Uyumluluk</div>
                              <div className="text-xs text-gray-500">Algoritma değişiklikleri</div>
                            </div>
                            <div className="text-sm font-bold text-green-600">%98</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 text-purple-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Başarı Oranı</div>
                              <div className="text-xs text-gray-500">Güncelleme sonrası</div>
                            </div>
                            <div className="text-sm font-bold text-purple-600">%95</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {item.title === "Şeffaf Raporlama" && (
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-sm font-medium text-gray-900">Raporlama Sistemi</div>
                          <div className="text-xs text-purple-600 font-medium">📊 Detaylı</div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 text-purple-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Rapor Detayı</div>
                              <div className="text-xs text-gray-500">Sayfa başına metrik</div>
                            </div>
                            <div className="text-sm font-bold text-purple-600">25+</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <Clock className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Rapor Sıklığı</div>
                              <div className="text-xs text-gray-500">Güncelleme periyodu</div>
                            </div>
                            <div className="text-sm font-bold text-blue-600">Haftalık</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <Eye className="w-4 h-4 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Görünürlük</div>
                              <div className="text-xs text-gray-500">Gerçek zamanlı</div>
                            </div>
                            <div className="text-sm font-bold text-green-600">24/7</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {item.title === "Sektöre Özel Stratejiler" && (
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-sm font-medium text-gray-900">Strateji Özelleştirme</div>
                          <div className="text-xs text-orange-600 font-medium">🎯 Özel</div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                              <Target className="w-4 h-4 text-orange-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Özelleştirme</div>
                              <div className="text-xs text-gray-500">Sektöre özel yaklaşım</div>
                            </div>
                            <div className="text-sm font-bold text-orange-600">%95</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Uyum</div>
                              <div className="text-xs text-gray-500">Sektör standartları</div>
                            </div>
                            <div className="text-sm font-bold text-green-600">%88</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">Başarı Oranı</div>
                              <div className="text-xs text-gray-500">Sektör ortalaması</div>
                            </div>
                            <div className="text-sm font-bold text-blue-600">%92</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white rounded-xl overflow-hidden">
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold text-gray-900">{faq.question}</CardTitle>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <CardDescription className="text-gray-600">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Web Sitenizi Zirveye Taşıyacak Stratejiyi Öğrenin
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            SEO uzmanlarımızla birlikte işletmenizi dijital dünyada bir adım öne taşıyın.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => openForm("SEO")}
          >
            Detaylı Teklif Al
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <ContactForm isOpen={isOpen} onClose={closeForm} service={service} />
    </main>
  )
} 