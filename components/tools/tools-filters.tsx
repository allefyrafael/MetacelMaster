"use client"

import { motion } from "framer-motion"
import FilterButton from "./filter-button"

interface ToolsFiltersProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export default function ToolsFilters({ activeCategory, setActiveCategory }: ToolsFiltersProps) {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <FilterButton active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
        Todas
      </FilterButton>
      <FilterButton active={activeCategory === "android"} onClick={() => setActiveCategory("android")}>
        Android
      </FilterButton>
      <FilterButton active={activeCategory === "ios"} onClick={() => setActiveCategory("ios")}>
        iOS
      </FilterButton>
      <FilterButton active={activeCategory === "unlock"} onClick={() => setActiveCategory("unlock")}>
        Desbloqueio
      </FilterButton>
    </motion.div>
  )
}

