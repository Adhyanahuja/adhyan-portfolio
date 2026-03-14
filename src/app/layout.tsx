import type { Metadata } from "next";
import { Inter, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { GradientCursor } from "@/components/ui/GradientCursor";
import { PageLoader } from "@/components/ui/PageLoader";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-handwritten",
});

export const metadata: Metadata = {
  title: "Adhyan Ahuja — Builder with Purpose",
  description:
    "Data Scientist at D. E. Shaw Group. Building things that matter — from ML models to teams. BITS Pilani alumnus combining technical depth with business impact.",
  openGraph: {
    title: "Adhyan Ahuja — Builder with Purpose",
    description:
      "Data Scientist at D. E. Shaw Group. Building things that matter — from ML models to teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${caveat.variable} ${inter.className}`}>
      <body className="bg-[#09090b]">
        <PageLoader />
        <GradientCursor />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
