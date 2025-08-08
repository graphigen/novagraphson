"use client"
import { BarChart3, Mail, Shield, Monitor, TrendingUp, Target, Zap, Globe } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export const NovaGraphFeatures = () => {
  const chartRef = useRef(null)
  const isInView = useInView(chartRef, { once: true, margin: "-100px" })
  const [chartValue, setChartValue] = useState(500000)
  const [targetValue, setTargetValue] = useState(5)
  const [emailCount, setEmailCount] = useState(78240) // 156480 / 2
  const [whatsappCount, setWhatsappCount] = useState(44660) // 89320 / 2
  const [netProfit, setNetProfit] = useState(920000) // 1840000 / 2
  
  useEffect(() => {
    if (isInView) {
      // Chart value animation from 500k to 1.84m
      const chartInterval = setInterval(() => {
        setChartValue(prev => {
          if (prev >= 1840000) {
            clearInterval(chartInterval)
            return 1840000
          }
          return prev + 20000
        })
      }, 20)

      // Target value animation from +5% to +33%
      const targetInterval = setInterval(() => {
        setTargetValue(prev => {
          if (prev >= 33) {
            clearInterval(targetInterval)
            return 33
          }
          return prev + 0.5
        })
      }, 50)

      // Email count animation from 78240 to 156480
      const emailInterval = setInterval(() => {
        setEmailCount(prev => {
          if (prev >= 156480) {
            clearInterval(emailInterval)
            return 156480
          }
          return prev + 1500
        })
      }, 30)

      // WhatsApp count animation from 44660 to 89320
      const whatsappInterval = setInterval(() => {
        setWhatsappCount(prev => {
          if (prev >= 89320) {
            clearInterval(whatsappInterval)
            return 89320
          }
          return prev + 1000
        })
      }, 30)

      // Net profit animation from 920000 to 1840000
      const profitInterval = setInterval(() => {
        setNetProfit(prev => {
          if (prev >= 1840000) {
            clearInterval(profitInterval)
            return 1840000
          }
          return prev + 20000
        })
      }, 20)

      return () => {
        clearInterval(chartInterval)
        clearInterval(targetInterval)
        clearInterval(emailInterval)
        clearInterval(whatsappInterval)
        clearInterval(profitInterval)
      }
    }
  }, [isInView])
  
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Digital Marketing Automation */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Dijital Otomasyon</h3>
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-gray-600 mb-8">
              Pazarlama sürecinizi otomatikleştirin. E-posta, SMS ve sosyal medya kampanyalarınızı tek yerden yönetin.
            </p>

            {/* Automation Visual */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg text-sm font-medium">
                  Sadık Müşteriler
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium">E-Posta Gönder</div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium">
                  %20 İndirim Tanımla
                </div>
              </div>

              <div className="flex items-center justify-center mt-6">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-gray-400">+</span>
                </div>
              </div>

              <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <div className="w-full h-8 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>

          {/* Customer Segmentation */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Müşteri Segmentasyonu</h3>
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-gray-600 mb-8">
              NovaGraph ile kârlı müşteri gruplarını kolayca bulun. Kişiselleştirilmiş kampanyalarla gelirinizi artırın.
            </p>

            {/* Segmentation Visual */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Sepette Ürün Bırakanlar</span>
                <Globe className="w-4 h-4 text-gray-400" />
              </div>

              {/* User Avatars Grid */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full ${
                      i % 4 === 0
                        ? "bg-blue-400"
                        : i % 4 === 1
                          ? "bg-green-400"
                          : i % 4 === 2
                            ? "bg-blue-400"
                            : "bg-blue-300"
                    }`}
                  ></div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-sm font-medium text-gray-900 mb-1">Kampanya Getirisi</div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-gray-900">45.280 ₺</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">%35</span>
                </div>
              </div>
            </div>
          </div>

          {/* IT Security & Monitoring */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">IT Güvenlik & İzleme</h3>
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-gray-600 mb-8">
              NovaGraph ile yüksek güvenlik sağlayan sistemler kurun. 7/24 izleme ve anında müdahale hizmeti.
            </p>

            {/* Security Dashboard Mockup */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Sistem Durumu</span>
                </div>
                <span className="text-xs text-gray-500">şimdi</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Firewall Koruması</span>
                  <span className="text-sm font-medium text-green-600">Aktif</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">VPN Bağlantıları</span>
                  <span className="text-sm font-medium text-blue-600">24/47</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Tehdit Engellendi</span>
                  <span className="text-sm font-medium text-red-600">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">DDoS Koruması</span>
                  <span className="text-sm font-medium text-green-600">Aktif</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Backup Durumu</span>
                  <span className="text-sm font-medium text-green-600">Güncel</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Şüpheli Aktivite</span>
                  <span className="text-sm font-medium text-orange-600">3 Uyarı</span>
                </div>
              </div>

              <div className="mt-4 bg-green-50 rounded-lg p-3">
                <div className="text-xs text-green-700 font-medium">✓ Tüm sistemler güvenli</div>
              </div>
            </div>
          </div>

          {/* Web Analytics & Performance */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Web Analitik & Performans</h3>
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-gray-600 mb-8">
              NovaGraph ile etkili web analitik raporları oluşturun ve sitenizin performansını artırın.
            </p>

            {/* Analytics Dashboard Mockup */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-center mb-4">
                <div className="text-lg font-bold text-gray-900 mb-2">NovaGraph Analytics</div>
                <div className="text-sm text-gray-600">Gerçek Zamanlı Performans</div>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-500 rounded-lg p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm opacity-90">Trafik Artışı</span>
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-bold">%85</div>
                  <div className="text-xs opacity-75">Son 30 gün</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-700">2.4K</div>
                    <div className="text-xs text-green-600">Yeni Ziyaretçi</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-700">%12</div>
                    <div className="text-xs text-blue-600">Dönüşüm Oranı</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Dashboard Section - COMPLETELY REDESIGNED */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">N</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">NovaGraph Analitik</h2>
            </div>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              NovaGraph ile Dijital Pazarlama ve IT Güvenliğini tek ekranda yönetin, bütünleşik analitiğin gücünü
              keşfedin!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Revenue Chart - PROFESSIONAL REDESIGN */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                <div className="text-xs md:text-sm text-gray-500 mb-2">Dijital Pazarlamadan Gelen Ciro</div>
                <div className="text-2xl md:text-4xl font-bold text-gray-900">
                    {chartValue >= 1000000 ? `${(chartValue / 1000000).toFixed(1)} Milyon ₺` : `${(chartValue / 1000).toFixed(0)} Bin ₺`}
                  </div>
                <div className="flex items-center mt-1 md:mt-2">
                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-1" />
                  <span className="text-xs md:text-sm text-green-600 font-medium">+268% 6 aylık</span>
                  </div>
                </div>
              <div className="bg-blue-50 rounded-xl p-3 md:p-4">
                <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
              </div>

              {/* Professional Chart Area */}
            <div className="relative h-60 md:h-80 mb-4 md:mb-6" ref={chartRef}>
                {/* Chart Background */}
                <div className="absolute inset-0 bg-gray-50 rounded-xl">
                  {/* Grid Lines */}
                  <svg className="w-full h-full" viewBox="0 0 600 320">
                    <defs>
                      <pattern id="professionalGrid" width="60" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#professionalGrid)" />

                    {/* Horizontal Grid Lines */}
                    <line x1="40" y1="60" x2="560" y2="60" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="40" y1="120" x2="560" y2="120" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="40" y1="180" x2="560" y2="180" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="40" y1="240" x2="560" y2="240" stroke="#e5e7eb" strokeWidth="1" />

                    {/* Y-axis Labels */}
                    <text x="30" y="65" fontSize="12" fill="#6b7280" textAnchor="end">
                      2.0 Milyon ₺
                    </text>
                    <text x="30" y="125" fontSize="12" fill="#6b7280" textAnchor="end">
                      1.840.000 ₺
                    </text>
                    <text x="30" y="185" fontSize="12" fill="#6b7280" textAnchor="end">
                      1.0 Milyon ₺
                    </text>
                    <text x="30" y="245" fontSize="12" fill="#6b7280" textAnchor="end">
                      500 Bin ₺
                    </text>

                    {/* X-axis Labels */}
                    <text x="100" y="310" fontSize="12" fill="#6b7280" textAnchor="middle">
                      Oca
                    </text>
                    <text x="180" y="310" fontSize="12" fill="#6b7280" textAnchor="middle">
                      Şub
                    </text>
                    <text x="260" y="310" fontSize="12" fill="#6b7280" textAnchor="middle">
                      Mar
                    </text>
                    <text x="340" y="310" fontSize="12" fill="#6b7280" textAnchor="middle">
                      Nis
                    </text>
                    <text x="420" y="310" fontSize="12" fill="#6b7280" textAnchor="middle">
                      May
                    </text>
                    <text x="500" y="310" fontSize="12" fill="#6b7280" textAnchor="middle">
                      Haz
                    </text>
                  </svg>
                </div>

                {/* Main Chart */}
                <svg className="w-full h-full relative z-10" viewBox="0 0 600 320">
                  <defs>
                    <linearGradient id="professionalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                    </linearGradient>
                    <filter id="professionalGlow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Area Chart */}
                  <path
                    d="M40,260 Q100,240 140,220 T220,180 Q280,140 340,100 T460,60 Q520,40 560,35 L560,280 L40,280 Z"
                    fill="url(#professionalGradient)"
                    style={{
                      opacity: isInView ? 1 : 0,
                      transition: "opacity 1s ease-in-out"
                    }}
                  />

                  {/* Main Line - Animated */}
                  <path
                    d="M40,260 Q100,240 140,220 T220,180 Q280,140 340,100 T460,60 Q520,40 560,35"
                    stroke="#3b82f6"
                    strokeWidth="4"
                    fill="none"
                    filter="url(#professionalGlow)"
                    style={{
                      strokeDasharray: isInView ? "none" : "1000",
                      strokeDashoffset: isInView ? 0 : 1000,
                      transition: "stroke-dashoffset 2s ease-in-out"
                    }}
                  />
                </svg>

                {/* Performance Indicators - Repositioned */}
                <div className="absolute top-3 right-3 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5 shadow-lg z-20">
                  <div className="text-[11px] md:text-xs text-green-600 font-medium">Hedef Aşıldı</div>
                  <div className="text-sm md:text-lg font-bold text-green-700">+{targetValue.toFixed(0)}%</div>
                </div>

                <div className="absolute bottom-3 left-3 bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5 shadow-lg z-20">
                  <div className="text-[11px] md:text-xs text-blue-600 font-medium">Trend Analizi</div>
                  <div className="text-xs md:text-sm font-bold text-blue-700">Güçlü Yükseliş</div>
                </div>
              </div>

              {/* Chart Legend */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t pt-3 md:pt-4 gap-2 md:gap-0">
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full"></div>
                    <span className="text-xs md:text-sm text-gray-600">Dijital Pazarlama Geliri</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full"></div>
                    <span className="text-xs md:text-sm text-gray-600">Hedef</span>
                  </div>
                </div>
                <div className="text-xs md:text-sm text-gray-500">Son 6 Ay Performansı</div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="space-y-4 md:space-y-6">
              {/* Email Stats */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-white">E-Posta Kampanyaları</span>
                </div>
                <div>
                  <div className="text-xs md:text-sm text-blue-200 mb-1">Toplam Gönderim</div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{emailCount.toLocaleString('tr-TR')}</div>
                  <div className="text-[11px] md:text-xs text-green-400 mt-1">+18% bu ay</div>
                </div>
              </div>

              {/* WhatsApp Marketing Stats */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">W</span>
                  </div>
                  <span className="text-xs md:text-sm font-medium text-white">WhatsApp Pazarlama</span>
                </div>
                <div>
                  <div className="text-xs md:text-sm text-blue-200 mb-1">Toplam Mesaj</div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{whatsappCount.toLocaleString('tr-TR')}</div>
                  <div className="text-[11px] md:text-xs text-green-400 mt-1">+32% bu ay</div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                <div className="text-xs md:text-sm font-medium mb-3 md:mb-4 text-white">Kampanya Performansı</div>
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                      <span className="text-[11px] md:text-xs text-blue-200">ROI</span>
                    </div>
                    <div className="text-lg md:text-xl font-bold text-white">24x</div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Monitor className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                      <span className="text-[11px] md:text-xs text-blue-200">Maliyet</span>
                    </div>
                    <div className="text-lg md:text-xl font-bold text-white">80.000 ₺</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs md:text-sm text-blue-200">Net Kazanç</span>
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-[11px] md:text-xs text-white">₺</span>
                    </div>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white">{netProfit.toLocaleString('tr-TR')} ₺</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
