import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { ContactFormProvider } from "@/contexts/ContactFormContext"
import { CookieConsent } from "@/components/CookieConsent"

export const metadata: Metadata = {
  title: "NovaGraph - Advanced Graph Analytics Platform",
  description:
    "Transform your data into actionable insights with NovaGraph's powerful graph analytics and visualization tools.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <ContactFormProvider>
            {children}
            <CookieConsent />
          </ContactFormProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
