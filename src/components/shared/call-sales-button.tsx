"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Phone, Copy, PhoneCall, Check } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface CallSalesButtonProps {
    className?: string
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    hideIcon?: boolean
}

export function CallSalesButton({ className, variant = "ghost", hideIcon = false }: CallSalesButtonProps) {
    const [copied, setCopied] = useState(false)
    const phoneNumber = "(800) 555-0123"
    const telLink = "tel:+18005550123"

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault()
        navigator.clipboard.writeText(phoneNumber)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleCall = () => {
        window.location.href = telLink
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={variant} className={cn("gap-2", className)}>
                    {!hideIcon && <Phone className="w-4 h-4 text-[#f4a623]" />}
                    <span>Call Sales</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel className="text-xs text-slate-500 font-normal uppercase tracking-wider">
                    Sales & Support
                </DropdownMenuLabel>

                <div className="px-2 py-3 text-center">
                    <div className="text-xl font-bold text-[#1e3a8a] mb-1">{phoneNumber}</div>
                    <div className="text-xs text-slate-500">Available Mon-Fri, 9am-6pm EST</div>
                </div>

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={handleCall} className="gap-2 cursor-pointer py-3 focus:bg-green-50 focus:text-green-700">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <PhoneCall className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold">Call Now</span>
                        <span className="text-xs text-slate-500">Opens phone app</span>
                    </div>
                </DropdownMenuItem>

                <DropdownMenuItem onClick={handleCopy} className="gap-2 cursor-pointer py-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold">{copied ? "Copied!" : "Copy Number"}</span>
                        <span className="text-xs text-slate-500">Copy to clipboard</span>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
