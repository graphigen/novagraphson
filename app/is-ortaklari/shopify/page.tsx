"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"

export default function ShopifyPage() {
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
              Shopify
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              E-ticaret platformlarında dünya lideri
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
            Shopify, e-ticaret platformlarında dünya çapında lider konumda olan bir 
            şirkettir. 175'ten fazla ülkede 1.7 milyondan fazla işletmeye hizmet 
            veren Shopify, küçük işletmelerden büyük kurumlara kadar her ölçekte 
            şirketin online satış yapmasını sağlar. Kullanıcı dostu arayüzü, 
            güçlü özellikleri ve güvenilir altyapısı ile e-ticaret dünyasının 
            vazgeçilmez platformudur.
          </p>
        </div>

        {/* Novagraph ile İş Birliği */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile İş Birliği</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Novagraph olarak Shopify ile güçlü bir iş ortaklığı kurarak, 
            müşterilerimize kapsamlı e-ticaret çözümleri sunuyoruz. Bu ortaklık sayesinde:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Profesyonel Shopify mağaza tasarımı ve kurulumu</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Özelleştirilmiş tema geliştirme ve entegrasyon</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">E-ticaret optimizasyonu ve performans artırımı</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Sürekli teknik destek ve bakım hizmetleri</span>
            </li>
          </ul>
        </div>

        {/* Temel Özellikler */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Temel Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kolay Mağaza Kurulumu</h3>
              <p className="text-gray-700">
                Sıfırdan profesyonel e-ticaret mağazası kurun, 
                dakikalar içinde satışa başlayın.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Özelleştirilebilir Temalar</h3>
              <p className="text-gray-700">
                Markanıza uygun temalar seçin, renk ve tasarımı 
                tamamen özelleştirin.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Güvenli Ödeme Sistemleri</h3>
              <p className="text-gray-700">
                Shopify Payments, PayPal, Stripe gibi güvenli 
                ödeme yöntemlerini entegre edin.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobil Uyumluluk</h3>
              <p className="text-gray-700">
                Tüm cihazlarda mükemmel görünen responsive 
                tasarımlar ile müşterilerinize ulaşın.
              </p>
            </div>
          </div>
        </div>

        {/* Kullanım Alanları */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kullanım Alanları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">E-ticaret Mağazaları</h4>
              <p className="text-blue-800 text-sm">Online satış yapan işletmeler</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Dropshipping</h4>
              <p className="text-green-800 text-sm">Stok tutmadan satış yapan işletmeler</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">B2B Satış</h4>
              <p className="text-purple-800 text-sm">Kurumlar arası ticaret platformları</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Sanal Mağazalar</h4>
              <p className="text-orange-800 text-sm">Fiziksel mağaza olmadan satış</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Marka Mağazaları</h4>
              <p className="text-red-800 text-sm">Kendi markasını satan işletmeler</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Çok Kanallı Satış</h4>
              <p className="text-indigo-800 text-sm">Online ve offline entegrasyonu</p>
            </div>
          </div>
        </div>

        {/* Novagraph ile Entegrasyon */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile Entegrasyon</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Novagraph'ın Shopify entegrasyonu ile müşterilerimiz:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Profesyonel mağaza tasarımı ve kurulumu</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Özelleştirilmiş tema geliştirme</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">E-ticaret optimizasyonu</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">SEO ve pazarlama entegrasyonu</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Analitik ve raporlama</span>
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
                Shopify mağazası kurmak ne kadar sürer?
              </h3>
              <p className="text-gray-700">
                Temel bir mağaza kurulumu 1-2 gün içinde tamamlanır. Özelleştirme 
                ve entegrasyon işlemleri ek süre gerektirebilir.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Novagraph'ın Shopify hizmetleri nelerdir?
              </h3>
              <p className="text-gray-700">
                Mağaza kurulumu, tema tasarımı, özelleştirme, SEO optimizasyonu, 
                pazarlama entegrasyonu ve sürekli teknik destek hizmetleri sunuyoruz.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hangi ödeme yöntemleri entegre edilebilir?
              </h3>
              <p className="text-gray-700">
                Shopify Payments, PayPal, Stripe, iyzico, PayTR gibi tüm popüler 
                ödeme sistemleri entegre edilebilir.
              </p>
            </div>
          </div>
        </div>

        {/* İletişim */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İletişim</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Shopify ile ilgili e-ticaret danışmanlığı ve mağaza kurulum hizmetleri için 
            Novagraph uzmanlarıyla iletişime geçin. Size özel e-ticaret stratejileri 
            geliştirip, online satışlarınızı artırmanıza yardımcı olalım.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Ücretsiz Danışmanlık</h3>
            <p className="text-blue-800 mb-4">
              E-ticaret projenizi değerlendirelim ve size en uygun 
              Shopify çözümünü önerelim.
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
              Shopify ile E-ticaret Mağazanızı Kurun
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Profesyonel e-ticaret mağazası tasarımı ve kurulumu için 
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
                href="https://shopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Shopify'ı Ziyaret Et
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
