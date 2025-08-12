"use client"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"

export default function SalesforcePage() {
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
            <span className="text-gray-900 font-medium">Salesforce</span>
          </div>
          
          <div className="mt-8 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center">
              <div className="text-3xl font-bold text-blue-600">SF</div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Salesforce ile İş Birliği
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dünya çapında lider CRM platformu ile müşteri ilişkilerinizi güçlendirin ve satış performansınızı artırın
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Marka Tanıtımı */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Salesforce Hakkında</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Salesforce, dünya çapında milyonlarca işletmenin müşteri ilişkilerini yönetmek için kullandığı 
                  en güvenilir ve kapsamlı CRM platformudur.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  1999 yılında kurulan Salesforce, bulut tabanlı CRM çözümleri ile iş dünyasında devrim yaratmış 
                  ve sürekli yenilikçi yaklaşımlarla sektörün öncüsü olmuştur.
                </p>
                <p className="text-lg text-gray-700">
                  Müşteri deneyimi, satış otomasyonu, pazarlama otomasyonu ve analitik alanlarında 
                  kapsamlı çözümler sunarak işletmelerin dijital dönüşümüne öncülük eder.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Neden Salesforce?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">150+ ülkede 150,000+ müşteri</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">%99.9+ uptime garantisi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">AI destekli Einstein teknolojisi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Güvenlik ve uyumluluk standartları</span>
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
                  Novagraph olarak Salesforce'ın Türkiye'deki güvenilir iş ortağıyız. 
                  Müşterilerimize Salesforce çözümlerini en etkili şekilde entegre etmek 
                  ve iş süreçlerini optimize etmek için kapsamlı hizmetler sunuyoruz.
                </p>
                <p className="text-lg">
                  Salesforce uzmanlarımız, işletmenizin ihtiyaçlarına özel çözümler geliştirerek 
                  CRM süreçlerinizi dönüştürür ve verimliliğinizi artırır.
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
                    <span>Teknik destek ve danışmanlık</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Eğitim ve sertifikasyon programları</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Salesforce Temel Özellikleri</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Müşteri Yönetimi</h3>
                <p className="text-gray-600">
                  360° müşteri görünümü, müşteri profilleri, etkileşim geçmişi ve 
                  kişiselleştirilmiş iletişim araçları
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Satış Otomasyonu</h3>
                <p className="text-gray-600">
                  Lead yönetimi, fırsat takibi, satış süreçleri, tahminleme ve 
                  performans analizi araçları
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analitik & Raporlama</h3>
                <p className="text-gray-600">
                  Gerçek zamanlı dashboard'lar, özelleştirilebilir raporlar, 
                  AI destekli analizler ve performans metrikleri
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Küçük ve Orta Ölçekli İşletmeler</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Müşteri veritabanı yönetimi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Satış süreçlerinin otomasyonu</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Müşteri hizmetleri yönetimi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pazarlama kampanyaları</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kurumsal İşletmeler</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Çok katmanlı satış organizasyonları</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Gelişmiş analitik ve AI</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Entegrasyon ve API yönetimi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Çoklu lokasyon desteği</span>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kurulum & Konfigürasyon</h3>
                <p className="text-gray-600 mb-4">
                  Salesforce kurulumu, kullanıcı yapılandırması ve iş süreçlerinize 
                  özel ayarların yapılması
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Kullanıcı rolleri ve izinleri</li>
                  <li>• Özel alanlar ve nesneler</li>
                  <li>• Workflow ve approval süreçleri</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Veri Migrasyonu</h3>
                <p className="text-gray-600 mb-4">
                  Mevcut müşteri verilerinizin Salesforce'a güvenli ve düzenli 
                  şekilde aktarılması
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Veri temizleme ve doğrulama</li>
                  <li>• Mapping ve dönüştürme</li>
                  <li>• Test ve onay süreçleri</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eğitim & Destek</h3>
                <p className="text-gray-600 mb-4">
                  Kullanıcı eğitimleri, dokümantasyon ve sürekli teknik destek 
                  hizmetleri
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Kullanıcı eğitim programları</li>
                  <li>• Video tutorial'lar</li>
                  <li>• 7/24 destek hattı</li>
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
                  Salesforce'ı ne kadar sürede kullanmaya başlayabilirim?
                </h3>
                <p className="text-gray-600">
                  Temel kurulum 1-2 hafta içinde tamamlanır. Karmaşık entegrasyonlar 
                  ve özelleştirmeler için 4-6 hafta gerekebilir.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Mevcut sistemlerimle entegre edebilir miyim?
                </h3>
                <p className="text-gray-600">
                  Evet, Salesforce 300+ sistem ile entegrasyon sağlar. Novagraph olarak 
                  özel entegrasyon çözümleri de geliştiriyoruz.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Mobil erişim mümkün mü?
                </h3>
                <p className="text-gray-600">
                  Salesforce mobil uygulamaları ile iOS ve Android cihazlardan 
                  tam erişim sağlayabilirsiniz.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Güvenlik ve veri koruma nasıl?
                </h3>
                <p className="text-gray-600">
                  Salesforce, SOC 2 Type II, ISO 27001, GDPR gibi en yüksek güvenlik 
                  standartlarını karşılar ve verilerinizi korur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Salesforce Hakkında Daha Fazla Bilgi</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Salesforce çözümleri hakkında detaylı bilgi almak, demo talep etmek 
              veya fiyat teklifi almak için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.salesforce.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Salesforce Resmi Site
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
              Salesforce ile Dijital Dönüşümünüzü Başlatın
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Müşteri ilişkilerinizi güçlendirin, satış performansınızı artırın ve 
              iş süreçlerinizi optimize edin.
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
