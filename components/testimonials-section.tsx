"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "Interning at DSHub gave me exposure to real AI work – I built a predictive model and saw it integrated into Lifegate.",
    author: "Former Data Science Intern",
  },
  {
    quote:
      "The mentorship and real-world projects were exceptional. This bootcamp truly prepares you for professional challenges.",
    author: "Former Data Science Intern",
  },
  {
    quote: "Best decision I made. The practical experience I gained was invaluable for my career transition.",
    author: "Former Data Science Intern",
  },
  {
    quote: "Amazing instructors and a supportive community that pushes you to succeed every single day.",
    author: "Former Data Science Intern",
  },
  {
    quote: "From zero to confident developer in just weeks. This bootcamp delivers on its promises.",
    author: "Former Data Science Intern",
  },
  {
    quote: "The career support and networking opportunities changed my entire trajectory.",
    author: "Former Data Science Intern",
  },
]

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Voices From Our Interns</h2>
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
                className="flex-shrink-0 w-72 bg-blue-400 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-6 min-h-64 flex flex-col justify-between">
                  <div>
                    <div className="text-4xl text-white/50 mb-2">"</div>
                    <p className="text-white italic leading-relaxed text-sm mb-6">{testimonial.quote}</p>
                  </div>
                  <div className="pt-4 border-t border-blue-300 mt-auto">
                    <div className="h-16 bg-gray-900 rounded flex items-center justify-center">
                      <p className="text-white font-semibold text-center text-sm">{testimonial.author}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
