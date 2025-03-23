"use client"
import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import {
  LockKeyhole,
  Smartphone,
  Shield,
  Clock,
  Apple,
  Phone,
  Server,
  ArrowRight,
  AlertCircle,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [showAlert, setShowAlert] = useState(false)

  // Auto-hide alert after 3 seconds
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showAlert])

  // Memoize os mainServices para evitar recálculos desnecessários
  const mainServices = useMemo(
    () => [
      {
        icon: <LockKeyhole size={48} className="text-green-500" />,
        title: "Desbloqueio de Conta Google",
        description: "Remoção de conta Google (FRP) de smartphones Android com rapidez e segurança.",
      },
      {
        icon: <Smartphone size={48} className="text-green-500" />,
        title: "Conta MI / MDM iCloud",
        description: "Desbloqueio de contas MI e remoção de MDM iCloud para dispositivos Apple.",
      },
      {
        icon: <Shield size={48} className="text-green-500" />,
        title: "Soluções Seguras",
        description: "Métodos seguros que preservam os dados e a integridade do dispositivo.",
      },
      {
        icon: <Clock size={48} className="text-green-500" />,
        title: "Atendimento Rápido",
        description: "Serviço ágil com suporte especializado para resolver seu problema rapidamente.",
      },
    ],
    [],
  )

  // Memoize o serviceLinks para evitar recálculos desnecessários
  const serviceLinks = useMemo(
    () => ({
      "iPhone CLEAN":
        "https://wa.me/message/5KG4UHMFPZVXG1?text=Olá,%20tenho%20interesse%20no%20serviço%20iPhone%20CLEAN",
      "Passcode/Parcial":
        "https://wa.me/message/5KG4UHMFPZVXG1?text=Olá,%20tenho%20interesse%20no%20serviço%20Passcode/Parcial",
      "Remover Bloqueio MDM":
        "https://wa.me/message/5KG4UHMFPZVXG1?text=Olá,%20tenho%20interesse%20no%20serviço%20Remover%20Bloqueio%20MDM",
      "CONTA MI CLEAN DEFINITIVO":
        "https://wa.me/message/5KG4UHMFPZVXG1?text=Olá,%20tenho%20interesse%20no%20serviço%20CONTA%20MI%20CLEAN%20DEFINITIVO",
      "CONTA MI PARCIAL":
        "https://wa.me/message/5KG4UHMFPZVXG1?text=Olá,%20tenho%20interesse%20no%20serviço%20CONTA%20MI%20PARCIAL",
      SAMSUNG: "https://wa.me/message/5KG4UHMFPZVXG1?text=Olá,%20tenho%20interesse%20no%20serviço%20SAMSUNG%20FRP/MDM",
      XIAOMI: "https://wa.me/message/5KG4UHMFPZVXG1?text=Olá,%20tenho%20interesse%20no%20serviço%20XIAOMI%20FRP/MDM",
      MOTOROLA:
        "https://wa.me/message/5KG4UHMFPZVXG1?text=Olá,%20tenho%20interesse%20no%20serviço%20MOTOROLA%20FRP/MDM",
      REALME: "https://wa.me/message/5KG4UHMFPZVXG1?text=Olá,%20tenho%20interesse%20no%20serviço%20REALME%20FRP/MDM",
    }),
    [],
  )

  const handleServiceSelect = (serviceName: string) => {
    setSelectedService(serviceName === selectedService ? null : serviceName)
  }

  const handleRedirect = () => {
    if (selectedService && serviceLinks[selectedService]) {
      window.open(serviceLinks[selectedService], "_blank")
    } else {
      setShowAlert(true)
    }
  }

  return (
    <section id="services" className="py-20 bg-black relative">
      {/* Binary code background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="binary-code-bg"></div>
      </div>

      {/* Custom Alert - Improved Responsiveness */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            className="fixed top-16 sm:top-24 left-0 right-0 mx-auto z-50 w-[90%] sm:w-[80%] md:w-[60%] max-w-md px-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <div className="bg-black border-2 border-green-500 rounded-lg shadow-lg shadow-green-500/20 p-3 sm:p-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-green-500/20 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                  <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1 sm:mb-2">
                    <h4 className="font-bold text-white text-sm sm:text-base">Atenção</h4>
                    <button
                      onClick={() => setShowAlert(false)}
                      className="text-gray-400 hover:text-white transition-colors p-1"
                    >
                      <X size={16} className="sm:h-[18px] sm:w-[18px]" />
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base break-words">
                    Por favor, selecione um serviço antes de prosseguir.
                  </p>
                </div>
              </div>

              {/* Progress bar for auto-close */}
              <div className="h-1 w-full bg-gray-700 mt-2 sm:mt-3 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-500"
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 3, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Nossos </span>
            <span className="text-green-500">Serviços</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferecemos soluções profissionais para desbloqueio e manutenção de smartphones com tecnologia avançada e
            atendimento especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-green-500/20 rounded-lg p-6 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Display - Enhanced Design */}
        <div
          onClick={() => window.open("https://wa.link/metacelmaster", "_blank")}
          className="mt-16 bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 shadow-lg shadow-green-500/10 relative overflow-hidden cursor-pointer hover:border-green-500/50 transition-all group/services"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
          </div>

          {/* Circuit lines decoration */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M0,20 Q25,40 50,20 T100,20"
                stroke="rgba(0, 255, 0, 0.5)"
                strokeWidth="0.2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "linear" }}
              />
              <motion.path
                d="M0,50 Q35,70 70,50 T100,50"
                stroke="rgba(0, 255, 0, 0.3)"
                strokeWidth="0.2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "linear",
                  delay: 1,
                }}
              />
            </svg>
          </div>

          {/* Visual indicator that the section is clickable */}
          <div className="absolute top-4 right-4 bg-green-500/20 p-2 rounded-full group-hover/services:bg-green-500/40 transition-all">
            <ArrowRight className="h-5 w-5 text-green-500" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-block relative">
                <div className="absolute -inset-1 bg-green-500/20 rounded-lg blur-md"></div>
                <h3 className="text-3xl font-bold relative">
                  <span className="text-white">Serviços </span>
                  <span className="text-green-500">Online</span>
                </h3>
              </div>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Soluções profissionais para desbloqueio e manutenção de smartphones com tecnologia avançada
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Apple Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-black/80 to-gray-900/40 border border-green-500/30 rounded-xl p-6 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10 group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Apple className="h-7 w-7 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Apple</h4>
                </div>

                <ServiceCardContent
                  items={[
                    { icon: "🥇", title: "iPhone CLEAN", description: "Modelos do iPhone 6 ao 15 Pro Max" },
                    { icon: "🎖", title: "Passcode/Parcial", description: "Modelos do iPhone 5s ao X" },
                    { icon: "🏅", title: "Remover Bloqueio MDM", description: "Modelos do iPhone 5s ao 15 Pro Max" },
                  ]}
                />
              </motion.div>

              {/* Xiaomi Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-black/80 to-gray-900/40 border border-green-500/30 rounded-xl p-6 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10 group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Phone className="h-7 w-7 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Xiaomi</h4>
                </div>

                <ServiceCardContent
                  items={[
                    { icon: "🔱", title: "CONTA MI CLEAN DEFINITIVO", description: "Remoção completa da conta MI" },
                    { icon: "🔱", title: "CONTA MI PARCIAL", description: "Desbloqueio parcial da conta MI" },
                  ]}
                />
              </motion.div>

              {/* FRP e MDM Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-black/80 to-gray-900/40 border border-green-500/30 rounded-xl p-6 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10 group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Server className="h-7 w-7 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    FRP e MDM
                  </h4>
                </div>

                <ServiceCardContent
                  items={[
                    { icon: "🌐", title: "SAMSUNG", description: "Remoção de FRP e MDM para dispositivos Samsung" },
                    { icon: "🌐", title: "XIAOMI", description: "Remoção de FRP e MDM para dispositivos Xiaomi" },
                    { icon: "🌐", title: "MOTOROLA", description: "Remoção de FRP e MDM para dispositivos Motorola" },
                    { icon: "🌐", title: "REALME", description: "Remoção de FRP e MDM para dispositivos Realme" },
                  ]}
                />
              </motion.div>
            </div>

            {/* Call to action - Enhanced */}
            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden group bg-green-500 hover:bg-green-600 text-black px-10 py-4 rounded-lg font-bold text-lg flex items-center gap-3 transition-all shadow-lg shadow-green-500/20">
                <span>Solicitar Serviço</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />

                {/* Animated glow effect */}
                <span className="absolute -inset-0.5 bg-green-400/30 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Otimize o componente ServiceCardContent para reduzir re-renderizações
