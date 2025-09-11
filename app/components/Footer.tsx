"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { scrollToTop } from "../lib/utils"

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/flowcore", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/flowcore", icon: Linkedin },
]

const sitemapLinks = [
  { name: "Home", href: "/Home" },
  { name: "Services", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
]

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear())

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const isExternalLink = href.startsWith("http") || href.startsWith("https")

    if (isExternalLink) {
      window.open(href, "_blank")
    } else {
      scrollToTop()
      window.history.pushState(null, "", href)
    }
  }

  const handleLogoClick = () => {
    scrollToTop()
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-3xl mx-auto px-4 py-4">
        <div className="flex flex-col items-center mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mb-2 cursor-pointer"
            onClick={handleLogoClick}
            aria-label="Scroll to top of page"
          >
            <motion.svg
              className="w-10 h-10 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              <motion.path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              />
            </motion.svg>
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-1">FlowCore</h2>
          <div className="flex space-x-4 mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-primary transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{link.name}</span>
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <nav className="mb-4">
          <ul className="flex flex-wrap justify-center gap-4">
            {sitemapLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={handleNavigation}
                  className="text-sm hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-center text-xs">
          <p>
            &copy; {currentYear} FlowCore. All rights reserved.
            <span className="mx-2">|</span>
            <Link href="/privacy-policy" className="hover:text-primary cursor-pointer transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms-of-service" className="hover:text-primary cursor-pointer transition-colors duration-200">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
