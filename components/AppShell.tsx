"use client"

import React, { useEffect, useRef } from "react"
import { useMobileMenu } from "@/contexts/MobileMenuContext"

export function AppShell({ children }: { children: React.ReactNode }) {
  const { isOpen } = useMobileMenu()
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    if (isOpen) {
      el.style.transform = "translateX(-56px) scale(0.92)"
      el.style.borderRadius = "16px"
      el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.25)"
    } else {
      el.style.transform = "translateX(0) scale(1)"
      el.style.borderRadius = "0"
      el.style.boxShadow = "none"
    }
  }, [isOpen])

  return (
    <div className="relative overflow-x-hidden">
      {/* Content layer */}
      <div
        ref={contentRef}
        className="relative z-10 min-h-screen bg-white transition-transform duration-300 ease-in-out will-change-transform"
      >
        {children}
      </div>
      {/* Dim background when menu open */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-0 pointer-events-none" />}
    </div>
  )
}


