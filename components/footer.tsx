"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Otondo</h3>
            <p className="text-gray-400">Transforming careers through immersive bootcamp education.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-white transition-colors">
                  Tracks
                </a>
              </li>
              <li>

              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Full-Stack Development</li>
              <li>UI/UX Design</li>
              <li>Mobile Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@otondo.com" className="hover:text-white transition-colors">
                  info@otondo.com
                </a>
              </li>
              <li className="flex gap-2">
                <Phone className="w-5 h-5 shrink-0" />
                <a href="tel:+2348140556905" className="hover:text-white transition-colors">
                    +234 8140 556 905
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-5 h-5 shrink-0" />
                <span>Kaduna, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
            <p>&copy; 2025 Otondo Bootcamp. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
