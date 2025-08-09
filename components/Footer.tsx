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
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Blog
                </a>
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
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Blog
                  </a>
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
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Web Sitesi Nasıl Yapılır?
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center">
                  Web Sitesi Kurma
                  <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-medium">POPÜLER</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Web Yazılımı Nedir?
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  En Çok Satılan Ürünler
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Mikro İhracat Nedir?
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Web Sitesi SEO
                </a>
              </li>
                </ul>
              </details>
            </div>
            <div className="hidden md:block">
              <h3 className="font-semibold text-gray-900 mb-4">En Çok Okunanlar</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Web Sitesi Nasıl Yapılır?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center">
                    Web Sitesi Kurma
                    <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-medium">POPÜLER</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Web Yazılımı Nedir?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    En Çok Satılan Ürünler
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Mikro İhracat Nedir?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Web Sitesi SEO
                  </a>
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
                <Link href="/is-ortaklari/ahrefs" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Ahrefs
                </Link>
              </li>
              <li>
                <Link href="/is-ortaklari/amazon-aws" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Amazon AWS
                </Link>
              </li>
              <li>
                <Link href="/is-ortaklari/cloudflare" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Cloudflare
                </Link>
              </li>
              <li>
                <Link href="/is-ortaklari/zoho" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Zoho
                </Link>
              </li>
              <li>
                <Link href="/is-ortaklari/bitrix24" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Bitrix24
                </Link>
              </li>
              <li>
                <Link href="/is-ortaklari/jivochat" className="text-gray-600 hover:text-blue-600 transition-colors">
                  JivoChat
                </Link>
              </li>
              <li>
                <Link href="/is-ortaklari/paypal" className="text-gray-600 hover:text-blue-600 transition-colors">
                  PayPal
                </Link>
              </li>
                </ul>
              </details>
            </div>
            <div className="hidden md:block">
              <h3 className="font-semibold text-gray-900 mb-4">İş Ortakları</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/is-ortaklari/ahrefs" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Ahrefs
                  </Link>
                </li>
                <li>
                  <Link href="/is-ortaklari/amazon-aws" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Amazon AWS
                  </Link>
                </li>
                <li>
                  <Link href="/is-ortaklari/cloudflare" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Cloudflare
                  </Link>
                </li>
                <li>
                  <Link href="/is-ortaklari/zoho" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Zoho
                  </Link>
                </li>
                <li>
                  <Link href="/is-ortaklari/bitrix24" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Bitrix24
                  </Link>
                </li>
                <li>
                  <Link href="/is-ortaklari/jivochat" className="text-gray-600 hover:text-blue-600 transition-colors">
                    JivoChat
                  </Link>
                </li>
                <li>
                  <Link href="/is-ortaklari/paypal" className="text-gray-600 hover:text-blue-600 transition-colors">
                    PayPal
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

        {/* Quick Links Row (styled like previous badges row) */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-4 mb-8 opacity-80">
          <Link href="/pazarlama-strateji-basvurusu" className="text-xs md:text-sm text-gray-500 hover:text-blue-600 transition-colors">
            Ücretsiz Pazarlama Stratejisi
          </Link>
          <Link href="/is-ortaklari" className="text-xs md:text-sm text-gray-500 hover:text-blue-600 transition-colors">
            İş Ortakları
          </Link>
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.91h2.42V9.46c0-2.4 1.43-3.72 3.62-3.72 1.05 0 2.14.19 2.14.19v2.36h-1.21c-1.19 0-1.56.74-1.56 1.5v1.8h2.66l-.42 2.91h-2.24V22c4.78-.75 8.44-4.92 8.44-9.94z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.3.5A3.1 3.1 0 0 0 .5 6.2C0 8.2 0 12 0 12s0 3.8.5 5.8a3.1 3.1 0 0 0 2.2 2.2c2 .5 9.3.5 9.3.5s7.3 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2c.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-700 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.83v1.98h.05c.53-1.01 1.84-2.08 3.78-2.08 4.04 0 4.78 2.66 4.78 6.12V23h-4v-6.46c0-1.54-.03-3.53-2.15-3.53-2.16 0-2.49 1.68-2.49 3.41V23h-4V8.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
