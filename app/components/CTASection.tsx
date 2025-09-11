"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Bot, Zap, Rocket, BarChart } from "lucide-react"
import Link from "next/link"

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{ top: "20%", left: "10%" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{ bottom: "10%", right: "10%" }}
      />
    </div>
  )
}

export default function CTASection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
      <FloatingShapes />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                  Transform Your Business
                </span>
                <span className="block text-white mt-2">with AI Agents</span>
              </h2>
            </div>

            <div>
              <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto mt-6">
                Harness the power of AI to automate tasks, reduce costs, and drive innovation in your organization
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12"
            >
              <div
                onClick={() => window.open("https://calendly.com/jasperbutter2/30min", "_blank")}
                className="group relative"
              >
                <Button
                  size="lg"
                  className="relative flex items-center gap-2 px-8 py-6 text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                >
                  <span>Schedule a Demo</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </div>

              <Link href="/solutions" passHref>
                <Button
                  variant="outline"
                  size="lg"
                  className="relative flex items-center gap-2 px-8 py-6 text-lg border-2 border-purple-500 text-white hover:bg-purple-500/20"
                >
                  <span>Explore AI Solutions</span>
                  <Rocket className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-6 mt-16"
            >
              {[Bot, Zap, Rocket, BarChart].map((Icon, i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                >
                  <Icon className="w-8 h-8 text-primary" />
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Join the AI revolution and stay ahead of the competition. Our AI agents are ready to transform your
                business operations and drive unprecedented growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
