"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ContactForm } from "@/components/ContactForm"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Server, 
  Shield, 
  Clock, 
  Zap, 
  HardDrive, 
  Code, 
  CheckCircle, 
  ArrowRight, 
  ChevronDown,
  ChevronUp,
  Cpu,
  HardDrive as Storage,
  Wifi,
  Monitor,
  Users,
  Headphones,
  Lock,
  Database,
  Settings,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useContactForm } from "@/contexts/ContactFormContext"

interface VPSPackage {
  id: string
  name: string
  description: string
  storage: string
  cpu: string
  ram: string
  traffic: string
  controlPanel: string
  os: string
  price: string
  features: string[]
}

interface Advantage {
  icon: React.ReactNode
  title: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

const vpsPackages: VPSPackage[] = [
  {
    id: "vps1",
    name: "TR Linux VPS 1",
    description: "VPS Server Paketi",
    storage: "20 GB Enterprise NVMe",
    cpu: "1 Core Xeon Gold İşlemci",
    ram: "2 GB DDR4 RAM",
    traffic: "1 Gbit Sınırsız Trafik",
    controlPanel: "Ücretsiz Kontrol Paneli",
    os: "Linux İşletim Sistemi",
    price: "$7,35",
    features: [
      "DDoS Koruması",
      "7/24 Teknik Destek",
      "Yedekleme Hizmeti",
      "99.9% Uptime Garantisi"
    ]
  },
  {
    id: "vps2",
    name: "TR Linux VPS 2",
    description: "VPS Server Paketi",
    storage: "40 GB Enterprise NVMe",
    cpu: "2 Core Xeon Gold İşlemci",
    ram: "4 GB DDR4 RAM",
    traffic: "1 Gbit Sınırsız Trafik",
    controlPanel: "Ücretsiz Kontrol Paneli",
    os: "Linux İşletim Sistemi",
    price: "$14,70",
    features: [
      "DDoS Koruması",
      "7/24 Teknik Destek",
      "Yedekleme Hizmeti",
      "99.9% Uptime Garantisi"
    ]
  },
  {
    id: "vps3",
    name: "TR Linux VPS 3",
    description: "VPS Server Paketi",
    storage: "80 GB Enterprise NVMe",
    cpu: "4 Core Xeon Gold İşlemci",
    ram: "8 GB DDR4 RAM",
    traffic: "1 Gbit Sınırsız Trafik",
    controlPanel: "Ücretsiz Kontrol Paneli",
    os: "Linux İşletim Sistemi",
    price: "$29,40",
    features: [
      "DDoS Koruması",
      "7/24 Teknik Destek",
      "Yedekleme Hizmeti",
      "99.9% Uptime Garantisi"
    ]
  }
]

const advantages: Advantage[] = [
  {
    icon: <Server className="w-8 h-8 text-blue-600" />,
    title: "Güçlü Sunucular",
    description: "Yüksek teknolojili makinelerimizle limitsiz paketlerimizin tadını çıkarın."
  },
  {
    icon: <Headphones className="w-8 h-8 text-blue-600" />,
    title: "7/24 Teknik Destek",
    description: "Herhangi bir soru veya sorununuzda 7 gün 24 saat size destek vermek üzere hazır bulunan destek ekibimize ulaşabilirsiniz."
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Kesintisiz Hizmet",
    description: "Sanal sunucularımızda %99.9 Uptime ve minimum Downtime garantisi ile gecikme yaşamadan hizmet alın."
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Gelişmiş Güvenlik",
    description: "Arbor ve Path ile gelişmiş DDos korumasını ücretsiz sağlamaktayız."
  },
  {
    icon: <Database className="w-8 h-8 text-blue-600" />,
    title: "Yedekli Yapı",
    description: "Bizden kaynaklı herhangi bir teknik sorunda sunucunuz tamamen yenisiyle değiştirilir."
  },
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Yazılım Desteği",
    description: "Sunucularımıza her türden yazılım için gerekli yazılım desteği tanımlanmıştır."
  }
]

