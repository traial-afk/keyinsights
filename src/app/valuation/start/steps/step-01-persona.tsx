import { UseFormReturn } from "react-hook-form"
import { WizardFormData } from "@/lib/validations/wizard"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface StepProps {
    form: UseFormReturn<WizardFormData>
    credits: { essential: number, exitReady: number } | null
}

export function Step1Persona({ form, credits }: StepProps) {
    const { setValue, watch, formState: { errors } } = form
    const formData = watch()

    return (
        <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-800 mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-blue-500" />
                        <div>
                            <h4 className="font-medium text-sm">Valuation Packages</h4>
                            <p className="text-xs text-muted-foreground">
                                {(credits?.essential || 0) + (credits?.exitReady || 0) > 0
                                    ? `You have ${(credits?.essential || 0) + (credits?.exitReady || 0)} package(s) available.`
                                    : "1 Package required to submit. You can purchase later."}
                            </p>
                        </div>
                    </div>
                    {(credits?.essential || 0) + (credits?.exitReady || 0) === 0 && (
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/packages" target="_blank">Buy Package</Link>
                        </Button>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <Label>I am a... <span className="text-red-500">*</span></Label>
                <Select onValueChange={(val) => setValue("userType", val as any)} value={formData.userType}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="buyer">Buyer (conducting due diligence)</SelectItem>
                        <SelectItem value="seller">Seller (preparing to sell)</SelectItem>
                        <SelectItem value="advisor">Advisor (representing a client)</SelectItem>
                    </SelectContent>
                </Select>
                {errors.userType && <p className="text-sm text-red-500">{errors.userType.message}</p>}
            </div>
        </div>
    )
}
