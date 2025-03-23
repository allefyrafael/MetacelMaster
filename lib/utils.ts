import type { ClassValue } from "clsx"

// Simple utility function to replace clsx + tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ")
}

