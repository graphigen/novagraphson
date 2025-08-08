"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import { X, ChevronRight } from "lucide-react"
import { useMobileMenu } from "@/contexts/MobileMenuContext"

export function MobileRevealMenu() {
  const { isOpen, close } = useMobileMenu()

  // slide-in panel from right
  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out will-change-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobil menü"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <div className="font-bold text-gray-900">Menü</div>
          <button
            onClick={close}
            aria-label="Menüyü kapat"
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-5">
          <ul className="space-y-2">
            {[
              { name: "Ana Sayfa", href: "/" },
              { name: "Web Tasarım", href: "/web-tasarim" },
              { name: "Dijital Pazarlama", href: "/dijital-pazarlama" },
              { name: "SEO", href: "/seo" },
              { name: "Grafik Tasarım", href: "/grafik-tasarim" },
              { name: "Video Prodüksiyon", href: "/video-produksiyon" },
              { name: "CRM Sistemleri", href: "/crm-sistemleri" },
              { name: "İletişim", href: "/iletisim" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="group flex items-center justify-between rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  <span className="font-medium">{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}


