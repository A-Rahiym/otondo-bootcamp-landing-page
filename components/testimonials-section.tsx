"use client"
import { FaQuoteLeft } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { testimonials } from "@/data/data"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 280 + 24 // card width + gap
      scrollRef.current.scrollLeft = currentIndex * cardWidth
    }
  }, [currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a237e] mb-4">Voices From Our Interns</h2>
          <p className="text-gray-700 text-lg">
            Engineers and designers united by a mission to transform mobility technology.
          </p>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden scroll-smooth pb-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="shrink-0 w-72 bg-[#0EA5E9] overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-6 min-h-64 flex flex-col justify-between">
                  <div>
                    <FaQuoteLeft className="text-3xl text-[#1a237e] mb-4 w-auto shrink-0" />
                    <p className="text-white italic leading-relaxed text-sm mb-6">{testimonial.quote}</p>
                  </div>
                  <div className="pt-4 border-t border-blue-300 mt-auto">
                    <div className="h-16 bg-[#1a237e]  flex items-center justify-center">
                      <p className="text-white font-semibold text-center text-sm">{testimonial.author}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
