import { UseFormReturn } from "react-hook-form"
import { WizardFormData } from "@/lib/validations/wizard"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface StepProps {
    form: UseFormReturn<WizardFormData>
}

export function Step6Description({ form }: StepProps) {
    const { register, formState: { errors } } = form

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label>Business Description</Label>
                <Textarea
                    {...register("businessDescription")}
                    placeholder="Describe your business, products, and market..."
                    className="h-32"
                />
                {errors.businessDescription && <p className="text-sm text-red-500">{errors.businessDescription.message}</p>}
            </div>
            <div className="space-y-2">
                <Label>Website URL (Optional)</Label>
                <Input {...register("businessWebsite")} placeholder="https://example.com" />
                {errors.businessWebsite && <p className="text-sm text-red-500">{errors.businessWebsite.message}</p>}
            </div>
        </div>
    )
}
