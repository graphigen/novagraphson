"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "tr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface Translations {
  [key: string]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    // Navigation
    products: "Products",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    enterprise: "Enterprise",
    signIn: "Sign In",
    getStarted: "Get Started",
    language: "Language",
    solutions: "Solutions",

    // Products
    advancedAnalytics: "Advanced Analytics",
    dataVisualization: "Data Visualization",
    machineLearning: "Machine Learning",

    // Contact Form
    name: "Name",
    email: "Email",
    phone: "Phone",
    company: "Company",
    message: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    messageSent: "Message sent successfully!",
    messageError: "Error sending message. Please try again.",

    // Validation
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    emailInvalid: "Please enter a valid email address",
    phoneInvalid: "Please enter a valid phone number",
    messageRequired: "Message is required",

    // Search
    search: "Search",
    searchPlaceholder: "Search for services...",
    searching: "Searching...",
    results: "Results",
    noResults: "No results found",
    popularSearches: "Popular Searches",

    // Languages
    english: "English",
    turkish: "Turkish",

    // Hero Section
    heroTitle: "Transform Your Data Into Actionable Insights",
    heroSubtitle:
      "Discover hidden patterns and relationships in your data with NovaGraph's powerful graph analytics platform.",
    startFree: "Start Free Trial",
    watchDemo: "Watch Demo",

    // Features
    featuresTitle: "Powerful Features for Modern Analytics",
    featuresSubtitle: "Everything you need to analyze, visualize, and understand your graph data.",

    // CTA
    ctaTitle: "Ready to Transform Your Data?",
    ctaSubtitle: "Join thousands of companies using NovaGraph to unlock insights from their data.",
    ctaButton: "Start Your Free Trial",

    // Footer
    footerDescription: "Transform your data into actionable insights with powerful graph analytics.",
    quickLinks: "Quick Links",
    support: "Support",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    documentation: "Documentation",
    helpCenter: "Help Center",
    allRightsReserved: "All rights reserved.",
  },
  tr: {
    // Navigation
    products: "Ürünler",
    pricing: "Fiyatlandırma",
    about: "Hakkımızda",
    contact: "İletişim",
    enterprise: "Kurumsal",
    signIn: "Giriş Yap",
    getStarted: "Başlayın",
    language: "Dil",
    solutions: "Çözümler",

    // Products
    advancedAnalytics: "Gelişmiş Analitik",
    dataVisualization: "Veri Görselleştirme",
    machineLearning: "Makine Öğrenmesi",

    // Contact Form
    name: "Ad",
    email: "E-posta",
    phone: "Telefon",
    company: "Şirket",
    message: "Mesaj",
    sendMessage: "Mesaj Gönder",
    sending: "Gönderiliyor...",
    messageSent: "Mesaj başarıyla gönderildi!",
    messageError: "Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.",

    // Validation
    nameRequired: "Ad gereklidir",
    emailRequired: "E-posta gereklidir",
    emailInvalid: "Lütfen geçerli bir e-posta adresi girin",
    phoneInvalid: "Lütfen geçerli bir telefon numarası girin",
    messageRequired: "Mesaj gereklidir",

    // Search
    search: "Ara",
    searchPlaceholder: "Hizmet arayın...",
    searching: "Aranıyor...",
    results: "Sonuçlar",
    noResults: "Sonuç bulunamadı",
    popularSearches: "Popüler Aramalar",

    // Languages
    english: "İngilizce",
    turkish: "Türkçe",

    // Hero Section
    heroTitle: "Verilerinizi Eyleme Dönüştürülebilir İçgörülere Çevirin",
    heroSubtitle:
      "NovaGraph'ın güçlü graf analitik platformu ile verilerinizdeki gizli kalıpları ve ilişkileri keşfedin.",
    startFree: "Ücretsiz Deneme Başlat",
    watchDemo: "Demo İzle",

    // Features
    featuresTitle: "Modern Analitik için Güçlü Özellikler",
    featuresSubtitle: "Graf verilerinizi analiz etmek, görselleştirmek ve anlamak için ihtiyacınız olan her şey.",

    // CTA
    ctaTitle: "Verilerinizi Dönüştürmeye Hazır mısınız?",
    ctaSubtitle: "Verilerinden içgörüler elde etmek için NovaGraph kullanan binlerce şirkete katılın.",
    ctaButton: "Ücretsiz Denemenizi Başlatın",

    // Footer
    footerDescription: "Güçlü graf analitikleri ile verilerinizi eyleme dönüştürülebilir içgörülere çevirin.",
    quickLinks: "Hızlı Bağlantılar",
    support: "Destek",
    legal: "Yasal",
    privacyPolicy: "Gizlilik Politikası",
    termsOfService: "Hizmet Şartları",
    documentation: "Dokümantasyon",
    helpCenter: "Yardım Merkezi",
    allRightsReserved: "Tüm hakları saklıdır.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "tr")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export { LanguageContext }
