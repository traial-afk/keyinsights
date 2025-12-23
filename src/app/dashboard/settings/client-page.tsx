'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { updateProfile, updatePassword } from "./actions"
import { Pencil, Lock, User, Save, X } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface SettingsPageClientProps {
    user: {
        fullName: string
        email: string
    }
}

export function SettingsPageClient({ user }: SettingsPageClientProps) {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isPasswordOpen, setIsPasswordOpen] = useState(false)

    // Password Validation State
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const validations = {
        minLength: password.length >= 8,
        hasUpperCase: /[A-Z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        match: password && confirmPassword && password === confirmPassword
    }

    const allValid = Object.values(validations).every(Boolean)

    const handleProfileUpdate = async (formData: FormData) => {
        const result = await updateProfile(formData)
        if (result.error) {
            toast.error(result.error)
        } else {
            toast.success(result.success)
            setIsProfileOpen(false)
        }
    }

    const handlePasswordUpdate = async (formData: FormData) => {
        if (!allValid) {
            toast.error("Please meet all password requirements")
            return
        }

        try {
            const result = await updatePassword(formData)

            if (result?.error) {
                toast.error(result.error)
            } else if (result?.success) {
                toast.success(result.success)
                setIsPasswordOpen(false)
                setPassword("")
                setConfirmPassword("")
            } else {
                toast.error("An unexpected error occurred")
            }
        } catch (error) {
            console.error("Password update error:", error)
            toast.error("Failed to update password. Please try again.")
        }
    }

    return (
        <div className="space-y-6 max-w-4xl">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Settings</h2>
                <p className="text-muted-foreground mt-1">
                    Manage your account settings and preferences.
                </p>
            </div>

            {/* Profile Settings */}
            <Card className="overflow-hidden">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <CardTitle>Profile Information</CardTitle>
                            <CardDescription>Your personal account details.</CardDescription>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            className="gap-2"
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                        >
                            {isProfileOpen ? <X className="w-4 h-4" /> : <Pencil className="w-4 h-4" />}
                            {isProfileOpen ? 'Cancel' : 'Edit Profile'}
                        </Button>
                    </div>
                </CardHeader>

                {/* View Mode */}
                {!isProfileOpen && (
                    <CardContent className="animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-1">
                                <Label className="text-muted-foreground text-xs uppercase tracking-wider">Full Name</Label>
                                <div className="flex items-center gap-2 font-medium text-slate-900 dark:text-white">
                                    <User className="w-4 h-4 text-slate-500" />
                                    {user.fullName || 'Not set'}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-muted-foreground text-xs uppercase tracking-wider">Email Address</Label>
                                <div className="font-medium text-slate-900 dark:text-white">
                                    {user.email}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                )}

                {/* Edit Mode (Slide Out) */}
                {isProfileOpen && (
                    <div className="border-t bg-slate-50/50 dark:bg-slate-900/50 animate-in slide-in-from-top-5 fade-in duration-300">
                        <CardContent className="pt-6">
                            <form action={handleProfileUpdate} className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName">Full Name</Label>
                                        <Input
                                            id="fullName"
                                            name="fullName"
                                            defaultValue={user.fullName}
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            defaultValue={user.email}
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2">
                                    <Button type="button" variant="ghost" onClick={() => setIsProfileOpen(false)}>Cancel</Button>
                                    <Button type="submit">Save Changes</Button>
                                </div>
                            </form>
                        </CardContent>
                    </div>
                )}
            </Card>

            {/* Security Settings */}
            <Card className="overflow-hidden">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <CardTitle>Security</CardTitle>
                            <CardDescription>Manage your password and account security.</CardDescription>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            className="gap-2"
                            onClick={() => {
                                setIsPasswordOpen(!isPasswordOpen)
                                setPassword("")
                                setConfirmPassword("")
                            }}
                        >
                            {isPasswordOpen ? <X className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                            {isPasswordOpen ? 'Cancel' : 'Change Password'}
                        </Button>
                    </div>
                </CardHeader>

                {/* View Mode */}
                {!isPasswordOpen && (
                    <CardContent className="animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Lock className="w-4 h-4" />
                            <span>Password is set and secure.</span>
                        </div>
                    </CardContent>
                )}

                {/* Edit Mode (Slide Out) */}
                {isPasswordOpen && (
                    <div className="border-t bg-slate-50/50 dark:bg-slate-900/50 animate-in slide-in-from-top-5 fade-in duration-300">
                        <CardContent className="pt-6">
                            <form action={handlePasswordUpdate} className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="currentPassword">Current Password</Label>
                                        <Input
                                            id="currentPassword"
                                            name="currentPassword"
                                            type="password"
                                            autoComplete="current-password"
                                            placeholder="••••••••"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="password">New Password</Label>
                                        <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="new-password"
                                            placeholder="••••••••"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                                        <Input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            autoComplete="new-password"
                                            placeholder="••••••••"
                                            required
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Validation Checklist */}
                                <div className="text-sm space-y-1 p-3 bg-slate-100 dark:bg-slate-800 rounded-md">
                                    <p className="font-medium mb-2">Password Requirements:</p>
                                    <div className={cn("flex items-center gap-2", validations.minLength ? "text-green-600" : "text-slate-500")}>
                                        <div className={cn("w-1.5 h-1.5 rounded-full", validations.minLength ? "bg-green-600" : "bg-slate-300")} />
                                        At least 8 characters
                                    </div>
                                    <div className={cn("flex items-center gap-2", validations.hasUpperCase ? "text-green-600" : "text-slate-500")}>
                                        <div className={cn("w-1.5 h-1.5 rounded-full", validations.hasUpperCase ? "bg-green-600" : "bg-slate-300")} />
                                        At least 1 capital letter
                                    </div>
                                    <div className={cn("flex items-center gap-2", validations.hasNumber ? "text-green-600" : "text-slate-500")}>
                                        <div className={cn("w-1.5 h-1.5 rounded-full", validations.hasNumber ? "bg-green-600" : "bg-slate-300")} />
                                        At least 1 number
                                    </div>
                                    <div className={cn("flex items-center gap-2", validations.match ? "text-green-600" : "text-slate-500")}>
                                        <div className={cn("w-1.5 h-1.5 rounded-full", validations.match ? "bg-green-600" : "bg-slate-300")} />
                                        Passwords match
                                    </div>
                                </div>

                                <div className="flex justify-end gap-2">
                                    <Button type="button" variant="ghost" onClick={() => setIsPasswordOpen(false)}>Cancel</Button>
                                    <Button type="submit" disabled={!allValid}>Update Password</Button>
                                </div>
                            </form>
                        </CardContent>
                    </div>
                )}
            </Card>
        </div>
    )
}
