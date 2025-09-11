'use client'

import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import CTASection from '../components/CTASection'

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 z-10">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(255,0,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(0,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(255,0,255,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Have a question or ready to start your project? We're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10">
        <CTASection />
      </section>
    </div>
  )
}
