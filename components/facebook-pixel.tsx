"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

declare global {
  interface Window {
    fbq: any
  }
}

export default function FacebookPixel() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Dispara um PageView sempre que a rota muda
    if (window.fbq) {
      window.fbq("track", "PageView")
    }
  }, [pathname, searchParams])

  // Função para rastrear eventos personalizados
  const trackEvent = (event: string, options = {}) => {
    if (window.fbq) {
      window.fbq("track", event, options)
    }
  }

  return null
}

