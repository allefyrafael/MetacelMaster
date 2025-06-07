"use client"

import { motion } from "framer-motion"
import { Clock, ExternalLink } from "lucide-react"
import { useCallback, useMemo } from "react"

export interface ToolCardProps {
  name: string
  category: string
  price: string
  duration: string
  icon: string
  index: number
  link: string
}

export default function ToolCard({ name, category, price, duration, icon, index, link }: ToolCardProps) {
  // Memoize a função handleClick para evitar recriações em cada renderização
  const handleClick = useCallback(() => {
    window.open(link, "_blank")
  }, [link])

  // Memoize a classe de categoria para evitar recálculos em cada renderização
  const categoryClass = useMemo(() => {
    return category === "android"
      ? "bg-green-500/20 text-green-400"
      : category === "ios"
        ? "bg-blue-500/20 text-blue-400"
        : "bg-purple-500/20 text-purple-400"
  }, [category])

  return (
    <div
      className="bg-gradient-to-br from-gray-900/90 via-gray-900/95 to-black/90 backdrop-blur-sm rounded-lg overflow-hidden border border-green-500/20 hover:border-green-500/50 transition-all group w-full h-full relative cursor-pointer"
      onClick={handleClick}
    >
      {/* Glowing corner effect */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${categoryClass}`}>{category.toUpperCase()}</span>
        </div>

        <h3 className="font-bold text-xl mb-3 text-white group-hover:text-green-400 transition-colors">{name}</h3>

        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-500 font-medium">R$</span>
            <span className="text-gray-300">{price.replace("R$ ", "")}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-green-500" />
            <span className="text-gray-300">Duração: {duration}</span>
          </div>
        </div>

        {/* Action button that appears on hover */}
        <div className="mt-4 overflow-hidden h-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="transform group-hover:translate-y-0 translate-y-10 transition-transform duration-300"
          >
            <button className="w-full py-1.5 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-md text-sm font-medium flex items-center justify-center gap-1 transition-colors">
              Solicitar <ExternalLink size={14} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Subtle animated border glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 border border-green-500/30 rounded-lg"></div>
      </div>
    </div>
  )
}
