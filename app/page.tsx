import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { FeaturesSection } from "@/components/FeaturesSection"
import { NovaGraphFeatures } from "@/components/NovaGraphFeatures"
import { CTABanner } from "@/components/CTABanner"
import { PartnersSection } from "@/components/PartnersSection"
import { Footer } from "@/components/Footer"
import { ContactFormWrapper } from "@/components/ContactFormWrapper"

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
    url: process.env.NEXT_PUBLIC_APP_URL || "https://novagraph.com.tr",
    type: "website",
    locale: "tr_TR",
    siteName: "NovaGraph",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL || "https://novagraph.com.tr"}/images/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: "NovaGraph - Dijital Güvenlik ve Web Tasarım Çözümleri",
        type: "image/jpeg",
      },
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL || "https://novagraph.com.tr"}/images/og-home-square.jpg`,
        width: 600,
        height: 600,
        alt: "NovaGraph Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaGraph - Dijital Güvenlik ve Web Tasarım Çözümleri",
    description:
      "Türkiye'nin önde gelen dijital güvenlik ve web tasarım şirketi. 500+ mutlu müşteri, 7/24 teknik destek ile hizmetinizdeyiz.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL || "https://novagraph.com.tr"}/images/og-home.jpg`],
    creator: "@novagraph",
    site: "@novagraph",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL || "https://novagraph.com.tr",
    languages: {
      "tr-TR": process.env.NEXT_PUBLIC_APP_URL || "https://novagraph.com.tr",
      "en-US": `${process.env.NEXT_PUBLIC_APP_URL || "https://novagraph.com.tr"}/en`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://novagraph.com.tr"),
}

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://novagraph.com.tr"

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    url: baseUrl,
    name: "NovaGraph - Dijital Güvenlik ve Web Tasarım Çözümleri",
    description:
      "NovaGraph ile dijital dünyada başarınızı büyütün! Web tasarım, siber güvenlik, IT danışmanlık hizmetleri.",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "NovaGraph",
      description: "Dijital Güvenlik ve Web Tasarım Çözümleri",
      publisher: {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "NovaGraph",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/logo.png`,
          width: 200,
          height: 60,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+90-545-664-2302",
          contactType: "customer service",
          areaServed: "TR",
          availableLanguage: ["Turkish", "English"],
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "İstanbul",
          addressCountry: "TR",
        },
        sameAs: [
          "https://www.linkedin.com/company/novagraph",
          "https://twitter.com/novagraph",
          "https://www.instagram.com/novagraph",
        ],
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: baseUrl,
        },
      ],
    },
    mainEntity: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "NovaGraph",
      description:
        "Türkiye'nin önde gelen dijital güvenlik ve web tasarım şirketi. 500+ mutlu müşteri, 7/24 teknik destek ile hizmetinizdeyiz.",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.png`,
        width: 200,
        height: 60,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90-545-664-2302",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["Turkish", "English"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "İstanbul",
        addressCountry: "TR",
      },
      sameAs: [
        "https://www.linkedin.com/company/novagraph",
        "https://twitter.com/novagraph",
        "https://www.instagram.com/novagraph",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dijital Hizmetler",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Tasarım",
              description: "Modern ve responsive web tasarım hizmetleri",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Siber Güvenlik",
              description: "Kapsamlı siber güvenlik çözümleri",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "IT Danışmanlık",
              description: "Profesyonel IT danışmanlık hizmetleri",
            },
          },
        ],
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <Hero />
      <FeaturesSection />
      <NovaGraphFeatures />
      <CTABanner />
      <PartnersSection />
      <Footer />
      <ContactFormWrapper />
    </>
  )
}
