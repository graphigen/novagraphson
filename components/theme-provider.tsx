'use client'

import * as React from 'react'

interface LocalThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: LocalThemeProviderProps) {
  return <>{children}</>
}
