import { Metadata } from 'next'
import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: 'PayPal İş Ortağı',
  description: 'PayPal ile NovaGraph iş birliği. Küresel ödeme sistemi entegrasyonu, çok dilli destek ve güvenlik danışmanlığı.',
  keywords: 'PayPal, küresel ödeme, online ödeme, e-ticaret entegrasyonu, güvenlik, NovaGraph iş ortağı',
  openGraph: {
    title: 'PayPal İş Ortağı - NovaGraph',
    description: 'PayPal ile NovaGraph iş birliği. Küresel ödeme sistemi entegrasyonu ve güvenlik.',
    url: 'https://novagraph.com.tr/is-ortaklari/paypal',
    type: 'website',
  },
}

export default function PayPalPage() {
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
              PayPal
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Küresel online ödeme ve para transferi
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
            PayPal, dünya çapında 200+ ülkede 400 milyondan fazla aktif hesap ile 
            küresel ödeme lideridir. 1998 yılından bu yana güvenli, hızlı ve 
            kolay online ödeme çözümleri sunmaktadır. E-ticaret siteleri, 
            mobil uygulamalar ve sosyal medya platformlarında güvenli ödeme 
            altyapısı sağlar. Gelişmiş güvenlik teknolojileri ve kullanıcı 
            dostu arayüzü ile milyonlarca işletme ve bireysel kullanıcıya hizmet verir.
          </p>
        </div>

        {/* Novagraph ile İş Birliği */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile İş Birliği</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Novagraph olarak PayPal ile güçlü bir iş ortaklığı kurarak,
            müşterilerimize küresel ödeme çözümleri sunuyoruz. Bu ortaklık sayesinde:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Küresel ödeme sistemi entegrasyonu</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Çok dilli ve çok para birimi desteği</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Güvenlik ve uyumluluk danışmanlığı</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Sürekli teknik destek ve optimizasyon</span>
            </li>
          </ul>
        </div>

        {/* Temel Özellikler */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Temel Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Küresel Erişim</h3>
              <p className="text-gray-700">
                200+ ülkede 100+ para birimi ile
                uluslararası ödeme işlemleri.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gelişmiş Güvenlik</h3>
              <p className="text-gray-700">
                SSL şifreleme, 3D Secure ve gelişmiş
                dolandırıcılık koruması.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kolay Entegrasyon</h3>
              <p className="text-gray-700">
                REST API, SDK'lar ve hazır eklentiler
                ile hızlı sistem entegrasyonu.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobil Öncelikli</h3>
              <p className="text-gray-700">
                Mobil uygulamalar ve responsive tasarım
                ile her cihazda kullanım.
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
              <p className="text-blue-800 text-sm">Online mağaza ödeme sistemleri</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Dijital Hizmetler</h4>
              <p className="text-green-800 text-sm">Abonelik ve tek seferlik ödemeler</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Freelancer Platformları</h4>
              <p className="text-purple-800 text-sm">Hizmet ödemeleri ve komisyon</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Eğitim Platformları</h4>
              <p className="text-orange-800 text-sm">Kurs ve eğitim materyali satışı</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Sosyal Medya</h4>
              <p className="text-red-800 text-sm">İçerik üreticisi ödemeleri</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Crowdfunding</h4>
              <p className="text-indigo-800 text-sm">Bağış ve proje finansmanı</p>
            </div>
          </div>
        </div>

        {/* Novagraph ile Entegrasyon */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile Entegrasyon</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Novagraph'ın PayPal entegrasyonu ile müşterilerimiz:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Küresel ödeme sistemi kurulumu</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Çok dilli ve çok para birimi desteği</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Güvenlik ve uyumluluk danışmanlığı</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">API entegrasyonu ve geliştirme</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Test ve canlı ortam kurulumu</span>
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
                PayPal entegrasyonu ne kadar sürer?
              </h3>
              <p className="text-gray-700">
                Temel entegrasyon 1-2 gün içinde tamamlanır. Özelleştirme
                ve test süreçleri ek zaman gerektirebilir.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hangi para birimleri desteklenir?
              </h3>
              <p className="text-gray-700">
                100+ para birimi desteklenir. USD, EUR, GBP, TRY ve
                diğer ana para birimleri dahildir.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Güvenlik önlemleri nelerdir?
              </h3>
              <p className="text-gray-700">
                SSL şifreleme, 3D Secure, gelişmiş dolandırıcılık koruması
                ve PCI DSS uyumluluğu mevcuttur.
              </p>
            </div>
          </div>
        </div>

        {/* İletişim */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İletişim</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            PayPal ile ilgili küresel ödeme sistemi entegrasyonu ve e-ticaret 
            danışmanlığı için Novagraph uzmanlarıyla iletişime geçin. Size özel 
            uluslararası ödeme çözümleri geliştirip, global pazarlara açılmanıza 
            yardımcı olalım.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Ücretsiz Danışmanlık</h3>
            <p className="text-blue-800 mb-4">
              Ödeme sisteminizi değerlendirelim ve size en uygun
              PayPal çözümünü önerelim.
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
              PayPal ile Küresel Pazarlara Açılın
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Profesyonel küresel ödeme sistemi entegrasyonu ve e-ticaret 
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
                href="https://paypal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                PayPal'ı Ziyaret Et
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
