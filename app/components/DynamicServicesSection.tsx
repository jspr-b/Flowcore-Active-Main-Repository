"use client"

import { useState, useRef } from "react"
import { motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Code, Palette, Rocket, Zap, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "AI Agent Development",
    description: "Build powerful internal AI agents for your company.",
    details: [
      "Custom AI agent creation",
      "Integration with existing systems",
      "Natural language processing",
      "Task automation",
      "Scalable AI solutions",
    ],
  },
  {
    icon: Palette,
    title: "AI Agent Design",
    description: "Design intuitive and efficient AI agents that enhance your company's productivity.",
    details: [
      "User-centered AI design",
      "Conversational UI/UX",
      "AI agent behavior modeling",
      "Interaction flow optimization",
      "Continuous improvement strategies",
    ],
  },
  {
    icon: Rocket,
    title: "AI Process Automation",
    description: "Streamline your business operations with AI-powered process automation.",
    details: [
      "Workflow analysis and optimization",
      "AI-driven decision making",
      "Intelligent data processing",
      "Automated reporting and insights",
      "Cross-department AI integration",
    ],
  },
  {
    icon: Zap,
    title: "AI Integration",
    description: "Seamlessly integrate AI agents into your existing infrastructure.",
    details: [
      "AI platform setup",
      "Custom API development",
      "Data security and compliance",
      "Performance monitoring",
      "Continuous AI agent training",
    ],
  },
]

const ServiceIcon = ({ icon: Icon, title, isActive }) => (
  <div
    className={`rounded-full p-3 transition-all duration-300 flex items-center ${
      isActive ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg" : "bg-white/10 text-white"
    }`}
  >
    <Icon size={24} className="mr-3" />
    <span className="text-base font-semibold">{title}</span>
  </div>
)

export default function DynamicServicesSection() {
  const [activeService, setActiveService] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect()
    mouseX.set((clientX - left) / width)
    mouseY.set((clientY - top) / height)
  }

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#040405] to-[#0a0a0c]"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(var(--primary-rgb), 0.3), rgba(var(--secondary-rgb), 0.3)), linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.1), rgba(var(--secondary-rgb), 0.1))`,
          ),
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
            Internal AI Agents for Your Business
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Empower your company with cutting-edge AI agents built on advanced platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="relative bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-6 hover:from-secondary/20 hover:to-primary/20 transition-all duration-300 cursor-pointer overflow-hidden group h-full flex flex-col"
                onMouseEnter={() => setActiveService(service)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ServiceIcon icon={service.icon} title={service.title} isActive={activeService === service} />
                <p className="text-base text-gray-200 mt-6 mb-4 flex-grow">{service.description}</p>
                <ul className="text-sm text-gray-300 space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-6 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open("/solutions", "_self")}
          >
            Explore Our Solutions
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
