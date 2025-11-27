"use client"

import { motion } from "framer-motion"
import { steps } from "@/data/data"



export default function ProcessSection() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0EA5E9]">
            {/* TOP WHITE CURVE */}
      <div className="max-w-7xl mx-auto">
        <h2 className="otondo-section-title text-[#F4F4F4]">How to Join the Program</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4"
                style={{ backgroundColor: "#1a237e" }}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#F4F4F4] ">
                {step.title}
              </h3>
              <p className="text-[#F4F4F4] text-sm">{step.description}</p>
              {/* {index < steps.length - 2 && (
                <div className="hidden lg:block absolute -right-4 top-8 w-8 h-0.5 bg-blue-300"></div>
              )} */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
