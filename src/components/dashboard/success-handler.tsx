"use client"

import { useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { toast } from "sonner"

export function DashboardSuccessHandler() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const success = searchParams.get("success")

    useEffect(() => {
        if (success === "submitted") {
            toast.success("Valuation submitted successfully! We will notify you when it's ready.")
            // Clean up URL
            const newUrl = new URL(window.location.href)
            newUrl.searchParams.delete("success")
            router.replace(newUrl.pathname)
        }
    }, [success, router])

    return null
}
