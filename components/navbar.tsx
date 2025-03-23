"use client"
import { useState, useCallback } from "react"
import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Memoize as funções de navegação para evitar recriações em cada renderização
  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault()
      scrollToSection(sectionId)
    },
    [scrollToSection],
  )

  const handleMobileNavClick = useCallback(
    (sectionId: string) => {
      setIsMenuOpen(false)
      scrollToSection(sectionId)
    },
    [scrollToSection, setIsMenuOpen],
  )

  return (
    <nav className="md:relative fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="flex items-center">
            <div className="relative">
              {/* Enhanced glow effect */}
              <div className="absolute -inset-2 bg-green-500/40 rounded-full blur-md"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoNova-h4cKGBf8rw8ipXBKOKc2onIR9vioXD.png"
                alt="Metacel Master Unlocker"
                width={300}
                height={100}
                className="h-16 sm:h-20 md:h-24 w-auto relative z-10"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NavLink href="#services" onClick={(e) => handleNavClick(e, "services")}>
              Serviços
            </NavLink>
            <NavLink href="#tools" onClick={(e) => handleNavClick(e, "tools")}>
              Ferramentas
            </NavLink>
            <NavLink href="#features" onClick={(e) => handleNavClick(e, "features")}>
              Diferenciais
            </NavLink>
            <NavLink href="#partnership" onClick={(e) => handleNavClick(e, "partnership")}>
              Parcerias
            </NavLink>
            <NavLink
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-md transition-all"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contato
            </NavLink>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden relative p-3 rounded-md border-2 border-green-500 bg-black/60 text-green-500 hover:bg-green-500/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute -inset-0.5 bg-green-500/30 rounded-md blur-sm opacity-70"></div>
            <span className="relative z-10">{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-green-500/20 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <MobileNavLink href="#services" onClick={() => handleMobileNavClick("services")}>
              Serviços
            </MobileNavLink>
            <MobileNavLink href="#tools" onClick={() => handleMobileNavClick("tools")}>
              Ferramentas
            </MobileNavLink>
            <MobileNavLink href="#features" onClick={() => handleMobileNavClick("features")}>
              Diferenciais
            </MobileNavLink>
            <MobileNavLink href="#partnership" onClick={() => handleMobileNavClick("partnership")}>
              Parcerias
            </MobileNavLink>
            <MobileNavLink
              href="#contact"
              onClick={() => handleMobileNavClick("contact")}
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-md transition-all text-center"
            >
              Contato
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string
  className?: string
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <Link
      href={href}
      className={`text-white hover:text-green-500 font-medium transition-colors ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string
  className?: string
  onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={`text-white hover:text-green-500 font-medium transition-colors block py-2 ${className || ""}`}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault()
          onClick(e)
        }
      }}
    >
      {children}
    </Link>
  )
}

