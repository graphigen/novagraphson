import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ağ Güvenliği Nasıl Sağlanır? | NovaGraph Blog',
  description: 'Kurumsal ağ güvenliği için gerekli adımlar, tehditler ve korunma yöntemleri. Siber güvenlik rehberi.',
  keywords: 'ağ güvenliği, siber güvenlik, network security, kurumsal güvenlik, IT güvenliği',
}

export default function AgGuvenligiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <img 
          src="/blog-covers/ag-guvenligi-nasil-saglanir.webp" 
          alt="Ağ Güvenliği Nasıl Sağlanır?"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ağ Güvenliği Nasıl Sağlanır?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Kurumsal ağ güvenliği için gerekli adımlar, tehditler ve korunma yöntemleri
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-blue-700 text-white">
                Siber Güvenlik
              </Badge>
              <Badge variant="secondary" className="bg-blue-700 text-white">
                Ağ Güvenliği
              </Badge>
              <Badge variant="secondary" className="bg-blue-700 text-white">
                IT Güvenliği
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ağ Güvenliği Neden Önemli?
              </h2>
              <p className="text-gray-600 mb-4">
                Günümüzde işletmelerin dijital varlıkları sürekli tehdit altında. Siber saldırılar, 
                veri ihlalleri ve ağ güvenlik açıkları, işletmelerin finansal kayıplarına ve itibar 
                zararına neden olabiliyor. Bu rehberde, ağ güvenliğinizi nasıl sağlayacağınızı 
                adım adım öğreneceksiniz.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-blue-700">Günlük tehdit sayısı</p>
                  <p className="text-2xl font-bold text-blue-800">10,000+</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Lock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-blue-700">Ortalama maliyet</p>
                  <p className="text-2xl font-bold text-blue-800">$3.86M</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-blue-700">Tespit süresi</p>
                  <p className="text-2xl font-bold text-blue-800">207 gün</p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Step 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    Ağ Güvenlik Değerlendirmesi Yapın
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Mevcut ağ güvenlik durumunuzu analiz edin ve risk faktörlerini belirleyin.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Güvenlik Açıklarını Tespit Edin</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Port taraması yapın</li>
                        <li>• Güvenlik duvarı ayarlarını kontrol edin</li>
                        <li>• Erişim noktalarını belirleyin</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Risk Analizi</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Kritik sistemleri belirleyin</li>
                        <li>• Veri sınıflandırması yapın</li>
                        <li>• Tehdit modelini oluşturun</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Güvenlik Duvarı ve IDS/IPS Kurun
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Ağınızın giriş noktalarını koruyun ve şüpheli aktiviteleri tespit edin.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Güvenlik Duvarı Kurulumu</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Next-Generation Firewall seçin</li>
                        <li>• Kural tabanını yapılandırın</li>
                        <li>• Düzenli güncellemeler yapın</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">IDS/IPS Sistemi</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Saldırı tespit sistemi kurun</li>
                        <li>• Otomatik engelleme yapın</li>
                        <li>• Alarm sistemini yapılandırın</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    Erişim Kontrolü ve Kimlik Doğrulama
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Kullanıcı erişimlerini kontrol edin ve güçlü kimlik doğrulama sistemleri kurun.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Erişim Kontrolü</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Rol tabanlı erişim (RBAC)</li>
                        <li>• En az ayrıcalık prensibi</li>
                        <li>• Düzenli erişim gözden geçirmesi</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Kimlik Doğrulama</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Çok faktörlü kimlik doğrulama</li>
                        <li>• Güçlü şifre politikaları</li>
                        <li>• Biyometrik doğrulama</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    Ağ Segmentasyonu ve VLAN Yapılandırması
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Ağınızı mantıksal bölümlere ayırın ve kritik sistemleri izole edin.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Segmentasyon Stratejisi</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Kritik sistemleri ayrı segmentlere alın</li>
                        <li>• Misafir ağını izole edin</li>
                        <li>• DMZ bölgesi oluşturun</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">VLAN Yapılandırması</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Mantıksal ağ bölümleri oluşturun</li>
                        <li>• Segmentler arası iletişimi kısıtlayın</li>
                        <li>• Güvenlik politikalarını uygulayın</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 5 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      5
                    </div>
                    Şifreleme ve Veri Koruma
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Verilerinizi şifreleyin ve güvenli iletişim kanalları kurun.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Veri Şifreleme</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Disk şifreleme (BitLocker, FileVault)</li>
                        <li>• Dosya ve klasör şifreleme</li>
                        <li>• Veritabanı şifreleme</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">İletişim Güvenliği</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• VPN tünelleri kurun</li>
                        <li>• SSL/TLS sertifikaları kullanın</li>
                        <li>• Güvenli protokoller seçin</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 6 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      6
                    </div>
                    Sürekli İzleme ve Log Yönetimi
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Ağ aktivitelerini sürekli izleyin ve güvenlik olaylarını kayıt altına alın.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Gerçek Zamanlı İzleme</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• SIEM sistemi kurun</li>
                        <li>• Anomali tespiti yapın</li>
                        <li>• Alarm sistemleri kurun</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Log Yönetimi</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Merkezi log toplama</li>
                        <li>• Log analizi ve korelasyon</li>
                        <li>• Uzun süreli saklama</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 7 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      7
                    </div>
                    Güvenlik Testleri ve Penetrasyon Testleri
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Güvenlik önlemlerinizi düzenli olarak test edin ve güçlendirin.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Güvenlik Testleri</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Açık kaynak güvenlik testleri</li>
                        <li>• Güvenlik açığı taraması</li>
                        <li>• Konfigürasyon denetimi</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Penetrasyon Testleri</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Yıllık penetrasyon testleri</li>
                        <li>• Sosyal mühendislik testleri</li>
                        <li>• Fiziksel güvenlik testleri</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 8 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      8
                    </div>
                    Çalışan Eğitimi ve Güvenlik Farkındalığı
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Çalışanlarınızı güvenlik konularında eğitin ve farkındalık yaratın.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Eğitim Programları</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Düzenli güvenlik eğitimleri</li>
                        <li>• Simülasyon saldırıları</li>
                        <li>• Güvenlik politikaları eğitimi</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Farkındalık Kampanyaları</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• E-posta güvenliği</li>
                        <li>• Şifre güvenliği</li>
                        <li>• Sosyal mühendislik</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 9 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      9
                    </div>
                    Olay Müdahale Planı ve Kurtarma
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Güvenlik olaylarına hızlı müdahale edin ve iş sürekliliğini sağlayın.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Olay Müdahale</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Olay müdahale ekibi kurun</li>
                        <li>• Müdahale prosedürleri oluşturun</li>
                        <li>• İletişim planı hazırlayın</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Kurtarma Planı</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Yedekleme ve geri yükleme</li>
                        <li>• İş sürekliliği planı</li>
                        <li>• Test ve doğrulama</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 10 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      10
                    </div>
                    Düzenli Gözden Geçirme ve Güncelleme
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Güvenlik önlemlerinizi düzenli olarak gözden geçirin ve güncelleyin.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Güvenlik Denetimi</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Aylık güvenlik değerlendirmesi</li>
                        <li>• Politika gözden geçirmesi</li>
                        <li>• Risk değerlendirmesi</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sürekli İyileştirme</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Yeni tehditlere adaptasyon</li>
                        <li>• Teknoloji güncellemeleri</li>
                        <li>• En iyi uygulamalar</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Conclusion */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sonuç
              </h2>
              <p className="text-gray-600 mb-6">
                Ağ güvenliği, modern işletmelerin en kritik önceliklerinden biridir. Bu rehberde 
                belirtilen 10 adımı takip ederek, ağınızı güçlü bir şekilde koruyabilir ve 
                siber tehditlere karşı dirençli hale getirebilirsiniz. Unutmayın ki güvenlik 
                sürekli bir süreçtir ve düzenli güncellemeler gerektirir.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Önemli Hatırlatma</h3>
                <p className="text-blue-700 text-sm">
                  Güvenlik önlemlerinizi düzenli olarak test edin, güncelleyin ve çalışanlarınızı 
                  eğitin. En güçlü güvenlik sistemi bile, insan faktörü göz ardı edildiğinde 
                  etkisiz kalabilir.
                </p>
              </div>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                İlgili Makaleler
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/blog/bulut-yedekleme-nasil-yapilir"
                  className="group block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        Bulut Yedekleme Nasıl Yapılır?
                      </h3>
                      <p className="text-sm text-gray-600">
                        Verilerinizi güvende tutmak için bulut yedekleme stratejileri
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300 ml-auto" />
                  </div>
                </Link>
                <Link 
                  href="/blog/web-tasarim-10-altin-kural"
                  className="group block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        Web Tasarımda 10 Altın Kural
                      </h3>
                      <p className="text-sm text-gray-600">
                        Modern web tasarımında başarılı olmak için temel prensipler
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300 ml-auto" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
