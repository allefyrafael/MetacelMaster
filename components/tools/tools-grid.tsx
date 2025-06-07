"use client"

import { motion } from "framer-motion"
import ToolCard from "./tool-card"
import type { Tool } from "./tools-data"
import { useMemo } from "react"

interface ToolsGridProps {
  tools: Tool[]
}

export default function ToolsGrid({ tools }: ToolsGridProps) {
  // Memoize as variantes para evitar recálculos em cada renderização
  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.5,
          ease: "easeOut",
        },
      }),
    }),
    [],
  )

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {tools.map((tool, index) => {
        return (
          <motion.div
            key={index}
            custom={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 30px -10px rgba(0, 255, 0, 0.2)",
            }}
            className="flex"
          >
            <ToolCard
              name={tool.name}
              category={tool.category}
              price={tool.price}
              duration={tool.duration}
              icon={tool.icon}
              index={index}
              link={tool.link}
            />
          </motion.div>
        )
      })}
    </motion.div>
  )
}
