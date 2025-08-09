"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Menu, X, Search, Phone, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { LogoMobile } from "@/components/LogoMobile"
import { solutionGroups } from "@/lib/solutions"
import MegaMenu from "@/components/MegaMenu"

type Language = "en" | "tr"

export const HeaderMobile = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { language, setLanguage, t } = useLanguage()
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [activeSolutionGroup, setActiveSolutionGroup] = useState(
    "digital" as "digital" | "it-security"
  )

  const toggleMobileMenu = () => {
    // Ensure solutions mega menu is not open at the same time
    setIsSolutionsOpen(false)
    setIsMobileMenuOpen((v) => !v)
  }
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `#search?q=${encodeURIComponent(searchQuery)}`
      setIsSearchOpen(false)
      setSearchQuery("")
      closeMobileMenu()
    }
  }

  // Prevent background scroll when menu open & close on Escape
  useEffect(() => {
    const prev = document.body.style.overflow
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = prev || ""
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isMobileMenuOpen])

  return (
    <div className="md:hidden flex w-full items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3" aria-label="Ana sayfa">
        <LogoMobile />
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
        aria-label="Menüyü aç"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu-panel"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu Overlay (Full-screen) */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-panel"
          className="fixed inset-0 z-[70] bg-white animate-in fade-in pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil menü"
          onClick={closeMobileMenu}
        >
          <div className="flex flex-col h-full" onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-[71] pt-[env(safe-area-inset-top)]">
                <h2 className="text-lg font-bold text-gray-900">Menü</h2>
                <button onClick={closeMobileMenu} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100" aria-label="Menüyü kapat">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search */}
              <div className="p-6 border-b border-gray-200">
                <form onSubmit={handleSearchSubmit} className="space-y-3">
                  <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Arama yapın..."
                      value={searchQuery}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-gray-500"
                    />
                  </div>
                  {searchQuery.trim() && (
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors font-medium">
                      Ara
                    </button>
                  )}
                </form>
              </div>

              {/* Navigation (mirror desktop main menu) */}
              <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                <button
                  onClick={() => {
                    // Close the primary mobile panel first, then open solutions
                    closeMobileMenu()
                    setActiveSolutionGroup("digital")
                    // Defer to the next frame to avoid two overlays racing
                    requestAnimationFrame(() => setIsSolutionsOpen(true))
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 text-gray-900 font-medium"
                >
                  <span>Çözümler</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Sayfalar</h3>
                  <div className="space-y-2">
                    <Link href="/sunucu" onClick={closeMobileMenu} className="block rounded-lg p-3 hover:bg-gray-50 text-gray-700 hover:text-blue-700">Sunucu</Link>
                    <Link href="/referanslar" onClick={closeMobileMenu} className="block rounded-lg p-3 hover:bg-gray-50 text-gray-700 hover:text-blue-700">Referanslar</Link>
                    <Link href="/iletisim" onClick={closeMobileMenu} className="block rounded-lg p-3 hover:bg-gray-50 text-gray-700 hover:text-blue-700">İletişim</Link>
                  </div>
                </div>

                {/* Language Switcher */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Dil</h3>
                  <div className="flex space-x-2">
                    <button type="button" onClick={() => handleLanguageChange("en")} className={`flex-1 border rounded-lg py-2 text-sm ${language === "en" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 hover:bg-gray-50"}`}>🇺🇸 English</button>
                    <button type="button" onClick={() => handleLanguageChange("tr")} className={`flex-1 border rounded-lg py-2 text-sm ${language === "tr" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 hover:bg-gray-50"}`}>🇹🇷 Türkçe</button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 space-y-3">
                <a href="tel:+905456642302" className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors" onClick={closeMobileMenu}>
                  <Phone className="w-4 h-4" />
                  <span>0545 664 2302</span>
                </a>
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors" onClick={closeMobileMenu}>Danışmanlık</button>
              </div>
          </div>
        </div>
      )}

      {/* Mobile Mega Menu for Solutions */}
      <MegaMenu
        isOpen={isSolutionsOpen}
        onClose={() => setIsSolutionsOpen(false)}
        activeSolutionGroup={activeSolutionGroup}
        setActiveSolutionGroup={setActiveSolutionGroup}
      />
    </div>
  )
}
