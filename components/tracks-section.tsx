"use client"

import { motion } from "framer-motion"

const tracks = [
  { id: 1, title: "Machine Learning", duration: "Course Duration: 2hr 30 min" },
  { id: 2, title: "Data Science", duration: "Course Duration: 2hr 30 min" },
  { id: 3, title: "Graphic Design", duration: "Course Duration: 2hr 30 min" },
  { id: 4, title: "AI / Machine Learning", duration: "Course Duration: 2hr 30 min" },
  { id: 5, title: "Content Creation", duration: "Course Duration: 2hr 30 min" },
  { id: 6, title: "Full-Stack Development", duration: "Course Duration: 2hr 30 min" },
  { id: 7, title: "UI/UX Design", duration: "Course Duration: 2hr 30 min" },
  { id: 8, title: "Digital Marketing", duration: "Course Duration: 2hr 30 min" },
  { id: 9, title: "Cybersecurity", duration: "Course Duration: 2hr 30 min" },
]

const duplicatedTracks = [...tracks, ...tracks, ...tracks]

export default function TracksSection() {
  return (
    <section className="relative bg-[#0EA5E9] overflow-hidden">
      {/* Top Curve */}
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path fill="#F4F4F4" d="M0,0 L0,100 Q720,200 1440,100 L1440,0 Z" />
      </svg>

      {/* Bottom Curve */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path fill="#F4F4F4" d="M0,200 L0,100 Q720,0 1440,100 L1440,200 Z" />
      </svg>

      <div className="relative pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F4F4F4] leading-tight">
              CHOOSE YOUR TRACK
            </h2>
            <div className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg shadow-md">
              Train in one of nine beginner-friendly tracks
            </div>
          </div>

          {/* Infinite Carousel - Slides only inside container */}
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [0, -1080] }} // Move exactly the width of 3.5–4 cards (≈1080px)
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 45,
                  ease: "linear",
                },
              }}
              className="flex gap-6 md:gap-8 mt-1.5"
            >
              {duplicatedTracks.map((track, index) => (
                <div
                  key={`${track.id}-${index}`}
                  className="shrink-0 w-[230px] sm:w-[250px] md:w-[290px]"
                >
                  <div className="group bg-white rounded-2xl border-4 border-[#1a237e] overflow-hidden transition-all duration-300 hover:-translate-y-4">
                    <div className="h-56 bg-[#E0F2FE] flex items-center justify-center border-b-4 border-[#1a237e]/10">
                      <span className="text-6xl font-bold text-[#1a237e] opacity-30">
                        {track.title.split(" ")[0]}
                      </span>
                    </div>

                    <div className="p-6 bg-white">
                      <h3 className="text-2xl font-bold text-[#1a237e] mb-2">
                        {track.title}
                      </h3>
                      <p className="text-[#1a237e]/70 font-medium">
                        {track.duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}