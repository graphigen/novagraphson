import { Metadata } from 'next'
import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: 'Stripe İş Ortağı',
  description: 'Stripe ile NovaGraph iş birliği. Dijital ödeme altyapısı, global ödeme çözümleri ve güvenlik danışmanlığı.',
  keywords: 'Stripe, dijital ödeme, global ödeme, fintech platformu, güvenlik, NovaGraph iş ortağı',
  openGraph: {
    title: 'Stripe İş Ortağı - NovaGraph',
    description: 'Stripe ile NovaGraph iş birliği. Dijital ödeme altyapısı ve global ödeme çözümleri.',
    url: 'https://novagraph.com.tr/is-ortaklari/stripe',
    type: 'website',
  },
}

export default function StripePage() {
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
            <span className="text-gray-900 font-medium">Stripe</span>
          </div>
          
          <div className="mt-8 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center">
              <div className="text-3xl font-bold text-blue-600">S</div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Stripe ile İş Birliği
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dünya çapında güvenilir ödeme altyapısı ile işletmenizi büyütün ve global pazarlara açılın
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Marka Tanıtımı */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stripe Hakkında</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Stripe, dünya çapında milyonlarca işletmenin dijital ödemeleri 
                  güvenle almasını sağlayan lider fintech platformudur.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  2010 yılında kurulan Stripe, geliştiriciler için tasarlanmış 
                  ödeme altyapısı ile e-ticaret, SaaS ve mobil uygulamalarda 
                  ödeme süreçlerini basitleştirir.
                </p>
                <p className="text-lg text-gray-700">
                  135+ ülkede 135+ para birimi desteği, güçlü güvenlik önlemleri 
                  ve gelişmiş API'lar ile işletmelerin global pazarlara 
                  açılmasını kolaylaştırır.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Neden Stripe?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">135+ ülkede 135+ para birimi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">%99.9+ uptime garantisi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">PCI DSS Level 1 uyumluluğu</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Gelişmiş güvenlik ve fraud koruması</span>
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
                  Novagraph olarak Stripe'ın Türkiye'deki güvenilir iş ortağıyız. 
                  Müşterilerimize Stripe ödeme çözümlerini en etkili şekilde entegre etmek 
                  ve ödeme süreçlerini optimize etmek için kapsamlı hizmetler sunuyoruz.
                </p>
                <p className="text-lg">
                  Stripe uzmanlarımız, işletmenizin ihtiyaçlarına özel ödeme çözümleri 
                  geliştirerek müşteri deneyimini iyileştirir ve satış dönüşüm oranlarını artırır.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">İş Birliği Avantajları</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Özel fiyatlandırma ve komisyon oranları</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Teknik entegrasyon desteği</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Güvenlik ve uyumluluk danışmanlığı</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Stripe Temel Özellikleri</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Ödeme İşleme</h3>
                <p className="text-gray-600">
                  Kredi kartı, banka kartı, dijital cüzdan ve alternatif ödeme 
                  yöntemleri ile güvenli ödeme alımı
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Güvenlik & Uyumluluk</h3>
                <p className="text-gray-600">
                  PCI DSS Level 1, 3D Secure, fraud koruması ve gelişmiş 
                  güvenlik önlemleri
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">API & Entegrasyon</h3>
                <p className="text-gray-600">
                  RESTful API'lar, webhook'lar, SDK'lar ve kapsamlı 
                  geliştirici dokümantasyonu
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">E-ticaret ve Online Satış</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Online mağaza ödeme entegrasyonu</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Abonelik ve tekrarlayan ödemeler</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mobil uygulama ödemeleri</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Marketplace ödeme yönetimi</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">SaaS ve B2B Hizmetler</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Aylık/yıllık abonelik yönetimi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Kullanım bazlı faturalandırma</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Invoice ve ödeme takibi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Çoklu para birimi desteği</span>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Teknik Entegrasyon</h3>
                <p className="text-gray-600 mb-4">
                  Stripe API entegrasyonu, ödeme formları ve 
                  güvenlik yapılandırması
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• API entegrasyonu ve test</li>
                  <li>• Ödeme formu tasarımı</li>
                  <li>• Webhook yapılandırması</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Güvenlik & Uyumluluk</h3>
                <p className="text-gray-600 mb-4">
                  PCI DSS uyumluluğu, güvenlik testleri ve 
                  fraud koruması yapılandırması
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Güvenlik audit ve test</li>
                  <li>• PCI DSS uyumluluk</li>
                  <li>• Fraud koruma ayarları</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eğitim & Destek</h3>
                <p className="text-gray-600 mb-4">
                  Stripe kullanımı, güvenlik best practice'leri ve 
                  sürekli teknik destek
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Platform kullanım eğitimleri</li>
                  <li>• Güvenlik workshop'ları</li>
                  <li>• 7/24 teknik destek</li>
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
                  Stripe entegrasyonu ne kadar sürede tamamlanır?
                </h3>
                <p className="text-gray-600">
                  Basit entegrasyonlar 1-2 hafta, karmaşık sistemler için 
                  3-4 hafta gerekebilir. Test süreçleri dahil toplam süre.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Hangi ödeme yöntemleri destekleniyor?
                </h3>
                <p className="text-gray-600">
                  Kredi kartları, banka kartları, Apple Pay, Google Pay, 
                  SEPA, ACH ve 135+ ülkede yerel ödeme yöntemleri.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Güvenlik nasıl sağlanıyor?
                </h3>
                <p className="text-gray-600">
                  PCI DSS Level 1 uyumluluğu, 3D Secure, fraud koruması, 
                  şifreleme ve sürekli güvenlik güncellemeleri.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Komisyon oranları nasıl?
                </h3>
                <p className="text-gray-600">
                  Türkiye için %2.9 + 0.30₺ (başarılı işlem başına). 
                  Büyük hacimlerde özel oranlar mümkün.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stripe Hakkında Daha Fazla Bilgi</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Stripe çözümleri hakkında detaylı bilgi almak, demo talep etmek 
              veya fiyat teklifi almak için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.stripe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Stripe Resmi Site
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
              Güvenli Ödeme Altyapısı ile İşinizi Büyütün
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Global pazarlara açılın, müşteri deneyimini iyileştirin ve 
              ödeme dönüşüm oranlarını artırın.
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
