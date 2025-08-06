import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { FeaturesSection } from "@/components/FeaturesSection"
import { NovaGraphFeatures } from "@/components/NovaGraphFeatures"
import { CTABanner } from "@/components/CTABanner"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "NovaGraph - Dijital Güvenlik ve Web Tasarım Çözümleri | Ana Sayfa",
  description:
    "NovaGraph ile dijital dünyada başarınızı büyütün! Web tasarım, siber güvenlik, IT danışmanlık hizmetleri. 500+ mutlu müşteri, 7/24 destek, %99.9 uptime garantisi. Ücretsiz danışmanlık için hemen arayın!",
  keywords: [
    "dijital güvenlik",
    "web tasarım İstanbul",
    "siber güvenlik çözümleri",
    "IT danışmanlık",
    "kurumsal web sitesi",
    "e-ticaret güvenlik",
    "firewall hizmetleri",
    "veri koruma",
    "KVKV uyumlu",
    "responsive web tasarım",
  ],
  openGraph: {
    title: "NovaGraph - Dijital Güvenlik ve Web Tasarım Çözümleri",
    description:
      "Türkiye'nin önde gelen dijital güvenlik ve web tasarım şirketi. 500+ mutlu müşteri, 7/24 teknik destek ile hizmetinizdeyiz.",
    url: "https://novagraph.com.tr",
    type: "website",
    images: [
      {
        url: "https://novagraph.com.tr/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "NovaGraph Ana Sayfa",
      },
    ],
  },
  alternates: {
    canonical: "https://novagraph.com.tr",
  },
}

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://novagraph.com.tr/#webpage",
  url: "https://novagraph.com.tr",
  name: "NovaGraph - Dijital Güvenlik ve Web Tasarım Çözümleri",
  description:
    "NovaGraph ile dijital dünyada başarınızı büyütün! Web tasarım, siber güvenlik, IT danışmanlık hizmetleri.",
  isPartOf: {
    "@id": "https://novagraph.com.tr/#website",
  },
  about: {
    "@id": "https://novagraph.com.tr/#organization",
  },
  datePublished: "2020-01-01T00:00:00+03:00",
  dateModified: new Date().toISOString(),
  inLanguage: "tr-TR",
  potentialAction: [
    {
      "@type": "ReadAction",
      target: ["https://novagraph.com.tr"],
    },
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <Hero />
      <FeaturesSection />
      <NovaGraphFeatures />
      <CTABanner />
      <Footer />
    </main>
  )
}
