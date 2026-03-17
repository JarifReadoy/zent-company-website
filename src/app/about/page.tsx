import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStats } from "@/components/about/about-stats"
import { CompanyValues } from "@/components/about/company-values"
import { TeamSection } from "@/components/about/team-section"
import { CareersCta } from "@/components/about/careers-cta"

export const metadata: Metadata = {
    title: "About Us | Zent Technologies Ltd.",
    description: "Learn about Zent Technologies Ltd., our mission, values, and the team driving enterprise innovation.",
}

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <AboutHero />
                <AboutStats />
                <CompanyValues />
                <TeamSection />
                <CareersCta />
            </main>
            <Footer />
        </div>
    )
}
