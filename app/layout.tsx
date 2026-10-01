import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Farm Automation | Smart irrigation for better growing",
  description:
    "Explore the sensors, microprocessors and affordable components behind a Kenyan smart-farming project, with estimated prices in Kenyan shillings and a build video.",
  applicationName: "Farm Automation",
  openGraph: {
    title: "Farm Automation | Smart irrigation for better growing",
    description: "A practical look at a low-cost, sensor-led irrigation build.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#173d2b",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
