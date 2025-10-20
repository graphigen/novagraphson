"use client"

import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react"
import { useContactForm } from "@/contexts/ContactFormContext"

export const CTABanner = () => {
  const { openForm } = useContactForm()

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dijital Dönüşümünüzü Başlatalım</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uzman ekibimizle birlikte işletmenizi dijital dünyada bir adım öne taşıyın.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
            <p className="text-gray-600 mb-4">+90 545 664 2302</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Hemen Ara</button>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">E-posta</h3>
            <p className="text-gray-600 mb-4">info@novagraph.com.tr</p>
            <button className="text-green-600 hover:text-green-700 font-medium">E-posta Gönder</button>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">+90 545 664 2302</p>
            <button className="text-emerald-600 hover:text-emerald-700 font-medium">WhatsApp'tan Yaz</button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={() => openForm()}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            İletişime Geç
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
