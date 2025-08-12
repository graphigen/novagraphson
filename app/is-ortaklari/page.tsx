"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

const partners = [
  {
    name: "Ahrefs",
    description: "SEO alanında dünya çapında lider analiz aracı",
    href: "/is-ortaklari/ahrefs",
    category: "SEO & Analiz"
  },
  {
    name: "Amazon AWS",
    description: "Ölçeklenebilir, güvenilir bulut altyapısı sağlayıcısı",
    href: "/is-ortaklari/amazon-aws",
    category: "Bulut Altyapısı"
  },
  {
    name: "Azure",
    description: "Kurumsal seviyede bulut platformu",
    href: "/is-ortaklari/azure",
    category: "Bulut Altyapısı"
  },
  {
    name: "Bitrix24",
    description: "CRM, proje yönetimi ve iletişimi tek platformda",
    href: "/is-ortaklari/bitrix24",
    category: "İş Yönetimi"
  },
  {
    name: "Cloudflare",
    description: "Web performansı ve siber güvenlik servisleri",
    href: "/is-ortaklari/cloudflare",
    category: "Güvenlik & Performans"
  },
  {
    name: "Google Analytics",
    description: "Web sitesi ve uygulama trafiği analizi",
    href: "/is-ortaklari/google-analytics",
    category: "Analiz & Raporlama"
  },
  {
    name: "Google Cloud",
    description: "Gelişmiş bulut servisleri ve AI çözümleri",
    href: "/is-ortaklari/google-cloud",
    category: "Bulut Altyapısı"
  },
  {
    name: "iyzico",
    description: "Güvenli ve hızlı dijital ödeme altyapısı",
    href: "/is-ortaklari/iyzico",
    category: "Ödeme Sistemleri"
  },
  {
    name: "JivoChat",
    description: "Canlı sohbet ve müşteri destek platformu",
    href: "/is-ortaklari/jivochat",
    category: "Müşteri Hizmetleri"
  },
  {
    name: "PayPal",
    description: "Küresel online ödeme ve para transferi",
    href: "/is-ortaklari/paypal",
    category: "Ödeme Sistemleri"
  },
  {
    name: "Salesforce",
    description: "Bulut tabanlı CRM ve müşteri deneyimi",
    href: "/is-ortaklari/salesforce",
    category: "CRM & Pazarlama"
  },
  {
    name: "Semrush",
    description: "Dijital pazarlama ve SEO analiz platformu",
    href: "/is-ortaklari/semrush",
    category: "SEO & Analiz"
  },
  {
    name: "Similarweb",
    description: "Web trafiği ve pazar analizi araçları",
    href: "/is-ortaklari/similarweb",
    category: "Analiz & Raporlama"
  },
  {
    name: "Stripe",
    description: "Geliştirici dostu küresel ödeme platformu",
    href: "/is-ortaklari/stripe",
    category: "Ödeme Sistemleri"
  },
  {
    name: "Unica",
    description: "Kurumsal pazarlama otomasyon platformu",
    href: "/is-ortaklari/unica",
    category: "CRM & Pazarlama"
  },
  {
    name: "Zendesk",
    description: "Müşteri destek ve yardım masası yazılımı",
    href: "/is-ortaklari/zendesk",
    category: "Müşteri Hizmetleri"
  },
  {
    name: "Zoho",
    description: "Kapsamlı iş yazılımları ve CRM çözümleri",
    href: "/is-ortaklari/zoho",
    category: "İş Yönetimi"
  }
]

const categories = [
  "Tümü",
  "SEO & Analiz",
  "Bulut Altyapısı",
  "İş Yönetimi",
  "Güvenlik & Performans",
  "Analiz & Raporlama",
  "Ödeme Sistemleri",
  "Müşteri Hizmetleri",
  "CRM & Pazarlama"
]

export default function IsOrtaklariPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ana Sayfaya Dön
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              İş Ortaklarımız
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Dijital dönüşüm yolculuğunuzda güvenilir teknoloji ortaklarımızla yanınızdayız
            </p>
          </div>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Güçlü Teknoloji Ortaklıkları
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Her sektörde lider konumda olan teknoloji şirketleriyle iş birliği yaparak, 
            müşterilerimize en iyi çözümleri sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={partner.href}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {partner.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              İş Ortaklığı Kurmak İster misiniz?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Novagraph ile iş ortaklığı kurarak, teknoloji çözümlerinizi 
              daha geniş kitlelere ulaştırabilirsiniz.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
