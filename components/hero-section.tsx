"use client";
import { motion } from "framer-motion";
import { montserrat, montserratAlternates } from "@/app/layout";

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
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.9, 0.2, 1] },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 w-full h-full"
      id="hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat z-0" />

      {/* Overlay with 20% opacity */}
      <div className="absolute inset-0 bg-[#F4F4F4] opacity-95 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-4xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className={`${montserratAlternates.variable} text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight`}
          style={{ color: "#1a237e", fontFamily: "var(--font-heading)" }}
        >
          A Fresh Start.
        </motion.h1>

        <motion.h1
          variants={itemVariants}
          className={`${montserratAlternates.variable} text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight`}
          style={{ color: "#1a237e", fontFamily: "var(--font-heading)" }}
        >
          A Second Chance.
        </motion.h1>

        <motion.h1
          variants={itemVariants}
          className={`${montserratAlternates.variable} text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight`}
          style={{ color: "#4db8ff", fontFamily: "var(--font-heading)" }}
        >
          A Bigger Opportunity.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={`${montserrat.variable} text-xl md:text-2xl mb-12 text-gray-700 max-w-3xl mx-auto`}
          style={{ fontFamily: "var(--font-sans)" }}
        >
          It all works together. We're a multi-track coding bootcamp designed to
          give you structure, support, accountability, and confidence. Your tech
          journey with the Otondo bootcamp.
        </motion.p>

        <a
          href="https://forms.gle/uqiG59Myzw9aa6GGA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            variants={itemVariants}
            className="otondo-primary-btn text-lg px-8 py-3 rounded-none"
          >
            Apply Now
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
}
