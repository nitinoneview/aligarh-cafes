import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aligarh Cafes — Explore Local. Brew Memories.",
    template: "%s | Aligarh Cafes",
  },
  description:
    "Discover the best cafes in Aligarh. Find menus, prices, locations, couple-friendly cafes and special offers near you.",
  keywords: [
    "cafes in Aligarh",
    "best cafe Aligarh",
    "couple friendly cafe Aligarh",
    "cafe near me Aligarh",
    "Aligarh cafes",
    "rooftop cafe Aligarh",
  ],
  metadataBase: new URL("https://aligarhcafes.vercel.app"),
  openGraph: {
    title: "Aligarh Cafes — Explore Local. Brew Memories.",
    description:
      "Discover the best cafes in Aligarh. Find menus, prices, locations, couple-friendly cafes and special offers.",
    url: "https://aligarhcafes.vercel.app",
    siteName: "Aligarh Cafes",
    locale: "en_IN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
