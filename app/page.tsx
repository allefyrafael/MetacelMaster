import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Tools from "@/components/tools"
import Training from "@/components/training"
import Partnership from "@/components/partnership"
import Features from "@/components/features"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
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

