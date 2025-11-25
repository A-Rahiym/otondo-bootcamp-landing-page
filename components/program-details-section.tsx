"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { 
  BookOpen, 
  Target, 
  MessageCircle, 
  Briefcase, 
  Trophy, 
  Rocket 
} from "lucide-react"

const programBenefits = [
  { text: "Weekly modules & materials", icon: <BookOpen className="w-7 h-7" /> },
  { text: "Collaborative 5 weekly assessments", icon: <Target className="w-7 h-7" /> },
  { text: "Expert mentorship throughout", icon: <MessageCircle className="w-7 h-7" /> },
  { text: "Real-world project experience", icon: <Briefcase className="w-7 h-7" /> },
  { text: "Capstone project", icon: <Trophy className="w-7 h-7" /> },
  { text: "Career guidance & placement support", icon: <Rocket className="w-7 h-7" /> },
]

export default function ProgramDetailsSection() {
  return (
    <section id="program" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a237e] leading-tight">
            BOOTCAMP STRUCTURE
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* Image - Mobile: Top | Desktop: Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center align-middle order-1 lg:order-1"
          >
            <Image
              src="/image_2.png"
              alt="Bootcamp collaboration"
              width={520}
              height={520}
              priority
            />
          </motion.div>
          {/* Benefits Cards - No shadows, clean & bold */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 order-2 lg:order-2">
            {programBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 border-4 border-[#0EA5E9]/10 hover:border-[#0EA5E9]/30 transition-all duration-300">
                  {/* Icon with Yellow Background */}
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400 text-[#1a237e] group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>

                  <p className="text-lg font-semibold text-[#1a237e] leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}