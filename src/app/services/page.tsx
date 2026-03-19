import { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { ServiceCard } from "@/components/ui/service-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { readData } from "@/lib/content"
import { getIcon } from "@/lib/icon-map"

interface Service { id: string; title: string; description: string; icon: string; href: string; }

export const metadata: Metadata = {
  title: "Our Services | Zent Technologies Ltd.",
  description: "Explore our comprehensive range of IT services including Cloud Solutions, Cybersecurity, AI Integration, and more.",
}

export default function ServicesPage() {
  const services = readData<Service[]>('services.json')

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative bg-muted/30 py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl mb-6">World-Class IT Solutions</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
              We deliver end-to-end technology services that empower your business to innovate, scale, and succeed in the digital age.
            </p>
          </div>
        </section>
        <Section>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} title={service.title} description={service.description} icon={getIcon(service.icon)} href={service.href} />
            ))}
          </div>
        </Section>
        <Section className="bg-muted/10">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Process</h2>
            <p className="mt-4 text-muted-foreground">How we ensure success for every project.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and technical requirements." },
              { step: "02", title: "Strategy", desc: "Designing a tailored roadmap for your solution." },
              { step: "03", title: "Implementation", desc: "Agile development and rigorous testing." },
              { step: "04", title: "Optimization", desc: "Continuous monitoring and improvement." },
            ].map((item) => (
              <div key={item.step} className="relative flex flex-col items-center text-center p-6">
                <span className="text-6xl font-bold text-muted-foreground/10 absolute -top-4 select-none">{item.step}</span>
                <h3 className="text-xl font-semibold text-foreground relative z-10 mb-2">{item.title}</h3>
                <p className="text-muted-foreground relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>
        <section className="relative isolate overflow-hidden bg-primary py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">Partner with the experts</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">Let&apos;s discuss how we can help you achieve your technology goals.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
