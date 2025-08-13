import { Metadata } from 'next'
import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: 'Ahrefs İş Ortağı',
  description: 'Ahrefs ile NovaGraph iş birliği. SEO analiz aracı, backlink analizi, anahtar kelime araştırması ve site denetimi hizmetleri.',
  keywords: 'Ahrefs, SEO analiz aracı, backlink analizi, anahtar kelime araştırması, site denetimi, NovaGraph iş ortağı',
  openGraph: {
    title: 'Ahrefs İş Ortağı - NovaGraph',
    description: 'Ahrefs ile NovaGraph iş birliği. SEO analiz aracı ve site denetimi hizmetleri.',
    url: 'https://novagraph.com.tr/is-ortaklari/ahrefs',
    type: 'website',
  },
}

export default function AhrefsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/is-ortaklari" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              İş Ortakları
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Ahrefs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
            <span className="text-2xl font-bold text-white">A</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ahrefs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SEO alanında dünya çapında lider analiz aracı
          </p>
        </div>

        {/* Marka Tanıtımı */}
        <section className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Marka Tanıtımı</h2>
          <div className="prose prose-lg text-gray-700">
            <p>
              Ahrefs, 2010 yılında kurulan ve SEO alanında dünya çapında lider konumda olan
              bir analiz aracıdır. 200'den fazla ülkede 500,000'den fazla kullanıcıya hizmet veren
              platform, backlink analizi, anahtar kelime araştırması ve site denetimi konularında
              uzmanlaşmıştır.
            </p>
            <p>
              Platform, dijital pazarlamacılar, SEO uzmanları ve ajanslar için vazgeçilmez
              araçlar sunar. Rakip analizi, içerik stratejisi ve teknik SEO optimizasyonu
              konularında detaylı veriler ve insights sağlar.
            </p>
          </div>
        </section>

        {/* Novagraph ile İş Birliği */}
        <section className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Novagraph ile İş Birliği</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Entegrasyon Avantajları</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>SEO strateji danışmanlığı</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Rakip analizi ve benchmarking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Anahtar kelime araştırması</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Backlink stratejisi geliştirme</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ortak Çözümler</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>SEO performans raporları</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>İçerik optimizasyonu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Teknik SEO denetimi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Eğitim ve workshop'lar</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Temel Özellikler */}
        <section className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Temel Özellikler</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Backlink Analizi</h3>
              <p className="text-gray-600 text-sm">Detaylı backlink profili ve analizi</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Anahtar Kelime Araştırması</h3>
              <p className="text-gray-600 text-sm">Kapsamlı anahtar kelime analizi</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Site Denetimi</h3>
              <p className="text-gray-600 text-sm">Teknik SEO ve site sağlığı kontrolü</p>
            </div>
          </div>
        </section>

        {/* Kullanım Alanları */}
        <section className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kullanım Alanları</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">SEO Ajansları</h3>
              <p className="text-gray-700">
                Müşteri projeleri için kapsamlı SEO analizi, rakip araştırması
                ve strateji geliştirme.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Dijital Pazarlama</h3>
              <p className="text-gray-700">
                İçerik stratejisi, anahtar kelime planlaması ve
                performans takibi için detaylı veriler.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">E-ticaret</h3>
              <p className="text-gray-700">
                Ürün sayfaları optimizasyonu, rakip analizi ve
                satış artırıcı SEO stratejileri.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Kurumsal</h3>
              <p className="text-gray-700">
                Büyük web siteleri için teknik SEO denetimi,
                performans analizi ve iyileştirme önerileri.
              </p>
            </div>
          </div>
        </section>

        {/* Novagraph ile Entegrasyon */}
        <section className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Novagraph ile Entegrasyon</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-blue-600 font-semibold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">SEO Strateji Geliştirme</h3>
                <p className="text-gray-700">
                  Ahrefs verileri kullanılarak kapsamlı SEO stratejisi geliştirilir
                  ve uygulama planı hazırlanır.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-blue-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Rakip Analizi</h3>
                <p className="text-gray-700">
                  Rakip sitelerin SEO performansı analiz edilir ve
                  fırsatlar tespit edilir.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-blue-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Performans Takibi</h3>
                <p className="text-gray-700">
                  SEO çalışmalarının sonuçları düzenli olarak takip edilir
                  ve raporlanır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Ahrefs entegrasyonu ne kadar sürer?
              </h3>
              <p className="text-gray-700">
                Temel entegrasyon 1-2 hafta içinde tamamlanır.
                Özel özelleştirmeler için ek süre gerekebilir.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Hangi veriler analiz edilir?
              </h3>
              <p className="text-gray-700">
                Backlink profili, anahtar kelime performansı, site sağlığı,
                rakip analizi ve teknik SEO metrikleri.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Teknik destek nasıl sağlanır?
              </h3>
              <p className="text-gray-700">
                7/24 teknik destek, canlı chat, e-posta ve telefon desteği sunulur.
                Detaylı dokümantasyon mevcuttur.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Entegrasyon maliyeti nedir?
              </h3>
              <p className="text-gray-700">
                Entegrasyon maliyeti proje kapsamına göre değişir.
                Detaylı fiyat teklifi için bizimle iletişime geçin.
              </p>
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ahrefs Hakkında</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Website:</strong>{' '}
                  <a href="https://www.ahrefs.com" target="_blank" rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 transition-colors">
                    www.ahrefs.com
                    <ExternalLink className="w-4 h-4 inline ml-1" />
                  </a>
                </p>
                <p>
                  <strong>Merkez:</strong> Singapur
                </p>
                <p>
                  <strong>Kuruluş:</strong> 2010
                </p>
                <p>
                  <strong>Kullanıcı Sayısı:</strong> 500,000+
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Novagraph İletişim</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>E-posta:</strong>{' '}
                  <a href="mailto:info@novagraph.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    info@novagraph.com
                  </a>
                </p>
                <p>
                  <strong>Telefon:</strong> +90 (212) XXX XX XX
                </p>
                <p>
                  <strong>Adres:</strong> İstanbul, Türkiye
                </p>
                <p>
                  <strong>Çalışma Saatleri:</strong> Pazartesi - Cuma, 09:00 - 18:00
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ahrefs ile SEO Stratejinizi Güçlendirin</h2>
          <p className="text-xl mb-8 opacity-90">
            Profesyonel SEO analizi ve strateji danışmanlığı için Novagraph ile iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim"
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Ücretsiz Danışmanlık
            </Link>
            <Link href="/demo"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Demo İste
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
