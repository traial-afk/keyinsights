import { createClient } from "@/lib/supabase/server"
import { ContactSupportDialog } from "@/components/dashboard/contact-support-dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"

export default async function HelpPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    const userEmail = user?.email || ""

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/dashboard">
                    <Button variant="outline" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Help & Documentation</h1>
                    <p className="text-muted-foreground">
                        Everything you need to know about using KeyInsights AI Valuation.
                    </p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_350px]">
                <div className="space-y-6">
                    <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900">
                        <CardHeader>
                            <CardTitle className="text-amber-900 dark:text-amber-200">Missing Documents?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-amber-800 dark:text-amber-300">
                                If you forgot to upload some documents after submitting, don't worry! Just send an email to support with your missing files and business name, and someone will help you.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>1. Getting Started</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">Creating an Account</h3>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                    <li>Navigate to the Sign Up page.</li>
                                    <li>Enter your Full Name, Email, and a secure Password (min 8 chars, 1 uppercase, 1 number, 1 special char).</li>
                                    <li>Or use Google/LinkedIn for one-click signup.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Logging In</h3>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                    <li>Go to the Login page.</li>
                                    <li>Enter credentials or use social login.</li>
                                    <li>Use "Forgot password?" if needed.</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>2. The Dashboard</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                                <li><strong>Available Reports:</strong> Shows your remaining report credits.</li>
                                <li><strong>Start New Valuation:</strong> Begins a new project wizard.</li>
                                <li><strong>Recent Projects:</strong> List of drafts you can resume.</li>
                                <li><strong>Completed Valuations:</strong> Archive of your finalized reports.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>3. Creating a Valuation</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">The wizard guides you through 4 simple steps:</p>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
                                    <h4 className="font-medium mb-1">Step 1: Company Info</h4>
                                    <p className="text-xs text-muted-foreground">Basic details and currency selection.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
                                    <h4 className="font-medium mb-1">Step 2: Financials</h4>
                                    <p className="text-xs text-muted-foreground">3 years of revenue, EBITDA, etc.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
                                    <h4 className="font-medium mb-1">Step 3: Adjustments</h4>
                                    <p className="text-xs text-muted-foreground">Add-backs to normalize earnings.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
                                    <h4 className="font-medium mb-1">Step 4: Review & Pay</h4>
                                    <p className="text-xs text-muted-foreground">Review data and select your plan.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>4. Managing Reports & Billing</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">Viewing Reports</h3>
                                <p className="text-sm text-muted-foreground">Go to "My Reports" to view and download your finalized valuations.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Invoices</h3>
                                <p className="text-sm text-muted-foreground">Visit the "Billing" page to download PDF invoices for your purchases.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="bg-primary text-primary-foreground">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Mail className="h-5 w-5" />
                                Need Support?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4 opacity-90">
                                Have questions not covered here? Our team is ready to help.
                            </p>
                            <ContactSupportDialog
                                userEmail={userEmail}
                                triggerClassName="bg-white text-primary hover:bg-slate-100 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Account Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-muted-foreground">
                            <p>Manage your profile and security in the Settings page.</p>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Update Full Name</li>
                                <li>Change Password</li>
                            </ul>
                            <Link href="/dashboard/settings">
                                <Button variant="link" className="px-0">Go to Settings &rarr;</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
