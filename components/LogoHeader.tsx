"use client"

import Image from "next/image"

export const LogoHeader = () => {
  return (
    <Image
      src="/logo/NG-NovaGraph-Logo.svg"
      alt="NovaGraph Logo"
      width={120}
      height={20}
      className="h-8 w-auto object-contain"
      priority
    />
  )
}
