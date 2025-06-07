"use client"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Facebook, Youtube, Phone, Mail, Cpu, Code, Zap, Shield, Clock, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black border-t border-green-500/20 pt-12 pb-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

        {/* Circuit lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`h-line-${i}`}
              className="absolute h-px bg-green-500/30 w-full"
              style={{ top: `${(i + 1) * 20}%` }}
            />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`v-line-${i}`}
              className="absolute w-px bg-green-500/30 h-full"
              style={{ left: `${(i + 1) * 20}%` }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative">
                <motion.div
                  className="absolute -inset-2 bg-green-500/40 rounded-full blur-md"
                  animate={{
                    opacity: [0.4, 0.6, 0.4],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoNova-h4cKGBf8rw8ipXBKOKc2onIR9vioXD.png"
                  alt="Metacel Master Unlocker"
                  width={300}
                  height={100}
                  className="h-24 w-auto relative z-10 group-hover:brightness-110 transition-all"
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Soluções profissionais para desbloqueio e manutenção de smartphones com tecnologia avançada.
            </p>
            <div className="flex space-x-3">
              <SocialIcon href="https://instagram.com/metacelmaster" icon={<Instagram size={18} />} />
              <SocialIcon href="https://facebook.com/METACELMASTER" icon={<Facebook size={18} />} />
              <SocialIcon href="https://cutt.ly/WeTgwELv" icon={<Youtube size={18} />} />
              <SocialIcon
                href="https://whatsapp.com/channel/0029Vb8AwToHLHQbDA31oP1i"
                icon={<MessageSquare size={18} />}
              />
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span>Serviços</span>
            </h3>
            <ul className="space-y-2">
              <FooterLink href="#services">Desbloqueio de Conta Google</FooterLink>
              <FooterLink href="#services">Conta MI / MDM iCloud</FooterLink>
              <FooterLink href="#services">iPhone CLEAN</FooterLink>
              <FooterLink href="#services">Passcode/Parcial</FooterLink>
              <FooterLink href="#services">Remover Bloqueio MDM</FooterLink>
              <FooterLink href="#services">SAMSUNG FRP/MDM</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Cpu className="h-4 w-4 text-green-500" />
              <span>Ferramentas</span>
            </h3>
            <ul className="space-y-2">
              <FooterLink href="#tools">DFT TOOL</FooterLink>
              <FooterLink href="#tools">GRIFFIN UNLOCKER</FooterLink>
              <FooterLink href="#tools">MDM FIX TOOL</FooterLink>
              <FooterLink href="#tools">OCTOPLUS</FooterLink>
              <FooterLink href="#tools">KG KILLER TOOL</FooterLink>
              <FooterLink href="#tools">TFM TOOL</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4 text-green-500" />
              <span>Contato</span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <a
                  href="https://wa.me/message/5KG4UHMFPZVXG1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">contato@metacelmaster.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <a
                  href="https://whatsapp.com/channel/0029Vb8AwToHLHQbDA31oP1i"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Canal WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Seg-Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-3 md:mb-0">
              &copy; {new Date().getFullYear()} Metacel Master Unlocker. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <FooterLink href="#features">Diferenciais</FooterLink>
              <FooterLink href="#partnership">Parcerias</FooterLink>
              <FooterLink href="#training">Treinamentos</FooterLink>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-green-500 font-bold text-sm">CONHECIMENTO É A CHAVE PARA O SUCESSO</p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <Code className="h-3 w-3 text-gray-500" />
              <p className="text-gray-500 text-xs">Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-black transition-colors"
      whileHover={{ y: -3, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
        <Link
          href={href}
          className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-1"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <span className="text-green-500/50">•</span> {children}
        </Link>
      </motion.div>
    </li>
  )
}
