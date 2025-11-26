"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Tracks", href: "#tracks" },
    { label: "Program Details", href: "#program" },
    { label: "Process", href: "#process" },
  ];

  return (
    <nav className="otondo-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Image
            src={"/LogoxMonogram.png"}
            alt={"Otondo Bootcamp Logo"}
            width={200}
            height={100}
            priority
          />

          {/* Desktop Navigation - Changed from md: to lg: */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button - Changed from md: to lg: */}
          <div className="hidden lg:block">
            <button className="otondo-primary-btn font-medium ">Apply Now</button>
          </div>

          {/* Mobile Menu Button - Now shows on <lg (below 1024px) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Shows on <lg */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="otondo-primary-btn w-full">Apply Now</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}