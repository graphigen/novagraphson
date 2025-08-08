"use client"

import Image from "next/image"

export const LogoMobile = () => {
  return (
    <Image
      src="/logo/NG-NovaGraph-Logo.svg"
      alt="NovaGraph Logo"
      width={100}
      height={16}
      className="h-6 w-auto object-contain"
      priority
    />
  )
}
