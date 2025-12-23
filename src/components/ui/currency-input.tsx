import * as React from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface CurrencyInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
    value?: number
    onChange: (value: number | undefined) => void
    placeholder?: string
}

export const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
    ({ className, value, onChange, ...props }, ref) => {
        const [displayValue, setDisplayValue] = React.useState("")

        // Update display value when external value changes
        React.useEffect(() => {
            if (value !== undefined && value !== null && !isNaN(value)) {
                // Format with commas
                setDisplayValue(value.toLocaleString("en-US"))
            } else {
                setDisplayValue("")
            }
        }, [value])

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.target.value

            // Allow: numbers, commas, dots, minus sign at start
            // Regex to validate partial input: ^-?[\d,]*\.?\d*$
            if (!/^-?[\d,]*\.?\d*$/.test(inputValue)) {
                return
            }

            setDisplayValue(inputValue)

            // Parse to number for parent
            // Remove commas
            const rawValue = inputValue.replace(/,/g, "")

            if (rawValue === "" || rawValue === "-") {
                onChange(undefined)
                return
            }

            const numberValue = parseFloat(rawValue)
            if (!isNaN(numberValue)) {
                onChange(numberValue)
            }
        }

        const handleBlur = () => {
            if (value !== undefined && value !== null && !isNaN(value)) {
                setDisplayValue(value.toLocaleString("en-US"))
            }
        }

        return (
            <Input
                {...props}
                ref={ref}
                type="text"
                value={displayValue}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn("font-mono", className)}
            />
        )
    }
)
CurrencyInput.displayName = "CurrencyInput"
