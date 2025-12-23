import { UseFormReturn, Controller } from "react-hook-form"
import { WizardFormData } from "@/lib/validations/wizard"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CurrencyInput } from "@/components/ui/currency-input"

interface StepProps {
    form: UseFormReturn<WizardFormData>
    control: any
}

export function Step8Assets({ form, control }: StepProps) {
    const { setValue, watch, register, formState: { errors } } = form
    const formData = watch()

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label>Is real estate included in the sale? <span className="text-red-500">*</span></Label>
                <Select onValueChange={(val) => setValue("realEstateIncluded", val as any)} value={formData.realEstateIncluded}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                </Select>
                {errors.realEstateIncluded && <p className="text-sm text-red-500">{errors.realEstateIncluded.message}</p>}
            </div>

            {formData.realEstateIncluded === 'yes' && (
                <div className="space-y-2">
                    <Label>Real Estate Value</Label>
                    <Controller
                        control={control}
                        name="realEstateValue"
                        render={({ field }) => (
                            <CurrencyInput
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="0.00"
                            />
                        )}
                    />
                </div>
            )}

            <div className="space-y-2">
                <Label>What assets are included?</Label>
                <Textarea
                    {...register("assetsIncluded")}
                    placeholder="Inventory, equipment, intellectual property..."
                    rows={4}
                />
            </div>

            <div className="space-y-2">
                <Label>Are there outstanding debts? <span className="text-red-500">*</span></Label>
                <Select onValueChange={(val) => setValue("outstandingDebts", val as any)} value={formData.outstandingDebts}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                </Select>
                {errors.outstandingDebts && <p className="text-sm text-red-500">{errors.outstandingDebts.message}</p>}
            </div>

            {formData.outstandingDebts === 'yes' && (
                <div className="space-y-2">
                    <Label>Debt Details</Label>
                    <Textarea
                        {...register("debtDetails")}
                        placeholder="Amount, type, terms..."
                        rows={4}
                    />
                </div>
            )}
        </div>
    )
}
