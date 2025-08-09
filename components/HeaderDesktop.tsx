"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import Link from "next/link"
import { Search, X, ChevronDown, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import MegaMenu from "@/components/MegaMenu"
import { LogoHeader } from "@/components/LogoHeader"

type Language = "en" | "tr"

interface SearchResult {
  title: string
  type: string
  href: string
  description?: string
  category?: string
}

// Statik temel arama verileri (bilinen başlıklar)
const baseSearchData: SearchResult[] = [
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
  const [dynamicIndex, setDynamicIndex] = useState<SearchResult[]>([])
  const allSearchData = useMemo(() => {
    // href'e göre tekilleştir
    const map = new Map<string, SearchResult>()
    ;[...baseSearchData, ...dynamicIndex].forEach(item => {
      if (!map.has(item.href)) map.set(item.href, item)
    })
    return Array.from(map.values())
  }, [dynamicIndex])

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

  // Sitemap + DOM iç linklerinden dinamik index (sayfa listesi) yükle
  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const res = await fetch('/sitemap.xml', { cache: 'no-store' })
        const text = await res.text()
        const parser = new DOMParser()
        const xml = parser.parseFromString(text, 'application/xml')
        const locs = Array.from(xml.getElementsByTagName('loc')).map(n => n.textContent || '').filter(Boolean)
        const overrides: Record<string, string> = {
          '/it-infrastructure': 'Altyapı Hizmetleri',
          '/network-solutions': 'Ağ Çözümleri',
          '/server-systems': 'Sunucu Sistemleri',
          '/cloud-backup': 'Bulut & Backup',
          '/mail-licenses': 'Mail & Lisans',
          '/technical-service': 'Teknik Servis',
          '/it-maintenance': 'BT Bakım',
          '/security-systems': 'Güvenlik Sistemleri',
        }
        const toTitle = (path: string) => {
          try {
            const url = new URL(path, window.location.origin)
            const pathname = url.pathname
            if (overrides[pathname]) return overrides[pathname]
            const slug = pathname.replace(/^\/+|\/+$/g, '')
            if (!slug) return 'Ana Sayfa'
            const parts = slug.split('/')
            const last = parts[parts.length - 1]
            return last
              .split('-')
              .map(s => s.charAt(0).toUpperCase() + s.slice(1))
              .join(' ')
          } catch {
            return path
          }
        }
        const itemsFromSitemap: SearchResult[] = locs.map(loc => ({
          title: toTitle(loc),
          type: 'Sayfa',
          href: new URL(loc, window.location.origin).pathname,
          description: undefined,
          category: 'Sayfa'
        }))
        // DOM'daki iç linkleri de ekle (menüler/footerdan gelen yeni sayfalar)
        const anchors = Array.from(document.querySelectorAll('a[href^="/"]')) as HTMLAnchorElement[]
        const hrefs = anchors
          .map(a => a.getAttribute('href') || '')
          .filter(href => href && !href.startsWith('/#') && !href.startsWith('/api'))
        const itemsFromDom: SearchResult[] = hrefs.map(href => ({
          title: toTitle(href),
          type: 'Sayfa',
          href,
          description: undefined,
          category: 'Sayfa'
        }))
        // Birleştir ve filtrele: sadece site içi geçerli yollar
        const merged = [...itemsFromSitemap, ...itemsFromDom]
        const filtered = merged.filter(i => i.href && i.href.startsWith('/'))
        if (!cancelled) setDynamicIndex(filtered)
      } catch (e) {
        // noop
      }
    }
    load()
    return () => { cancelled = true }
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
        
        // Gelişmiş arama - başlık, açıklama, kategori ve yol araması
        const filtered: SearchResult[] = allSearchData.filter((item) =>
          item.title.toLowerCase().includes(query) ||
          (item.description && item.description.toLowerCase().includes(query)) ||
          (item.category && item.category.toLowerCase().includes(query)) ||
          (item.href && item.href.toLowerCase().includes(query))
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
  }, [searchQuery, allSearchData])

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
          <LogoHeader />
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
