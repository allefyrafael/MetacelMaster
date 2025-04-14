"use client"
import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import ToolsGrid from "./tools/tools-grid"
import PhoneUnlockAnimation from "./tools/phone-unlock-animation"
import { toolsData } from "./tools/tools-data"
import { Filter } from "lucide-react"

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Memoize os filteredTools para evitar recálculos desnecessários
  const filteredTools = useMemo(() => {
    return activeCategory === "all"
      ? toolsData
      : activeCategory === "unlock"
        ? toolsData.filter((tool) => tool.category === "unlock" || tool.category === "ios")
        : toolsData.filter((tool) => tool.category === activeCategory)
  }, [activeCategory])

  // Memoize as partículas para evitar recálculos em cada renderização
  const particles = useMemo(() => {
    // Verificar se estamos no servidor
    if (typeof window === "undefined") {
      return Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        path: "M0,50 Q25,30 50,50 T100,50",
        stroke: "rgba(0, 255, 0, 0.3)",
        strokeWidth: 0.2,
        delay: 0,
        duration: 5,
      }))
    }

    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      path:
        i % 3 === 0
          ? "M0,50 Q25,30 50,50 T100,50"
          : i % 3 === 1
            ? "M0,30 Q35,60 70,30 T100,30"
            : "M0,70 Q50,40 80,70 T100,70",
      stroke: `rgba(0, 255, 0, ${0.3 + (i % 5) * 0.05})`,
      strokeWidth: 0.2 + (i % 3) * 0.05,
      delay: i * 0.2, // Delay baseado no índice
      duration: 4 + (i % 4), // Duração baseada no índice
    }))
  }, [])

  return (
    <section id="tools" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

      {/* Animated circuit lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          {particles.map((particle, index) => (
            <motion.path
              key={`path-${index}`}
              d={particle.path}
              stroke={particle.stroke}
              strokeWidth={particle.strokeWidth}
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: particle.duration,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "linear",
                delay: particle.delay,
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-green-500/20 rounded-lg blur-md"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="text-white">Aluguel de </span>
              <span className="text-green-500">Ferramentas</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Disponibilizamos as melhores ferramentas do mercado para assistência técnica e desbloqueio de dispositivos.
            Acesso temporário a soluções profissionais sem a necessidade de grandes investimentos.
          </p>
        </motion.div>

        {/* Completely redesigned filters section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-green-500 mr-2" />
              <h3 className="text-lg font-medium text-white">Filtrar por:</h3>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 text-sm mr-2">
                {filteredTools.length} {filteredTools.length === 1 ? "ferramenta" : "ferramentas"}
              </span>
              <div className="h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/5 via-green-500/10 to-green-500/5 p-0.5 rounded-lg">
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
              <div className="flex flex-wrap gap-3 justify-center">
                {["all", "android", "unlock"].map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300
                      ${
                        activeCategory === category
                          ? "bg-green-500 text-black shadow-lg shadow-green-500/20"
                          : "bg-gray-800/80 text-gray-300 hover:bg-gray-700/80"
                      }
                    `}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {category === "all" ? "Todas" : category === "android" ? "Android" : "Desbloqueio"}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tools grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ToolsGrid tools={filteredTools} />

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">Nenhuma ferramenta encontrada nesta categoria.</p>
            </div>
          )}
        </motion.div>

        {/* Animation section with enhanced styling */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 shadow-lg shadow-green-500/10">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="text-white">Tecnologia de </span>
              <span className="text-green-500">Desbloqueio</span>
            </h3>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 w-full flex justify-center">
                <div className="w-full max-w-md p-8 relative">
                  <div className="absolute -inset-4 bg-green-500/10 rounded-full blur-xl"></div>
                  <PhoneUnlockAnimation showLogo={true} />
                </div>
              </div>

              <div className="lg:w-1/2">
                <h4 className="text-2xl font-bold mb-6 text-green-400">Desbloqueio Interativo</h4>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Nossa tecnologia avançada permite o desbloqueio seguro e eficiente de diversos modelos de smartphones,
                  removendo bloqueios de contas, senhas e restrições de MDM.
                </p>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Utilizamos ferramentas especializadas e métodos exclusivos para garantir o melhor resultado.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                  {["FRP Bypass", "MDM Removal", "iCloud Unlock", "MI Account", "Pattern Unlock", "Factory Reset"].map(
                    (tag, index) => (
                      <motion.span
                        key={tag}
                        className="bg-green-500/20 text-green-400 px-3 py-2 rounded-full text-sm text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {tag}
                      </motion.span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

