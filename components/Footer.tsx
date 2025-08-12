import { LogoFooter } from "@/components/LogoFooter"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {/* Hizmetler */}
          <div>
            {/* Mobile accordion */}
            <div className="md:hidden">
              <details>
                <summary className="group flex items-center justify-between font-semibold text-gray-900 mb-4 list-none cursor-pointer select-none">
                  <span>Hizmetler</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <ul className="space-y-3">
              <li>
                <Link href="/web-tasarim" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Web Tasarım
                </Link>
              </li>
              <li>
                <Link href="/dijital-pazarlama" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Dijital Pazarlama
                </Link>
              </li>
              <li>
                <Link href="/seo" className="text-gray-600 hover:text-blue-600 transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/video-produksiyon" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Video Prodüksiyon
                </Link>
              </li>
              <li>
                <Link href="/crm-sistemleri" className="text-gray-600 hover:text-blue-600 transition-colors">
                  CRM Sistemleri
                </Link>
              </li>
              <li>
                <Link href="/network-solutions" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Ağ Çözümleri
                </Link>
              </li>
              <li>
                <Link href="/server-systems" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Sunucu Sistemleri
                </Link>
              </li>
              <li>
                <Link href="/cloud-backup" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Bulut & Backup
                </Link>
              </li>
              <li>
                <Link href="/technical-service" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Teknik Servis
                </Link>
              </li>
                </ul>
              </details>
            </div>
            {/* Desktop static list */}
            <div className="hidden md:block">
              <h3 className="font-semibold text-gray-900 mb-4">Hizmetler</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/web-tasarim" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Web Tasarım
                  </Link>
                </li>
                <li>
                  <Link href="/dijital-pazarlama" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Dijital Pazarlama
                  </Link>
                </li>
                <li>
                  <Link href="/seo" className="text-gray-600 hover:text-blue-600 transition-colors">
                    SEO
                  </Link>
                </li>
                <li>
                  <Link href="/video-produksiyon" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Video Prodüksiyon
                  </Link>
                </li>
                <li>
                  <Link href="/crm-sistemleri" className="text-gray-600 hover:text-blue-600 transition-colors">
                    CRM Sistemleri
                  </Link>
                </li>
                <li>
                  <Link href="/network-solutions" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Ağ Çözümleri
                  </Link>
                </li>
                <li>
                  <Link href="/server-systems" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Sunucu Sistemleri
                  </Link>
                </li>
                <li>
                  <Link href="/cloud-backup" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Bulut & Backup
                  </Link>
                </li>
                <li>
                  <Link href="/technical-service" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Teknik Servis
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Şirket */}
          <div>
            <div className="md:hidden">
              <details>
                <summary className="group flex items-center justify-between font-semibold text-gray-900 mb-4 list-none cursor-pointer select-none">
                  <span>Şirket</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <ul className="space-y-3">
              <li>
                <Link href="/hakkimizda" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/referanslar" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-600 hover:text-blue-600 transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </li>
                </ul>
              </details>
            </div>
            <div className="hidden md:block">
              <h3 className="font-semibold text-gray-900 mb-4">Şirket</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/hakkimizda" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link href="/referanslar" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Referanslar
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="text-gray-600 hover:text-blue-600 transition-colors">
                    İletişim
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* İş Ortakları */}
          <div>
            <div className="md:hidden">
              <details>
                <summary className="group flex items-center justify-between font-semibold text-gray-900 mb-4 list-none cursor-pointer select-none">
                  <span>İş Ortakları</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <ul className="space-y-3">
                  <li>
                    <Link href="/is-ortaklari/amazon-aws" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Amazon AWS
                    </Link>
                  </li>
                  <li>
                    <Link href="/is-ortaklari/azure" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Microsoft Azure
                    </Link>
                  </li>
                  <li>
                    <Link href="/is-ortaklari/cloudflare" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Cloudflare
                    </Link>
                  </li>
                  <li>
                    <Link href="/is-ortaklari/google-ads" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Google Ads
                    </Link>
                  </li>
                  <li>
                    <Link href="/is-ortaklari/semrush" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Semrush
                    </Link>
                  </li>
                  <li>
                    <Link href="/is-ortaklari/shopify" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Shopify
                    </Link>
                  </li>
                  <li>
                    <Link href="/is-ortaklari/wordpress" className="text-gray-600 hover:text-blue-600 transition-colors">
                      WordPress
                    </Link>
                  </li>
                </ul>
              </details>
            </div>
            <div className="hidden md:block">
              <h3 className="font-semibold text-gray-900 mb-4">İş Ortakları</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/is-ortaklari/amazon-aws" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Amazon AWS
                  </Link>
                </li>
                <li>
                  <Link href="/is-ortaklari/azure" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Microsoft Azure
                  </Link>
                </li>
                <li>
                  <Link href="/is-ortaklari/cloudflare" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Cloudflare
                  </Link>
                </li>
                <li>
                  <Link href="/is-ortaklari/google-ads" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Google Ads
                  </Link>
                </li>
                <li>
                  <Link href="/is-ortaklari/semrush" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Semrush
                  </Link>
                </li>
                <li>
                  <Link href="/is-ortaklari/shopify" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Shopify
                  </Link>
                </li>
                <li>
                  <Link href="/is-ortaklari/wordpress" className="text-gray-600 hover:text-blue-600 transition-colors">
                    WordPress
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* En Çok Okunanlar */}
          <div>
            <div className="md:hidden">
              <details>
                <summary className="group flex items-center justify-between font-semibold text-gray-900 mb-4 list-none cursor-pointer select-none">
                  <span>En Çok Okunanlar</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <ul className="space-y-3">
              <li>
                <Link href="/blog/web-tasarim-10-altin-kural" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Web Tasarımda 10 Altın Kural
                </Link>
              </li>
              <li>
                <Link href="/blog/dijital-pazarlama-baslangic-rehberi" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Dijital Pazarlama Başlangıç Rehberi
                </Link>
              </li>
              <li>
                <Link href="/blog/seo-ne-kadar-etkili" className="text-gray-600 hover:text-blue-600 transition-colors">
                  SEO ne kadar etkili olur?
                </Link>
              </li>
              <li>
                <Link href="/blog/bulut-yedekleme-nasil-yapilir" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Bulut Yedekleme Nasıl Yapılır?
                </Link>
              </li>
              <li>
                <Link href="/blog/ag-guvenligi-nasil-saglanir" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Ağ Güvenliği Nasıl Sağlanır?
                </Link>
              </li>
                </ul>
              </details>
            </div>
            <div className="hidden md:block">
              <h3 className="font-semibold text-gray-900 mb-4">En Çok Okunanlar</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/web-tasarim-10-altin-kural" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Web Tasarımda 10 Altın Kural
                  </Link>
                </li>
                <li>
                  <Link href="/blog/dijital-pazarlama-baslangic-rehberi" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Dijital Pazarlama Başlangıç Rehberi
                  </Link>
                </li>
                <li>
                  <Link href="/blog/seo-ne-kadar-etkili" className="text-gray-600 hover:text-blue-600 transition-colors">
                    SEO ne kadar etkili olur?
                  </Link>
                </li>
                <li>
                  <Link href="/blog/bulut-yedekleme-nasil-yapilir" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Bulut Yedekleme Nasıl Yapılır?
                  </Link>
                </li>
                <li>
                  <Link href="/blog/ag-guvenligi-nasil-saglanir" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Ağ Güvenliği Nasıl Sağlanır?
                  </Link>
                </li>
              </ul>
            </div>
          </div>


        </div>

        {/* Company Info */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 pb-8 border-b border-gray-200">
          <div className="mb-6 lg:mb-0">
            <div className="flex items-center space-x-3 mb-2">
              <LogoFooter />
            </div>
            <p className="text-gray-600">Başarılı İşletmelerin Dijital Altyapısı</p>
          </div>
        </div>

        {/* İş Ortakları Badges */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-4 mb-8 opacity-80">
          <Link href="/is-ortaklari" className="text-xs md:text-sm text-gray-500 hover:text-blue-600 transition-colors">
            İş Ortakları
          </Link>
          <span className="text-xs md:text-sm text-gray-400">•</span>
          <Link href="/pazarlama-strateji-basvurusu" className="text-xs md:text-sm text-gray-500 hover:text-blue-600 transition-colors">
            Ücretsiz Pazarlama Stratejisi
          </Link>
          <span className="text-xs md:text-sm text-gray-400">•</span>
          <Link href="/sunucu" className="text-xs md:text-sm text-gray-500 hover:text-blue-600 transition-colors">
            NovaXCore
          </Link>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-xs md:text-sm text-gray-500 mb-4 lg:mb-0">©2025 NovaGraph Teknoloji A.Ş. Tüm hakları saklıdır.</div>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500 mb-4 lg:mb-0">
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/terms" className="hover:text-blue-600 transition-colors">
              Kullanım Sözleşmesi
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-700 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
