"use client"

import Image from "next/image"
import { Briefcase, Building2, Globe, Landmark, Scale, TrendingUp } from "lucide-react"

// Define a type that supports either a Lucide icon OR a local image path
type NetworkLogo = {
    name: string;
    icon?: React.ElementType;
    src?: string;
}

const LOGOS: NetworkLogo[] = [
    // Local Files (Add your generic files here)
    { name: "Transworld", src: "/logos/transworld.png" },
    { name: "BizAdv", src: "/logos/bizadv.jpg" },
    { name: "Trans", src: "/logos/trans.png" },
    { name: "Health", src: "/logos/images.jpg" },

    // Fallback/Placeholder Icons (Keep these mixed in or remove as you add more real logos)
    { name: "Global Ventures", icon: Globe },
    { name: "Summit Partners", icon: TrendingUp },
    { name: "Legal Corp", icon: Scale },
    { name: "First National", icon: Landmark },
    { name: "Enterprise Holdings", icon: Building2 },
    { name: "Acquire Inc", icon: Briefcase },
]



// CONTROLS: Change this class to adjust logo size (e.g. h-10, h-12, h-16, h-20)
const LOGO_HEIGHT_CLASS = "h-20";

export function BuyerLogos() {
    return (
        <section className="py-10 bg-slate-50 border-b border-slate-200 overflow-hidden">
            <div className="container mx-auto px-4 mb-4 text-center">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Trusted by acquisition teams at
                </p>
            </div>

            <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden mask-linear-fade">
                {/* Mask for fading edges */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

                <div className="flex animate-scroll w-max hover:[animation-play-state:paused]">
                    {/* Render the set multiple times for seamless infinite scroll */}
                    {[1, 2].map((setIndex) => (
                        <div key={setIndex} className="flex items-center gap-16 px-8">
                            {LOGOS.map((logo, i) => (
                                <div key={`${setIndex}-${i}`} className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                                    {logo.src ? (
                                        // Render Local Image if src exists
                                        <div className={`relative ${LOGO_HEIGHT_CLASS} w-auto min-w-[100px] flex items-center justify-center`}>
                                            <Image
                                                src={logo.src}
                                                alt={logo.name}
                                                width={200}
                                                height={80}
                                                className={`object-contain h-full w-auto max-${LOGO_HEIGHT_CLASS}`}
                                            />
                                        </div>
                                    ) : (
                                        // Render Lucide Icon if no src
                                        logo.icon && (
                                            <div className="flex items-center gap-3">
                                                <logo.icon className={`w-auto ${LOGO_HEIGHT_CLASS} text-slate-700`} strokeWidth={1.5} />
                                                <span className="text-xl font-bold text-slate-700 font-['Norwester'] tracking-wide">
                                                    {logo.name}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
