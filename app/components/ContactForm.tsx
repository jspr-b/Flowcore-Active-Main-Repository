'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Store form data if needed
    console.log('Form submitted:', formState)
    // Redirect to Calendly
    window.open('https://calendly.com/jasperbutter2/30min', '_blank')
    // Reset form
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-secondary/10 backdrop-blur-sm rounded-lg p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full bg-secondary/20 text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full bg-secondary/20 text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            className="w-full bg-secondary/20 text-white"
            rows={4}
          />
        </div>
        <Button
          type="submit"
          className="w-full font-semibold py-2 px-4 flex items-center justify-center"
        >
          Send Message
          <Send className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </motion.div>
  )
}
