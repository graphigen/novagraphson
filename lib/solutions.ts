import { 
  Globe, 
  Shield, 
  Monitor, 
  Smartphone, 
  Palette, 
  Video, 
  Users, 
  Server, 
  Network, 
  Database,
  Lock,
  Eye,
  Key,
  ShieldCheck,
  Cloud,
  HardDrive,
  Wifi,
  Router
} from "lucide-react"

export interface Service {
  name: string
  href: string
  icon: any
  description?: string
}

export interface SolutionGroup {
  id: string
  title: string
  description: string
  services: Service[]
}

export const solutionGroups: SolutionGroup[] = [
  {
    id: "digital",
    title: "Dijital Çözümler",
    description: "Modern dijital dönüşüm çözümleri",
    services: [
      {
        name: "Web Tasarım",
        href: "/web-tasarim",
        icon: Globe,
        description: "Modern ve responsive web tasarım"
      },
      {
        name: "Dijital Pazarlama",
        href: "/dijital-pazarlama",
        icon: Monitor,
        description: "Kapsamlı dijital pazarlama"
      },
      {
        name: "SEO Optimizasyonu",
        href: "/seo",
        icon: Smartphone,
        description: "Arama motoru optimizasyonu"
      },
      {
        name: "Grafik Tasarım",
        href: "/grafik-tasarim",
        icon: Palette,
        description: "Marka kimliği ve görsel tasarım"
      },
      {
        name: "Video Prodüksiyon",
        href: "/video-produksiyon",
        icon: Video,
        description: "Profesyonel video içerik"
      },
      {
        name: "CRM Sistemleri",
        href: "/crm-sistemleri",
        icon: Users,
        description: "Müşteri ilişkileri yönetimi"
      }
    ]
  },
  {
    id: "it-security",
    title: "IT & Güvenlik Çözümleri",
    description: "Kurumsal IT ve güvenlik çözümleri",
    services: [
      {
        name: "VPS Sunucu",
        href: "/sunucu",
        icon: Server,
        description: "Yüksek performanslı VPS"
      },
      {
        name: "Ağ Çözümleri",
        href: "/network-solutions",
        icon: Network,
        description: "Kurumsal ağ altyapısı"
      },
      {
        name: "Sunucu Sistemleri",
        href: "/server-systems",
        icon: Database,
        description: "Sunucu kurulum ve yönetimi"
      },
      {
        name: "Siber Güvenlik",
        href: "/security-systems",
        icon: Shield,
        description: "Gelişmiş güvenlik çözümleri"
      },
      {
        name: "IT Altyapı",
        href: "/it-infrastructure",
        icon: Router,
        description: "IT altyapı danışmanlığı"
      },
      {
        name: "IT Bakım",
        href: "/it-maintenance",
        icon: Wifi,
        description: "7/24 IT destek hizmeti"
      },
      {
        name: "Bulut & Backup",
        href: "/cloud-backup",
        icon: Cloud,
        description: "Bulut yedekleme çözümleri"
      },
      {
        name: "Teknik Servis",
        href: "/technical-service",
        icon: HardDrive,
        description: "Donanım ve yazılım desteği"
      },
      {
        name: "Mail Lisansları",
        href: "/mail-licenses",
        icon: Lock,
        description: "Kurumsal mail lisansları"
      }
    ]
  }
]
