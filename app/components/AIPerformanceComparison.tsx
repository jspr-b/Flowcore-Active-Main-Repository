"use client"

import { motion } from "framer-motion"
import { ArrowRight, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const comparisonData = [
  {
    metric: "Cost Reduction",
    saas: 80,
    traditional: 0,
    unit: "%",
    description:
      "SaaS can reduce operational costs by up to 80%, removing expenses tied to manual processes and legacy systems.",
  },
  {
    metric: "Execution Time",
    saas: 5,
    traditional: 60,
    unit: "minutes",
    description:
      "Processes completed with SaaS take minutes instead of hours, accelerating delivery and decision-making.",
  },
  {
    metric: "Operational Availability",
    saas: 100,
    traditional: 30,
    unit: "%",
    description: "SaaS runs 24/7, offering uninterrupted performance compared to the limits of traditional operations.",
  },
  {
    metric: "Custom Fit",
    saas: 100,
    traditional: 20,
    unit: "%",
    description:
      "Every SaaS solution is built around your unique workflows, eliminating one-size-fits-all limitations of traditional tools.",
  },
]

const AIPerformanceComparison = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#040405] to-[#0a0a0c]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
            SaaS vs Traditional Operations: The Impact
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See how custom SaaS products transform efficiency, speed, and scalability for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/10 backdrop-blur-sm rounded-lg p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-xl font-semibold text-white mb-4 relative z-10">{item.metric}</h3>
              <p className="text-sm text-gray-400 mb-4 relative z-10">{item.description}</p>
              <div className="flex justify-between items-center mb-2 relative z-10">
                <div className="flex items-center">
                  <Bot className="w-6 h-6 text-cyan-500 mr-2" />
                  <span className="text-2xl font-bold text-cyan-500">
                    {item.saas}
                    {item.unit}
                  </span>
                </div>
                <div className="flex items-center">
                  <User className="w-6 h-6 text-yellow-500 mr-2" />
                  <span className="text-2xl font-bold text-yellow-500">
                    {item.traditional}
                    {item.unit}
                  </span>
                </div>
              </div>
              <div className="relative pt-2 z-10">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.saas}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-300 mb-6">
            Harness the power of custom SaaS solutions to revolutionize your business operations and stay ahead of the competition.
          </p>
          <Button
            onClick={() => window.open("https://calendly.com/jasperbutter2/30min", "_blank")}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default AIPerformanceComparison
