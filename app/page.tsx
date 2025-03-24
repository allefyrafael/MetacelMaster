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
import FacebookPixelWrapper from "@/components/facebook-pixel-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={null}>
        <FacebookPixelWrapper />
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

