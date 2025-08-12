import Link from 'next/link'
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react'

export default function UnicaPage() {
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
              <span className="text-sm text-gray-500">Unica</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
            <span className="text-2xl font-bold text-white">U</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Unica</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Müşteri deneyimi ve pazarlama otomasyonu alanında lider platform
          </p>
        </div>

        {/* Marka Tanıtımı */}
        <section className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Marka Tanıtımı</h2>
          <div className="prose prose-lg text-gray-700">
            <p>
              Unica, IBM'in müşteri deneyimi ve pazarlama otomasyonu platformudur. 
              Yapay zeka destekli teknolojileri ile kişiselleştirilmiş müşteri deneyimleri 
              oluşturmaya odaklanır.
            </p>
            <p>
              Platform, müşteri davranışlarını analiz ederek, doğru zamanda doğru 
              kişiye doğru mesajı ulaştırmayı hedefler. Bu sayede markalar, 
              müşteri sadakatini artırabilir ve satış performanslarını iyileştirebilir.
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
                  <span>Müşteri verilerinin merkezi yönetimi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Otomatik kampanya yönetimi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Gerçek zamanlı müşteri etkileşimi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Performans analizi ve raporlama</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ortak Çözümler</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Kişiselleştirilmiş pazarlama kampanyaları</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Müşteri segmentasyonu ve hedefleme</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Çok kanallı iletişim stratejileri</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Müşteri yaşam döngüsü yönetimi</span>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Yapay Zeka</h3>
              <p className="text-gray-600 text-sm">Gelişmiş AI algoritmaları ile müşteri davranış analizi</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Otomasyon</h3>
              <p className="text-gray-600 text-sm">Akıllı iş akışları ve kampanya otomasyonu</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Analitik</h3>
              <p className="text-gray-600 text-sm">Detaylı performans metrikleri ve raporlama</p>
            </div>
          </div>
        </section>

        {/* Kullanım Alanları */}
        <section className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kullanım Alanları</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">E-ticaret</h3>
              <p className="text-gray-700">
                Kişiselleştirilmiş ürün önerileri, hedefli kampanyalar ve 
                müşteri sadakat programları ile satış artışı.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Finans</h3>
              <p className="text-gray-700">
                Müşteri risk analizi, kişiselleştirilmiş finansal ürünler 
                ve otomatik müşteri hizmetleri.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Sağlık</h3>
              <p className="text-gray-700">
                Hasta takibi, kişiselleştirilmiş tedavi planları ve 
                sağlık kampanyaları yönetimi.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Eğitim</h3>
              <p className="text-gray-700">
                Öğrenci performans analizi, kişiselleştirilmiş öğrenme 
                yolları ve eğitim kampanyaları.
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
                <h3 className="font-semibold text-gray-900 mb-2">Veri Senkronizasyonu</h3>
                <p className="text-gray-700">
                  Müşteri verileri gerçek zamanlı olarak Unica platformu ile senkronize edilir.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-blue-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Kampanya Yönetimi</h3>
                <p className="text-gray-700">
                  Novagraph üzerinden oluşturulan kampanyalar otomatik olarak Unica'ya aktarılır.
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
                  Kampanya performansları tek platform üzerinden izlenir ve raporlanır.
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
                Unica ile entegrasyon ne kadar sürer?
              </h3>
              <p className="text-gray-700">
                Standart entegrasyon süreci 2-4 hafta içinde tamamlanır. 
                Karmaşık özelleştirmeler için ek süre gerekebilir.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Hangi veri formatları desteklenir?
              </h3>
              <p className="text-gray-700">
                JSON, XML, CSV ve API formatları desteklenir. 
                Mevcut veri yapınıza uygun entegrasyon sağlanır.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Teknik destek nasıl sağlanır?
              </h3>
              <p className="text-gray-700">
                7/24 teknik destek, canlı chat, e-posta ve telefon desteği sunulur. 
                Ayrıca detaylı dokümantasyon ve video eğitimler mevcuttur.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Unica Hakkında</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Website:</strong>{' '}
                  <a href="https://www.ibm.com/unica" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-800 transition-colors">
                    www.ibm.com/unica
                    <ExternalLink className="w-4 h-4 inline ml-1" />
                  </a>
                </p>
                <p>
                  <strong>Merkez:</strong> Armonk, New York, ABD
                </p>
                <p>
                  <strong>Kuruluş:</strong> 1992
                </p>
                <p>
                  <strong>Çalışan Sayısı:</strong> 10,000+
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
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Unica Entegrasyonu ile Tanışın</h2>
          <p className="text-xl mb-8 opacity-90">
            Müşteri deneyiminizi kişiselleştirin ve pazarlama performansınızı artırın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Ücretsiz Danışmanlık
            </Link>
            <Link href="/demo" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Demo İste
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
