import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Hizmetleri | NovaGraph - Arama Motoru Optimizasyonu ve Organik Trafik Artışı",
  description: "SEO uyumlu web tasarımı, arama motoru optimizasyonu ve organik trafik artışı hizmetleri. Google'da üst sıralarda yer alın.",
  keywords: ["SEO", "arama motoru optimizasyonu", "organik trafik", "google sıralama", "seo uyumlu tasarım"],
}

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 