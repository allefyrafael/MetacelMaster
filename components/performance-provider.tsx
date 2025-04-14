"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState, useMemo } from "react"
import { useFramerReducer } from "@/hooks/use-framer-reducer"

type PerformanceLevel = "high" | "medium" | "low"

interface PerformanceContextType {
  performanceLevel: PerformanceLevel
  isHighPerformance: boolean
  isMediumPerformance: boolean
  isLowPerformance: boolean
  particleReductionFactor: number
}

const PerformanceContext = createContext<PerformanceContextType>({
  performanceLevel: "high",
  isHighPerformance: true,
  isMediumPerformance: false,
  isLowPerformance: false,
  particleReductionFactor: 1,
})

export function PerformanceProvider({ children }: { children: React.ReactNode }) {
  const [performanceLevel, setPerformanceLevel] = useState<PerformanceLevel>("high")

  // Usar o hook para reduzir automaticamente animações em dispositivos de baixa performance
  useFramerReducer()

  useEffect(() => {
    // Detectar o nível de performance do dispositivo
    const detectPerformance = () => {
      if (typeof window === "undefined") return

      // Verificar se é um dispositivo móvel
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

      // Verificar hardware concurrency (número de núcleos de CPU)
      const cpuCores = navigator.hardwareConcurrency || 0

      // Verificar se o dispositivo tem pouca memória (se disponível)
      const lowMemory = "deviceMemory" in navigator && (navigator as any).deviceMemory < 4

      // Determinar nível de performance
      if ((isMobile && cpuCores <= 4) || lowMemory || cpuCores <= 2) {
        setPerformanceLevel("low")
      } else if (isMobile || (cpuCores > 2 && cpuCores <= 6)) {
        setPerformanceLevel("medium")
      } else {
        setPerformanceLevel("high")
      }
    }

    detectPerformance()
  }, [])

  // Memoize o valor do contexto para evitar re-renderizações desnecessárias
  const contextValue = useMemo(
    () => ({
      performanceLevel,
      isHighPerformance: performanceLevel === "high",
      isMediumPerformance: performanceLevel === "medium",
      isLowPerformance: performanceLevel === "low",
      particleReductionFactor: performanceLevel === "high" ? 1 : performanceLevel === "medium" ? 0.5 : 0.3,
    }),
    [performanceLevel],
  )

  return <PerformanceContext.Provider value={contextValue}>{children}</PerformanceContext.Provider>
}

// Hook para usar o contexto de performance
export function usePerformance() {
  return useContext(PerformanceContext)
}

