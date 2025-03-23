"use client"
import { motion } from "framer-motion"
import { BookOpen, Award, Users, ArrowUpRight, CheckCircle } from "lucide-react"

export default function Training() {
  const courses = [
    {
      title: "Desbloqueio Avançado iOS",
      description: "Aprenda técnicas profissionais para desbloqueio de dispositivos Apple",
      icon: <BookOpen className="h-6 w-6 text-green-500" />,
      level: "Intermediário",
    },
    {
      title: "Remoção de Contas Google",
      description: "Domine os métodos de remoção de FRP em diversos modelos Android",
      icon: <Award className="h-6 w-6 text-green-500" />,
      level: "Básico ao Avançado",
    },
    {
      title: "Técnicas MDM Profissional",
      description: "Especialização em remoção de bloqueios MDM em dispositivos corporativos",
      icon: <Users className="h-6 w-6 text-green-500" />,
      level: "Avançado",
    },
  ]

  return (
    <section id="training" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

      {/* Animated circuit lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
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
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "linear", delay: 1 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-green-500/20 rounded-lg blur-md"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="text-white">Treinamentos </span>
              <span className="text-green-500">Especializados</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Transforme sua carreira com cursos profissionais da Martech. Certificação reconhecida, +2.000 alunos
            formados e 25 anos de experiência no mercado.
          </p>
        </motion.div>

        {/* Cursos Cards - Versão Simplificada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Curso 1 - MDM Nível 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500/50 transition-all relative flex flex-col h-full"
          >
            <div className="relative pt-[56.25%] w-full bg-black">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Curso%20MDM-2wpLvX0KBGVJ0ZTpd6WXLRDcqiiq7J.webp"
                alt="Curso MDM Nível 1"
                className="absolute inset-0 w-full h-full object-contain p-4"
              />
              <div className="absolute top-3 right-3 bg-green-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                POPULAR
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-lg font-bold mb-2 text-white">CURSO MDM NÍVEL 1</h3>
              <p className="text-gray-400 text-sm mb-4">
                Ferramentas e servidores para solucionar 90% dos aparelhos do mercado.
              </p>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="text-gray-300">5 anos de acesso</span>
                  <span className="text-green-400 font-bold">R$ 490,00</span>
                </div>
                <a
                  href="https://martechteam.com.br/mdm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-green-500 hover:bg-green-600 text-black font-medium py-2 px-4 rounded text-sm transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </motion.div>

          {/* Curso 2 - FRP e iCloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500/50 transition-all relative flex flex-col h-full"
          >
            <div className="relative pt-[56.25%] w-full bg-black">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Curso%20FRP-CI7oUV2iHgatmuZOg0G8eGJMhXax6b.webp"
                alt="Curso FRP e iCloud"
                className="absolute inset-0 w-full h-full object-contain p-4"
              />
              <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                COMPLETO
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-lg font-bold mb-2 text-white">CURSO FRP E ICLOUD</h3>
              <p className="text-gray-400 text-sm mb-4">
                Técnicas avançadas de desbloqueio para os principais modelos de smartphones.
              </p>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="text-gray-300">5 anos de acesso</span>
                  <span className="text-green-400 font-bold">R$ 490,00</span>
                </div>
                <a
                  href="https://martechteam.com.br/frp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-green-500 hover:bg-green-600 text-black font-medium py-2 px-4 rounded text-sm transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </motion.div>

          {/* Curso 3 - MDM Avançado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500/50 transition-all relative flex flex-col h-full"
          >
            <div className="relative pt-[56.25%] w-full bg-black">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MDM%20B%20a%20A-8273Zbyw9mYYtQNbMOA8vtt6T17ob2.webp"
                alt="MDM do Básico ao Avançado"
                className="absolute inset-0 w-full h-full object-contain p-4"
              />
              <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                EM BREVE
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-lg font-bold mb-2 text-white">MDM DO BÁSICO AO AVANÇADO</h3>
              <p className="text-gray-400 text-sm mb-4">
                Do básico ao avançado: EMMC, UFS e microsoldagem para remoções MDM.
              </p>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="text-gray-300">5 anos de acesso</span>
                  <div>
                    <span className="text-gray-500 line-through text-xs mr-1">R$1.000</span>
                    <span className="text-green-400 font-bold">R$ 800,00</span>
                  </div>
                </div>
                <a
                  href="https://martechteam.com.br/mdm-avancado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-green-500 hover:bg-green-600 text-black font-medium py-2 px-4 rounded text-sm transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Diferenciais e CTA - Versão Simplificada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Certificação Reconhecida</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    Certificados chancelados por instituições de ensino superior
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Garantia de 7 dias ou seu dinheiro de volta</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Suporte técnico especializado durante todo o curso</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-300 text-center mb-4">
                Transforme sua carreira e aumente seus ganhos com conhecimento especializado
              </p>
              <a
                href="https://martechteam.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-lg transition-all w-full md:w-auto"
              >
                VER TODOS OS CURSOS
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

