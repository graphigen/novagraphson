import { Metadata } from 'next'
import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: 'SimilarWeb İş Ortağı',
  description: 'SimilarWeb ile NovaGraph iş birliği. Dijital istihbarat, rakip analizi, pazar araştırması ve dijital strateji geliştirme.',
  keywords: 'SimilarWeb, dijital istihbarat, rakip analizi, pazar araştırması, dijital strateji, NovaGraph iş ortağı',
  openGraph: {
    title: 'SimilarWeb İş Ortağı - NovaGraph',
    description: 'SimilarWeb ile NovaGraph iş birliği. Dijital istihbarat ve rakip analizi.',
    url: 'https://novagraph.com.tr/is-ortaklari/similarweb',
    type: 'website',
  },
}

export default function SimilarwebPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4">
            <Link 
              href="/is-ortaklari" 
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              İş Ortakları
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Similarweb</span>
          </div>
          
          <div className="mt-8 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center">
              <div className="text-3xl font-bold text-blue-600">SW</div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Similarweb ile İş Birliği
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dijital dünyada rakiplerinizi analiz edin, pazar trendlerini keşfedin ve stratejik kararlar alın
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Marka Tanıtımı */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Similarweb Hakkında</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Similarweb, dünya çapında milyonlarca web sitesi ve mobil uygulamanın 
                  dijital performansını analiz eden lider dijital istihbarat platformudur.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  2009 yılında kurulan Similarweb, yapay zeka ve makine öğrenmesi 
                  teknolojileri kullanarak gerçek zamanlı veri toplar ve analiz eder.
                </p>
                <p className="text-lg text-gray-700">
                  Pazarlama uzmanları, iş geliştirme ekipleri ve yatırımcılar için 
                  pazar araştırması, rekabet analizi ve dijital strateji geliştirme 
                  konularında vazgeçilmez bir araçtır.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Neden Similarweb?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">190+ ülkede 100+ milyon site analizi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Gerçek zamanlı veri güncellemeleri</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">AI destekli trend analizi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Kapsamlı raporlama araçları</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Novagraph ile İş Birliği */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Novagraph ile İş Birliği</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  Novagraph olarak Similarweb'ın Türkiye'deki yetkili iş ortağıyız. 
                  Müşterilerimize dijital istihbarat araçlarını en etkili şekilde 
                  kullanmayı öğretiyor ve stratejik kararlar almalarını sağlıyoruz.
                </p>
                <p className="text-lg">
                  Similarweb uzmanlarımız, işletmenizin dijital varlığını analiz ederek 
                  rakiplerinizi takip etmenizi ve pazar fırsatlarını yakalamanızı sağlar.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">İş Birliği Avantajları</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Özel fiyatlandırma ve lisans yönetimi</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Veri analizi ve yorumlama desteği</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Eğitim ve danışmanlık hizmetleri</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>7/24 Türkçe destek</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Temel Özellikler */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Similarweb Temel Özellikleri</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trafik Analizi</h3>
                <p className="text-gray-600">
                  Web sitesi trafiği, ziyaretçi demografisi, kaynak dağılımı ve 
                  trend analizi detaylı raporları
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rekabet Analizi</h3>
                <p className="text-gray-600">
                  Rakip sitelerin performansı, trafik kaynakları, popüler sayfalar 
                  ve dijital stratejileri
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pazar İstihbaratı</h3>
                <p className="text-gray-600">
                  Sektör trendleri, yükselen oyuncular, pazar büyüklüğü ve 
                  gelecek tahminleri
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kullanım Alanları */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kullanım Alanları</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pazarlama ve SEO</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Anahtar kelime stratejisi geliştirme</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Rakip SEO analizi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">İçerik stratejisi planlama</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Performans takibi ve optimizasyon</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">İş Geliştirme</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pazar araştırması ve analizi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Rakip analizi ve benchmarking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Yatırım kararları ve due diligence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Stratejik planlama ve karar verme</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Novagraph ile Entegrasyon */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Novagraph ile Entegrasyon</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Platform Kurulumu</h3>
                <p className="text-gray-600 mb-4">
                  Similarweb hesap kurulumu, kullanıcı yapılandırması ve 
                  iş süreçlerinize özel ayarların yapılması
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hesap oluşturma ve yapılandırma</li>
                  <li>• Kullanıcı yetkilendirme</li>
                  <li>• API entegrasyonu</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Veri Analizi</h3>
                <p className="text-gray-600 mb-4">
                  Similarweb verilerinin yorumlanması, raporlanması ve 
                  iş kararlarına dönüştürülmesi
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Veri yorumlama ve analiz</li>
                  <li>• Özel raporlar oluşturma</li>
                  <li>• Trend analizi ve tahminleme</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eğitim & Destek</h3>
                <p className="text-gray-600 mb-4">
                  Platform kullanımı, veri analizi teknikleri ve 
                  sürekli danışmanlık hizmetleri
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Platform kullanım eğitimleri</li>
                  <li>• Veri analizi workshop'ları</li>
                  <li>• Sürekli danışmanlık</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sık Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Similarweb verileri ne kadar güncel?
                </h3>
                <p className="text-gray-600">
                  Similarweb verileri gerçek zamanlı olarak güncellenir. Trafik verileri 
                  günlük, aylık ve yıllık olarak sunulur.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Hangi ülkelerde hizmet veriyorsunuz?
                </h3>
                <p className="text-gray-600">
                  Similarweb 190+ ülkede hizmet verir. Türkiye dahil tüm büyük pazarlarda 
                  detaylı veri analizi yapabilirsiniz.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Mobil uygulama analizi mümkün mü?
                </h3>
                <p className="text-gray-600">
                  Evet, Similarweb hem web sitesi hem de mobil uygulama performansını 
                  analiz eder ve karşılaştırır.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Veri doğruluğu nasıl garanti ediliyor?
                </h3>
                <p className="text-gray-600">
                  Similarweb, çoklu veri kaynakları, AI algoritmaları ve sürekli 
                  doğrulama ile %95+ veri doğruluğu sağlar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Similarweb Hakkında Daha Fazla Bilgi</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Similarweb çözümleri hakkında detaylı bilgi almak, demo talep etmek 
              veya fiyat teklifi almak için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.similarweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Similarweb Resmi Site
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <Link
                href="/iletisim"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
              >
                Bizimle İletişime Geçin
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dijital İstihbarat ile Rekabette Öne Geçin
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Rakiplerinizi analiz edin, pazar trendlerini keşfedin ve 
              veri odaklı stratejik kararlar alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pazarlama-strateji-basvurusu"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
              >
                Ücretsiz Danışmanlık Alın
              </Link>
              <Link
                href="/is-ortaklari"
                className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors text-lg"
              >
                Diğer İş Ortaklarımız
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
