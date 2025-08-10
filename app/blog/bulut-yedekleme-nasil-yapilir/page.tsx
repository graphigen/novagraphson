import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Clock, User, Calendar, Cloud, Shield, Database, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bulut Yedekleme Nasıl Yapılır? - NovaGraph Blog',
  description: 'Verilerinizi güvende tutmak için bulut yedekleme stratejileri ve en iyi uygulamalar.',
  keywords: 'bulut yedekleme, veri güvenliği, cloud backup, veri koruma, yedekleme stratejisi',
}

export default function BulutYedeklemePage() {
  const backupSteps = [
    {
      number: '01',
      title: 'Yedekleme Stratejinizi Planlayın',
      description: 'Veri kaybı riskini minimize etmek için kapsamlı bir yedekleme stratejisi geliştirin.',
      icon: Database,
      details: [
        'Hangi verilerin yedeklenmesi gerektiğini belirleyin',
        'Yedekleme sıklığını planlayın (günlük, haftalık, aylık)',
        'Retention policy (saklama politikası) oluşturun',
        'RTO (Recovery Time Objective) ve RPO (Recovery Point Objective) belirleyin',
        'Yedekleme test planı hazırlayın'
      ]
    },
    {
      number: '02',
      title: 'Bulut Yedekleme Servisi Seçin',
      description: 'İhtiyaçlarınıza en uygun bulut yedekleme çözümünü seçin.',
      details: [
        'AWS S3, Azure Blob Storage, Google Cloud Storage gibi servisleri karşılaştırın',
        'Maliyet, güvenlik ve performans kriterlerini değerlendirin',
        'Coğrafi konum ve veri merkezi seçeneklerini inceleyin',
        'SLA (Service Level Agreement) koşullarını kontrol edin',
        'Entegrasyon kolaylığını değerlendirin'
      ]
    },
    {
      number: '03',
      title: 'Güvenlik Önlemlerini Alın',
      description: 'Yedeklenen verilerin güvenliğini sağlayın.',
      icon: Shield,
      details: [
        'End-to-end encryption (uçtan uca şifreleme) kullanın',
        'Access control ve authentication mekanizmaları kurun',
        'Audit logging ve monitoring sistemi oluşturun',
        'Compliance standartlarına uygunluk sağlayın (GDPR, HIPAA)',
        'Düzenli güvenlik testleri yapın'
      ]
    },
    {
      number: '04',
      title: 'Otomatik Yedekleme Sistemi Kurun',
      description: 'Manuel hataları önlemek için otomatik yedekleme sistemi kurun.',
      details: [
        'Cron jobs veya task scheduler kullanın',
        'Yedekleme script\'leri yazın veya hazır araçları kullanın',
        'Yedekleme başarı/başarısızlık bildirimleri kurun',
        'Yedekleme loglarını takip edin',
        'Yedekleme durumunu dashboard\'da görüntüleyin'
      ]
    },
    {
      number: '05',
      title: 'Veri Sıkıştırma ve Deduplication',
      description: 'Depolama maliyetlerini optimize edin ve yedekleme hızını artırın.',
      details: [
        'ZIP, 7-Zip gibi sıkıştırma algoritmaları kullanın',
        'Deduplication ile tekrarlanan verileri tespit edin',
        'Incremental yedekleme ile sadece değişen verileri yedekleyin',
        'Compression ratio\'yu optimize edin',
        'Yedekleme performansını izleyin'
      ]
    },
    {
      number: '06',
      title: 'Çoklu Konum Yedekleme',
      description: 'Tek nokta hatalarına karşı koruma sağlayın.',
      details: [
        'Farklı coğrafi bölgelerde yedekleme yapın',
        '3-2-1 kuralını uygulayın (3 kopya, 2 farklı medya, 1 uzak konum)',
        'Cross-region replication kullanın',
        'Disaster recovery planı oluşturun',
        'Yedekleme konumlarını düzenli olarak test edin'
      ]
    },
    {
      number: '07',
      title: 'Yedekleme Testleri Yapın',
      description: 'Yedekleme sisteminizin çalıştığından emin olun.',
      details: [
        'Düzenli restore testleri yapın',
        'Yedekleme bütünlüğünü kontrol edin',
        'Recovery time\'ı ölçün',
        'Test ortamında tam sistem restore\'u deneyin',
        'Yedekleme test sonuçlarını dokümante edin'
      ]
    },
    {
      number: '08',
      title: 'Monitoring ve Alerting',
      description: 'Yedekleme sistemini sürekli izleyin ve sorunları erken tespit edin.',
      details: [
        'Yedekleme durumunu real-time izleyin',
        'Başarısız yedeklemeler için otomatik alert\'ler kurun',
        'Yedekleme metriklerini dashboard\'da görüntüleyin',
        'Trend analizi yapın ve iyileştirmeler planlayın',
        'Kapasite planlaması yapın'
      ]
    },
    {
      number: '09',
      title: 'Compliance ve Dokümantasyon',
      description: 'Yasal gerekliliklere uygunluk sağlayın ve süreçleri dokümante edin.',
      details: [
        'Yedekleme politikalarını yazılı hale getirin',
        'Compliance raporları hazırlayın',
        'Yedekleme süreçlerini standartlaştırın',
        'Personel eğitimleri düzenleyin',
        'Düzenli compliance audit\'leri yapın'
      ]
    },
    {
      number: '10',
      title: 'Sürekli İyileştirme',
      description: 'Yedekleme sisteminizi sürekli optimize edin.',
      details: [
        'Yedekleme performansını analiz edin',
        'Maliyet optimizasyonu yapın',
        'Yeni teknolojileri değerlendirin',
        'Best practice\'leri takip edin',
        'Yedekleme stratejisini düzenli olarak gözden geçirin'
      ]
    }
  ]

  const bestPractices = [
    {
      title: '3-2-1 Kuralı',
      description: '3 kopya, 2 farklı medya türü, 1 uzak konum',
      icon: Shield
    },
    {
      title: 'Otomatik Yedekleme',
      description: 'Manuel hataları önlemek için otomasyon kullanın',
      icon: Zap
    },
    {
      title: 'Düzenli Test',
      description: 'Yedekleme sistemini sürekli test edin',
      icon: CheckCircle
    },
    {
      title: 'Güvenlik Önceliği',
      description: 'Encryption ve access control kullanın',
      icon: Shield
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <img 
          src="/blog-covers/bulut-yedekleme-nasil-yapilir.webp" 
          alt="Bulut Yedekleme Nasıl Yapılır?"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/blog" className="text-blue-200 hover:text-white transition-colors">
                Blog
              </Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-blue-200">IT Çözümleri</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bulut Yedekleme Nasıl Yapılır?
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Verilerinizi güvende tutmak için bulut yedekleme stratejileri ve en iyi uygulamalar.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                NovaGraph Ekibi
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                5 Ocak 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                15 dk okuma
              </div>
              <Badge className="bg-blue-700 text-white">IT Çözümleri</Badge>
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
                Neden Bulut Yedekleme Önemli?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Veri kaybı, modern işletmeler için en büyük risklerden biridir. Donanım arızaları, 
                siber saldırılar, doğal afetler veya insan hataları nedeniyle kritik verilerinizi 
                kaybedebilirsiniz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bulut yedekleme, verilerinizi güvenli bir şekilde uzak konumlarda saklayarak bu riskleri 
                minimize eder. Bu rehber, etkili bir bulut yedekleme sistemi kurmanız için gerekli 
                10 adımı kapsar.
              </p>
            </div>

            {/* Best Practices Overview */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Bulut Yedekleme En İyi Uygulamaları
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bestPractices.map((practice, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <practice.icon className="w-6 h-6 text-blue-600" />
                      <h3 className="font-semibold text-gray-900">{practice.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{practice.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-8 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Bulut Yedekleme Kurulum Adımları
              </h2>
              {backupSteps.map((step, index) => (
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

            {/* Cloud Providers Comparison */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Popüler Bulut Yedekleme Servisleri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">AWS S3</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Yüksek dayanıklılık (%99.999999999)</li>
                    <li>• Global erişim</li>
                    <li>• Güçlü güvenlik özellikleri</li>
                    <li>• Detaylı monitoring</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Azure Blob Storage</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Microsoft ekosistemi entegrasyonu</li>
                    <li>• Hybrid cloud desteği</li>
                    <li>• Gelişmiş analytics</li>
                    <li>• Compliance odaklı</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Google Cloud Storage</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Yüksek performans</li>
                    <li>• AI/ML entegrasyonu</li>
                    <li>• Global CDN</li>
                    <li>• Cost-effective pricing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cost Optimization */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Maliyet Optimizasyonu İpuçları
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3">Storage Tiering</h3>
                  <p className="text-blue-700 text-sm">
                    Sık erişilmeyen verileri daha ucuz storage tier\'lara taşıyarak 
                    maliyetleri %60-80 azaltabilirsiniz.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3">Lifecycle Management</h3>
                  <p className="text-blue-700 text-sm">
                    Otomatik lifecycle policies ile eski yedekleri 
                    daha ucuz storage\'lara taşıyın.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3">Compression</h3>
                  <p className="text-blue-700 text-sm">
                    Veri sıkıştırma ile storage maliyetlerini 
                    %30-50 oranında azaltabilirsiniz.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-3">Reserved Capacity</h3>
                  <p className="text-blue-700 text-sm">
                    Uzun vadeli taahhütler ile storage 
                    maliyetlerini %20-40 düşürebilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sonuç
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bulut yedekleme, modern işletmeler için vazgeçilmez bir güvenlik önlemidir. 
                Bu rehberdeki 10 adımı takip ederek, verilerinizi güvenli bir şekilde koruyabilir 
                ve olası veri kayıplarına karşı hazırlıklı olabilirsiniz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Unutmayın ki yedekleme sistemi kurmak yeterli değildir. Düzenli testler yaparak, 
                monitoring sistemini aktif tutarak ve sürekli iyileştirmeler yaparak sisteminizin 
                güvenilirliğini artırabilirsiniz.
              </p>
            </div>

            {/* Related Posts */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                İlgili Makaleler
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/blog/ag-guvenligi-nasil-saglanir" className="block">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Ağ Güvenliği Nasıl Sağlanır?
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Kurumsal ağ güvenliği için gerekli adımlar ve korunma yöntemleri.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
