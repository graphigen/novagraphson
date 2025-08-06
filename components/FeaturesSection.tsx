"use client"

import { ArrowRight, Globe, Headphones, TrendingUp } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"

export const FeaturesSection = () => {
  const { openForm } = useContactForm()

  return (
    <section className="py-16 lg:py-24 bg-gray-50" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 id="features-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benzersiz Avantajlar
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              NovaGraph'ta beklenmedik ücretler yok. Sınırsız destek, dijital büyüme ve IT güvenliği ile hiçbir ek ücret
              ödemeden tüm dünyaya hizmet verin.
            </p>
          </div>
          <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center group shadow-lg hover:shadow-xl"
                onClick={() => openForm()}
                aria-label="İletişime geçmek için tıklayın"
              >
                İletişime Geç
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 - Global Reach */}
          <article className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sınırsız Dijital Büyüme</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sınırsız web trafiği ve dijital pazarlama desteğiyle satış yapın, büyüyün ve tüm dünyaya ulaşın.
                </p>
              </div>

              {/* Visual Mockup */}
              <div className="relative bg-gray-50 rounded-xl p-4 sm:p-6 h-40 sm:h-48" role="img" aria-label="Dijital büyüme görseli">
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white rounded-lg shadow-sm p-2 sm:p-3">
                  <div className="w-12 sm:w-16 h-8 sm:h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded mb-1 sm:mb-2"></div>
                  <div className="text-xs font-medium text-gray-900">Web Sitesi</div>
                </div>

                {/* Globe/Network Visualization */}
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4">
                  <div className="relative">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 border-2 border-blue-200 rounded-full flex items-center justify-center">
                      <Globe className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 sm:w-6 h-4 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-2 sm:w-3 h-2 sm:h-3 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150" aria-hidden="true">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <path d="M60,40 Q120,20 160,120" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                  <circle cx="60" cy="40" r="3" fill="#3B82F6" />
                  <circle cx="160" cy="120" r="3" fill="#10B981" />
                </svg>
              </div>
            </div>
          </article>

          {/* Feature 2 - 24/7 Support */}
          <article className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7/24 Teknik Destek</h3>
                <p className="text-gray-600 leading-relaxed">
                  Türkiye'nin en yüksek müşteri memnuniyetine sahip dijital ajansı her zaman yanınızda.
                </p>
              </div>

              {/* Support Chat Mockup */}
              <div
                className="relative bg-gray-50 rounded-xl p-4 sm:p-6 h-40 sm:h-48"
                role="img"
                aria-label="Teknik destek sohbet görseli"
              >
                <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 mb-3 sm:mb-4">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <Headphones className="w-3 sm:w-4 h-3 sm:h-4 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-gray-900">NovaGraph Destek</div>
                      <div className="text-xs text-green-600">● Çevrimiçi</div>
                    </div>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="bg-blue-50 rounded-lg p-1 sm:p-2">
                      <div className="text-xs text-gray-700">Merhaba! Size nasıl yardımcı olabilirim?</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-1 sm:p-2 ml-2 sm:ml-4">
                      <div className="text-xs text-gray-700">Web sitemi güncellemek istiyorum</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex items-center space-x-1 sm:space-x-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-xs text-gray-500">Yanıtlanıyor...</div>
                </div>
              </div>
            </div>
          </article>

          {/* Feature 3 - Easy Migration */}
          <article className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Geçişi Dert Etmeyin</h3>
                <p className="text-gray-600 leading-relaxed">
                  Başka bir ajansdan NovaGraph'a geçmek istediğinizde, destek ekibimiz sizinle beraber.
                </p>
              </div>

              {/* Migration Visual */}
              <div
                className="relative bg-gray-50 rounded-xl p-4 sm:p-6 h-40 sm:h-48 flex items-center justify-center"
                role="img"
                aria-label="Kolay geçiş süreci görseli"
              >
                <div className="relative flex items-center justify-center w-full">
                  {/* Old System */}
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gray-300 rounded-lg flex items-center justify-center opacity-50">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gray-400 rounded"></div>
                  </div>

                  {/* Arrow */}
                  <div className="mx-4 sm:mx-8">
                    <ArrowRight className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" aria-hidden="true" />
                  </div>

                  {/* New System */}
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white rounded flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xs sm:text-sm">N</span>
                    </div>
                  </div>

                  {/* Success Indicator */}
                  <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    ✓ Sorunsuz Geçiş
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
