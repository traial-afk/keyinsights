import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="bg-[#1e3a8a] text-slate-300 border-t border-slate-800">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 text-2xl text-white">
                            <Image
                                src="/favicon.png.png"
                                alt="KeyInsightsAI Logo"
                                width={40}
                                height={40}
                                className="rounded-lg"
                            />
                            <span className="font-['Norwester'] tracking-wide">KeyInsights AI</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed">
                            Professional business valuations.
                            Fast, accurate, and fraction of the cost of traditional firms.
                        </p>
                        <div className="flex items-center gap-4">
                            {/*<a href="#" className="p-2 bg-[#1e3a8a] rounded-full hover:bg-[#f4a623] hover:text-slate-900 transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-[#1e3a8a] rounded-full hover:bg-[#f4a623] hover:text-slate-900 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-[#1e3a8a] rounded-full hover:bg-[#f4a623] hover:text-slate-900 transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>*/}
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Solutions</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/selling" className="hover:text-[#f4a623] transition-colors">
                                    For Sellers
                                </Link>
                            </li>
                            <li>
                                <Link href="/buyer" className="hover:text-[#f4a623] transition-colors">
                                    For Buyers
                                </Link>
                            </li>
                            <li>
                                <Link href="/advisor" className="hover:text-[#f4a623] transition-colors">
                                    For Advisors
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-[#f4a623] transition-colors">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column 
                    <div>
                        <h3 className="text-white font-bold mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="hover:text-[#f4a623] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-[#f4a623] transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-[#f4a623] transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[#f4a623] transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div> */}

                    {/* Legal Column */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Legal</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/legal/privacy" className="hover:text-[#f4a623] transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/terms" className="hover:text-[#f4a623] transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/refund" className="hover:text-[#f4a623] transition-colors">
                                    Refund Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} KeyInsights AI. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/legal/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
