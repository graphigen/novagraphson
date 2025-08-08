"use client"
import {
  Search,
  Palette,
  Video,
  Users,
  Monitor,
  Shield,
  Wifi,
  Filter,
  Lock,
  Activity,
  BarChart3,
  ArrowRight,
  Code,
  TrendingUp,
  X,
  ChevronDown,
  Server,
  Network,
  Database,
  Cloud,
  Mail,
  Settings,
  Camera,
  AlertTriangle,
  HardDrive,
  Router,
  Cpu,
  Smartphone,
  Laptop,
  Building,
  Zap,
  Globe,
  FileText,
  CheckCircle,
  Wrench,
  ShieldCheck,
  Eye,
  Bell,
  Flame,
  UserCheck,
} from "lucide-react"
import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useContactForm } from "@/contexts/ContactFormContext"

interface Service {
  name: string
  icon: React.ComponentType<{ className?: string }>
  href: string
}

interface SolutionGroup {
  id: string
  title: string
  description: string
  services: Service[]
}

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
  activeSolutionGroup: string
  setActiveSolutionGroup: (groupId: string) => void
}

const MegaMenu = ({ isOpen, onClose, activeSolutionGroup, setActiveSolutionGroup }: MegaMenuProps) => {
  const { openForm } = useContactForm()
  
  const solutionGroups: SolutionGroup[] = [
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

  const activeGroup = solutionGroups.find((group) => group.id === activeSolutionGroup) || solutionGroups[0]

  const handleServiceClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      window.location.href = href
    }
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Desktop Mega Menu - Full Width Fixed */}
      <div className="hidden lg:block">
        <div className="w-screen bg-white shadow-2xl border-t border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Left Column - Solution Groups */}
              <div className="col-span-3">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Çözüm Grupları</h3>
                <div className="space-y-3">
                  {solutionGroups.map((group) => (
                    <div
                      key={group.id}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                        activeSolutionGroup === group.id
                          ? "bg-blue-50 border border-blue-200 shadow-sm"
                          : "bg-gray-50 hover:bg-white hover:border hover:border-gray-200 hover:shadow-sm"
                      }`}
                      onMouseEnter={() => setActiveSolutionGroup(group.id)}
                      onClick={() => setActiveSolutionGroup(group.id)}
                    >
                      <h4
                        className={`font-semibold mb-2 ${
                          activeSolutionGroup === group.id ? "text-blue-700" : "text-gray-900"
                        }`}
                      >
                        {group.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{group.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle Column - Services */}
              <div className="col-span-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">{activeGroup?.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {activeGroup?.services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleServiceClick(service.href)}
                      className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-200 text-left w-full border border-transparent hover:border-blue-100"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <service.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-700 group-hover:text-blue-700 font-medium transition-colors">
                          {service.name}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    </button>
                  ))}
                </div>

                {/* Bottom Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
                    <button
                      onClick={() => handleServiceClick("#contact")}
                      className="flex items-center space-x-2 hover:text-blue-600 transition-colors group"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">Sizi Arayalım</span>
                    </button>
                    <div className="w-px h-6 bg-gray-300"></div>
                    <button
                      onClick={() => handleServiceClick("/hakkimizda")}
                      className="flex items-center space-x-2 hover:text-blue-600 transition-colors group"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">Hakkımızda</span>
                    </button>
                    <div className="w-px h-6 bg-gray-300"></div>
                    <button
                      onClick={() => handleServiceClick("#novaxcore")}
                      className="flex items-center space-x-2 hover:text-blue-600 transition-colors group"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">NovaXCore</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - CTA */}
              <div className="col-span-3">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 h-full border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Dijital Çözümler</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Markanızı geleceğe taşıyan entegre hizmetler.</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">7/24 Destek</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">Danışmanlık</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">Hızlı Teslimat</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      className="w-full bg-blue-600 text-white rounded-xl px-6 py-3 font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                      onClick={() => {
                        openForm("Teklif")
                        onClose()
                      }}
                    >
                      Teklif Al
                    </button>
                    <button
                      className="w-full bg-white text-blue-600 border border-blue-200 rounded-xl px-6 py-3 font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-sm hover:shadow-md"
                      onClick={() => handleServiceClick("/referanslar")}
                    >
                      Referanslar
                    </button>
                  </div>

                  <div className="mt-6 pt-4 border-t border-blue-200 text-center">
                    <p className="text-xs text-gray-600 mb-2">Hemen arayın</p>
                    <button
                      onClick={() => {
                        openForm("Sizi Arayalım")
                        onClose()
                      }}
                      className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      0545 664 2302
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Mega Menu */}
      <div className="lg:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
        <div className="fixed inset-x-0 top-16 bottom-0 bg-white z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Çözümler</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Çözüm Grupları</h3>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {solutionGroups.map((group) => (
                  <button
                    key={group.id}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      activeSolutionGroup === group.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveSolutionGroup(group.id)}
                  >
                    {group.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-2">{activeGroup?.title}</h4>
              <p className="text-sm text-blue-700">{activeGroup?.description}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Hizmetler</h3>
              <div className="space-y-2">
                {activeGroup?.services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceClick(service.href)}
                    className="group flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 text-left w-full"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <service.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-900 font-medium group-hover:text-blue-700 transition-colors">
                      {service.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors ml-auto" />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-4 text-white">
              <h4 className="font-bold text-lg mb-2">Hemen Başlayın</h4>
              <p className="text-blue-100 text-sm mb-4">Danışmanlık için uzman ekibimizle iletişime geçin.</p>
              <div className="space-y-2">
                <button
                  className="w-full bg-white text-blue-600 rounded-lg px-4 py-3 font-semibold hover:bg-blue-50 transition-colors duration-200"
                  onClick={() => {
                    openForm("İletişime Geç")
                    onClose()
                  }}
                >
                  İletişime Geç
                </button>
                <button
                  onClick={() => {
                    openForm("Sizi Arayalım")
                    onClose()
                  }}
                  className="block w-full text-center bg-blue-500 text-white rounded-lg px-4 py-3 font-semibold hover:bg-blue-400 transition-colors duration-200"
                >
                  📞 0545 664 2302
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MegaMenu
