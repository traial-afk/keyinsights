"use client"

import { useState, useEffect, useRef } from "react"
import { X, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FreeEstimatorPopupProps {
    // ID of the section to trigger after (e.g., "use-cases-section")
    triggerAfterSectionId?: string
    // Or use scroll percentage (0-100) as fallback
    triggerAtScrollPercent?: number
}

export function FreeEstimatorPopup({
    triggerAfterSectionId = "use-cases-section",
    triggerAtScrollPercent = 70
}: FreeEstimatorPopupProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [hasShown, setHasShown] = useState(false)
    const hasTriggeredRef = useRef(false)

    useEffect(() => {
        // Check if popup was already shown this session
        const alreadyShown = sessionStorage.getItem("estimatorPopupShown")
        if (alreadyShown) {
            setHasShown(true)
            return
        }

        const showPopup = () => {
            if (!hasTriggeredRef.current) {
                setIsVisible(true)
                setHasShown(true)
                hasTriggeredRef.current = true
                sessionStorage.setItem("estimatorPopupShown", "true")
            }
        }

        // Exit intent detection
        const handleMouseLeave = (e: MouseEvent) => {
            // Only trigger when mouse leaves through the top of the page
            if (e.clientY <= 0 && !hasTriggeredRef.current) {
                showPopup()
            }
        }

        // Scroll-based trigger
        const handleScroll = () => {
            if (hasTriggeredRef.current) return

            // Try to find the target section
            const targetSection = document.getElementById(triggerAfterSectionId)

            if (targetSection) {
                // Trigger when section is scrolled past
                const rect = targetSection.getBoundingClientRect()
                const sectionBottom = rect.bottom

                // If section bottom is above viewport (scrolled past it)
                if (sectionBottom < 0) {
                    showPopup()
                }
            } else {
                // Fallback: use scroll percentage
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
                const scrollPercent = (window.scrollY / scrollHeight) * 100

                if (scrollPercent >= triggerAtScrollPercent) {
                    showPopup()
                }
            }
        }

        // Add event listeners
        document.addEventListener("mouseleave", handleMouseLeave)
        window.addEventListener("scroll", handleScroll, { passive: true })

        // Cleanup
        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [triggerAfterSectionId, triggerAtScrollPercent])

    const closePopup = () => {
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-[100] animate-in fade-in duration-300"
                onClick={closePopup}
            />

            {/* Popup */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] w-full max-w-md mx-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Header accent */}
                    <div className="h-2 bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a]"></div>

                    <div className="p-8 relative">
                        {/* Close button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                            aria-label="Close popup"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Icon */}
                        <div className="w-16 h-16 bg-[#1e3a8a]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Calculator className="w-8 h-8 text-[#1e3a8a]" />
                        </div>

                        {/* Content */}
                        <div className="text-center space-y-4">
                            <h3 className="text-2xl font-bold text-slate-900">
                                Not sure where to start?
                            </h3>
                            <p className="text-slate-600">
                                Get a rough estimate in 2 minutes completely free.
                            </p>
                            <p className="text-sm text-slate-500">
                                No signup. No email required.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="mt-8 space-y-3">
                            <Link href="/estimate" className="block">
                                <Button className="w-full h-12 bg-[#1e3a8a] hover:bg-[#172e6e] text-white font-semibold">
                                    Try Free Estimator
                                </Button>
                            </Link>
                            <button
                                onClick={closePopup}
                                className="w-full py-3 text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors"
                            >
                                No thanks
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}