"use client"

import { Info, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ReportInfoProps {
    title: string
    description: string
    sampleUrl?: string
}

export function ReportInfo({ title, description, sampleUrl }: ReportInfoProps) {
    return (
        <div className="inline-flex items-center gap-2 align-middle">
            <span className="font-medium">{title}</span>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="text-slate-400 hover:text-blue-600 transition-colors focus:outline-none inline-flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 p-0.5">
                        <Info className="w-3.5 h-3.5" />
                        <span className="sr-only">Info</span>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-w-[300px] p-4 text-sm z-50" align="start" side="top">
                    <div className="space-y-3">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{description}</p>
                        {sampleUrl && (
                            <Button size="sm" variant="outline" className="w-full gap-2 h-8" asChild>
                                <a href={sampleUrl} target="_blank" rel="noopener noreferrer">
                                    <FileText className="w-3 h-3" />
                                    View Sample Report
                                </a>
                            </Button>
                        )}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
