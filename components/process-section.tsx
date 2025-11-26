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
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0EA5E9]">
            {/* TOP WHITE CURVE */}
      <svg
        className="absolute top-0 left-0 w-full rotate-180"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "80px", width: "100%" }}
      >
        <path
          fill="#0EA5E9"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      {/* BOTTOM WHITE CURVE */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "80px", width: "100%" }}
      >
        <path
          fill="#0EA5E9"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
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
