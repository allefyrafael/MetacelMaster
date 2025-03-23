"use client"
import { useMemo } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { Phone, Mail, Instagram, Facebook, Youtube, MessageSquare, Code, Cpu, Zap, MapPin, Clock } from "lucide-react"

export default function Contact() {
  // Remova o estado e funções não utilizadas
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // })

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target
  //   setFormData((prev) => ({ ...prev, [name]: value }))
  // }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Form submission logic would go here
  //   console.log("Form submitted:", formData)
  //   alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   })
  // }

  // Memoize as partículas para evitar recálculos em cada renderização
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, index) => ({
      id: index,
      opacity: Math.random() * 0.5 + 0.1,
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      scale: Math.random() * 0.5 + 0.5,
      size: Math.random() * 4 + 1,
      blur: Math.random() > 0.5 ? "1px" : "0px",
      glow: Math.random() * 5 + 2,
      duration: Math.random() * 5 + 3,
    }))
  }, [])

  // Memoize as linhas de fluxo para evitar recálculos em cada renderização
  const flowLines = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      top: `${(i + 1) * 12}%`,
      duration: Math.random() * 15 + 20,
      delay: i * 2,
    }))
  }, [])

  return (
    <section id="contact" className="py-20 bg-black relative">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base layer with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="rgba(0, 255, 0, 0.5)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="3" fill="rgba(0, 255, 0, 0.5)" />
              <path
                d="M50,0 L50,50 M0,50 L50,50 M50,50 L100,50 M50,50 L50,100"
                stroke="rgba(0, 255, 0, 0.5)"
                strokeWidth="0.5"
              />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>

        {/* Binary code animation */}
        <div className="binary-code-bg opacity-15"></div>

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
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
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

        {/* Animated flowing lines */}
        <div className="absolute inset-0">
          {flowLines.map((line) => (
            <motion.div
              key={`flow-line-${line.id}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"
              style={{ top: line.top, left: 0, right: 0 }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: line.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: line.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content overlay gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-block relative">
            <motion.div
              className="absolute -inset-1 rounded-lg bg-green-500/20 blur-xl"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
              <span className="text-white">Entre em </span>
              <span className="text-green-500">Contato</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Estamos prontos para atender suas necessidades. Entre em contato conosco para mais informações ou para
            solicitar um serviço.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Floating contact cards layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main contact methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 shadow-lg shadow-green-500/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>

              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Phone className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-green-500">Contato Direto</h3>
              </div>

              <div className="space-y-4">
                <ContactInfoCompact
                  icon={<Phone className="text-green-500" />}
                  title="Serviços Remotos"
                  isLink
                  linkHref="https://wa.me/message/5KG4UHMFPZVXG1"
                  linkText="WhatsApp"
                />

                <ContactInfoCompact
                  icon={<Mail className="text-green-500" />}
                  title="Email"
                  content="contato@metacelmaster.com"
                  isEmail={true}
                  emailAddress="contato@metacelmaster.com"
                />

                <ContactInfoCompact
                  icon={<Clock className="text-green-500" />}
                  title="Horário de Atendimento"
                  content="Seg-Sex: 9h às 18h"
                />
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-green-500/50"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-green-500/50"></div>
            </motion.div>

            {/* Community */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 shadow-lg shadow-green-500/10 relative overflow-hidden md:translate-y-8"
            >
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>

              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-green-500">Comunidade WhatsApp</h3>
              </div>

              <div className="space-y-4 mb-5">
                <ContactInfoCompact
                  icon={<MessageSquare className="text-green-500" />}
                  title="Canal WhatsApp"
                  isLink
                  linkHref="https://www.whatsapp.com/channel/0029Vb8AwToHLHQbDA31oP1i"
                  linkText="WhatsApp"
                />

                <ContactInfoCompact icon={<MapPin className="text-green-500" />} title="Localização" content="Brasil" />
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-green-500/50"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-green-500/50"></div>
            </motion.div>

            {/* Training catalog */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 shadow-lg shadow-green-500/10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>

              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Cpu className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-green-500">Treinamentos</h3>
              </div>

              <p className="text-gray-300 mb-5">
                Aprimore seus conhecimentos com nossos treinamentos especializados em desbloqueio e manutenção de
                smartphones.
              </p>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#training"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("training")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="block w-full text-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-black font-bold py-3 px-4 rounded-md transition-all shadow-lg shadow-green-500/20"
                >
                  Acessar Catálogo
                </a>
              </motion.div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-green-500/50"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-green-500/50"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-green-500/50"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-green-500/50"></div>
            </motion.div>
          </div>

          {/* Social media section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block relative mb-6">
              <div className="p-2 bg-green-500/20 rounded-full inline-flex">
                <Code className="h-5 w-5 text-green-500" />
              </div>
              <h4 className="text-xl font-bold mt-2">Redes Sociais</h4>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <SocialButtonEnhanced
                icon={<Instagram size={20} />}
                href="https://instagram.com/metacelmaster"
                label="Instagram"
                delay={0.1}
              />
              <SocialButtonEnhanced
                icon={<Facebook size={20} />}
                href="https://facebook.com/METACELMASTER"
                label="Facebook"
                delay={0.2}
              />
              <SocialButtonEnhanced
                icon={<Youtube size={20} />}
                href="https://cutt.ly/WeTgwELv"
                label="Youtube"
                delay={0.3}
              />
            </div>
          </motion.div>

          {/* Floating tech elements */}
          <div className="absolute top-1/4 left-10 opacity-20 hidden lg:block">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              className="text-green-500 text-6xl"
            >
              &lt;/&gt;
            </motion.div>
          </div>

          <div className="absolute bottom-1/4 right-10 opacity-20 hidden lg:block">
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              className="text-green-500 text-5xl"
            >
              {"{...}"}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactInfoCompact({
  icon,
  title,
  content,
  isLink = false,
  linkHref = "",
  linkText = "",
  isEmail = false,
  emailAddress = "",
}: {
  icon: React.ReactNode
  title: string
  content?: string
  isLink?: boolean
  linkHref?: string
  linkText?: string
  isEmail?: boolean
  emailAddress?: string
}) {
  const handleClick = () => {
    if (isEmail && emailAddress) {
      window.location.href = `mailto:${emailAddress}`
    }
  }

  return (
    <motion.div
      className={`flex items-center gap-3 group ${isEmail ? "cursor-pointer" : ""}`}
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={handleClick}
    >
      <div className="p-1.5 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-colors">{icon}</div>
      <div>
        <h4 className="font-medium text-white group-hover:text-green-400 transition-colors text-sm">{title}</h4>
        {isLink ? (
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 text-sm"
          >
            {linkText}
            <Zap className="h-3 w-3" />
          </a>
        ) : isEmail ? (
          <div className="text-green-400 group-hover:text-green-300 transition-colors flex items-center gap-1 text-sm">
            {content}
            <Mail className="h-3 w-3" />
          </div>
        ) : (
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">{content}</p>
        )}
      </div>
    </motion.div>
  )
}

function SocialButtonEnhanced({
  icon,
  href,
  label,
  delay = 0,
}: {
  icon: React.ReactNode
  href: string
  label: string
  delay?: number
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-black/50 hover:bg-green-500/20 text-white py-2 px-4 rounded-md transition-all border border-green-500/30 relative overflow-hidden group"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10 flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
    </motion.a>
  )
}

