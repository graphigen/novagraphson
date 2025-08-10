import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Clock, User, Calendar, TrendingUp, BarChart3, Target, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO ne kadar etkili olur? - NovaGraph Blog',
  description: 'SEO\'nun işletmeniz için gerçek değerini ve nasıl ölçülebilir sonuçlar elde edebileceğinizi keşfedin.',
  keywords: 'SEO, arama motoru optimizasyonu, dijital pazarlama, organik trafik, arama motoru sıralaması',
}

export default function SeoNeKadarEtkiliPage() {
  const effectivenessFactors = [
    {
      number: '01',
      title: 'Organik Trafik Artışı',
      description: 'SEO ile organik arama trafiğinizi önemli ölçüde artırabilirsiniz.',
      icon: TrendingUp,
      details: [
        'Arama motoru sıralamalarında üst sıralara çıkın',
        'Hedef anahtar kelimeler için görünürlük kazanın',
        'Uzun kuyruk anahtar kelimeler ile niş trafik çekin',
        'Coğrafi hedefleme ile yerel müşteriler bulun',
        'Sektörünüzde otorite kazanın'
      ],
      metrics: [
        'Organik trafik %200-500 artış',
        'Arama görünürlüğü %300+ iyileşme',
        'Tıklama oranı (CTR) %150+ artış'
      ]
    },
    {
      number: '02',
      title: 'Maliyet Etkinliği',
      description: 'SEO, uzun vadede en maliyet etkili pazarlama kanalıdır.',
      icon: Target,
      details: [
        'PPC reklamlarına göre %70 daha düşük maliyet',
        'Sürekli organik trafik akışı',
        'Tek seferlik yatırım, uzun vadeli sonuç',
        'Reklam bütçesi tasarrufu',
        'ROI oranında %500+ iyileşme'
      ],
      metrics: [
        'Maliyet per lead %60 azalma',
        'Toplam pazarlama maliyeti %40 düşüş',
        'Uzun vadeli ROI %800+'
      ]
    },
    {
      number: '03',
      title: 'Marka Güveni ve Otorite',
      description: 'SEO, markanızın güvenilirliğini ve otoritesini artırır.',
      icon: Zap,
      details: [
        'Arama motorlarında üst sıralarda yer alarak güven oluşturun',
        'Sektörünüzde uzman olarak tanının',
        'Kullanıcı deneyimini iyileştirin',
        'Marka farkındalığını artırın',
        'Rekabet avantajı elde edin'
      ],
      metrics: [
        'Marka aramaları %300+ artış',
        'Doğrudan trafik %250+ iyileşme',
        'Marka güven skoru %400+ artış'
      ]
    },
    {
      number: '04',
      title: 'Hedef Kitle Kalitesi',
      description: 'SEO ile en kaliteli ve hedefli ziyaretçileri çekersiniz.',
      icon: BarChart3,
      details: [
        'Arama yapan kullanıcılar aktif niyet taşır',
        'Yüksek dönüşüm oranları elde edin',
        'Kaliteli lead\'ler üretin',
        'Müşteri yaşam boyu değerini artırın',
        'Satış sürecini hızlandırın'
      ],
      metrics: [
        'Dönüşüm oranı %150+ artış',
        'Lead kalitesi %200+ iyileşme',
        'Müşteri edinme maliyeti %50 azalma'
      ]
    },
    {
      number: '05',
      title: 'Uzun Vadeli Sürdürülebilirlik',
      description: 'SEO sonuçları kalıcı ve sürdürülebilirdir.',
      icon: TrendingUp,
      details: [
        'Organik trafik sürekli büyür',
        'İçerik varlığınız zamanla değer kazanır',
        'Backlink portföyünüz güçlenir',
        'Domain otoritesi sürekli artar',
        'Rekabet avantajınız korunur'
      ],
      metrics: [
        '3 yıllık organik trafik %1000+ artış',
        'Domain otoritesi %300+ iyileşme',
        'Backlink sayısı %500+ artış'
      ]
    }
  ]

  const implementationSteps = [
    {
      title: 'Teknik SEO Optimizasyonu',
      steps: [
        'Site hızını optimize edin (Core Web Vitals)',
        'Mobil uyumluluğu sağlayın',
        'SSL sertifikası kurun (HTTPS)',
        'XML sitemap oluşturun',
        'Robots.txt dosyasını optimize edin'
      ]
    },
    {
      title: 'İçerik Stratejisi',
      steps: [
        'Anahtar kelime araştırması yapın',
        'Kaliteli, orijinal içerik üretin',
        'İçerik takvimi oluşturun',
        'İç linkleme yapısını kurun',
        'Meta etiketlerini optimize edin'
      ]
    },
    {
      title: 'Backlink Yapısı',
      steps: [
        'Kaliteli backlink\'ler edinin',
        'Broken link\'leri düzeltin',
        'İç linkleme stratejisi geliştirin',
        'Guest posting yapın',
        'İlişki kurma kampanyaları başlatın'
      ]
    },
    {
      title: 'Kullanıcı Deneyimi',
      steps: [
        'Site navigasyonunu iyileştirin',
        'Sayfa yükleme hızını artırın',
        'Mobil kullanıcı deneyimini optimize edin',
        'İçerik okunabilirliğini artırın',
        'Call-to-action butonlarını optimize edin'
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
          src="/blog-covers/seo-ne-kadar-etkili.webp" 
          alt="SEO ne kadar etkili olur?"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/blog" className="text-blue-200 hover:text-white transition-colors">
                Blog
              </Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-blue-200">SEO</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SEO ne kadar etkili olur?
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              SEO\'nun işletmeniz için gerçek değerini ve nasıl ölçülebilir sonuçlar elde edebileceğinizi keşfedin.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                NovaGraph Ekibi
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                8 Ocak 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                10 dk okuma
              </div>
              <Badge className="bg-blue-700 text-white">SEO</Badge>
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
                SEO\'nun Gerçek Etkisi Nedir?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Search Engine Optimization (SEO), modern dijital pazarlama stratejilerinin temel taşıdır. 
                Ancak SEO\'nun gerçek etkisini anlamak ve ölçmek, yatırım kararları için kritik öneme sahiptir.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bu makalede, SEO\'nun işletmeniz için nasıl ölçülebilir ve somut sonuçlar üretebileceğini, 
                adım adım analiz edeceğiz.
              </p>
            </div>

            {/* Effectiveness Factors */}
            <div className="space-y-8 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                SEO\'nun 5 Temel Etki Alanı
              </h2>
              {effectivenessFactors.map((factor, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {factor.number}
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-2">
                          {factor.title}
                        </CardTitle>
                        <p className="text-gray-600 text-lg">
                          {factor.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                          Detaylı Açıklama:
                        </h4>
                        <div className="space-y-3">
                          {factor.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-3">
                                                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                          Beklenen Metrikler:
                        </h4>
                        <div className="space-y-3">
                          {factor.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="bg-blue-50 p-3 rounded-lg">
                              <span className="text-blue-800 font-medium">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Implementation Guide */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                SEO Uygulama Rehberi
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {implementationSteps.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    <div className="space-y-3">
                      {section.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI Analysis */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                SEO ROI Analizi
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">6-12 Ay</div>
                  <div className="text-gray-600">İlk Sonuçlar</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">%300-500</div>
                  <div className="text-gray-600">Organik Trafik Artışı</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-2">%150-200</div>
                  <div className="text-gray-600">Dönüşüm Oranı</div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sonuç: SEO Yatırımı Neden Değerli?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SEO, uzun vadede en yüksek ROI sunan dijital pazarlama kanalıdır. Başlangıçta zaman ve 
                kaynak gerektirse de, sonuçlar kalıcı ve sürdürülebilirdir.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Doğru strateji ve tutarlı uygulama ile, SEO yatırımınız 6-12 ay içinde önemli sonuçlar 
                vermeye başlar ve zamanla katlanarak büyür.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Unutmayın: SEO bir maraton, sprint değildir. Sabırlı olun, sürekli optimize edin ve 
                sonuçları ölçmeye devam edin.
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
                <Link href="/blog/dijital-pazarlama-baslangic-rehberi" className="block">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Dijital Pazarlama Başlangıç Rehberi
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Dijital pazarlamaya yeni başlayanlar için kapsamlı rehber.
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
