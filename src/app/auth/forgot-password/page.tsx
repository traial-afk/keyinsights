'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { forgotPassword } from "../actions"
import { toast } from "sonner"
import { useState } from "react"

import { ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = async (formData: FormData) => {
        setIsPending(true)
        const result = await forgotPassword(formData)
        setIsPending(false)

        if (result?.error) {
            toast.error(result.error)
        } else if (result?.success) {
            toast.success(result.success)
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
                    <span className="font-bold tracking-wide text-3xl text-[#1e3a8a] dark:text-blue-400">KeyInsights AI</span>
                </div>
                <div className="w-full p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-slate-900">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Reset Password</h1>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">Enter your email to receive a reset link</p>
                    </div>

                    <form action={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? 'Sending...' : 'Send Reset Link'}
                        </Button>
                    </form>

                    <div className="text-center text-sm">
                        Remember your password?{" "}
                        <Link href="/auth/login" className="text-blue-600 hover:underline">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
