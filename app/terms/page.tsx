"use client"

import { motion } from "framer-motion"
import { FileText, Shield, AlertTriangle, Link, Edit, CheckCircle, Globe } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  const { openForm } = useContactForm()

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
              <FileText className="w-4 h-4" />
              <span>Kullanım Koşulları</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Web Sitemizi Kullanırken{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Uyulması Gereken
              </span>{" "}
              Kurallar
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Bu web sitesini (novagraph.com.tr) ziyaret ettiğinizde aşağıdaki şartları kabul etmiş sayılırsınız. 
              Lütfen siteyi kullanmadan önce kullanım koşullarını dikkatle okuyunuz.
            </p>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
              onClick={() => openForm("Kullanım Sözleşmesi Hakkında")}
            >
              İletişime Geç
              <FileText className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* 1. Hizmet Tanımı */}
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
                <h2 className="text-2xl font-semibold text-gray-900">1. Hizmet Tanımı</h2>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">NovaGraph Hizmetleri</h3>
                    <p className="text-gray-700 leading-relaxed">
                      NovaGraph, kullanıcılarına e-ticaret çözümleri, web tasarım, dijital pazarlama ve diğer dijital 
                      hizmetlere dair içerik ve bilgi sunar. Web sitemiz yalnızca bilgilendirme amaçlıdır.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Fikri Mülkiyet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">2. Fikri Mülkiyet</h2>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">Telif Hakları</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Bu sitede yer alan tüm içerik (metin, logo, görseller vb.) NovaGraph'a aittir. 
                      İzinsiz çoğaltılamaz, kopyalanamaz veya ticari amaçla kullanılamaz.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Sorumluluğun Sınırlandırılması */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-gray-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">3. Sorumluluğun Sınırlandırılması</h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Yasal Sorumluluk</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Web sitesinde yer alan içerikler mümkün olduğunca güncel tutulmaya çalışılır. 
                      Ancak içeriklerin doğruluğu ve güncelliği konusunda NovaGraph herhangi bir garanti vermez. 
                      Kullanıcı, siteyi kendi sorumluluğu altında kullanır.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 4. Bağlantılar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Link className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">4. Bağlantılar</h2>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Link className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">Üçüncü Taraf Linkler</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. 
                      Bu sitelerin içeriklerinden NovaGraph sorumlu değildir.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 5. Değişiklik Hakkı */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Edit className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">5. Değişiklik Hakkı</h2>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Edit className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Güncelleme Hakları</h3>
                    <p className="text-gray-700 leading-relaxed">
                      NovaGraph, bu kullanım koşullarını ve gizlilik politikasını dilediği zaman değiştirme hakkını saklı tutar. 
                      Değişiklikler web sitesinde yayımlandığı andan itibaren geçerlidir.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-red-50 border border-red-200 rounded-xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-900 mb-2">Önemli Uyarı</h3>
                  <p className="text-red-800 leading-relaxed">
                    Bu web sitesini kullanarak, yukarıda belirtilen tüm koşulları kabul etmiş sayılırsınız. 
                    Eğer bu koşulları kabul etmiyorsanız, lütfen web sitesini kullanmayınız.
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
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">E-posta</p>
                    <p className="font-semibold text-gray-900">info@novagraph.com.tr</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
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

    </div>
  )
} 