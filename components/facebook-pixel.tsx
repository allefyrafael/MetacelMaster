"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

declare global {
  interface Window {
    fbq: any
  }
}

export default function FacebookPixel() {
  const pathname = usePathname()

  // Efeito para rastrear visualizações de página
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView")
    }
  }, [pathname])

  return null
}
