"use client"

import { useState, useEffect } from "react"
import { Phone } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"

export const TopBar = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const { openForm } = useContactForm()

  useEffect(() => {
    const STORAGE_KEY = "topbarEndsAt"
    let endsAt = 0
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) endsAt = parseInt(raw)
    } catch {}
    if (!endsAt || Number.isNaN(endsAt) || endsAt < Date.now()) {
      // 15 gün sonrası için ayarla
      endsAt = Date.now() + 15 * 24 * 60 * 60 * 1000
      try { localStorage.setItem(STORAGE_KEY, String(endsAt)) } catch {}
    }

    const tick = () => {
      const now = Date.now()
      const diff = Math.max(0, endsAt - now)
      const days = Math.floor(diff / (24 * 60 * 60 * 1000))
      const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
      const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000))
      const seconds = Math.floor((diff % (60 * 1000)) / 1000)
      setTimeLeft({ days, hours, minutes, seconds })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

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
            <span className="text-sm font-medium sm:hidden">
              %30 İndirim
            </span>
          </div>

          {/* Zaman Sayacı (Desktop) */}
          <div className="hidden xl:flex items-center space-x-2">
            <div className="flex flex-col items-center space-y-0.5">
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-white border-opacity-20 shadow-sm">
                <span className="text-xs font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-xs text-blue-100">Gün</span>
            </div>
            <span className="text-white text-opacity-40">:</span>
            <div className="flex flex-col items-center space-y-0.5">
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-white border-opacity-20 shadow-sm">
                <span className="text-xs font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-xs text-blue-100">Saat</span>
            </div>
            <span className="text-white text-opacity-40">:</span>
            <div className="flex flex-col items-center space-y-0.5">
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-white border-opacity-20 shadow-sm">
                <span className="text-xs font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-xs text-blue-100">Dakika</span>
            </div>
            <span className="text-white text-opacity-40">:</span>
            <div className="flex flex-col items-center space-y-0.5">
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-white border-opacity-20 shadow-sm">
                <span className="text-xs font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-xs text-blue-100">Saniye</span>
            </div>
          </div>

          {/* Tablet - Kısa Geri Sayım */}
          <div className="hidden lg:flex xl:hidden items-center space-x-1.5">
            <div className="flex flex-col items-center space-y-0.5">
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded px-1 py-0.5 min-w-[1.5rem] text-center border border-white border-opacity-20 shadow-sm">
                <span className="text-xs font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-xs text-blue-100">Gün</span>
            </div>
            <span className="text-white text-opacity-40">:</span>
            <div className="flex flex-col items-center space-y-0.5">
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded px-1 py-0.5 min-w-[1.5rem] text-center border border-white border-opacity-20 shadow-sm">
                <span className="text-xs font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-xs text-blue-100">Saat</span>
            </div>
            <span className="text-white text-opacity-40">:</span>
            <div className="flex flex-col items-center space-y-0.5">
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded px-1 py-0.5 min-w-[1.5rem] text-center border border-white border-opacity-20 shadow-sm">
                <span className="text-xs font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-xs text-blue-100">Dakika</span>
            </div>
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