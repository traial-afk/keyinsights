import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://keyinsightsai.com"),
  title: {
    default: "KeyInsightsAI - Business Valuation in 24 Hours",
    template: "%s | KeyInsightsAI"
  },
  description: "Professional business valuation in 24 hours for $399-$549. Data-driven financial analysis for buyers, sellers, and advisors.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "KeyInsightsAI - Business Valuation in 24 Hours",
    description: "Professional business valuation in 24 hours for $399-$549. Data-driven financial analysis for buyers, sellers, and advisors.",
    siteName: "KeyInsightsAI",
    images: [
    {
      url: "/logo.png",
      width: 1200,
      height: 630,
      alt: "KeyInsightsAI - Business Valuation in 24 Hours",
    }
  ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KeyInsightsAI - Business Valuation in 24 Hours",
    description: "Professional business valuation in 24 hours for $399-$549.",
    creator: "@keyinsightsai",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/vercel.svg",
    shortcut: "/vercel.svg",
    apple: "/vercel.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "uqjscaklmd");
          `}
        </Script>
      </body>
    </html>
  );
}
