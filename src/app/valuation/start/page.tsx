"use client"

import { useState, useEffect, Suspense } from "react"
import { useForm, Controller } from "react-hook-form"
import { CurrencyInput } from "@/components/ui/currency-input"
import { zodResolver } from "@hookform/resolvers/zod"
import { wizardSchema, type WizardFormData } from "@/lib/validations/wizard"
import { wizardSteps, currencyOptions } from "@/lib/config/wizard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Upload, Loader2, CheckCircle, Save, CreditCard, Info, FileText } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { createClient } from "@/lib/supabase/client"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { saveValuationDraft, getValuationDraft, getUserCredits, submitValuation, type FileData } from "../actions"
import Link from "next/link"
import { Step1Persona } from "./steps/step-01-persona"
import { Step2Contact } from "./steps/step-02-contact"
import { Step3Currency } from "./steps/step-03-currency"
import { Step4BusinessOverview } from "./steps/step-04-overview"
import { Step5Structure } from "./steps/step-05-structure"
import { Step6Description } from "./steps/step-06-description"
import { Step7Financials } from "./steps/step-07-financials"
import { Step8Assets } from "./steps/step-08-assets"
import { Step9SaleInfo } from "./steps/step-09-sale"
import { Step10Documents } from "./steps/step-10-documents"

const STORAGE_KEY = "valuation_wizard_data"

function ReportInfo({ title, description, sampleUrl }: { title: string, description: string, sampleUrl?: string }) {
    return (
        <div className="flex items-center gap-2">
            <span>{title}</span>
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
                            <Button size="sm" variant="outline" className="w-full gap-2 h-8" onClick={(e) => {
                                e.preventDefault()
                                window.open(sampleUrl, '_blank')
                            }}>
                                <FileText className="w-3 h-3" />
                                View Sample Report
                            </Button>
                        )}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default function WizardPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div>}>
            <WizardPageContent />
        </Suspense>
    )
}

