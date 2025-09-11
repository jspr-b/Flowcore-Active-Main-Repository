'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink, Code2, Database, Cloud, Layout } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Technology {
  name: string
  percentage: number
  description: string
  features: string[]
  icon: any
  color: string
}

const technologies: Technology[] = [
  {
    name: 'Bubble.io Development',
    percentage: 60,
    description: 'No-code platform for rapid application development with enterprise-grade scalability',
    features: [
      'Custom responsive design systems',
      'Complex database architecture',
      'API integrations and workflows',
      'Custom plugins development',
      'Advanced user authentication'
    ],
    icon: Layout,
    color: 'from-pink-500 to-purple-500'
  },
  {
    name: 'Frontend Development',
    percentage: 20,
    description: 'Modern, responsive web applications built with React and Next.js',
    features: [
      'Next.js 14 with App Router',
      'React Server Components',
      'Tailwind CSS for styling',
      'Framer Motion animations',
      'TypeScript for type safety',
      'Figma for UI/UX design'
    ],
    icon: Code2,
    color: 'from-purple-500 to-blue-500'
  },
  {
    name: 'Backend Development',
    percentage: 15,
    description: 'Scalable and secure server-side solutions',
    features: [
      'Node.js runtime',
      'Express.js framework',
      'RESTful API design',
      'GraphQL integration',
      'Serverless functions'
    ],
    icon: Database,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Cloud Infrastructure',
    percentage: 5,
    description: 'Cloud-native solutions and deployments',
    features: [
      'Bubble.io hosting',
      'AWS services integration',
      'Docker containerization',
      'CI/CD pipelines',
      'Cloud monitoring tools'
    ],
    icon: Cloud,
    color: 'from-cyan-500 to-teal-500'
  }
]

export default function TechnologyBreakdown() {
  const [expandedTech, setExpandedTech] = useState<string | null>(null)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-4">
            Technology Breakdown
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Our tech stack is carefully chosen to deliver powerful, scalable, and maintainable solutions
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 relative">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="relative overflow-hidden bg-black/20 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all duration-300"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div className="flex items-center gap-4 mb-4 sm:mb-0">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${tech.color}`}>
                        <tech.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">{tech.name}</h3>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setExpandedTech(expandedTech === tech.name ? null : tech.name)}
                      aria-expanded={expandedTech === tech.name}
                      className="text-gray-400 hover:text-white transition-colors self-end sm:self-auto"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          expandedTech === tech.name ? 'rotate-180' : ''
                        }`}
                      />
                    </Button>
                  </div>

                  <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden mb-4">
                    <motion.div
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${tech.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-end pr-2">
                      <span className="text-sm font-medium text-white">{tech.percentage}%</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm sm:text-base">{tech.description}</p>

                  <AnimatePresence>
                    {expandedTech === tech.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-2">
                          {tech.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              className="flex items-center gap-2 text-gray-300"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tech.color}`} />
                              <span className="text-sm sm:text-base">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    background: hoveredTech === tech.name
                      ? `radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.06), transparent 40%)`
                      : `none`
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = ((e.clientX - rect.left) / rect.width) * 100
                    const y = ((e.clientY - rect.top) / rect.height) * 100
                    e.currentTarget.style.setProperty('--mouse-x', `${x}%`)
                    e.currentTarget.style.setProperty('--mouse-y', `${y}%`)
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
