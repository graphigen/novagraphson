import { Metadata } from 'next'
import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: 'Google Analytics İş Ortağı',
  description: 'Google Analytics ile NovaGraph iş birliği. Web analitik kurulumu, veri analizi, kullanıcı davranış analizi ve profesyonel danışmanlık.',
  keywords: 'Google Analytics, web analitik, veri analizi, kullanıcı davranış analizi, NovaGraph iş ortağı',
  openGraph: {
    title: 'Google Analytics İş Ortağı - NovaGraph',
    description: 'Google Analytics ile NovaGraph iş birliği. Web analitik kurulumu ve veri analizi.',
    url: 'https://novagraph.com.tr/is-ortaklari/google-analytics',
    type: 'website',
  },
}

export default function GoogleAnalyticsPage() {
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
              Google Analytics
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Web sitenizin performansını analiz eden güçlü analitik platformu
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
            Google Analytics, web sitenizin trafiğini, kullanıcı davranışlarını ve 
            performansını detaylı bir şekilde analiz etmenizi sağlayan dünya çapında 
            lider analitik platformudur. Gerçek zamanlı veriler ve kapsamlı raporlama 
            özellikleriyle iş kararlarınızı veri odaklı almanıza yardımcı olur.
          </p>
        </div>

        {/* Novagraph ile İş Birliği */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile İş Birliği</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Novagraph olarak Google Analytics'in resmi iş ortağıyız. Müşterilerimize 
            Google Analytics kurulumu, yapılandırması ve veri analizi konularında 
            profesyonel danışmanlık hizmetleri sunuyoruz.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Analitik Kurulumu</h3>
              <p className="text-blue-800">
                Google Analytics hesabı oluşturma, takip kodu entegrasyonu ve 
                hedef yapılandırması
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Veri Analizi</h3>
              <p className="text-blue-800">
                Trafik kaynakları, kullanıcı davranışları ve dönüşüm oranları 
                analizi
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
                  <h4 className="font-semibold text-gray-900">Gerçek Zamanlı Raporlar</h4>
                  <p className="text-gray-600 text-sm">Anlık ziyaretçi verileri ve site aktivitesi</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Kullanıcı Davranış Analizi</h4>
                  <p className="text-gray-600 text-sm">Sayfa görüntülemeleri, oturum süreleri ve hemen çıkma oranları</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Trafik Kaynak Analizi</h4>
                  <p className="text-gray-600 text-sm">Organik arama, sosyal medya ve referans trafiği</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Dönüşüm Takibi</h4>
                  <p className="text-gray-600 text-sm">Hedef tamamlama ve e-ticaret takibi</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Özelleştirilebilir Dashboard</h4>
                  <p className="text-gray-600 text-sm">İhtiyaçlarınıza özel rapor ve grafikler</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Mobil Uygulama Desteği</h4>
                  <p className="text-gray-600 text-sm">iOS ve Android uygulamaları için analitik</p>
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
              <h4 className="font-semibold text-gray-900 mb-3">E-ticaret Siteleri</h4>
              <p className="text-gray-600 text-sm">
                Satış performansı, ürün popülerliği ve müşteri yolculuğu analizi
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Kurumsal Web Siteleri</h4>
              <p className="text-gray-600 text-sm">
                Ziyaretçi demografisi, içerik performansı ve lead generation takibi
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Blog ve İçerik Siteleri</h4>
              <p className="text-gray-600 text-sm">
                Popüler içerik analizi, okuma süreleri ve sosyal paylaşım takibi
              </p>
            </div>
          </div>
        </div>

        {/* Novagraph ile Entegrasyon */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile Entegrasyon</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Google Analytics entegrasyonu sürecinde Novagraph olarak size kapsamlı 
            destek sağlıyoruz:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <span className="text-gray-700">Analitik hesabı kurulumu ve yapılandırması</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">2</span>
                </div>
                <span className="text-gray-700">Takip kodu entegrasyonu ve test edilmesi</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">3</span>
                </div>
                <span className="text-gray-700">Hedef ve olay takibi yapılandırması</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">4</span>
                </div>
                <span className="text-gray-700">Özelleştirilmiş dashboard oluşturulması</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">5</span>
                </div>
                <span className="text-gray-700">Veri analizi ve raporlama eğitimi</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">6</span>
                </div>
                <span className="text-gray-700">Sürekli destek ve optimizasyon</span>
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
                Google Analytics ücretsiz mi?
              </h4>
              <p className="text-gray-600">
                Evet, Google Analytics'in temel sürümü ücretsizdir. Google Analytics 4 
                ile güçlü analitik özellikler sunulmaktadır.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Veri toplama ne kadar sürer?
              </h4>
              <p className="text-gray-600">
                Takip kodu entegrasyonundan sonra veriler 24-48 saat içinde 
                görünmeye başlar. Gerçek zamanlı raporlar anında erişilebilir.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                GDPR uyumluluğu nasıl sağlanır?
              </h4>
              <p className="text-gray-600">
                Cookie banner'ları, gizlilik politikaları ve kullanıcı onayı 
                mekanizmaları ile GDPR uyumluluğu sağlanabilir.
              </p>
            </div>
          </div>
        </div>

        {/* İletişim */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İletişim</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Google Analytics entegrasyonu ve analitik danışmanlığı hakkında 
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
              Google Analytics ile Veri Odaklı Kararlar Alın
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Web sitenizin performansını analiz edin, kullanıcı davranışlarını 
              anlayın ve iş stratejilerinizi veri ile güçlendirin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ücretsiz Danışmanlık
              </Link>
              <a
                href="https://analytics.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Google Analytics'i Ziyaret Et
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
