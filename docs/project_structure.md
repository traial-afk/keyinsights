# Project Structure & Component Architecture

This document outlines the file structure of the KeyInsightsAI project and details the usage of reusable and page-specific components.

## Directory Overview

```
src/
├── app/                  # Next.js App Router (Pages & API Routes)
│   ├── actions/          # Server Actions (Stripe, Contact Form)
│   ├── advisor/          # Advisor Persona Page
│   ├── auth/             # Authentication Pages (Login, Signup)
│   ├── blog/             # Blog Listing & Post Pages
│   ├── buyer/            # Buyer Persona Page
│   ├── dashboard/        # User Dashboard (Protected)
│   ├── estimate/         # Free Estimator Tool
│   ├── legal/            # Legal Pages (Privacy, Terms, Refund)
│   ├── pricing/          # Pricing Page
│   ├── selling/          # Seller Persona Page
│   ├── valuation/        # Core Product (Wizard & Report)
│   └── why-us/           # Company Page
├── components/           # React Components
│   ├── blog/             # Blog-specific components
│   ├── dashboard/        # Dashboard-specific components
│   ├── home/             # Homepage-specific components
│   ├── shared/           # Global Reusable Components
│   ├── solutions/        # Landing Page Sections (Solutions)
│   ├── ui/               # Shadcn UI Primitives
│   ├── site-footer.tsx   # Global Footer
│   └── site-header.tsx   # Global Header
└── lib/                  # Utilities & Configuration
    ├── config/           # App Constants
    ├── supabase/         # Database Clients
    └── utils.ts          # Helper functions
```

## Shared & Reusable Components

| Component | Path | Usage | Description |
|-----------|------|-------|-------------|
| **SiteHeader** | `components/site-header.tsx` | All Public Pages | Main navigation bar. Includes context-aware links (Pricing/Process) and "Call Sales" dropdown. |
| **SiteFooter** | `components/site-footer.tsx` | All Public Pages | Global footer with legal links, social links, and navigation. |
| **CallSalesButton** | `components/shared/call-sales-button.tsx` | `SiteHeader.tsx` | Dropdown component revealing phone number, "Call Now", and "Copy" actions. Used in Desktop Header and Mobile Menu. |
| **SampleReportDialog** | `components/shared/sample-report-dialog.tsx` | `SiteHeader`, Hero Sections | Modal dialog showing sample PDF previews and a download form. |
| **FreeEstimatorPopup** | `components/solutions/free-estimator-popup.tsx` | `BuyerPage`, `SellerPage`, `AdvisorPage` | Exit-intent and scroll-triggered popup offering a free valuation estimate. |
| **ContactUsDialog** | `components/shared/contact-us-dialog.tsx`* | `PricingPage` | (Implied) Modal for contacting sales/support without leaving the page. |

## Page-Specific Components (Solutions)

The `components/solutions/` directory contains modular sections used to build the persona landing pages.

### Buyer Persona Components
- **Used in:** `src/app/buyer/page.tsx`
- `BuyingHero`: Main hero section with "Don't Overpay" value prop.
- `BuyerRisks`: Section highlighting valuation risks.
- `BuyerSolution`: How the solution addresses risks.
- `BuyerSteps`: 4-step process timeline.
- `BuyerUseCases`: Examples of when to use the service.
- `BuyerMethods`: Explanation of valuation methods used.
- `BuyerLogos`: Social proof ticker (also used on other pages).
- `BuyerFAQ`: Accordion FAQ specific to buyers.
- `BuyerCTA`: Final call to action.
- `StickyCTA`: Scroll-triggered bottom bar (Buyer version).

### Seller Persona Components
- **Used in:** `src/app/selling/page.tsx`
- `SellingHero`: Hero section with "Don't Undersell" value prop.
- `SellerProblem`: Challenges in selling.
- `SellerSolution`: Benefits of independent valuation.
- `WhyHours`: "24-Hour Velocity" feature highlight.
- `SellerSteps`: Process timeline for sellers.
- `SellerMethods`: Methodology explanation.
- `SellerPackages`: Pricing section specific to sellers.
- `SellerUseCases`: Scenarios (Retirement, Unsolicited Offer).
- `SellerFAQ`: Seller-specific FAQs.
- `SellerCTA`: Final call to action.
- `SellerStickyCTA`: Scroll-triggered bottom bar (Seller version).

### Advisor Persona Components
- **Used in:** `src/app/advisor/page.tsx`
- `AdvisorHero`: Hero section for brokers/intermediaries.
- `AdvisorProblem`: Broker/Advisor pain points.
- `AdvisorSolution`: White-label/speed benefits.
- `AdvisorSteps`: Process timeline.
- `AdvisorPricing`: Portfolio/Volume pricing tier display.
- `AdvisorStickyCTA`: Scroll-triggered bottom bar (Advisor version).
- `AdvisorFAQ`: Advisor-specific FAQs.

## Data & Configuration
- `src/lib/blog-api.ts`: Manages blog post content and metadata.
- `src/lib/utils.ts`: Contains `cn` helper for Tailwind class merging.
- `src/app/actions/*`: Server actions for form submissions and Stripe integration.
