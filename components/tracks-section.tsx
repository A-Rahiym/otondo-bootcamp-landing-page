"use client";

import { motion } from "framer-motion";
import { tracks } from "@/data/data";
import Image from "next/image";
// Duplicate tracks enough for seamless infinite scroll (3x is perfect)
const duplicatedTracks = [...tracks, ...tracks, ...tracks];

export default function TracksSection() {
  return (
    <section className="relative bg-[#0EA5E9] overflow-hidden" id="tracks">
      {console.log(duplicatedTracks.length)}
      <svg
        className="absolute bottom-0 left-0 w-full h-48 md:h-64"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#F4F4F4"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      <div className="relative pt-24 pb-32 md:pt-32 md:pb-40 lg:pb-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 md:mb-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F4F4F4] leading-tight">
              CHOOSE YOUR TRACK
            </h2>
            <div className="bg-yellow-400 text-gray-900 px-6 py-3 font-bold text-lg ">
              Train in one of nine beginner-friendly tracks
            </div>
          </div>

          {/* Infinite Carousel Container */}
          <div className="relative overflow-hidden">
            {/* Optional Fade Edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-r from-[#0EA5E9] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-l from-[#0EA5E9] to-transparent z-10" />

            <motion.div
              animate={{ x: ["0%", "-450%"] }} // Moves exactly half (since we duplicated 3x)
              whileHover={{ animationPlayState: "paused" }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              className="flex gap-6 md:gap-8"
            >
              {duplicatedTracks.map((track, index) => (
                <div
                  key={`${track.id}-${index}`}
                  className="shrink-0 flex-none w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px]"
                >
                  <div className="group h-[90%] bg-white border-4 border-[#0EA5E9] overflow-hidden transition-all duration-500 hover:-translate-y-6 hover:shadow-2xl">
                    {/* Track Image Placeholder */}
                    <div className="h-46 sm:h-46 md:h-46 bg-[#E0F2FE] flex items-center justify-center border-b-4 border-[#0EA5E9] relative overflow-hidden">
                      <Image
                        src={track.image}
                        alt={track.title}
                        fill
                        className="object-cover opacity-70"
                      />
                    </div>

                    {/* Track Info */}
                    <div className="p-3 md:p-3 bg-white">
                      <h3 className="text-xl sm:text-xl md:text-xl font-bold text-[#1e3a8a] mb-3 line-clamp-2">
                        {track.title}
                      </h3>
                      {/* <p className="text-[#1e3a8a]/70 font-semibold text-lg">
                        {track.duration}
                      </p> */}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
