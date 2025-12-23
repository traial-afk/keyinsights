import { UseFormReturn } from "react-hook-form"
import { WizardFormData } from "@/lib/validations/wizard"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface StepProps {
    form: UseFormReturn<WizardFormData>
}

export function Step9SaleInfo({ form }: StepProps) {
    const { setValue, watch, register } = form
    const formData = watch()

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label>
                    {formData.userType === 'buyer'
                        ? "Why is the seller selling? (if disclosed)"
                        : "Reason for Selling"}
                </Label>
                <Textarea
                    {...register("reasonForSelling")}
                    placeholder={formData.userType === 'buyer' ? "Retirement, health, etc..." : "Retirement, pursuing other opportunities..."}
                    rows={3}
                />
            </div>

            {(formData.userType === 'seller' || (formData.userType === 'advisor' && formData.advisorServiceType === 'selling')) && (
                <div className="space-y-2">
                    <Label>Selling Timeframe</Label>
                    <Select onValueChange={(val) => setValue("sellingTimeframe", val)} value={formData.sellingTimeframe}>
                        <SelectTrigger><SelectValue placeholder="Select timeframe" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="immediately">Immediately</SelectItem>
                            <SelectItem value="1-3-months">1-3 months</SelectItem>
                            <SelectItem value="3-6-months">3-6 months</SelectItem>
                            <SelectItem value="6-12-months">6-12 months</SelectItem>
                            <SelectItem value="12-plus-months">12+ months</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            )}

            {(formData.userType === 'buyer' || (formData.userType === 'advisor' && formData.advisorServiceType === 'buying')) && (
                <div className="space-y-2">
                    <Label>Desired Acquisition Timeframe</Label>
                    <Select onValueChange={(val) => setValue("acquisitionTimeframe", val)} value={formData.acquisitionTimeframe}>
                        <SelectTrigger><SelectValue placeholder="Select timeframe" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="immediately">Immediately</SelectItem>
                            <SelectItem value="1-3-months">1-3 months</SelectItem>
                            <SelectItem value="3-6-months">3-6 months</SelectItem>
                            <SelectItem value="6-12-months">6-12 months</SelectItem>
                            <SelectItem value="12-plus-months">12+ months</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            )}
        </div>
    )
}
