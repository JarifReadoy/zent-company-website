import { Metadata } from "next"
import { Shield, BrainCircuit, Database, Laptop, Network, Cloud } from "lucide-react"
import { Section } from "@/components/layout/section"
import { ServiceCard } from "@/components/ui/service-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
    title: "Our Services | Zent Technologies Ltd.",
    description: "Explore our comprehensive range of IT services including Cloud Solutions, Cybersecurity, AI Integration, and more.",
}

const services = [
    {
        title: "Cloud Infrastructure",
        description: "Scalable cloud architectures designed for high availability, security, and performance. We help you migrate, manage, and optimize your cloud environment.",
        icon: Cloud,
        href: "/services/cloud",
    },
    {
        title: "Cybersecurity & Compliance",
        description: "Comprehensive security audits, threat detection, and compliance management to protect your critical business data from evolving cyber threats.",
        icon: Shield,
        href: "/services/cybersecurity",
    },
    {
        title: "AI & Machine Learning",
        description: "Leverage the power of artificial intelligence to automate processes, gain data-driven insights, and create smarter customer experiences.",
        icon: BrainCircuit,
        href: "/services/ai",
    },
    {
        title: "Custom Software Development",
        description: "Tailored software solutions built with modern technologies to solve your unique business challenges and drive digital transformation.",
        icon: Laptop,
        href: "/services/software",
    },
    {
        title: "Data Analytics & BI",
        description: "Turn raw data into actionable intelligence. We implement robust data pipelines and visualization tools to empower decision-making.",
        icon: Database,
        href: "/services/data",
    },
    {
        title: "Network Solutions",
        description: "Enterprise-grade network design and management services ensuring reliable connectivity and optimal performance for your distributed workforce.",
        icon: Network,
        href: "/services/network",
    },
]



export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative bg-muted/30 py-20 md:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                            World-Class IT Solutions
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
                            We deliver end-to-end technology services that empower your business to innovate, scale, and succeed in the digital age.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <Section>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <ServiceCard
                                key={service.title}
                                {...service}
                            />
                        ))}
                    </div>
                </Section>

                {/* Process Section */}
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

                {/* CTA Section */}
                <section className="relative isolate overflow-hidden bg-primary py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                            Partner with the experts
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">
                            Let&apos;s discuss how we can help you achieve your technology goals.
                        </p>
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
