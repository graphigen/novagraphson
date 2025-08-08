import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/ContactForm"
import { useContactForm } from "@/contexts/ContactFormContext"
import { 
  Users, 
  Award, 
  Target, 
  Zap, 
  ArrowRight, 
  Star, 
  CheckCircle,
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
  BarChart3,
  Code,
  Search,
  Palette,
  Server,
  Filter,
  Lock,
  Activity
} from "lucide-react"
import { useEffect, useState } from "react"

const features = [
  { icon: <Globe className="w-6 h-6" />, title: "Web", description: "Modern web tasarımı" },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Reklam", description: "Dijital pazarlama" },
  { icon: <Users className="w-6 h-6" />, title: "CRM", description: "Müşteri yönetimi" },
  { icon: <Code className="w-6 h-6" />, title: "Yazılım", description: "Özel yazılım geliştirme" }
]

const allServices = [
  { icon: <Globe className="w-6 h-6" />, title: "Web Tasarım" },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Dijital Pazarlama" },
  { icon: <Search className="w-6 h-6" />, title: "SEO" },
  { icon: <Palette className="w-6 h-6" />, title: "Grafik Tasarım" },
  { icon: <Video className="w-6 h-6" />, title: "Video Prodüksiyon" },
  { icon: <Users className="w-6 h-6" />, title: "CRM Sistemleri" },
  { icon: <Server className="w-6 h-6" />, title: "VPS Sunucu" },
  { icon: <Shield className="w-6 h-6" />, title: "5651 Loglama" },
  { icon: <Wifi className="w-6 h-6" />, title: "VPN" },
  { icon: <Filter className="w-6 h-6" />, title: "Web Filtreleme" },
  { icon: <Lock className="w-6 h-6" />, title: "ZTNA Firewall" },
  { icon: <Activity className="w-6 h-6" />, title: "Cihaz Kontrolü" },
  { icon: <Monitor className="w-6 h-6" />, title: "Verimlilik Takibi" }
]

export default function HakkimizdaPage() {
  const { isOpen, service, closeForm, openForm } = useContactForm()
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev - 0.5
        const totalWidth = allServices.length * 216 // Her kart 216px (192px + 24px gap)
        return newPosition < -totalWidth ? 0 : newPosition
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>NovaGraph - Hakkımızda</title>
        <meta name="description" content="NovaGraph olarak işletmenizin dijital dönüşümü için kapsamlı çözümler sunuyoruz. Web tasarım, dijital pazarlama, güvenlik ve daha fazlası." />
        <meta name="keywords" content="NovaGraph, hakkımızda, dijital çözümler, web tasarım, dijital pazarlama, güvenlik" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                İşletmenizin büyümesi ve başarısı için ihtiyaç duyduğunuz tüm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  dijital çözümleri
                </span>{" "}
                tek bir çatı altında sunuyoruz.
              </h1>
            </motion.div>

            {/* Right Content - Feature List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kurumsal Tanıtım */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kurumsal Tanıtım</h2>
            
            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
              <p className="mb-6">
                <strong>Dijital Gücün Yeni Adı.</strong>
              </p>
              <p className="mb-6">
                NovaGraph, işletmelerin dijitalleşme sürecini hızlandırmak ve güvenli hale getirmek için kurulmuş yeni nesil teknoloji çözüm ortağınızdır.
              </p>
              <p className="mb-6">
                Web tasarımından siber güvenliğe, ağ altyapısından bulut sistemlerine kadar uçtan uca dijital dönüşüm hizmetleri sunarız.
              </p>
              <p className="mb-6">
                Graphigen ve Yıldız Bilişim'in güçlerini birleştirdiği bu yapı, teknik uzmanlığı ve yaratıcı bakış açısını tek çatı altında toplar.
              </p>
              <p className="mb-6">
                İşletmenizin dijital varlığını kurar, korur ve büyütürüz.
              </p>
              <p className="mb-8">
                <strong>NovaGraph ile Dijital Altyapınızı Güvene Alın.</strong>
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
                Kuruluş Yılı: 2006
              </Badge>
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
                Uzmanlık: Ağ, Yazılım ve Dijital Hizmetler
              </Badge>
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
                Hizmet Tipi: Bilişim & Dijital Çözümler
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sürekli Kayan Hizmetler */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tüm Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dijital dünyada ihtiyacınız olan tüm çözümleri tek bir çatı altında sunuyoruz.
            </p>
          </motion.div>

          {/* Kayan Kartlar Container */}
          <div className="relative h-24 overflow-hidden">
            {/* Kayan Kartlar */}
            <div 
              className="flex space-x-6 absolute top-0"
              style={{ 
                transform: `translateX(${scrollPosition}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* İlk set */}
              {allServices.map((service, index) => {
                const cardPosition = scrollPosition + (index * 216)
                // Kartın ekranın sol kenarından ne kadar uzakta olduğunu hesapla
                const distanceFromLeft = cardPosition + 200
                // Opacity'yi 0-200px aralığında hesapla (kart ekranın solundan çıkarken)
                const opacity = Math.max(0, Math.min(1, distanceFromLeft / 200))
                
                return (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-48 bg-white rounded-xl p-4 shadow-sm border border-gray-100 transition-all duration-300"
                    style={{
                      opacity: opacity,
                      transform: `translateX(${scrollPosition}px) scale(${Math.max(0.8, opacity)})`
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-blue-600">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm truncate">{service.title}</h3>
                    </div>
                  </div>
                )
              })}
              
              {/* İkinci set (döngü için) */}
              {allServices.map((service, index) => {
                const cardPosition = scrollPosition + ((index + allServices.length) * 216)
                // Kartın ekranın sol kenarından ne kadar uzakta olduğunu hesapla
                const distanceFromLeft = cardPosition + 200
                // Opacity'yi 0-200px aralığında hesapla (kart ekranın solundan çıkarken)
                const opacity = Math.max(0, Math.min(1, distanceFromLeft / 200))
                
                return (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-48 bg-white rounded-xl p-4 shadow-sm border border-gray-100 transition-all duration-300"
                    style={{
                      opacity: opacity,
                      transform: `translateX(${scrollPosition}px) scale(${Math.max(0.8, opacity)})`
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-blue-600">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm truncate">{service.title}</h3>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <ContactForm isOpen={isOpen} onClose={closeForm} service={service} />
    </div>
  )
} 