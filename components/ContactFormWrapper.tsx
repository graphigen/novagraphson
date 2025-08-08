"use client"

import { useEffect, useState } from "react"
import { ContactForm } from "@/components/ContactForm"
import { useContactForm } from "@/contexts/ContactFormContext"

export function ContactFormWrapper() {
  const [mounted, setMounted] = useState(false)
  
  // useContactForm hook'unu her zaman çağır (hook sırası için)
  const { isOpen, service, closeForm } = useContactForm()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Sadece render'ı koşullu yap, hook'ları değil
  if (!mounted) {
    return null
  }
  
  return <ContactForm isOpen={isOpen} onClose={closeForm} service={service} />
} 