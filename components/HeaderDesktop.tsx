"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { Search, X, ChevronDown, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import MegaMenu from "@/components/MegaMenu"

type Language = "en" | "tr"

interface SearchResult {
  title: string
  type: string
  href: string
  description?: string
  category?: string
}

// Site arama verileri
const siteSearchData: SearchResult[] = [
  // Ana Sayfa
  { title: "Ana Sayfa", type: "Sayfa", href: "/", description: "NovaGraph ana sayfası - Dijital güvenlik ve web tasarım çözümleri", category: "Ana Sayfa" },
  
  // Hizmet Sayfaları
  { title: "Web Tasarım", type: "Hizmet", href: "/web-tasarim", description: "Modern ve dönüşüm odaklı web tasarım hizmetleri", category: "Hizmetler" },
  { title: "Dijital Pazarlama", type: "Hizmet", href: "/dijital-pazarlama", description: "Kapsamlı dijital pazarlama ve reklam çözümleri", category: "Hizmetler" },
  { title: "SEO Optimizasyonu", type: "Hizmet", href: "/seo", description: "Arama motoru optimizasyonu ve organik trafik artırma", category: "Hizmetler" },
  { title: "Grafik Tasarım", type: "Hizmet", href: "/grafik-tasarim", description: "Marka kimliği ve görsel tasarım çözümleri", category: "Hizmetler" },
  { title: "Video Prodüksiyon", type: "Hizmet", href: "/video-produksiyon", description: "Profesyonel video prodüksiyon ve içerik üretimi", category: "Hizmetler" },
  { title: "CRM Sistemleri", type: "Hizmet", href: "/crm-sistemleri", description: "Müşteri ilişkileri yönetimi ve otomasyon çözümleri", category: "Hizmetler" },
  { title: "VPS Sunucu", type: "Hizmet", href: "/sunucu", description: "Yüksek performanslı VPS sunucu ve hosting çözümleri", category: "Hizmetler" },
  
  // İletişim
  { title: "İletişim", type: "Sayfa", href: "/iletisim", description: "Bizimle iletişime geçin - Adres, telefon ve e-posta bilgileri", category: "İletişim" },
  
  // Web Tasarım Hizmetleri
  { title: "Kurumsal Web Sitesi", type: "Alt Hizmet", href: "/web-tasarim", description: "Profesyonel kurumsal web sitesi tasarımı", category: "Web Tasarım" },
  { title: "E-Ticaret Sitesi", type: "Alt Hizmet", href: "/web-tasarim", description: "Online satış platformu ve e-ticaret çözümleri", category: "Web Tasarım" },
  { title: "Landing Page", type: "Alt Hizmet", href: "/web-tasarim", description: "Dönüşüm odaklı landing page tasarımı", category: "Web Tasarım" },
  { title: "Mobil Uyumlu Tasarım", type: "Alt Hizmet", href: "/web-tasarim", description: "Responsive ve mobil uyumlu web tasarımı", category: "Web Tasarım" },
  
  // Dijital Pazarlama Hizmetleri
  { title: "Google Ads", type: "Alt Hizmet", href: "/dijital-pazarlama", description: "Google reklamları ve PPC kampanya yönetimi", category: "Dijital Pazarlama" },
  { title: "Sosyal Medya Pazarlama", type: "Alt Hizmet", href: "/dijital-pazarlama", description: "Sosyal medya platformlarında pazarlama stratejileri", category: "Dijital Pazarlama" },
  { title: "E-Mail Marketing", type: "Alt Hizmet", href: "/dijital-pazarlama", description: "E-posta pazarlama ve müşteri iletişimi", category: "Dijital Pazarlama" },
  { title: "İçerik Pazarlama", type: "Alt Hizmet", href: "/dijital-pazarlama", description: "İçerik üretimi ve pazarlama stratejileri", category: "Dijital Pazarlama" },
  
  // SEO Hizmetleri
  { title: "SEO Analizi", type: "Alt Hizmet", href: "/seo", description: "Web sitesi SEO analizi ve raporlama", category: "SEO" },
  { title: "Anahtar Kelime Optimizasyonu", type: "Alt Hizmet", href: "/seo", description: "Anahtar kelime araştırması ve optimizasyonu", category: "SEO" },
  { title: "Teknik SEO", type: "Alt Hizmet", href: "/seo", description: "Teknik SEO optimizasyonu ve site hızlandırma", category: "SEO" },
  { title: "Yerel SEO", type: "Alt Hizmet", href: "/seo", description: "Yerel arama optimizasyonu ve Google My Business", category: "SEO" },
  
  // Grafik Tasarım Hizmetleri
  { title: "Logo Tasarımı", type: "Alt Hizmet", href: "/grafik-tasarim", description: "Kurumsal logo ve marka kimliği tasarımı", category: "Grafik Tasarım" },
  { title: "Kurumsal Kimlik", type: "Alt Hizmet", href: "/grafik-tasarim", description: "Kurumsal kimlik ve marka tasarımı", category: "Grafik Tasarım" },
  { title: "Sosyal Medya Tasarımı", type: "Alt Hizmet", href: "/grafik-tasarim", description: "Sosyal medya görselleri ve içerik tasarımı", category: "Grafik Tasarım" },
  { title: "Broşür Tasarımı", type: "Alt Hizmet", href: "/grafik-tasarim", description: "Katalog, broşür ve basılı materyal tasarımı", category: "Grafik Tasarım" },
  
  // Video Prodüksiyon Hizmetleri
  { title: "Kurumsal Tanıtım Filmi", type: "Alt Hizmet", href: "/video-produksiyon", description: "Şirket tanıtım ve kurumsal video prodüksiyon", category: "Video Prodüksiyon" },
  { title: "Ürün Tanıtım Videosu", type: "Alt Hizmet", href: "/video-produksiyon", description: "Ürün tanıtım ve pazarlama videoları", category: "Video Prodüksiyon" },
  { title: "Sosyal Medya İçerikleri", type: "Alt Hizmet", href: "/video-produksiyon", description: "Sosyal medya için video içerik üretimi", category: "Video Prodüksiyon" },
  { title: "Drone Çekimleri", type: "Alt Hizmet", href: "/video-produksiyon", description: "Drone ile havadan video çekimleri", category: "Video Prodüksiyon" },
  
  // CRM Sistemleri
  { title: "Zoho CRM", type: "Alt Hizmet", href: "/crm-sistemleri", description: "Zoho CRM kurulum ve danışmanlık hizmetleri", category: "CRM Sistemleri" },
  { title: "Bitrix24", type: "Alt Hizmet", href: "/crm-sistemleri", description: "Bitrix24 CRM ve iş süreçleri yönetimi", category: "CRM Sistemleri" },
  { title: "Doktor360", type: "Alt Hizmet", href: "/crm-sistemleri", description: "Sağlık sektörü için Doktor360 CRM çözümleri", category: "CRM Sistemleri" },
  { title: "Monday.com", type: "Alt Hizmet", href: "/crm-sistemleri", description: "Monday.com proje yönetimi ve CRM entegrasyonu", category: "CRM Sistemleri" },
  
  // VPS Sunucu Hizmetleri
  { title: "Linux VPS", type: "Alt Hizmet", href: "/sunucu", description: "Linux tabanlı VPS sunucu paketleri", category: "VPS Sunucu" },
  { title: "Windows VPS", type: "Alt Hizmet", href: "/sunucu", description: "Windows tabanlı VPS sunucu çözümleri", category: "VPS Sunucu" },
  { title: "Yedekleme Hizmeti", type: "Alt Hizmet", href: "/sunucu", description: "Otomatik yedekleme ve veri koruma", category: "VPS Sunucu" },
  { title: "DDoS Koruması", type: "Alt Hizmet", href: "/sunucu", description: "Gelişmiş DDoS koruma ve güvenlik", category: "VPS Sunucu" },
  
  // Popüler Arama Terimleri
  { title: "Web Sitesi Tasarımı", type: "Arama", href: "/web-tasarim", description: "Profesyonel web sitesi tasarım ve geliştirme", category: "Popüler" },
  { title: "Dijital Pazarlama Stratejisi", type: "Arama", href: "/dijital-pazarlama", description: "Kapsamlı dijital pazarlama stratejileri", category: "Popüler" },
  { title: "SEO Hizmetleri", type: "Arama", href: "/seo", description: "Arama motoru optimizasyonu ve organik trafik", category: "Popüler" },
  { title: "Grafik Tasarım Hizmetleri", type: "Arama", href: "/grafik-tasarim", description: "Marka kimliği ve görsel tasarım", category: "Popüler" },
  { title: "VPS Sunucu Paketleri", type: "Arama", href: "/sunucu", description: "Yüksek performanslı VPS sunucu çözümleri", category: "Popüler" },
  { title: "CRM Danışmanlığı", type: "Arama", href: "/crm-sistemleri", description: "CRM sistemleri kurulum ve danışmanlık", category: "Popüler" },
  { title: "Video Prodüksiyon", type: "Arama", href: "/video-produksiyon", description: "Profesyonel video prodüksiyon hizmetleri", category: "Popüler" },
]

