import Link from 'next/link'
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react'

export default function ZendeskPage() {
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
              <span className="text-sm text-gray-500">Zendesk</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
            <span className="text-2xl font-bold text-white">Z</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Zendesk</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Müşteri hizmetleri ve destek yönetimi alanında dünya lideri platform
          </p>
        </div>

        {/* Marka Tanıtımı */}
        <section className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Marka Tanıtımı</h2>
          <div className="prose prose-lg text-gray-700">
            <p>
              Zendesk, müşteri hizmetleri ve destek yönetimi için kapsamlı çözümler 
              sunan global bir teknoloji şirketidir. 2007 yılında kurulan şirket, 
              müşteri deneyimini iyileştirmeye odaklanır.
            </p>
            <p>
              Platform, ticket yönetimi, canlı chat, self-service portal, 
              knowledge base ve analitik araçları ile müşteri hizmetlerini 
              optimize eder. 150'den fazla ülkede 100,000'den fazla müşteriye hizmet verir.
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
                  <span>Merkezi müşteri hizmetleri yönetimi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Otomatik ticket yönlendirme</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Gerçek zamanlı müşteri desteği</span>
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
                  <span>Çok kanallı müşteri desteği</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Self-service portal entegrasyonu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Knowledge base yönetimi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Müşteri memnuniyet analizi</span>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ticket Yönetimi</h3>
              <p className="text-gray-600 text-sm">Gelişmiş ticket sistemi ve iş akışı yönetimi</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Canlı Chat</h3>
              <p className="text-gray-600 text-sm">Gerçek zamanlı müşteri iletişimi</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Knowledge Base</h3>
              <p className="text-gray-600 text-sm">Self-service portal ve dokümantasyon</p>
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
                Müşteri sipariş takibi, ürün desteği ve satış sonrası 
                hizmetler için kapsamlı destek sistemi.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">SaaS</h3>
              <p className="text-gray-700">
                Teknik destek, kullanıcı eğitimi ve ürün dokümantasyonu 
                için entegre çözümler.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Finans</h3>
              <p className="text-gray-700">
                Müşteri hesap desteği, güvenlik sorunları ve 
                finansal ürün danışmanlığı.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Sağlık</h3>
              <p className="text-gray-700">
                Hasta randevu sistemi, tıbbi bilgi desteği ve 
                sağlık hizmetleri koordinasyonu.
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
                <h3 className="font-semibold text-gray-900 mb-2">Müşteri Veri Senkronizasyonu</h3>
                <p className="text-gray-700">
                  Novagraph CRM'deki müşteri bilgileri Zendesk ile otomatik olarak senkronize edilir.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-blue-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Ticket Otomasyonu</h3>
                <p className="text-gray-700">
                  Müşteri etkileşimleri otomatik olarak ticket'lara dönüştürülür ve yönlendirilir.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-blue-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Performans Raporlama</h3>
                <p className="text-gray-700">
                  Müşteri hizmetleri performansı tek platform üzerinden izlenir ve analiz edilir.
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
                Zendesk entegrasyonu ne kadar sürer?
              </h3>
              <p className="text-gray-700">
                Temel entegrasyon 1-2 hafta içinde tamamlanır. 
                Özel özelleştirmeler için ek süre gerekebilir.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Hangi kanallar desteklenir?
              </h3>
              <p className="text-gray-700">
                E-posta, telefon, canlı chat, sosyal medya, WhatsApp ve 
                self-service portal desteklenir.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Teknik destek nasıl sağlanır?
              </h3>
              <p className="text-gray-700">
                24/7 teknik destek, canlı chat, e-posta ve telefon desteği sunulur. 
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Zendesk Hakkında</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Website:</strong>{' '}
                  <a href="https://www.zendesk.com" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-800 transition-colors">
                    www.zendesk.com
                    <ExternalLink className="w-4 h-4 inline ml-1" />
                  </a>
                </p>
                <p>
                  <strong>Merkez:</strong> San Francisco, California, ABD
                </p>
                <p>
                  <strong>Kuruluş:</strong> 2007
                </p>
                <p>
                  <strong>Çalışan Sayısı:</strong> 5,000+
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
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Zendesk Entegrasyonu ile Tanışın</h2>
          <p className="text-xl mb-8 opacity-90">
            Müşteri hizmetlerinizi optimize edin ve müşteri memnuniyetini artırın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim" 
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Ücretsiz Danışmanlık
            </Link>
            <Link href="/demo" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Demo İste
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
