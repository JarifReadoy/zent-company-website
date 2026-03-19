import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { readData } from "@/lib/content"
import { JobList } from "@/components/careers/job-list"

interface Job { id: string; title: string; department: string; location: string; type: string; description: string; applyUrl?: string; published: boolean; }

export const metadata: Metadata = {
  title: "Careers | Zent Technologies Ltd.",
  description: "Join our team of innovators and help build the future of enterprise technology.",
}

export default function CareersPage() {
  const positions = readData<Job[]>('careers.json').filter(j => j.published)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative bg-primary text-primary-foreground py-24 sm:py-32 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl font-display font-bold tracking-tight sm:text-6xl">Join the Zent</h1>
            <p className="mt-6 text-lg leading-8 opacity-90 max-w-2xl mx-auto">
              We&apos;re looking for passionate problem-solvers to help us build the next generation of enterprise software.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild><Link href="#openings">View Open Positions</Link></Button>
            </div>
          </div>
        </section>
        <Section id="openings">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-10 text-center">Open Positions</h2>
            <JobList positions={positions} />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
