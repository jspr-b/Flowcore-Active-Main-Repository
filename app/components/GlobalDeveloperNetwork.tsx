"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CityInfo {
  name: string
  expertise: string
  details: string[]
}

interface RegionInfo {
  region: string
  cities: CityInfo[]
}

const globalPresence: RegionInfo[] = [
  {
    region: "North America",
    cities: [
      {
        name: "New York",
        expertise: "AI-Driven Financial Services and FinTech Solutions",
        details: [
          "Developing AI-powered risk assessment models",
          "Creating automated trading algorithms",
          "Implementing blockchain-based financial systems",
          "Designing AI chatbots for customer service in banking",
        ],
      },
      {
        name: "San Francisco",
        expertise: "AI in Tech Innovation and Startups",
        details: [
          "Building AI-powered recommendation engines",
          "Developing computer vision applications",
          "Creating AI-driven personal assistants",
          "Implementing machine learning in cloud services",
        ],
      },
      {
        name: "Toronto",
        expertise: "AI in Healthcare and Bioinformatics",
        details: [
          "Developing AI for medical imaging analysis",
          "Creating predictive models for patient outcomes",
          "Implementing AI in drug discovery processes",
          "Designing AI-powered health monitoring systems",
        ],
      },
    ],
  },
  {
    region: "Europe",
    cities: [
      {
        name: "London",
        expertise: "AI in Finance and Regulatory Technology",
        details: [
          "Developing AI-powered fraud detection systems",
          "Creating automated compliance checking tools",
          "Implementing AI for market analysis and prediction",
          "Designing AI solutions for insurance risk assessment",
        ],
      },
      {
        name: "Berlin",
        expertise: "AI in Manufacturing and Industry 4.0",
        details: [
          "Building AI-powered predictive maintenance systems",
          "Developing computer vision for quality control",
          "Creating AI solutions for supply chain optimization",
          "Implementing machine learning in robotics",
        ],
      },
      {
        name: "Paris",
        expertise: "AI in Retail and E-commerce",
        details: [
          "Developing AI-powered personalization engines",
          "Creating virtual try-on solutions using AR and AI",
          "Implementing AI for inventory management",
          "Designing AI chatbots for customer support",
        ],
      },
    ],
  },
  {
    region: "Asia",
    cities: [
      {
        name: "Tokyo",
        expertise: "AI in Robotics and Automation",
        details: [
          "Developing AI for humanoid robots",
          "Creating machine learning models for industrial automation",
          "Implementing AI in smart home technologies",
          "Designing AI-powered autonomous vehicles",
        ],
      },
      {
        name: "Singapore",
        expertise: "AI in Smart Cities and Urban Planning",
        details: [
          "Building AI-powered traffic management systems",
          "Developing predictive maintenance for urban infrastructure",
          "Creating AI solutions for energy efficiency",
          "Implementing AI in public safety and security",
        ],
      },
      {
        name: "Bangalore",
        expertise: "AI in Software Development and IT Services",
        details: [
          "Developing AI-powered code generation tools",
          "Creating automated testing and debugging systems",
          "Implementing AI for IT service management",
          "Designing AI solutions for cloud optimization",
        ],
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function GlobalDeveloperNetwork() {
  const [expandedCity, setExpandedCity] = useState<string | null>(null)

  const toggleCity = (cityName: string) => {
    setExpandedCity(expandedCity === cityName ? null : cityName)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0c] to-[#040405] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-4">
            Global AI Solutions Network
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our worldwide network of AI experts, each region contributing unique specializations to drive
            innovation across industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {globalPresence.map((region) => (
            <motion.div key={region.region} variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-cyan-400" />
                {region.region}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {region.cities.map((city) => (
                  <motion.div
                    key={city.name}
                    className="bg-gray-800 rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="p-6 cursor-pointer" onClick={() => toggleCity(city.name)}>
                      <h4 className="text-xl font-semibold text-white mb-2">{city.name}</h4>
                      <p className="text-gray-300 mb-4">{city.expertise}</p>
                      <div className="flex items-center text-cyan-400">
                        {expandedCity === city.name ? (
                          <>
                            <span className="mr-2">Less info</span>
                            <ChevronUp size={20} />
                          </>
                        ) : (
                          <>
                            <span className="mr-2">More info</span>
                            <ChevronDown size={20} />
                          </>
                        )}
                      </div>
                    </div>
                    <AnimatePresence>
                      {expandedCity === city.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <ul className="list-disc list-inside text-gray-300 space-y-2">
                            {city.details.map((detail, index) => (
                              <li key={index}>{detail}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-400 mb-8">
            Join our global network of AI experts and contribute to groundbreaking projects across various domains.
          </p>
          <Button
            variant="default"
            size="lg"
            onClick={() => window.open("https://calendly.com/jasperbutter2/30min", "_blank")}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Join Our Network
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
