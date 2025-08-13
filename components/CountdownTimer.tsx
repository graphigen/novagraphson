"use client"

import { useCountdown } from '@/hooks/useCountdown'

interface CountdownTimerProps {
  variant?: 'desktop' | 'tablet' | 'mobile'
  showLabels?: boolean
  className?: string
}

export const CountdownTimer = ({ 
  variant = 'desktop', 
  showLabels = true,
  className = '' 
}: CountdownTimerProps) => {
  const { timeLeft, isExpired } = useCountdown()

  if (isExpired) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <div className="bg-red-500 bg-opacity-20 backdrop-blur-sm rounded px-2 py-1 border border-red-500 border-opacity-30">
          <span className="text-xs font-bold text-red-200">Süre Doldu!</span>
        </div>
      </div>
    )
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'desktop':
        return {
          container: 'space-x-2',
          box: 'px-1.5 py-0.5 min-w-[1.75rem]',
          text: 'text-xs',
          label: 'text-xs text-blue-100'
        }
      case 'tablet':
        return {
          container: 'space-x-1.5',
          box: 'px-1 py-0.5 min-w-[1.5rem]',
          text: 'text-xs',
          label: 'text-xs text-blue-100'
        }
      case 'mobile':
        return {
          container: 'space-x-1',
          box: 'px-1 py-0.5 min-w-[1.25rem]',
          text: 'text-[9px]',
          label: 'text-[9px] text-blue-100'
        }
      default:
        return {
          container: 'space-x-2',
          box: 'px-1.5 py-0.5 min-w-[1.75rem]',
          text: 'text-xs',
          label: 'text-xs text-blue-100'
        }
    }
  }

  const classes = getVariantClasses()

  return (
    <div className={`flex items-center ${classes.container} ${className}`}>
      {/* Gün */}
      <div className="flex flex-col items-center space-y-0.5">
        <div className={`bg-white bg-opacity-15 backdrop-blur-sm rounded ${classes.box} text-center border border-white border-opacity-20 shadow-sm`}>
          <span className={`font-bold ${classes.text}`}>
            {timeLeft.days.toString().padStart(2, '0')}
          </span>
        </div>
        {showLabels && <span className={classes.label}>Gün</span>}
      </div>

      <span className="text-white text-opacity-40">:</span>

      {/* Saat */}
      <div className="flex flex-col items-center space-y-0.5">
        <div className={`bg-white bg-opacity-15 backdrop-blur-sm rounded ${classes.box} text-center border border-white border-opacity-20 shadow-sm`}>
          <span className={`font-bold ${classes.text}`}>
            {timeLeft.hours.toString().padStart(2, '0')}
          </span>
        </div>
        {showLabels && <span className={classes.label}>Saat</span>}
      </div>

      <span className="text-white text-opacity-40">:</span>

      {/* Dakika */}
      <div className="flex flex-col items-center space-y-0.5">
        <div className={`bg-white bg-opacity-15 backdrop-blur-sm rounded ${classes.box} text-center border border-white border-opacity-20 shadow-sm`}>
          <span className={`font-bold ${classes.text}`}>
            {timeLeft.minutes.toString().padStart(2, '0')}
          </span>
        </div>
        {showLabels && <span className={classes.label}>Dakika</span>}
      </div>

      {/* Saniye (sadece desktop'ta göster) */}
      {variant === 'desktop' && (
        <>
          <span className="text-white text-opacity-40">:</span>
          <div className="flex flex-col items-center space-y-0.5">
            <div className={`bg-white bg-opacity-15 backdrop-blur-sm rounded ${classes.box} text-center border border-white border-opacity-20 shadow-sm`}>
              <span className={`font-bold ${classes.text}`}>
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
            </div>
            {showLabels && <span className={classes.label}>Saniye</span>}
          </div>
        </>
      )}
    </div>
  )
}
