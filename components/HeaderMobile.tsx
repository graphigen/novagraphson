"use client"

import React, { useState, useCallback } from "react"
import Link from "next/link"
import { Menu, ChevronRight, Globe, Home, Users, MessageSquare, ArrowLeft, ArrowRight } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { LogoMobile } from "@/components/LogoMobile"
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useContactForm } from "@/contexts/ContactFormContext"

export const HeaderMobile: React.FC = () => {
  const { openForm } = useContactForm()
  const [query, setQuery] = useState("")
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null)
  const activeGroup = null // Basit çözüm - solutionGroups kaldırıldı

  const handleSearchSubmit = useCallback(() => {
    if (!query.trim()) return
    window.location.href = `#search?q=${encodeURIComponent(query.trim())}`
  }, [query])

  return (
    <div className="md:hidden flex w-full items-center justify-between">
      <Link href="/" className="flex items-center">
        <LogoMobile />
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <button
            aria-label="Menüyü aç"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>

        <SheetContent side="right" aria-label="Mobil Menü" className="w-[86vw] max-w-sm bg-white text-gray-900 p-0">
          {/* Erişilebilirlik için görünmez başlık */}
          <SheetHeader>
            <SheetTitle className="sr-only">Mobil Menü</SheetTitle>
          </SheetHeader>
          {/* Başlık */}
          <div className="px-5 pr-14 pt-4 pb-3 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-gray-100 ring-1 ring-gray-200 flex items-center justify-center">
                  <span className="text-[11px] font-semibold text-blue-700">NG</span>
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-gray-900">NovaGraph</div>
                  <div className="text-[11px] text-gray-500">Menü</div>
                </div>
              </div>
              {/* Sağ alan boş bırakıldı (Close butonu için yer) */}
              <div className="w-10" />
            </div>
          </div>

          {/* Links */}
          <nav className="px-3 py-3 space-y-3">
            {/* Hızlı Erişim - Kartlar (Ana sayfa, Referanslar, İletişim) */}
            <div className="grid grid-cols-3 gap-2">
              <SheetClose asChild>
                <Link href="/" className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white py-3 hover:bg-gray-50 active:bg-gray-100 shadow-sm">
                  <Home className="h-5 w-5 text-blue-600" />
                  <span className="mt-1 text-xs font-medium text-gray-700">Ana Sayfa</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/referanslar" className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white py-3 hover:bg-gray-50 active:bg-gray-100 shadow-sm">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="mt-1 text-xs font-medium text-gray-700">Referanslar</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/iletisim" className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white py-3 hover:bg-gray-50 active:bg-gray-100 shadow-sm">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <span className="mt-1 text-xs font-medium text-gray-700">İletişim</span>
                </Link>
              </SheetClose>
            </div>

            {/* Genel - tek satırlık satır elemanlar */}
            <div className="pb-1">
              <div className="px-1.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-500">Genel</div>
              <ul className="divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white overflow-hidden">
                <li>
                  <SheetClose asChild>
                    <Link href="/sunucu" className="flex items-center justify-between px-3.5 py-3 text-[15px] leading-5 hover:bg-gray-50 active:bg-gray-100">
                      <span className="font-medium">Sunucu</span>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <button onClick={() => setActiveGroupId("digital")} className="w-full flex items-center justify-between px-3.5 py-3 text-[15px] leading-5 hover:bg-gray-50 active:bg-gray-100">
                    <span className="font-medium">Dijital Çözümler</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveGroupId("it-security")} className="w-full flex items-center justify-between px-3.5 py-3 text-[15px] leading-5 hover:bg-gray-50 active:bg-gray-100">
                    <span className="font-medium">IT & Güvenlik Çözümleri</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                </li>
              </ul>
            </div>


            {/* alt grid başka içerikler istenirse burada tanımlanabilir */}
          </nav>

          {/* Alt menü paneli (drill-in) */}
          {activeGroup && (
            <div className="absolute inset-0 bg-white z-[101] flex flex-col">
              <div className="px-3 py-3 border-b border-gray-200 flex items-center gap-2">
                <button onClick={() => setActiveGroupId(null)} className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200" aria-label="Geri">
                  <ArrowLeft className="h-5 w-5 text-gray-600" />
                </button>
                <div className="text-[15px] font-semibold">{activeGroup.title}</div>
              </div>
              <div className="p-3">
                <ul className="grid grid-cols-1 gap-2">
                  {activeGroup.services.map((service) => (
                    <li key={service.name}>
                      <SheetClose asChild>
                        <Link
                          href={service.href}
                          className="flex items-center justify-between rounded-xl px-3.5 py-3.5 text-[15px] leading-5 text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 active:bg-gray-100 shadow-sm"
                        >
                          <span className="flex items-center gap-3">
                            <span className="h-9 w-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                              <service.icon className="h-[18px] w-[18px]" />
                            </span>
                            <span className="font-medium">{service.name}</span>
                          </span>
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Dil ve Arama - CTA alanının yerinde */}
          <div className="mt-1 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 border-t border-gray-100 bg-white/80 supports-[backdrop-filter]:backdrop-blur">
            {/* Dil Seçimi - modern dropdown */}
            <div className="inline-flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-[13px] shadow-sm hover:bg-gray-50">
                    <Globe className="h-4 w-4 text-gray-600" />
                    <span className="font-medium text-gray-800">{language === "tr" ? "Türkçe" : "English"}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 rounded-xl">
                  <DropdownMenuItem onSelect={() => setLanguage("tr")}> 
                    <span className="mr-2 inline-flex h-5 w-5 items-center justify-center overflow-hidden rounded-sm">
                      <svg viewBox="0 0 24 16" className="w-5 h-5"><rect width="24" height="16" fill="#E30A17"/><circle cx="10" cy="8" r="3" fill="#ffffff"/><polygon points="12,8 13,8.5 12,9 11,8.5" fill="#ffffff"/></svg>
                    </span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-medium text-gray-900">Türkçe</span>
                      <span className="text-xs text-gray-500">Turkish</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setLanguage("en")}>
                    <span className="mr-2 inline-flex h-5 w-5 items-center justify-center overflow-hidden rounded-sm">
                      <svg viewBox="0 0 24 16" className="w-5 h-5"><rect width="24" height="16" fill="#012169"/><path d="M0,0 L24,16 M24,0 L0,16" stroke="#ffffff" strokeWidth="2"/><path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" strokeWidth="1"/><path d="M12,0 L12,16 M0,8 L24,8" stroke="#ffffff" strokeWidth="3"/><path d="M12,0 L12,16 M0,8 L24,8" stroke="#C8102E" strokeWidth="1.5"/></svg>
                    </span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-medium text-gray-900">English</span>
                      <span className="text-xs text-gray-500">İngilizce</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* CTA: Pazarlama Stratejisi (mobil uyumlu) */}
            <div className="mt-3">
              <div className="rounded-xl border border-green-200 bg-gradient-to-br from-emerald-50 to-green-50 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-2 py-1 text-[11px] font-bold rounded-full bg-green-100 text-green-800">Ücretsiz</span>
                  <span className="inline-flex items-center px-2 py-1 text-[11px] font-bold limited-badge-anim">Sınırlı Süre</span>
                </div>
                <div className="mb-1">
                  <div className="text-[15px] font-semibold text-gray-900">Pazarlama Stratejisi</div>
                  <p className="text-[12px] text-gray-700 leading-snug mt-1">
                    Kısa bir başvuru ile işletmeniz için uygun kanallar ve bütçe dağılımını içeren ön analiz alın.
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs text-gray-400 line-through">14.000 ₺</span>
                  <span className="text-[10px] text-gray-400">→</span>
                  <span className="text-base font-bold text-green-700">0 ₺</span>
                </div>
                <div className="mt-2">
                  <Countdown15d />
                </div>
                <div className="mt-3">
                  <SheetClose asChild>
                    <Link
                      href="/pazarlama-strateji-basvurusu"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm hover:bg-green-700"
                    >
                      Hemen Başvur
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </div>

            {/* Arama kaldırıldı */}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default HeaderMobile


function Countdown15d() {
  const totalMs = 15 * 24 * 60 * 60 * 1000
  const STORAGE_KEY = "promoCycleStart"
  const [remaining, setRemaining] = useState<number>(totalMs)

  React.useEffect(() => {
    let start = 0
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) start = parseInt(raw)
    } catch {}
    if (!start || Number.isNaN(start)) {
      start = Date.now()
      try { localStorage.setItem(STORAGE_KEY, String(start)) } catch {}
    }

    const tick = () => {
      const now = Date.now()
      const elapsed = now - start
      const rem = totalMs - (elapsed % totalMs)
      setRemaining(rem)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const days = Math.floor(remaining / (24 * 60 * 60 * 1000))
  const hours = Math.floor((remaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
  const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000))
  const seconds = Math.floor((remaining % (60 * 1000)) / 1000)

  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <div className="flex items-center gap-1 text-green-900">
      <div className="flex flex-col items-center">
        <div className="bg-white/70 rounded px-1 py-0.5 min-w-[1.5rem] text-center border border-green-200">
          <span className="text-[11px] font-bold tabular-nums">{String(days).padStart(2, '0')}</span>
        </div>
        <span className="text-[9px] text-green-800">Gün</span>
      </div>
      <span className="text-green-700/50">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-white/70 rounded px-1 py-0.5 min-w-[1.5rem] text-center border border-green-200">
          <span className="text-[11px] font-bold tabular-nums">{pad(hours)}</span>
        </div>
        <span className="text-[9px] text-green-800">Saat</span>
      </div>
      <span className="text-green-700/50">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-white/70 rounded px-1 py-0.5 min-w-[1.5rem] text-center border border-green-200">
          <span className="text-[11px] font-bold tabular-nums">{pad(minutes)}</span>
        </div>
        <span className="text-[9px] text-green-800">Dakika</span>
      </div>
      <span className="text-green-700/50">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-white/70 rounded px-1 py-0.5 min-w-[1.5rem] text-center border border-green-200">
          <span className="text-[11px] font-bold tabular-nums">{pad(seconds)}</span>
        </div>
        <span className="text-[9px] text-green-800">Saniye</span>
      </div>
    </div>
  )
}

