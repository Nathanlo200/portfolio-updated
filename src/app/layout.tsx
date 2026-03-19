import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "../components/Header";
import { PageWrapper } from "../components/PageWrapper";
import { TranslationProvider } from "../components/TranslationProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { defaultLocale } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathan Lomito — Software Engineer & Cybersecurity",
  description:
    "Nathan Lomito — Software engineer and cybersecurity specialist with 5+ years of experience building secure web platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale} className={cn("font-sans", inter.variable)}>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function() {
            try {
              const key = 'theme-preference';
              const pref = localStorage.getItem(key) || 'system';
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const isDark = pref === 'dark' || (pref === 'system' && prefersDark);
              document.documentElement.classList.toggle('dark', isDark);
            } catch (e) {
              // ignore
            }
          })();`}
        </Script>
      </head>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "min-h-screen bg-background text-foreground"
        )}
      >
        <TranslationProvider>
          <Header />
          <PageWrapper>{children}</PageWrapper>
        </TranslationProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
