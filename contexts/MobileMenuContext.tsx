"use client"

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

type MobileMenuContextType = {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined)

export function useMobileMenu() {
  const ctx = useContext(MobileMenuContext)
  if (!ctx) throw new Error("useMobileMenu must be used within MobileMenuProvider")
  return ctx
}

export function MobileMenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((v) => !v), [])

  // Prevent background scroll when menu is open
  useEffect(() => {
    const prev = document.body.style.overflow
    if (isOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = prev || ""
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  const value = useMemo(() => ({ isOpen, open, close, toggle }), [isOpen, open, close, toggle])

  return <MobileMenuContext.Provider value={value}>{children}</MobileMenuContext.Provider>
}


