'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signup, signInWithOAuth } from "../actions"
import { useState, Suspense, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"

function SignupForm() {
    const searchParams = useSearchParams()
    const plan = searchParams.get("plan")

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isPending, setIsPending] = useState(false)
    const [persona, setPersona] = useState<string | null>(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('userPersona')
            if (stored) {
                setPersona(stored)
            }
        }
    }, [])

    const validations = {
        minLength: password.length >= 8,
        hasUpperCase: /[A-Z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        hasSpecial: /[^A-Za-z0-9]/.test(password),
        match: password && confirmPassword && password === confirmPassword
    }

    const allValid = Object.values(validations).every(Boolean)

    const handleSignup = async (formData: FormData) => {
        if (!allValid) {
            toast.error("Please meet all password requirements")
            return
        }

        setIsPending(true)
        const result = await signup(formData)

        if (result?.error) {
            toast.error(result.error)
            setIsPending(false)
        }
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
                    <span className="font-['Norwester'] tracking-wide text-3xl text-[#1e3a8a] dark:text-blue-400">KeyInsights AI</span>
                </div>
                <div className="w-full p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-slate-900">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Create Account</h1>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">
                            {plan ? `Sign up to continue with ${plan.replace(/-/g, ' ')}` : 'Get started with your valuation'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <Button variant="outline" onClick={() => handleOAuth('google')} disabled={isPending}>
                            <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                            Google
                        </Button>
                        {/*<Button variant="outline" onClick={() => handleOAuth('linkedin')} disabled={isPending}>
                        <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                        LinkedIn
                    </Button>*/}
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

                    <form action={handleSignup} className="space-y-4">
                        {/* Hidden input to pass the selected plan */}
                        <input type="hidden" name="plan" value={plan || ''} />
                        <input type="hidden" name="persona" value={persona || ''} />

                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input id="fullName" name="fullName" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="new-password"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                autoComplete="new-password"
                            />
                        </div>
                        {password.length > 0 && (
                            <div className="text-sm space-y-1 p-3 bg-slate-100 dark:bg-slate-800 rounded-md">
                                <p className="font-medium mb-2">Password Requirements:</p>
                                <div className={cn("flex items-center gap-2", validations.minLength ? "text-green-600" : "text-slate-500")}>
                                    <div className={cn("w-1.5 h-1.5 rounded-full", validations.minLength ? "bg-green-600" : "bg-slate-300")} />
                                    <span className={validations.minLength ? "text-slate-700 dark:text-slate-200" : ""}>At least 8 characters</span>
                                </div>
                                <div className={cn("flex items-center gap-2", validations.hasUpperCase ? "text-green-600" : "text-slate-500")}>
                                    <div className={cn("w-1.5 h-1.5 rounded-full", validations.hasUpperCase ? "bg-green-600" : "bg-slate-300")} />
                                    <span className={validations.hasUpperCase ? "text-slate-700 dark:text-slate-200" : ""}>At least 1 capital letter</span>
                                </div>
                                <div className={cn("flex items-center gap-2", validations.hasNumber ? "text-green-600" : "text-slate-500")}>
                                    <div className={cn("w-1.5 h-1.5 rounded-full", validations.hasNumber ? "bg-green-600" : "bg-slate-300")} />
                                    <span className={validations.hasNumber ? "text-slate-700 dark:text-slate-200" : ""}>At least 1 number</span>
                                </div>
                                <div className={cn("flex items-center gap-2", validations.hasSpecial ? "text-green-600" : "text-slate-500")}>
                                    <div className={cn("w-1.5 h-1.5 rounded-full", validations.hasSpecial ? "bg-green-600" : "bg-slate-300")} />
                                    <span className={validations.hasSpecial ? "text-slate-700 dark:text-slate-200" : ""}>At least 1 special character</span>
                                </div>
                                <div className={cn("flex items-center gap-2", validations.match ? "text-green-600" : "text-slate-500")}>
                                    <div className={cn("w-1.5 h-1.5 rounded-full", validations.match ? "bg-green-600" : "bg-slate-300")} />
                                    <span className={validations.match ? "text-slate-700 dark:text-slate-200" : ""}>Passwords match</span>
                                </div>
                            </div>
                        )}

                        <Button type="submit" className="w-full" disabled={isPending || !allValid}>
                            {isPending ? 'Creating Account...' : 'Sign Up'}
                        </Button>
                    </form>

                    <div className="text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="text-blue-600 hover:underline">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function SignupPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <SignupForm />
        </Suspense>
    )
}
