"use client"

import Link from "next/link"
import Image from "next/image"

export const LogoFooter = () => {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <Image
        src="/logo/NG-NovaGraph-Logo.svg"
        alt="NovaGraph Logo"
        width={120}
        height={20}
        className="h-8 w-auto object-contain"
        priority
      />
    </Link>
  )
}
