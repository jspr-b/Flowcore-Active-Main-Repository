"use client"

import { motion } from "framer-motion"
import {
  Clock,
  DollarSign,
  Zap,
  CheckCircle,
  XCircle,
  ArrowUpRight,
  Settings,
  Database,
  GitBranch,
  RefreshCw,
} from "lucide-react"

const comparisonData = [
  {
    aspect: "Development Time",
    traditional: "Months to Years",
    praevion: "Weeks to Months",
    icon: Clock,
  },
  {
    aspect: "System Integration",
    traditional: "Limited or manual integration",
    praevion: "Seamless workflow integration",
    icon: Zap,
  },
  {
    aspect: "Scalability",
    traditional: "Requires significant effort",
    praevion: "Easily scalable with modular SaaS",
    icon: ArrowUpRight,
  },
  {
    aspect: "Customization",
    traditional: "Time-consuming and complex",
    praevion: "Rapid, configuration-based setup",
    icon: Settings,
  },
  {
    aspect: "Data Processing",
    traditional: "Manual or basic automation",
    praevion: "Automated, structured data handling",
    icon: Database,
  },
  {
    aspect: "Cost Efficiency",
    traditional: "High initial and ongoing costs",
    praevion: "Lower costs through lean development",
    icon: DollarSign,
  },
  {
    aspect: "Workflow Optimization",
    traditional: "Manual process improvements",
    praevion: "Continuous improvement baked in",
    icon: GitBranch,
  },
  {
    aspect: "Adaptability",
    traditional: "Slow to adapt to changes",
    praevion: "Fast adaptation with flexible modules",
    icon: RefreshCw,
  },
]

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-lg shadow-lg max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Traditional vs Praevion SaaS-Powered Development</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          See how our streamlined SaaS solutions transform the development process compared to traditional
          approaches
        </p>
      </motion.div>
      <table className="w-full border-collapse bg-secondary/10">
        <thead>
          <tr className="bg-gradient-to-r from-primary/20 to-secondary/20">
            <th className="p-2 sm:p-4 text-left text-sm sm:text-base md:text-lg font-semibold text-white">Aspect</th>
            <th className="p-2 sm:p-4 text-left text-sm sm:text-base md:text-lg font-semibold text-white">
              Traditional Development
            </th>
            <th className="p-2 sm:p-4 text-left text-sm sm:text-base md:text-lg font-semibold text-white">
              Praevion Approach
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((item, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-700 hover:bg-secondary/20"
            >
              <td className="p-2 sm:p-4 md:p-6 text-sm sm:text-base">
                <div className="flex items-center">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-primary" />
                  <span className="text-gray-300 font-medium text-sm sm:text-base">{item.aspect}</span>
                </div>
              </td>
              <td className="p-2 sm:p-4 md:p-6 text-sm sm:text-base">
                <div className="flex items-center">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-red-500" />
                  <span className="text-gray-400 text-sm sm:text-base">{item.traditional}</span>
                </div>
              </td>
              <td className="p-2 sm:p-4 md:p-6 text-sm sm:text-base">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-green-500" />
                  <span className="text-gray-300 text-sm sm:text-base">{item.praevion}</span>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
