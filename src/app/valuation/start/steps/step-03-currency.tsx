import { UseFormReturn } from "react-hook-form"
import { WizardFormData } from "@/lib/validations/wizard"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { currencyOptions } from "@/lib/config/wizard"

interface StepProps {
    form: UseFormReturn<WizardFormData>
}

export function Step3Currency({ form }: StepProps) {
    const { setValue, watch } = form
    const formData = watch()

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label>What currency are your financial figures in? <span className="text-red-500">*</span></Label>
                <Select onValueChange={(val) => setValue("baseCurrency", val)} value={formData.baseCurrency}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                        {currencyOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
