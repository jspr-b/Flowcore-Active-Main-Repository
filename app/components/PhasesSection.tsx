"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Lightbulb, Rocket, Zap, Globe, ArrowRight, Check } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const phases = [
  {
    icon: Lightbulb,
    title: "AI Strategy & Planning",
    description: "We start by understanding your business needs and designing a comprehensive AI strategy.",
    details: [
      "In-depth analysis of your current processes and AI opportunities",
      "Identification of key areas for AI agent implementation",
      "Development of a tailored AI roadmap",
      "ROI projections and success metrics definition",
      "AI platform evaluation and setup planning",
    ],
    gradient: "from-pink-500 to-purple-500",
    cta: "Start Your AI Journey",
  },
  {
    icon: Rocket,
    title: "AI Agent Development",
    description:
      "We rapidly develop and deploy your first set of AI agents, focusing on quick wins and core functionalities.",
    details: [
      "Rapid prototyping of AI agents using advanced platforms",
      "Integration with existing data sources and systems",
      "Implementation of core AI functionalities",
      "User acceptance testing and feedback collection",
      "Initial training and fine-tuning of AI models",
    ],
    gradient: "from-purple-500 to-blue-500",
    cta: "Build Your AI Agents",
  },
  {
    icon: Zap,
    title: "Iteration & Expansion",
    description:
      "Through agile sprints, we continuously improve your AI agents, expand their capabilities, and roll out to more departments.",
    details: [
      "Ongoing performance monitoring and optimization",
      "Regular updates and enhancements to AI agents",
      "Expansion of AI capabilities to new business areas",
      "Advanced feature implementation (e.g., predictive analytics)",
      "Scaling of AI infrastructure as needed",
    ],
    gradient: "from-blue-500 to-cyan-500",
    cta: "Enhance Your AI",
  },
  {
    icon: Globe,
    title: "AI Optimization & Innovation",
    description:
      "We focus on maximizing the potential of your AI agents, driving continuous improvement, and exploring innovative applications across your organization.",
    details: [
      "Advanced performance tuning of AI agents",
      "Exploration of new AI use cases and capabilities",
      "Integration of AI insights into strategic decision-making",
      "Establishment of AI governance and best practices",
      "Continuous learning and adaptation of AI models",
    ],
    gradient: "from-cyan-500 to-teal-500",
    cta: "Maximize AI Potential",
  },
]

export default function PhasesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activePhase, setActivePhase] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"],
  })

  const backgroundProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1])

  return (
    <section className="relative py-24 overflow-hidden bg-[#040405]" ref={containerRef}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500"
        style={{
          height: backgroundProgress,
          opacity: backgroundOpacity,
          bottom: "auto",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
            Your AI Agent Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4">
            Experience our proven methodology for implementing powerful AI agents, ensuring successful digital
            transformation through a structured, phase-based approach
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-16 last:mb-0"
              onViewportEnter={() => setActivePhase(index)}
            >
              <div className="bg-secondary/5 backdrop-blur-sm rounded-lg p-8 hover:bg-secondary/10 transition-all duration-300 relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{
                    background: `radial-gradient(600px at 50% 50%, ${phase.gradient.split(" ")[1]}20, transparent 80%)`,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <motion.div
                    className="flex items-center mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${phase.gradient} mr-4`}
                    >
                      <phase.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{phase.title}</h3>
                  </motion.div>
                  <motion.p
                    className="text-gray-300 mb-6 text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {phase.description}
                  </motion.p>
                  <motion.ul
                    className="space-y-3 mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {phase.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <Check className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-400">{detail}</span>
                      </li>
                    ))}
                  </motion.ul>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Link href="#" onClick={() => window.open("https://calendly.com/jasperbutter2/30min", "_blank")}>
                      <Button
                        className={`relative overflow-hidden rounded-full bg-gradient-to-r ${phase.gradient} px-6 py-2 text-sm font-medium text-white transition-transform hover:scale-105`}
                      >
                        {phase.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
              {index < phases.length - 1 && (
                <motion.div
                  className="h-16 w-1 mx-auto my-4 relative"
                  initial={{ height: 0 }}
                  whileInView={{ height: 64 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-pink-500 to-cyan-500"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ originY: 0 }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-24 text-center relative z-10"
        >
          <div className="bg-secondary/10 backdrop-blur-sm rounded-3xl p-8 relative overflow-hidden group">
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              initial={false}
              animate={{
                background: "radial-gradient(600px at 50% 50%, rgba(255, 255, 255, 0.1), transparent 80%)",
              }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                Ready to Leverage AI and Transform Your Business?
              </h3>
              <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
                Don't just imagine the future – create it. Our team of AI experts is ready to guide you through each
                phase of implementing powerful AI agents, revolutionizing your business processes.
              </p>
              <Button
                onClick={() => window.open("https://calendly.com/jasperbutter2/30min", "_blank")}
                className="relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-8 py-3 text-lg font-bold text-white transition-transform hover:scale-105"
              >
                Leverage AI Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
