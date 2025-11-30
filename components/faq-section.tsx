"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { faqs } from "@/data/data";


const midpoint = Math.ceil(faqs.length / 2);
const col1Faqs = faqs.slice(0, midpoint);
const col2Faqs = faqs.slice(midpoint);
export default function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
<div className="grid lg:grid-cols-2 gap-8">

  {/* === COLUMN 1 === */}
  <div className="flex flex-col gap-8">
    {col1Faqs.map((faq, index) => (
      <motion.div
        key={index}
        className="bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        {/* ... (Your button/question content here) ... */}
        <button
          onClick={() =>
            setExpandedIndex(expandedIndex === index ? null : index)
          }
          className="w-full flex items-start gap-4 text-left group hover:bg-gray-50 rounded-lg p-4 -m-4 transition-colors"
        >
          <span className="mt-1.5 w-3 h-3 bg-orange-500 rounded-full flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#1a237e] transition-colors">
              {faq.question}
            </h3>
          </div>
          {/* ... (ChevronDown content here) ... */}
          <ChevronDown
            className={`w-5 h-5 text-[#1a237e] flex-shrink-0 transition-transform duration-300 ${
              expandedIndex === index ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Answer */}
        <AnimatePresence>
          {expandedIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pl-7 pr-12 pt-4 pb-6">
                {/* Ensure you use the 'whitespace-pre-wrap' class to handle \n */}
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ))}
  </div>


  {/* === COLUMN 2 === */}
  <div className="flex flex-col gap-8">
    {col2Faqs.map((faq, index) => (
      <motion.div
        // IMPORTANT: Adjust the key/index for the second column to avoid collisions
        // The original index was up to 11. If col1 is 0-5, col2 starts at 6.
        key={index + midpoint} 
        className="bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: (index + midpoint) * 0.1 }}
        viewport={{ once: true }}
      >
        {/* ... (Question content) ... */}
        <button
          onClick={() =>
            // IMPORTANT: Adjust the index check for the second column
            setExpandedIndex(expandedIndex === index + midpoint ? null : index + midpoint)
          }
          className="w-full flex items-start gap-4 text-left group hover:bg-gray-50 rounded-lg p-4 -m-4 transition-colors"
        >
          <span className="mt-1.5 w-3 h-3 bg-orange-500 rounded-full flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#1a237e] transition-colors">
              {faq.question}
            </h3>
          </div>
          {/* ... (ChevronDown content here) ... */}
          <ChevronDown
            className={`w-5 h-5 text-[#1a237e] flex-shrink-0 transition-transform duration-300 ${
              expandedIndex === index + midpoint ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Answer */}
        <AnimatePresence>
          {expandedIndex === index + midpoint && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pl-7 pr-12 pt-4 pb-6">
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ))}
  </div>

</div>
    </section>
  );
}
