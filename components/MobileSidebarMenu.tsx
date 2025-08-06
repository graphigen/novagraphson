"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

interface MenuItem {
  name: string
  href: string
  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { name: "Ana Sayfa", href: "/" },
  {
    name: "Hizmetler",
    href: "/services",
    children: [
      { name: "Web Tasarım", href: "/services/web-design" },
      { name: "Dijital Pazarlama", href: "/services/digital-marketing" },
      { name: "SEO", href: "/services/seo" },
      { name: "Siber Güvenlik", href: "/services/security" },
    ],
  },
  { name: "Hakkımızda", href: "/about" },
  { name: "İletişim", href: "/contact" },
]

export default function MobileSidebarMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleExpanded = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName) ? prev.filter((item) => item !== itemName) : [...prev, itemName],
    )
  }

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu} />}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NG</span>
              </div>
              <span className="font-bold text-xl">NovaGraph</span>
            </div>
            <button
              onClick={toggleMenu}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleExpanded(item.name)}
                        className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            expandedItems.includes(item.name) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedItems.includes(item.name) && (
                        <ul className="mt-2 ml-4 space-y-1">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <Link
                                href={child.href}
                                onClick={toggleMenu}
                                className="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                              >
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200">
            <button
              onClick={toggleMenu}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Danışmanlık
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
