import { z } from "zod"

export const wizardSchema = z.object({
    // 1. Persona
    userType: z.enum(["buyer", "seller", "advisor"], { message: "Please select a role" }),

    // 2. Contact
    userName: z.string().min(1, "Name is required"),
    userPhone: z.string().optional(),
    clientBusinessName: z.string().optional(),
    advisorServiceType: z.enum(["selling", "buying"], { message: "Please select a service type" }).optional(),
    buyerConcerns: z.string().optional(),
    sellerValue: z.string().optional(),

    // 3. Currency
    baseCurrency: z.string().min(1, "Currency is required"),

    // 4. Business Overview
    businessName: z.string().min(1, "Business Name is required"),
    industry: z.string().min(1, "Industry is required"),
    yearsInOperation: z.preprocess(
        (val) => (val === "" || val === undefined ? undefined : Number(val)),
        z.number({ message: "Years in operation is required" }).min(0, "Must be positive")
    ),
    businessLocation: z.string().min(1, "Location is required"),

    // 5. Structure
    businessStructure: z.string().min(1, "Structure is required"),
    ownershipPercentage: z.preprocess(
        (val) => (val === "" || val === undefined ? undefined : Number(val)),
        z.number({ message: "Ownership % is required" }).min(0).max(100)
    ),
    employeeCount: z.preprocess(
        (val) => (val === "" || val === undefined ? undefined : Number(val)),
        z.number({ message: "Employee count is required" }).min(0)
    ),

    // 6. Description
    businessDescription: z.string().optional(),
    businessWebsite: z.string()
        .url("Please enter a valid URL")
        .optional()
        .or(z.literal("")),

    // 7. Financials
    askingPrice: z.preprocess(
        (val) => (val === "" || val === undefined ? undefined : Number(val)),
        z.number().optional()
    ),
    minimumPrice: z.preprocess(
        (val) => (val === "" || val === undefined ? undefined : Number(val)),
        z.number().optional()
    ),
    annualRevenue: z.preprocess(
        (val) => (val === "" || val === undefined ? undefined : Number(val)),
        z.number({ message: "Annual Revenue is required" })
    ),
    annualProfit: z.preprocess(
        (val) => (val === "" || val === undefined ? undefined : Number(val)),
        z.number({ message: "Annual Profit is required" })
    ),
    lastYearEBITDA: z.preprocess(
        (val) => (val === "" || val === undefined ? undefined : Number(val)),
        z.number({ message: "Last Year EBITDA is required" })
    ),
    previousYear1EBITDA: z.preprocess(
        (val) => (val === "" || val === undefined ? undefined : Number(val)),
        z.number().optional()
    ),
    previousYear2EBITDA: z.preprocess(
        (val) => (val === "" || val === undefined ? undefined : Number(val)),
        z.number().optional()
    ),

    revenueChange: z.enum(["yes", "no"], { message: "Please select Yes or No" }).optional(),
    revenueChangeReason: z.string().optional(),
    hasAddBacks: z.enum(["yes", "no"], { message: "Please select Yes or No" }).optional(),
    addBackAmount: z.preprocess(
        (val) => (val === "" || Number.isNaN(Number(val)) ? undefined : Number(val)),
        z.number().optional()
    ),
    addBackDetails: z.string().optional(),

    // 8. Assets & Liabilities
    realEstateIncluded: z.enum(["yes", "no"], { message: "Please select Yes or No" }),
    realEstateValue: z.preprocess(
        (val) => (val === "" || Number.isNaN(Number(val)) ? undefined : Number(val)),
        z.number().optional()
    ),
    assetsIncluded: z.string().optional(),
    outstandingDebts: z.enum(["yes", "no"], { message: "Please select Yes or No" }),
    debtDetails: z.string().optional(),

    // 9. Sale Info
    reasonForSelling: z.string().optional(),
    sellingTimeframe: z.string().optional(),
    acquisitionTimeframe: z.string().optional(),

    // 10. Files
    files: z.any().optional(),

    // Legacy fields
    brokerOwnerName: z.string().optional(),
    brokerOwnerPhone: z.string().optional(),
    sicCode: z.string().optional(),
    locationLeasedOwned: z.string().optional(),
    locationDependent: z.string().optional(),
    sde: z.preprocess(
        (val) => (val === "" || Number.isNaN(Number(val)) ? undefined : Number(val)),
        z.number().optional()
    ),
    ebitda: z.preprocess(
        (val) => (val === "" || Number.isNaN(Number(val)) ? undefined : Number(val)),
        z.number().optional()
    ),
    currentStep: z.number().optional(),
})

export type WizardFormData = z.infer<typeof wizardSchema>