import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { ScrollDepthTracker } from "@/components/analytics/ScrollDepthTracker";
import { OutboundClickTracker } from "@/components/analytics/OutboundClickTracker";

export const metadata: Metadata = {
  title: "Travelling South Korea | Travel Guides, Neighbourhoods & Itineraries",
  description:
    "Curated travel guides, neighbourhood insights, food spots and itineraries for exploring South Korea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <ScrollDepthTracker />
        <OutboundClickTracker />
        <SiteNav />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
