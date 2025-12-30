'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login, signInWithOAuth } from "../actions"
import { useState } from "react"
import { toast } from "sonner"
import { AlertCircle, ArrowLeft } from "lucide-react"

export default function LoginPage() {
    const [error, setError] = useState<string | null>(null)
    const [isPending, setIsPending] = useState(false)

    const handleLogin = async (formData: FormData) => {
        setIsPending(true)
        setError(null)

        const result = await login(formData)

        if (result?.error) {
            setError(result.error)
            toast.error(result.error)
            setIsPending(false)
        }
        // If success, the server action redirects, so we don't need to do anything here
    }

    const handleOAuth = async (provider: 'google' | 'linkedin') => {
        setIsPending(true)
        const result = await signInWithOAuth(provider)
        if (result?.error) {
            toast.error(result.error)
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
                    <span className="font-bold tracking-wide text-3xl text-[#1e3a8a] dark:text-blue-400">KeyInsights AI</span>
                </div>
                <div className="w-full p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-slate-900">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Welcome Back</h1>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">Sign in to your account</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <Button variant="outline" onClick={() => handleOAuth('google')} disabled={isPending}>
                            <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                            Google
                        </Button>
                        {/*<Button variant="outline" onClick={() => handleOAuth('linkedin')} disabled={isPending}>
                        <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                        LinkedIn
                    </Button> */}
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-muted-foreground dark:bg-slate-900">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <form action={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <Input id="password" name="password" type="password" autoComplete="current-password" required />
                        </div>

                        {error && (
                            <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-md dark:bg-red-900/20 dark:text-red-400">
                                <AlertCircle className="w-4 h-4" />
                                {error}
                            </div>
                        )}

                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </form>

                    <div className="text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/auth/signup" className="text-blue-600 hover:underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
