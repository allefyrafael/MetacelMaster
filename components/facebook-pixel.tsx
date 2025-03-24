"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

declare global {
  interface Window {
    fbq: any
  }
}

export default function FacebookPixel() {
  const pathname = usePathname()
  // Remover useSearchParams e usar uma abordagem alternativa
  const [mounted, setMounted] = useState(false)

  // Efeito para montar o componente apenas no cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  // Efeito para rastrear visualizações de página
  useEffect(() => {
    if (mounted && typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView")
    }
  }, [pathname, mounted])

  return null
}

