"use client"

import { useEffect, useState } from "react"
import { getUserInvoices } from "@/app/valuation/actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Loader2, Receipt } from "lucide-react"
import { toast } from "sonner"

export default function BillingPage() {
    const [invoices, setInvoices] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const data = await getUserInvoices()
                setInvoices(data)
            } catch (error) {
                console.error("Error fetching invoices:", error)
                toast.error("Failed to load invoices")
            } finally {
                setLoading(false)
            }
        }
        fetchInvoices()
    }, [])

    const handleDownload = async (url: string, filename: string) => {
        try {
            const response = await fetch(url)
            const blob = await response.blob()
            const blobUrl = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = blobUrl
            link.download = filename
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            window.URL.revokeObjectURL(blobUrl)
        } catch (error) {
            console.error("Download failed:", error)
            toast.error("Failed to download invoice")
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        )
    }

    return (
        <div className="space-y-8 max-w-6xl mx-auto pt-2">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Billing & Invoices</h2>
                <p className="text-muted-foreground mt-1">
                    View and download your past invoices.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Receipt className="w-5 h-5" />
                        Invoice History
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {invoices.length === 0 ? (
                        <div className="text-center py-12 text-muted-foreground border border-dashed rounded-lg">
                            No invoices found.
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {invoices.map((invoice) => (
                                <div
                                    key={invoice.id}
                                    className="flex items-center justify-between p-4 rounded-lg border bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border shadow-sm">
                                            <Receipt className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900 dark:text-white">{invoice.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {new Date(invoice.created_at).toLocaleDateString(undefined, {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm" onClick={() => handleDownload(invoice.url, invoice.name)}>
                                        <Download className="w-4 h-4 mr-2" />
                                        Download
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
