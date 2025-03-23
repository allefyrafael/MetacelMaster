"use client"

import type React from "react"

import { Button } from "@/components/ui/button"

interface FilterButtonProps {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}

export default function FilterButton({ active, onClick, children }: FilterButtonProps) {
  return (
    <Button
      variant={active ? "default" : "outline"}
      className={`
        rounded-full px-6 py-2 font-medium transition-all
        ${
          active
            ? "bg-green-500 text-black hover:bg-green-600"
            : "border-green-500/50 text-green-500 hover:bg-green-500/10"
        }
      `}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

