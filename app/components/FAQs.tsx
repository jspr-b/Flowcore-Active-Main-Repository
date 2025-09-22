"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

const faqs = [
  {
    question: "How does custom SaaS differ from off-the-shelf software?",
    answer:
      "Custom SaaS solutions are built specifically for your unique business processes and workflows, unlike generic software that requires you to adapt your operations to fit the tool. This means better efficiency, easier adoption by your team, and the ability to scale features as your business grows. You get exactly what you need without paying for unnecessary features or dealing with workarounds.",
  },
  {
    question: "What is the typical development timeline for a custom SaaS solution?",
    answer:
      "Development timelines vary based on project complexity and scope. Simple tools with basic functionality can be delivered in 2-4 weeks, while more comprehensive solutions typically take 6-12 weeks. We follow an agile approach, delivering working features incrementally so you can start seeing value early in the process rather than waiting for a complete solution.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "Security is built into every layer of our development process. We implement industry-standard encryption, secure authentication protocols, and regular security audits. Your data remains under your control with clear access permissions and audit trails. We also ensure compliance with relevant data protection regulations and can accommodate specific security requirements your business may have.",
  },
  {
    question: "Can the SaaS solution integrate with our existing tools?",
    answer:
      "Yes, integration capabilities are a core feature of our custom SaaS solutions. We can connect with popular business tools through APIs, webhooks, and custom connectors. Whether you use CRM systems, accounting software, or other specialized tools, we design your SaaS solution to work seamlessly within your existing tech ecosystem, eliminating data silos and manual transfers.",
  },
  {
    question: "What kind of ongoing support and maintenance do you provide?",
    answer:
      "We provide comprehensive support including regular updates, performance monitoring, and issue resolution. Our maintenance packages include feature enhancements based on your feedback, security patches, and system optimization. We also offer training for your team and documentation to ensure smooth operations. Support levels can be customized based on your needs, from basic maintenance to 24/7 priority support.",
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0c] to-[#040406]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get answers to common questions about our custom SaaS development process and how we can help
            transform your business operations.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="rounded-lg bg-[#1c1c1c] overflow-hidden">
                <div className="flex justify-between items-center p-6">
                  <button
                    className="flex-1 text-left text-lg font-semibold text-white hover:text-gray-200 transition-colors"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    {faq.question}
                  </button>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="ml-4 p-1 hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <X
                      className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
                        openIndex === index ? "rotate-0" : "rotate-45"
                      }`}
                    />
                  </button>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  {openIndex === index && (
                    <div className="p-6 pt-0">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
