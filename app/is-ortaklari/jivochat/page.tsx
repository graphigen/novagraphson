"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"

export default function JivoChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Link
              href="/is-ortaklari"
              className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              İş Ortaklarına Dön
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              JivoChat
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Canlı sohbet ve müşteri destek platformu
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Marka Tanıtımı */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Marka Tanıtımı</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            JivoChat, dünya çapında milyonlarca işletme tarafından kullanılan 
            profesyonel canlı sohbet platformudur. Web siteleri, mobil uygulamalar 
            ve sosyal medya platformlarında müşterilerle gerçek zamanlı iletişim 
            kurmanızı sağlar. Gelişmiş özellikleri, kolay entegrasyonu ve 
            uygun fiyatları ile küçük işletmelerden büyük kurumlara kadar 
            her ölçekte işletmeye hizmet verir.
          </p>
        </div>

        {/* Novagraph ile İş Birliği */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile İş Birliği</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Novagraph olarak JivoChat ile güçlü bir iş ortaklığı kurarak,
            müşterilerimize profesyonel müşteri hizmetleri çözümleri sunuyoruz. Bu ortaklık sayesinde:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Canlı sohbet sistemi kurulumu ve entegrasyonu</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Müşteri hizmetleri süreçleri optimizasyonu</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Çok dilli destek ve yerelleştirme</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Sürekli teknik destek ve eğitim</span>
            </li>
          </ul>
        </div>

        {/* Temel Özellikler */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Temel Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Çoklu Platform Desteği</h3>
              <p className="text-gray-700">
                Web sitesi, mobil uygulama, Facebook, WhatsApp ve
                diğer platformlarda entegrasyon.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gelişmiş Bot Teknolojisi</h3>
              <p className="text-gray-700">
                AI destekli chatbot'lar ile otomatik müşteri
                hizmetleri ve yönlendirme.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analitik ve Raporlama</h3>
              <p className="text-gray-700">
                Detaylı performans metrikleri ve müşteri
                memnuniyet analizleri.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Çok Dilli Destek</h3>
              <p className="text-gray-700">
                190+ dil desteği ile global müşteri
                hizmetleri sunma imkanı.
              </p>
            </div>
          </div>
        </div>

        {/* Kullanım Alanları */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kullanım Alanları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">E-ticaret Siteleri</h4>
              <p className="text-blue-800 text-sm">Müşteri desteği ve satış danışmanlığı</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Kurumsal Web Siteleri</h4>
              <p className="text-green-800 text-sm">İletişim ve bilgi alma</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Hizmet Sektörü</h4>
              <p className="text-purple-800 text-sm">Randevu ve bilgi talepleri</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Eğitim Kurumları</h4>
              <p className="text-orange-800 text-sm">Öğrenci ve veli desteği</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Sağlık Sektörü</h4>
              <p className="text-red-800 text-sm">Hasta bilgilendirme ve randevu</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Finans Sektörü</h4>
              <p className="text-indigo-800 text-sm">Müşteri hizmetleri ve destek</p>
            </div>
          </div>
        </div>

        {/* Novagraph ile Entegrasyon */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile Entegrasyon</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Novagraph'ın JivoChat entegrasyonu ile müşterilerimiz:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Profesyonel sohbet sistemi kurulumu</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Çoklu platform entegrasyonu</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Chatbot yapılandırması</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Müşteri hizmetleri eğitimi</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Performans analizi ve raporlama</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Sürekli teknik destek</span>
              </div>
            </div>
          </div>
        </div>

        {/* SSS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                JivoChat entegrasyonu ne kadar sürer?
              </h3>
              <p className="text-gray-700">
                Temel entegrasyon 1-2 saat içinde tamamlanır. Özelleştirme
                ve eğitim süreçleri ek zaman gerektirebilir.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hangi platformlarda kullanılabilir?
              </h3>
              <p className="text-gray-700">
                Web siteleri, mobil uygulamalar, Facebook, WhatsApp, 
                Instagram ve diğer sosyal medya platformlarında.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mobil uygulama desteği var mı?
              </h3>
              <p className="text-gray-700">
                Evet, iOS ve Android için mobil uygulamalar mevcuttur.
                Ayrıca web tabanlı yönetim paneli de bulunur.
              </p>
            </div>
          </div>
        </div>

        {/* İletişim */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İletişim</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            JivoChat ile ilgili canlı sohbet sistemi kurulumu ve müşteri hizmetleri 
            danışmanlığı için Novagraph uzmanlarıyla iletişime geçin. Size özel 
            müşteri iletişim çözümleri geliştirip, müşteri memnuniyetinizi 
            artırmanıza yardımcı olalım.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Ücretsiz Danışmanlık</h3>
            <p className="text-blue-800 mb-4">
              Müşteri hizmetlerinizi değerlendirelim ve size en uygun
              JivoChat çözümünü önerelim.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Hemen Başlayın
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              JivoChat ile Müşteri Hizmetlerinizi Güçlendirin
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Profesyonel canlı sohbet sistemi kurulumu ve müşteri hizmetleri 
              danışmanlığı için Novagraph ile iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ücretsiz Danışmanlık
              </Link>
              <a
                href="https://jivochat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                JivoChat'i Ziyaret Et
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
