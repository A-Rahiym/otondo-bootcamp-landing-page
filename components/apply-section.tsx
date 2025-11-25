"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ApplySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    track: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", track: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 3000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 otondo-blue-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="hidden md:flex items-center justify-center p-8">
              <img
                src="/two-people-working-on-laptop-together-3d-character.jpg"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Ready to Begin? Apply and Start Building."
              </h2>
              <p className="text-lg text-blue-50 mb-8 leading-relaxed">
                Start your journey with a community that supports you, instructors who guide you, and a structure
                designed for your success.
              </p>

              <button
                onClick={() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })}
                className="otondo-primary-btn py-4 px-8 text-lg font-semibold w-full md:w-auto text-center"
              >
                Register Now
              </button>
            </div>
          </div>
        </motion.div>

        <motion.form
          id="apply-form"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-8 shadow-xl mt-12"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Tell us about yourself</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Track</label>
              <select
                name="track"
                value={formData.track}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a track</option>
                <option value="full-stack">Full-Stack Development</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="mobile">Mobile Development</option>
                <option value="data">Data & Analytics</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about yourself</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={4}
              placeholder="Share your background and what you hope to achieve..."
            />
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <button type="submit" disabled={isSubmitting} className="w-full otondo-primary-btn py-3 text-lg">
              {isSubmitting ? "Submitting..." : "Register Now"}
            </button>

            {submitStatus === "success" && (
              <p className="text-center text-green-600 font-semibold">
                Application submitted successfully! We'll be in touch soon.
              </p>
            )}

            {submitStatus === "error" && (
              <p className="text-center text-red-600 font-semibold">Something went wrong. Please try again.</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
