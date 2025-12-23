import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://keyinsights.ai"),
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
      </body>
    </html>
  );
}
