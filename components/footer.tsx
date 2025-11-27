"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Tracks", href: "#tracks" },
  { label: "Program Details", href: "#program" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#" },
]

const programs = [
  "Full-Stack Development",
  "UI/UX Design",
  "Mobile Development",
  "Data & Analytics",
]

const socialLinks = [
  { icon: <Facebook className="w-6 h-6" />, href: "#" },
  { icon: <Twitter className="w-6 h-6" />, href: "#" },
  { icon: <Linkedin className="w-6 h-6" />, href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a237e] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Otondo</h3>
            <p className="text-[#F4F4F4]">
              Transforming careers through immersive bootcamp education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#F4F4F4]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          {/* <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-[#F4F4F4]">
              {programs.map((program) => (
                <li key={program}>{program}</li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-[#F4F4F4]">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 shrink-0" />
                <a
                  href="mailto:info@otondo.com"
                  className="hover:text-blue-500 transition-colors"
                >
                  info@otondo.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 shrink-0" />
                <a
                  href="tel:+2348140556905"
                  className="hover:text-blue-500 transition-colors"
                >
                  +234 8140 556 905
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 shrink-0" />
                <span>Kaduna, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                {link.icon}
              </Link>
            ))}
          </div>

          <div className="text-center text-gray-400 border-t border-gray-800 pt-8 text-sm">
            &copy; 2025 Otondo Bootcamp. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
