"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"

export default function AmazonAWSPage() {
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
              <span className="text-sm text-gray-500">Amazon AWS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center">
            <span className="text-2xl font-bold text-white">AWS</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Amazon AWS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ölçeklenebilir, güvenilir bulut altyapısı sağlayıcısı
          </p>
        </div>

        {/* Marka Tanıtımı */}
        <section className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Marka Tanıtımı</h2>
          <div className="prose prose-lg text-gray-700">
            <p>
              Amazon Web Services (AWS), 2006 yılında Amazon tarafından kurulan ve dünya çapında
              lider konumda olan bulut bilişim platformudur. 25 bölgede 80+ availability zone
              ile 200'den fazla ülkede hizmet verir.
            </p>
            <p>
              Platform, 200'den fazla kapsamlı bulut hizmeti sunar ve milyonlarca aktif
              müşteriye hizmet verir. Startuplardan büyük kurumlara kadar tüm işletmelerin
              bulut ihtiyaçlarını karşılar.
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
                  <span>Bulut altyapı kurulumu ve yönetimi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Güvenlik ve uyumluluk danışmanlığı</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Maliyet optimizasyonu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>7/24 teknik destek</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ortak Çözümler</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Mikroservis mimarisi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>DevOps ve CI/CD pipeline'ları</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Veri analizi ve makine öğrenimi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>IoT ve edge computing</span>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hesaplama</h3>
              <p className="text-gray-600 text-sm">EC2, Lambda, ECS, EKS</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Depolama</h3>
              <p className="text-gray-600 text-sm">S3, EBS, Glacier, FSx</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Veritabanı</h3>
              <p className="text-gray-600 text-sm">RDS, DynamoDB, ElastiCache</p>
            </div>
          </div>
        </section>

        {/* Kullanım Alanları */}
        <section className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kullanım Alanları</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Startuplar</h3>
              <p className="text-gray-700">
                Hızlı ölçeklendirme, düşük başlangıç maliyeti ve
                esnek altyapı çözümleri.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">KOBİ'ler</h3>
              <p className="text-gray-700">
                Güvenilir bulut altyapısı, maliyet etkin çözümler
                ve teknik destek.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Kurumsal</h3>
              <p className="text-gray-700">
                Hibrit bulut, güvenlik, uyumluluk ve
                global altyapı desteği.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">E-ticaret</h3>
              <p className="text-gray-700">
                Yüksek performans, ölçeklenebilirlik ve
                güvenlik odaklı çözümler.
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
                <h3 className="font-semibold text-gray-900 mb-2">Bulut Altyapı Kurulumu</h3>
                <p className="text-gray-700">
                  AWS hesap kurulumu, VPC yapılandırması, güvenlik grupları
                  ve IAM kullanıcı yönetimi.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-blue-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Uygulama Deployment</h3>
                <p className="text-gray-700">
                  Mikroservis mimarisi, container orchestration,
                  CI/CD pipeline kurulumu ve otomasyon.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-blue-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Optimizasyon ve İzleme</h3>
                <p className="text-gray-700">
                  Performans optimizasyonu, maliyet yönetimi,
                  CloudWatch entegrasyonu ve alerting.
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
                AWS entegrasyonu ne kadar sürer?
              </h3>
              <p className="text-gray-700">
                Temel kurulum 2-3 hafta içinde tamamlanır.
                Karmaşık mimariler için 1-2 ay gerekebilir.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Hangi AWS hizmetleri kullanılır?
              </h3>
              <p className="text-gray-700">
                EC2, S3, RDS, Lambda, ECS, CloudFront, Route 53,
                CloudWatch ve daha birçok hizmet entegre edilir.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Güvenlik nasıl sağlanır?
              </h3>
              <p className="text-gray-700">
                IAM, VPC, güvenlik grupları, WAF, Shield ve
                diğer güvenlik hizmetleri ile kapsamlı koruma.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Amazon AWS Hakkında</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Website:</strong>{' '}
                  <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 transition-colors">
                    aws.amazon.com
                    <ExternalLink className="w-4 h-4 inline ml-1" />
                  </a>
                </p>
                <p>
                  <strong>Merkez:</strong> Seattle, Washington, ABD
                </p>
                <p>
                  <strong>Kuruluş:</strong> 2006
                </p>
                <p>
                  <strong>Müşteri Sayısı:</strong> 1,000,000+
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
        <section className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">AWS ile Bulut Dönüşümünüzü Başlatın</h2>
          <p className="text-xl mb-8 opacity-90">
            Güvenilir ve ölçeklenebilir bulut altyapısı için Novagraph ile iletişime geçin
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
