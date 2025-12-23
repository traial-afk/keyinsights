"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    FileText,
    CreditCard,
    Settings,
    LogOut,
    Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { signout } from "@/app/auth/actions"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

const sidebarItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard
    },
    {
        title: "My Reports",
        href: "/dashboard/reports",
        icon: FileText
    },
    {
        title: "Billing",
        href: "/dashboard/billing",
        icon: CreditCard
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings
    }
]

interface DashboardSidebarProps {
    user?: {
        name?: string
        email?: string
    }
}

export function DashboardSidebar({ user }: DashboardSidebarProps) {
    const pathname = usePathname()

    const initials = user?.name
        ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
        : 'U'

    return (
        <div className="flex flex-col h-full border-r bg-white dark:bg-slate-950">
            {/* Logo Area */}
            <div className="flex items-center h-24 px-6">
                <Link href="/dashboard" className="flex items-center gap-3">
                    <div className="relative w-[200px] h-24">
                        <Image
                            src="/logo.png"
                            alt="KeyInsights AI"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>
            </div>

            {/* Navigation */}
            <div className="flex-1 px-4 py-4 space-y-1 overflow-auto">
                {sidebarItems.map((item) => {
                    const isNewValuation = item.href === "/valuation/start"

                    const handleClick = (e: React.MouseEvent) => {
                        if (isNewValuation) {
                            e.preventDefault()
                            if (typeof window !== 'undefined') {
                                localStorage.removeItem("valuation_wizard_data")
                                window.location.href = "/valuation/start"
                            }
                        }
                    }

                    return (
                        <Link key={item.href} href={item.href} onClick={handleClick}>
                            <Button
                                variant="ghost"
                                className={cn(
                                    "w-full justify-start gap-3 mb-1 font-medium h-10",
                                    pathname === item.href
                                        ? "bg-blue-50 text-[#1e3a8a] dark:bg-blue-900/20 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                                )}
                            >
                                <item.icon className={cn("w-5 h-5", pathname === item.href ? "text-[#1e3a8a] dark:text-blue-400" : "text-slate-500")} />
                                {item.title}
                            </Button>
                        </Link>
                    )
                })}

                {/* Browse Plans Button */}
                <div className="pt-4 mt-4">
                    <Link href="/packages">
                        <Button className="w-full justify-start gap-3 bg-[#1e3a8a] hover:bg-blue-700 text-white shadow-md h-11">
                            <Sparkles className="w-4 h-4" />
                            Browse Plans
                        </Button>
                    </Link>
                </div>
            </div>

            {/* User Profile Footer */}
            <div className="p-4 border-t bg-slate-50/50 dark:bg-slate-900/50">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className="w-9 h-9 border">
                            <AvatarImage src={`https://api.dicebear.com/9.x/initials/svg?seed=${user?.email || 'User'}`} alt="User" />
                            <AvatarFallback className="bg-slate-200 dark:bg-slate-800">{initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-slate-900 dark:text-white">{user?.name || 'Guest'}</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">{user?.email || ''}</span>
                        </div>
                    </div>
                    <form action={signout}>
                        <Button variant="ghost" size="icon" className="text-slate-500 hover:text-red-600">
                            <LogOut className="w-4 h-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
