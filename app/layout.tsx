import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// // Google Fonts
// const geist = Geist({ subsets: ["latin"] })
// const geistMono = Geist_Mono({ subsets: ["latin"] })

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans", // used for general text
  display: "swap",
});

// Local Font: Montserrat Alternates
export const montserratAlternates = localFont({
  src: [
    {
      path: "../public/fonts/MontserratAlternates-Medium.ttf",
      weight: "400",
      style: "medium",
    },
    {
      path: "../public/fonts/MontserratAlternates-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-heading", // used for headings
  display: "swap",
});

// -------------------------
// SITE METADATA
// -------------------------
const metadata: Metadata = {
  title: "Otondo Bootcamp - A Fresh Start for Your Tech Career",
  description:
    "Join Otondo Bootcamp for an intensive, multi-track coding bootcamp designed to give you practical skills and support for a successful tech journey.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

// -------------------------
// ROOT LAYOUT
// -------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
    antialiased
    ${montserratAlternates.variable}
    ${montserrat.variable}
  `}
        style={{ fontFamily: "var(--font-heading)" }} // ensures Montserrat is used
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