const faqs: FAQ[] = [
  {
    question: "VPS nedir ve nasıl çalışır?",
    answer: "VPS (Virtual Private Server), bir fiziksel sunucunun sanallaştırma teknolojisi kullanılarak bölünmesi sonucu elde edilen izole bir sunucu türüdür. Bu sanal sunucularda, her kullanıcıya işletim sistemi, RAM, CPU ve depolama gibi kaynaklar tahsis edilir. Kullanıcılar, sunucularını bağımsız olarak yönetebilir, özelleştirebilir ve uygulamalarını çalıştırabilir. Her VPS, diğer kullanıcıların işlemlerinden etkilenmeden performansını sürdürebilir ve güvenliği sağlar."
  },
  {
    question: "VPS ile paylaşımlı hosting arasındaki farklar nelerdir?",
    answer: "Paylaşımlı hosting'de birden fazla web sitesi aynı sunucu kaynaklarını paylaşır ve birbirlerini etkileyebilir. VPS'de ise her kullanıcıya ayrılmış izole kaynaklar bulunur. VPS daha güvenli, performanslı ve özelleştirilebilir bir çözüm sunar. Paylaşımlı hosting daha ekonomik ancak sınırlı kaynaklara sahiptir."
  },
  {
    question: "VPS hangi durumlarda tercih edilmelidir?",
    answer: "VPS, web siteniz büyüdüğünde, daha fazla trafik aldığında, özel yazılım gerektiğinde, güvenlik ihtiyacı arttığında veya sunucu kontrolü istediğinizde tercih edilmelidir. E-ticaret siteleri, kurumsal web siteleri, uygulama sunucuları ve yüksek trafikli siteler için idealdir."
  },
  {
    question: "VPS nasıl yönetilir?",
    answer: "VPS'ler web tabanlı kontrol paneli (cPanel, Plesk gibi) veya SSH erişimi ile yönetilir. Kontrol paneli üzerinden dosya yönetimi, veritabanı yönetimi, e-posta ayarları ve domain yönetimi yapılabilir. SSH ile komut satırından da yönetim mümkündür."
  },
  {
    question: "Unmanaged VPS nedir ve kimler için uygundur?",
    answer: "Unmanaged VPS'de sunucu yönetimi tamamen kullanıcıya aittir. İşletim sistemi kurulumu, güvenlik yamaları, yedekleme ve teknik sorunlar kullanıcı tarafından çözülür. Linux sistemleri hakkında bilgi sahibi olan, teknik deneyimi olan kullanıcılar için uygundur."
  },
  {
    question: "Managed VPS nedir ve kimler için uygundur?",
    answer: "Managed VPS'de sunucu yönetimi hosting sağlayıcısı tarafından yapılır. İşletim sistemi kurulumu, güvenlik, yedekleme, güncellemeler ve teknik destek sağlayıcı tarafından üstlenilir. Teknik bilgisi sınırlı olan veya sunucu yönetimi ile uğraşmak istemeyen kullanıcılar için idealdir."
  },
  {
    question: "VPS'lerde hangi işletim sistemleri kullanılır?",
    answer: "VPS'lerde Linux (Ubuntu, CentOS, Debian, Fedora) ve Windows Server işletim sistemleri kullanılabilir. Linux sistemleri daha hafif, güvenli ve maliyet etkin olduğu için daha yaygın tercih edilir. Windows Server ise .NET uygulamaları ve Windows tabanlı yazılımlar için gereklidir."
  },
  {
    question: "VPS sunucusu nasıl seçilir?",
    answer: "VPS seçerken trafik miktarı, depolama ihtiyacı, RAM gereksinimi, CPU kullanımı ve bütçe göz önünde bulundurulmalıdır. Mevcut ihtiyaçlarınızı analiz edin ve gelecekteki büyüme planlarınızı da dikkate alın. Başlangıçta düşük kaynaklı bir paket seçip, ihtiyaç duydukça yükseltme yapabilirsiniz."
  },
  {
    question: "VPS sunucuları ne kadar güvenlidir?",
    answer: "VPS sunucuları paylaşımlı hosting'e göre daha güvenlidir. Her VPS izole edilmiş kaynaklara sahiptir ve diğer kullanıcıların işlemlerinden etkilenmez. Ancak güvenlik seviyesi kullanıcının aldığı önlemlere bağlıdır. Düzenli güvenlik güncellemeleri, güçlü şifreler ve güvenlik duvarı yapılandırması önemlidir."
  },
  {
    question: "VPS'lerde yedekleme nasıl yapılır?",
    answer: "VPS'lerde otomatik ve manuel yedekleme seçenekleri bulunur. Otomatik yedekleme genellikle hosting sağlayıcısı tarafından sunulur. Manuel yedekleme için kontrol paneli üzerinden veya SSH ile komut satırından yedekleme işlemleri yapılabilir. Düzenli yedekleme veri kaybı riskini minimize eder."
  },
  {
    question: "VPS sunucuları ölçeklenebilir mi?",
    answer: "Evet, VPS sunucuları oldukça ölçeklenebilir. İhtiyaç duyduğunuzda RAM, CPU, depolama ve bant genişliği kaynaklarını artırabilirsiniz. Bu işlem genellikle kesinti yaşamadan yapılabilir. Ölçeklendirme işlemi hosting sağlayıcınızın kontrol paneli üzerinden kolayca gerçekleştirilir."
  },
  {
    question: "VPS sunucusuna nasıl erişilir?",
    answer: "VPS sunucusuna SSH (Linux) veya RDP (Windows) protokolleri ile erişilir. SSH erişimi için terminal veya SSH istemcisi kullanılır. RDP erişimi için Windows Remote Desktop kullanılır. Ayrıca web tabanlı kontrol paneli üzerinden de sunucu yönetimi yapılabilir."
  },
  {
    question: "VPS sunucusunda hız ve performans nasıl artırılır?",
    answer: "VPS performansını artırmak için gereksiz servisleri kapatın, güncel yazılımlar kullanın, veritabanı optimizasyonu yapın, CDN kullanın, önbellekleme teknikleri uygulayın ve düzenli bakım yapın. Ayrıca yeterli kaynaklara sahip bir VPS paketi seçmek de önemlidir."
  },
  {
    question: "VPS fiyatları neden değişiklik gösterir?",
    answer: "VPS fiyatları sunucu kaynakları (CPU, RAM, depolama), bant genişliği, işletim sistemi, yönetim hizmetleri, teknik destek seviyesi ve hosting sağlayıcısının altyapısına göre değişir. Daha yüksek kaynaklar ve ek hizmetler daha yüksek fiyatlar anlamına gelir."
  },
  {
    question: "VPS'lerde DDoS koruması gerekli midir?",
    answer: "Evet, DDoS koruması özellikle yüksek trafikli siteler ve kritik uygulamalar için gereklidir. DDoS saldırıları sunucunuzu erişilemez hale getirebilir ve veri kaybına neden olabilir. Modern VPS paketlerinde DDoS koruması genellikle dahil olarak sunulur."
  }
]