function ServiceCardContent({ items }: { items: { icon: string; title: string; description: string }[] }) {
  const [scrollIndex, setScrollIndex] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const hasScroll = items.length > 3

  // Memoize os itens a serem exibidos para evitar recálculos desnecessários
  const displayItems = useMemo(() => {
    return hasScroll ? items.slice(scrollIndex, scrollIndex + 3) : items
  }, [hasScroll, items, scrollIndex])

  const scrollUp = useCallback(() => {
    if (scrollIndex > 0) {
      setScrollIndex((prev) => prev - 1)
    }
  }, [scrollIndex])

  const scrollDown = useCallback(() => {
    if (scrollIndex < items.length - 3) {
      setScrollIndex((prev) => prev + 1)
    }
  }, [scrollIndex, items.length])

  return (
    <div className="flex-1 flex flex-col">
      {/* Botão de scroll para cima */}
      {hasScroll && scrollIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            scrollUp()
          }}
          className="self-center mb-2 p-1 rounded-full bg-green-500/20 hover:bg-green-500/30 transition-colors"
        >
          <ChevronUp className="h-5 w-5 text-green-500" />
        </button>
      )}

      {/* Área de conteúdo com altura fixa para 3 itens */}
      <div
        ref={contentRef}
        className={`flex-1 flex flex-col ${items.length < 3 ? "justify-center" : ""}`}
        style={{ height: "280px" }} // Altura fixa para 3 itens
      >
        {displayItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3 group/item mb-4">
            <div className="text-2xl flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
              {item.icon}
            </div>
            <div>
              <h5 className="font-bold text-white group-hover/item:text-green-400 transition-colors">{item.title}</h5>
              <p className="text-gray-400 text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botão de scroll para baixo */}
      {hasScroll && scrollIndex < items.length - 3 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            scrollDown()
          }}
          className="self-center mt-2 p-1 rounded-full bg-green-500/20 hover:bg-green-500/30 transition-colors"
        >
          <ChevronDown className="h-5 w-5 text-green-500" />
        </button>
      )}

      {/* Indicador de posição para scroll */}
      {hasScroll && (
        <div className="flex justify-center gap-1 mt-3">
          {Array.from({ length: items.length - 2 }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${i === scrollIndex ? "bg-green-500" : "bg-green-500/30"}`}
              onClick={(e) => {
                e.stopPropagation()
                setScrollIndex(i)
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

