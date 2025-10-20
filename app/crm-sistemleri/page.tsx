"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ContactForm } from "@/components/ContactForm"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Target, 
  Settings, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Database,
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  PieChart,
  Activity,
  UserPlus,
  FileText,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  RefreshCw,
  BarChart,
  PieChart as PieChartIcon,
  Activity as ActivityIcon,
  Users2,
  ShoppingCart,
  CreditCard,
  Clock,
  DollarSign,
  Eye,
  MousePointer,
  Code2,
  TestTube,
  GraduationCap,
  ArrowUpRight,
  Link,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Smartphone as SmartphoneIcon,
  Monitor as MonitorIcon,
  Tablet as TabletIcon,
  RefreshCw as RefreshCwIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon2,
  Activity as ActivityIcon2,
  Users2 as Users2Icon,
  ShoppingCart as ShoppingCartIcon,
  CreditCard as CreditCardIcon,
  Calendar as CalendarIcon,
  MapPin,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MessageCircle,
  User,
  Settings as SettingsIcon,
  Bell,
  Filter,
  Download,
  Share2,
  Plus,
  Minus,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  ExternalLink,
  Heart,
  ThumbsUp,
  MessageSquare as ChatIcon,
  Send,
  Image,
  Video,
  Music,
  Camera,
  Mic,
  Smile,
  MoreHorizontal,
  Wifi,
  Battery,
  Signal,
  Palette,
  Brush,
  Package,
  BookOpen,
  RotateCcw as RotateIcon,
  Layers,
  Printer,
  Star as StarIcon,
  Target as TargetIcon,
  Award as AwardIcon,
  Shield as ShieldIcon,
  TrendingUp as TrendingUpIcon,
  BarChart3 as BarChart3Icon,
  Users as UsersIcon,
  Zap as ZapIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  CheckCircle as CheckCircleIcon,
  Eye as EyeIcon,
  MousePointer as MousePointerIcon,
  Code2 as Code2Icon,
  TestTube as TestTubeIcon,
  GraduationCap as GraduationCapIcon,
  ArrowUpRight as ArrowUpRightIcon,
  Link as LinkIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Youtube as YoutubeIcon,
  Twitter as TwitterIcon,
  Linkedin as LinkedinIcon,
  Smartphone as SmartphoneIcon2,
  Monitor as MonitorIcon2,
  Tablet as TabletIcon2,
  RefreshCw as RefreshCwIcon2,
  BarChart as BarChartIcon2,
  PieChart as PieChartIcon3,
  Activity as ActivityIcon3,
  Users2 as Users2Icon2,
  ShoppingCart as ShoppingCartIcon2,
  CreditCard as CreditCardIcon2,
  Calendar as CalendarIcon2,
  MapPin as MapPinIcon,
  Phone as PhoneIcon2,
  Mail as MailIcon2,
  MessageCircle as MessageCircleIcon,
  User as UserIcon,
  Settings as SettingsIcon2,
  Bell as BellIcon,
  Filter as FilterIcon,
  Download as DownloadIcon,
  Share2 as Share2Icon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  RotateCcw as RotateCcwIcon,
  Maximize2 as Maximize2Icon,
  Minimize2 as Minimize2Icon,
  ExternalLink as ExternalLinkIcon,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  MessageSquare as ChatIcon2,
  Send as SendIcon,
  Image as ImageIcon,
  Video as VideoIcon,
  Music as MusicIcon,
  Camera as CameraIcon,
  Mic as MicIcon,
  Smile as SmileIcon,
  MoreHorizontal as MoreHorizontalIcon,
  Wifi as WifiIcon,
  Battery as BatteryIcon,
  Signal as SignalIcon,
  Info,
  Grid,
  Layout,
  Type,
  Droplets,
  Sparkles,
  Lightbulb,
  Brain,
  Target as TargetIcon2,
  Zap as ZapIcon2,
  CheckCircle as CheckCircleIcon2,
  Star
} from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function CRMSistemleriPage() {
  const [activeTab, setActiveTab] = useState("zoho")
  const { isOpen, service, closeForm, openForm } = useContactForm()
  
  const benefitsRef = useRef(null)
  const crmSystemsRef = useRef(null)
  const whyUsRef = useRef(null)
  
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" })
  const isCRMSystemsInView = useInView(crmSystemsRef, { once: true, margin: "-100px" })
  const isWhyUsInView = useInView(whyUsRef, { once: true, margin: "-100px" })

  const benefits = [
    {
      title: "Süreç Otomasyonu",
      description: "Tekrarlayan işlemleri otomatikleştirerek verimliliği artırın",
      icon: Zap,
      color: "bg-blue-100 text-blue-600",
      component: "automation"
    },
    {
      title: "Müşteri Takibi ve Segmentasyon",
      description: "Müşteri verilerini organize edin ve hedef kitle segmentasyonu yapın",
      icon: Users,
      color: "bg-indigo-100 text-indigo-600",
      component: "tracking"
    },
    {
      title: "Satış Tahminleme",
      description: "AI destekli satış tahminleri ile geleceği planlayın",
      icon: TrendingUp,
      color: "bg-blue-100 text-blue-600",
      component: "forecasting"
    },
    {
      title: "Raporlama ve Analiz",
      description: "Detaylı raporlar ve analizlerle kararlarınızı destekleyin",
      icon: BarChart3,
      color: "bg-gray-100 text-gray-600",
      component: "analytics"
    }
  ]

  const crmSystems = [
    {
      name: "Zoho CRM",
      description: "Kapsamlı müşteri ilişkileri yönetimi ve satış otomasyonu",
      features: ["Lead Yönetimi", "Satış Pipeline", "Raporlama", "Mobil Uygulama"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "Bitrix24",
      description: "İş süreçleri, proje yönetimi ve ekip işbirliği platformu",
      features: ["Proje Yönetimi", "Ekip İşbirliği", "CRM", "İş Akışı"],
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      name: "Doktor360",
      description: "Sağlık sektörüne özel CRM ve hasta yönetim sistemi",
      features: ["Hasta Takibi", "Randevu Yönetimi", "Tıbbi Kayıtlar", "Fatura"],
      color: "bg-green-50 border-green-200"
    },
    {
      name: "Monday.com",
      description: "Görsel proje yönetimi ve ekip işbirliği platformu",
      features: ["Proje Yönetimi", "Gantt Chart", "Otomasyon", "Entegrasyonlar"],
      color: "bg-purple-50 border-purple-200"
    }
  ]

  const whyUsFeatures = [
    {
      title: "Kurulum ve Eğitim Desteği",
      description: "Sistem kurulumundan kullanıcı eğitimine kadar tam destek",
      icon: Settings,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Entegrasyon Hizmetleri",
      description: "Web sitesi, form sistemleri, call center entegrasyonu",
      icon: Link,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Süreçlere Özel Yapılandırma",
      description: "İş süreçlerinize özel CRM yapılandırması",
      icon: Target,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Sürekli Teknik Destek",
      description: "7/24 teknik destek ve güncelleme hizmeti",
      icon: Shield,
      color: "bg-gray-100 text-gray-600"
    }
  ]

  // Kodla oluşturulmuş görsel bileşenler
  const AutomationComponent = () => (
    <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 relative overflow-hidden">
      <div className="flex items-center justify-between h-full">
        <div className="space-y-2">
          <div className="w-16 h-2 bg-blue-200 rounded-full"></div>
          <div className="w-12 h-2 bg-blue-300 rounded-full"></div>
          <div className="w-14 h-2 bg-blue-200 rounded-full"></div>
        </div>
        <div className="flex space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
          <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
    </div>
  )

  const TrackingComponent = () => (
    <div className="w-full h-32 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 relative overflow-hidden">
      <div className="grid grid-cols-3 gap-2 h-full">
        <div className="space-y-1">
          <div className="w-full h-3 bg-indigo-200 rounded"></div>
          <div className="w-2/3 h-3 bg-indigo-300 rounded"></div>
        </div>
        <div className="space-y-1">
          <div className="w-full h-3 bg-indigo-300 rounded"></div>
          <div className="w-1/2 h-3 bg-indigo-200 rounded"></div>
        </div>
        <div className="space-y-1">
          <div className="w-3/4 h-3 bg-indigo-200 rounded"></div>
          <div className="w-full h-3 bg-indigo-300 rounded"></div>
        </div>
      </div>
      <div className="absolute bottom-2 left-2 flex space-x-1">
        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
      </div>
    </div>
  )

  const ForecastingComponent = () => (
    <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 relative overflow-hidden">
      <div className="flex items-end justify-between h-full space-x-1">
        <div className="w-4 bg-blue-300 rounded-t h-8"></div>
        <div className="w-4 bg-blue-400 rounded-t h-12"></div>
        <div className="w-4 bg-blue-500 rounded-t h-16"></div>
        <div className="w-4 bg-blue-600 rounded-t h-20"></div>
        <div className="w-4 bg-blue-500 rounded-t h-14"></div>
        <div className="w-4 bg-blue-400 rounded-t h-10"></div>
        <div className="w-4 bg-blue-300 rounded-t h-6"></div>
      </div>
      <div className="absolute top-2 right-2 text-xs font-medium text-blue-600">+25%</div>
    </div>
  )

  const AnalyticsComponent = () => (
    <div className="w-full h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 relative overflow-hidden">
      <div className="flex items-center justify-between h-full">
        <div className="space-y-2">
          <div className="w-20 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-16 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-24 h-3 bg-gray-300 rounded-full"></div>
        </div>
        <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
      </div>
      <div className="absolute bottom-2 left-2 flex space-x-1">
        <div className="w-3 h-3 bg-gray-400 rounded"></div>
        <div className="w-3 h-3 bg-gray-500 rounded"></div>
        <div className="w-3 h-3 bg-gray-400 rounded"></div>
      </div>
    </div>
  )

  const getComponent = (componentType: string) => {
    switch (componentType) {
      case "automation":
        return <AutomationComponent />
      case "tracking":
        return <TrackingComponent />
      case "forecasting":
        return <ForecastingComponent />
      case "analytics":
        return <AnalyticsComponent />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Smooth Transition Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
              <Database className="w-4 h-4 mr-2" />
              CRM Uzmanı
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              CRM Sistemleri ile Verimliliğinizi Artırın
              </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Satıştan destek süreçlerine kadar tüm işlerinizi tek yerden yönetin. Zoho, Bitrix24, Doktor360 ve daha fazlası ile entegre çözümler sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openForm("CRM Sistemleri")}
              >
                İletişime Geç
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CRM'in Faydaları */}
      <section className="py-16 bg-white" ref={benefitsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              CRM Faydaları
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CRM Sistemlerinin İşinize Katkıları</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-2">
              Modern CRM sistemleri ile iş süreçlerinizi optimize edin, müşteri memnuniyetini artırın ve satışlarınızı büyütün.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="border border-gray-200 bg-white rounded-xl overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                  <CardHeader className="p-6 pb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-gray-200">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                    <CardTitle className="text-lg font-bold text-gray-900 min-h-[3rem] flex items-center">{benefit.title}</CardTitle>
                </CardHeader>
                  <CardContent className="p-6 pt-0 flex flex-col h-full">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{benefit.description}</p>
                    <div className="mt-auto">
                      {getComponent(benefit.component)}
                    </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kullandığımız CRM'ler */}
      <section className="py-16 bg-gray-50" ref={crmSystemsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
              <Globe className="w-4 h-4 mr-2" />
              Partner CRM'ler
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kullandığımız CRM Sistemleri</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-2">
              Yetkili partner olduğumuz önde gelen CRM sistemleri ile işinizi büyütün.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crmSystems.map((system, index) => (
              <motion.div
                key={system.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group"
              >
                <Card className={`border ${system.color} bg-white rounded-xl overflow-hidden h-full hover:shadow-lg transition-all duration-300`}>
                  <CardHeader className="p-6 pb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-gray-200">
                      <Database className="w-6 h-6 text-blue-600" />
                  </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{system.name}</CardTitle>
                </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{system.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {system.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-gray-50 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium border border-gray-200 hover:bg-gray-100 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz? */}
      <section className="py-16 sm:py-20 bg-blue-900" ref={whyUsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-800 rounded-full text-blue-200 text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Neden Biz?
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Ajansımızın Partnerlik Avantajları</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mt-2">
              Sadece CRM satışı değil, tam kapsamlı danışmanlık ve destek hizmeti sunuyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="border border-blue-700 bg-blue-800 rounded-xl overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:border-blue-600">
                  <CardHeader className="p-6 pb-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-blue-600">
                      <feature.icon className="w-6 h-6 text-blue-200" />
                </div>
                    <CardTitle className="text-lg font-bold text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-blue-200 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">CRM ile Süreçlerinizi Güçlendirin</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
              Hangi CRM'in size uygun olduğunu birlikte belirleyelim.
            </p>
          </div>
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
              <p className="text-gray-600 mb-4">+90 545 664 2302</p>
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
              <p className="text-gray-600 mb-4">+90 545 664 2302</p>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">WhatsApp'tan Yaz</button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button 
              onClick={() => openForm("CRM Sistemleri")}
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