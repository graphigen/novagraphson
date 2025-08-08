import { Code, TrendingUp, Search, Palette, Video, Users, Building, Network, Server, Cloud, Mail, Wrench, Settings, ShieldCheck } from "lucide-react"

export interface ServiceItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
  href: string
}

export interface SolutionGroup {
  id: string
  title: string
  description: string
  services: ServiceItem[]
}

export const solutionGroups: SolutionGroup[] = [
  {
    id: "digital",
    title: "Dijital Çözümler",
    description: "Markanızı dijitalde büyütecek modern çözümler.",
    services: [
      { name: "Web Tasarım", icon: Code, href: "/web-tasarim" },
      { name: "Dijital Pazarlama", icon: TrendingUp, href: "/dijital-pazarlama" },
      { name: "SEO", icon: Search, href: "/seo" },
      { name: "Grafik Tasarım", icon: Palette, href: "/grafik-tasarim" },
      { name: "Video Prodüksiyon", icon: Video, href: "/video-produksiyon" },
      { name: "CRM Sistemleri", icon: Users, href: "/crm-sistemleri" },
    ],
  },
  {
    id: "it-security",
    title: "IT & Güvenlik Çözümleri",
    description: "Ağ güvenliği ve verimlilik için teknolojik altyapılar.",
    services: [
      { name: "Altyapı Hizmetleri", icon: Building, href: "/it-infrastructure" },
      { name: "Ağ Çözümleri", icon: Network, href: "/network-solutions" },
      { name: "Sunucu Sistemleri", icon: Server, href: "/server-systems" },
      { name: "Bulut & Backup", icon: Cloud, href: "/cloud-backup" },
      { name: "Mail & Lisans", icon: Mail, href: "/mail-licenses" },
      { name: "Teknik Servis", icon: Wrench, href: "/technical-service" },
      { name: "BT Bakım", icon: Settings, href: "/it-maintenance" },
      { name: "Güvenlik Sistemleri", icon: ShieldCheck, href: "/security-systems" },
    ],
  },
]


