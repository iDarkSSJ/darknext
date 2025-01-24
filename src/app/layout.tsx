import type { Metadata } from "next"
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google"
import "./globals.css"
import { pressStart2P } from "@/ui/fonts"
import Providers from "./SessionProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Darkness",
  description: "Web Retro Emulator",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${pressStart2P.className} ${geistSans.variable} ${geistMono.variable} antialiased crtTextShadowDf tracking-wider text-white overflow-x-hidden min-h-screen`}>
        <Providers>
          <div className="flex flex-col min-h-screen">{children}</div>
          <div className="crtBackground z-[100]"></div>
          <div className="crtScanline z-[110]"></div>
        </Providers>
      </body>
    </html>
  )
}
