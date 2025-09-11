"use client"

import { motion } from "framer-motion"
import Hero from "../components/Hero"
import CTASection from "../components/CTASection"
import PhasesSection from "../components/PhasesSection"
import DynamicServicesSection from "../components/DynamicServicesSection"
import AIPerformanceComparison from "../components/AIPerformanceComparison"
import StrategyCallSection from "../components/StrategyCallSection"

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.section variants={sectionVariants} className="relative z-10">
        <Hero />
      </motion.section>

      <motion.section variants={sectionVariants} className="relative z-10">
        <StrategyCallSection />
      </motion.section>

      <motion.section variants={sectionVariants} className="relative z-10">
        <DynamicServicesSection />
      </motion.section>

      <motion.section variants={sectionVariants} className="relative z-10">
        <PhasesSection />
      </motion.section>

      <motion.section variants={sectionVariants} className="relative z-10">
        <AIPerformanceComparison />
      </motion.section>

      <motion.section variants={sectionVariants} className="relative z-10">
        <CTASection />
      </motion.section>
    </motion.div>
  )
}
