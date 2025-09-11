"use client"

import { motion } from "framer-motion"
import OurSolutions from "../components/OurSolutions"
import ComparisonTable from "../components/ComparisonTable"
import CTASection from "../components/CTASection"
import { useEffect } from "react"

export default function SolutionsPage() {
  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, [])
  return (
    <div className="relative overflow-x-hidden">
      <div className="flex-grow">
        <div className="relative">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 z-10">
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                background: [
                  "radial-gradient(circle at 0% 0%, rgba(255,0,255,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 100%, rgba(0,255,255,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 50%, rgba(255,0,255,0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                    Our Solutions
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-400 mb-8">
                    Discover our comprehensive range of digital solutions designed to transform your business
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Our Solutions Section */}
          <section className="relative z-10">
            <OurSolutions />
          </section>

          {/* Comparison Table Section */}
          <section className="relative py-24 bg-gradient-to-b from-[#0a0a0c] to-[#040405] z-10">
            <div className="container mx-auto px-4">
              <ComparisonTable />
            </div>
          </section>

          <section className="relative z-10">
            <CTASection />
          </section>
        </div>
      </div>
    </div>
  )
}
