"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"

export default function GoogleCloudPage() {
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
              Google Cloud
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Gelişmiş bulut servisleri ve AI çözümleri
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
            Google Cloud, Google'ın bulut bilişim platformudur ve dünya çapında milyonlarca 
            işletmeye hizmet vermektedir. Yapay zeka, makine öğrenmesi, veri analizi ve 
            gelişmiş bulut altyapısı ile işletmelerin dijital dönüşümünü destekler. 
            Güvenilir, ölçeklenebilir ve yenilikçi çözümleri ile kurumsal seviyede 
            bulut hizmetleri sunar.
          </p>
        </div>

        {/* Novagraph ile İş Birliği */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile İş Birliği</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Novagraph olarak Google Cloud ile güçlü bir iş ortaklığı kurarak,
            müşterilerimize en gelişmiş bulut çözümlerini sunuyoruz. Bu ortaklık sayesinde:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Profesyonel bulut altyapısı tasarımı ve kurulumu</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">AI ve makine öğrenmesi çözümleri</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Veri analizi ve iş zekası platformları</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Sürekli teknik destek ve optimizasyon</span>
            </li>
          </ul>
        </div>

        {/* Temel Özellikler */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Temel Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gelişmiş AI Servisleri</h3>
              <p className="text-gray-700">
                Vertex AI, AutoML ve diğer makine öğrenmesi araçları ile
                yapay zeka projelerinizi hızlandırın.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Güvenli Altyapı</h3>
              <p className="text-gray-700">
                Dünya standartlarında güvenlik ve uyumluluk ile
                verilerinizi koruyun.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ölçeklenebilir Hesaplama</h3>
              <p className="text-gray-700">
                Compute Engine ve Kubernetes ile ihtiyacınıza göre
                kaynakları ölçeklendirin.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Veri Analizi</h3>
              <p className="text-gray-700">
                BigQuery, Dataflow ve diğer veri araçları ile
                büyük veri analizi yapın.
              </p>
            </div>
          </div>
        </div>

        {/* Kullanım Alanları */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kullanım Alanları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Web Uygulamaları</h4>
              <p className="text-blue-800 text-sm">Yüksek performanslı web uygulamaları</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">AI Projeleri</h4>
              <p className="text-green-800 text-sm">Makine öğrenmesi ve yapay zeka</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Veri Analizi</h4>
              <p className="text-purple-800 text-sm">Büyük veri işleme ve analizi</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">IoT Çözümleri</h4>
              <p className="text-orange-800 text-sm">Nesnelerin interneti platformları</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Kurumsal Sistemler</h4>
              <p className="text-red-800 text-sm">ERP ve CRM sistemleri</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Mobil Uygulamalar</h4>
              <p className="text-indigo-800 text-sm">Backend ve API servisleri</p>
            </div>
          </div>
        </div>

        {/* Novagraph ile Entegrasyon */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile Entegrasyon</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Novagraph'ın Google Cloud entegrasyonu ile müşterilerimiz:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Profesyonel bulut altyapısı tasarımı</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">AI ve ML proje danışmanlığı</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Veri analizi platformları</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Güvenlik ve uyumluluk</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Performans optimizasyonu</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Sürekli teknik destek</span>
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
                Google Cloud hangi avantajları sunar?
              </h3>
              <p className="text-gray-700">
                Yapay zeka, makine öğrenmesi, güvenlik, ölçeklenebilirlik ve 
                global altyapı gibi avantajlar sunar.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Novagraph'ın Google Cloud hizmetleri nelerdir?
              </h3>
              <p className="text-gray-700">
                Bulut altyapısı tasarımı, AI proje danışmanlığı, veri analizi, 
                güvenlik ve sürekli teknik destek hizmetleri sunuyoruz.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hangi sektörlerde Google Cloud kullanılabilir?
              </h3>
              <p className="text-gray-700">
                Finans, sağlık, e-ticaret, üretim, eğitim gibi tüm sektörlerde 
                Google Cloud kullanılabilir.
              </p>
            </div>
          </div>
        </div>

        {/* İletişim */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İletişim</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Google Cloud ile ilgili bulut danışmanlığı ve teknik hizmetler için
            Novagraph uzmanlarıyla iletişime geçin. Size özel bulut stratejileri
            geliştirip, dijital dönüşümünüzü hızlandırmaya yardımcı olalım.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Ücretsiz Danışmanlık</h3>
            <p className="text-blue-800 mb-4">
              Bulut projenizi değerlendirelim ve size en uygun
              Google Cloud çözümünü önerelim.
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
              Google Cloud ile Dijital Dönüşümünüzü Hızlandırın
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Profesyonel bulut danışmanlığı ve AI çözümleri için
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
                href="https://cloud.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Google Cloud'u Ziyaret Et
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
