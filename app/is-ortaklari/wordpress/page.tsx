import { Metadata } from 'next'
import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: 'WordPress İş Ortağı',
  description: 'WordPress ile NovaGraph iş birliği. Web sitesi tasarımı, özelleştirilmiş tema geliştirme, SEO optimizasyonu ve bakım hizmetleri.',
  keywords: 'WordPress, CMS, web sitesi tasarımı, tema geliştirme, SEO optimizasyonu, NovaGraph iş ortağı',
  openGraph: {
    title: 'WordPress İş Ortağı - NovaGraph',
    description: 'WordPress ile NovaGraph iş birliği. Web sitesi tasarımı ve tema geliştirme.',
    url: 'https://novagraph.com.tr/is-ortaklari/wordpress',
    type: 'website',
  },
}

export default function WordPressPage() {
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
              WordPress
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Dünya çapında en popüler içerik yönetim sistemi
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
            WordPress, dünya çapında en popüler içerik yönetim sistemi (CMS) olarak 
            bilinmektedir. Tüm web sitelerinin %43'ünden fazlasında kullanılan 
            WordPress, blog sitelerinden kurumsal web sitelerine, e-ticaret 
            platformlarından portfolyo sitelerine kadar her türlü web projesi için 
            ideal bir çözümdür. Açık kaynak kodlu olması, geniş eklenti ekosistemi 
            ve kullanıcı dostu arayüzü ile hem yeni başlayanlar hem de uzmanlar 
            tarafından tercih edilmektedir.
          </p>
        </div>

        {/* Novagraph ile İş Birliği */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile İş Birliği</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Novagraph olarak WordPress ile güçlü bir iş ortaklığı kurarak, 
            müşterilerimize kapsamlı web geliştirme çözümleri sunuyoruz. Bu ortaklık sayesinde:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Profesyonel WordPress web sitesi tasarımı ve geliştirme</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Özelleştirilmiş tema ve eklenti geliştirme</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">SEO optimizasyonu ve performans iyileştirme</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Güvenlik, yedekleme ve bakım hizmetleri</span>
            </li>
          </ul>
        </div>

        {/* Temel Özellikler */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Temel Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kolay İçerik Yönetimi</h3>
              <p className="text-gray-700">
                WYSIWYG editör ile kolayca içerik oluşturun, düzenleyin ve 
                yayınlayın.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Geniş Eklenti Ekosistemi</h3>
              <p className="text-gray-700">
                60.000'den fazla ücretsiz ve premium eklenti ile sitenizi 
                özelleştirin.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive Tasarım</h3>
              <p className="text-gray-700">
                Tüm cihazlarda mükemmel görünen mobil uyumlu tasarımlar 
                oluşturun.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO Dostu Yapı</h3>
              <p className="text-gray-700">
                Arama motoru optimizasyonu için optimize edilmiş temiz kod 
                yapısı.
              </p>
            </div>
          </div>
        </div>

        {/* Kullanım Alanları */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kullanım Alanları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Blog Siteleri</h4>
              <p className="text-blue-800 text-sm">Kişisel ve kurumsal blog platformları</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Kurumsal Web Siteleri</h4>
              <p className="text-green-800 text-sm">Şirket ve organizasyon web siteleri</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">E-ticaret Siteleri</h4>
              <p className="text-purple-800 text-sm">WooCommerce ile online mağazalar</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Portfolyo Siteleri</h4>
              <p className="text-orange-800 text-sm">Sanatçı ve tasarımcı portfolyoları</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Haber Siteleri</h4>
              <p className="text-red-800 text-sm">Gazete ve haber portalları</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Eğitim Platformları</h4>
              <p className="text-indigo-800 text-sm">Online kurs ve eğitim siteleri</p>
            </div>
          </div>
        </div>

        {/* Novagraph ile Entegrasyon */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile Entegrasyon</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Novagraph'ın WordPress entegrasyonu ile müşterilerimiz:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Profesyonel web sitesi tasarımı ve geliştirme</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Özelleştirilmiş tema ve eklenti geliştirme</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">SEO optimizasyonu ve performans iyileştirme</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Güvenlik ve yedekleme hizmetleri</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Sürekli bakım ve güncelleme</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Teknik destek ve danışmanlık</span>
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
                WordPress ile hangi tür siteler yapılabilir?
              </h3>
              <p className="text-gray-700">
                Blog, kurumsal web sitesi, e-ticaret sitesi, portfolyo, haber sitesi, 
                eğitim platformu gibi hemen hemen her tür web sitesi WordPress ile 
                yapılabilir.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Novagraph'ın WordPress hizmetleri nelerdir?
              </h3>
              <p className="text-gray-700">
                Web sitesi tasarımı, tema geliştirme, eklenti entegrasyonu, SEO 
                optimizasyonu, güvenlik, yedekleme ve sürekli bakım hizmetleri sunuyoruz.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                WordPress siteleri SEO açısından uygun mu?
              </h3>
              <p className="text-gray-700">
                Evet, WordPress SEO dostu bir yapıya sahiptir. Temiz kod yapısı, 
                hızlı yükleme süreleri ve SEO eklentileri ile arama motoru 
                optimizasyonu için idealdir.
              </p>
            </div>
          </div>
        </div>

        {/* İletişim */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İletişim</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            WordPress ile ilgili web geliştirme danışmanlığı ve site tasarım hizmetleri için 
            Novagraph uzmanlarıyla iletişime geçin. Size özel web sitesi çözümleri 
            geliştirip, dijital varlığınızı güçlendirmenize yardımcı olalım.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Ücretsiz Danışmanlık</h3>
            <p className="text-blue-800 mb-4">
              Web projenizi değerlendirelim ve size en uygun 
              WordPress çözümünü önerelim.
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
              WordPress ile Profesyonel Web Sitenizi Oluşturun
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Profesyonel web sitesi tasarımı ve geliştirme hizmetleri için 
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
                href="https://wordpress.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                WordPress'i Ziyaret Et
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
