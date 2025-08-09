"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export function Chrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Hide header/footer on partner brand pages under /is-ortaklari/* (but not the index page)
  const hideChrome = pathname.startsWith("/is-ortaklari/")

  return (
    <>
      {!hideChrome && <Header />}
      {children}
      {!hideChrome && <Footer />}
    </>
  )
}


