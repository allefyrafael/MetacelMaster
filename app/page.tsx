import { Suspense } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Tools from "@/components/tools"
import Training from "@/components/training"
import Partnership from "@/components/partnership"
import Features from "@/components/features"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import dynamic from "next/dynamic"

// Importar o FacebookPixel de forma dinâmica para evitar problemas de SSR
const FacebookPixelComponent = dynamic(() => import("@/components/facebook-pixel"), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={null}>
        <FacebookPixelComponent />
      </Suspense>
      <Navbar />
      <Hero />
      <Services />
      <Tools />
      <Training />
      <Features />
      <Partnership />
      <Contact />
      <Footer />
    </main>
  )
}

