"use client"

import { ArrowRight } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"

export const Hero = () => {
  const { openForm } = useContactForm()

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <span>Türkiye'nin En Güvenilir Dijital Partneri</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Dijital Dünyada{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Başarınızı
                </span>{" "}
                Büyütün
              </h1>
              <p className="text-xl lg:text-2xl text-blue-600 font-semibold">
                NovaGraph ile işletmenizi geleceğe taşıyın
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Web tasarım, siber güvenlik ve IT danışmanlık alanlarında uzman ekibimizle dijital dönüşümünüzü başlatın.
              7/24 destek ve %99.9 uptime garantisi ile yanınızdayız.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center group shadow-lg hover:shadow-xl flex-1 sm:flex-none"
                onClick={() => openForm()}
              >
                İletişime Geç
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center group flex-1 sm:flex-none"
              >
                Hizmetlerimizi Keşfedin
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Dashboard Mockup */}
            <div className="relative bg-white rounded-2xl shadow-lg p-6">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">N</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">NovaGraph Dashboard</div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="space-y-4">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">1.2 Milyon ₺</div>
                    <div className="text-sm text-blue-700">Aylık Ciro</div>
                    <div className="text-xs text-green-600 mt-1">↗ %23 artış</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-sm text-green-700">Güvenlik Skoru</div>
                    <div className="text-xs text-green-600 mt-1">✓ Korumalı</div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="bg-gray-50 rounded-lg p-4 h-32 relative overflow-hidden">
                  <div className="text-sm font-medium text-gray-700 mb-2">Trafik Analizi</div>
                  <svg className="w-full h-full" viewBox="0 0 300 80">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,60 Q75,40 150,30 T300,20 L300,80 L0,80 Z"
                      fill="url(#gradient)"
                      className="animate-pulse"
                    />
                    <path
                      d="M0,60 Q75,40 150,30 T300,20"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                    />
                  </svg>
                </div>

                {/* Activity List */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="text-sm text-gray-700">Web sitesi güncellendi</div>
                    <div className="text-xs text-gray-500 ml-auto">2 dk önce</div>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="text-sm text-gray-700">Yeni müşteri kaydı</div>
                    <div className="text-xs text-gray-500 ml-auto">5 dk önce</div>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="text-sm text-gray-700">Güvenlik taraması tamamlandı</div>
                    <div className="text-xs text-gray-500 ml-auto">10 dk önce</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 animate-spin-slow -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
