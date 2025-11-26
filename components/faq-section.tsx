"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { faqs } from "@/data/data";

export default function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header + Image */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a237e] mb-6">
              Frequently asked questions
            </h2>
          </div>
          <div className="flex justify-center lg:justify-center">
            <Image
              src={"/question.png"}
              alt="Question mark"
              width={200}
              height={200}
              className="drop-shadow-2xl"
            />
          </div>
        </div>

        {/* FAQ List – two columns on lg+ */}
        <div className="grid lg:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Orange bullet + Question */}
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
                      <p className="text-gray-600 leading-relaxed">
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
