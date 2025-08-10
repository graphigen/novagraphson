import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Clock, User, Calendar, TrendingUp, Target, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dijital Pazarlama Başlangıç Rehberi - NovaGraph Blog',
  description: 'Dijital pazarlamaya yeni başlayanlar için kapsamlı rehber: strateji, araçlar ve başarı hikayeleri.',
  keywords: 'dijital pazarlama, pazarlama stratejisi, sosyal medya, email marketing, content marketing',
}

export default function DijitalPazarlamaBaslangicPage() {
  const steps = [
    {
      number: '01',
      title: 'Hedef Kitlenizi Tanıyın',
      description: 'Başarılı dijital pazarlama için ilk adım hedef kitlenizi detaylı olarak analiz etmektir.',
      icon: Target,
      details: [
        'Demografik bilgileri analiz edin (yaş, cinsiyet, lokasyon, eğitim)',
        'Psikografik özellikleri belirleyin (ilgi alanları, değerler, yaşam tarzı)',
        'Online davranışları inceleyin (hangi platformları kullanıyor, ne zaman aktif)',
        'Satın alma alışkanlıklarını öğrenin (fiyat hassasiyeti, karar verme süreci)',
        'Rakiplerinizin hedef kitlesini analiz edin'
      ]
    },
    {
      number: '02',
      title: 'Pazarlama Stratejinizi Belirleyin',
      description: 'Hedeflerinize uygun kapsamlı bir dijital pazarlama stratejisi geliştirin.',
      icon: TrendingUp,
      details: [
        'SMART hedefler belirleyin (Spesifik, Ölçülebilir, Ulaşılabilir, Gerçekçi, Zamanlı)',
        'Pazarlama bütçenizi belirleyin ve dağıtın',
        'Hangi kanalları kullanacağınızı seçin (sosyal medya, email, SEO, PPC)',
        'İçerik takvimi oluşturun',
        'KPI\'larınızı (Anahtar Performans Göstergeleri) belirleyin'
      ]
    },
    {
      number: '03',
      title: 'Web Sitenizi Optimize Edin',
      description: 'Web siteniz dijital pazarlama çabalarınızın merkezi olmalıdır.',
      details: [
        'SEO optimizasyonu yapın (anahtar kelime araştırması, meta etiketler)',
        'Hızlı yükleme süreleri sağlayın',
        'Mobil uyumlu tasarım kullanın',
        'Net call-to-action butonları ekleyin',
        'İletişim formları ve lead capture sistemleri kurun'
      ]
    },
    {
      number: '04',
      title: 'Sosyal Medya Varlığınızı Kurun',
      description: 'Hedef kitlenizin bulunduğu sosyal medya platformlarında aktif olun.',
      details: [
        'Hangi platformları kullanacağınızı belirleyin (Facebook, Instagram, LinkedIn, Twitter)',
        'Her platform için özel içerik stratejisi geliştirin',
        'Düzenli posting takvimi oluşturun',
        'Kullanıcı etkileşimini artırın (yorumlara yanıt verin, sorular sorun)',
        'Sosyal medya reklamları kullanın (hedefli reklamlar)'
      ]
    },
    {
      number: '05',
      title: 'İçerik Pazarlaması Stratejisi Geliştirin',
      description: 'Değerli ve ilgi çekici içerikler oluşturarak hedef kitlenizi çekin.',
      details: [
        'Blog yazıları, e-kitaplar, whitepaper\'lar oluşturun',
        'Video içerikler hazırlayın (YouTube, TikTok, Instagram Reels)',
        'Infografikler ve görsel içerikler tasarlayın',
        'Webinar ve online etkinlikler düzenleyin',
        'İçerik takvimi oluşturun ve düzenli yayınlayın'
      ]
    },
    {
      number: '06',
      title: 'Email Pazarlaması Kampanyaları Başlatın',
      description: 'Email pazarlaması, ROI açısından en etkili dijital pazarlama kanallarından biridir.',
      details: [
        'Email listesi oluşturun (lead magnet\'ler, web formları)',
        'Email pazarlama platformu seçin (Mailchimp, ConvertKit, ActiveCampaign)',
        'Farklı email türleri hazırlayın (hoş geldin, bilgilendirme, promosyon)',
        'A/B testleri yapın (konu satırı, içerik, gönderim zamanı)',
        'Email performansını analiz edin (açılma oranı, tıklama oranı)'
      ]
    },
    {
      number: '07',
      title: 'PPC ve Arama Motoru Reklamları Kullanın',
      description: 'Google Ads ve sosyal medya reklamları ile hızlı sonuçlar elde edin.',
      details: [
        'Google Ads hesabı oluşturun ve anahtar kelime araştırması yapın',
        'Hedefli reklam kampanyaları tasarlayın',
        'Reklam bütçenizi optimize edin',
        'A/B testleri yapın (reklam metinleri, görseller)',
        'Reklam performansını sürekli izleyin ve optimize edin'
      ]
    },
    {
      number: '08',
      title: 'Analytics ve Raporlama Sistemleri Kurun',
      description: 'Dijital pazarlama çabalarınızın etkinliğini ölçün ve raporlayın.',
      icon: BarChart3,
      details: [
        'Google Analytics kurun ve hedefler belirleyin',
        'Sosyal medya analytics araçları kullanın',
        'Email pazarlama raporlarını analiz edin',
        'ROI hesaplamaları yapın',
        'Aylık ve çeyreklik raporlar hazırlayın'
      ]
    },
    {
      number: '09',
      title: 'Müşteri İlişkilerini Güçlendirin',
      description: 'Mevcut müşterilerinizi koruyun ve yeni müşteriler kazanın.',
      details: [
        'Müşteri sadakat programları oluşturun',
        'Referans programları başlatın',
        'Müşteri geri bildirimlerini toplayın ve değerlendirin',
        'Müşteri hizmetleri kanallarını optimize edin',
        'Kişiselleştirilmiş pazarlama mesajları gönderin'
      ]
    },
    {
      number: '10',
      title: 'Sürekli Öğrenme ve Güncelleme',
      description: 'Dijital pazarlama sürekli gelişen bir alandır, güncel kalın.',
      details: [
        'Sektör trendlerini takip edin',
        'Pazarlama bloglarını ve podcast\'leri dinleyin',
        'Online kurslar ve sertifikalar alın',
        'Pazarlama konferanslarına katılın',
        'A/B testleri yaparak sürekli iyileştirme yapın'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <img 
          src="/blog-covers/dijital-pazarlama-baslangic-rehberi.webp" 
          alt="Dijital Pazarlama Başlangıç Rehberi"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/blog" className="text-blue-200 hover:text-white transition-colors">
                Blog
              </Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-blue-200">Dijital Pazarlama</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dijital Pazarlama Başlangıç Rehberi
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Dijital pazarlamaya yeni başlayanlar için kapsamlı rehber: strateji, araçlar ve başarı hikayeleri.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                NovaGraph Ekibi
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                10 Ocak 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 dk okuma
              </div>
              <Badge className="bg-blue-700 text-white">Dijital Pazarlama</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Dijital Pazarlamaya Neden Başlamalısınız?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dijital pazarlama, modern iş dünyasında rekabet avantajı elde etmek için vazgeçilmez bir araçtır. 
                Geleneksel pazarlama yöntemlerine göre daha düşük maliyetli, ölçülebilir ve hedef kitleye 
                doğrudan ulaşabilen bir yaklaşımdır.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bu rehber, dijital pazarlamaya sıfırdan başlayanlar için 10 temel adımı kapsar. 
                Her adım, pratik uygulama önerileri ile birlikte sunulmuştur.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-2">
                          {step.title}
                        </CardTitle>
                        <p className="text-gray-600 text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      Detaylı Uygulama Adımları:
                    </h4>
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3">
                                                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Success Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Başarı İçin Önemli İpuçları
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3">Tutarlılık</h3>
                  <p className="text-blue-700 text-sm">
                    Dijital pazarlama uzun vadeli bir süreçtir. Tutarlı ve düzenli çalışma, 
                    sonuçları görmenizi sağlar.
                  </p>
                </div>
                <div className="bg-blue-100 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3">Test ve Optimizasyon</h3>
                  <p className="text-blue-700 text-sm">
                    Sürekli A/B testleri yapın ve sonuçları analiz ederek 
                    stratejinizi optimize edin.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3">Veri Odaklı Yaklaşım</h3>
                  <p className="text-blue-700 text-sm">
                    Sezgilerinize değil, verilere güvenin. Analytics verileri 
                    size en doğru yolu gösterecektir.
                  </p>
                </div>
                <div className="bg-blue-100 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3">Müşteri Odaklılık</h3>
                  <p className="text-blue-700 text-sm">
                    Müşteri ihtiyaçlarını merkeze alın. Onların sorunlarını çözen 
                    içerikler oluşturun.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sonuç
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dijital pazarlama, doğru strateji ve tutarlı uygulama ile büyük sonuçlar verebilir. 
                Bu rehberdeki 10 adımı takip ederek, dijital pazarlama yolculuğunuza güçlü bir temel oluşturabilirsiniz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Unutmayın ki dijital pazarlama sürekli gelişen bir alandır. Yeni trendleri takip etmeye, 
                öğrenmeye ve uygulamaya devam edin. Başarı, zamanla ve sabırla gelecektir.
              </p>
            </div>

            {/* Related Posts */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                İlgili Makaleler
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/blog/web-tasarim-10-altin-kural" className="block">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Web Tasarımda 10 Altın Kural
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Modern web tasarımında başarılı olmak için temel prensipler.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/blog/seo-ne-kadar-etkili" className="block">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        SEO ne kadar etkili olur?
                      </h4>
                      <p className="text-gray-600 text-sm">
                        SEO'nun işletmeniz için gerçek değerini keşfedin.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
