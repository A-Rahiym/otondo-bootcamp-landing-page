import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import WhyJoinSection from "@/components/why-join-section"
import TracksSection from "@/components/tracks-section"
import ProgramDetailsSection from "@/components/program-details-section"
import ProcessSection from "@/components/process-section"
import TestimonialsSection from "@/components/testimonials-section"
import ApplySection from "@/components/apply-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <HeroSection />
      <WhyJoinSection />
      <TracksSection />
      <ProgramDetailsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ApplySection />
      <FaqSection />
      <Footer />
    </main>
  )
}
