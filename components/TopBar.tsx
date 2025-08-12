"use client"

import { Phone } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"
// import { useServerCountdown } from "@/hooks/useServerCountdown" // Removed to prevent infinite re-renders
import { useState, useEffect } from "react"

export const TopBar = () => {
  // const { timeLeft, isLoading, error } = useServerCountdown() // Removed to prevent infinite re-renders
  const { openForm } = useContactForm()
  const [showDiscount, setShowDiscount] = useState(false)

  useEffect(() => {
    // Sayfa yüklendiğinde 1 saniye sonra animasyonu başlat
    const timer = setTimeout(() => {
      setShowDiscount(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Problematic interval useEffect removed - this was causing infinite re-renders

  // console.log('TopBar render - showDiscount:', showDiscount) // Removed to reduce console noise

  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white border-b border-blue-500 z-[80] relative">
      <div className="container flex h-12 sm:h-14 items-center justify-between">
        {/* Sol Taraf - Promosyon Metni ve Zaman Sayacı */}
        <div className="flex items-center space-x-6 flex-1 min-w-0">
          {/* Promosyon Metni */}
          <div className="flex items-center space-x-2">
            <span className="text-sm">🎉</span>
            <span className="text-sm font-medium whitespace-nowrap hidden sm:inline">
              Özel Tasarım Web Sitelerinde %30 İndirim
            </span>
            
            {/* Mobil Animasyonlu Metin */}
            <div className="sm:hidden">
              {showDiscount ? (
                <span className="text-sm font-medium">Sınırlı Süre Geçerli %30 İndirim</span>
              ) : (
                <span className="text-sm font-medium">Özel Tasarım Web Sitelerinde</span>
              )}
            </div>
          </div>

          {/* Zaman Sayacı (Desktop) */}
          <div className="hidden xl:flex items-center space-x-2">
            {/* isLoading and error removed */}
            <>
              <div className="flex flex-col items-center space-y-0.5">
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-white border-opacity-20 shadow-sm">
                  <span className="text-xs font-bold">--</span>
                </div>
                <span className="text-xs text-blue-100">Gün</span>
              </div>
              <span className="text-white text-opacity-40">:</span>
              <div className="flex flex-col items-center space-y-0.5">
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-white border-opacity-20 shadow-sm">
                  <span className="text-xs font-bold">--</span>
                </div>
                <span className="text-xs text-blue-100">Saat</span>
              </div>
              <span className="text-white text-opacity-40">:</span>
              <div className="flex flex-col items-center space-y-0.5">
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-white border-opacity-20 shadow-sm">
                  <span className="text-xs font-bold">--</span>
                </div>
                <span className="text-xs text-blue-100">Dakika</span>
              </div>
              <span className="text-white text-opacity-40">:</span>
              <div className="flex flex-col items-center space-y-0.5">
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-white border-opacity-20 shadow-sm">
                  <span className="text-xs font-bold">--</span>
                </div>
                <span className="text-xs text-blue-100">Saniye</span>
              </div>
            </>
          </div>

          {/* Tablet - Kısa Geri Sayım */}
          <div className="hidden lg:flex xl:hidden items-center space-x-1.5">
            {/* isLoading and error removed */}
            <>
              <div className="flex flex-col items-center space-y-0.5">
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded px-1 py-0.5 min-w-[1.5rem] text-center border border-white border-opacity-20 shadow-sm">
                  <span className="text-xs font-bold">--</span>
                </div>
                <span className="text-xs text-blue-100">Gün</span>
              </div>
              <span className="text-white text-opacity-40">:</span>
              <div className="flex flex-col items-center space-y-0.5">
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded px-1 py-0.5 min-w-[1.5rem] text-center border border-white border-opacity-20 shadow-sm">
                  <span className="text-xs font-bold">--</span>
                </div>
                <span className="text-xs text-blue-100">Saat</span>
              </div>
              <span className="text-white text-opacity-40">:</span>
              <div className="flex flex-col items-center space-y-0.5">
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded px-1 py-0.5 min-w-[1.5rem] text-center border border-white border-opacity-20 shadow-sm">
                  <span className="text-xs font-bold">--</span>
                </div>
                <span className="text-xs text-blue-100">Dakika</span>
              </div>
            </>
          </div>
        </div>

        {/* Sağ Taraf - Telefon Numarası ve Sizi Arayalım */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium hidden sm:inline">0545 664 2302</span>
            <span className="text-white text-opacity-60">|</span>
            <button
              onClick={() => openForm("Sizi Arayalım")}
              className="flex items-center space-x-2 hover:text-blue-100 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Sizi Arayalım</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 