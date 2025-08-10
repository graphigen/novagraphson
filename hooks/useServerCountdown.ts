import { useState, useEffect, useCallback } from 'react'

interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownData {
  targetDate: string
  message: string
}

export const useServerCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [targetDate, setTargetDate] = useState<Date | null>(null)

  const fetchTargetDate = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const response = await fetch('/api/countdown')
      if (!response.ok) {
        throw new Error('Failed to fetch countdown data')
      }
      
      const data: CountdownData = await response.json()
      const newTargetDate = new Date(data.targetDate)
      setTargetDate(newTargetDate)
      
      // Store the target date in localStorage for persistence
      localStorage.setItem('countdownTargetDate', newTargetDate.toISOString())
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred')
      
      // Fallback to localStorage if API fails
      const storedDate = localStorage.getItem('countdownTargetDate')
      if (storedDate) {
        setTargetDate(new Date(storedDate))
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  const calculateTimeLeft = useCallback(() => {
    if (!targetDate) return

    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    } else {
      // Countdown has ended, fetch new target date
      fetchTargetDate()
    }
  }, [targetDate, fetchTargetDate])

  useEffect(() => {
    // Try to get stored target date first
    const storedDate = localStorage.getItem('countdownTargetDate')
    if (storedDate) {
      const parsedDate = new Date(storedDate)
      // Check if stored date is still valid (not in the past)
      if (parsedDate > new Date()) {
        setTargetDate(parsedDate)
        setIsLoading(false)
      } else {
        // Stored date is expired, fetch new one
        fetchTargetDate()
      }
    } else {
      // No stored date, fetch from server
      fetchTargetDate()
    }
  }, [fetchTargetDate])

  useEffect(() => {
    if (!targetDate) return

    // Calculate time left immediately
    calculateTimeLeft()

    // Set up interval for countdown updates
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [targetDate, calculateTimeLeft])

  const refreshCountdown = useCallback(() => {
    fetchTargetDate()
  }, [fetchTargetDate])

  return {
    timeLeft,
    isLoading,
    error,
    targetDate,
    refreshCountdown
  }
}
