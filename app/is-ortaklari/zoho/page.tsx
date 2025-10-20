import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Zoho İş Ortağı',
  description: 'Zoho ile NovaGraph iş birliği. CRM, e-posta, ofis uygulamaları, proje yönetimi ve muhasebe çözümleri.',
  keywords: 'Zoho, CRM, iş yazılımları, proje yönetimi, muhasebe, ofis uygulamaları, NovaGraph iş ortağı',
  openGraph: {
    title: 'Zoho İş Ortağı - NovaGraph',
    description: 'Zoho ile NovaGraph iş birliği. CRM ve iş yazılımları çözümleri.',
    url: 'https://novagraph.com.tr/is-ortaklari/zoho',
    type: 'website',
  },
}

export default function ZohoPage() {
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
              <span className="text-sm text-gray-500">Zoho</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
            <span className="text-2xl font-bold text-white">Z</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Zoho</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kapsamlı iş yazılımları ve CRM çözümleri sunan global teknoloji şirketi
          </p>
        </div>

        {/* Marka Tanıtımı */}
        <section className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Marka Tanıtımı</h2>
          <div className="prose prose-lg text-gray-700">
            <p>
              Zoho, 1996 yılında Hindistan'da kurulan ve iş yazılımları alanında 
              dünya çapında tanınan bir teknoloji şirketidir. 50'den fazla ülkede 
              hizmet veren şirket, 80 milyondan fazla kullanıcıya sahiptir.
            </p>
            <p>
              Platform, CRM, e-posta, ofis uygulamaları, proje yönetimi, 
              muhasebe ve daha birçok iş yazılımını tek ekosistem altında birleştirir. 
              KOBİ'lerden büyük kurumlara kadar tüm işletmelere uygun çözümler sunar.
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
                  <span>Merkezi iş süreçleri yönetimi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Otomatik veri senkronizasyonu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Entegre raporlama ve analitik</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Çoklu platform desteği</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ortak Çözümler</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>CRM ve pazarlama otomasyonu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Proje ve görev yönetimi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Muhasebe ve finansal yönetim</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>İnsan kaynakları ve bordro</span>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">CRM Sistemi</h3>
              <p className="text-gray-600 text-sm">Müşteri ilişkileri ve satış yönetimi</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ofis Uygulamaları</h3>
              <p className="text-gray-600 text-sm">Word, Excel ve PowerPoint alternatifleri</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Otomasyon</h3>
              <p className="text-gray-600 text-sm">İş akışları ve süreç otomasyonu</p>
            </div>
          </div>
        </section>

        {/* Kullanım Alanları */}
        <section className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kullanım Alanları</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">KOBİ'ler</h3>
              <p className="text-gray-700">
                Küçük ve orta ölçekli işletmeler için uygun maliyetli, 
                kapsamlı iş yazılımları ve çözümleri.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Kurumsal</h3>
              <p className="text-gray-700">
                Büyük şirketler için ölçeklenebilir, güvenli ve 
                entegre iş süreçleri yönetimi.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Uzaktan Çalışma</h3>
              <p className="text-gray-700">
                Bulut tabanlı çözümler ile her yerden erişilebilir 
                iş yazılımları ve işbirliği araçları.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">E-ticaret</h3>
              <p className="text-gray-700">
                Online satış, stok yönetimi ve müşteri hizmetleri 
                için entegre çözümler.
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
                <h3 className="font-semibold text-gray-900 mb-2">Veri Entegrasyonu</h3>
                <p className="text-gray-700">
                  Novagraph ve Zoho arasında müşteri, satış ve iş süreçleri 
                  verileri otomatik olarak senkronize edilir.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-blue-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">İş Akışı Otomasyonu</h3>
                <p className="text-gray-700">
                  Müşteri etkileşimleri, satış süreçleri ve proje yönetimi 
                  otomatik olarak koordine edilir.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-blue-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Raporlama ve Analitik</h3>
                <p className="text-gray-700">
                  Tüm iş süreçleri tek platform üzerinden izlenir, 
                  analiz edilir ve raporlanır.
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
                Zoho entegrasyonu ne kadar sürer?
              </h3>
              <p className="text-gray-700">
                Temel entegrasyon 2-3 hafta içinde tamamlanır. 
                Karmaşık özelleştirmeler için ek süre gerekebilir.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Hangi Zoho uygulamaları entegre edilir?
              </h3>
              <p className="text-gray-700">
                CRM, Books, Projects, Mail, WorkDrive, Creator ve 
                diğer tüm Zoho uygulamaları entegre edilebilir.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Teknik destek nasıl sağlanır?
              </h3>
              <p className="text-gray-700">
                7/24 teknik destek, canlı chat, e-posta ve telefon desteği sunulur. 
                Detaylı dokümantasyon ve video eğitimler mevcuttur.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Zoho Hakkında</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Website:</strong>{' '}
                  <a href="https://www.zoho.com" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-800 transition-colors">
                    www.zoho.com
                    <ExternalLink className="w-4 h-4 inline ml-1" />
                  </a>
                </p>
                <p>
                  <strong>Merkez:</strong> Chennai, Tamil Nadu, Hindistan
                </p>
                <p>
                  <strong>Kuruluş:</strong> 1996
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
                  <strong>Telefon:</strong> +90 545 664 2302
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
          <h2 className="text-3xl font-bold mb-4">Zoho Entegrasyonu ile Tanışın</h2>
          <p className="text-xl mb-8 opacity-90">
            İş süreçlerinizi optimize edin ve verimliliğinizi artırın
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
