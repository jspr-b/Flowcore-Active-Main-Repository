"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

const faqs = [
  {
    question: "How does AI automation differ from traditional automation?",
    answer:
      "AI automation goes beyond traditional rule-based automation by using machine learning and natural language processing. This allows for more complex decision-making, pattern recognition, and the ability to handle unstructured data. Unlike traditional automation, AI can adapt and improve over time, making it ideal for tasks that require contextual understanding or that deal with varying inputs.",
  },
  {
    question: "What ROI can we expect from implementing your AI solutions?",
    answer:
      "ROI varies depending on the specific workflows automated and the scale of implementation. However, our clients typically see a 30-50% reduction in operational costs for automated processes, 40-60% improvement in efficiency, and 20-30% increase in accuracy. For example, a mid-sized company automating customer support with our AI saw a 45% reduction in response times and a 35% increase in customer satisfaction scores within the first six months.",
  },
  {
    question: "How do you handle potential AI errors or biases?",
    answer:
      "We take a proactive approach to mitigate AI errors and biases. This includes diverse training data, regular bias audits, and human oversight. We implement feedback loops to continuously improve our AI models. For critical processes, we often employ a 'human-in-the-loop' approach, where AI suggestions are reviewed by human experts before final decisions are made. We also provide transparent reporting on AI performance and any identified biases.",
  },
  {
    question: "Can your AI solutions handle multi-language support?",
    answer:
      "Yes, our AI solutions are designed with multi-language support in mind. We use advanced natural language processing models that can be trained on multiple languages. This allows for seamless communication and data processing across different languages. For instance, our customer support AI can handle queries in over 50 languages, while our document processing AI can extract information from documents in 30+ languages.",
  },
  {
    question: "How long does it take to implement an AI workflow?",
    answer:
      "The implementation time varies depending on the complexity of the workflow and the level of customization required. Typically, our Starter Plan workflows can be set up within 1-2 weeks, while more complex Enterprise-level solutions might take 4-8 weeks. We work closely with your team to ensure a smooth and efficient implementation process.",
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
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions About Our AI Automation</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get answers to common questions about our AI-powered workflow automation solutions and how they can
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
