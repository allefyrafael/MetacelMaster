"use client"

import { useRef, useEffect } from "react"

// Hook personalizado para reduzir a carga de animações do Framer Motion em dispositivos de baixo desempenho
export function useFramerReducer(enabled = true) {
  const processed = useRef(false)

  useEffect(() => {
    // Só executar uma vez
    if (processed.current || !enabled) return
    processed.current = true

    // Detectar dispositivos de baixo desempenho
    const isLowPerformance = () => {
      // Verifica se é um dispositivo móvel
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

      // Se for dispositivo móvel, assumir baixo desempenho
      if (isMobile) return true

      // Verificar número de núcleos de CPU - menos de 4 normalmente indica hardware mais fraco
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return true

      // Verificar se o dispositivo é de baixa memória (se disponível)
      if ("deviceMemory" in navigator && (navigator as any).deviceMemory < 4) return true

      return false
    }

    // Se for dispositivo de baixo desempenho, adicionar classe CSS que reduz animações
    if (isLowPerformance()) {
      document.documentElement.classList.add("reduce-motion")

      // Adicionar CSS que reduz animações
      const style = document.createElement("style")
      style.innerHTML = `
        .reduce-motion .motion-safe {
          transition-duration: 0ms !important;
          animation-duration: 0ms !important;
        }
        
        @media (prefers-reduced-motion: reduce) {
          *, ::before, ::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `
      document.head.appendChild(style)
    }
  }, [enabled])
}
