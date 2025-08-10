"use client"
import { ArrowRight, X } from "lucide-react"
import React from "react"

import Link from "next/link"
import { useContactForm } from "@/contexts/ContactFormContext"
import { solutionGroups as groups } from "@/lib/solutions"
import { useServerCountdown } from "@/hooks/useServerCountdown"

type SolutionGroup = typeof groups[number]

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
  activeSolutionGroup: string
  setActiveSolutionGroup: (groupId: string) => void
}

const MegaMenu = ({ isOpen, onClose, activeSolutionGroup, setActiveSolutionGroup }: MegaMenuProps) => {
  const { openForm } = useContactForm()
  
  const solutionGroups = groups

  const activeGroup = solutionGroups.find((group) => group.id === activeSolutionGroup) || solutionGroups[0]

  const handleServiceClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      window.location.href = href
    }
    onClose()
  }

  // Escape close for mobile (scroll lock is handled by the opener panel)
  React.useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Desktop Mega Menu - Full Width Fixed */}
      <div className="hidden lg:block">
        <div className="w-screen bg-white shadow-2xl border-t border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Left Column - Solution Groups */}
              <div className="col-span-3">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Çözüm Grupları</h3>
                <div className="space-y-3">
                  {solutionGroups.map((group) => (
                    <div
                      key={group.id}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                        activeSolutionGroup === group.id
                          ? "bg-blue-50 border border-blue-200 shadow-sm"
                          : "bg-gray-50 hover:bg-white hover:border hover:border-gray-200 hover:shadow-sm"
                      }`}
                      onMouseEnter={() => setActiveSolutionGroup(group.id)}
                      onClick={() => setActiveSolutionGroup(group.id)}
                    >
                      <h4
                        className={`font-semibold mb-2 ${
                          activeSolutionGroup === group.id ? "text-blue-700" : "text-gray-900"
                        }`}
                      >
                        {group.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{group.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle Column - Services */}
              <div className="col-span-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">{activeGroup?.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {activeGroup?.services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleServiceClick(service.href)}
                      className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-200 text-left w-full border border-transparent hover:border-blue-100"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <service.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-700 group-hover:text-blue-700 font-medium transition-colors">
                          {service.name}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    </button>
                  ))}
                </div>

                {/* Bottom Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
                    <Link
                      href="/iletisim"
                      className="flex items-center space-x-2 hover:text-blue-600 transition-colors group"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">Sizi Arayalım</span>
                    </Link>
                    <div className="w-px h-6 bg-gray-300"></div>
                    <button
                      onClick={() => handleServiceClick("/hakkimizda")}
                      className="flex items-center space-x-2 hover:text-blue-600 transition-colors group"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">Hakkımızda</span>
                    </button>
                    <div className="w-px h-6 bg-gray-300"></div>
                    <button
                      onClick={() => handleServiceClick("#novaxcore")}
                      className="flex items-center space-x-2 hover:text-blue-600 transition-colors group"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">NovaXCore</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - CTA */}
              <div className="col-span-3">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 h-full border border-green-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-2 py-1 text-xs font-bold rounded-full bg-green-100 text-green-800">Ücretsiz</span>
                    <LimitedTimeBadge />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pazarlama Stratejisi</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    İşletmeniz için en uygun dijital kanalları ve bütçe dağılımını içeren ön analiz. Başvurun,
                    48 saat içinde size özel bir plan önerelim.
                  </p>

                  {/* Price line */}
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-sm text-gray-400 line-through">14.000 ₺</span>
                    <span className="text-xs text-gray-400">→</span>
                    <span className="text-lg font-bold text-green-700">0 ₺</span>
                  </div>
                  {/* Countdown above button */}
                  <div className="mt-2">
                    <CountdownBadge />
                  </div>

                  <div className="space-y-3 mt-3">
                    <button
                      className="w-full bg-green-600 text-white rounded-xl px-6 py-3 font-semibold hover:bg-green-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                      onClick={() => handleServiceClick("/pazarlama-strateji-basvurusu")}
                    >
                      Hemen Başvur
                      <ArrowRight className="inline-block w-4 h-4 ml-2" />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Mega Menu removed */}
    </>
  )
}

export default MegaMenu

function CountdownBadge() {
  const { timeLeft, isLoading, error } = useServerCountdown()

  if (isLoading) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-green-900">
          <div className="flex flex-col items-center">
            <div className="bg-white/70 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-green-200 shadow-sm">
              <span className="text-xs font-bold tabular-nums">--</span>
            </div>
            <span className="text-[10px] text-green-800">Gün</span>
          </div>
          <span className="text-green-700/50">:</span>
          <div className="flex flex-col items-center">
            <div className="bg-white/70 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-green-200 shadow-sm">
              <span className="text-xs font-bold tabular-nums">--</span>
            </div>
            <span className="text-[10px] text-green-800">Saat</span>
          </div>
          <span className="text-green-700/50">:</span>
          <div className="flex flex-col items-center">
            <div className="bg-white/70 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-green-200 shadow-sm">
              <span className="text-xs font-bold tabular-nums">--</span>
            </div>
            <span className="text-[10px] text-green-800">Dakika</span>
          </div>
          <span className="text-green-700/50">:</span>
          <div className="flex flex-col items-center">
            <div className="bg-white/70 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-green-200 shadow-sm">
              <span className="text-xs font-bold tabular-nums">--</span>
            </div>
            <span className="text-[10px] text-green-800">Saniye</span>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-600 text-xs">
        Sayaç yüklenemedi
      </div>
    )
  }

  const { days, hours, minutes, seconds } = timeLeft

  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-green-900">
        <div className="flex flex-col items-center">
          <div className="bg-white/70 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-green-200 shadow-sm">
            <span className="text-xs font-bold tabular-nums">{String(days).padStart(2, '0')}</span>
          </div>
          <span className="text-[10px] text-green-800">Gün</span>
        </div>
        <span className="text-green-700/50">:</span>
        <div className="flex flex-col items-center">
          <div className="bg-white/70 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-green-200 shadow-sm">
            <span className="text-xs font-bold tabular-nums">{pad(hours)}</span>
          </div>
          <span className="text-[10px] text-green-800">Saat</span>
        </div>
        <span className="text-green-700/50">:</span>
        <div className="flex flex-col items-center">
          <div className="bg-white/70 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-green-200 shadow-sm">
            <span className="text-xs font-bold tabular-nums">{pad(minutes)}</span>
          </div>
          <span className="text-[10px] text-green-800">Dakika</span>
        </div>
        <span className="text-green-700/50">:</span>
        <div className="flex flex-col items-center">
          <div className="bg-white/70 backdrop-blur-sm rounded px-1.5 py-0.5 min-w-[1.75rem] text-center border border-green-200 shadow-sm">
            <span className="text-xs font-bold tabular-nums">{pad(seconds)}</span>
          </div>
          <span className="text-[10px] text-green-800">Saniye</span>
        </div>
      </div>
    </div>
  )
}

function LimitedTimeBadge() {
  // Sınırlı Süre rozeti: yavaş yavaş yanıp sönen animasyon
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs font-bold limited-badge-anim">
      Sınırlı Süre
    </span>
  )
}
