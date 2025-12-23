import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy - KeyInsightsAI",
    robots: {
        index: false,
        follow: false,
    }
}

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                    <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                        <p className="text-slate-500 italic">
                            [Privacy Policy Content to be added]
                        </p>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    )
}
