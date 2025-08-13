import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

import { ContactFormProvider } from '@/contexts/ContactFormContext'
import { Chrome } from '@/components/Chrome'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
 
import { Toaster } from '@/components/ui/toaster'
import { CookieConsent } from '@/components/CookieConsent'
import { ContactFormWrapper } from '@/components/ContactFormWrapper'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'NovaGraph - Dijital Güvenlik ve Web Tasarım Çözümleri',
    template: '%s | NovaGraph'
  },
  description: 'NovaGraph ile dijital dünyada başarınızı büyütün! Web tasarım, siber güvenlik, IT danışmanlık hizmetleri. 500+ mutlu müşteri, 7/24 destek, %99.9 uptime garantisi. Ücretsiz danışmanlık için hemen arayın!',
  keywords: 'dijital güvenlik,web tasarım İstanbul,siber güvenlik çözümleri,IT danışmanlık,kurumsal web sitesi,e-ticaret güvenlik,firewall hizmetleri,veri koruma,KVKV uyumlu,responsive web tasarım',
  referrer: 'origin-when-cross-origin',
  creator: 'NovaGraph',
  publisher: 'NovaGraph',
  robots: 'index, follow',
  category: 'technology',
  classification: 'Business',
  alternates: {
    languages: {
      'tr-TR': 'https://novagraph.com.tr',
      'en-US': 'https://novagraph.com.tr/en',
    },
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  openGraph: {
    title: 'NovaGraph - Dijital Güvenlik ve Web Tasarım Çözümleri',
    description: 'Türkiye\'nin önde gelen dijital güvenlik ve web tasarım şirketi. 500+ mutlu müşteri, 7/24 teknik destek ile hizmetinizdeyiz.',
    url: 'https://novagraph.com.tr',
    siteName: 'NovaGraph',
    locale: 'tr_TR',
    images: [
      {
        url: 'https://novagraph.com.tr/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'NovaGraph - Dijital Güvenlik ve Web Tasarım Çözümleri',
        type: 'image/jpeg',
      },
      {
        url: 'https://novagraph.com.tr/images/og-home-square.jpg',
        width: 600,
        height: 600,
        alt: 'NovaGraph Logo',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@novagraph',
    creator: '@novagraph',
    title: 'NovaGraph - Dijital Güvenlik ve Web Tasarım Çözümleri',
    description: 'Türkiye\'nin önde gelen dijital güvenlik ve web tasarım şirketi. 500+ mutlu müşteri, 7/24 teknik destek ile hizmetinizdeyiz.',
    images: ['https://novagraph.com.tr/images/og-home.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/logo/Favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/logo/Favicon.svg" />
        <link rel="apple-touch-icon" href="/logo/Favicon.svg" />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vercel.live" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ContactFormProvider>
          <Chrome>
            {children}
          </Chrome>
          <ContactFormWrapper />
          <CookieConsent />
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </ContactFormProvider>
      </body>
    </html>
  )
}
