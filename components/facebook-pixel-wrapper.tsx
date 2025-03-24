"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Importar o FacebookPixel de forma dinâmica dentro de um Client Component
const FacebookPixelComponent = dynamic(() => import("@/components/facebook-pixel"), {
  ssr: false,
})

export default function FacebookPixelWrapper() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <FacebookPixelComponent />
}

