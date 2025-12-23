"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"

export function StartValuationButton() {
    const router = useRouter()

    const handleStartNew = () => {
        // Clear any existing wizard data to ensure a fresh start
        if (typeof window !== 'undefined') {
            localStorage.removeItem("valuation_wizard_data")
            // Force a hard navigation to ensure no query params or state persist
            window.location.href = "/valuation/start"
        }
    }

    return (
        <Button
            size="lg"
            className="bg-white text-[#1e3a8a] hover:bg-blue-50 border-0 font-semibold h-12 px-6"
            onClick={handleStartNew}
        >
            <Plus className="w-5 h-5 mr-2" />
            Start New Valuation
        </Button>
    )
}
