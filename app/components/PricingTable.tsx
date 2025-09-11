"use client"

import { motion } from "framer-motion"
import { Check, X, ChevronRight, Zap, Rocket, Cpu, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

const packages = [
  {
    name: "Starter Plan",
    price: "$597",
    period: "per month",
    description: "2-3 AI workflows automated",
    features: [
      { name: "Custom AI Workflow Setup", included: true },
      { name: "Automated Reporting & Insights", included: true },
      { name: "Priority Support", included: false },
      { name: "Advanced AI Logic", included: false },
      { name: "Dedicated Slack Support", included: false },
      { name: "Unlimited AI Workflows", included: false },
      { name: "Estimated ROI", value: "$3,000-$5,000+ saved monthly" },
    ],
    color: "from-pink-500 to-purple-500",
    popular: false,
    icons: {
      primary: Zap,
    },
  },
  {
    name: "Growth Plan",
    price: "$1,297",
    period: "per month",
    description: "5-7 AI workflows automated + priority support",
    features: [
      { name: "Custom AI Workflow Setup", included: true },
      { name: "Automated Reporting & Insights", included: true },
      { name: "Priority Support", included: true },
      { name: "Advanced AI Logic", included: true },
      { name: "Dedicated Slack Support", included: false },
      { name: "Unlimited AI Workflows", included: false },
      { name: "Estimated ROI", value: "$7,500-$15,000+ saved monthly" },
    ],
    color: "from-purple-500 to-blue-500",
    popular: true,
    icons: {
      primary: Rocket,
    },
  },
  {
    name: "Scale Plan",
    price: "$2,497",
    period: "per month",
    description: "10+ AI workflows automated + advanced AI logic",
    features: [
      { name: "Custom AI Workflow Setup", included: true },
      { name: "Automated Reporting & Insights", included: true },
      { name: "Priority Support", included: true },
      { name: "Advanced AI Logic", included: true },
      { name: "Dedicated Slack Support", included: true },
      { name: "Unlimited AI Workflows", included: false },
      { name: "Estimated ROI", value: "$15,000-$30,000+ saved monthly" },
    ],
    color: "from-blue-500 to-cyan-500",
    popular: false,
    icons: {
      primary: Cpu,
    },
  },
  {
    name: "Enterprise AI",
    price: "Custom Quote",
    period: "Contact Us",
    description: "Unlimited AI workflows—automate everything from sales, customer support, HR, and more",
    features: [
      { name: "Custom AI Workflow Setup", included: true },
      { name: "Automated Reporting & Insights", included: true },
      { name: "Priority Support", included: true },
      { name: "Advanced AI Logic", included: true },
      { name: "Dedicated Slack Support", included: true },
      { name: "Unlimited AI Workflows", included: true },
      { name: "Estimated ROI", value: "$50,000+ ROI monthly" },
    ],
    color: "from-cyan-500 to-teal-500",
    popular: false,
    icons: {
      primary: Building,
    },
  },
]

export default function PricingTable() {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Choose Your AI Automation Plan</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Eliminate repetitive tasks, scale your operations, and boost your ROI with our AI-powered solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-secondary/10 p-8 h-full flex flex-col backdrop-blur-sm border-2 transition-all duration-300 group hover:border-gray-700 hover:bg-secondary/20 ${pkg.popular ? "border-blue-500 scale-105" : "border-gray-800"}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-4 rounded-bl-lg font-semibold text-sm">
                    Most Popular
                  </div>
                )}
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${pkg.color.split(" ")[1]}, ${pkg.color.split(" ")[3]})`,
                  }}
                />
                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${pkg.color} mb-6`}
                  >
                    <pkg.icons.primary className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="mb-4 flex flex-col items-start">
                    <div className="text-3xl sm:text-4xl font-bold text-white flex items-end">{pkg.price}</div>
                    <div className="text-sm sm:text-base text-gray-400">{pkg.period}</div>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">{pkg.description}</p>
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        className="flex items-start"
                      >
                        {feature.value ? (
                          <div className="flex items-center">
                            <span className="text-gray-300">{feature.name}:</span>
                            <span className="ml-2 text-white font-semibold">{feature.value}</span>
                          </div>
                        ) : (
                          <>
                            {feature.included ? (
                              <Check className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                            ) : (
                              <X className="h-5 w-5 mr-3 text-red-500 flex-shrink-0 mt-1" />
                            )}
                            <span className="text-gray-300">{feature.name}</span>
                          </>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="mt-auto relative z-10">
                  <Button
                    onClick={() => window.open("https://calendly.com/jasperbutter2/30min", "_blank")}
                    className="w-full text-white font-semibold py-3 px-6 rounded-full text-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                  >
                    {pkg.price === "Custom Quote" ? "Contact Sales" : "Get Started"}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{
                    background: `radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.06), transparent 40%)`,
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = ((e.clientX - rect.left) / rect.width) * 100
                    const y = ((e.clientY - rect.top) / rect.height) * 100
                    e.currentTarget.style.setProperty("--mouse-x", `${x}%`)
                    e.currentTarget.style.setProperty("--mouse-y", `${y}%`)
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 text-gray-400 max-w-3xl mx-auto"
        >
          <p className="text-sm">
            * All prices are exclusive of VAT. Costs for third-party services such as ChatGPT accounts and other
            necessary software are the responsibility of the customer and are not included in the package prices.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
