"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function Partnership() {
  const benefits = [
    "Desbloqueio de Conta Google",
    "Conta MI / MDM iCloud",
    "Atendimento Rápido",
    "Suporte Especializado",
    "Soluções Seguras e Garantidas",
    "Acesso a Ferramentas Exclusivas",
  ]

  return (
    <section id="partnership" className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Tech circuit pattern overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Parceria%20Metacel%20Master.jpg-GjgSCUUW8vUnuhMnNwfQEld4QVfxjU.jpeg"
                alt="Parceria Metacel Master"
                width={600}
                height={400}
                className="rounded-lg shadow-xl shadow-green-500/20 object-cover object-center"
                style={{ aspectRatio: "3/2" }}
              />
              <div className="absolute -inset-1 bg-green-500/20 rounded-lg blur-xl -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Parceria </span>
              <span className="text-green-500">Exclusiva</span>
              <span className="text-white"> para Lojistas!</span>
            </h2>

            <p className="text-gray-400 mb-8">
              Torne-se um parceiro Metacel Master e ofereça serviços de desbloqueio profissional aos seus clientes.
              Aumente seu faturamento com soluções de alta qualidade e suporte especializado.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-green-500">Benefícios da Parceria:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-md text-lg flex items-center gap-2"
              onClick={() => window.open("https://wa.link/metacelmaster", "_blank")}
            >
              Torne-se um Parceiro
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
