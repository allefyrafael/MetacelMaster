"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
  CheckCircle,
  Users,
  TrendingUp,
  Zap,
  Gift,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
} from "lucide-react"

export default function AdsSpecializationLanding() {
  const [currentCourse, setCurrentCourse] = useState(0)

  const mainCourses = [
    {
      title: "FACEBOOK E INSTAGRAM ADS",
      level: "PRO",
      description:
        "Domine as principais plataformas de anúncios do mundo. Aprenda a criar campanhas que convertem e geram resultados reais.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facebook%20e%20Instagram-iffOL59GqDCnLQ35jlsDvohyidWvhp.png",
      icon: "📱",
    },
    {
      title: "ARTES MIDJOURNEY",
      level: "PRO",
      description: "Crie artes profissionais com inteligência artificial. Nunca mais dependa de designers caros.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artes%20Midjounerye-pTbGinVzQJSjdc9w07NphYsBtdqAeq.png",
      icon: "🎨",
    },
    {
      title: "GOOGLE ADS",
      level: "PRO",
      description:
        "Apareça no topo das pesquisas do Google. Capture clientes no momento exato que procuram seus serviços.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GoogleAds-VTgaP21IeIVDlcST2B6DUQd9WUvXjO.png",
      icon: "🔍",
    },
    {
      title: "CHATGPT",
      level: "PRO",
      description: "Automatize e otimize todo seu marketing com inteligência artificial. Crie textos que vendem.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGpt-ElS5iuZrIuvX46K5Fc0fL3gBDyhY4c.png",
      icon: "🤖",
    },
    {
      title: "GOOGLE BARD",
      level: "PRO",
      description: "Use a IA do Google para criar conteúdo de alta qualidade e se destacar da concorrência.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GoogleBard-ocG1nl4gflx4MdOoTmD1du8Bi7C90c.png",
      icon: "🧠",
    },
  ]

  const bonusCourses = [
    { title: "YOUTUBE PRO", description: "Gere dinheiro com o Youtube", icon: "🌐" },
    { title: "TIKTOK PRO", description: "Transforme o entreterimento de muitos em lucro", icon: "📄" },
    { title: "TABOOLA PRO", description: "Ferramentas avançadas", icon: "⚡" },
  ]

  const nextCourse = () => {
    setCurrentCourse((prev) => (prev + 1) % mainCourses.length)
  }

  const prevCourse = () => {
    setCurrentCourse((prev) => (prev - 1 + mainCourses.length) % mainCourses.length)
  }

  useEffect(() => {
    const timer = setInterval(nextCourse, 5000) 
    return () => clearInterval(timer)
  }, []) 

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-black to-gray-900 overflow-hidden py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content - Text */}
            <div className="relative z-20 space-y-6 text-center lg:text-left">
              <motion.div
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-green-500/20 to-yellow-500/20 border border-green-500/40 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MetacelMaster-lZQq8vTSm5VMvfeoOHsZWa44AGXqit.png"
                      alt="MetacelMaster Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-green-400 font-bold text-xs sm:text-sm">METACELMASTER</span>
                  <span className="text-yellow-500 text-xs sm:text-sm">×</span>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoSpace.png-ZwQARUANcjJLEgP3vn0ZvMeTtBtewA.jpeg"
                      alt="Space Triad Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-yellow-400 font-bold text-xs sm:text-sm">SPACE TRIAD</span>
                </div>
              </motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold flex flex-col gap-y-2">
    {/* Adicionado py-1 para garantir espaço interno e evitar o corte do gradiente */}
    <span className="text-white py-1">SE VOCÊ É TÉCNICO DE CELULAR</span>
    
    {/* Adicionado py-1 para garantir espaço interno e evitar o corte do gradiente */}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 py-1">
      E NÃO SABE FAZER ANÚNCIOS,
    </span>
    
    {/* Adicionado py-1 para garantir espaço interno e evitar o corte do gradiente */}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 py-1">
      VOCÊ ESTÁ PERDENDO DINHEIRO!
    </span>
  </h1>
</motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="pt-2"
              >
                <motion.button
                  className="w-full sm:w-auto lg:w-full bg-gradient-to-r from-green-500 via-green-600 to-yellow-500 hover:from-green-600 hover:via-green-700 hover:to-yellow-600 text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 shadow-xl relative overflow-hidden group"
                  onClick={() => document.getElementById("cursos")?.scrollIntoView({ behavior: "smooth" })}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">QUERO DOMINAR O MARKETING DIGITAL</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-400 to-yellow-400 opacity-0 group-hover:opacity-20"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #10B981, #F59E0B)",
                        "linear-gradient(45deg, #F59E0B, #10B981)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.button>
              </motion.div>
            </div>

            <div className="relative z-10 hidden lg:block">
              <motion.div /* ... (conteúdo da imagem da hero - já está hidden no mobile) ... */ >
                 {/* Imagem Principal - Integrada ao Layout */}
                 <div className="relative flex justify-end">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%5B01%C2%B0%5D%20%5BIMG%5D%20%5BFACEBOOK%5D-Ks2yi9Axb5QHRHUBFRVHe4orWCJDGH.webp"
                    alt="Especialista em marketing digital"
                    className="w-[75%] h-auto relative z-10 ml-auto" // Mantido, pois é para LG
                  />
                  <div className="absolute bottom-8 left-4 bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-lg">
                    <div className="text-green-400 font-bold text-xl">+300%</div>
                    <div className="text-gray-300 text-xs">Aumento Vendas</div>
                  </div>
                  <div className="absolute top-8 left-4 bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-lg">
                    <div className="text-yellow-400 font-bold text-xl">18</div>
                    <div className="text-gray-300 text-xs">Cursos PRO</div>
                  </div>
                  <div className="absolute inset-y-0 -left-8 w-16 bg-gradient-to-r from-transparent to-blue-500/5 blur-xl"></div>
                </div>
                <motion.div
                  className="absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-500/20 z-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-500/20 z-0"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-12 lg:hidden max-w-lg mx-auto" // Ajustado para 2 colunas em telas muito pequenas
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {[
              { number: "+300%", label: "Vendas", icon: "📈" },
              { number: "18", label: "Cursos", icon: "🎓" },
              { number: "1000+", label: "Alunos", icon: "👥" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-black/50 border border-green-500/20 rounded-lg p-3 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-base sm:text-lg mb-0.5 sm:mb-1">{stat.icon}</div>
                <div className="text-base sm:text-lg font-bold text-green-400">{stat.number}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-10"> /* ... */ </svg>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-gray-900 relative">
        <div className="absolute top-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-black to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-10 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                <span className="text-white">Mas antes de continuar...</span>
                <br />
                <span className="text-red-400">Reconhece alguma dessas situações?</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                Se você se identifica com pelo menos uma dessas situações, este treinamento é para você:
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                { icon: <DollarSign className="h-10 w-10 sm:h-12 sm:w-12 text-red-500" />, title: "Gastando sem Retorno", description: "Investindo em anúncios que não trazem clientes" },
                { icon: <Users className="h-10 w-10 sm:h-12 sm:w-12 text-red-500" />, title: "Dependendo de Agências", description: "Pagando caro para quem não entende seu negócio" },
                { icon: <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-red-500" />, title: "Perdendo Clientes", description: "Concorrência crescendo enquanto você fica parado" },
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 border border-red-500/20 rounded-lg p-4 sm:p-6"
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                >
                  <div className="mb-3 sm:mb-4 flex justify-center">{problem.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-red-400">{problem.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{problem.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-10 md:mt-12 bg-red-900/20 border border-red-500/30 rounded-lg p-4 sm:p-6"
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-3 sm:mb-4">
                Enquanto isso, seus concorrentes estão dominando o mercado...
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Eles sabem exatamente como atrair clientes online e você está ficando para trás.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 via-black to-black relative">
        <div className="absolute top-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-gray-900 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-10 md:mb-12"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
                <span className="text-green-500">A SOLUÇÃO ESTÁ AQUI!</span>
                <br />
                <span className="text-white">Transforme Sua Realidade</span>
              </h2>
              <motion.p
                className="text-lg sm:text-xl text-gray-300 mb-6 md:mb-8"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              >
                Aprenda do <span className="text-yellow-500 font-bold">ZERO AO PROFISSIONAL</span> como criar anúncios que <span className="text-green-500 font-bold"> REALMENTE FUNCIONAM</span>
              </motion.p>
              <div className="bg-gradient-to-r from-green-500/10 to-yellow-500/10 border border-green-500/30 rounded-2xl p-4 sm:p-6 mb-6 md:mb-8">
                <p className="text-base sm:text-lg text-white">
                  <span className="text-green-400 font-bold">Domine as 4 principais plataformas</span> que seus concorrentes usam para dominar o mercado:
                </p>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {[
                { platform: "Facebook", icon: "📘" }, { platform: "Instagram", icon: "📸" },
                { platform: "Google", icon: "🔍" }, { platform: "IA Tools", icon: "🤖" },
              ].map((platform, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-green-500/10 to-yellow-500/10 border border-green-500/20 rounded-lg p-4 sm:p-6 text-center"
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl mb-2">{platform.icon}</div>
                  <h3 className="font-bold text-green-400 text-sm sm:text-base">{platform.platform}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Carousel */}
      <section id="cursos" className="py-16 md:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                <span className="text-white">Você terá acesso a </span>
                <span className="text-green-500">5 CURSOS PRINCIPAIS</span>
              </h2>
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 sm:px-6 sm:py-2 mb-6 md:mb-8">
                <AlertCircle className="text-yellow-500 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-yellow-500 font-bold text-sm sm:text-base">18 CURSOS NO TOTAL!</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-800 to-black border-2 border-green-500/30 rounded-2xl relative overflow-hidden shadow-2xl flex items-center gap-0.5 sm:gap-1 md:gap-2"
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-yellow-500/5 rounded-2xl -z-10"></div>
              <button
                onClick={prevCourse}
                className="shrink-0 bg-green-500/20 hover:bg-green-500/40 backdrop-blur-sm text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-300 border border-green-500/30 hover:border-green-500/60 z-30 shadow-lg ml-1.5 sm:ml-2 md:ml-3 lg:ml-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 md:h-6" />
              </button>
              <div className="flex-grow p-2.5 sm:p-3 md:p-4 lg:p-6 relative min-w-0">
                <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 md:top-4 md:left-4 bg-black/70 text-green-400 px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 rounded-full text-xs md:text-sm font-bold z-20">
                  {currentCourse + 1} de {mainCourses.length}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-8 items-center min-h-[360px] sm:min-h-[400px] md:min-h-[520px] pt-6 sm:pt-4 md:pt-0">
                  <motion.div
                    key={currentCourse}
                    initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                    className="relative z-10 order-2 lg:order-1 flex flex-col justify-center h-full"
                  >
                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex-shrink-0">{mainCourses[currentCourse].icon}</div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-400 leading-tight">
                          {mainCourses[currentCourse].title}
                        </h3>
                        <div className="text-yellow-500 font-semibold text-xs md:text-sm mt-0.5 sm:mt-1">
                          ✨ Curso Profissional Completo
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                      {mainCourses[currentCourse].description}
                    </p>
                    <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
                      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-green-400">
                        <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                        <span className="font-medium text-xs sm:text-sm">Acesso por 36 meses completos</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-green-400">
                        <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                        <span className="font-medium text-xs sm:text-sm">18 cursos inclusos</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-green-400">
                        <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                        <span className="font-medium text-xs sm:text-sm">Cursos aprovados por especialistas</span>
                      </div>
                    </div>
                    <div className="mt-2.5 sm:mt-3 md:mt-4 bg-gray-700 rounded-full h-1.5 md:h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-500 to-yellow-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((currentCourse + 1) / mainCourses.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    key={`image-${currentCourse}`}
                    initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                    className="relative order-1 lg:order-2 flex items-center justify-center h-full"
                  >
                    <div className="relative group w-full">
                      <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-2xl sm:rounded-3xl blur-md sm:blur-lg group-hover:blur-lg sm:group-hover:blur-xl transition-all duration-300 opacity-75 group-hover:opacity-100"></div>
                      <div className="relative bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 border border-green-500/30 overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-75"></div>
                        <div className="relative rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-green-500/5 to-yellow-500/5">
                          <img
                            src={mainCourses[currentCourse].image || "/placeholder.svg"}
                            alt={mainCourses[currentCourse].title}
                            className="w-full h-52 sm:h-60 md:h-[420px] object-contain rounded-lg sm:rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-lg sm:rounded-xl"></div>
                          {/* Badge "CURSO PRO" foi removido anteriormente */}
                        </div>
                        <div className="mt-2 sm:mt-3 md:mt-4 text-center">
                          <div className="text-yellow-400 font-bold text-xs sm:text-sm mb-0.5 md:mb-1">APRENDA AGORA:</div>
                          <div className="text-white font-bold text-sm sm:text-base md:text-lg">{mainCourses[currentCourse].title}</div>
                        </div>
                        <div className="absolute top-1 left-1 md:top-2 md:left-2 w-2 h-2 md:w-3 md:h-3 border-t-2 border-l-2 border-green-500/50 rounded-tl-md sm:rounded-tl-lg"></div>
                        <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-2 h-2 md:w-3 md:h-3 border-b-2 border-r-2 border-green-500/50 rounded-br-md sm:rounded-br-lg"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="flex justify-center gap-1.5 sm:gap-2 md:gap-3 mt-3 sm:mt-4 md:mt-6 flex-wrap">
                  {mainCourses.map((course, index) => (
                    <button
                      key={index} onClick={() => setCurrentCourse(index)}
                      className={`group flex flex-col items-center transition-all duration-300 ${index === currentCourse ? "scale-110" : "hover:scale-105 opacity-75 hover:opacity-100"}`}
                    >
                      <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentCourse ? "bg-green-500 shadow-md shadow-green-500/50" : "bg-gray-600 group-hover:bg-gray-500"}`} />
                      <div className={`text-xs mt-1 transition-opacity duration-300 ${index === currentCourse ? "text-green-400 font-semibold opacity-100" : "text-gray-500 group-hover:text-gray-400 opacity-0 group-hover:opacity-100"}`}>
                        {course.icon}
                      </div>
                    </button>
                  ))}
                </div>
                <motion.div
                  className="text-center mt-3 sm:mt-4 md:mt-6"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                >
                  <div className="bg-gradient-to-r from-green-500/10 to-yellow-500/10 border border-green-500/30 rounded-lg p-2.5 sm:p-3 md:p-4">
                    <p className="text-green-400 font-bold mb-1 sm:mb-1.5 md:mb-2 text-xs sm:text-sm md:text-base">
                      🎯 Este é apenas 1 dos {mainCourses.length} cursos principais que você terá acesso!
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Imagine dominar todas essas ferramentas para fazer sua empresa crescer.
                    </p>
                  </div>
                </motion.div>
              </div>
              <button
                onClick={nextCourse}
                className="shrink-0 bg-green-500/20 hover:bg-green-500/40 backdrop-blur-sm text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-300 border border-green-500/30 hover:border-green-500/60 z-30 shadow-lg mr-1.5 sm:mr-2 md:mr-3 lg:mr-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 md:h-6" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bonus Alert */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/30 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 bg-yellow-500 text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-br-2xl font-bold text-sm sm:text-base">
                BÔNUS EXCLUSIVO
              </div>
              <div className="mt-6 sm:mt-4">
                <Gift className="text-yellow-500 h-12 w-12 sm:h-14 md:h-16 md:w-16 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                  <span className="text-white">Compre agora e </span>
                  <span className="text-yellow-500">Você ganha de brinde esses Cursos!</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {bonusCourses.map((course, index) => (
                    <div key={index} className="bg-black/30 rounded-lg p-3 sm:p-4">
                      <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{course.icon}</div>
                      <h4 className="font-bold text-yellow-400 mb-1 text-sm sm:text-base">{course.title}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">{course.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-green-400">
              Mais de 1.000 técnicos já transformaram seus negócios
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                { metric: "+300%", label: "Aumento médio em vendas" },
                { metric: "1.000+", label: "Alunos satisfeitos" },
                { metric: "4.9/5", label: "Avaliação dos cursos" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 rounded-lg p-4 sm:p-6"
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-1 sm:mb-2">{stat.metric}</div>
                  <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price Reveal & CTA */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
              <span className="text-white">Quanto vale </span>
              <span className="text-green-500">DOMINAR</span> <br />
              <span className="text-white">tudo isso?</span>
            </h2>
            <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto"> {/* Ajustado max-w para responsividade */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[auto] lg:min-h-[480px]"> {/* min-h ajustado */}
                  <div className="bg-gradient-to-br from-gray-800/80 to-black/80 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                      ESPECIALIZAÇÃO COMPLETA <br />
                      <span className="text-green-400">EM ANÚNCIOS</span>
                    </h3>
                    <div className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-6">
                      {[
                        "18 Cursos Completos para assistir quando quiser",
                        "Acesso por 36 meses completos",
                        "3 Cursos Bônus Exclusivos",
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-1.5 sm:gap-2">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black" />
                          </div>
                          <span className="text-gray-200 font-medium text-xs sm:text-sm md:text-base">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-blue-400">
                        <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="font-medium text-xs sm:text-sm md:text-base">Acesso imediato</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-blue-400">
                        <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="font-medium text-xs sm:text-sm md:text-base">Garantia de 7 dias</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-black to-gray-900 p-4 sm:p-6 lg:p-8 flex flex-col justify-center relative">
                    <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 translate-y-2.5 sm:translate-y-3">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 sm:px-4 rounded-full font-bold text-xs md:text-sm shadow-md">
                        OFERTA POR TEMPO LIMITADO
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <div className="bg-red-900/20 border border-red-500/30 rounded-md sm:rounded-lg p-2.5 sm:p-3 mb-3 sm:mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-red-400 text-xs sm:text-sm font-medium mb-0.5">Preço normal</div>
                            <div className="text-red-400 text-base sm:text-lg md:text-xl font-bold line-through">R$ 297,00</div>
                          </div>
                          <div className="bg-red-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-sm sm:rounded-md font-bold text-xs sm:text-sm md:text-base">-50% OFF</div>
                        </div>
                        <p className="text-red-300 text-xs sm:text-sm mt-1 sm:mt-1.5">
                          Promoção válida por tempo limitado. Aproveite!
                        </p>
                      </div>
                      <div className="text-center mb-4 sm:mb-6">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1">
                          <span className="text-white">R$ </span>
                          <span className="text-green-400">148,50</span>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm md:text-base">Investimento único com acesso por 36 meses</p>
                      </div>
                      <div className="bg-gradient-to-r from-green-500/10 to-yellow-500/10 border border-green-500/30 rounded-md sm:rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                        <div className="text-center">
                          <h4 className="text-green-400 font-bold text-sm sm:text-md md:text-lg mb-1">ACESSO COMPLETO</h4>
                          <p className="text-gray-300 text-xs sm:text-sm">36 meses de acesso</p>
                          <div className="mt-1.5 sm:mt-2 text-green-400 font-bold text-base sm:text-lg md:text-xl">R$ 148,50</div>
                        </div>
                      </div>
                      <motion.button
                        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-2.5 px-4 sm:px-6 rounded-md text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md mb-2.5 sm:mb-3"
                        whileHover={{ scale: 1.02, boxShadow: "0px 4px 12px rgba(255, 170, 0, 0.35)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.open("https://go.perfectpay.com.br/PPU38CPMOQD?ppc=PPCP43DL3NCL", "_blank") }
                      >
                        QUERO GARANTIR MINHA VAGA AGORA
                      </motion.button>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 sm:gap-1.5 text-green-400 mb-0.5 sm:mb-1">
                          <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span className="font-bold text-xs sm:text-sm">CURSO 100% ON-LINE | ACESSO IMEDIATO</span>
                        </div>
                        <div className="text-yellow-400 font-bold text-xs sm:text-sm">GARANTIA DE 7 DIAS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-center mt-4 sm:mt-6 text-sm md:text-base">
              Transforme sua assistência técnica em uma máquina de vendas!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">© 2024 MetacelMaster × Space Triad Ads. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
