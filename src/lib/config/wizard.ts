export const currencyOptions = [
    { value: "USD", label: "USD - US Dollar" },
    { value: "EUR", label: "EUR - Euro" },
    { value: "GBP", label: "GBP - British Pound" },
    { value: "CAD", label: "CAD - Canadian Dollar" },
    { value: "AUD", label: "AUD - Australian Dollar" },
]

export const fieldConfig = {
    // 1. Persona
    userType: {
        label: "I am a...",
        type: "select",
        options: [
            { value: "buyer", label: "Buyer (conducting due diligence)" },
            { value: "seller", label: "Seller (preparing to sell)" },
            { value: "advisor", label: "Advisor (helping a client)" }
        ]
    },

    // 2. Contact
    userName: {
        label: "Your Name",
        type: "text",
        required: true,
        placeholder: "John Smith"
    },
    userPhone: {
        label: "Phone Number",
        type: "tel",
        placeholder: "+1 (555) 123-4567"
    },
    clientBusinessName: {
        label: "Client/Business Name",
        type: "text",
        placeholder: "ABC Company Inc.",
        showFor: ["advisor"]
    },
    advisorServiceType: {
        label: "I am helping my client",
        type: "select",
        defaultValue: "selling",
        options: [
            { value: "selling", label: "Sell a business" },
            { value: "buying", label: "Buy a business" }
        ],
        showFor: ["advisor"]
    },
    buyerConcerns: {
        label: "What concerns do you have about this business?",
        type: "textarea",
        placeholder: "Enter any concerns or red flags you've identified...",
        showFor: ["buyer", "advisor-buying"],
        rows: 4
    },
    sellerValue: {
        label: "What makes this business valuable?",
        type: "textarea",
        placeholder: "Competitive advantages, unique assets, market position...",
        helpText: "Highlight what makes this business stand out to potential buyers",
        showFor: ["seller", "advisor-selling"],
        rows: 4
    },

    // 3. Currency
    baseCurrency: {
        label: "Base Currency",
        type: "select",
        helpText: "All financial figures should be entered in this currency",
        options: currencyOptions
    },

    // 4. Business Overview
    businessName: {
        label: "Business Name",
        type: "text",
        placeholder: "ABC Company Inc."
    },
    industry: {
        label: "Industry",
        type: "text",
        placeholder: "e.g., E-commerce, Manufacturing, Food Service"
    },
    yearsInOperation: {
        label: "Years in Operation",
        type: "number",
        placeholder: "5",
        min: 0
    },
    businessLocation: {
        label: "Business Location",
        type: "text",
        placeholder: "City, State/Province, Country"
    },

    // 5. Structure
    businessStructure: {
        label: "Business Structure",
        type: "select",
        options: [
            { value: "sole-proprietorship", label: "Sole Proprietorship" },
            { value: "partnership", label: "Partnership" },
            { value: "llc", label: "LLC" },
            { value: "s-corp", label: "S Corporation" },
            { value: "c-corp", label: "C Corporation" },
            { value: "other", label: "Other" }
        ]
    },
    ownershipPercentage: {
        label: "Ownership Percentage",
        labelBuyer: "Ownership Percentage (if buying partial stake)",
        labelSeller: "Your Ownership Percentage",
        type: "number",
        placeholder: "100",
        min: 0,
        max: 100,
        suffix: "%"
    },
    employeeCount: {
        label: "Employee Count",
        type: "number",
        placeholder: "10",
        min: 0
    },

    // 6. Description
    businessDescription: {
        label: "Business Description",
        type: "textarea",
        placeholder: "Describe what the business does, its products/services, customer base, and operations...",
        rows: 6
    },
    businessWebsite: {
        label: "Business Website",
        type: "url",
        placeholder: "https://example.com",
        helpText: "Optional - leave blank if no website"
    },

    // 7. Financials
    askingPrice: {
        label: "Asking Price",
        type: "number",
        placeholder: "500000",
        helpText: "What is the seller asking for this business?",
        showFor: ["buyer", "advisor-buying"],
        min: 0
    },
    minimumPrice: {
        label: "Minimum Acceptable Price",
        type: "number",
        placeholder: "500000",
        helpText: "The minimum price you're willing to accept",
        showFor: ["seller", "advisor-selling"],
        min: 0
    },
    annualRevenue: {
        label: "Annual Revenue",
        type: "number",
        placeholder: "1000000",
        helpText: "Total revenue for the most recent year"
    },
    annualProfit: {
        label: "Annual Profit",
        type: "number",
        placeholder: "150000",
        helpText: "Net profit after all expenses. If your business operated at a loss, enter as negative number (e.g., -50000)",
        allowNegative: true
    },
    lastYearEBITDA: {
        label: "Last Year EBITDA",
        type: "number",
        placeholder: "200000",
        helpText: "If negative EBITDA (a loss), enter as negative number (e.g., -50000)",
        allowNegative: true
    },
    previousYear1EBITDA: {
        label: "Previous Year EBITDA (Year -1)",
        type: "number",
        placeholder: "180000",
        helpText: "If negative, enter as negative number (e.g., -50000)",
        allowNegative: true
    },
    previousYear2EBITDA: {
        label: "Previous Year EBITDA (Year -2)",
        type: "number",
        placeholder: "160000",
        helpText: "If negative, enter as negative number (e.g., -50000)",
        allowNegative: true
    },

    revenueChange: {
        label: "Was there significant revenue change (>20%) from previous year?",
        type: "radio",
        options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" }
        ]
    },
    revenueChangeReason: {
        label: "What caused the revenue change?",
        type: "textarea",
        placeholder: "Explain the reason for the significant change in revenue...",
        showWhen: { field: "revenueChange", value: "yes" },
        rows: 3
    },
    hasAddBacks: {
        label: "Are there owner add-backs?",
        labelBuyer: "Are there owner add-backs documented?",
        type: "radio",
        helpText: "Personal expenses, one-time costs, or owner salary above market rate that a new owner wouldn't have. Leave blank if unsure.",
        options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" }
        ]
    },
    addBackAmount: {
        label: "Total Add-back Amount",
        type: "number",
        placeholder: "50000",
        showWhen: { field: "hasAddBacks", value: "yes" },
        min: 0
    },
    addBackDetails: {
        label: "Add-back Details",
        type: "textarea",
        placeholder: "List and explain each add-back (e.g., Owner salary $80k above market rate, Personal vehicle $15k, One-time legal fees $10k...)",
        showWhen: { field: "hasAddBacks", value: "yes" },
        rows: 4
    },

    // 8. Assets & Liabilities
    realEstateIncluded: {
        label: "Is real estate included in the sale?",
        type: "radio",
        options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" }
        ]
    },
    realEstateValue: {
        label: "Real Estate Value",
        type: "number",
        placeholder: "300000",
        showWhen: { field: "realEstateIncluded", value: "yes" },
        min: 0
    },
    assetsIncluded: {
        label: "What assets are included?",
        type: "textarea",
        placeholder: "Inventory, equipment, intellectual property, customer lists, contracts, etc...",
        helpText: "List all tangible and intangible assets included in the sale",
        rows: 4
    },
    outstandingDebts: {
        label: "Are there outstanding debts?",
        type: "radio",
        options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" }
        ]
    },
    debtDetails: {
        label: "Debt Details",
        type: "textarea",
        placeholder: "Amount, type, terms, and whether debt will be assumed by buyer or paid off at closing...",
        showWhen: { field: "outstandingDebts", value: "yes" },
        rows: 4
    },

    // 9. Sale Info
    reasonForSelling: {
        label: "Reason for Selling",
        labelBuyer: "Why is the seller selling? (if disclosed)",
        type: "textarea",
        placeholder: "Retirement, pursuing other opportunities, health reasons, etc...",
        showFor: ["seller", "advisor-selling", "buyer", "advisor-buying"],
        rows: 3
    },
    sellingTimeframe: {
        label: "Selling Timeframe",
        type: "select",
        showFor: ["seller", "advisor-selling"],
        options: [
            { value: "immediately", label: "Immediately" },
            { value: "1-3-months", label: "1-3 months" },
            { value: "3-6-months", label: "3-6 months" },
            { value: "6-12-months", label: "6-12 months" },
            { value: "12-plus-months", label: "12+ months" }
        ]
    },
    acquisitionTimeframe: {
        label: "Desired Acquisition Timeframe",
        labelAdvisor: "Client's Desired Acquisition Timeframe",
        type: "select",
        showFor: ["buyer", "advisor-buying"],
        options: [
            { value: "immediately", label: "Immediately" },
            { value: "1-3-months", label: "1-3 months" },
            { value: "3-6-months", label: "3-6 months" },
            { value: "6-12-months", label: "6-12 months" },
            { value: "12-plus-months", label: "12+ months" }
        ]
    },

    // 10. Files
    files: {
        label: "Upload Supporting Documents",
        type: "file",
        helpText: "Financial statements, tax returns, P&L statements, balance sheets, asset lists, etc.",
        accept: ".pdf,.doc,.docx,.xls,.xlsx,.csv",
        multiple: true
    }
}

