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
            <details className="md:open">
              <summary className="font-semibold text-gray-900 mb-4 list-none cursor-pointer select-none md:cursor-default md:mb-4">
                Hizmetler
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

          {/* Şirket */}
          <div>
            <details className="md:open">
              <summary className="font-semibold text-gray-900 mb-4 list-none cursor-pointer select-none md:cursor-default md:mb-4">
                Şirket
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

          {/* En Çok Okunanlar */}
          <div>
            <details className="md:open">
              <summary className="font-semibold text-gray-900 mb-4 list-none cursor-pointer select-none md:cursor-default md:mb-4">
                En Çok Okunanlar
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

          {/* İş Ortakları */}
          <div>
            <details className="md:open">
              <summary className="font-semibold text-gray-900 mb-4 list-none cursor-pointer select-none md:cursor-default md:mb-4">
                İş Ortakları
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

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-4 mb-8 opacity-80">
          <span className="text-xs md:text-sm text-gray-500">Ana Sponsor</span>
          <span className="text-xs md:text-sm text-gray-500">Resmi Eşleştiricisi</span>
          <span className="text-xs md:text-sm text-gray-500">Göztepe Basketbol</span>
          <span className="text-xs md:text-sm text-gray-500">Sivasspor A.C.E Awards</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-[11px] md:text-xs font-medium">50 Technology Fast 50</span>
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
            {/* Social Media Icons - Only Instagram */}
            <div className="flex items-center space-x-3">
              <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
