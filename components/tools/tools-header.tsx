"use client"

import { motion } from "framer-motion"

interface ToolsHeaderProps {
  title: string
  subtitle: string
}

export default function ToolsHeader({ title, subtitle }: ToolsHeaderProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-white">{title} </span>
        <span className="text-green-500">{subtitle}</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Disponibilizamos as melhores ferramentas do mercado para assistência técnica e desbloqueio de dispositivos.
      </p>
    </motion.div>
  )
}

