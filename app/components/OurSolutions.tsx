"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Settings, Globe, User, Smartphone, Briefcase, BarChart2, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Settings,
    title: "Internal Tools",
    description: "Custom internal tools to automate processes and support team operations.",
    color: "from-pink-500 to-purple-500",
    features: [
      "Form and workflow builders",
      "Role-based access control",
      "Data dashboards and reporting",
      "Integrations with existing systems",
    ],
    benefits: [
      "Cut down on repetitive manual work",
      "Empower teams to work faster",
      "Improve process visibility",
      "Centralize operations in one place",
    ],
    successMetric: "Companies using internal tools reduce manual workload by 40%.",
  },
  {
    icon: Globe,
    title: "Website",
    description: "Quickly design and launch modern, responsive websites.",
    color: "from-purple-500 to-blue-500",
    features: [
      "Drag-and-drop editor",
      "SEO-ready templates",
      "Responsive design by default",
      "Content management system",
    ],
    benefits: [
      "Launch websites faster",
      "Save development costs",
      "Improve online discoverability",
      "Ensure mobile-friendly experiences",
    ],
    successMetric: "Websites built with fast editors launch 3x quicker than traditional builds.",
  },
  {
    icon: User,
    title: "Personal",
    description: "Tools for organizing personal projects, tasks, and ideas.",
    color: "from-blue-500 to-cyan-500",
    features: [
      "To-do lists with reminders",
      "Note-taking with sync",
      "Calendar and event tracking",
      "Private workspace mode",
    ],
    benefits: [
      "Stay on top of personal goals",
      "Reduce missed deadlines",
      "Keep projects organized",
      "Balance work and life tasks",
    ],
    successMetric: "Users save 5+ hours weekly with centralized personal management.",
  },
  {
    icon: Smartphone,
    title: "Consumer App",
    description: "Applications designed for end users with smooth and simple UX.",
    color: "from-cyan-500 to-teal-500",
    features: [
      "User account management",
      "Push notifications",
      "Mobile-first layouts",
      "In-app purchases or payments",
    ],
    benefits: [
      "Reach wide consumer audiences",
      "Improve engagement and retention",
      "Open new revenue channels",
      "Deliver intuitive user experiences",
    ],
    successMetric: "Consumer apps raise daily active users by 35% after launch.",
  },
  {
    icon: Briefcase,
    title: "B2B App",
    description: "Business-focused applications that streamline workflows between companies.",
    color: "from-teal-500 to-green-500",
    features: [
      "Multi-user access and team roles",
      "Data sharing between organizations",
      "Customizable dashboards",
      "Integrations with business platforms",
    ],
    benefits: [
      "Strengthen B2B collaboration",
      "Automate critical workflows",
      "Generate better business insights",
      "Scale operations efficiently",
    ],
    successMetric: "B2B apps reduce operational costs by 25% on average.",
  },
  {
    icon: BarChart2,
    title: "Dashboard",
    description: "Visualize business data and track performance in real time.",
    color: "from-green-500 to-yellow-500",
    features: [
      "Customizable charts and graphs",
      "KPI and metric tracking",
      "Live data connections",
      "Export to PDF or CSV",
    ],
    benefits: [
      "Make informed decisions faster",
      "Spot trends instantly",
      "Improve accountability across teams",
      "Centralize performance insights",
    ],
    successMetric: "Dashboards improve reporting efficiency by 65%.",
  },
]

export default function OurSolutions() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [featuredSolution, setFeaturedSolution] = useState(services[0])
  const featuredSolutionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setFeaturedSolution(services[selectedIndex])
  }, [selectedIndex])

  const scrollToFeaturedSolution = () => {
    if (featuredSolutionRef.current) {
      featuredSolutionRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="pt-12 pb-8 sm:pt-16 sm:pb-12 md:pt-24 md:pb-16 bg-gradient-to-b from-[#040405] to-[#0a0a0c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Link href="/solutions" className="inline-block group">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white transition-all duration-300 group-hover:scale-105">
              Our SaaS Solutions
            </h2>
          </Link>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Explore some ideas of what we can do: Empowering your business with custom SaaS solutions tailored to
            your unique needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onClick={() => {
                setSelectedIndex(index)
                setFeaturedSolution(service)
                scrollToFeaturedSolution()
              }}
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-secondary/10 p-4 sm:p-6 h-full transition-all duration-300 ${selectedIndex === index ? "bg-secondary/20 scale-105" : ""}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-20 transition-opacity duration-300 ${selectedIndex === index ? "opacity-30" : ""}`}
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${service.color.split(" ")[1]}, ${service.color.split(" ")[3]})`,
                  }}
                />
                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${service.color} mb-3 sm:mb-4`}
                  >
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{service.description}</p>
                  <button
                    onClick={scrollToFeaturedSolution}
                    className="inline-flex items-center text-sm sm:text-base text-white hover:text-gray-200 transition-colors duration-200"
                  >
                    Learn more
                    <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={featuredSolutionRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Featured Solution</h3>
              <h4 className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
                {featuredSolution.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-300 mb-6">{featuredSolution.description}</p>

              <motion.div
                className="bg-primary/20 rounded-lg p-4 mb-6 transform hover:scale-105 transition-transform duration-300"
                whileHover={{ boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)" }}
              >
                <h5 className="text-lg sm:text-xl font-semibold text-primary mb-2">Success Metric</h5>
                <p className="text-base sm:text-lg text-white">{featuredSolution.successMetric}</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <h5 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Key Features:</h5>
                  <ul className="space-y-1 sm:space-y-2">
                    {featuredSolution.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center text-sm sm:text-base text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-pink-500 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Benefits:</h5>
                  <ul className="space-y-1 sm:space-y-2">
                    {featuredSolution.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center text-sm sm:text-base text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-green-500 flex-shrink-0" />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => window.open("https://calendly.com/jasperbutter2/30min", "_blank")}
                  className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full text-sm sm:text-base hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <motion.div
                className={`w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br ${featuredSolution.color} flex items-center justify-center`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <featuredSolution.icon className="w-24 h-24 sm:w-32 sm:h-32 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
