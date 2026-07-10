import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import RegisterSW from "@/components/RegisterSW"
import IntroSplash from "@/components/IntroSplash"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const viewport: Viewport = {
  themeColor: "#000000",
}

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
    "top 10 cafes in Aligarh",
    "best cafes in Aligarh 2026",
    "cafe with wifi Aligarh",
    "cafes near AMU Aligarh",
    "aesthetic cafe Aligarh",
    "family cafe Aligarh",
    "budget cafe Aligarh",
    "new cafe in Aligarh",
    "Aligarh cafe list",
  ],
  metadataBase: new URL("https://aligarhcafes.in"),
  openGraph: {
    title: "Aligarh Cafes — Explore Local. Brew Memories.",
    description:
      "Discover the best cafes in Aligarh. Find menus, prices, locations, couple-friendly cafes and special offers.",
    url: "https://aligarhcafes.in",
    siteName: "Aligarh Cafes",
    locale: "en_IN",
    type: "website",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aligarh Cafes",
  url: "https://aligarhcafes.in",
  logo: "https://aligarhcafes.in/logo.png",
  description:
    "Discover the best cafes in Aligarh. Find menus, prices, locations, couple-friendly cafes and special offers near you.",
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aligarh Cafes",
  url: "https://aligarhcafes.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://aligarhcafes.in/cafes?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <IntroSplash />
        <RegisterSW />
        {children}
      </body>
    </html>
  )
}
