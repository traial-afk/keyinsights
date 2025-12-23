import React from 'react';
import Link from 'next/link';
import { Home, TrendingUp, TrendingDown, Users, ArrowRight } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 flex items-center justify-center px-4">
            <div className="max-w-4xl w-full text-center">
                {/* Animated 404 with declining chart */}
                <div className="mb-8">
                    <div className="inline-block">
                        <h1 className="text-[120px] font-bold text-blue-900 leading-none mb-2">
                            404
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-red-500">
                            <TrendingDown className="w-6 h-6" />
                            <span className="text-sm font-semibold">VALUE: $0.00</span>
                            <TrendingDown className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                {/* Main message */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Valuation Failed: Page Not Found
                    </h2>
                    <p className="text-xl text-gray-600 mb-2">
                        Unlike our 24-hour business valuations, this page couldn't be valued at all.
                    </p>
                    <p className="text-lg text-gray-500">
                        It might have been acquired, merged, or simply never existed.
                    </p>
                </div>

                {/* CTA Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {/* Homepage */}
                    <Link
                        href="/"
                        className="group bg-white border-2 border-blue-900 rounded-xl p-6 hover:bg-blue-900 transition-all duration-300 hover:scale-105"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-white transition-colors">
                            <Home className="w-6 h-6 text-blue-900" />
                        </div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-white mb-2">
                            Home
                        </h3>
                        <p className="text-sm text-gray-600 group-hover:text-blue-100">
                            Start fresh
                        </p>
                    </Link>

                    {/* Buyer */}
                    <Link
                        href="/buyer"
                        className="group bg-white border-2 border-green-600 rounded-xl p-6 hover:bg-green-600 transition-all duration-300 hover:scale-105"
                    >
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-white transition-colors">
                            <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-white mb-2">
                            Buying
                        </h3>
                        <p className="text-sm text-gray-600 group-hover:text-green-100">
                            Due diligence
                        </p>
                    </Link>

                    {/* Seller */}
                    <Link
                        href="/selling"
                        className="group bg-white border-2 border-amber-500 rounded-xl p-6 hover:bg-amber-500 transition-all duration-300 hover:scale-105"
                    >
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-white transition-colors">
                            <TrendingDown className="w-6 h-6 text-amber-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-white mb-2">
                            Selling
                        </h3>
                        <p className="text-sm text-gray-600 group-hover:text-amber-100">
                            Exit prep
                        </p>
                    </Link>

                    {/* Advisor */}
                    <Link
                        href="/advisor"
                        className="group bg-white border-2 border-purple-600 rounded-xl p-6 hover:bg-purple-600 transition-all duration-300 hover:scale-105"
                    >
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-white transition-colors">
                            <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-white mb-2">
                            Advisors
                        </h3>
                        <p className="text-sm text-gray-600 group-hover:text-purple-100">
                            Expert support
                        </p>
                    </Link>
                </div>

                {/* Bottom help text */}
                <div className="text-sm text-gray-500">
                    Lost? Our valuations are faster than finding this page.{' '}
                    <Link href="/estimate" className="text-blue-900 hover:text-blue-700 font-semibold inline-flex items-center gap-1">
                        Get a free estimate
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
