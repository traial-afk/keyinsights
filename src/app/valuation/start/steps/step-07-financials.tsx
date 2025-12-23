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

export function Step7Financials({ form, control }: StepProps) {
    const { setValue, watch, register, formState: { errors } } = form
    const formData = watch()

    return (
        <div className="space-y-4">
            {/* Asking or Minimum Price based on Persona */}
            {(formData.userType === 'buyer' || (formData.userType === 'advisor' && formData.advisorServiceType === 'buying')) && (
                <div className="space-y-2">
                    <Label>Asking Price</Label>
                    <Controller
                        control={control}
                        name="askingPrice"
                        render={({ field }) => (
                            <CurrencyInput value={field.value} onChange={field.onChange} placeholder="0.00" />
                        )}
                    />
                </div>
            )}

            {(formData.userType === 'seller' || (formData.userType === 'advisor' && formData.advisorServiceType === 'selling')) && (
                <div className="space-y-2">
                    <Label>Minimum Acceptable Price</Label>
                    <Controller
                        control={control}
                        name="minimumPrice"
                        render={({ field }) => (
                            <CurrencyInput value={field.value} onChange={field.onChange} placeholder="0.00" />
                        )}
                    />
                </div>
            )}

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Annual Revenue <span className="text-red-500">*</span></Label>
                    <Controller
                        control={control}
                        name="annualRevenue"
                        render={({ field }) => (
                            <CurrencyInput
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="0.00"
                            />
                        )}
                    />
                    {errors.annualRevenue && <p className="text-sm text-red-500">{errors.annualRevenue.message}</p>}
                </div>
                <div className="space-y-2">
                    <Label>Annual Profit (Net Income) <span className="text-red-500">*</span></Label>
                    <Controller
                        control={control}
                        name="annualProfit"
                        render={({ field }) => (
                            <CurrencyInput
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="0.00"
                            />
                        )}
                    />
                    {errors.annualProfit && <p className="text-sm text-red-500">{errors.annualProfit.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <Label>Last Year EBITDA <span className="text-red-500">*</span></Label>
                <Controller
                    control={control}
                    name="lastYearEBITDA"
                    render={({ field }) => (
                        <CurrencyInput
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="0.00"
                        />
                    )}
                />
                {errors.lastYearEBITDA && <p className="text-sm text-red-500">{errors.lastYearEBITDA.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>EBITDA (Year -1)</Label>
                    <Controller
                        control={control}
                        name="previousYear1EBITDA"
                        render={({ field }) => (
                            <CurrencyInput
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Optional"
                            />
                        )}
                    />
                </div>
                <div className="space-y-2">
                    <Label>EBITDA (Year -2)</Label>
                    <Controller
                        control={control}
                        name="previousYear2EBITDA"
                        render={({ field }) => (
                            <CurrencyInput
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Optional"
                            />
                        )}
                    />
                </div>
            </div>



            <div className="space-y-2">
                <Label>Significant Revenue Change (&gt;20%)?</Label>
                <Select onValueChange={(val) => setValue("revenueChange", val as any)} value={formData.revenueChange}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                </Select>
                {errors.revenueChange && <p className="text-sm text-red-500">{errors.revenueChange.message}</p>}
            </div>

            {formData.revenueChange === 'yes' && (
                <div className="space-y-2">
                    <Label>Reason for Change</Label>
                    <Textarea {...register("revenueChangeReason")} placeholder="Explain the change..." />
                </div>
            )}

            <div className="space-y-2">
                <Label>Are there owner add-backs? <span className="text-red-500">*</span></Label>
                <Select onValueChange={(val) => setValue("hasAddBacks", val as any)} value={formData.hasAddBacks}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                </Select>
                {errors.hasAddBacks && <p className="text-sm text-red-500">{errors.hasAddBacks.message}</p>}
            </div>

            {formData.hasAddBacks === 'yes' && (
                <>
                    <div className="space-y-2">
                        <Label>Total Add-Back Amount</Label>
                        <Controller
                            control={control}
                            name="addBackAmount"
                            render={({ field }) => (
                                <CurrencyInput
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder="0.00"
                                />
                            )}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Add-Back Details</Label>
                        <Textarea {...register("addBackDetails")} placeholder="List details..." />
                    </div>
                </>
            )}
        </div>
    )
}