export const wizardSteps = [
    {
        id: "persona",
        title: "1. I am a...",
        description: "Select your role",
        fields: ["userType"]
    },
    {
        id: "contact",
        title: "2. Contact Information",
        description: "Let us know who we're working with",
        fields: ["userName", "userPhone", "clientBusinessName", "advisorServiceType", "buyerConcerns", "sellerValue"]
    },
    {
        id: "currency",
        title: "3. Currency Selection",
        description: "Select your base currency for all financial figures",
        fields: ["baseCurrency"]
    },
    {
        id: "overview",
        title: "4. Business Overview",
        description: "Basic information about the business",
        fields: ["businessName", "industry", "yearsInOperation", "businessLocation"]
    },
    {
        id: "structure",
        title: "5. Business Structure & Operations",
        description: "Details about business structure and workforce",
        fields: ["businessStructure", "ownershipPercentage", "employeeCount"]
    },
    {
        id: "description",
        title: "6. Business Description",
        description: "Tell us about the business",
        fields: ["businessDescription", "businessWebsite"]
    },
    {
        id: "financials",
        title: "7. Financial Information",
        description: "Revenue, profit, EBITDA, and financial details",
        fields: ["askingPrice", "minimumPrice", "annualRevenue", "annualProfit", "lastYearEBITDA", "previousYear1EBITDA", "previousYear2EBITDA", "revenueChange", "revenueChangeReason", "hasAddBacks", "addBackAmount", "addBackDetails"]
    },
    {
        id: "assets",
        title: "8. Assets & Liabilities",
        description: "What's included in the sale and any outstanding obligations",
        fields: ["realEstateIncluded", "realEstateValue", "assetsIncluded", "outstandingDebts", "debtDetails"]
    },
    {
        id: "sale",
        title: "9. Sale Information",
        description: "Timeline and context for the transaction",
        fields: ["reasonForSelling", "sellingTimeframe", "acquisitionTimeframe"]
    },
    {
        id: "documents",
        title: "10. Supporting Documents",
        description: "Upload financial statements and other relevant documents",
        fields: ["files"]
    }
]