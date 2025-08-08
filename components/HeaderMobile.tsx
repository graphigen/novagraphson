"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X, Search, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { LogoMobile } from "@/components/LogoMobile"

type Language = "en" | "tr"

export const HeaderMobile = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { language, setLanguage, t } = useLanguage()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

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

  return (
    <div className="md:hidden flex w-full items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3">
        <LogoMobile />
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
        aria-label="Menüyü aç"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMobileMenu} />
          <div className="fixed inset-y-0 right-0 w-80 bg-white z-50 shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Menu</h2>
                <button
                  onClick={closeMobileMenu}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
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
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors font-medium"
                    >
                      Ara
                    </button>
                  )}
                </form>
              </div>

              {/* Navigation */}
              <div className="flex-1 p-6 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Çözümler</h3>
                  <div className="space-y-2">
                    <Link
                      href="/web-tasarim"
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Web Tasarım
                    </Link>
                    <Link
                      href="/dijital-pazarlama"
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Dijital Pazarlama
                    </Link>
                    <Link
                      href="/seo"
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      SEO
                    </Link>
                    <Link
                      href="/grafik-tasarim"
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Grafik Tasarım
                    </Link>
                    <Link
                      href="/video-produksiyon"
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Video Prodüksiyon
                    </Link>
                    <Link
                      href="/crm-sistemleri"
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      CRM Sistemleri
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Sayfalar</h3>
                  <div className="space-y-2">
                    <Link
                      href="/sunucu"
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Sunucu
                    </Link>
                    <Link
                      href="/referanslar"
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Referanslar
                    </Link>
                    <Link
                      href="/iletisim"
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      İletişim
                    </Link>
                  </div>
                </div>

                {/* Language Switcher */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Dil</h3>
                  <div className="flex space-x-2">
                    <Button
                      variant={language === "en" ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleLanguageChange("en")}
                      className="flex-1"
                    >
                      🇺🇸 English
                    </Button>
                    <Button
                      variant={language === "tr" ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleLanguageChange("tr")}
                      className="flex-1"
                    >
                      🇹🇷 Türkçe
                    </Button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 space-y-3">
                <a
                  href="tel:+905456642302"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  onClick={closeMobileMenu}
                >
                  <Phone className="w-4 h-4" />
                  <span>0545 664 2302</span>
                </a>
                <button
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Danışmanlık
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