// Flat SVG Bayraklar
const FlagIcons = {
  tr: (
    <svg viewBox="0 0 24 16" className="w-4 h-4">
      <rect width="24" height="16" fill="#E30A17"/>
      <circle cx="12" cy="8" r="3" fill="#ffffff"/>
      <circle cx="12" cy="8" r="2" fill="#E30A17"/>
      <polygon points="12,6 13,8 12,10 11,8" fill="#ffffff"/>
      <polygon points="12,6 13,8 12,10 11,8" fill="#E30A17" transform="rotate(72 12 8)"/>
      <polygon points="12,6 13,8 12,10 11,8" fill="#E30A17" transform="rotate(144 12 8)"/>
      <polygon points="12,6 13,8 12,10 11,8" fill="#E30A17" transform="rotate(216 12 8)"/>
      <polygon points="12,6 13,8 12,10 11,8" fill="#E30A17" transform="rotate(288 12 8)"/>
    </svg>
  ),
  en: (
    <svg viewBox="0 0 24 16" className="w-4 h-4">
      <rect width="24" height="16" fill="#012169"/>
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#ffffff" strokeWidth="2"/>
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" strokeWidth="1"/>
      <path d="M12,0 L12,16 M0,8 L24,8" stroke="#ffffff" strokeWidth="3"/>
      <path d="M12,0 L12,16 M0,8 L24,8" stroke="#C8102E" strokeWidth="1.5"/>
      <path d="M0,0 L24,0 L24,16 L0,16 Z" fill="none" stroke="#ffffff" strokeWidth="1"/>
    </svg>
  )
}

