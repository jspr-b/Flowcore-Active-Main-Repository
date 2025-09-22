"use client"

import { motion } from "framer-motion"
import { Check, ChevronRight, Rocket, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const packages = [
  {
    name: "Custom SaaS Solutions",
    price: "Tailored Pricing",
    period: "Built for Your Success",
    description: "Transform your business with a custom SaaS solution designed exclusively for your unique workflows and goals",
    features: [
      { name: "Custom SaaS Development", included: true, highlight: "From idea to launch" },
      { name: "Full System Integration", included: true, highlight: "Seamless connections" },
      { name: "Scalable Architecture", included: true, highlight: "Grow without limits" },
      { name: "24/7 Support & Maintenance", included: true, highlight: "Always there for you" },
      { name: "User Training & Documentation", included: true, highlight: "Easy onboarding" },
      { name: "Regular Updates & Enhancements", included: true, highlight: "Continuous improvement" },
    ],
    benefits: [
      "Streamline your daily workflows",
      "Optimize operational efficiency",
      "Fast development timeline",
      "Completely tailored to your business"
    ],
    color: "from-purple-500 via-pink-500 to-blue-500",
    popular: true,
    icons: {
      primary: Rocket,
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Flexible Pricing for Your Needs</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every business is unique. We create custom pricing based on your specific requirements and goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
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
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary/20 to-secondary/10 p-10 h-full flex flex-col backdrop-blur-sm border transition-all duration-500 group hover:shadow-2xl hover:scale-105 ${pkg.popular ? "border-purple-500/50 shadow-xl" : "border-gray-800"}`}
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 opacity-30">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  />
                </div>
                
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Trusted Solution
                  </div>
                )}
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${pkg.color.split(" ")[1]}, ${pkg.color.split(" ")[3]})`,
                  }}
                />
                <div className="relative z-10 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${pkg.color} mb-8 mx-auto`}
                  >
                    <pkg.icons.primary className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{pkg.name}</h3>
                  <div className="mb-6 text-center">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">{pkg.price}</div>
                    <div className="text-sm sm:text-base text-gray-300 font-medium">{pkg.period}</div>
                  </div>
                  <p className="text-gray-200 mb-8 text-lg leading-relaxed text-center">{pkg.description}</p>
                  <div className="space-y-4 mb-8 max-w-md mx-auto">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      >
                        {feature.included && (
                          <div className="text-center">
                            <div className="flex items-center justify-center mb-2">
                              <Check className="h-5 w-5 mr-2 text-green-400 flex-shrink-0" />
                              <span className="text-gray-200 font-medium">{feature.name}</span>
                            </div>
                            {feature.highlight && (
                              <span className="block text-sm text-gray-400">{feature.highlight}</span>
                            )}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Benefits section */}
                  {pkg.benefits && (
                    <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400" />
                        Why Choose Us
                      </h4>
                      <ul className="space-y-2">
                        {pkg.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center text-gray-300">
                            <Check className="h-4 w-4 text-purple-400 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="mt-8 relative z-10 flex justify-center">
                  <Button
                    onClick={() => window.open("https://calendly.com/jasperbutter2/30min", "_blank")}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center group"
                  >
                    Get Your Custom Proposal
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </motion.span>
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
            Contact us to discuss your project requirements and receive a customized proposal tailored to your business needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
