"use client"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
  opacities,
}: {
  /**
   * 0.1 - slower
   * 1.0 - faster
   */
  animationSpeed?: number
  colors?: number[][]
  containerClassName?: string
  dotSize?: number
  showGradient?: boolean
  opacities?: number[]
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [styleId] = useState(`canvas-dots-${Math.random().toString(36).substring(2, 9)}`)

  useEffect(() => {
    // Fallback animation using CSS instead of Three.js
    const container = containerRef.current
    if (!container) return

    // Create animation keyframes
    const styleElement = document.createElement("style")
    styleElement.id = styleId
    styleElement.innerHTML = `
    @keyframes dotFadeIn {
      0% { opacity: 0; transform: scale(0); }
      100% { opacity: var(--dot-opacity, 0.5); transform: scale(1); }
    }
  `
    document.head.appendChild(styleElement)

    // Create animated background with dots - reduzir quantidade significativamente
    const dotCount = Math.min(80, Math.floor(window.innerWidth / 15)) // Menos pontos, ajuste dinâmico mais eficiente
    container.innerHTML = ""

    // Crie um fragmento para melhorar a performance de inserção de múltiplos elementos
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div")
      const size = (1 + (i % 3)) * (dotSize / 2) // Simplificar cálculo usando índice em vez de Math.random()
      const colorSet = colors[i % colors.length] // Usar índice para selecionar cor
      const opacity = opacities ? opacities[i % opacities.length] : 0.5 + (i % 5) * 0.1 // Simplificar cálculo
      const delay = (i % 10) * 0.3 // Delay baseado no índice

      // Convert RGB to CSS color
      const color = `rgb(${colorSet[0]}, ${colorSet[1]}, ${colorSet[2]})`

      // Style the dot
      dot.style.position = "absolute"
      dot.style.width = `${size}px`
      dot.style.height = `${size}px`
      dot.style.backgroundColor = color
      dot.style.borderRadius = "50%"
      dot.style.left = `${Math.random() * 100}%`
      dot.style.top = `${Math.random() * 100}%`
      dot.style.setProperty("--dot-opacity", opacity.toString())
      dot.style.animation = `dotFadeIn ${3 / animationSpeed}s forwards ${delay}s`

      fragment.appendChild(dot)
    }

    container.appendChild(fragment)

    return () => {
      if (document.getElementById(styleId)) {
        document.head.removeChild(document.getElementById(styleId)!)
      }
    }
  }, [animationSpeed, colors, dotSize, styleId, opacities])

  return (
    <div className={cn("h-full relative bg-black w-full", containerClassName)}>
      <div ref={containerRef} className="h-full w-full absolute inset-0 overflow-hidden"></div>
      {showGradient && <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />}
    </div>
  )
}
