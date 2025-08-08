"use client"

import { useEffect } from 'react'

export const SecurityProtection = () => {
  useEffect(() => {
    // Sağ tık engelleme
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Klavye kısayolları engelleme
    const preventKeyboardShortcuts = (e: KeyboardEvent) => {
      // Ctrl+U (Kaynak görüntüleme)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault()
        return false
      }
      // Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault()
        return false
      }
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault()
        return false
      }
      // Ctrl+Shift+C (Element Inspector)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault()
        return false
      }
      // F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault()
        return false
      }
      // Ctrl+S (Kaydetme)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        return false
      }
      // Ctrl+P (Yazdırma)
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault()
        return false
      }
    }

    // Metin seçimi engelleme
    const preventTextSelection = (e: Event) => {
      e.preventDefault()
      return false
    }

    // Sürükleme engelleme
    const preventDrag = (e: DragEvent) => {
      e.preventDefault()
      return false
    }

    // Kopyalama engelleme
    const preventCopy = (e: ClipboardEvent) => {
      e.preventDefault()
      return false
    }

    // Developer Tools tespiti
    const detectDevTools = () => {
      const devtools = {
        open: false,
        orientation: null as string | null
      }

      const threshold = 160

      const emitEvent = (isOpen: boolean, orientation?: string) => {
        if (devtools.open !== isOpen) {
          devtools.open = isOpen
          devtools.orientation = orientation || null
          
          if (isOpen) {
            // Developer Tools açıldığında yapılacak işlemler
            document.body.style.display = 'none'
            setTimeout(() => {
              document.body.style.display = 'block'
            }, 100)
          }
        }
      }

      const main = ({emitEvents = true} = {}) => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold
        const heightThreshold = window.outerHeight - window.innerHeight > threshold
        const orientation = widthThreshold ? 'vertical' : 'horizontal'

        if (
          !(heightThreshold && widthThreshold) &&
          ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
        ) {
          if ((!devtools.open || devtools.orientation !== orientation) && emitEvents) {
            emitEvent(true, orientation)
          }
        } else {
          if (devtools.open && emitEvents) {
            emitEvent(false, undefined)
          }
        }
      }

      main({emitEvents: true})
      setInterval(main, 500)
    }

    // Event listener'ları ekle
    document.addEventListener('contextmenu', preventContextMenu)
    document.addEventListener('keydown', preventKeyboardShortcuts)
    document.addEventListener('selectstart', preventTextSelection)
    document.addEventListener('dragstart', preventDrag)
    document.addEventListener('copy', preventCopy)
    document.addEventListener('cut', preventCopy)

    // Developer Tools tespitini başlat
    detectDevTools()

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', preventContextMenu)
      document.removeEventListener('keydown', preventKeyboardShortcuts)
      document.removeEventListener('selectstart', preventTextSelection)
      document.removeEventListener('dragstart', preventDrag)
      document.removeEventListener('copy', preventCopy)
      document.removeEventListener('cut', preventCopy)
    }
  }, [])

  return null
}
