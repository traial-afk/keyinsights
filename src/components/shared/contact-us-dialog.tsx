'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { toast } from "sonner"
import { submitContactForm } from "@/app/actions/submit-contact"
import { MessageSquare } from "lucide-react"

interface ContactUsDialogProps {
    triggerText?: React.ReactNode
    triggerClassName?: string
    defaultSubject?: string
}

export function ContactUsDialog({
    triggerText = "Contact Us",
    triggerClassName,
    defaultSubject
}: ContactUsDialogProps) {
    const [open, setOpen] = useState(false)
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = async (formData: FormData) => {
        setIsPending(true)
        // Append current URL for context
        if (typeof window !== 'undefined') {
            formData.append('source_url', window.location.href)
        }

        const result = await submitContactForm(formData)
        setIsPending(false)

        if (result?.error) {
            toast.error(result.error)
        } else if (result?.success) {
            toast.success(result.success)
            setOpen(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className={triggerClassName}>
                    {triggerText}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                    <DialogDescription>
                        We're here to help. Fill out the form below and we'll get back to you within 24 hours.
                    </DialogDescription>
                </DialogHeader>
                <form action={handleSubmit} className="grid gap-4 py-4">

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" placeholder="John Doe" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="role">I am a...</Label>
                            <Select name="role" defaultValue="seller">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="seller">Business Seller</SelectItem>
                                    <SelectItem value="buyer">Business Buyer</SelectItem>
                                    <SelectItem value="broker">Business Broker</SelectItem>
                                    <SelectItem value="advisor">Financial Advisor</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select name="subject" defaultValue={defaultSubject || "question"}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select topic" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="question">General Question</SelectItem>
                                <SelectItem value="sales">Sales Inquiry</SelectItem>
                                <SelectItem value="support">Technical Support</SelectItem>
                                <SelectItem value="partnership">Partnership</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="How can we help you today?"
                            className="min-h-[100px]"
                            required
                        />
                    </div>

                    <DialogFooter>
                        <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
                            {isPending ? 'Sending...' : 'Send Message'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
