import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Clock, User, Calendar } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Tasarımda 10 Altın Kural - NovaGraph Blog',
  description: 'Modern web tasarımında başarılı olmak için uygulamanız gereken 10 temel prensip ve en iyi uygulamalar.',
  keywords: 'web tasarım, UX/UI, kullanıcı deneyimi, web tasarım kuralları, responsive tasarım',
}

export default function WebTasarimAltinKuralPage() {
  const rules = [
    {
      number: '01',
      title: 'Kullanıcı Deneyimini Öncelik Yapın',
      description: 'Tasarımın merkezinde her zaman kullanıcı olmalıdır.',
      steps: [
        'Hedef kitlenizi tanıyın ve ihtiyaçlarını analiz edin',
        'Kullanıcı yolculuğunu (user journey) haritalandırın',
        'Kolay navigasyon ve sezgisel arayüz tasarlayın',
        'Kullanıcı testleri yapın ve geri bildirimleri değerlendirin'
      ]
    },
    {
      number: '02',
      title: 'Responsive Tasarım Kullanın',
      description: 'Tüm cihazlarda mükemmel görünüm sağlayın.',
      steps: [
        'Mobile-first yaklaşımını benimseyin',
        'Esnek grid sistemleri kullanın',
        'Farklı ekran boyutlarında test edin',
        'Touch-friendly butonlar ve menüler tasarlayın'
      ]
    },
    {
      number: '03',
      title: 'Hızlı Yükleme Süreleri Hedefleyin',
      description: 'Kullanıcılar 3 saniyeden fazla beklemek istemez.',
      steps: [
        'Görselleri optimize edin ve lazy loading kullanın',
        'CSS ve JavaScript dosyalarını minify edin',
        'CDN kullanarak içerik dağıtımını hızlandırın',
        'Gereksiz kodları temizleyin'
      ]
    },
    {
      number: '04',
      title: 'Tutarlı Görsel Kimlik Oluşturun',
      description: 'Markanızın kimliğini yansıtan tutarlı tasarım öğeleri kullanın.',
      steps: [
        'Renk paletini belirleyin ve tutarlı kullanın',
        'Tipografi hiyerarşisi oluşturun',
        'İkon ve görsel stilini standardize edin',
        'Brand guidelines dokümanı hazırlayın'
      ]
    },
    {
      number: '05',
      title: 'Erişilebilirlik Standartlarını Uygulayın',
      description: 'Tüm kullanıcılar için erişilebilir tasarım yapın.',
      steps: [
        'WCAG 2.1 standartlarını takip edin',
        'Yeterli renk kontrastı sağlayın',
        'Alt text\'ler ekleyin ve klavye navigasyonunu destekleyin',
        'Screen reader uyumluluğunu test edin'
      ]
    },
    {
      number: '06',
      title: 'İçerik Hiyerarşisi Oluşturun',
      description: 'Bilgileri mantıklı bir sırayla düzenleyin.',
      steps: [
        'Ana başlık (H1) sadece bir tane olsun',
        'Alt başlıkları (H2, H3) mantıklı sırayla kullanın',
        'Beyaz alan (white space) ile içeriği nefes aldırın',
        'Önemli bilgileri vurgulayın'
      ]
    },
    {
      number: '07',
      title: 'Call-to-Action Butonlarını Optimize Edin',
      description: 'Kullanıcıları harekete geçiren net CTA\'lar tasarlayın.',
      steps: [
        'Buton metinlerini net ve eylem odaklı yazın',
        'Yeterli boyut ve padding kullanın',
        'Renk kontrastını optimize edin',
        'Hover ve active durumları ekleyin'
      ]
    },
    {
      number: '08',
      title: 'Form Tasarımını Kullanıcı Dostu Yapın',
      description: 'Formları basit, anlaşılır ve hızlı doldurulabilir hale getirin.',
      steps: [
        'Gereksiz alanları kaldırın',
        'Validation mesajlarını net yazın',
        'Progress bar ekleyin (uzun formlar için)',
        'Auto-complete özelliği ekleyin'
      ]
    },
    {
      number: '09',
      title: 'SEO Uyumlu HTML Yapısı Kullanın',
      description: 'Arama motorları için optimize edilmiş semantic HTML kullanın.',
      steps: [
        'Semantic HTML5 etiketleri kullanın (header, nav, main, section, article)',
        'Meta description ve title etiketlerini optimize edin',
        'Schema markup ekleyin',
        'URL yapısını SEO dostu yapın'
      ]
    },
    {
      number: '10',
      title: 'Sürekli Test ve İyileştirme Yapın',
      description: 'Tasarım sürekli gelişen bir süreçtir.',
      steps: [
        'A/B testleri yapın',
        'Analytics verilerini analiz edin',
        'Kullanıcı geri bildirimlerini toplayın',
        'Düzenli olarak tasarımı güncelleyin'
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
          src="/blog-covers/web-tasarim-10-altin-kural.webp" 
          alt="Web Tasarımda 10 Altın Kural"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/blog" className="text-blue-200 hover:text-white transition-colors">
                Blog
              </Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-blue-200">Web Tasarım</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Web Tasarımda 10 Altın Kural
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Modern web tasarımında başarılı olmak için uygulamanız gereken temel prensipler ve en iyi uygulamalar.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                NovaGraph Ekibi
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                15 Ocak 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 dk okuma
              </div>
              <Badge className="bg-blue-700 text-white">Web Tasarım</Badge>
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
                Neden Bu Kurallar Önemli?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Web tasarımı sadece güzel görünmek değil, aynı zamanda işlevsel ve kullanıcı dostu olmak demektir. 
                Bu 10 altın kural, modern web standartlarında başarılı olmak için gerekli temel prensipleri kapsar.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Her kural, adım adım uygulama rehberleri ile birlikte sunulmuştur. Bu rehberleri takip ederek, 
                kullanıcı deneyimini önemli ölçüde iyileştirebilir ve web sitenizin performansını artırabilirsiniz.
              </p>
            </div>

            {/* Rules */}
            <div className="space-y-8">
              {rules.map((rule, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {rule.number}
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-2">
                          {rule.title}
                        </CardTitle>
                        <p className="text-gray-600 text-lg">
                          {rule.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      Uygulama Adımları:
                    </h4>
                    <div className="space-y-3">
                      {rule.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Conclusion */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sonuç
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bu 10 altın kural, web tasarımında başarılı olmak için gerekli temel prensipleri kapsar. 
                Her kuralı adım adım uygulayarak, kullanıcı deneyimini önemli ölçüde iyileştirebilirsiniz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Unutmayın ki web tasarımı sürekli gelişen bir alandır. Bu kuralları uyguladıktan sonra, 
                yeni trendleri takip etmeye ve kullanıcı geri bildirimlerini değerlendirmeye devam edin.
              </p>
            </div>

            {/* Related Posts */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                İlgili Makaleler
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
