import { useState, useEffect, useCallback } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownInfo {
  timeLeft: TimeLeft
  isExpired: boolean
  resetCountdown: () => void
  getFormattedTime: () => string
  getProgressPercentage: () => number
  getDebugInfo: () => string
}

const COUNTDOWN_STORAGE_KEY = 'novagraph_countdown_start'
const COUNTDOWN_DURATION = 14 * 24 * 60 * 60 * 1000 // 14 gün

// localStorage'ın mevcut olup olmadığını kontrol et
const isLocalStorageAvailable = (): boolean => {
  if (typeof window === 'undefined') return false
  try {
    const test = '__localStorage_test__'
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch {
    return false
  }
}

export const useCountdown = (): CountdownInfo => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isExpired, setIsExpired] = useState(false)

  // Countdown'ı manuel olarak sıfırlama fonksiyonu
  const resetCountdown = useCallback(() => {
    if (!isLocalStorageAvailable()) return
    
    const newStartTime = new Date().getTime()
    localStorage.setItem(COUNTDOWN_STORAGE_KEY, newStartTime.toString())
    
    // State'i güncelle
    setTimeLeft({
      days: 14,
      hours: 0,
      minutes: 0,
      seconds: 0
    })
    setIsExpired(false)
  }, [])

  // Kalan süreyi formatlanmış string olarak döndür
  const getFormattedTime = useCallback((): string => {
    if (isExpired) return 'Süre doldu!'
    
    const { days, hours, minutes, seconds } = timeLeft
    return `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }, [timeLeft, isExpired])

  // İlerleme yüzdesini hesapla (0-100 arası)
  const getProgressPercentage = useCallback((): number => {
    if (isExpired) return 100
    
    const totalSeconds = 14 * 24 * 60 * 60 // 14 gün toplam saniye
    const remainingSeconds = timeLeft.days * 24 * 60 * 60 + timeLeft.hours * 60 * 60 + timeLeft.minutes * 60 + timeLeft.seconds
    const elapsedSeconds = totalSeconds - remainingSeconds
    
    return Math.round((elapsedSeconds / totalSeconds) * 100)
  }, [timeLeft, isExpired])

  // Debug bilgisi için yardımcı fonksiyon
  const getDebugInfo = useCallback((): string => {
    if (!isLocalStorageAvailable()) return 'localStorage mevcut değil'
    
    const stored = localStorage.getItem(COUNTDOWN_STORAGE_KEY)
    if (!stored) return 'Countdown başlatılmamış'
    
    const startTime = parseInt(stored)
    const now = new Date().getTime()
    const elapsed = now - startTime
    const remaining = COUNTDOWN_DURATION - elapsed
    
    return `Başlangıç: ${new Date(startTime).toLocaleString('tr-TR')}, Kalan: ${Math.floor(remaining / (1000 * 60 * 60 * 24))} gün`
  }, [])

  useEffect(() => {
    // localStorage'dan başlangıç zamanını al veya yeni bir tane oluştur
    const getOrCreateStartTime = (): number => {
      if (!isLocalStorageAvailable()) {
        // localStorage mevcut değilse, şu anki zamanı kullan
        return new Date().getTime()
      }
      
      const stored = localStorage.getItem(COUNTDOWN_STORAGE_KEY)
      
      if (stored) {
        const startTime = parseInt(stored)
        const now = new Date().getTime()
        const elapsed = now - startTime
        
        // Eğer 14 gün geçmişse, yeni bir countdown başlat
        if (elapsed >= COUNTDOWN_DURATION) {
          const newStartTime = now
          localStorage.setItem(COUNTDOWN_STORAGE_KEY, newStartTime.toString())
          return newStartTime
        }
        
        // Mevcut countdown'ı kullan
        return startTime
      } else {
        // İlk kez çalışıyor, yeni countdown başlat
        const newStartTime = new Date().getTime()
        localStorage.setItem(COUNTDOWN_STORAGE_KEY, newStartTime.toString())
        return newStartTime
      }
    }

    const startTime = getOrCreateStartTime()
    const endDate = startTime + COUNTDOWN_DURATION
    
    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = endDate - now

      if (difference <= 0) {
        // Süre doldu
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsExpired(true)
        return
      }

      // Kalan süreyi hesapla
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
      setIsExpired(false)
    }

    // İlk hesaplama
    updateCountdown()

    // Her saniye güncelle
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return { 
    timeLeft, 
    isExpired, 
    resetCountdown, 
    getFormattedTime, 
    getProgressPercentage,
    getDebugInfo
  }
}
