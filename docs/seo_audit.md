# SEO Audit Report

**Date:** 2025-12-22  
**Status:** Updated

This document lists the CURRENT SEO titles and descriptions configured for each page in the application.

## Global Default
**File:** `src/app/layout.tsx`
- **Title Template:** `%s | KeyInsightsAI`
- **Default Title:** `KeyInsightsAI - Business Valuation in 24 Hours`
- **Description:** `Professional business valuation in 24 hours for $399-$549. Data-driven financial analysis for buyers, sellers, and advisors.`

## Page-Specific Metadata

### 1. Home
**File:** `src/app/page.tsx`
- **Title:** `Business Valuation in 24 Hours | Free Estimate | KeyInsightsAI`
- **Description:** `Get a professional business valuation for $399-$549 in 24 hours. Free estimate in minutes. Data-driven analysis for buyers, sellers, and advisors.`

### 2. Buyers
**File:** `src/app/buyer/page.tsx`
- **Title:** `Valuation for Business Buyers| Free Estimate | KeyInsightsAI`
- **Description:** `Professional business valuation in 24 hours for $399-$549. Validate asking price and identify red flags before you buy. Get a free estimate.`

### 3. Sellers
**File:** `src/app/selling/page.tsx`
- **Title:** `Valuation for Business Sellers| Free Estimate | KeyInsightsAI`
- **Description:** `Pre-sale business valuation in 24 hours. Identify value drivers, justify your asking price, and negotiate from strength. From $399. Get a free estimate.`

### 4. Advisors
**File:** `src/app/advisor/page.tsx`
- **Title:** `Business Valuations for Advisors | KeyInsightsAI`
- **Description:** `Deliver professional valuations to clients in 24 hours. From $399 per report. Institutional-grade service for brokers, M&A advisors, and investors.`

### 5. Pricing
**File:** `src/app/pricing/page.tsx`
- **Title:** `Business Valuation Pricing - $399 to $549 | KeyInsightsAI`
- **Description:** `Simple, transparent pricing for business valuations. Choose the plan that fits your needs: Essential, Exit-Ready, or Portfolio.`

### 6. Why Us
**File:** `src/app/why-us/page.tsx`
- **Title:** `24-Hour Business Valuations from $399 | KeyInsightsAI`
- **Description:** `Professional business valuations in 24 hours versus 2-6 weeks. $399-$549 versus $2,000-$25,000. Technology-enabled precision, expert-verified results.`

### 7. Blog
**File:** `src/app/blog/page.tsx`
- **Title:** `Business Valuation Resources & Blog | KeyInsightsAI`
- **Description:** `Insights on business valuation, exit planning, and market trends for founders and advisors.`

### 8. Packages (Locked)
**File:** `src/app/packages/page.tsx`
- **Title:** `Select Package - KeyInsightsAI`
- **Description:** `Choose the right valuation package for your business needs. Essential, Exit-Ready, and Portfolio options available.`

## Pages Using Default Metadata
These pages do not have specific metadata exports and fallback to the `layout.tsx` defaults:
- `src/app/estimate/page.tsx` (Free Valuation Wizard)
- `src/app/dashboard/page.tsx` (Dashboard - Protected)
- `src/app/auth/*` (Login, Signup, etc.)

## Legal Pages (No Index)
These pages are set to `noindex, nofollow`:
- **Terms:** `Terms of Service - KeyInsightsAI`
- **Refund:** `Refund Policy - KeyInsightsAI`
- **Privacy:** `Privacy Policy - KeyInsightsAI`
