"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// UNIQUE ICONS
import {
  BookOpen,
  ClipboardList,
  Rocket,
  BarChart2,
  LayoutGrid,
  Users,
} from "lucide-react";

export default function BootcampStructure() {
  // BENEFITS WITH UNIQUE ICONS
  const benefits = [
    { text: "Weekly modules & materials", icon: BookOpen },
    { text: "Assignments + weekly assessments", icon: ClipboardList },
    { text: "Capstone project", icon: Rocket },
    { text: "Feedback & progress tracking", icon: BarChart2 },
    { text: "Organized classroom platform", icon: LayoutGrid },
    { text: "Supportive peer learning community", icon: Users },
  ];

  return (
    <section className="relative bg-[#F4F4F4] pt-12 pb-22 overflow-hidden" id="program">
      {/* --- CONTENT WRAPPER --- */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a237e] mb-20"
        >
          BOOTCAMP STRUCTURE
        </motion.h2>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/image_2.png"
              alt="Bootcamp collaboration"
              width={520}
              height={520}
              priority
              className="object-contain"
            />
          </motion.div>

          {/* ---------------- DON'T TOUCH THIS CARD ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-[#1E88E5]  p-10 text-white shadow-xl z-10"
          >
            {/* Blue Outline Accent - BEHIND (UNTOUCHED) */}
            <div className="absolute -top-3 -right-2 w-[98%] h-[98%] bg-[#0D47A1] z-0"></div>

            {/* Yellow Label */}
            <span className="relative z-10 inline-block bg-[#FDD835] text-[#1A1A1A] font-bold px-4 py-1  mb-6">
              What You Get:
            </span>

            {/* Updated List (Only part changed) */}
            <ul className="relative z-10 space-y-4 text-lg font-medium leading-relaxed mt-4">
              {benefits.map(({ text, icon: Icon }, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon className="w-6 h-6 text-white shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* ---------------- END OF UNTOUCHED CARD ---------------- */}

        </div>
      </div>
    </section>
  );
}