export const HeaderDesktop = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [activeSolutionGroup, setActiveSolutionGroup] = useState("digital")

  const { language, setLanguage, t } = useLanguage()

  const megaMenuRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const languageRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const popularSearchTerms = ["Web Tasarım", "SEO", "Dijital Pazarlama", "Grafik Tasarım", "VPS Sunucu", "CRM"]

  const handleMouseEnterSolutions = useCallback(() => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current)
    }
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(true)
    }, 200)
  }, [])

  const handleMouseLeaveSolutions = useCallback(() => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current)
    }
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false)
    }, 300)
  }, [])

  const handleMouseEnterMegaMenu = useCallback(() => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current)
    }
  }, [])

  const handleMouseLeaveMegaMenu = useCallback(() => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current)
    }
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false)
    }, 300)
  }, [])

  const closeMegaMenu = useCallback(() => {
    setIsMegaMenuOpen(false)
  }, [])

  const handleSearchToggle = useCallback(() => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      setTimeout(() => {
        const searchInput = searchRef.current?.querySelector('input')
        searchInput?.focus()
      }, 100)
    }
  }, [isSearchOpen])

  const handleSearchSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `#search?q=${encodeURIComponent(searchQuery)}`
      setIsSearchOpen(false)
      setSearchQuery("")
      setSearchResults([])
    }
  }, [searchQuery])

  const handleSearchResultClick = useCallback((href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      window.location.href = href
    }
    setIsSearchOpen(false)
    setSearchQuery("")
    setSearchResults([])
  }, [])

  const handleLanguageChange = useCallback((newLanguage: Language) => {
    setLanguage(newLanguage)
    setIsLanguageOpen(false)
  }, [setLanguage])

  const handleLanguageToggle = useCallback(() => {
    setIsLanguageOpen(!isLanguageOpen)
  }, [isLanguageOpen])

  const handlePopularSearchClick = useCallback((term: string) => {
    setSearchQuery(term)
    const searchInput = searchRef.current?.querySelector('input')
    searchInput?.focus()
  }, [])

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true)
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
      searchTimeoutRef.current = setTimeout(() => {
        const query = searchQuery.toLowerCase()
        
        // Gelişmiş arama - başlık, açıklama ve kategori araması
        const filtered: SearchResult[] = siteSearchData.filter((item) =>
          item.title.toLowerCase().includes(query) ||
          (item.description && item.description.toLowerCase().includes(query)) ||
          (item.category && item.category.toLowerCase().includes(query))
        )
        
        // Sonuçları kategorilere göre sırala
        const sortedResults = filtered.sort((a, b) => {
          // Önce sayfa ve hizmet türlerini öne çıkar
          const typeOrder = { "Sayfa": 1, "Hizmet": 2, "Alt Hizmet": 3, "Arama": 4 }
          const aOrder = typeOrder[a.type as keyof typeof typeOrder] || 5
          const bOrder = typeOrder[b.type as keyof typeof typeOrder] || 5
          
          if (aOrder !== bOrder) {
            return aOrder - bOrder
          }
          
          // Sonra başlıkta tam eşleşme varsa öne çıkar
          const aExactMatch = a.title.toLowerCase() === query
          const bExactMatch = b.title.toLowerCase() === query
          
          if (aExactMatch && !bExactMatch) return -1
          if (!aExactMatch && bExactMatch) return 1
          
          // Son olarak alfabetik sırala
          return a.title.localeCompare(b.title)
        })
        
        setSearchResults(sortedResults.slice(0, 10)) // Maksimum 10 sonuç göster
        setIsSearching(false)
      }, 300)
    } else {
      setSearchResults([])
      setIsSearching(false)
    }
  }, [searchQuery])

  // Click outside handlers
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target as Node)
      ) {
        setIsMegaMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Escape key handler with optimized dependencies
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false)
        setIsLanguageOpen(false)
        setIsMegaMenuOpen(false)
        setSearchQuery("")
        setSearchResults([])
      }
    }

    document.addEventListener("keydown", handleEscapeKey)
    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [])

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (megaMenuTimeoutRef.current) {
        clearTimeout(megaMenuTimeoutRef.current)
      }
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="hidden md:flex w-full items-center justify-between">
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-auto h-48 flex items-center justify-center">
            <svg viewBox="0 0 2000 2000" className="w-auto h-48">
              <g>
                <path d="M542.2,1059.5v-163.4h37.3l51.6,82.7c2.6,4.2,5.3,8.8,8,13.8,2.7,5,5.5,10.5,8.3,16.6,2.8,6.1,5.6,12.9,8.4,20.5h-3.4c-.5-6.1-1-12.5-1.4-19.4-.4-6.9-.8-13.4-1-19.7-.3-6.3-.4-11.6-.4-16v-78.4h34.2v163.4h-37.4l-46.9-75c-3.4-5.6-6.6-11.1-9.5-16.4-2.9-5.3-6-11.1-9.2-17.5-3.2-6.4-7-14.1-11.3-23h4.3c.4,7.9.9,15.5,1.3,22.7.4,7.2.8,13.8,1,19.7.3,5.9.4,10.7.4,14.4v75.1h-34.2Z" fill="#171717"/>
                <path d="M767.4,1061.9c-12.3,0-22.9-2.6-31.9-7.9-9-5.3-15.9-12.7-20.8-22.1-4.9-9.5-7.3-20.5-7.3-33.1s2.4-23.8,7.3-33.3c4.9-9.5,11.8-16.8,20.8-22.1,9-5.3,19.6-7.9,31.9-7.9s23,2.6,32,7.9c9,5.3,15.9,12.7,20.7,22.1,4.9,9.5,7.3,20.6,7.3,33.3s-2.4,23.6-7.3,33.1c-4.9,9.5-11.8,16.8-20.7,22.1-9,5.3-19.6,7.9-32,7.9ZM767.4,1036.1c5.8,0,10.7-1.6,14.7-4.9,3.9-3.3,6.9-7.7,8.9-13.4,2-5.7,3-12,3-19.1s-1-13.7-3-19.3c-2-5.6-4.9-10-8.9-13.3-3.9-3.2-8.8-4.8-14.7-4.8s-10.7,1.6-14.6,4.8c-3.9,3.2-6.9,7.6-8.8,13.3-2,5.6-3,12.1-3,19.3s1,13.5,3,19.1c2,5.7,4.9,10.1,8.8,13.4,3.9,3.3,8.8,4.9,14.6,4.9Z" fill="#171717"/>
                <path d="M880.8,1059.5l-45.2-122.6h35l20.6,63.6c2.5,8,4.7,16,6.5,24.1,1.9,8.1,3.8,16.5,5.8,25.2h-7c1.9-8.7,3.8-17.1,5.6-25.2,1.8-8.1,4-16.2,6.5-24.1l20.4-63.6h34.5l-45.3,122.6h-37.4Z" fill="#171717"/>
                <path d="M1012.9,1061.9c-7.7,0-14.7-1.4-20.9-4.1-6.2-2.7-11-6.8-14.6-12.3-3.5-5.4-5.3-12.2-5.3-20.3s1.3-12.5,3.8-17.1c2.5-4.6,6-8.3,10.3-11.1,4.3-2.8,9.3-4.9,14.8-6.4,5.5-1.5,11.3-2.5,17.4-3.1,7.1-.7,12.8-1.4,17.2-2,4.3-.6,7.5-1.6,9.5-3,2-1.4,3-3.3,3-6v-.5c0-3.5-.7-6.5-2.2-8.9-1.5-2.4-3.6-4.3-6.5-5.5-2.9-1.3-6.4-1.9-10.5-1.9s-7.9.6-11.1,1.9c-3.1,1.3-5.7,3-7.7,5.1-2,2.1-3.4,4.5-4.4,7.1l-30.2-4.9c2.1-7.2,5.6-13.2,10.5-18.2,4.9-5,11-8.8,18.3-11.4,7.3-2.6,15.5-3.9,24.6-3.9s13,.8,19.2,2.4c6.2,1.6,11.8,4,16.7,7.3,4.9,3.3,8.8,7.6,11.7,12.9,2.9,5.3,4.3,11.6,4.3,19v82.6h-31.1v-17h-1.1c-2,3.8-4.6,7.1-7.9,10-3.3,2.9-7.3,5.2-11.9,6.9-4.6,1.7-10,2.5-16.1,2.5ZM1022.3,1038.8c5.2,0,9.7-1,13.7-3.1,3.9-2,7-4.8,9.2-8.3s3.3-7.4,3.3-11.7v-13.3c-1,.7-2.4,1.4-4.4,2-2,.6-4.2,1.1-6.6,1.5-2.4.4-4.8.8-7.1,1.2-2.3.4-4.4.7-6.2.9-4,.6-7.6,1.5-10.6,2.9-3.1,1.3-5.4,3.1-7.1,5.2-1.7,2.2-2.5,4.9-2.5,8.3s.8,5.8,2.4,7.9c1.6,2.2,3.8,3.8,6.6,4.9,2.8,1.1,6,1.6,9.5,1.6Z" fill="#171717"/>
                <path d="M1182.2,1061.7c-15.3,0-28.7-3.4-40.2-10.1-11.5-6.8-20.5-16.4-27-28.9-6.5-12.5-9.7-27.4-9.7-44.6s3.4-32.8,10.1-45.3c6.7-12.5,15.8-22.1,27.3-28.8,11.5-6.7,24.4-10,38.7-10s17.8,1.3,25.7,4c7.9,2.7,15,6.5,21.2,11.3,6.2,4.9,11.2,10.7,15.1,17.4,3.9,6.7,6.4,14.1,7.6,22.2h-34c-1.2-3.9-2.8-7.5-4.9-10.6-2.1-3.1-4.6-5.8-7.6-7.9-3-2.2-6.3-3.9-10.1-5-3.8-1.1-8-1.7-12.5-1.7-8.4,0-15.8,2.1-22.3,6.3-6.4,4.2-11.4,10.3-15,18.4-3.6,8-5.4,17.8-5.4,29.4s1.8,21.4,5.3,29.4c3.5,8.1,8.5,14.2,15,18.5,6.4,4.2,14,6.4,22.8,6.4s14.7-1.4,20.3-4.3c5.6-2.9,10-6.9,13-12.2,3-5.3,4.6-11.5,4.6-18.6l7,1h-42.5v-25.4h68v20.4c0,14.3-3,26.6-9.1,36.9-6.1,10.3-14.4,18.2-25,23.7-10.6,5.5-22.7,8.3-36.4,8.3Z" fill="#171717"/>
                <path d="M1277.6,1059.5v-122.6h31.8v21.4h1.3c2.3-7.6,6-13.3,11.3-17.2,5.3-3.9,11.4-5.8,18.3-5.8s3.5,0,5.5.3c2,.2,3.7.5,5.2.8v29.4c-1.5-.5-3.6-.9-6.4-1.2-2.8-.3-5.4-.4-7.9-.4-5,0-9.5,1.1-13.5,3.2-4,2.2-7.1,5.2-9.4,9-2.2,3.8-3.3,8.3-3.3,13.4v69.7h-32.9Z" fill="#171717"/>
                <path d="M1400.2,1061.9c-7.7,0-14.7-1.4-20.9-4.1-6.2-2.7-11-6.8-14.6-12.3-3.5-5.4-5.3-12.2-5.3-20.3s1.3-12.5,3.8-17.1c2.5-4.6,6-8.3,10.3-11.1,4.3-2.8,9.3-4.9,14.8-6.4,5.5-1.5,11.3-2.5,17.4-3.1,7.1-.7,12.8-1.4,17.2-2,4.3-.6,7.5-1.6,9.5-3,2-1.4,3-3.3,3-6v-.5c0-3.5-.7-6.5-2.2-8.9-1.5-2.4-3.6-4.3-6.5-5.5-2.9-1.3-6.4-1.9-10.5-1.9s-7.9.6-11.1,1.9c-3.1,1.3-5.7,3-7.7,5.1-2,2.1-3.4,4.5-4.4,7.1l-30.2-4.9c2.1-7.2,5.6-13.2,10.5-18.2,4.9-5,11-8.8,18.3-11.4,7.3-2.6,15.5-3.9,24.6-3.9s13,.8,19.2,2.4c6.2,1.6,11.8,4,16.7,7.3,4.9,3.3,8.8,7.6,11.7,12.9,2.9,5.3,4.3,11.6,4.3,19v82.6h-31.1v-17h-1.1c-2,3.8-4.6,7.1-7.9,10-3.3,2.9-7.3,5.2-11.9,6.9-4.6,1.7-10,2.5-16.1,2.5ZM1409.5,1038.8c5.2,0,9.7-1,13.7-3.1,3.9-2,7-4.8,9.2-8.3s3.3-7.4,3.3-11.7v-13.3c-1,.7-2.4,1.4-4.4,2-2,.6-4.2,1.1-6.6,1.5-2.4.4-4.8.8-7.1,1.2-2.3.4-4.4.7-6.2.9-4,.6-7.6,1.5-10.6,2.9-3.1,1.3-5.4,3.1-7.1,5.2-1.7,2.2-2.5,4.9-2.5,8.3s.8,5.8,2.4,7.9c1.6,2.2,3.8,3.8,6.6,4.9,2.8,1.1,6,1.6,9.5,1.6Z" fill="#171717"/>
                <path d="M1496.3,1105.4v-168.4h32.3v20.6h1.5c1.5-3.2,3.7-6.5,6.5-10,2.8-3.4,6.5-6.3,11.1-8.7,4.6-2.3,10.4-3.5,17.3-3.5s17.4,2.3,24.9,7c7.5,4.7,13.5,11.7,18,21.1,4.5,9.4,6.7,21,6.7,35s-2.2,25.1-6.6,34.5c-4.4,9.4-10.3,16.5-17.9,21.4-7.5,4.9-16,7.3-25.4,7.3s-12.3-1.1-16.9-3.4c-4.6-2.3-8.4-5.1-11.2-8.4-2.9-3.3-5.1-6.6-6.6-9.9h-1v65.5h-32.9ZM1554.9,1035.2c5.7,0,10.5-1.6,14.4-4.7,3.9-3.1,6.9-7.5,8.9-13,2-5.6,3-11.9,3-19.1s-1-13.5-3-19c-2-5.5-5-9.8-8.8-12.9-3.9-3.1-8.7-4.7-14.5-4.7s-10.4,1.5-14.4,4.6c-3.9,3-6.9,7.3-9,12.7-2,5.4-3.1,11.9-3.1,19.4s1,13.8,3.1,19.4c2.1,5.5,5.1,9.8,9,12.9,3.9,3.1,8.7,4.6,14.3,4.6Z" fill="#171717"/>
                <path d="M1670.8,988.6v70.9h-32.9v-163.4h32.2v71.4h-2.6c3.2-10.2,8.1-18.1,14.6-23.7,6.5-5.6,15-8.4,25.4-8.4s15.9,1.8,22.2,5.5c6.3,3.7,11.2,9,14.7,15.9,3.5,6.9,5.3,15.1,5.3,24.7v78h-33v-72.3c0-7.6-2-13.6-5.9-17.9-3.9-4.3-9.3-6.5-16.3-6.5s-8.7,1-12.3,3c-3.6,2-6.4,4.9-8.4,8.7-2,3.8-3,8.4-3,13.9Z" fill="#171717"/>
              </g>
              <g>
                <path d="M271.9,1059.2h43.9v-85.8l35.9,52.8s20.7,33.2,69.4,33.2h40.8v-108.6h-44.3v64.2s-20.9,3.1-34-19.7l-67.8-100.3h-43.9v164.2Z" fill="#2563eb"/>
                <path d="M352.7,927.9l27.9,41.5s5.6-30,37.1-30h44.4v-43.8h-51.1s-35.6,1.8-58.2,32.2h0Z" fill="#2563eb"/>
              </g>
            </svg>
          </div>
        </Link>

        <nav className="flex items-center space-x-6">
          <div className="relative">
            <div
              ref={solutionsRef}
              className="relative"
              onMouseEnter={handleMouseEnterSolutions}
              onMouseLeave={handleMouseLeaveSolutions}
            >
              <button
                className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group ${
                  isMegaMenuOpen ? "text-blue-600" : ""
                }`}
                aria-expanded={isMegaMenuOpen}
                aria-haspopup="true"
              >
                <span>Çözümler</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""}`}
                />
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${
                    isMegaMenuOpen ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            </div>

            {/* Fixed Mega Menu Container */}
            <div
              ref={megaMenuRef}
              className="absolute top-full left-0 pt-2 z-50"
              onMouseEnter={handleMouseEnterMegaMenu}
              onMouseLeave={handleMouseLeaveMegaMenu}
            >
              <div className="fixed left-0 right-0 z-50">
                <MegaMenu
                  isOpen={isMegaMenuOpen}
                  onClose={closeMegaMenu}
                  activeSolutionGroup={activeSolutionGroup}
                  setActiveSolutionGroup={setActiveSolutionGroup}
                />
              </div>
            </div>
          </div>
          <Link href="/sunucu" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Sunucu
          </Link>
          <Link href="/referanslar" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Referanslar
          </Link>
          <Link href="/iletisim" className="text-sm font-medium hover:text-blue-600 transition-colors">
            İletişim
          </Link>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        {/* Search Icon with Popup */}
        <div className="relative" ref={searchRef}>
          <button
            onClick={handleSearchToggle}
            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group"
            aria-label="Arama"
          >
            <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

          {/* Search Popup */}
          {isSearchOpen && (
            <div className="absolute right-0 top-full mt-2 w-[500px] bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50 max-h-[600px] overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{t("search")}</h3>
                <button
                  onClick={handleSearchToggle}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSearchSubmit} className="space-y-3">
                <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t("searchPlaceholder")}
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-gray-500"
                    autoFocus
                  />
                </div>
              </form>

              {/* Search Results */}
              {searchQuery.trim() && (
                <div className="mt-4 pt-3 border-t border-gray-100">
                  {isSearching ? (
                    <div className="flex items-center justify-center py-4">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                      <span className="ml-2 text-sm text-gray-500">{t("searching")}</span>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="space-y-2 max-h-80 overflow-y-auto">
                      <p className="text-xs text-gray-500 mb-2 font-medium">{t("results")}</p>
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearchResultClick(result.href)}
                          className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors group border border-transparent hover:border-gray-200"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 truncate">
                                  {result.title}
                                </span>
                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full flex-shrink-0">
                                  {result.type}
                                </span>
                              </div>
                              {result.description && (
                                <p className="text-xs text-gray-600 line-clamp-2 mb-1">
                                  {result.description}
                                </p>
                              )}
                              {result.category && result.category !== "Popüler" && (
                                <div className="flex items-center space-x-1">
                                  <span className="text-xs text-gray-400">Kategori:</span>
                                  <span className="text-xs text-blue-600 font-medium">
                                    {result.category}
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="flex-shrink-0 ml-2">
                              <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-blue-600 transition-colors"></div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="py-4 text-center">
                      <p className="text-sm text-gray-500 mb-2">{t("noResults")}</p>
                      <p className="text-xs text-gray-400">
                        Farklı anahtar kelimeler deneyin veya popüler aramaları kullanın
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Popular Searches */}
              {!searchQuery.trim() && (
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-2 font-medium">{t("popularSearches")}</p>
                  <div className="flex flex-wrap gap-2">
                    {popularSearchTerms.map((term) => (
                      <button
                        key={term}
                        onClick={() => handlePopularSearchClick(term)}
                        className="text-xs bg-gray-100 hover:bg-blue-100 hover:text-blue-700 px-3 py-1.5 rounded-full transition-colors font-medium"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Language Switcher */}
        <div className="relative" ref={languageRef}>
          <button
            onClick={handleLanguageToggle}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-200 group"
            aria-label="Dil değiştir"
          >
            <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${isLanguageOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Language Popup */}
          {isLanguageOpen && (
            <>
              {/* Backdrop - Header'ın altından başlar */}
              <div 
                className="fixed top-16 left-0 right-0 bottom-0 bg-black/20 backdrop-blur-sm z-40 animate-in fade-in duration-200"
                onClick={() => setIsLanguageOpen(false)}
              />
              
              {/* Popup */}
              <div 
                className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50 animate-in slide-in-from-top-2 duration-200"
                style={{
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-4 pb-3 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900">Dil Seçimi</h3>
                  <button
                    onClick={() => setIsLanguageOpen(false)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200 hover:scale-110"
                    aria-label="Kapat"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </div>

                {/* Language Options */}
                <div className="py-2">
                  <button
                    onClick={() => handleLanguageChange("tr")}
                    className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-all duration-200 rounded-lg mx-2 ${
                      language === "tr" ? "bg-blue-50 border-r-2 border-blue-600" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {FlagIcons.tr}
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-medium text-gray-900">Türkçe</div>
                        <div className="text-xs text-gray-500">Turkish</div>
                      </div>
                    </div>
                    {language === "tr" && (
                      <div className="flex-shrink-0">
                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center animate-in fade-in duration-200">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>

                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-all duration-200 rounded-lg mx-2 ${
                      language === "en" ? "bg-blue-50 border-r-2 border-blue-600" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {FlagIcons.en}
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-medium text-gray-900">English</div>
                        <div className="text-xs text-gray-500">İngilizce</div>
                      </div>
                    </div>
                    {language === "en" && (
                      <div className="flex-shrink-0">
                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center animate-in fade-in duration-200">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                </div>

                {/* Footer */}
                <div className="px-4 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    Dil değişikliği tüm sayfalarda geçerli olacaktır
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
