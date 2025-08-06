"use client"

import { ContactForm } from "@/components/ContactForm"
import { useContactForm } from "@/contexts/ContactFormContext"

export function ContactFormWrapper() {
  const { isOpen, service, closeForm } = useContactForm()

  return <ContactForm isOpen={isOpen} onClose={closeForm} service={service} />
} 