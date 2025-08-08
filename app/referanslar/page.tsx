"use client"

import { useState, useMemo, useCallback, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ContactForm } from "@/components/ContactForm"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  Users, 
  Star,
  Globe,
  Palette,
  BarChart3,
  Shield,
  Video,
  MessageSquare,
  TrendingUp,
  ShoppingCart,
  Phone,
  Mail,
  Smartphone,
  GraduationCap,
  ArrowRight,
  Package,
  Truck,
  Utensils,
  Heart,
  TestTube,
  Cpu,
  Scale,
  Hotel,
  Building,
  Factory,
  Briefcase
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Reference {
  id: string
  name: string
  logo: string
  services: string[]
  description?: string
  year?: string
}

interface Category {
  id: string
  name: string
  icon: React.ReactNode
  references: Reference[]
}

const categories: Category[] = [
  {
    id: "textile",
    name: "Tekstil, Konfeksiyon ve Çorap",
    icon: <Package className="w-6 h-6" />,
    references: [
      { id: "1", name: "Aytuğ Digital Mağazacılık A.Ş.", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "2", name: "Mısırlı Tekstil Sanayi ve Ticaret A.Ş.", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "3", name: "CDA Elektronik Pazarlama ve Ticaret A.Ş.", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım"] },
      { id: "4", name: "Eren Socks Tekstil Sanayi ve Ticaret A.Ş.", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "5", name: "Secal Makina ve Otomasyon Sistemleri", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "6", name: "Onelia Furniture", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "7", name: "Trend İç ve Dış Ticaret Ltd. Şti.", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "8", name: "Facette Dental Clinic", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "56", name: "MAG Tasarım ve Yazılım Hizmetleri", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım", "Dijital Pazarlama", "Sosyal Medya Yönetimi", "Video Prodüksiyon"] },
      { id: "57", name: "Band of Creators", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım", "Dijital Pazarlama", "Video Prodüksiyon"] },
      { id: "58", name: "MAG Initials", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım", "Dijital Pazarlama", "Video Prodüksiyon"] },
      { id: "59", name: "Yonka Mühendislik", logo: "", services: ["Web Tasarım", "Video Prodüksiyon"] },
      { id: "60", name: "Albayrak Group", logo: "", services: ["Web Tasarım", "Video Prodüksiyon"] },
      { id: "61", name: "Hayırlı İşler Reklam Ajansı", logo: "", services: ["Web Tasarım"] }
    ]
  },
  {
    id: "logistics",
    name: "Lojistik",
    icon: <Truck className="w-6 h-6" />,
    references: [
      { id: "9", name: "Mavi Logistics", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "10", name: "MLS Uluslararası Taşımacılık ve Dış Ticaret Ltd. Şti.", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "11", name: "Aerisat Elektronik Ticaret Ltd. Şti.", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "12", name: "Eraksons Tekstil Sanayi ve Ticaret A.Ş.", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "13", name: "ProRed Dijital Çözümler", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "14", name: "Eren Socks Tekstil Sanayi ve Ticaret A.Ş.", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım"] },
      { id: "15", name: "Delta Group", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "16", name: "MesCargo Lojistik Hizmetleri A.Ş.", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım"] },
      { id: "17", name: "Zan Plastik ve Kalıp Sanayi A.Ş.", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım"] }
    ]
  },
  {
    id: "food",
    name: "Gıda ve Restoran",
    icon: <Utensils className="w-6 h-6" />,
    references: [
      { id: "18", name: "10Burger (Gıda)", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "19", name: "Marna Marine", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "20", name: "On Kasap", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "21", name: "Avni Bana", logo: "", services: ["Web Tasarım", "Sosyal Medya Yönetimi", "Dijital Pazarlama"] },
      { id: "22", name: "Araki İstanbul", logo: "", services: ["Video Prodüksiyon"] }
    ]
  },
  {
    id: "health",
    name: "Sağlık ve Medikal",
    icon: <Heart className="w-6 h-6" />,
    references: [
      { id: "23", name: "Global Natapur Kozmetik A.Ş.", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım", "Dijital Pazarlama", "CRM Sistemleri"] },
      { id: "24", name: "Macro Health Tourism", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım", "Dijital Pazarlama", "CRM Sistemleri"] },
      { id: "25", name: "İSBA Travel", logo: "", services: ["Web Tasarım", "Dijital Pazarlama"] },
      { id: "26", name: "Tower Dental Turkey", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım", "Dijital Pazarlama", "CRM Sistemleri"] },
      { id: "27", name: "Avrupa Diş Kliniği", logo: "", services: ["Web Tasarım", "Dijital Pazarlama", "CRM Sistemleri", "Mail Marketing"] },
      { id: "28", name: "Op. Dr. Taha Mehmetoğlu", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım", "Dijital Pazarlama", "CRM Sistemleri", "Mail Marketing", "Sosyal Medya Yönetimi"] },
      { id: "29", name: "Klinik Atakent", logo: "", services: ["Web Tasarım", "Dijital Pazarlama"] },
      { id: "30", name: "Etemoğlu Ağız ve Diş Sağlığı Polikliniği", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım", "Dijital Pazarlama", "CRM Sistemleri"] },
      { id: "31", name: "Estemiel Clinic", logo: "", services: ["Dijital Pazarlama"] },
      { id: "32", name: "Surgero Clinic", logo: "", services: ["Dijital Pazarlama"] },
      { id: "33", name: "ProCare Clinic", logo: "", services: ["Web Tasarım", "Dijital Pazarlama"] }
    ]
  },
  {
    id: "chemical",
    name: "Kimya, İlaç ve Sağlık Ürünleri",
    icon: <TestTube className="w-6 h-6" />,
    references: [
      { id: "35", name: "Suraya Kimya Sanayi ve Ticaret A.Ş.", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "36", name: "Neptün İlaç ve Kimya Sanayi", logo: "", services: ["Sosyal Medya Yönetimi"] }
    ]
  },
  {
    id: "technology",
    name: "Teknoloji, Yazılım ve Otomasyon",
    icon: <Cpu className="w-6 h-6" />,
    references: [
      { id: "37", name: "Arkkontrol Robotik Sistemler", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım", "Video Prodüksiyon"] },
      { id: "53", name: "HS Robotics", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım", "Dijital Pazarlama"] },
      { id: "54", name: "Tiger Torch Clean Systems", logo: "", services: ["Web Tasarım"] }
    ]
  },
  {
    id: "legal",
    name: "Hukuk, Danışmanlık ve Denetim",
    icon: <Scale className="w-6 h-6" />,
    references: [
      { id: "38", name: "Sarıkılıç Otomasyon Sistemleri", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "39", name: "Global Alliance Consulting", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "40", name: "Avrasya Denetim ve Mali Müşavirlik A.Ş.", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım"] },
      { id: "41", name: "KRL Danışmanlık ve Denetim Hizmetleri", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım", "Sosyal Medya Yönetimi"] },
      { id: "42", name: "Sen Yüksel Mimarlık", logo: "", services: ["Web Tasarım"] }
    ]
  },
  {
    id: "hotel",
    name: "Otelcilik ve Konaklama",
    icon: <Hotel className="w-6 h-6" />,
    references: [
      { id: "43", name: "Cunda Taşçı Restaurant", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "44", name: "Hotel Yeni Sefa", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "62", name: "Geyikli Troya Hotel", logo: "", services: ["Web Tasarım", "Dijital Pazarlama"] }
    ]
  },
  {
    id: "municipality",
    name: "Belediyeler ve Kamu",
    icon: <Building className="w-6 h-6" />,
    references: [
      { id: "45", name: "Küçükçekmece Belediyesi", logo: "", services: ["IT & Güvenlik Çözümleri"] }
    ]
  },
  {
    id: "industry",
    name: "Sanayi, Üretim ve Ambalaj",
    icon: <Factory className="w-6 h-6" />,
    references: [
      { id: "46", name: "Erya Plastik ve Kalıp Sanayi Ltd. Şti.", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım"] },
      { id: "47", name: "Altay Cıvata Sanayi ve Ticaret A.Ş.", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "48", name: "Seamo Elektronik ve Yazılım Sistemleri", logo: "", services: ["IT & Güvenlik Çözümleri"] },
      { id: "49", name: "Arnica Ev Aletleri A.Ş.", logo: "", services: ["Web Tasarım"] },
      { id: "50", name: "Komplas Plastik Sanayi ve Ticaret A.Ş.", logo: "", services: ["Web Tasarım", "IT & Güvenlik Çözümleri"] },
      { id: "51", name: "Kar Ambalaj ve Paketleme Sanayi A.Ş.", logo: "", services: ["Web Tasarım", "Sosyal Medya Yönetimi"] },
      { id: "52", name: "Asel Aydınlatma Sistemleri", logo: "", services: ["IT & Güvenlik Çözümleri", "Web Tasarım", "Sosyal Medya Yönetimi", "Dijital Pazarlama"] },
      { id: "63", name: "Oran Ambalaj Sanayi ve Ticaret A.Ş.", logo: "", services: ["Web Tasarım"] },
      { id: "64", name: "EnerjiPack Ambalaj Sanayi ve Ticaret A.Ş.", logo: "", services: ["Web Tasarım"] },
      { id: "65", name: "Makya Basım Matbaacılık", logo: "", services: ["Web Tasarım", "Grafik Tasarım"] },
      { id: "66", name: "Repacco Packaging Company", logo: "", services: ["Web Tasarım"] }
    ]
  },
  {
    id: "other",
    name: "Diğer",
    icon: <Briefcase className="w-6 h-6" />,
    references: [
      { id: "67", name: "Eroğlu Holding A.Ş.", logo: "", services: ["Web Tasarım"] }
    ]
  }
]

const serviceIcons: { [key: string]: React.ReactNode } = {
  "Web Tasarım": <Globe className="w-4 h-4" />,
  "IT & Güvenlik Çözümleri": <Cpu className="w-4 h-4" />,
  "Dijital Pazarlama": <BarChart3 className="w-4 h-4" />,
  "Sosyal Medya Yönetimi": <MessageSquare className="w-4 h-4" />,
  "Video Prodüksiyon": <Video className="w-4 h-4" />,
  "CRM Sistemleri": <Users className="w-4 h-4" />,
  "Mail Marketing": <Mail className="w-4 h-4" />,
  "Grafik Tasarım": <Palette className="w-4 h-4" />
}

// Lazy loaded component for better performance
const CategoryCard = ({ category, openCategory, openReference, handleCategoryClick, handleReferenceClick }: {
  category: Category
  openCategory: string | null
  openReference: string | null
  handleCategoryClick: (id: string) => void
  handleReferenceClick: (id: string) => void
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Card className="border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
        <CardHeader 
          className="pb-4 cursor-pointer"
          onClick={() => handleCategoryClick(category.id)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                {category.icon}
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {category.name}
                </CardTitle>
                <p className="text-sm text-gray-500">
                  {category.references.length} referans
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              {openCategory === category.id ? (
                <ChevronUp className="w-5 h-5 text-blue-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </div>
          </div>
        </CardHeader>

        <AnimatePresence>
          {openCategory === category.id && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CardContent className="pt-0 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.references.map((reference) => (
                    <motion.div
                      key={reference.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.15 }}
                      className="border border-gray-100 rounded-lg p-4 hover:border-blue-200 transition-colors cursor-pointer"
                      onClick={() => handleReferenceClick(reference.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
                            <div className="w-full h-full rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600">
                              <span className="text-white font-bold text-sm">
                                {reference.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 truncate">
                              {reference.name}
                            </h3>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          {openReference === reference.id ? (
                            <ChevronUp className="w-4 h-4 text-blue-600" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                      </div>

                      <AnimatePresence>
                        {openReference === reference.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="mt-4 pt-4 border-t border-gray-100"
                          >
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-900">Verdiğimiz Hizmetler:</h4>
                              <div className="flex flex-wrap gap-2">
                                {reference.services.map((service, index) => (
                                  <Badge 
                                    key={index} 
                                    variant="secondary" 
                                    className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
                                  >
                                    <div className="flex items-center space-x-1">
                                      {serviceIcons[service] && (
                                        <span className="text-blue-600">
                                          {serviceIcons[service]}
                                        </span>
                                      )}
                                      <span className="text-xs">{service}</span>
                                    </div>
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

export default function ReferanslarPage() {
  const [openReference, setOpenReference] = useState<string | null>(null)
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const { isOpen, service, closeForm, openForm } = useContactForm()

  // Memoize handlers for better performance
  const handleReferenceClick = useCallback((id: string) => {
    setOpenReference(prev => prev === id ? null : id)
  }, [])

  const handleCategoryClick = useCallback((id: string) => {
    setOpenCategory(prev => prev === id ? null : id)
  }, [])

  // Memoize categories to prevent unnecessary re-renders
  const memoizedCategories = useMemo(() => categories, [])

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4" />
              <span>Başarı Hikayeleri</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Referanslarımız</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Farklı sektörlerden müşterilerimizle birlikte başardığımız projeler ve dijital dönüşüm hikayeleri.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Tamamlanan Proje</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">300+</div>
                <div className="text-gray-600">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sektörel Referanslarımız</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı sektörlerden müşterilerimizle birlikte başardığımız projeler ve dijital dönüşüm hikayeleri.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="space-y-6">
            <Suspense fallback={<div className="text-center py-8">Yükleniyor...</div>}>
              {memoizedCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  openCategory={openCategory}
                  openReference={openReference}
                  handleCategoryClick={handleCategoryClick}
                  handleReferenceClick={handleReferenceClick}
                />
              ))}
            </Suspense>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Siz de Referanslarımıza Katılın</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Projeleriniz için güvenilir, hızlı ve ölçeklenebilir dijital çözümlerimizi keşfedin.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
              <p className="text-gray-600 mb-4">0545 664 2302</p>
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
                <MessageSquare className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">0545 664 2302</p>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">WhatsApp'tan Yaz</button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button 
              onClick={() => openForm("Referanslar")}
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