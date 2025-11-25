"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Trophy, BarChart3, Target, Clock } from "lucide-react"
import Image from "next/image";
const reasons = [
  {
    icon: BookOpen,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "Build lasting connections with fellow developers",
  },
  {
    icon: Trophy,
    title: "Real-World Projects",
    description: "Work on live projects that boost your portfolio",
  },
  {
    icon: BarChart3,
    title: "Career Support",
    description: "Dedicated job placement and career guidance",
  },
  {
    icon: Target,
    title: "Flexible Pacing",
    description: "Learn at your own pace with mentorship support",
  },
  {
    icon: Clock,
    title: "Lifetime Access",
    description: "Keep learning with lifetime course access",
  },
]

export default function WhyJoinSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 otondo-blue-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">WHY JOIN THE OTONDO BOOTCAMP</h2>
            <div className="space-y-4">
              {reasons.slice(0, 3).map((reason, index) => {
                const Icon = reason.icon
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="shrink-0 mt-1">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{reason.title}</h3>
                      <p className="text-blue-100 text-sm">{reason.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
            src={'/image_1.png'}
            alt="Bootcamp instructor"
            width={400}
            height={400}
            className="w-lg h-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
