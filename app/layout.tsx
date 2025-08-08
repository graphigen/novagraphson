import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ContactFormProvider } from '@/contexts/ContactFormContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
 
import { Toaster } from '@/components/ui/toaster'
import { CookieConsent } from '@/components/CookieConsent'
import { ContactFormWrapper } from '@/components/ContactFormWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'NovaGraph - Dijital Güvenlik ve Web Tasarım Çözümleri',
    template: '%s | NovaGraph'
  },
  description: 'NovaGraph, dijital güvenlik, web tasarım, SEO ve IT çözümleri sunan profesyonel bir teknoloji şirketidir. İstanbul merkezli olarak Türkiye genelinde hizmet vermekteyiz.',
  keywords: ['dijital güvenlik', 'web tasarım', 'SEO', 'IT çözümleri', 'NovaGraph', 'İstanbul'],
  authors: [{ name: 'NovaGraph' }],
  creator: 'NovaGraph',
  publisher: 'NovaGraph',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://novagraph.com.tr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://novagraph.com.tr',
    title: 'NovaGraph - Dijital Güvenlik ve Web Tasarım Çözümleri',
    description: 'NovaGraph, dijital güvenlik, web tasarım, SEO ve IT çözümleri sunan profesyonel bir teknoloji şirketidir.',
    siteName: 'NovaGraph',
    images: [
      {
        url: '/logo/NG-NovaGraph-Logo.svg',
        width: 1200,
        height: 630,
        alt: 'NovaGraph Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaGraph - Dijital Güvenlik ve Web Tasarım Çözümleri',
    description: 'NovaGraph, dijital güvenlik, web tasarım, SEO ve IT çözümleri sunan profesyonel bir teknoloji şirketidir.',
    images: ['/logo/NG-NovaGraph-Logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        {/* Güvenlik meta tag'leri */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          <ContactFormProvider>
            <Header />
            {children}
            <Footer />
            <ContactFormWrapper />
            <CookieConsent />
            <Toaster />
          </ContactFormProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
