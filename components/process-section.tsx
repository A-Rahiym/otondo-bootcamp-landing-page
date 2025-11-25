"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "1",
    title: "Fill the application form",
    description: "with your name, email, phone, and preferred track",
  },
  {
    number: "2",
    title: "Fill the application form",
    description: "with your name, email, phone, and preferred track",
  },
  {
    number: "3",
    title: "Confirm your communication",
    description: "details for our team to reach out to you",
  },
  {
    number: "4",
    title: "Submit & receive confirmation",
    description: "Email with next steps",
  },
  {
    number: "5",
    title: "Screening & selection based on",
    description: "motivations and technical aptitude",
  },
  {
    number: "6",
    title: "Onboarding receive orientation",
    description: "date + class access",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="otondo-section-title">How to Join the Program</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4"
                style={{ backgroundColor: "#1a237e" }}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#1a237e" }}>
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-8 w-8 h-0.5 bg-blue-300"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
