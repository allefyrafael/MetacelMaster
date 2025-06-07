"use client"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { motion } from "framer-motion"
import { useEffect, useState, useMemo } from "react"
import { Lock, Unlock, Shield, Smartphone, Zap, Code, Wifi, Database, CheckCircle } from "lucide-react"
import Image from "next/image"
// Adicione este import no topo do arquivo
import { trackFacebookEvent } from "@/lib/facebook-pixel"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <CanvasRevealEffect
          animationSpeed={3.5}
          containerClassName="bg-black"
          colors={[
            [0, 255, 0], // Bright green
            [0, 200, 0], // Slightly darker green
            [100, 255, 100], // Light green para mais variação
          ]}
          dotSize={3}
          opacities={[0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1, 1]}
        />

        {/* Binary code animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 80 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute font-mono text-green-500"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, Math.random() * 0.7 + 0.3, 0],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 16 + 8}px`,
                filter: Math.random() > 0.8 ? "blur(1px) brightness(1.5)" : "none",
                textShadow: Math.random() > 0.7 ? "0 0 5px rgba(0, 255, 0, 0.7)" : "none",
              }}
            >
              {Math.random() > 0.3 ? (Math.random() > 0.5 ? "0" : "1") : Math.random() > 0.5 ? ">" : "<"}
            </motion.div>
          ))}
        </div>

        {/* Efeito de linhas de código adicionais */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={`line-${index}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"
              style={{
                top: `${(index + 1) * 6}%`,
                left: 0,
                right: 0,
                width: "100%",
              }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 25, // Valor fixo em vez de aleatório
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: index * 2, // Delay baseado no índice para evitar cálculos aleatórios
              }}
            />
          ))}
        </div>

        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-1 md:pb-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 lg:mb-0"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                <span className="text-white">Desbloqueio</span>
                <span className="text-green-500"> Profissional</span>
                <span className="text-white"> de Smartphones</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6 md:mb-8">
                Soluções avançadas para desbloqueio de contas, remoção de MDM e serviços técnicos especializados para
                profissionais e lojistas.
              </p>

              <div className="bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 md:p-4 mb-6 md:mb-8">
                <p className="text-green-400 font-bold text-lg md:text-xl mb-1 md:mb-2">
                  CONHECIMENTO É A CHAVE PARA O SUCESSO
                </p>
                <p className="text-gray-300 text-sm md:text-base">
                  Serviços online para Apple, Xiaomi, Samsung, Motorola e mais
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <button
                  className="bg-green-500 hover:bg-green-600 text-black font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  style={{ borderRadius: "0.5rem" }}
                  onClick={(e) => {
                    e.preventDefault()
                    // Rastrear o evento de clique no botão
                    trackFacebookEvent("ServicesButtonClick")
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Nossos Serviços
                </button>
                <button
                  className="bg-black border border-green-500 text-green-500 hover:bg-green-500/20 font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-lg text-base md:text-lg relative shadow-md hover:shadow-lg shadow-green-500/20 transition-all duration-300"
                  style={{ borderRadius: "0.5rem" }}
                  onClick={(e) => {
                    e.preventDefault()
                    // Rastrear o evento de clique no botão
                    trackFacebookEvent("PartnershipButtonClick")
                    document.getElementById("partnership")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <span className="relative z-10">Seja um Parceiro</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Animação personalizada que substitui a imagem em todos os tamanhos de tela */}
          <motion.div
            className="lg:w-1/2 w-full h-[350px] md:h-[400px] lg:h-[500px] relative overflow-hidden rounded-xl border border-green-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Fundo da animação com gradiente mais sofisticado */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-gray-900/80"></div>

            {/* Efeito de circuito digital */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="circuit-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M0,10 L20,10 M10,0 L10,20" stroke="rgba(0, 255, 0, 0.3)" strokeWidth="0.5" fill="none" />
                  <circle cx="10" cy="10" r="1" fill="rgba(0, 255, 0, 0.5)" />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
              </svg>
            </div>

            {/* Efeito de hexágonos flutuantes */}
            <div className="absolute inset-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={`hex-${i}`}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [0, 1, 0],
                    rotate: [0, 90, 180],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 5,
                  }}
                >
                  <svg width="30" height="30" viewBox="0 0 30 30">
                    <polygon
                      points="15,2 28,9 28,21 15,28 2,21 2,9"
                      fill="none"
                      stroke="rgba(0, 255, 0, 0.5)"
                      strokeWidth="1"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>

            {/* Camada central com efeito de profundidade */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative w-[95%] sm:w-[90%] md:w-[85%] h-[95%] sm:h-[90%] md:h-[85%] rounded-lg border border-green-500/30 bg-black/50 backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Grade de circuito interna */}
                <div className="absolute inset-0">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={`h-grid-${i}`}
                      className="absolute h-px bg-green-500/20 w-full"
                      style={{ top: `${(i + 1) * 12.5}%` }}
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scaleY: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={`v-grid-${i}`}
                      className="absolute w-px bg-green-500/20 h-full"
                      style={{ left: `${(i + 1) * 12.5}%` }}
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

                {/* Logo flutuante com efeito de brilho */}
                <motion.div
                  className="absolute top-[12%] right-[10%] w-[120px] sm:w-[140px] md:w-[180px] lg:w-[220px] h-auto z-20"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="absolute -inset-2 bg-green-500/20 rounded-full blur-xl"
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                      scale: [0.8, 1.1, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoNova-h4cKGBf8rw8ipXBKOKc2onIR9vioXD.png"
                    alt="Metacel Master Logo"
                    width={220}
                    height={80}
                    className="object-contain relative z-10 w-[100px] sm:w-[120px] md:w-[140px] lg:w-[180px]"
                  />
                </motion.div>

                {/* Smartphone central com efeito de destaque */}
                <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] z-10">
                  {/* Efeito de brilho ao redor do smartphone */}
                  <motion.div
                    className="absolute -inset-3 sm:-inset-4 bg-green-500/20 rounded-full blur-xl"
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Smartphone com animação de desbloqueio */}
                  <motion.div
                    className="relative w-full h-full bg-black border-2 border-green-500/70 rounded-3xl overflow-hidden shadow-lg shadow-green-500/30"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {/* Tela do smartphone */}
                    <div className="absolute inset-2 bg-gray-900 rounded-2xl overflow-hidden flex flex-col items-center">
                      {/* Animação de desbloqueio aprimorada */}
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <EnhancedUnlockAnimation />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Elementos flutuantes organizados em círculo ao redor do smartphone */}
                <CircularFloatingIcons />

                {/* Linhas de conexão animadas com efeito de pulso */}
                <div className="absolute inset-x-0 -top-10 -bottom-10 overflow-visible">
                  {Array.from({ length: 8 }).map((_, i) => {
                    const isEven = i % 2 === 0
                    return (
                      <motion.div
                        key={`flow-line-${i}`}
                        className={`absolute h-px ${isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"} from-transparent via-green-500/80 to-transparent`}
                        style={{
                          top: `${10 + i * 11}%`,
                          left: 0,
                          right: 0,
                          width: "100%",
                        }}
                        animate={{
                          x: isEven ? ["-100%", "100%"] : ["100%", "-100%"],
                          scaleY: [1, 2, 1],
                        }}
                        transition={{
                          x: {
                            duration: 12 - i,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          },
                          scaleY: {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: i * 0.5,
                          },
                        }}
                      />
                    )
                  })}
                </div>

                {/* Partículas de código com efeito de profundidade */}
                <CodeParticles />
              </motion.div>
            </div>

            {/* Efeito de escaneamento horizontal com brilho */}
            <motion.div
              className="absolute left-0 right-0 h-[40%] bg-gradient-to-b from-transparent via-green-500/15 to-transparent pointer-events-none"
              animate={{
                y: ["-100%", "200%"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Efeito de brilho nos cantos */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-green-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-green-500/20 rounded-full blur-xl"></div>

            {/* Efeito de vinheta para dar profundidade */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Componente para organizar ícones em círculo ao redor do centro
function CircularFloatingIcons() {
  const icons = useMemo(
    () => [
      { icon: <Lock size={18} />, delay: 0.5, distance: 0.38 },
      { icon: <Unlock size={18} />, delay: 1.2, distance: 0.38 },
      { icon: <Shield size={18} />, delay: 0.8, distance: 0.38 },
      { icon: <Smartphone size={18} />, delay: 1.5, distance: 0.38 },
      { icon: <Zap size={16} />, delay: 2.0, distance: 0.42 },
      { icon: <Code size={16} />, delay: 1.8, distance: 0.42 },
      { icon: <Wifi size={16} />, delay: 1.0, distance: 0.42 },
      { icon: <Database size={16} />, delay: 2.2, distance: 0.42 },
    ],
    [],
  )

  return (
    <>
      {icons.map((item, index) => {
        const angle = (index / icons.length) * Math.PI * 2
        const x = Math.cos(angle) * item.distance * 100
        const y = Math.sin(angle) * item.distance * 100

        return (
          <motion.div
            key={`circle-icon-${index}`}
            className="absolute flex items-center justify-center bg-black/70 backdrop-blur-sm rounded-full border border-green-500/50 text-green-500 shadow-lg shadow-green-500/20 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
            style={{
              left: `calc(50% + ${x}%)`,
              top: `calc(50% + ${y}%)`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, -5, 0],
            }}
            transition={{
              scale: { duration: 0.5, delay: item.delay },
              opacity: { duration: 0.5, delay: item.delay },
              y: { duration: 3 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          >
            {item.icon}

            {/* Linha de conexão ao centro */}
            <motion.div
              className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-green-500/80 to-transparent"
              style={{
                width: `${item.distance * 100}%`,
                transformOrigin: "left center",
                rotate: `${angle * (180 / Math.PI) + 180}deg`,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scaleX: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
          </motion.div>
        )
      })}
    </>
  )
}

// Componente de animação de desbloqueio aprimorado
function EnhancedUnlockAnimation() {
  const [unlocked, setUnlocked] = useState(false)
  const [progress, setProgress] = useState(0)

  // Animação de progresso e alternância entre bloqueado e desbloqueado
  useEffect(() => {
    let timerId

    if (!unlocked) {
      // Quando bloqueado, aumenta o progresso gradualmente
      timerId = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setUnlocked(true)
            return 0
          }
          return prev + 2
        })
      }, 100)
    } else {
      // Quando desbloqueado, mantém por 3 segundos e volta a bloquear
      timerId = setTimeout(() => {
        setUnlocked(false)
      }, 3000)
    }

    return () => {
      clearInterval(timerId)
      clearTimeout(timerId)
    }
  }, [unlocked])

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Círculo de escaneamento com progresso */}
      <motion.div
        className="absolute w-12 sm:w-14 md:w-16 lg:w-20 h-12 sm:h-14 md:h-16 lg:h-20 rounded-full border-2 border-green-500/50"
        style={{
          background: !unlocked
            ? `conic-gradient(rgb(0, 255, 0, 0.3) ${progress}%, transparent ${progress}%)`
            : "transparent",
        }}
        animate={{
          scale: unlocked ? [1, 1.5, 1.8] : 1,
          opacity: unlocked ? [0.8, 0.4, 0] : 0.8,
        }}
        transition={{ duration: unlocked ? 1 : 0.2, ease: "easeInOut" }}
      />

      {/* Ícone central com efeito de rotação */}
      <motion.div
        className="relative z-10 text-green-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        animate={{
          scale: unlocked ? [1, 1.2, 1] : [1, 1.05, 1],
          rotate: unlocked ? [0, 0, 0] : [0, 180, 360],
        }}
        transition={{
          scale: { duration: unlocked ? 1 : 2, ease: "easeInOut" },
          rotate: { duration: unlocked ? 0.5 : 2, ease: "easeInOut" },
        }}
      >
        {unlocked ? <CheckCircle /> : <Lock />}
      </motion.div>

      {/* Texto de status com efeito de digitação */}
      <motion.div
        className="mt-3 md:mt-4 text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-mono text-green-400 h-4 md:h-5 w-full px-4 text-center"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        {unlocked ? (
          <span className="inline-block w-full whitespace-nowrap">
            DESBLOQUEADO<span className="animate-pulse">_</span>
          </span>
        ) : (
          <TypewriterEffect text={`ESCANEANDO... ${progress}%`} />
        )}
      </motion.div>

      {/* Linhas de código */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-0 right-0 flex justify-center">
        <motion.div
          className="font-mono text-[6px] sm:text-[8px] md:text-[10px] text-green-500/70 text-center"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          {unlocked ? "ACCESS GRANTED" : "SECURE PROTOCOL"}
          <br />
          {unlocked ? "METACEL MASTER" : "VERIFICANDO SEGURANÇA"}
        </motion.div>
      </div>

      {/* Partículas de desbloqueio */}
      {unlocked && (
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`unlock-particle-${i}`}
              className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-green-500 rounded-full"
              initial={{
                x: "50%",
                y: "50%",
                opacity: 1,
                scale: 0,
              }}
              animate={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: 0,
                scale: Math.random() * 2 + 1,
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.05,
              }}
            />
          ))}
        </div>
      )}

      {/* Efeito de onda de pulso quando desbloqueado */}
      {unlocked && (
        <>
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`pulse-${i}`}
              className="absolute rounded-full border border-green-500/50"
              initial={{ width: "30%", height: "30%", opacity: 0.8 }}
              animate={{
                width: ["30%", "150%"],
                height: ["30%", "150%"],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}
    </div>
  )
}

