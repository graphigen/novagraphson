"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/ContactForm"
import { useContactForm } from "@/contexts/ContactFormContext"
 
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Target, 
  Zap, 
  TrendingUp, 
  ArrowRight, 
  Star, 
  Monitor, 
  Palette, 
  Code, 
  CheckCircle,
  Users,
  Shield,
  Mail,
  Plus,
  ArrowUpRight,
  Laptop,
  Smartphone as PhoneIcon,
  Tablet,
  Gauge,
  Eye,
  MousePointer,
  Target as TargetIcon,
  FileText,
  Image,
  Settings as SettingsIcon,
  Search,
  Send,
  Phone,
  MessageCircle,
  TestTube
} from "lucide-react"

export default function WebTasarimPage() {
  const { isOpen, service, closeForm, openForm } = useContactForm()

  const serviceFeatures = [
    {
      icon: Globe,
      title: "Kurumsal Web Sitesi",
      description: "Profesyonel kimliğinizi yansıtan modern kurumsal web siteleri"
    },
    {
      icon: Target,
      title: "Landing Page Tasarımı",
      description: "Dönüşüm oranlarını artıran etkili landing page tasarımları"
    },
    {
      icon: ShoppingCart,
      title: "E-Ticaret Web Sitesi",
      description: "Satışlarınızı artıracak güçlü e-ticaret platformları"
    },
    {
      icon: Smartphone,
      title: "Mobil Uyumlu Arayüz",
      description: "Tüm cihazlarda mükemmel görünüm sağlayan responsive tasarım"
    },
    {
      icon: Palette,
      title: "UX / UI Optimizasyonu",
      description: "Kullanıcı deneyimini maksimize eden arayüz optimizasyonu"
    },
    {
      icon: Zap,
      title: "Hız ve SEO Performansı",
      description: "Hızlı yükleme ve arama motoru optimizasyonu"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Smooth Transition Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4" />
              <span>Web Tasarım Hizmetleri</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Modern ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Dönüşüm Odaklı</span> Web Tasarım
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Estetik ve performans odaklı arayüzlerle dijital varlığınızı güçlendirin.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openForm("Web Tasarım")}
              >
                Teklif Al
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Web Tasarım Hizmetleri Section - 4 Cards Layout */}
      <section className="mobile-section bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mobil Uyumlu Tasarım Card */}
            <Card className="border-0 shadow-sm bg-white mobile-card group h-full flex flex-col">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gray-900">Mobil Uyumlu Tasarım</CardTitle>
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col h-full">
                <CardDescription className="text-gray-600 mb-6 mobile-text">
                  Tüm cihazlarda mükemmel görüntüleme deneyimi sunan, responsive yapılar.
                </CardDescription>
                
                {/* Interactive Device Buttons */}
                  <div className="space-y-6 flex-1">
                    {/* Device Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 flex-1">
                    {/* Mobile Button */}
                    <div className="group/device relative flex-1">
                      <button className="w-full h-full min-h-[120px] p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl">
                        <div className="flex flex-col items-center justify-center space-y-3 h-full">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <PhoneIcon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-gray-900 text-lg">Mobil</div>
                            <div className="text-sm text-gray-600">Telefon uyumlu</div>
                          </div>
                        </div>
                      </button>
                      
                      {/* Mobile Mockup - Hidden by default, shown on hover */}
                       <div className="hidden sm:block absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover/device:opacity-100 transition-all duration-300 pointer-events-none z-10">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
                          <div className="w-20 h-32 bg-gray-900 rounded-2xl p-1">
                            <div className="w-full h-full bg-white rounded-xl p-2">
                              <div className="w-full h-3 bg-blue-400 rounded-full mb-2"></div>
                              <div className="w-full h-6 bg-gray-200 rounded-lg mb-2"></div>
                              <div className="w-8 h-4 bg-blue-600 rounded-lg"></div>
                            </div>
                          </div>
                          <div className="text-center mt-2">
                            <div className="text-xs font-medium text-gray-700">Mobil Optimize</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tablet Button */}
                    <div className="group/device relative flex-1">
                      <button className="w-full h-full min-h-[120px] p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl">
                        <div className="flex flex-col items-center justify-center space-y-3 h-full">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Tablet className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-gray-900 text-lg">Tablet</div>
                            <div className="text-sm text-gray-600">Tablet uyumlu</div>
                          </div>
                        </div>
                      </button>
                      
                      {/* Tablet Mockup - Hidden by default, shown on hover */}
                       <div className="hidden sm:block absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover/device:opacity-100 transition-all duration-300 pointer-events-none z-10">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
                          <div className="w-24 h-18 bg-gray-900 rounded-2xl p-1">
                            <div className="w-full h-full bg-white rounded-xl p-2">
                              <div className="w-full h-2 bg-blue-400 rounded-full mb-1"></div>
                              <div className="w-full h-4 bg-gray-200 rounded-lg mb-1"></div>
                              <div className="w-10 h-3 bg-blue-600 rounded-lg"></div>
                            </div>
                          </div>
                          <div className="text-center mt-2">
                            <div className="text-xs font-medium text-gray-700">Tablet Uyumlu</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Button */}
                    <div className="group/device relative flex-1">
                      <button className="w-full h-full min-h-[120px] p-6 bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 rounded-xl">
                        <div className="flex flex-col items-center justify-center space-y-3 h-full">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                            <Laptop className="w-6 h-6 text-gray-600" />
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-gray-900 text-lg">Masaüstü</div>
                            <div className="text-sm text-gray-600">Desktop uyumlu</div>
                          </div>
                        </div>
                      </button>
                      
                      {/* Desktop Mockup - Hidden by default, shown on hover */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover/device:opacity-100 transition-all duration-300 pointer-events-none z-10">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
                          <div className="w-28 h-16 bg-gray-900 rounded-2xl p-1">
                            <div className="w-full h-full bg-white rounded-xl p-2">
                              <div className="w-full h-2 bg-gray-400 rounded-full mb-1"></div>
                              <div className="w-full h-3 bg-gray-200 rounded-lg mb-1"></div>
                              <div className="w-12 h-2 bg-gray-600 rounded-lg"></div>
                            </div>
                          </div>
                          <div className="text-center mt-2">
                            <div className="text-xs font-medium text-gray-700">Desktop Ready</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Responsive Features */}
                   <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6">
                    {/* Additional Features */}
                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      <div className="text-center p-3 bg-white/60 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Eye className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="text-xs font-medium text-gray-700">Retina Display</div>
                        <div className="text-xs text-gray-500">Yüksek çözünürlük</div>
                      </div>
                      
                      <div className="text-center p-3 bg-white/60 rounded-lg">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Zap className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="text-xs font-medium text-gray-700">Hızlı Tepki</div>
                        <div className="text-xs text-gray-500">60fps animasyon</div>
                      </div>
                      
                      <div className="text-center p-3 bg-white/60 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Shield className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="text-xs font-medium text-gray-700">Güvenli</div>
                        <div className="text-xs text-gray-500">SSL sertifikalı</div>
                      </div>
                      
                      <div className="text-center p-3 bg-white/60 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Search className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="text-xs font-medium text-gray-700">SEO Uyumlu</div>
                        <div className="text-xs text-gray-500">Arama motoru dostu</div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                     <div className="bg-white rounded-lg p-4 shadow-sm overflow-hidden">
                      <div className="text-center mb-4">
                        <div className="text-sm font-semibold text-gray-900">Performans Metrikleri</div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">99.9%</div>
                          <div className="text-xs text-gray-600">Uptime</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">&lt;2s</div>
                          <div className="text-xs text-gray-600">Yükleme Süresi</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">100%</div>
                          <div className="text-xs text-gray-600">Mobil Uyumlu</div>
                        </div>
                      </div>
                    </div>

                    {/* Browser Support */}
                    <div className="mt-4 text-center">
                      <div className="text-xs text-gray-500 mb-2">Desteklenen Tarayıcılar</div>
                      <div className="flex items-center justify-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">Chrome</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">Firefox</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">Safari</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">Edge</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Yüksek Performanslı Kodlama Card */}
            <Card className="border-0 shadow-sm bg-white mobile-card group h-full flex flex-col">
              <CardHeader className="p-6 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gray-900">Yüksek Performanslı Kodlama</CardTitle>
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col h-full">
                <CardDescription className="text-gray-600 mb-4 mobile-text">
                  Hızlı yüklenen sayfalar ve temiz, optimize edilmiş kod yapısı.
                </CardDescription>
                <div className="space-y-4 h-full flex flex-col">
                  {/* Performance Box */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 flex-1">
                    <div className="flex items-center justify-between h-full">
                      <div>
                        <div className="text-sm font-medium text-green-800">Yüklenme Süresi</div>
                        <div className="text-2xl font-bold text-green-600">0.3s</div>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Gauge className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Lighthouse Scores */}
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Performans</span>
                      <span className="text-sm font-bold text-gray-900">%100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-1000" style={{width: '100%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">SEO</span>
                      <span className="text-sm font-bold text-gray-900">%100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-3 rounded-full transition-all duration-1000" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  
                  {/* Code Mockup */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-4 shadow-lg flex-1 overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-600">index.html</span>
                    </div>
                    <div className="text-xs text-gray-800 font-mono space-y-1">
                      <div><span className="text-blue-600">&lt;!DOCTYPE html&gt;</span></div>
                      <div><span className="text-blue-600">&lt;html lang="tr"&gt;</span></div>
                      <div><span className="text-blue-600">&lt;head&gt;</span></div>
                      <div className="ml-4"><span className="text-blue-600">&lt;title&gt;</span><span className="text-gray-900">NovaGraph</span><span className="text-blue-600">&lt;/title&gt;</span></div>
                      <div className="ml-4"><span className="text-blue-600">&lt;meta charset="utf-8"&gt;</span></div>
                      <div><span className="text-blue-600">&lt;/head&gt;</span></div>
                      <div><span className="text-blue-600">&lt;body&gt;</span></div>
                      <div className="ml-4"><span className="text-blue-600">&lt;header&gt;</span></div>
                      <div className="ml-8"><span className="text-blue-600">&lt;nav&gt;</span><span className="text-gray-600">...</span><span className="text-blue-600">&lt;/nav&gt;</span></div>
                      <div className="ml-4"><span className="text-blue-600">&lt;/header&gt;</span></div>
                      <div><span className="text-blue-600">&lt;/body&gt;</span></div>
                      <div><span className="text-blue-600">&lt;/html&gt;</span></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dönüşüm Odaklı Arayüzler Card */}
            <Card className="border-0 shadow-sm bg-white mobile-card group h-full flex flex-col">
              <CardHeader className="p-6 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gray-900">Dönüşüm Odaklı Arayüzler</CardTitle>
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col h-full">
                <CardDescription className="text-gray-600 mb-6">
                  Kullanıcı yolculuğunu takip eden ve dönüşüm oranlarını artıran UX tasarımları.
                </CardDescription>
                
                {/* Modern Hero Section Mockup */}
                <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 rounded-xl p-4 sm:p-6 mb-6 shadow-lg flex-1">
                  <div className="text-center text-white">
                    <div className="text-xl font-bold mb-2">Modern Web Tasarım</div>
                    <div className="text-sm mb-4 opacity-90">Profesyonel ve dönüşüm odaklı çözümler</div>
                    <Button 
                      className="bg-white text-blue-600 hover:bg-gray-100 text-sm px-6 py-2 rounded-lg font-medium shadow-lg"
                      onClick={() => openForm("Web Tasarım")}
                    >
                      Teklif Al
                    </Button>
                  </div>
                </div>
                
                {/* Modern Conversion Process */}
                <div className="space-y-4 flex-1">
                  <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-900">Ziyaretçi</div>
                      <div className="text-xs text-gray-600">Siteye gelen kullanıcı</div>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-600">1</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <MousePointer className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-900">Etkileşim</div>
                      <div className="text-xs text-gray-600">İçerikle etkileşim</div>
                    </div>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-green-600">2</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <TargetIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-900">Dönüşüm</div>
                      <div className="text-xs text-gray-600">Hedef eylem tamamlandı</div>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-600">3</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kolay Yönetim Paneli Entegrasyonu Card */}
            <Card className="border-0 shadow-sm bg-white rounded-xl overflow-hidden group h-full flex flex-col">
              <CardHeader className="p-6 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gray-900">Kolay Yönetim Paneli Entegrasyonu</CardTitle>
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex flex-col h-full">
                <CardDescription className="text-gray-600 mb-6">
                  WordPress, Webflow veya özel panellerle içerik güncellemek çok kolay.
                </CardDescription>
                
                {/* CMS Panel Mockup */}
                <div className="bg-gray-50 rounded-lg p-4 flex-1">
                  <div className="flex space-x-4 h-full">
                    {/* Left Menu */}
                    <div className="w-28 space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 p-2 rounded cursor-pointer transition-colors">
                        <FileText className="w-4 h-4" />
                        <span>Sayfalar</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 p-2 rounded cursor-pointer transition-colors">
                        <Image className="w-4 h-4" />
                        <span>Medya</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 p-2 rounded cursor-pointer transition-colors">
                        <Users className="w-4 h-4" />
                        <span>Kullanıcılar</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 p-2 rounded cursor-pointer transition-colors">
                        <ShoppingCart className="w-4 h-4" />
                        <span>Ürünler</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 p-2 rounded cursor-pointer transition-colors">
                        <TrendingUp className="w-4 h-4" />
                        <span>Raporlar</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 p-2 rounded cursor-pointer transition-colors">
                        <SettingsIcon className="w-4 h-4" />
                        <span>Ayarlar</span>
                      </div>
                    </div>
                    
                    {/* Right Content Area */}
                    <div className="flex-1 bg-white rounded-lg p-4">
                      {/* Tabs */}
                      <div className="flex space-x-4 mb-4 border-b">
                        <div className="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-2">Görünüm</div>
                        <div className="text-sm text-gray-600 pb-2">İçerik</div>
                        <div className="text-sm text-gray-600 pb-2">SEO</div>
                      </div>
                      
                      {/* Content Editor */}
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700">Başlık Düzenleme</label>
                          <input 
                            type="text" 
                            value="NovaGraph Web Tasarım Hizmetleri" 
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50"
                            readOnly
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-sm font-medium text-gray-700">Anahtar Kelimeler</label>
                            <input 
                              type="text" 
                              value="web tasarım, modern tasarım, dönüşüm odaklı" 
                              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50"
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700">URL Slug</label>
                            <input 
                              type="text" 
                              value="web-tasarim-hizmetleri" 
                              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50"
                              readOnly
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">SEO Skoru: 95/100</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">Draft</span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded flex items-center">
                            <Send className="w-4 h-4 mr-2" />
                            Yayımla
                          </Button>
                          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm px-4 py-2 rounded">
                            Önizle
                          </Button>
                          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm px-4 py-2 rounded">
                            Taslak Kaydet
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="mobile-section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">250%</div>
              <div className="text-gray-600 font-medium">Trafik Artışı</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">45%</div>
              <div className="text-gray-600 font-medium">Dönüşüm Artışı</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1.2s</div>
              <div className="text-gray-600 font-medium">Ortalama Yükleme</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-600" />
              </div>
              <div className="text-3xl font-bold text-gray-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Tasarım Süreci Section */}
      <section className="mobile-section bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Timeline Steps */}
            <div className="space-y-8">
              {/* Step 1: İhtiyaç Analizi */}
              <div className="relative flex items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6 shadow-sm">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">1. İhtiyaç Analizi</h3>
                    <Badge className="bg-blue-100 text-blue-800">Adım 1</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Projenin amacını, hedef kitleyi ve işletmenizin ihtiyaçlarını detaylı olarak analiz ediyoruz.
                  </p>
                  
                  {/* UI Component - Analysis Dashboard */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <div className="text-xs font-medium text-gray-700">Hedef Kitle</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="text-xs font-medium text-gray-700">Rakip Analizi</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Wireframe / Tasarım */}
              <div className="relative flex items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-6 shadow-sm">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <div className="w-full h-0.5 bg-white rounded-full"></div>
                    <div className="w-full h-0.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">2. Wireframe / Tasarım</h3>
                    <Badge className="bg-green-100 text-green-800">Adım 2</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Kullanıcı deneyimini ön planda tutarak wireframe'ler ve modern tasarımlar oluşturuyoruz.
                  </p>
                  
                  {/* UI Component - Design Mockup */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <span className="text-xs text-gray-500">design.figma</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-8 bg-green-100 rounded"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Geliştirme */}
              <div className="relative flex items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6 shadow-sm">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">3. Geliştirme</h3>
                    <Badge className="bg-blue-100 text-blue-800">Adım 3</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Modern teknolojilerle responsive ve performanslı web siteleri geliştiriyoruz.
                  </p>
                  
                  {/* UI Component - Code Editor */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                    <div className="bg-gray-900 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-xs text-gray-400">index.tsx</span>
                      </div>
                      <div className="text-xs text-gray-300 font-mono space-y-1">
                        <div><span className="text-blue-400">import</span> <span className="text-green-400">React</span> <span className="text-blue-400">from</span> <span className="text-yellow-400">&apos;react&apos;</span></div>
                        <div><span className="text-blue-400">const</span> <span className="text-green-400">App</span> = () =&gt; {'{'}</div>
                        <div className="ml-4"><span className="text-blue-400">return</span> (</div>
                        <div className="ml-8">&lt;<span className="text-green-400">div</span>&gt;</div>
                        <div className="ml-12">&lt;<span className="text-green-400">h1</span>&gt;Hello World&lt;/<span className="text-green-400">h1</span>&gt;</div>
                        <div className="ml-8">&lt;/<span className="text-green-400">div</span>&gt;</div>
                        <div className="ml-4">)</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Test ve Optimizasyon */}
              <div className="relative flex items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mr-6 shadow-sm">
                  <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                    <TestTube className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">4. Test ve Optimizasyon</h3>
                    <Badge className="bg-gray-100 text-gray-800">Adım 4</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Kapsamlı testler ve performans optimizasyonları ile mükemmel sonuçlar elde ediyoruz.
                  </p>
                  
                  {/* UI Component - Testing Dashboard */}
                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-4 border border-gray-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="text-xs font-medium text-gray-700">Performans</div>
                        </div>
                        <div className="text-lg font-bold text-green-600">98%</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <div className="text-xs font-medium text-gray-700">SEO</div>
                        </div>
                        <div className="text-lg font-bold text-blue-600">95%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5: Yayınlama */}
              <div className="relative flex items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6 shadow-sm">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">5. Yayınlama</h3>
                    <Badge className="bg-blue-100 text-blue-800">Adım 5</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Web sitenizi canlıya alıyor ve sürekli destek sağlıyoruz.
                  </p>
                  
                  {/* UI Component - Launch Status */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-900">Site Canlı</span>
                      </div>
                      <div className="text-xs text-gray-500">novagraph.com.tr</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mobile-section bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Web Tasarım Projenizi Başlatalım</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uzman ekibimizle birlikte dijital varlığınızı güçlendirin ve işletmenizi bir adım öne taşıyın.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
            <Button 
              size="lg" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              onClick={() => openForm("Web Tasarım")}
            >
              Teklif Al
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <ContactForm isOpen={isOpen} onClose={closeForm} service={service} />
    </main>
  )
} 