export default function SunucuPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { isOpen, service, closeForm, openForm } = useContactForm()

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Server className="w-4 h-4" />
              <span>VPS Sunucu Hizmetleri</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Yeni Nesil Donanım ile{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Üstün VPS Sunucular</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Gelişmiş altyapımız ve %99.9 uptime garantimiz ile projelerinize kesintisiz güç.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openForm("VPS Paketleri")}
              >
                Paketleri İncele
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                onClick={() => openForm("VPS Sunucu")}
              >
                Bize Ulaşın
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mobile-section bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Gelişmiş Virtualizor Altyapımız ile Tam Performanslı VPS Paketlerin Tadını Çıkarın
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Xeon Gold</h3>
                <p className="text-gray-600 text-sm">İşlemci</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Ücretsiz</h3>
                <p className="text-gray-600 text-sm">Kurulum hizmeti</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Gelişmiş</h3>
                <p className="text-gray-600 text-sm">Kontrol paneli</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Size Özel</h3>
                <p className="text-gray-600 text-sm">Paylaşımsız kaynaklar</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* VPS Packages Section */}
      <section className="mobile-section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              VPS Sunucuların avantajlı özelliklerini keşfedin!
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Web sitelerinizin sorunsuz ve kesintisiz çalışması için geliştirilen mükemmel özelliklere göz atın.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 mobile-grid-gap">
            {vpsPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                 <Card className="h-full border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl mobile-card">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-gray-900">{pkg.name}</CardTitle>
                    <CardDescription className="text-gray-600">{pkg.description}</CardDescription>
                  </CardHeader>
                   <CardContent className="space-y-3">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Storage className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{pkg.storage}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Cpu className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{pkg.cpu}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Database className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{pkg.ram}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Wifi className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{pkg.traffic}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Monitor className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{pkg.controlPanel}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Server className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{pkg.os}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="text-center mb-4">
                        <span className="text-3xl font-bold text-blue-600">{pkg.price}</span>
                        <span className="text-gray-600">/ay</span>
                      </div>
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => openForm(`VPS ${pkg.name}`)}
                      >
                        Paketi Seç
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="mobile-section bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      {advantage.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {advantage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mobile-section">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-lg text-gray-600">
                VPS paketlerimiz ile ilgili detaylı bilgiye mi ihtiyacınız var?
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                    <CardHeader 
                      className="cursor-pointer"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold text-gray-900">
                          {faq.question}
                        </CardTitle>
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-blue-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </CardHeader>
                    {openFaq === index && (
                      <CardContent className="pt-0">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">VPS Sunucunuzu Hemen Başlatın</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Projeleriniz için güvenilir, hızlı ve ölçeklenebilir VPS çözümlerimizi keşfedin.
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
              onClick={() => openForm("VPS Sunucu")}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              İletişime Geç
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      
      {/* Contact Form */}
      <ContactForm isOpen={isOpen} onClose={closeForm} service={service} />
    </div>
  )
} 