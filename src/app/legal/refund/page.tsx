import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Refund Policy - KeyInsightsAI",
    robots: {
        index: false,
        follow: false,
    }
}

export default function RefundPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
                
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            At KeyInsightsAI, we are committed to delivering high-quality business valuation reports that meet professional standards. This Refund Policy outlines the circumstances under which refunds may be issued and our process for handling refund requests.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                            We stand behind the quality of our work and will make every effort to ensure your satisfaction with our services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">2. Our Quality Guarantee</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Every business valuation we deliver includes:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Professional analysis using industry-standard valuation methodologies</li>
                            <li>Comprehensive report with clear explanations and supporting data</li>
                            <li>Delivery within 24 hours of receiving complete information</li>
                            <li>One round of reasonable revisions or clarifications at no additional charge</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">3. Refund Eligibility</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            You may be eligible for a full or partial refund in the following circumstances:
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Full Refund (100%)</h3>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li><strong>Cancellation before work begins:</strong> If you cancel your order before we begin analysis of your business data, you will receive a full refund</li>
                            <li><strong>Non-delivery:</strong> If we fail to deliver your valuation report within 48 hours of receiving complete information and you have not been notified of a delay</li>
                            <li><strong>Technical error:</strong> If a payment processing error results in duplicate charges</li>
                            <li><strong>Service unavailability:</strong> If we determine we cannot complete your valuation due to insufficient market data or other technical limitations (identified before work begins)</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Partial Refund (50%)</h3>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li><strong>Significant quality issues:</strong> If the delivered report contains material errors in calculations or methodology that cannot be corrected through revision</li>
                            <li><strong>Incomplete deliverables:</strong> If the report is missing substantial components described in your selected package without prior agreement</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">3.3 Cancellation Window</h3>
                        <p className="text-slate-700 dark:text-slate-300">
                            You have up to 2 hours after payment to cancel your order for a full refund, provided we have not yet begun work on your valuation. After this window, cancellations are subject to the policies above.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">4. Non-Refundable Circumstances</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Refunds will not be issued in the following situations:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li><strong>Disagreement with valuation results:</strong> We use industry-standard methodologies and market data. A valuation that is lower or higher than expected does not qualify for a refund</li>
                            <li><strong>Change of mind:</strong> If you decide you no longer need the valuation after work has begun</li>
                            <li><strong>After report delivery:</strong> Once the final report has been delivered and you have had the opportunity to review it and request revisions (minimum 48 hours), refunds are generally not available</li>
                            <li><strong>Incomplete or inaccurate information:</strong> If the valuation is based on incomplete or inaccurate financial data you provided, unless we failed to request necessary information</li>
                            <li><strong>Third-party rejection:</strong> If a lender, buyer, or other third party does not accept the valuation, as we cannot control third-party requirements</li>
                            <li><strong>Market changes:</strong> Changes in market conditions or your business after the valuation date do not qualify for a refund</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">5. Revision and Correction Policy</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Before requesting a refund, please consider our revision options:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li><strong>Included revisions:</strong> One round of reasonable revisions or clarifications is included with every valuation at no additional charge</li>
                            <li><strong>Calculation errors:</strong> If we made an error in calculations or methodology, we will correct it at no charge</li>
                            <li><strong>Updated information:</strong> If you need to provide updated or corrected financial information, we can revise the valuation (additional fees may apply depending on the extent of changes)</li>
                            <li><strong>Additional analysis:</strong> If you need additional analysis or documentation beyond your original package, this can be provided for an additional fee</li>
                        </ul>
                        <p className="text-slate-700 dark:text-slate-300">
                            Please submit revision requests within 7 days of receiving your report.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">6. How to Request a Refund</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            To request a refund, please follow these steps:
                        </p>
                        <ol className="list-decimal pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-3">
                            <li><strong>Contact us:</strong> Email <a href="mailto:support@keyinsightsai.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@keyinsightsai.com</a> with your order number and the reason for your refund request</li>
                            <li><strong>Provide documentation:</strong> Include any relevant documentation supporting your request (e.g., screenshots of errors, specific concerns about the report)</li>
                            <li><strong>Allow review time:</strong> We will review your request within 2 business days and may contact you for additional information</li>
                            <li><strong>Receive decision:</strong> You will receive a written response with our decision and, if approved, the refund amount and timeline</li>
                        </ol>
                        <p className="text-slate-700 dark:text-slate-300">
                            We aim to resolve all refund requests fairly and promptly. In most cases where a refund is warranted, we will first offer to correct the issue or provide additional analysis before processing a refund.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">7. Refund Processing</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Once a refund is approved:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li><strong>Processing time:</strong> Refunds are processed within 5-7 business days of approval</li>
                            <li><strong>Method:</strong> Refunds are issued to the original payment method used for purchase</li>
                            <li><strong>Bank processing:</strong> Depending on your financial institution, it may take an additional 3-5 business days for the refund to appear in your account</li>
                            <li><strong>Confirmation:</strong> You will receive an email confirmation once the refund has been processed</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">8. Portfolio Packages (Advisors)</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            For portfolio packages purchased by business advisors, brokers, or investors:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Refunds are calculated on a per-valuation basis for unused valuations only</li>
                            <li>Completed valuations are non-refundable</li>
                            <li>Partially completed valuations (work has begun) are subject to the partial refund policy above</li>
                            <li>Portfolio packages have a 12-month expiration; unused valuations after this period are non-refundable</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">9. Dispute Resolution</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            If you are not satisfied with our refund decision:
                        </p>
                        <ol className="list-decimal pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Contact us to discuss your concerns in detail</li>
                            <li>We will review your case with a senior analyst</li>
                            <li>If the issue involves technical methodology, we may engage an independent third-party valuator for review</li>
                            <li>We will provide a final written decision within 10 business days</li>
                        </ol>
                        <p className="text-slate-700 dark:text-slate-300">
                            For payment disputes, you may also have rights under your credit card company's dispute resolution process.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">10. Chargebacks</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            If you initiate a chargeback with your credit card company or bank:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Please contact us first to resolve the issue. Most concerns can be addressed directly</li>
                            <li>Chargebacks may result in immediate suspension of access to your valuation report and our services</li>
                            <li>If a chargeback is filed without first contacting us, we reserve the right to provide documentation to your financial institution demonstrating that services were rendered</li>
                            <li>Fraudulent chargebacks may result in permanent account suspension and legal action</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">11. Changes to This Refund Policy</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We may update this Refund Policy from time to time. Changes will be effective immediately upon posting to our website. The refund policy in effect at the time of your purchase will apply to your order.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                            Material changes to this policy will be communicated via email to active customers.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            For refund requests, questions, or concerns about this policy, please contact us:
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
                            <p className="text-slate-700 dark:text-slate-300 mb-2">
                                <strong>KeyInsightsAI Support</strong>
                            </p>
                            <p className="text-slate-700 dark:text-slate-300 mb-2">
                                Email: <a href="mailto:support@keyinsightsai.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@keyinsightsai.com</a>
                            </p>
                            <p className="text-slate-700 dark:text-slate-300">
                                Website: <a href="https://valuation.keyinsightsai.com" className="text-blue-600 dark:text-blue-400 hover:underline">valuation.keyinsightsai.com</a>
                            </p>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mt-4">
                            We respond to all refund requests within 2 business days.
                        </p>
                    </section>

                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                            This Refund Policy was last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} and is effective as of that date.
                        </p>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    )
}
