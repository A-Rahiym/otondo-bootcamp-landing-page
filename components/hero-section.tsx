"use client"

import { motion } from "framer-motion"
import { montserrat, montserratAlternates } from "@/app/layout" // adjust path

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.9, 0.2, 1] },
    },
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <motion.div
        className="max-w-4xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className={`${montserratAlternates.variable} text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight`}
          style={{ color: "#1a237e" }}
        >
          A Fresh Start.
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ color: "#1a237e" }}
        >
          A Second Chance.
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight"
          style={{ color: "#4db8ff" }}
        >
          A Bigger Opportunity.
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-12 text-gray-700 max-w-3xl mx-auto">
          It all works together. We're multi-track coding bootcamp designed to give you structure, support,
          accountability, and confidence—your tech journey with the Otondo bootcamp.
        </motion.p>

        <motion.button variants={itemVariants} className="otondo-primary-btn text-lg px-8 py-3">
          Register Now
        </motion.button>
      </motion.div>
    </section>
  )
}
