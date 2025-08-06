import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dijital Pazarlama Hizmetleri | NovaGraph - Sosyal Medya, Google Ads ve İçerik Pazarlaması",
  description: "Omni-channel stratejiler, dönüşüm odaklı reklamlar ve remarketing ile markanızı dijital dünyada zirveye taşıyoruz.",
  keywords: ["dijital pazarlama", "sosyal medya yönetimi", "google ads", "remarketing", "omni-channel", "dönüşüm optimizasyonu"],
}

export default function DijitalPazarlamaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 