// Efeito de digitação para texto
interface TypewriterEffectProps {
  text: string;
}

function TypewriterEffect({ text }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    setDisplayText("")
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [text])

  return (
    <span className="inline-block w-full whitespace-nowrap">
      {displayText}
      <span className="animate-pulse">_</span>
    </span>
  )
}

// Componente de partículas de código otimizado
function CodeParticles() {
  // Memoize as partículas para evitar recálculos em cada renderização
  const particles = useMemo(() => {
    const isServer = typeof window === "undefined"
    const particleCount = 20

    return Array.from({ length: particleCount }).map((_, index) => {
      const size = isServer ? 10 : Math.random() * 12 + 8
      return {
        id: index,
        size,
        initialX: isServer ? `${(index % 5) * 20}%` : `${Math.random() * 100}%`,
        initialY: isServer ? `${Math.floor(index / 5) * 20}%` : `${Math.random() * 100}%`,
        targetY: isServer ? "-20%" : `${Math.random() * -50 - 20}%`,
        targetX: isServer ? `${(index % 5) * 20}%` : `${Math.random() * 20 - 10 + Number.parseFloat(`${Math.random() * 100}`)}%`,
        opacity: isServer ? 0.3 : Math.random() * 0.5 + 0.2,
        duration: isServer ? 6 : Math.random() * 8 + 4,
        delay: isServer ? index * 0.5 : Math.random() * 5,
        content: isServer ? "01" : Math.random() > 0.7 ? "01" : Math.random() > 0.5 ? "10" : Math.random() > 0.3 ? "}" : "{",
      }
    })
  }, [])

  return (
    <div className="absolute inset-5 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute font-mono text-green-500/60"
          style={{
            fontSize: `${Math.min(particle.size * 0.8, 10)}px`,
          }}
          initial={{
            x: particle.initialX,
            y: particle.initialY,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: [null, particle.targetY],
            opacity: [0, particle.opacity, 0],
            scale: [0.5, 1, 0.5],
            x: [null, particle.targetX],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
          }}
        >
          {particle.content}
        </motion.div>
      ))}
    </div>
  )
}
