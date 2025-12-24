import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy - KeyInsightsAI",
    robots: {
        index: false,
        follow: false,
    }
}

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            KeyInsightsAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our business valuation services at valuation.keyinsightsai.com.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                            By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                        
                        <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Business Information</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            When you request a business valuation, we collect:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Business financial data (revenue, expenses, EBITDA, assets, liabilities)</li>
                            <li>Business operational information (industry, location, employee count, years in operation)</li>
                            <li>Supporting documents (financial statements, tax returns, if provided)</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Personal Information</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We collect personal information necessary to provide our services:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Name and contact information (email address, phone number)</li>
                            <li>Billing information processed through our payment provider</li>
                            <li>Communication records related to your valuation request</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Automatically Collected Information</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We automatically collect certain information when you visit our website:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>IP address and browser type</li>
                            <li>Pages visited and time spent on our site</li>
                            <li>Referring website addresses</li>
                            <li>Device information and operating system</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Prepare and deliver your business valuation report</li>
                            <li>Process payments and maintain transaction records</li>
                            <li>Communicate with you about your valuation and our services</li>
                            <li>Improve our valuation methodologies and service quality</li>
                            <li>Maintain our market comparables database (anonymized data only)</li>
                            <li>Comply with legal obligations and protect our legal rights</li>
                            <li>Prevent fraud and ensure platform security</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">4. How We Share Your Information</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We do not sell your personal information. We may share your information only in the following circumstances:
                        </p>
                        
                        <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Service Providers</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We share information with trusted third-party service providers who assist us in operating our business:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Payment processing (Stripe) for secure transaction handling</li>
                            <li>Cloud hosting and data storage providers</li>
                            <li>Email communication services</li>
                        </ul>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            These providers are contractually obligated to protect your information and use it only for the purposes we specify.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Legal Requirements</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We may disclose your information if required by law or in response to valid legal requests by public authorities, including to meet national security or law enforcement requirements.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Business Transfers</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6">4.4 Aggregated Data</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We may use anonymized and aggregated business data to improve our market comparables database and valuation methodologies. This data cannot be used to identify individual businesses or persons.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Encryption of data in transit and at rest</li>
                            <li>Secure payment processing through PCI-compliant providers</li>
                            <li>Regular security assessments and updates</li>
                            <li>Limited access to personal information on a need-to-know basis</li>
                        </ul>
                        <p className="text-slate-700 dark:text-slate-300">
                            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We retain your personal information and business data for as long as necessary to:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Provide you with the services you requested</li>
                            <li>Comply with legal, accounting, or reporting requirements</li>
                            <li>Resolve disputes and enforce our agreements</li>
                        </ul>
                        <p className="text-slate-700 dark:text-slate-300">
                            Valuation reports and associated business data are typically retained for a minimum of 7 years to comply with financial records retention requirements. You may request deletion of your personal information subject to these legal obligations.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">7. Your Privacy Rights</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Depending on your location, you may have the following rights regarding your personal information:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                            <li><strong>Portability:</strong> Request transfer of your information to another service provider</li>
                            <li><strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
                            <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                        </ul>
                        <p className="text-slate-700 dark:text-slate-300">
                            To exercise these rights, please contact us using the information provided below. We will respond to your request within 30 days.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking Technologies</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Remember your preferences and settings</li>
                            <li>Understand how you use our website</li>
                            <li>Improve our website functionality and user experience</li>
                            <li>Analyze website traffic and performance</li>
                        </ul>
                        <p className="text-slate-700 dark:text-slate-300">
                            You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">9. Third-Party Links</h2>
                        <p className="text-slate-700 dark:text-slate-300">
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
                        <p className="text-slate-700 dark:text-slate-300">
                            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">11. International Data Transfers</h2>
                        <p className="text-slate-700 dark:text-slate-300">
                            We serve clients in the United States and Canada. Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Updating the "Last updated" date at the top of this policy</li>
                            <li>Sending an email notification to registered users</li>
                            <li>Posting a notice on our website</li>
                        </ul>
                        <p className="text-slate-700 dark:text-slate-300">
                            Your continued use of our services after changes to this Privacy Policy constitutes your acceptance of the updated policy.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
                            <p className="text-slate-700 dark:text-slate-300 mb-2">
                                <strong>KeyInsightsAI</strong>
                            </p>
                            <p className="text-slate-700 dark:text-slate-300 mb-2">
                                Email: <a href="mailto:privacy@keyinsightsai.com" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@keyinsightsai.com</a>
                            </p>
                            <p className="text-slate-700 dark:text-slate-300">
                                Website: <a href="https://valuation.keyinsightsai.com" className="text-blue-600 dark:text-blue-400 hover:underline">valuation.keyinsightsai.com</a>
                            </p>
                        </div>
                    </section>

                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                            This Privacy Policy was last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} and is effective as of that date.
                        </p>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    )
}
