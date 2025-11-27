"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function ApplySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 otondo-blue-section bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" rounded-3xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="hidden md:flex items-center justify-center p-8">
              <Image
                src="/image_3.png"
                alt="Students collaborating"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Ready to Begin? Apply and Start Building."
              </h2>
              <p className="text-lg text-blue-50 mb-8 leading-relaxed">
                Start your journey with a community that supports you,
                instructors who guide you, and a structure designed for your
                success.
              </p>
              <Link
                href="https://forms.gle/uqiG59Myzw9aa6GGA"
                target="_blank"
                className="otondo-primary-btn py-4 px-8 rounded-none text-lg font-medium w-full md:w-auto text-center"
              >
                <span className="otondo-primary-btn font-medium">
                  Apply Now
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
