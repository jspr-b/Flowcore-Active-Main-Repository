"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Zap, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Clock,
    text: "Concise 5-minute walkthrough",
  },
  {
    icon: Zap,
    text: "Explore SaaS possibilities",
  },
  {
    icon: Lightbulb,
    text: "Customized insights",
  },
]

export default function StrategyCallSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0c] to-[#040405] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl p-8 sm:p-12 overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Experience a Personalized Walkthrough for Your Business
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Apply for our complimentary, tailored session and see how effortless SaaS can transform your company.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center bg-white/10 backdrop-blur-sm rounded-full py-3 px-5"
                  >
                    <benefit.icon className="w-6 h-6 mr-3 text-primary" />
                    <span className="text-base text-white font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:w-1/3 flex justify-center"
            >
              <Button
                onClick={() => window.open("https://form.typeform.com/to/PtyMFtie", "_blank")}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xl font-bold px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request Your Walkthrough
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
