"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const tracks = [
  {
    id: 1,
    title: "Machine Learning",
    duration: "Course Duration: 2hr 30 min",
    image: "url('/images/frame-2030.png')",
  },
  {
    id: 2,
    title: "Data Science",
    duration: "Course Duration: 2hr 30 min",
    image: "url('/images/frame-2030.png')",
  },
  {
    id: 3,
    title: "Graphic Design",
    duration: "Course Duration: 2hr 30 min",
    image: "url('/images/frame-2030.png')",
  },
  {
    id: 4,
    title: "AI / Machine Learning",
    duration: "Course Duration: 2hr 30 min",
    image: "url('/images/frame-2030.png')",
  },
  {
    id: 5,
    title: "Content Creation",
    duration: "Course Duration: 2hr 30 min",
    image: "url('/images/frame-2030.png')",
  },
  {
    id: 6,
    title: "Full-Stack Development",
    duration: "Course Duration: 2hr 30 min",
    image: "url('/images/frame-2030.png')",
  },
]

export default function TracksSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tracks.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 320 + 24 // card width + gap
      scrollRef.current.scrollLeft = currentIndex * cardWidth
    }
  }, [currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length)
  }

  return (
    <section id="tracks" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="otondo-section-title">CHOOSE YOUR TRACK</h2>
          <div className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg">
            Train in one of nine beginner-friendly tracks
          </div>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden scroll-smooth pb-8">
            {tracks.map((track) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 bg-white rounded-xl border-2 border-blue-300 overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={`/.jpg?key=puf9f&height=192&width=320&query=${track.title} course illustration`}
                  alt={track.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#1a237e" }}>
                    {track.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#4db8ff" }}>
                    {track.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-colors"
            aria-label="Previous track"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-colors"
            aria-label="Next track"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
