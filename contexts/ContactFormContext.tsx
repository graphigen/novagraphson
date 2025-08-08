"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface ContactFormContextType {
  isOpen: boolean
  service?: string
  openForm: (service?: string) => void
  closeForm: () => void
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined)

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [service, setService] = useState<string | undefined>(undefined)

  const openForm = (selectedService?: string) => {
    setService(selectedService)
    setIsOpen(true)
  }

  const closeForm = () => {
    setIsOpen(false)
    setService(undefined)
  }

  return (
    <ContactFormContext.Provider value={{ isOpen, service, openForm, closeForm }}>
      {children}
    </ContactFormContext.Provider>
  )
}

export function useContactForm() {
  const context = useContext(ContactFormContext)
  if (context === undefined) {
    throw new Error("useContactForm must be used within a ContactFormProvider")
  }
  return context
}

export { ContactFormContext } 