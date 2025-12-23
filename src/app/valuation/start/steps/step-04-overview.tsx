import { UseFormReturn, Controller } from "react-hook-form"
import { WizardFormData } from "@/lib/validations/wizard"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CurrencyInput } from "@/components/ui/currency-input"

interface StepProps {
    form: UseFormReturn<WizardFormData>
    control: any // Passing control explicitly to avoid type issues with Controller
}

export function Step4BusinessOverview({ form, control }: StepProps) {
    const { register, formState: { errors } } = form

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label>What is the legal name of your business or DBA? <span className="text-red-500">*</span></Label>
                <Input {...register("businessName")} placeholder="Enter business name" />
                {errors.businessName && <p className="text-sm text-red-500">{errors.businessName.message}</p>}
            </div>
            <div className="space-y-2">
                <Label>What industry is your business in? <span className="text-red-500">*</span></Label>
                <Input {...register("industry")} placeholder="e.g., Restaurant, Manufacturing" />
                {errors.industry && <p className="text-sm text-red-500">{errors.industry.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Years in Operation <span className="text-red-500">*</span></Label>
                    <Controller
                        control={control}
                        name="yearsInOperation"
                        render={({ field }) => (
                            <CurrencyInput
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Number of years"
                            />
                        )}
                    />
                    {errors.yearsInOperation && <p className="text-sm text-red-500">{errors.yearsInOperation.message}</p>}
                </div>
                <div className="space-y-2">
                    <Label>Location <span className="text-red-500">*</span></Label>
                    <Input {...register("businessLocation")} placeholder="City, State/Province" />
                    {errors.businessLocation && <p className="text-sm text-red-500">{errors.businessLocation.message}</p>}
                </div>
            </div>
        </div>
    )
}
