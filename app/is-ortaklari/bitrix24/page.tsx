"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"

export default function Bitrix24Page() {
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
              Bitrix24
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              CRM, proje yönetimi ve iletişimi tek platformda
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
            Bitrix24, CRM, proje yönetimi ve iletişimi tek platformda sunar. KOBİ'ler için 
            uygun, kapsamlı iş yönetimi çözümüdür.
          </p>
        </div>

        {/* Novagraph ile İş Birliği */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile İş Birliği</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Bitrix24 ile müşterilerimize iş süreçlerini dijitalleştirme ve ekip 
            verimliliğini artırma fırsatı sunuyoruz.
          </p>
        </div>

        {/* Temel Özellikler */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Temel Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">CRM yönetimi</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Görev ve proje yönetimi</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Dahili iletişim araçları</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Raporlama ve analiz</span>
            </div>
          </div>
        </div>

        {/* Kullanım Alanları */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kullanım Alanları</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            KOBİ'ler, satış ve destek ekipleri.
          </p>
        </div>

        {/* Novagraph ile Entegrasyon */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novagraph ile Entegrasyon</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kurulum, özelleştirme ve eğitim hizmetleri.
          </p>
        </div>

        {/* SSS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular (SSS)</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Bitrix24 özellikleri ve lisanslama.
          </p>
        </div>

        {/* İletişim */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İletişim</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Novagraph Bitrix24 destek.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            İletişime Geçin
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bitrix24 ile İş Süreçlerinizi Dijitalleştirin
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Profesyonel Bitrix24 kurulum ve eğitim hizmetleri için Novagraph ile iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ücretsiz Danışmanlık
              </Link>
              <a
                href="https://bitrix24.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Bitrix24'ü Ziyaret Et
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
