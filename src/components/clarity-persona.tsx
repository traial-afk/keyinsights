"use client"
import { useEffect } from "react"

declare global {
  interface Window {
    clarity: (command: string, key: string, value: string) => void
  }
}

export function ClarityPersona({ persona }: { persona: "buyer" | "seller" | "advisor" | "homepage" }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity("set", "persona", persona)
    }
  }, [persona])

  return null
}
