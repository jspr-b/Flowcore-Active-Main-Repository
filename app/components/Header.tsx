"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"

const navItems = [
  { name: "Home", href: "/Home" },
  { name: "Our Solutions", href: "/solutions" },
  { name: "About Us", href: "/about" },
  { name: "Pricing", href: "/pricing" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    router.push(href)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const header = document.querySelector("header")
        if (header) {
          if (window.scrollY > 0) {
            header.classList.add("hidden")
          } else {
            header.classList.remove("hidden")
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="md:sticky relative top-0 z-50 w-full transition-all duration-300 bg-[var(--secondaryBg)] text-[var(--foreground)]">
      <div className="max-w-container mx-auto px-4">
        <div className="flex items-center justify-between py-4 md:py-0 md:h-16 text-white">
          {/* Logo Section */}
          <Link
            href="/Home"
            className="flex items-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 py-2"
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-bold whitespace-nowrap">FlowCore</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-white hover:text-gray-200 transition-colors"
                onClick={(e) => handleNavigation(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-64" : "max-h-0"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200 hover:bg-gray-800 transition-colors"
              onClick={(e) => handleNavigation(e, item.href)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
