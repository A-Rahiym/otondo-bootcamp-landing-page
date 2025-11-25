"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is the Otondo Bootcamp all about?",
    answer:
      "The Otondo Bootcamp is an intensive, multi-track coding bootcamp designed to give you practical skills, support, and confidence in your tech career journey. We offer flexible learning with expert mentorship.",
  },
  {
    question: "Is the bootcamp suitable for complete beginners?",
    answer:
      "Yes! Our bootcamp is designed for people at all levels, from complete beginners to those with some experience looking to upskill or transition into tech.",
  },
  {
    question: "How long is the bootcamp program?",
    answer:
      "Program length varies by track. Full-Stack Development is 16 weeks, UI/UX Design is 12 weeks, Mobile Development is 14 weeks, and Data & Analytics is 14 weeks.",
  },
  {
    question: "Do I need any prior experience?",
    answer:
      "No prior coding experience is required, but a strong motivation to learn and commitment to the program are essential. We provide all foundational knowledge needed.",
  },
]

export default function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="otondo-section-title">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-left" style={{ color: "#1a237e" }}>
                  {faq.question}
                </h3>
                <ChevronDown
                  className="w-5 h-5 flex-shrink-0 transition-transform"
                  style={{
                    color: "#1a237e",
                    transform: expandedIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-gray-200 bg-gray-50"
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
