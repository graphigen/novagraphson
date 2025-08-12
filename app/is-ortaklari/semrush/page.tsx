"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"

export default function SemrushPage() {
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
              Semrush
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              SEO ve dijital pazarlama araştırmasında dünya lideri platform
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
            Semrush, SEO ve dijital pazarlama araştırmasında dünya çapında lider 
            konumda olan bir platformdur. Anahtar kelime araştırması, rakip analizi, 
            backlink araştırması ve site denetimi gibi güçlü özelliklerle dijital 
            pazarlamacıların vazgeçilmez aracıdır. 140'ı aşkın ülkede milyonlarca 
            kullanıcı tarafından tercih edilmektedir.
          </p>
        </div>

        {/* Novagraph ile İş Birliği */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile İş Birliği</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Novagraph olarak Semrush ile güçlü bir iş ortaklığı kurarak, 
            müşterilerimize kapsamlı SEO ve dijital pazarlama çözümleri sunuyoruz. 
            Bu ortaklık sayesinde:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Gelişmiş anahtar kelime araştırması ve analizi</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Detaylı rakip analizi ve pazar araştırması</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Kapsamlı site denetimi ve SEO optimizasyonu</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Backlink araştırması ve link building stratejileri</span>
            </li>
          </ul>
        </div>

        {/* Temel Özellikler */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Temel Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Anahtar Kelime Araştırması</h3>
              <p className="text-gray-700">
                Milyonlarca anahtar kelime verisi ile kapsamlı araştırma yapın, 
                hacim, zorluk ve rekabet analizini görün.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rakip Analizi</h3>
              <p className="text-gray-700">
                Rakiplerinizin SEO stratejilerini analiz edin, güçlü yanlarını 
                ve zayıf noktalarını keşfedin.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Site Denetimi</h3>
              <p className="text-gray-700">
                Web sitenizin SEO performansını detaylı olarak analiz edin, 
                iyileştirme önerilerini alın.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Backlink Araştırması</h3>
              <p className="text-gray-700">
                Backlink profilinizi analiz edin, yeni link fırsatlarını 
                keşfedin ve domain otoritesini artırın.
              </p>
            </div>
          </div>
        </div>

        {/* Kullanım Alanları */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kullanım Alanları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">SEO Danışmanlığı</h4>
              <p className="text-blue-800 text-sm">Web sitelerinin arama motoru optimizasyonu</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Dijital Pazarlama</h4>
              <p className="text-green-800 text-sm">Kapsamlı dijital pazarlama stratejileri</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">İçerik Pazarlaması</h4>
              <p className="text-purple-800 text-sm">Anahtar kelime odaklı içerik stratejileri</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Rakip Analizi</h4>
              <p className="text-orange-800 text-sm">Pazar araştırması ve rekabet analizi</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Link Building</h4>
              <p className="text-red-800 text-sm">Backlink stratejileri ve domain otoritesi</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Performans Takibi</h4>
              <p className="text-indigo-800 text-sm">SEO performansı ve raporlama</p>
            </div>
          </div>
        </div>

        {/* Novagraph ile Entegrasyon */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile Entegrasyon</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Novagraph'ın Semrush entegrasyonu ile müşterilerimiz:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Profesyonel SEO danışmanlığı hizmeti</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Kapsamlı site denetimi ve raporlama</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Anahtar kelime stratejisi geliştirme</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Rakip analizi ve pazar araştırması</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Backlink stratejisi ve link building</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Sürekli performans takibi ve optimizasyon</span>
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
                Semrush ile hangi tür analizler yapabilirim?
              </h3>
              <p className="text-gray-700">
                Anahtar kelime araştırması, rakip analizi, site denetimi, backlink araştırması, 
                trafik analizi ve daha birçok SEO analizi yapabilirsiniz.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Novagraph'ın Semrush entegrasyonu nasıl çalışır?
              </h3>
              <p className="text-gray-700">
                Novagraph uzmanları Semrush verilerini kullanarak kapsamlı SEO analizi yapar, 
                raporlar hazırlar ve optimizasyon önerileri sunar.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hangi sektörlerde Semrush kullanabilirim?
              </h3>
              <p className="text-gray-700">
                E-ticaret, kurumsal, blog, haber sitesi gibi tüm web sitelerinde 
                Semrush kullanarak SEO performansınızı artırabilirsiniz.
              </p>
            </div>
          </div>
        </div>

        {/* İletişim */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İletişim</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Semrush ile ilgili SEO danışmanlığı ve dijital pazarlama hizmetleri için 
            Novagraph uzmanlarıyla iletişime geçin. Size özel stratejiler geliştirip, 
            dijital varlığınızı güçlendirmenize yardımcı olalım.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Ücretsiz Danışmanlık</h3>
            <p className="text-blue-800 mb-4">
              Web sitenizin mevcut SEO durumunu analiz edelim ve size özel 
              iyileştirme önerileri sunalım.
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
              Semrush ile SEO Stratejinizi Güçlendirin
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Profesyonel SEO analizi ve dijital pazarlama stratejileri için 
              Novagraph ile iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ücretsiz Danışmanlık
              </Link>
              <a
                href="https://semrush.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Semrush'ı Ziyaret Et
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
