"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const controls = useAnimation()
  const { scrollYProgress } = useScroll()
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const updateTextGlow = () => {
      if (textRef.current && heroRef.current) {
        const rect = textRef.current.getBoundingClientRect()
        const heroRect = heroRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2 - heroRect.left
        const centerY = rect.top + rect.height / 2 - heroRect.top
        const distance = Math.sqrt(Math.pow(mousePosition.x - centerX, 2) + Math.pow(mousePosition.y - centerY, 2))
        const maxDistance = Math.max(rect.width, rect.height) / 2
        const intensity = 1 - Math.min(distance / maxDistance, 1)

        controls.start({
          filter: `brightness(${1 + intensity * 1.5})`,
          textShadow: `0 0 ${intensity * 30}px rgba(255,255,255,${intensity * 0.5})`,
          transition: { duration: 0.1 },
        })
      }
    }

    updateTextGlow()
  }, [mousePosition, controls])

  return (
    <motion.div
      ref={heroRef}
      className="relative min-h-screen w-full px-4 sm:px-6 lg:px-8 z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center text-center w-full py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[100vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto overflow-visible"
          >
            <div className="overflow-hidden">
              <motion.h1
                ref={textRef}
                animate={controls}
                className="mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-none relative z-10"
              >
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 leading-[1.1]">
                  FlowCore
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 leading-[1.1]">
                  Empowers
                </span>
              </motion.h1>
            </div>

            <motion.p
              className="mx-auto mb-12 max-w-2xl text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming business operations with effortless workflow automation. From concept to execution, we
              simplify complex processes so you can focus on growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
                onClick={() => window.open("https://calendly.com/jasperbutter2/30min", "_blank")}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-lg px-8 py-6 border-2 border-purple-500 text-white hover:bg-purple-500/20 transition-all duration-300 rounded-full"
                onClick={() => (window.location.href = "/solutions")}
              >
                Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            style={{ opacity: scrollIndicatorOpacity }}
            initial={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white text-sm mb-2 whitespace-nowrap">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-6 h-6 flex items-center justify-center bg-white bg-opacity-20 rounded-full"
            >
              <ChevronDown className="w-4 h-4 text-white" aria-hidden="true" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
