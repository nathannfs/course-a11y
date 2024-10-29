'use client'

import { axeAccessibilityReporter } from '@/utils/axe-accessibility-reporter'
import { useEffect } from 'react'

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    axeAccessibilityReporter()
  }, [])

  return children
}
