"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, Search, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { LogoMobile } from "@/components/LogoMobile"
import { useMobileMenu } from "@/contexts/MobileMenuContext"
import MegaMenu from "@/components/MegaMenu"

type Language = "en" | "tr"

export const HeaderMobile = () => {
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { language, setLanguage, t } = useLanguage()

  // toggling handled by context

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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = previousOverflow || ""
    }
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMobileMenuOpen])

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
      {/* Popup menü: Çözümler için mobil mega menüyü doğrudan kullan */}
      <MegaMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} activeSolutionGroup="digital" setActiveSolutionGroup={() => {}} />
    </div>
  )
}
