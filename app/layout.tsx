import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { ContactFormProvider } from "@/contexts/ContactFormContext"
import { CookieConsent } from "@/components/CookieConsent"
import { ContactFormWrapper } from "@/components/ContactFormWrapper"
import { SecurityProtection } from "@/components/SecurityProtection"

export const metadata: Metadata = {
  title: "NovaGraph - Advanced Graph Analytics Platform",
  description:
    "Transform your data into actionable insights with NovaGraph's powerful graph analytics and visualization tools.",
  generator: "v0.dev",
  icons: {
    icon: [
      {
        url: "/logo/Favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/logo/Favicon.svg",
    apple: "/logo/Favicon.svg",
  },
  // Güvenlik meta tag'leri
  other: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/Favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/logo/Favicon.svg" />
        <link rel="apple-touch-icon" href="/logo/Favicon.svg" />
        {/* Güvenlik meta tag'leri */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <SecurityProtection />
        <LanguageProvider>
          <ContactFormProvider>
            {children}
            <ContactFormWrapper />
            <CookieConsent />
          </ContactFormProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
