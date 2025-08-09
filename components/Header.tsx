"use client"

import { HeaderDesktop } from "@/components/HeaderDesktop"
import { HeaderMobile } from "@/components/HeaderMobile"
import { TopBar } from "@/components/TopBar"

export function Header() {
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-[65] w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center">
          {/* Desktop Header - hidden on mobile */}
          <div className="hidden md:flex w-full">
            <HeaderDesktop />
          </div>

          {/* Mobile Header - hidden on desktop */}
          <div className="md:hidden w-full">
            <HeaderMobile />
          </div>
        </div>
      </header>
    </>
  )
}
