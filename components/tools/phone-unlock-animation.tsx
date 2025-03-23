"use client"
import { useState, useMemo } from "react"
import { motion } from "framer-motion"

// Simplificando completamente a animação para evitar erros com Three.js
export default function PhoneUnlockAnimation({ showLogo = false }) {
  return (
    <div className="h-[500px] w-full bg-black/40 rounded-lg overflow-hidden relative">
      {/* Fallback to a simpler animation that doesn't rely on Three.js */}
      <div className="absolute inset-0 flex items-center justify-center">
        <PhoneAnimation showLogo={showLogo} />
      </div>
    </div>
  )
}

function PhoneAnimation({ showLogo = false }) {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <div className="relative w-full h-full flex items-center justify-center py-8">
      {/* Phone frame */}
      <motion.div
        className="w-[240px] h-[480px] bg-black rounded-3xl border-4 border-gray-800 relative overflow-hidden shadow-xl shadow-green-500/20"
        animate={{
          y: [0, -5, 0],
          rotateY: [-5, 5, -5],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
          ease: "easeInOut",
        }}
      >
        {/* Phone screen */}
        <div
          className={`absolute inset-2 rounded-2xl flex flex-col items-center justify-center ${unlocked ? "bg-green-500/20" : "bg-gray-900"}`}
        >
          {/* Logo at the top */}
          {showLogo && (
            <div className="absolute top-4 left-0 right-0 flex justify-center">
              <div className="w-32 h-32 relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoNova-h4cKGBf8rw8ipXBKOKc2onIR9vioXD.png"
                  alt="Metacel Master Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}

          {unlocked ? (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-green-500 text-6xl mt-24">
              ✓
            </motion.div>
          ) : (
            <div className="flex flex-col items-center mt-32">
              <motion.div
                className="text-5xl mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              >
                🔒
              </motion.div>
              <button
                onClick={() => setUnlocked(true)}
                className="bg-green-500 text-black px-4 py-2 rounded-md font-bold hover:bg-green-400 transition-colors"
              >
                Desbloquear
              </button>
            </div>
          )}

          {/* Status bar */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="text-xs text-green-500">{unlocked ? "DESBLOQUEADO" : "BLOQUEADO"}</div>
          </div>
        </div>
      </motion.div>

      {/* Binary code particles */}
      <BinaryParticles unlocked={unlocked} />
    </div>
  )
}

// Memoize as partículas para evitar recálculos em cada renderização
function BinaryParticles({ unlocked }: { unlocked: boolean }) {
  // Generate positions for particles
  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      digit: Math.random() > 0.5 ? "1" : "0",
      initialX: (Math.random() - 0.5) * 400,
      initialY: (Math.random() - 0.5) * 400,
      size: Math.random() * 14 + 10,
      speed: Math.random() * 2 + 1,
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute font-mono"
          initial={{
            x: particle.initialX,
            y: particle.initialY,
            opacity: 0.7,
          }}
          animate={
            unlocked
              ? {
                  x: particle.initialX * 2,
                  y: particle.initialY * 2,
                  opacity: 0,
                }
              : {
                  x: [particle.initialX, particle.initialX + 20, particle.initialX],
                  y: [particle.initialY, particle.initialY + 20, particle.initialY],
                  opacity: [0.3, 0.7, 0.3],
                }
          }
          transition={{
            repeat: unlocked ? 0 : Number.POSITIVE_INFINITY,
            duration: particle.speed * 2,
            ease: "easeInOut",
          }}
          style={{
            left: "50%",
            top: "50%",
            fontSize: `${particle.size}px`,
            color: unlocked ? "rgb(0, 255, 0)" : "rgb(0, 100, 0)",
          }}
        >
          {particle.digit}
        </motion.div>
      ))}
    </div>
  )
}

