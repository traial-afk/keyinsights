import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service - KeyInsightsAI",
    robots: {
        index: false,
        follow: false,
    }
}

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-1 container mx-auto px-4 py-20 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and KeyInsightsAI ("Company," "we," "us," or "our") governing your use of our business valuation services available at valuation.keyinsightsai.com (the "Service").
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            By accessing or using our Service, submitting a valuation request, or making a payment, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy and Refund Policy, which are incorporated by reference.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                            If you do not agree to these Terms, you must not access or use our Service.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            To use our Service, you must:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Be at least 18 years of age</li>
                            <li>Have the legal capacity to enter into binding contracts</li>
                            <li>Not be prohibited from using the Service under applicable laws</li>
                            <li>Provide accurate and complete information during registration and use</li>
                        </ul>
                        <p className="text-slate-700 dark:text-slate-300">
                            By using our Service, you represent and warrant that you meet these eligibility requirements.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">3. Description of Service</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            KeyInsightsAI provides professional business valuation services delivered in digital format. Our services include:
                        </p>
                        
                        <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Service Packages</h3>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li><strong>Essential Package:</strong> Business valuation report and red flags analysis</li>
                            <li><strong>Exit Ready Package:</strong> Valuation report, red flags analysis, business teaser, and confidential information memorandum (CIM)</li>
                            <li><strong>Portfolio Packages:</strong> Multiple valuation credits for business advisors, brokers, and investors</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Valuation Methodologies</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Our valuations utilize industry-standard methodologies including:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Discounted Cash Flow (DCF) / Income Approach</li>
                            <li>Asset-Based Valuation</li>
                            <li>Market Comparables Analysis</li>
                            <li>Weighted EBITDA Multiple Approach</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">3.3 Delivery Timeline</h3>
                        <p className="text-slate-700 dark:text-slate-300">
                            We deliver completed valuation reports within 24 hours of receiving complete and accurate information from you. This timeline may be extended with your consent if additional information is required or if unusual circumstances arise.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            When using our Service, you agree to:
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Accurate Information</h3>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Provide complete, accurate, and truthful financial and business information</li>
                            <li>Submit current financial data that accurately reflects the business's financial position</li>
                            <li>Promptly notify us if you discover any errors in the information you provided</li>
                            <li>Respond to our requests for additional information or clarification in a timely manner</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Lawful Use</h3>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
                            <li>Not use the Service to engage in fraudulent, deceptive, or illegal activities</li>
                            <li>Not attempt to manipulate valuation results through false or misleading information</li>
                            <li>Comply with all applicable federal, state, and local laws and regulations</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Account Security</h3>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Maintain the confidentiality of your account credentials</li>
                            <li>Notify us immediately of any unauthorized access to your account</li>
                            <li>Accept responsibility for all activities that occur under your account</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
                        
                        <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Pricing</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Current pricing for our services is displayed on our website. We reserve the right to modify our pricing at any time, but changes will not affect orders already paid for.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Payment Processing</h3>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Payment is required in full before work begins on your valuation</li>
                            <li>We accept major credit cards and debit cards through our secure payment processor (Stripe)</li>
                            <li>All payments are processed in USD or CAD depending on your location</li>
                            <li>You authorize us to charge the payment method you provide for the selected service</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">5.3 Taxes</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Prices do not include applicable sales taxes, VAT, or other governmental taxes or fees. You are responsible for paying all such taxes or fees associated with your purchase.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6">5.4 Portfolio Packages</h3>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Portfolio package credits expire 12 months from the date of purchase</li>
                            <li>Credits are non-transferable and non-refundable after the initial purchase period</li>
                            <li>Unused credits at expiration have no cash value and cannot be refunded</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property Rights</h2>
                        
                        <h3 className="text-xl font-semibold mb-3 mt-6">6.1 Service Content</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            The Service, including all content, features, functionality, software, and design, is owned by KeyInsightsAI and is protected by copyright, trademark, and other intellectual property laws.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Valuation Reports</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Upon full payment, you receive a limited, non-exclusive, non-transferable license to use the valuation report solely for your internal business purposes. You may:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Use the report in negotiations, due diligence, or business planning</li>
                            <li>Share the report with advisors, lenders, or potential buyers/sellers under confidentiality agreements</li>
                            <li>Print or save digital copies for your records</li>
                        </ul>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            You may not:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Modify, adapt, or create derivative works from the report</li>
                            <li>Remove our branding or attribution from the report</li>
                            <li>Resell or redistribute the report to third parties (except as permitted above)</li>
                            <li>Use the report's methodology or templates to create competing services</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">6.3 White-Label Services</h3>
                        <p className="text-slate-700 dark:text-slate-300">
                            Business advisors and brokers who purchase portfolio packages may receive reports with their own branding under separate white-label agreements. Contact us for white-label terms and pricing.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">7. Important Disclaimers</h2>
                        
                        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-6">
                            <p className="text-amber-900 dark:text-amber-200 font-semibold mb-2">
                                PLEASE READ THIS SECTION CAREFULLY
                            </p>
                            <p className="text-amber-800 dark:text-amber-300 text-sm">
                                This section contains important limitations on our liability and the scope of our services.
                            </p>
                        </div>

                        <h3 className="text-xl font-semibold mb-3 mt-6">7.1 Not a Certified Appraisal</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Our valuations are professional estimates based on the information provided and market data available. They are NOT:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Certified appraisals for tax, legal, or regulatory purposes</li>
                            <li>Audited financial statements or opinions</li>
                            <li>Guaranteed predictions of actual transaction prices</li>
                            <li>Suitable for litigation or court proceedings without additional certification</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Not Financial or Legal Advice</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Our valuations and reports do not constitute:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Investment advice or recommendations</li>
                            <li>Legal advice or opinions</li>
                            <li>Tax advice or guidance</li>
                            <li>Recommendations to buy, sell, or hold any business or investment</li>
                        </ul>
                        <p className="text-slate-700 dark:text-slate-300">
                            You should consult with qualified legal, financial, and tax advisors before making business decisions based on our valuations.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6">7.3 Limitations and Assumptions</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Our valuations are subject to certain limitations:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Based on information you provide, which we do not independently verify</li>
                            <li>Reflect market conditions and data as of the valuation date</li>
                            <li>Make certain assumptions about future performance and market conditions</li>
                            <li>Cannot account for all unique factors affecting your specific business</li>
                            <li>May not be suitable for all purposes or acceptable to all third parties</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">7.4 Third-Party Acceptance</h3>
                        <p className="text-slate-700 dark:text-slate-300">
                            We do not guarantee that lenders, investors, buyers, or other third parties will accept our valuations for their purposes. Third parties may have specific requirements or may require certified appraisals from licensed appraisers.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                        
                        <h3 className="text-xl font-semibold mb-3 mt-6">8.1 Maximum Liability</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SPECIFIC VALUATION GIVING RISE TO THE CLAIM.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6">8.2 Excluded Damages</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            WE SHALL NOT BE LIABLE FOR:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Indirect, incidental, special, consequential, or punitive damages</li>
                            <li>Lost profits, revenue, or business opportunities</li>
                            <li>Business decisions made based on our valuations</li>
                            <li>Differences between our valuation and actual transaction prices</li>
                            <li>Third-party rejection or non-acceptance of our valuations</li>
                            <li>Changes in market conditions after the valuation date</li>
                            <li>Errors in information you provided to us</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">8.3 "As Is" Service</h3>
                        <p className="text-slate-700 dark:text-slate-300">
                            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            You agree to indemnify, defend, and hold harmless KeyInsightsAI, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Your use or misuse of the Service</li>
                            <li>Your violation of these Terms</li>
                            <li>Inaccurate or misleading information you provided</li>
                            <li>Your violation of any rights of third parties</li>
                            <li>Business decisions you make based on our valuations</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">10. Confidentiality</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We maintain strict confidentiality of your business information:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>All financial and business data you provide is kept confidential</li>
                            <li>We do not share your specific business information with third parties except as required by law or with your consent</li>
                            <li>We may use anonymized, aggregated data from valuations to improve our market comparables database</li>
                            <li>See our Privacy Policy for complete details on data handling</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">11. Service Modifications and Termination</h2>
                        
                        <h3 className="text-xl font-semibold mb-3 mt-6">11.1 Service Changes</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We reserve the right to:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Modify, suspend, or discontinue any aspect of the Service at any time</li>
                            <li>Change pricing for future orders</li>
                            <li>Update our valuation methodologies to reflect industry best practices</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">11.2 Account Termination</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We may suspend or terminate your access to the Service if:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>You violate these Terms</li>
                            <li>You provide false or fraudulent information</li>
                            <li>You engage in abusive or threatening behavior toward our staff</li>
                            <li>We suspect illegal activity or misuse of the Service</li>
                            <li>Required by law or regulatory authorities</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">11.3 Effect of Termination</h3>
                        <p className="text-slate-700 dark:text-slate-300">
                            Upon termination, your right to access the Service immediately ceases. You will retain access to previously purchased valuation reports. Sections of these Terms that by their nature should survive termination will remain in effect.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">12. Dispute Resolution</h2>
                        
                        <h3 className="text-xl font-semibold mb-3 mt-6">12.1 Informal Resolution</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Before initiating any formal dispute resolution, you agree to contact us to attempt to resolve the dispute informally. Most disputes can be resolved through direct communication.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6">12.2 Arbitration Agreement</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Any dispute arising from these Terms or the Service that cannot be resolved informally shall be resolved through binding arbitration in accordance with the commercial arbitration rules of the American Arbitration Association.
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Arbitration will be conducted by a single arbitrator</li>
                            <li>The arbitration will take place in a location mutually agreed upon or virtually</li>
                            <li>Each party will bear its own costs unless otherwise awarded by the arbitrator</li>
                            <li>The arbitrator's decision shall be final and binding</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">12.3 Class Action Waiver</h3>
                        <p className="text-slate-700 dark:text-slate-300">
                            YOU AGREE THAT DISPUTES WILL BE RESOLVED ON AN INDIVIDUAL BASIS ONLY, AND NOT AS PART OF A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. You may not join your claim with claims of other users.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">13. Governing Law and Jurisdiction</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where KeyInsightsAI is registered, without regard to conflict of law principles.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                            For any disputes not subject to arbitration, you consent to the exclusive jurisdiction of the courts in that jurisdiction.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">14. General Provisions</h2>
                        
                        <h3 className="text-xl font-semibold mb-3 mt-6">14.1 Entire Agreement</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between you and KeyInsightsAI regarding the Service.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6">14.2 Severability</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6">14.3 Waiver</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6">14.4 Assignment</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            You may not assign or transfer these Terms or your rights under them without our prior written consent. We may assign these Terms without restriction.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6">14.5 Force Majeure</h3>
                        <p className="text-slate-700 dark:text-slate-300">
                            We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, war, terrorism, natural disasters, or internet service failures.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">15. Changes to These Terms</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We may update these Terms from time to time. When we make material changes, we will:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Update the "Last updated" date at the top of this page</li>
                            <li>Notify active users via email</li>
                            <li>Post a notice on our website</li>
                        </ul>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Your continued use of the Service after changes to these Terms constitutes your acceptance of the updated Terms. The Terms in effect at the time of your purchase will govern that specific transaction.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                            We encourage you to review these Terms periodically to stay informed of any updates.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">16. Contact Information</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            If you have questions, concerns, or feedback about these Terms, please contact us:
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
                            <p className="text-slate-700 dark:text-slate-300 mb-2">
                                <strong>KeyInsightsAI</strong>
                            </p>
                            <p className="text-slate-700 dark:text-slate-300 mb-2">
                                Support: <a href="mailto:support@keyinsightsai.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@keyinsightsai.com</a>
                            </p>
                            <p className="text-slate-700 dark:text-slate-300">
                                Website: <a href="https://www.keyinsightsai.com" className="text-blue-600 dark:text-blue-400 hover:underline">www.keyinsightsai.com</a>
                            </p>
                        </div>
                    </section>

                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <p className="text-sm text-slate-500 dark:text-slate-400 italic mb-4">
                            This Terms of Service agreement was last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} and is effective as of that date.
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                            By using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                        </p>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    )
}
