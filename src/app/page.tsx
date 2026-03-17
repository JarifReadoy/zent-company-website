import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { StatsSection } from "@/components/home/stats-section"
import { CtaSection } from "@/components/home/cta-section"
import { TrustedCompanies } from "@/components/home/trusted-companies"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { WorkProcess } from "@/components/home/work-process"
import { Testimonials } from "@/components/home/testimonials"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustedCompanies />
        <FeaturesSection />
        <WhyChooseUs />
        <StatsSection />
        <WorkProcess />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