function WizardPageContent() {
    const [currentStep, setCurrentStep] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
    const [files, setFiles] = useState<File[]>([])
    const [credits, setCredits] = useState<{ essential: number, exitReady: number } | null>(null)
    const router = useRouter()
    const searchParams = useSearchParams()
    // derived state from URL - single source of truth
    const draftId = searchParams.get('draftId')

    const [serverFiles, setServerFiles] = useState<string[]>([])
    const supabase = createClient()

    const form = useForm<WizardFormData>({
        resolver: zodResolver(wizardSchema) as any,
        mode: "onChange",
        defaultValues: {
            baseCurrency: "USD",
            revenueChange: "no",
            hasAddBacks: "no",
            realEstateIncluded: "no",
            outstandingDebts: "no",
            userType: undefined,
            userName: "",
            userPhone: "",
            clientBusinessName: "",
            advisorServiceType: "selling",
            buyerConcerns: "",
            sellerValue: "",
            businessName: "",
            industry: "",
            businessLocation: "",
            businessDescription: "",
            businessWebsite: "",
            revenueChangeReason: "",
            addBackDetails: "",
            assetsIncluded: "",
            debtDetails: "",
            reasonForSelling: "",
            sellingTimeframe: "",
            acquisitionTimeframe: "",
            // Legacy
            brokerOwnerName: "",
            brokerOwnerPhone: ""
        }
    })

    const { register, watch, trigger, setValue, reset, formState: { errors }, control } = form
    const formData = watch()

    // Load Draft on Mount or URL Change
    useEffect(() => {
        const loadDraft = async () => {
            try {
                if (draftId) {
                    const { data: draft, error } = await supabase
                        .from('valuation_inputs')
                        .select('*')
                        .eq('id', draftId)
                        .single()

                    if (draft && !error) {
                        // Sync to local storage
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(draft.form_data))

                        // Set form data
                        if (draft.form_data) {
                            reset(draft.form_data)
                        }

                        // Set server files
                        if (draft.file_paths && Array.isArray(draft.file_paths)) {
                            setServerFiles(draft.file_paths)
                        }

                        // Resume Logic: PRIORITIZE SAVED STEP
                        if (typeof draft.form_data?.currentStep === 'number') {
                            setCurrentStep(draft.form_data.currentStep)
                            toast.success(`Resumed at Step ${draft.form_data.currentStep + 1}`)
                        }
                        else if (draft.status === 'draft' && currentStep === 0) {
                            setCurrentStep(9)
                            toast.success("Resumed draft from server")
                        }

                        // Fetch credits
                        const userCredits = await getUserCredits()
                        setCredits(userCredits)
                        return // Stop here, don't load local
                    }
                }

                // 2. Fallback: Load from Local Storage (Guest or New)
                // Only load local storage if we are NOT on a specific draft ID URL
                if (!draftId) {
                    const savedData = localStorage.getItem(STORAGE_KEY)

                    if (savedData) {
                        const parsed = JSON.parse(savedData)
                        reset(parsed)

                        // Resume Step from Local Storage
                        if (typeof parsed.currentStep === 'number') {
                            setCurrentStep(parsed.currentStep)
                            toast.info(`Resumed at Step ${parsed.currentStep + 1}`)
                        } else if (Object.keys(parsed).length > 0) {
                            toast.info("Resumed from local backup")
                        }
                    } else {
                        setCurrentStep(0)
                        reset({})
                    }
                }

                // 3. Fetch credits if logged in
                const { data: { user } } = await supabase.auth.getUser()
                if (user) {
                    const userCredits = await getUserCredits()
                    setCredits(userCredits)
                }
            } catch {
                // Silent fail on load error
            }
        }
        loadDraft()
    }, [draftId, reset, supabase])

    // Auto-save Current Step to LocalStorage on Change
    useEffect(() => {
        // Only if we have some form data (avoid saving empty on init)
        const currentData = form.getValues()
        if (Object.keys(currentData).length > 1) { // >1 because defaultValues has keys
            const dataWithStep = { ...currentData, currentStep }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(dataWithStep))
        }
    }, [currentStep, form])

    // Save Draft Logic
    const handleSaveDraft = async (stepOverride?: number) => {
        setIsSaving(true)
        try {
            // Include currentStep in saved data (allow override for handleNext)
            const stepToSave = typeof stepOverride === 'number' ? stepOverride : currentStep
            const dataToSave = { ...formData, currentStep: stepToSave }

            // 1. Always save to LocalStorage
            localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave))

            // 2. If logged in, save to Server
            const { data: { user } } = await supabase.auth.getUser()
            if (user) {
                // Upload files first if any new ones
                const filePaths: string[] = []
                for (const file of files) {
                    const fileName = `${Date.now()}_${file.name}`
                    const { data, error } = await supabase.storage
                        .from('valuation-files')
                        .upload(`${user.id}/${fileName}`, file)

                    if (data) filePaths.push(data.path)
                }

                const result = await saveValuationDraft(dataToSave, filePaths, draftId || undefined)
                if (result.success) {
                    toast.success("Progress saved to account")
                    if (result.data?.id && !draftId) {
                        // Update URL using router to keep state in sync
                        const params = new URLSearchParams(searchParams.toString())
                        params.set('draftId', result.data.id)
                        router.replace(`?${params.toString()}`, { scroll: false })
                    }
                } else {
                    toast.error(`Failed to save: ${result.error}`)
                }
            } else {
                toast.success("Progress saved locally")
            }
        } catch (error: any) {
            toast.error(error.message || "Failed to save draft")
        } finally {
            setIsSaving(false)
        }
    }

    const handleNext = async () => {
        const fields = wizardSteps[currentStep].fields as (keyof WizardFormData)[]
        const isValid = await trigger(fields)

        if (isValid) {
            // Auto-save on next with FUTURE step
            const nextStep = Math.min(currentStep + 1, wizardSteps.length)

            // Critical Fix: Save the NEXT step to server/local so if URL updates and triggers reload,
            // we resume at the correct next step, not the old one.
            handleSaveDraft(nextStep)

            setCurrentStep(nextStep) // Allow going to Step 9 (Index 9, Length 9)
            window.scrollTo(0, 0)
        }
    }

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0))
        window.scrollTo(0, 0)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles(prev => [...prev, ...Array.from(e.target.files || [])])
        }
    }

    const removeFile = (indexToRemove: number) => {
        setFiles(prev => prev.filter((_, index) => index !== indexToRemove))
    }

    const onFinalSubmit = async (planType: 'essential' | 'exitready') => {
        setIsSubmitting(true)
        try {
            // 1. Save final state first
            await handleSaveDraft()

            // 2. Convert files to base64 for server action
            const fileDataPromises = files.map(async (file): Promise<FileData> => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader()
                    reader.onload = () => {
                        const base64 = (reader.result as string).split(',')[1] // Remove data:mime;base64, prefix
                        resolve({
                            name: file.name,
                            type: file.type,
                            size: file.size,
                            base64
                        })
                    }
                    reader.onerror = reject
                    reader.readAsDataURL(file)
                })
            })
            const fileData = await Promise.all(fileDataPromises)

            // 3. Submit with files
            if (!draftId) throw new Error("No draft ID found")
            await submitValuation(planType, draftId, fileData)

            // 4. Clear local storage on success
            localStorage.removeItem(STORAGE_KEY)

            toast.success("Valuation submitted successfully!")
            router.push('/dashboard?success=submitted')
        } catch (error: any) {
            toast.error(error.message || "Submission failed")
        } finally {
            setIsSubmitting(false)
        }
    }

    // Custom Step 9: Select Plan
    const isPlanSelectionStep = currentStep === wizardSteps.length

    const step = isPlanSelectionStep
        ? { title: "Select Your Valuation Package", description: "Choose the package that includes the reports you need." }
        : wizardSteps[currentStep]

    const progress = ((currentStep + 1) / (wizardSteps.length + 1)) * 100

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Back Button */}
                <div>
                    <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-blue-600">
                        <Link href="/dashboard">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Dashboard
                        </Link>
                    </Button>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium text-slate-500">
                        <span>{isPlanSelectionStep ? "Final Step" : `Step ${currentStep + 1} of ${wizardSteps.length}`}</span>
                        <span>{Math.round(progress)}% Completed</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                </div>

                <Card className="border-0 shadow-lg">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-2xl">{step.title}</CardTitle>
                                <CardDescription className="text-base">{step.description}</CardDescription>
                            </div>
                            {!isPlanSelectionStep ? (
                                <Button variant="outline" size="sm" onClick={() => handleSaveDraft()} disabled={isSaving}>
                                    {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                                    Save Draft
                                </Button>
                            ) : (
                                <Button variant="outline" size="sm" onClick={() => setCurrentStep(0)}>
                                    Back to Edit
                                </Button>
                            )}
                        </div>
                    </CardHeader>
                    <CardContent>
                        {isPlanSelectionStep ? (
                            <div className="space-y-6 pt-0">
                                {/* Hint Box */}
                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800 flex items-start gap-3">
                                    <div className="mt-0.5">💡</div>
                                    <p>
                                        <strong>Hint:</strong> If you make a payment from here, your current project will be automatically saved and available in the <strong>Recent</strong> tab on your dashboard.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Essential Plan */}
                                    <div className={`border-2 rounded-xl p-6 space-y-4 transition-all ${credits?.essential && credits.essential > 0 ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/10' : 'border-slate-200'}`}>
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Essential Package</h3>
                                            {credits?.essential && credits.essential > 0 ? (
                                                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full">1 Package Available</span>
                                            ) : null}
                                        </div>
                                        <p className="text-sm text-muted-foreground">Best for internal planning, curiosity, and initial risk assessment.</p>


                                        <ul className="space-y-3 text-sm">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-[#1e3a8a] mt-0.5 shrink-0" />
                                                <ReportInfo
                                                    title="Business Valuation Report"
                                                    description="A business valuation report tells you what a company is worth today. It reviews financials, profitability, industry benchmarks, and key risks to calculate a fair market value. Use it to understand pricing, negotiate confidently, or make informed buying and selling decisions."
                                                    sampleUrl="/samples/business-valuation-report.pdf"
                                                />
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-[#1e3a8a] mt-0.5 shrink-0" />
                                                <ReportInfo
                                                    title="Red Flags Analysis"
                                                    description="Identifies potential issues or concerns that could affect your business value or sale process. Allows you to address problems before they become deal-breakers."
                                                />
                                            </li>
                                        </ul>
                                        <div className="pt-4">
                                            {credits?.essential && credits.essential > 0 ? (
                                                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => onFinalSubmit('essential')} disabled={isSubmitting}>
                                                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit with Essential Package"}
                                                </Button>
                                            ) : (
                                                <div className="space-y-3">
                                                    <div className="text-sm text-center text-muted-foreground bg-slate-100 dark:bg-slate-800 p-2 rounded">
                                                        {/*<p className="font-medium text-slate-900 dark:text-white">You're almost done! 🎉</p>
                                                        <p>Purchase 1 package to complete.</p> */}
                                                        <p className="text-xs mt-1">Your form is saved as draft.</p>
                                                    </div>
                                                    <Button className="w-full" variant="outline" asChild onClick={() => handleSaveDraft()}>
                                                        <Link href="/packages" target="_blank">
                                                            Buy Essential Package ($399)
                                                        </Link>
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Exit Ready Plan */}
                                    <div className={`border-2 rounded-xl p-6 space-y-4 transition-all ${credits?.exitReady && credits.exitReady > 0 ? 'border-[#1e3a8a] bg-blue-80/80 dark:bg-blue-900/10' : 'border-slate-200'}`}>
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Exit-Ready Package</h3>
                                            {credits?.exitReady && credits.exitReady > 0 ? (
                                                <span className="bg-blue-200 text-blue-900 text-xs font-bold px-2 py-1 rounded-full">1 Package Available</span>
                                            ) : null}
                                        </div>
                                        <p className="text-sm text-muted-foreground">Comprehensive suite of reports for selling your business.</p>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />
                                                <span>Includes Essential Package Reports</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />
                                                <ReportInfo
                                                    title="Professional Business Teaser"
                                                    description="A concise one-page overview designed to attract qualified buyers without revealing sensitive information. Perfect for initial buyer outreach and generating interest."
                                                    sampleUrl="/samples/business-teaser.pdf"
                                                />
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />
                                                <ReportInfo
                                                    title="Confidential Information Memorandum (CIM)"
                                                    description="A comprehensive document that provides detailed information about your business including financials, operations, market position, and growth opportunities. Essential for serious buyers conducting due diligence."
                                                    sampleUrl="/samples/cim.pdf"
                                                />
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />
                                                <ReportInfo
                                                    title="Valuation Enhancement Report"
                                                    description="Strategic recommendations to increase your business value before sale. Includes actionable insights on financial improvements, operational efficiencies, and market positioning."
                                                />
                                            </li>
                                        </ul>
                                        <div className="pt-4">
                                            {credits?.exitReady && credits.exitReady > 0 ? (
                                                <Button className="w-full bg-[#1e3a8a] hover:bg-blue-700" onClick={() => onFinalSubmit('exitready')} disabled={isSubmitting}>
                                                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit with Exit-Ready Package"}
                                                </Button>
                                            ) : (
                                                <Button className="w-full" variant="outline" asChild onClick={() => handleSaveDraft()}>
                                                    <Link href="/packages" target="_blank">
                                                        Buy Package ($549)
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <form className="space-y-6">
                                {/* 1. Persona */}
                                {currentStep === 0 && <Step1Persona form={form} credits={credits} />}

                                {/* 2. Contact Info */}
                                {currentStep === 1 && <Step2Contact form={form} />}

                                {/* 3. Currency */}
                                {currentStep === 2 && <Step3Currency form={form} />}

                                {/* 4. Business Overview */}
                                {currentStep === 3 && <Step4BusinessOverview form={form} control={control} />}

                                {/* 5. Structure */}
                                {currentStep === 4 && <Step5Structure form={form} control={control} />}

                                {/* 6. Description */}
                                {currentStep === 5 && <Step6Description form={form} />}

                                {/* 7. Financials */}
                                {currentStep === 6 && <Step7Financials form={form} control={control} />}

                                {/* 8. Assets & Liabilities */}
                                {currentStep === 7 && <Step8Assets form={form} control={control} />}

                                {/* 9. Sale Information */}
                                {currentStep === 8 && <Step9SaleInfo form={form} />}

                                {/* 10. Documents */}
                                {currentStep === 9 && (
                                    <Step10Documents
                                        files={files}
                                        serverFiles={serverFiles}
                                        onFileChange={handleFileChange}
                                        onRemoveFile={removeFile}
                                    />
                                )}
                            </form>
                        )}
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-6">
                        <Button type="button" variant="outline" onClick={handleBack} disabled={currentStep === 0}>
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                        </Button>

                        {!isPlanSelectionStep && (
                            <Button type="button" onClick={handleNext}>
                                {currentStep === wizardSteps.length - 1 ? "Review & Select Plan" : "Next Step"}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </div >
    )
}
