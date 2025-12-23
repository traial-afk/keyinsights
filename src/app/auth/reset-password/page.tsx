'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { resetPassword } from "../actions"
import { toast } from "sonner"
import { useState } from "react"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResetPasswordPage() {
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = async (formData: FormData) => {
        setIsPending(true)
        try {
            const result = await resetPassword(formData)
            if (result?.error) {
                toast.error(result.error)
            }
            // Success redirects automatically
        } catch (error) {
            toast.error("Failed to reset password")
        } finally {
            setIsPending(false)
        }
    }

    return (
        <div className="flex items-start justify-center min-h-screen pt-32 bg-slate-50 dark:bg-slate-950 relative">
            <div className="absolute top-4 left-4 md:top-8 md:left-8">
                <Link href="/" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
            </div>
            <div className="w-full max-w-md flex flex-col gap-12">
                <div className="flex justify-center">
                    <span className="font-['Norwester'] tracking-wide text-3xl text-[#1e3a8a] dark:text-blue-400">KeyInsights AI</span>
                </div>
                <div className="w-full p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-slate-900">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">New Password</h1>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">Enter your new password below</p>
                    </div>

                    <form action={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="password">New Password</Label>
                            <Input id="password" name="password" type="password" autoComplete="new-password" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" required />
                        </div>
                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? 'Updating...' : 'Update Password'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
