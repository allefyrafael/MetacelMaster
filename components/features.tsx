"use client"
import { motion } from "framer-motion"
import { CheckCircle, Clock, ShieldCheck, HeadsetIcon as HeadsetMic } from "lucide-react"
import { useState, useMemo } from "react"

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  // Memoize os features para evitar recálculos desnecessários
  const features = useMemo(
    () => [
      {
        icon: <CheckCircle className="w-12 h-12 text-green-500" />,
        title: "Soluções Garantidas",
        description: "Garantimos o sucesso dos nossos serviços com métodos testados e aprovados.",
      },
      {
        icon: <Clock className="w-12 h-12 text-green-500" />,
        title: "Atendimento Rápido",
        description: "Resolvemos seu problema com agilidade e eficiência para minimizar o tempo de espera.",
      },
      {
        icon: <ShieldCheck className="w-12 h-12 text-green-500" />,
        title: "Segurança Total",
        description: "Utilizamos métodos seguros que preservam os dados e a integridade do dispositivo.",
      },
      {
        icon: <HeadsetMic className="w-12 h-12 text-green-500" />,
        title: "Suporte Especializado",
        description: "Equipe técnica altamente qualificada para atender todas as suas necessidades.",
      },
    ],
    [],
  )

  // Memoize as partículas para evitar recálculos em cada renderização
  const particles = useMemo(() => {
    const isServer = typeof window === "undefined"
    const particleCount = isServer ? 20 : 50
    
    return Array.from({ length: particleCount }).map((_, index) => ({
      id: index,
      x: isServer ? 0 : Math.random() * window.innerWidth,
      y: isServer ? 0 : Math.random() * window.innerHeight,
      opacity: isServer ? 0.3 : Math.random() * 0.5 + 0.1,
      scale: isServer ? 0.8 : Math.random() * 0.5 + 0.5,
      size: isServer ? 2 : Math.random() * 4 + 1,
      blur: isServer ? "0px" : Math.random() > 0.5 ? "1px" : "0px",
      glow: isServer ? 3 : Math.random() * 5 + 2,
    }))
  }, [])

  return (
    <section id="features" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced Matrix-like background with particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="matrix-bg"></div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={`particle-${particle.id}`}
              className="absolute rounded-full bg-green-500"
              initial={{
                opacity: particle.opacity,
                x: particle.x,
                y: particle.y,
                scale: particle.scale,
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [null, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                filter: `blur(${particle.blur})`,
                boxShadow: `0 0 ${particle.glow}px rgba(0, 255, 0, 0.7)`,
              }}
            />
          ))}
        </div>

        {/* Animated grid lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`h-line-${i}`}
              className="absolute h-px bg-green-500/20 w-full"
              style={{ top: `${(i + 1) * 20}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`v-line-${i}`}
              className="absolute w-px bg-green-500/20 h-full"
              style={{ left: `${(i + 1) * 10}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleX: [1, 1.5, 1],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Animated code snippets */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={`code-${index}`}
              className="absolute font-mono text-green-500/30 text-xs whitespace-nowrap"
              initial={{
                x: typeof window === "undefined" ? 0 : Math.random() * window.innerWidth,
                y: typeof window === "undefined" ? 0 : Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            >
              {Array.from({ length: Math.floor(Math.random() * 10) + 5 })
                .map(() => (Math.random() > 0.5 ? "1" : "0"))
                .join(" ")}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Radial gradient overlay for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <motion.span
              className="absolute -inset-1 rounded-lg bg-green-500/20 blur-xl"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <span className="text-white relative">Nossos </span>
            <span className="text-green-500 relative">Diferenciais</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            O que nos torna a melhor escolha para serviços de desbloqueio e assistência técnica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-green-500/20 relative overflow-hidden group"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent"
                animate={{
                  opacity: hoveredFeature === index ? 1 : 0,
                  scale: hoveredFeature === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-lg border border-green-500/30"
                animate={{
                  opacity: hoveredFeature === index ? 1 : 0,
                  boxShadow: hoveredFeature === index ? "0 0 15px 2px rgba(0, 255, 0, 0.3)" : "none",
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-green-500/0 group-hover:border-green-500/70 transition-colors duration-300"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-green-500/0 group-hover:border-green-500/70 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-green-500/0 group-hover:border-green-500/70 transition-colors duration-300"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-green-500/0 group-hover:border-green-500/70 transition-colors duration-300"></div>

              <div className="flex flex-col items-center text-center relative z-10">
                <motion.div
                  className="mb-4 relative"
                  animate={{
                    scale: hoveredFeature === index ? 1.1 : 1,
                    y: hoveredFeature === index ? -5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-green-500/20 rounded-full blur-xl"
                    animate={{
                      opacity: hoveredFeature === index ? 1 : 0,
                      scale: hoveredFeature === index ? 1.5 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>

                {/* Hover indicator */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats with enhanced animations */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number="5000+" label="Clientes Atendidos" delay={0} />
          <StatCard number="12+" label="Anos de Experiência" delay={0.1} />
          <StatCard number="98%" label="Taxa de Sucesso" delay={0.2} />
          <StatCard number="24/7" label="Suporte Técnico" delay={0.3} />
        </div>
      </div>
    </section>
  )
}

function StatCard({ number, label, delay }: { number: string; label: string; delay: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20 flex flex-col items-center justify-center relative overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Animated background pulse */}
      <motion.div
        className="absolute inset-0 bg-green-500/5"
        animate={{
          scale: hovered ? 1.1 : 1,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated number counter */}
      <motion.span
        className="text-3xl md:text-4xl font-bold text-green-500 mb-2 relative"
        animate={{
          scale: hovered ? 1.1 : 1,
          y: hovered ? -2 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow effect */}
        <motion.span
          className="absolute inset-0 blur-md text-green-500"
          animate={{ opacity: hovered ? 0.7 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {number}
        </motion.span>
        {number}
      </motion.span>

      <span className="text-gray-400 text-center group-hover:text-gray-300 transition-colors">{label}</span>

      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: hovered ? 1 : 0,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
