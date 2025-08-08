"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import Image from "next/image"

const partners = [
  {
    name: "Microsoft Azure",
    logo: "/partners/azura-partner.svg.png",
    color: "#0078D4"
  },
  {
    name: "Amazon AWS",
    logo: "/partners/amazon-partner.png",
    color: "#FF9900"
  },
  {
    name: "Google Cloud",
    logo: "/partners/googlecloud-partner.png",
    color: "#4285F4"
  },
  {
    name: "Zoho CRM",
    logo: "/partners/zoho-partner.svg.png",
    color: "#FF6B35"
  },
  {
    name: "Bitrix24",
    logo: "/partners/birtix24-partner.png",
    color: "#2067B2"
  },
  {
    name: "Salesforce",
    logo: "/partners/saleforce-partner.png",
    color: "#00A1E0"
  },
  {
    name: "Ahrefs",
    logo: "/partners/ahrefs-partner.png",
    color: "#FF6B35"
  },
  {
    name: "Semrush",
    logo: "/partners/semrush-partner.png",
    color: "#FF6B35"
  },
  {
    name: "Similarweb",
    logo: "/partners/smilarweb-partner.svg",
    color: "#FF6B35"
  },
  {
    name: "Google Analytics",
    logo: "/partners/google-analytics-partner.webp",
    color: "#4285F4"
  },
  {
    name: "Meta Business Partner",
    logo: "/partners/metabusiness-partner.webp",
    color: "#1877F2"
  },
  {
    name: "TikTok Business Partner",
    logo: "/partners/tiktok-partner.png",
    color: "#000000"
  },
  {
    name: "İyzico",
    logo: "/partners/iyzico-partner.svg.png",
    color: "#FF6B35"
  },
  {
    name: "Stripe",
    logo: "/partners/stripe-partner.svg.png",
    color: "#6772E5"
  },
  {
    name: "PayPal",
    logo: "/partners/paypal-partner.png",
    color: "#003087"
  },
  {
    name: "Zendesk",
    logo: "/partners/zendesk-partner.png.webp",
    color: "#03363D"
  },
  {
    name: "JivoChat",
    logo: "/partners/jivochat-parner.png",
    color: "#FF6B35"
  },
  {
    name: "Cloudflare",
    logo: "/partners/cloudflare-partner.svg.png",
    color: "#F38020"
  },
  {
    name: "IBM Unica",
    logo: "/partners/unica-partner.png",
    color: "#0066CC"
  }
]

export const PartnersSection = () => {
  // Smooth, jank-free ticker using requestAnimationFrame and translate3d
  const containerRef = useRef<HTMLDivElement | null>(null)
  const positionRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const speedPxPerSec = 30 // adjust for desired speed
    const totalWidth = partners.length * 176 // card width + gap
    let lastTs = 0

    const step = (ts: number) => {
      if (!lastTs) lastTs = ts
      const dt = (ts - lastTs) / 1000 // seconds
      lastTs = ts

      positionRef.current -= speedPxPerSec * dt
      if (positionRef.current < -totalWidth) positionRef.current = 0

      const x = positionRef.current
      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${x}px,0,0)`
      }
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnerlerimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dünya çapında tanınmış teknoloji devleri ile iş ortaklığı yapıyoruz.
          </p>
        </motion.div>

        {/* Kayan Partner Logoları Container */}
        <div className="relative h-24 overflow-hidden will-change-transform">
          {/* Kayan Partner Logoları */}
          <div
            ref={containerRef}
            className="flex space-x-4 absolute top-0 left-0 will-change-transform"
            style={{ transform: `translate3d(0,0,0)` }}
          >
            {/* İlk set */}
            {partners.map((partner, index) => {
              const cardPosition = positionRef.current + (index * 176)
              // Kartın ekranın sol kenarından ne kadar uzakta olduğunu hesapla
              const distanceFromLeft = cardPosition + 200
              // Opacity'yi 0-200px aralığında hesapla (kart ekranın solundan çıkarken)
              const opacity = Math.max(0, Math.min(1, distanceFromLeft / 200))
              
              return (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-40 bg-white rounded-xl p-1 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md group"
                  style={{
                    opacity: opacity,
                    transform: `scale(${Math.max(0.9, opacity)})`
                  }}
                >
                  <div className="flex items-center justify-center h-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                      style={{
                        maxWidth: '80px',
                        maxHeight: '80px',
                        width: 'auto',
                        height: 'auto'
                      }}
                    />
                  </div>
                </div>
              )
            })}
            
            {/* İkinci set (sonsuz döngü için) */}
            {partners.map((partner, index) => {
              const cardPosition = positionRef.current + ((index + partners.length) * 176)
              // Kartın ekranın sol kenarından ne kadar uzakta olduğunu hesapla
              const distanceFromLeft = cardPosition + 200
              // Opacity'yi 0-200px aralığında hesapla (kart ekranın solundan çıkarken)
              const opacity = Math.max(0, Math.min(1, distanceFromLeft / 200))
              
              return (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-40 bg-white rounded-xl p-1 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md group"
                  style={{
                    opacity: opacity,
                    transform: `scale(${Math.max(0.9, opacity)})`
                  }}
                >
                  <div className="flex items-center justify-center h-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                      style={{
                        maxWidth: '80px',
                        maxHeight: '80px',
                        width: 'auto',
                        height: 'auto'
                      }}
                    />
                  </div>
                </div>
              )
            })}
            
            {/* Üçüncü set (daha smooth sonsuz döngü için) */}
            {partners.map((partner, index) => {
              const cardPosition = positionRef.current + ((index + partners.length * 2) * 176)
              // Kartın ekranın sol kenarından ne kadar uzakta olduğunu hesapla
              const distanceFromLeft = cardPosition + 200
              // Opacity'yi 0-200px aralığında hesapla (kart ekranın solundan çıkarken)
              const opacity = Math.max(0, Math.min(1, distanceFromLeft / 200))
              
              return (
                <div
                  key={`third-${index}`}
                  className="flex-shrink-0 w-40 bg-white rounded-xl p-1 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md group"
                  style={{
                    opacity: opacity,
                    transform: `scale(${Math.max(0.9, opacity)})`
                  }}
                >
                  <div className="flex items-center justify-center h-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                      style={{
                        maxWidth: '80px',
                        maxHeight: '80px',
                        width: 'auto',
                        height: 'auto'
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 