'use client'

import { motion } from 'framer-motion'
import { Zap, Target, Users, Sparkles } from 'lucide-react'

const expertise = [
  'React.js', 'Next.js', 'TypeScript', 'Node.js',
  'GraphQL', 'REST APIs', 'AWS', 'Docker',
  'CI/CD', 'Agile Methodologies', 'UI/UX Design', 'Performance Optimization'
]

const values = [
  {
    icon: Zap,
    title: 'Move with speed',
    description: 'As a no-code team, we understand we're selling speed and time. So we make it our priority to take steps internally and externally to push things the extra step faster.'
  },
  {
    icon: Target,
    title: 'User-experience focused',
    description: 'We believe UI/UX is a make or break when it comes to products in this era. Building a product the users wants to come back to is more important than ever.'
  },
  {
    icon: Users,
    title: 'Collaboration always',
    description: 'The best products are born out of many different perspectives. We know that as a team, we won't thrive without recognizing other people's strengths and opinions.'
  },
  {
    icon: Sparkles,
    title: 'Process makes quality',
    description: 'For us it's key to make sure every project, no matter the size - has the same quality as the last. We have crafted a solid design and development process to ensure that no stone is left unturned in our products.'
  }
]

export default function AboutUs() {
  return (
    <div className="py-24 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold mb-8 text-white">About FlowCore</h2>
            <p className="text-xl text-gray-300 mb-16 leading-relaxed">
              At FlowCore, we're passionate about creating innovative digital solutions that drive your success. Our team of experts combines creativity with technical prowess to deliver exceptional results.
            </p>
          </motion.div>
        </motion.div>

        {/* World Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mb-32 relative"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] bg-[url('/placeholder.svg?height=400&width=600')] bg-contain bg-center bg-no-repeat">
              <div className="absolute left-[45%] top-[35%] w-3 h-3">
                <div className="absolute w-full h-full bg-pink-500 rounded-full animate-ping" />
                <div className="absolute w-full h-full bg-pink-500 rounded-full" />
              </div>
              <div className="absolute left-[45%] top-[35%] bg-gray-800/90 backdrop-blur-sm rounded-lg p-2 transform translate-x-4 translate-y-4">
                <p className="text-sm text-white">Toronto,</p>
                <p className="text-sm text-gray-400">CANADA</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Proudly based in Toronto, Canada.{' '}
                <span className="text-gray-500">
                  Serving markets around the world.
                </span>
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">Our values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#252525] rounded-2xl p-8 hover:bg-[#2A2A2A] transition-colors duration-300"
              >
                <value.icon className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Expertise Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <h3 className="text-4xl font-bold mb-12 text-center text-white">Technical Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {expertise.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-full bg-[#252525] hover:bg-[#2A2A2A] transition-colors duration-300"
              >
                <div className="px-6 py-2">
                  <span className="text-gray-200 text-lg font-medium">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
