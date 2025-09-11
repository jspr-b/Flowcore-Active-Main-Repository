"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Globe, Users, BarChart2, FileText, Calendar, Activity, Code, Database, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Users,
    title: "Lead Background Research Agent",
    description:
      "Automate lead research by gathering comprehensive background information from multiple online sources.",
    color: "from-pink-500 to-purple-500",
    features: [
      "Automated data extraction from websites and social media",
      "AI-powered analysis of company and individual profiles",
      "Contact information enrichment",
      "Industry insights and competitor comparisons",
    ],
    benefits: [
      "Save hours of manual research",
      "Improve lead qualification and targeting",
      "Boost sales efficiency",
      "Get real-time updates on potential clients",
    ],
    successMetric:
      "Companies using AI-powered lead research have seen 30% higher conversion rates by targeting well-qualified prospects.",
  },
  {
    icon: Globe,
    title: "YouTube to SEO Blog Converter",
    description: "Repurpose YouTube content into SEO-optimized blog posts to expand your digital presence.",
    color: "from-purple-500 to-blue-500",
    features: [
      "AI-based transcription and summarization",
      "Keyword optimization for search engines",
      "Blog formatting and structure generation",
      "Multi-language support",
    ],
    benefits: [
      "Maximize content reach with minimal effort",
      "Improve SEO rankings and website traffic",
      "Save content creation costs",
      "Maintain brand consistency across platforms",
    ],
    successMetric:
      "Companies using content repurposing see a 47% increase in organic traffic and improved search rankings.",
  },
  {
    icon: BarChart2,
    title: "Automated Invoice and Expense Classification Agent",
    description: "Eliminate manual data entry with AI-driven invoice processing and expense categorization.",
    color: "from-blue-500 to-cyan-500",
    features: [
      "AI-powered text recognition and data extraction",
      "Automatic expense classification",
      "Integration with accounting software",
      "Fraud detection and anomaly alerts",
    ],
    benefits: [
      "Reduce human error in financial operations",
      "Streamline bookkeeping and reporting",
      "Save time on manual data entry",
      "Improve compliance and audit readiness",
    ],
    successMetric: "Businesses automating invoice management reduce financial errors by 95% and cut admin time by 80%.",
  },
  {
    icon: Calendar,
    title: "Proactive Meeting Prep Assistant",
    description:
      "AI-powered meeting prep tool that automatically summarizes documents and key points before your meetings.",
    color: "from-cyan-500 to-teal-500",
    features: [
      "Automatic agenda creation based on past discussions",
      "AI-generated meeting summaries",
      "Key takeaways and action items extraction",
      "Integration with calendar and email systems",
    ],
    benefits: [
      "Ensure every meeting is productive",
      "Eliminate manual note-taking and follow-ups",
      "Keep teams aligned with summarized insights",
      "Reduce meeting prep time significantly",
    ],
    successMetric: "Organizations using AI-powered meeting prep save up to 30% of meeting time, boosting productivity.",
  },
  {
    icon: Code,
    title: "GitHub PR Description Inserter",
    description: "Automate pull request documentation by generating structured PR descriptions.",
    color: "from-teal-500 to-green-500",
    features: [
      "Automatic change log summarization",
      "AI-generated descriptions for PRs",
      "Custom formatting and tagging",
      "Integration with GitHub workflows",
    ],
    benefits: [
      "Improve code review efficiency",
      "Maintain consistent documentation",
      "Reduce developer workload",
      "Speed up deployment cycles",
    ],
    successMetric: "Teams using AI-driven PR documentation reduce review times by 40% and improve collaboration.",
  },
  {
    icon: FileText,
    title: "Multi-Article Summarizer",
    description: "AI-powered summarization tool that extracts key insights from multiple articles in seconds.",
    color: "from-green-500 to-yellow-500",
    features: [
      "AI-driven text analysis and summarization",
      "Key takeaway extraction",
      "Multi-source aggregation",
      "Export to reports and presentations",
    ],
    benefits: [
      "Get insights faster without manual reading",
      "Improve decision-making with concise reports",
      "Stay updated on industry trends effortlessly",
      "Reduce information overload",
    ],
    successMetric: "Companies using automated summarization save 5+ hours per week on research and reporting.",
  },
  {
    icon: Users,
    title: "Hiring Candidate Ranking System",
    description: "AI-driven recruitment tool that ranks candidates based on skills, experience, and job fit.",
    color: "from-yellow-500 to-orange-500",
    features: [
      "Resume parsing and keyword analysis",
      "AI-driven ranking system based on job fit",
      "Customizable candidate scoring criteria",
      "Integration with ATS and HR systems",
    ],
    benefits: [
      "Identify top candidates instantly",
      "Reduce bias in hiring decisions",
      "Speed up recruitment processes",
      "Improve hiring accuracy and efficiency",
    ],
    successMetric: "Companies using AI for hiring reduce time-to-hire by 50% and improve employee retention.",
  },
  {
    icon: Activity,
    title: "Daily Stock Report Generator",
    description: "Generate AI-powered stock reports with real-time financial trends and insights.",
    color: "from-orange-500 to-red-500",
    features: [
      "AI-driven trend analysis and market insights",
      "One-page PDF stock reports",
      "Customizable ticker selection",
      "Automated daily report scheduling",
    ],
    benefits: [
      "Stay ahead with real-time market insights",
      "Save hours on financial research",
      "Improve investment decision-making",
      "Automate stock tracking effortlessly",
    ],
    successMetric: "Investors using AI-driven stock analysis reduce research time by 80% while improving accuracy.",
  },
  {
    icon: Database,
    title: "Web Scraping and Data Extraction Agent",
    description: "AI-driven web scraper that extracts structured data from any website for business intelligence.",
    color: "from-red-500 to-pink-500",
    features: [
      "AI-powered data extraction from web pages",
      "Customizable scraping rules",
      "Export data to Excel, databases, or APIs",
      "Continuous monitoring and alerts",
    ],
    benefits: [
      "Automate data collection for market research",
      "Gain real-time insights on competitors",
      "Save time on manual web research",
      "Improve business intelligence strategies",
    ],
    successMetric:
      "Companies using AI for data extraction reduce manual research time by 90% and gain competitive insights faster.",
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
              Our AI Solutions
            </h2>
          </Link>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Explore some ideas of what we can do: Empowering your business with cutting-edge AI solutions tailored to
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
