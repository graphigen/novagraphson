"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export function Chrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Hide header/footer on specific pages if needed
  const hideChrome = false

  return (
    <>
      {!hideChrome && <Header />}
      {children}
      {!hideChrome && <Footer />}
    </>
  )
}


