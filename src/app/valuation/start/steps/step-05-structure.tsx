import { UseFormReturn, Controller } from "react-hook-form"
import { WizardFormData } from "@/lib/validations/wizard"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CurrencyInput } from "@/components/ui/currency-input"

interface StepProps {
    form: UseFormReturn<WizardFormData>
    control: any
}

export function Step5Structure({ form, control }: StepProps) {
    const { setValue, watch, formState: { errors } } = form
    const formData = watch()

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label>Business Structure <span className="text-red-500">*</span></Label>
                <Select onValueChange={(val) => setValue("businessStructure", val)} value={formData.businessStructure}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select structure" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="llc">LLC</SelectItem>
                        <SelectItem value="s-corp">S-Corporation</SelectItem>
                        <SelectItem value="corporation">Corporation (C-Corp)</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
                {errors.businessStructure && <p className="text-sm text-red-500">{errors.businessStructure.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Ownership Percentage (%) <span className="text-red-500">*</span></Label>
                    <Controller
                        control={control}
                        name="ownershipPercentage"
                        render={({ field }) => (
                            <CurrencyInput
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="100"
                            />
                        )}
                    />
                    {errors.ownershipPercentage && <p className="text-sm text-red-500">{errors.ownershipPercentage.message}</p>}
                </div>
                <div className="space-y-2">
                    <Label>Employee Count <span className="text-red-500">*</span></Label>
                    <Controller
                        control={control}
                        name="employeeCount"
                        render={({ field }) => (
                            <CurrencyInput
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Total employees"
                            />
                        )}
                    />
                    {errors.employeeCount && <p className="text-sm text-red-500">{errors.employeeCount.message}</p>}
                </div>
            </div>
        </div>
    )
}
