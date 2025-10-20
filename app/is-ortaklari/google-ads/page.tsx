import { Metadata } from 'next'
import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: 'Google Ads İş Ortağı',
  description: 'Google Ads ile NovaGraph iş birliği. Dijital reklamcılık, kampanya yönetimi, performans optimizasyonu ve profesyonel danışmanlık.',
  keywords: 'Google Ads, dijital reklamcılık, kampanya yönetimi, performans optimizasyonu, NovaGraph iş ortağı',
  openGraph: {
    title: 'Google Ads İş Ortağı - NovaGraph',
    description: 'Google Ads ile NovaGraph iş birliği. Dijital reklamcılık ve kampanya yönetimi.',
    url: 'https://novagraph.com.tr/is-ortaklari/google-ads',
    type: 'website',
  },
}

export default function GoogleAdsPage() {
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
              Google Ads
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Dijital reklamcılıkta dünya lideri platform
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
            Google Ads, dünya çapında milyonlarca işletmenin dijital reklam 
            kampanyalarını yönettiği en güçlü platformdur. Arama ağları, görüntülü 
            reklamlar, video reklamları ve alışveriş reklamları ile hedef kitlenize 
            ulaşmanızı sağlar. Akıllı otomasyon ve gelişmiş hedefleme özellikleriyle 
            reklam bütçenizi maksimum verimle kullanmanıza yardımcı olur.
          </p>
        </div>

        {/* Novagraph ile İş Birliği */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile İş Birliği</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Novagraph olarak Google Ads'in resmi iş ortağıyız. Müşterilerimize 
            Google Ads hesap kurulumu, kampanya yönetimi ve optimizasyon konularında 
            profesyonel danışmanlık hizmetleri sunuyoruz.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Kampanya Yönetimi</h3>
              <p className="text-blue-800">
                Arama, görüntülü ve video reklam kampanyalarının planlanması, 
                oluşturulması ve yönetimi
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Performans Optimizasyonu</h3>
              <p className="text-blue-800">
                Anahtar kelime optimizasyonu, teklif yönetimi ve dönüşüm oranı 
                iyileştirme
              </p>
            </div>
          </div>
        </div>

        {/* Temel Özellikler */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Temel Özellikler</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Arama Ağı Reklamları</h4>
                  <p className="text-gray-600 text-sm">Google arama sonuçlarında üst sıralarda yer alma</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Görüntülü Reklamlar</h4>
                  <p className="text-gray-600 text-sm">Web sitelerinde ve uygulamalarda görsel reklamlar</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Video Reklamları</h4>
                  <p className="text-gray-600 text-sm">YouTube ve video partner ağında reklam gösterimi</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Alışveriş Reklamları</h4>
                  <p className="text-gray-600 text-sm">Ürün kataloğu ile e-ticaret reklamları</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Akıllı Otomasyon</h4>
                  <p className="text-gray-600 text-sm">Yapay zeka destekli kampanya optimizasyonu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Gelişmiş Hedefleme</h4>
                  <p className="text-gray-600 text-sm">Demografik, coğrafi ve davranışsal hedefleme</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kullanım Alanları */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kullanım Alanları</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">E-ticaret</h4>
              <p className="text-gray-600 text-sm">
                Ürün satışı, kategori promosyonu ve marka bilinirliği artırma
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Hizmet Sektörü</h4>
              <p className="text-gray-600 text-sm">
                Müşteri kazanımı, lead generation ve hizmet tanıtımı
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Kurumsal</h4>
              <p className="text-gray-600 text-sm">
                Marka bilinirliği, kurumsal iletişim ve iş ortaklığı
              </p>
            </div>
          </div>
        </div>

        {/* Novagraph ile Entegrasyon */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile Entegrasyon</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Google Ads entegrasyonu sürecinde Novagraph olarak size kapsamlı 
            destek sağlıyoruz:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <span className="text-gray-700">Google Ads hesap kurulumu ve yapılandırması</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">2</span>
                </div>
                <span className="text-gray-700">Kampanya stratejisi ve planlaması</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">3</span>
                </div>
                <span className="text-gray-700">Anahtar kelime araştırması ve optimizasyonu</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">4</span>
                </div>
                <span className="text-gray-700">Reklam metni yazımı ve A/B testleri</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">5</span>
                </div>
                <span className="text-gray-700">Performans takibi ve raporlama</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">6</span>
                </div>
                <span className="text-gray-700">Sürekli optimizasyon ve danışmanlık</span>
              </div>
            </div>
          </div>
        </div>

        {/* SSS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Google Ads'de minimum bütçe ne kadar?
              </h4>
              <p className="text-gray-600">
                Günlük minimum bütçe 5 TL'dir. Ancak etkili sonuçlar için 
                aylık en az 500-1000 TL bütçe önerilir.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Kampanya sonuçları ne zaman görünmeye başlar?
              </h4>
              <p className="text-gray-600">
                İlk reklamlar 24-48 saat içinde görünmeye başlar. Optimizasyon 
                sonuçları 1-2 hafta içinde belirgin hale gelir.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Organik SEO ile birlikte kullanılabilir mi?
              </h4>
              <p className="text-gray-600">
                Evet, Google Ads ve organik SEO birbirini destekler. Reklamlar 
                organik sıralamayı etkilemez, birlikte kullanıldığında daha 
                güçlü sonuçlar alınır.
              </p>
            </div>
          </div>
        </div>

        {/* İletişim */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İletişim</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Google Ads kampanyaları ve dijital reklamcılık danışmanlığı hakkında 
            detaylı bilgi almak için bizimle iletişime geçin.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">Telefon</h4>
              <p className="text-blue-800">+90 545 664 2302</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">E-posta</h4>
              <p className="text-blue-800">info@novagraph.com.tr</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Google Ads ile Hedef Kitlenize Ulaşın
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Dijital reklamcılıkta uzman ekibimizle kampanyalarınızı optimize 
              edin ve ROI'nizi artırın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ücretsiz Danışmanlık
              </Link>
              <a
                href="https://ads.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Google Ads'i Ziyaret Et
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
