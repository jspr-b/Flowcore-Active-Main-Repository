"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import GlobalDeveloperNetwork from "../components/GlobalDeveloperNetwork"
import CTASection from "../components/CTASection"
import { ArrowRight, Users, Target, Zap, Sparkles } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Move with speed",
    description:
      "As a no-code team, we understand we're selling speed and time. So we make it our priority to take steps internally and externally to push things the extra step faster.",
  },
  {
    icon: Target,
    title: "User-experience focused",
    description:
      "We believe UI/UX is a make or break when it comes to products in this era. Building a product the users wants to come back to is more important than ever.",
  },
  {
    icon: Users,
    title: "Collaboration always",
    description:
      "The best products are born out of many different perspectives. We know that as a team, we won't thrive without recognizing other people's strengths and opinions.",
  },
  {
    icon: Sparkles,
    title: "Process makes quality",
    description:
      "For us it's key to make sure every project, no matter the size - has the same quality as the last. We have crafted a solid design and development process to ensure that no stone is left unturned in our products.",
  },
]

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#040405] to-[#0a0a0c]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40 z-10">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              About Us
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
              We're a team of passionate developers, designers, and innovators building the future of web technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-20 sm:py-32 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Our Mission: Building Trust and Social Value
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
              At FlowCore, we're committed to transforming businesses through innovative digital solutions while
              prioritizing trust, transparency, and social responsibility. Our mission is to create technology that not
              only drives success but also contributes positively to society.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              With years of experience and a forward-thinking approach, we help our clients build social credit and stay
              ahead in the digital age. We believe in creating solutions that enhance both business performance and
              societal well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 sm:py-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 hover:from-secondary/20 hover:to-primary/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-3 mr-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{value.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="relative py-20 sm:py-32 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
              >
                Proudly based in Amsterdam, Netherlands.{" "}
                <span className="text-gray-400">Serving markets around the world.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 mb-8"
              >
                Our global perspective allows us to bring diverse insights and innovative solutions to clients
                worldwide, while our Dutch roots ensure a commitment to quality, integrity, and cutting-edge technology.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open("https://calendly.com/jasperbutter2/30min", "_blank")}
                >
                  Schedule a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Developer Network Section */}
      <section className="relative py-20 sm:py-32 z-10">
        <GlobalDeveloperNetwork />
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 z-10">
        <CTASection />
      </section>
    </div>
  )
}
