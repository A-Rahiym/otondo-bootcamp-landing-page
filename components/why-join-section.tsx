"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function WhyJoinSection() {
  return (
    <section className="relative overflow-hidden bg-[#0EA5E9] py-16 md:py-24" id="about">
      {/* BOTTOM WHITE CURVE */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "80px", width: "100%" }}
      >
        <path
          fill="#F4F4F4"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* MOBILE: Image first → DESKTOP: Image second */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center order-1 lg:order-2"
          >
            <Image
              src="/image_1.png"
              alt="Otondo Bootcamp student"
              width={650}
              height={650}
              className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl object-contain"
              priority
            />
          </motion.div>

          {/* Text Content - comes after image on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold  leading-tight mb-8 text-[#F4F4F4]">
              WHY JOIN THE OTONDO BOOTCAMP
            </h2>

            <div className="bg-yellow-400 p-2 sm:p-6  mb-5 mx-auto lg:mx-0 max-w-2xl">
              <p className="text-lg sm:text-xl font-medium text-gray-900 leading-relaxed">
                Learn clearly, practice with guidance, and grow in a supportive, pressure-free environment.
              </p>
            </div>

            <ul className="space-y-4 text-white text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              {[
                "Expert instructor-led training",
                "Weekly structured curriculum",
                "Practical, hands-on projects",
                "Weekly accountability & feedback",
                "Mentorship + peer learning community",
                "DSHub Certificate of completion",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2.5 h-2.5 bg-white rounded-full shrink-0" />
                  <span className="text-left">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}