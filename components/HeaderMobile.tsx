"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X, Search, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

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
        <div className="w-auto h-48 flex items-center justify-center">
          <svg viewBox="0 0 2000 2000" className="w-auto h-48">
            <g>
              <path d="M542.2,1059.5v-163.4h37.3l51.6,82.7c2.6,4.2,5.3,8.8,8,13.8,2.7,5,5.5,10.5,8.3,16.6,2.8,6.1,5.6,12.9,8.4,20.5h-3.4c-.5-6.1-1-12.5-1.4-19.4-.4-6.9-.8-13.4-1-19.7-.3-6.3-.4-11.6-.4-16v-78.4h34.2v163.4h-37.4l-46.9-75c-3.4-5.6-6.6-11.1-9.5-16.4-2.9-5.3-6-11.1-9.2-17.5-3.2-6.4-7-14.1-11.3-23h4.3c.4,7.9.9,15.5,1.3,22.7.4,7.2.8,13.8,1,19.7.3,5.9.4,10.7.4,14.4v75.1h-34.2Z" fill="#171717"/>
              <path d="M767.4,1061.9c-12.3,0-22.9-2.6-31.9-7.9-9-5.3-15.9-12.7-20.8-22.1-4.9-9.5-7.3-20.5-7.3-33.1s2.4-23.8,7.3-33.3c4.9-9.5,11.8-16.8,20.8-22.1,9-5.3,19.6-7.9,31.9-7.9s23,2.6,32,7.9c9,5.3,15.9,12.7,20.7,22.1,4.9,9.5,7.3,20.6,7.3,33.3s-2.4,23.6-7.3,33.1c-4.9,9.5-11.8,16.8-20.7,22.1-9,5.3-19.6,7.9-32,7.9ZM767.4,1036.1c5.8,0,10.7-1.6,14.7-4.9,3.9-3.3,6.9-7.7,8.9-13.4,2-5.7,3-12,3-19.1s-1-13.7-3-19.3c-2-5.6-4.9-10-8.9-13.3-3.9-3.2-8.8-4.8-14.7-4.8s-10.7,1.6-14.6,4.8c-3.9,3.2-6.9,7.6-8.8,13.3-2,5.6-3,12.1-3,19.3s1,13.5,3,19.1c2,5.7,4.9,10.1,8.8,13.4,3.9,3.3,8.8,4.9,14.6,4.9Z" fill="#171717"/>
              <path d="M880.8,1059.5l-45.2-122.6h35l20.6,63.6c2.5,8,4.7,16,6.5,24.1,1.9,8.1,3.8,16.5,5.8,25.2h-7c1.9-8.7,3.8-17.1,5.6-25.2,1.8-8.1,4-16.2,6.5-24.1l20.4-63.6h34.5l-45.3,122.6h-37.4Z" fill="#171717"/>
              <path d="M1012.9,1061.9c-7.7,0-14.7-1.4-20.9-4.1-6.2-2.7-11-6.8-14.6-12.3-3.5-5.4-5.3-12.2-5.3-20.3s1.3-12.5,3.8-17.1c2.5-4.6,6-8.3,10.3-11.1,4.3-2.8,9.3-4.9,14.8-6.4,5.5-1.5,11.3-2.5,17.4-3.1,7.1-.7,12.8-1.4,17.2-2,4.3-.6,7.5-1.6,9.5-3,2-1.4,3-3.3,3-6v-.5c0-3.5-.7-6.5-2.2-8.9-1.5-2.4-3.6-4.3-6.5-5.5-2.9-1.3-6.4-1.9-10.5-1.9s-7.9.6-11.1,1.9c-3.1,1.3-5.7,3-7.7,5.1-2,2.1-3.4,4.5-4.4,7.1l-30.2-4.9c2.1-7.2,5.6-13.2,10.5-18.2,4.9-5,11-8.8,18.3-11.4,7.3-2.6,15.5-3.9,24.6-3.9s13,.8,19.2,2.4c6.2,1.6,11.8,4,16.7,7.3,4.9,3.3,8.8,7.6,11.7,12.9,2.9,5.3,4.3,11.6,4.3,19v82.6h-31.1v-17h-1.1c-2,3.8-4.6,7.1-7.9,10-3.3,2.9-7.3,5.2-11.9,6.9-4.6,1.7-10,2.5-16.1,2.5ZM1022.3,1038.8c5.2,0,9.7-1,13.7-3.1,3.9-2,7-4.8,9.2-8.3s3.3-7.4,3.3-11.7v-13.3c-1,.7-2.4,1.4-4.4,2-2,.6-4.2,1.1-6.6,1.5-2.4.4-4.8.8-7.1,1.2-2.3.4-4.4.7-6.2.9-4,.6-7.6,1.5-10.6,2.9-3.1,1.3-5.4,3.1-7.1,5.2-1.7,2.2-2.5,4.9-2.5,8.3s.8,5.8,2.4,7.9c1.6,2.2,3.8,3.8,6.6,4.9,2.8,1.1,6,1.6,9.5,1.6Z" fill="#171717"/>
              <path d="M1182.2,1061.7c-15.3,0-28.7-3.4-40.2-10.1-11.5-6.8-20.5-16.4-27-28.9-6.5-12.5-9.7-27.4-9.7-44.6s3.4-32.8,10.1-45.3c6.7-12.5,15.8-22.1,27.3-28.8,11.5-6.7,24.4-10,38.7-10s17.8,1.3,25.7,4c7.9,2.7,15,6.5,21.2,11.3,6.2,4.9,11.2,10.7,15.1,17.4,3.9,6.7,6.4,14.1,7.6,22.2h-34c-1.2-3.9-2.8-7.5-4.9-10.6-2.1-3.1-4.6-5.8-7.6-7.9-3-2.2-6.3-3.9-10.1-5-3.8-1.1-8-1.7-12.5-1.7-8.4,0-15.8,2.1-22.3,6.3-6.4,4.2-11.4,10.3-15,18.4-3.6,8-5.4,17.8-5.4,29.4s1.8,21.4,5.3,29.4c3.5,8.1,8.5,14.2,15,18.5,6.4,4.2,14,6.4,22.8,6.4s14.7-1.4,20.3-4.3c5.6-2.9,10-6.9,13-12.2,3-5.3,4.6-11.5,4.6-18.6l7,1h-42.5v-25.4h68v20.4c0,14.3-3,26.6-9.1,36.9-6.1,10.3-14.4,18.2-25,23.7-10.6,5.5-22.7,8.3-36.4,8.3Z" fill="#171717"/>
              <path d="M1277.6,1059.5v-122.6h31.8v21.4h1.3c2.3-7.6,6-13.3,11.3-17.2,5.3-3.9,11.4-5.8,18.3-5.8s3.5,0,5.5.3c2,.2,3.7.5,5.2.8v29.4c-1.5-.5-3.6-.9-6.4-1.2-2.8-.3-5.4-.4-7.9-.4-5,0-9.5,1.1-13.5,3.2-4,2.2-7.1,5.2-9.4,9-2.2,3.8-3.3,8.3-3.3,13.4v69.7h-32.9Z" fill="#171717"/>
              <path d="M1400.2,1061.9c-7.7,0-14.7-1.4-20.9-4.1-6.2-2.7-11-6.8-14.6-12.3-3.5-5.4-5.3-12.2-5.3-20.3s1.3-12.5,3.8-17.1c2.5-4.6,6-8.3,10.3-11.1,4.3-2.8,9.3-4.9,14.8-6.4,5.5-1.5,11.3-2.5,17.4-3.1,7.1-.7,12.8-1.4,17.2-2,4.3-.6,7.5-1.6,9.5-3,2-1.4,3-3.3,3-6v-.5c0-3.5-.7-6.5-2.2-8.9-1.5-2.4-3.6-4.3-6.5-5.5-2.9-1.3-6.4-1.9-10.5-1.9s-7.9.6-11.1,1.9c-3.1,1.3-5.7,3-7.7,5.1-2,2.1-3.4,4.5-4.4,7.1l-30.2-4.9c2.1-7.2,5.6-13.2,10.5-18.2,4.9-5,11-8.8,18.3-11.4,7.3-2.6,15.5-3.9,24.6-3.9s13,.8,19.2,2.4c6.2,1.6,11.8,4,16.7,7.3,4.9,3.3,8.8,7.6,11.7,12.9,2.9,5.3,4.3,11.6,4.3,19v82.6h-31.1v-17h-1.1c-2,3.8-4.6,7.1-7.9,10-3.3,2.9-7.3,5.2-11.9,6.9-4.6,1.7-10,2.5-16.1,2.5ZM1409.5,1038.8c5.2,0,9.7-1,13.7-3.1,3.9-2,7-4.8,9.2-8.3s3.3-7.4,3.3-11.7v-13.3c-1,.7-2.4,1.4-4.4,2-2,.6-4.2,1.1-6.6,1.5-2.4.4-4.8.8-7.1,1.2-2.3.4-4.4.7-6.2.9-4,.6-7.6,1.5-10.6,2.9-3.1,1.3-5.4,3.1-7.1,5.2-1.7,2.2-2.5,4.9-2.5,8.3s.8,5.8,2.4,7.9c1.6,2.2,3.8,3.8,6.6,4.9,2.8,1.1,6,1.6,9.5,1.6Z" fill="#171717"/>
              <path d="M1496.3,1105.4v-168.4h32.3v20.6h1.5c1.5-3.2,3.7-6.5,6.5-10,2.8-3.4,6.5-6.3,11.1-8.7,4.6-2.3,10.4-3.5,17.3-3.5s17.4,2.3,24.9,7c7.5,4.7,13.5,11.7,18,21.1,4.5,9.4,6.7,21,6.7,35s-2.2,25.1-6.6,34.5c-4.4,9.4-10.3,16.5-17.9,21.4-7.5,4.9-16,7.3-25.4,7.3s-12.3-1.1-16.9-3.4c-4.6-2.3-8.4-5.1-11.2-8.4-2.9-3.3-5.1-6.6-6.6-9.9h-1v65.5h-32.9ZM1554.9,1035.2c5.7,0,10.5-1.6,14.4-4.7,3.9-3.1,6.9-7.5,8.9-13,2-5.6,3-11.9,3-19.1s-1-13.5-3-19c-2-5.5-5-9.8-8.8-12.9-3.9-3.1-8.7-4.7-14.5-4.7s-10.4,1.5-14.4,4.6c-3.9,3-6.9,7.3-9,12.7-2,5.4-3.1,11.9-3.1,19.4s1,13.8,3.1,19.4c2.1,5.5,5.1,9.8,9,12.9,3.9,3.1,8.7,4.6,14.3,4.6Z" fill="#171717"/>
              <path d="M1670.8,988.6v70.9h-32.9v-163.4h32.2v71.4h-2.6c3.2-10.2,8.1-18.1,14.6-23.7,6.5-5.6,15-8.4,25.4-8.4s15.9,1.8,22.2,5.5c6.3,3.7,11.2,9,14.7,15.9,3.5,6.9,5.3,15.1,5.3,24.7v78h-33v-72.3c0-7.6-2-13.6-5.9-17.9-3.9-4.3-9.3-6.5-16.3-6.5s-8.7,1-12.3,3c-3.6,2-6.4,4.9-8.4,8.7-2,3.8-3,8.4-3,13.9Z" fill="#171717"/>
            </g>
            <g>
              <path d="M271.9,1059.2h43.9v-85.8l35.9,52.8s20.7,33.2,69.4,33.2h40.8v-108.6h-44.3v64.2s-20.9,3.1-34-19.7l-67.8-100.3h-43.9v164.2Z" fill="#2563eb"/>
              <path d="M352.7,927.9l27.9,41.5s5.6-30,37.1-30h44.4v-43.8h-51.1s-35.6,1.8-58.2,32.2h0Z" fill="#2563eb"/>
            </g>
          </svg>
        </div>
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
