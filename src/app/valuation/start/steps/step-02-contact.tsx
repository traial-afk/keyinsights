import { UseFormReturn } from "react-hook-form"
import { WizardFormData } from "@/lib/validations/wizard"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface StepProps {
    form: UseFormReturn<WizardFormData>
}

export function Step2Contact({ form }: StepProps) {
    const { register, watch, setValue, formState: { errors } } = form
    const formData = watch()

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                    <Label>Your Name <span className="text-red-500">*</span></Label>
                    <Input {...register("userName")} placeholder="John Smith" />
                    {errors.userName && <p className="text-sm text-red-500">{errors.userName.message}</p>}
                </div>
                <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input {...register("userPhone")} placeholder="+1 (555) 123-4567" />
                </div>

                {formData.userType === 'advisor' && (
                    <>
                        <div className="space-y-2">
                            <Label>Client/Business Name</Label>
                            <Input {...register("clientBusinessName")} placeholder="ABC Company Inc." />
                        </div>
                        <div className="space-y-2">
                            <Label>I am representing my client</Label>
                            <Select onValueChange={(val) => setValue("advisorServiceType", val as any)} value={formData.advisorServiceType}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select service type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="selling">Sell a business</SelectItem>
                                    <SelectItem value="buying">Buy a business</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </>
                )}

                {(formData.userType === 'buyer' || (formData.userType === 'advisor' && formData.advisorServiceType === 'buying')) && (
                    <div className="space-y-2">
                        <Label>What concerns do you have about this business?</Label>
                        <Textarea
                            {...register("buyerConcerns")}
                            placeholder="Enter any concerns or red flags..."
                            rows={4}
                        />
                    </div>
                )}

                {(formData.userType === 'seller' || (formData.userType === 'advisor' && formData.advisorServiceType === 'selling')) && (
                    <div className="space-y-2">
                        <Label>What makes this business valuable and Owner Involvement Level ?</Label>
                        <Textarea
                            {...register("sellerValue")}
                            placeholder="Competitive advantages, unique assets..."
                            rows={4}
                        />
                        <p className="text-xs text-muted-foreground">Highlight what makes this business stand out to potential buyers and owner involvement level</p>
                    </div>
                )}
            </div>
        </div>
    )
}
