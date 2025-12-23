"use client"

import { Users, Shield, Zap, BadgeCheck, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const pillars = [
    {
        icon: Users,
        title: 'Team, Not One Person',
        description: 'Multiple analysts review your data simultaneously not one person working alone.',
    },
    {
        icon: Shield,
        title: 'Valuations Only',
        description: 'Valuations are all we do. Just valuations, every single day.',
    },
    {
        icon: Zap,
        title: 'No Waiting Games',
        description: 'No partner committees, no approval queues, no bureaucratic delays.',
    },
    {
        icon: BadgeCheck,
        title: 'Nothing Skipped',
        description: 'Four valuation methods, multiple reviewers, every red flag identified.',
    },
]

export function WhyHours() {
    return (
        <section
            className="py-24 relative overflow-hidden"
            // BACKGROUND COLOR - Change this value to try different options (see bottom of file)
            style={{ background: 'linear-gradient(180deg, #f0f4fa 0%, #e8eef6 50%, #f0f4fa 100%)' }}
        >
            {/* Subtle pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a8a' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="container mx-auto px-4 max-w-5xl relative">
                {/* Header */}
                <div className="text-center mb-14">
                    {/* Clock icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-white shadow-lg border border-slate-200">
                        <Clock className="w-8 h-8 text-[#f4a623]" />
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight font-['Playfair_Display']">
                        24 Hours?{' '}
                        <span className="text-[#f4a623]">
                            How Is That Possible?
                        </span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-700 mb-4 font-medium leading-relaxed">
                        We deliver in 24 hours not by cutting corners,
                        <br className="hidden md:block" />
                        <span className="text-[#1e3a8a] font-semibold"> but by cutting the waste.</span>
                    </p>

                    <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        Traditional valuations take 2-4 weeks because you're stuck in a queue, waiting for one
                        analyst to finish other clients before starting yours. Then waiting for partner reviews.
                        Then waiting for revisions.
                    </p>
                </div>

                {/* Transition line */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-slate-300" />
                    <Badge className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a] px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                        Here's How
                    </Badge>
                    <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-slate-300" />
                </div>

                {/* Four Pillars */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                    {pillars.map((pillar, index) => (
                        <Card
                            key={pillar.title}
                            className="border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#1e3a8a]/30 transition-all duration-300 bg-white group"
                        >
                            <CardContent className="p-6 space-y-4 text-center">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-[#f4a623]/10 border border-[#f4a623]/20 flex items-center justify-center text-[#f4a623] group-hover:bg-[#f4a623] group-hover:text-white transition-all duration-300 mx-auto">
                                    <pillar.icon className="w-6 h-6" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1e3a8a] transition-colors">
                                    {pillar.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {pillar.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Closer */}
                <div className="text-center">
                    <div className="inline-block p-8 rounded-2xl bg-white border border-slate-200 shadow-lg max-w-3xl">
                        <p className="text-xl md:text-2xl text-slate-800 leading-relaxed">
                            Fast doesn't mean rushed. Every report undergoes rigorous review before delivery.{' '}
                            <span className="text-[#1e3a8a] font-semibold">
                                We've simply eliminated the inefficiencies that plague traditional valuation firms.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

/*
===========================================
BACKGROUND COLOR OPTIONS - Try these!
===========================================

To change the background, find this line near the top:
style={{ background: 'linear-gradient(180deg, #f0f4fa 0%, #e8eef6 50%, #f0f4fa 100%)' }}

Replace with one of these options:

---------------------------------------------
OPTION 1: Light Blue-Gray (Current)
---------------------------------------------
style={{ background: 'linear-gradient(180deg, #f0f4fa 0%, #e8eef6 50%, #f0f4fa 100%)' }}

---------------------------------------------
OPTION 2: Pure Light Gray (Neutral)
---------------------------------------------
style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)' }}

---------------------------------------------
OPTION 3: Very Subtle Blue Tint
---------------------------------------------
style={{ background: '#f5f8fc' }}

---------------------------------------------
OPTION 4: Warm Off-White (matches amber accent)
---------------------------------------------
style={{ background: 'linear-gradient(180deg, #fefcf9 0%, #faf7f2 50%, #fefcf9 100%)' }}

---------------------------------------------
OPTION 5: Slate 50 (matches other light sections)
---------------------------------------------
style={{ background: '#f8fafc' }}

---------------------------------------------
OPTION 6: Light with Blue Accent Glow
---------------------------------------------
style={{ background: 'radial-gradient(ellipse at center, #e8f0fe 0%, #f8fafc 70%)' }}

---------------------------------------------
OPTION 7: Keep it WHITE (simplest)
---------------------------------------------
style={{ background: '#ffffff' }}

===========================================
*/