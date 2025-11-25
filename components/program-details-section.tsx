"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const details = [
  "Weekly modules & materials",
  "Collaborative 5 weekly assessments",
  "Expert mentorship throughout",
  "Real-world project experience",
  "Capstone project",
  "Career guidance & placement support",
]

export default function ProgramDetailsSection() {
  return (
    <section id="program" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="otondo-section-title">BOOTCAMP STRUCTURE</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center order-2 md:order-1"
          >
            <img
              src="/group-of-people-collaborating-learning-together.jpg"
              alt="Group collaboration"
              className="w-80 h-80 rounded-3xl shadow-xl object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="bg-blue-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 bg-yellow-300 text-gray-900 inline-block px-4 py-2 rounded-lg">
                What You Get!
              </h3>
              <ul className="space-y-4">
                {details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3 items-start"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0 mt-1" />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
