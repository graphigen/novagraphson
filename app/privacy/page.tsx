"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ContactForm } from "@/components/ContactForm"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText,
  Zap, 
  Users, 
  Target, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  TrendingUp,
  Monitor,
  Mail,
  MessageSquare,
  Phone,
  MessageCircle,
  Clock,
  DollarSign,
  BarChart3,
  Activity,
  Users2,
  Calendar,
  Folder,
  Download,
  Upload,
  Share2,
  Unlock,
  Key,
  Database,
  Server,
  Cloud,
  Wifi,
  Bluetooth,
  Camera,
  Video,
  Mic,
  Headphones,
  Speaker,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Bookmark,
  Share,
  Flag,
  AlertCircle,
  Info,
  HelpCircle,
  X,
  Minus,
  Plus,
  Check,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  Home,
  Menu,
  Grid,
  List,
  Filter,
  SortAsc,
  SortDesc,
  Navigation,
  Compass,
  Signal,
  Battery,
  Power,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  Snowflake,
  Sunrise,
  Sunset
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPage() {
  const { isOpen, service, closeForm, openForm } = useContactForm()

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Gizlilik ve Güvenlik</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Kişisel Verilerinizin{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Güvenliği
              </span>{" "}
              Bizim Önceliğimiz
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              NovaGraph olarak, kişisel verilerinizin gizliliğine ve korunmasına önem veriyoruz. 
              Bu gizlilik politikası, web sitemiz üzerinden toplanan kişisel bilgilerin hangi amaçlarla 
              kullanıldığını ve nasıl korunduğunu açıklamaktadır.
            </p>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
              onClick={() => openForm("Gizlilik Politikası Hakkında")}
            >
              İletişime Geç
              <Mail className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* 1. Toplanan Bilgiler */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">1. Toplanan Bilgiler</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                Sitemizde yer alan İletişim Formu aracılığıyla aşağıdaki bilgiler toplanmaktadır:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 mb-4">Temel Bilgiler</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Firma Ünvanı</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Sektör</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Şehir</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Ad Soyad</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-semibold text-green-900 mb-4">İletişim Bilgileri</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>E-posta adresi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Telefon numarası</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Talep edilen hizmet</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>İletişim nedeni</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 2. Bilgilerin Kullanım Amacı */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">2. Bilgilerin Kullanım Amacı</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                Toplanan bilgiler aşağıdaki amaçlarla kullanılmaktadır:
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span>Size geri dönüş sağlamak</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span>Talebinize uygun çözümler sunmak</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span>Hizmet kalitemizi artırmak</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <span>Gerekli durumlarda sizinle iletişime geçmek</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-1">Önemli</h4>
                    <p className="text-yellow-800 text-sm">
                      Bu bilgiler hiçbir şekilde üçüncü taraflarla paylaşılmaz, satılmaz veya kiralanmaz.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Veri Güvenliği */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">3. Veri Güvenliği</h2>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Güvenlik Önlemlerimiz</h3>
                    <p className="text-gray-700 leading-relaxed">
                      NovaGraph, kişisel verilerinizi korumak için gerekli teknik ve idari önlemleri almaktadır. 
                      Verileriniz yetkisiz erişim, ifşa veya kötüye kullanıma karşı korunmaktadır.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 4. Çerezler */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">4. Çerezler</h2>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  Sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler (cookies) kullanabilir. 
                  Çerezler üzerinden kişisel bilgi toplanmaz.
                </p>
              </div>
            </motion.div>

            {/* 5. Haklarınız */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">5. Haklarınız</h2>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında;
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Verilerinize erişme,</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Düzeltme talep etme,</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Silinmesini isteme,</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Kullanımına itiraz etme hakkına sahipsiniz.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <p className="text-gray-700 text-sm">
                    Bu haklarınızı kullanmak için bizimle{" "}
                    <a href="/iletisim" className="text-blue-600 hover:underline font-semibold">
                      iletişim sayfamız
                    </a>{" "}
                    üzerinden iletişime geçebilirsiniz.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl border border-gray-200 p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">İletişim Bilgileri</h3>
              <div className="space-y-4 max-w-md mx-auto">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">E-posta</p>
                    <p className="font-semibold text-gray-900">info@novagraph.com.tr</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefon</p>
                    <p className="font-semibold text-gray-900">0545 664 2302</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Web Sitesi</p>
                    <p className="font-semibold text-gray-900">novagraph.com.tr</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactForm isOpen={isOpen} onClose={closeForm} service={service} />
    </div>
  )
} 