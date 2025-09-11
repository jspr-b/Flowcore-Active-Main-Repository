'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <>
      <motion.div
        className="fixed inset-0 opacity-30 pointer-events-none z-0"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=600&width=600")',
          backgroundSize: '600px 600px',
          y
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#040405] via-transparent to-[#0a0a0c] pointer-events-none z-0" />
    </>
  )
}
