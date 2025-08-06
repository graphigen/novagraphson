"use client"

import { HeaderDesktop } from "@/components/HeaderDesktop"
import { HeaderMobile } from "@/components/HeaderMobile"
import { TopBar } from "@/components/TopBar"

export function Header() {
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center">
          <HeaderDesktop />
          <HeaderMobile />
        </div>
      </header>
    </>
  )
}
