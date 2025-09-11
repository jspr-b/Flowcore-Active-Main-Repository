import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AnimatedBackground from "./components/AnimatedBackground"
import ScrollToTopButton from "./components/ScrollToTopButton"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FlowCore",
  description: "Your professional coding agency",
  icons: {
    icon: "/logo.svg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-white antialiased overflow-x-hidden overflow-y-auto`}>
        <AnimatedBackground />
        <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#040405] to-[#0a0a0c]">
          <Header />
          <main className="flex-grow">{children}</main>
          <div className="h-16 bg-gradient-to-b from-[#0a0a0c] to-[#040405]"></div>
          <Footer />
          <ScrollToTopButton />
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (typeof window !== 'undefined') {
              window.history.scrollRestoration = 'manual';
            }
          `,
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
