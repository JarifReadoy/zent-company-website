
import { Metadata } from "next"
import { portfolio } from "@/data/portfolio"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/layout/section"
import { ProjectCard } from "@/components/ui/project-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Our Portfolio | Zent Technologies Ltd.",
    description: "Explore our success stories and how we've helped clients across various industries achieve their digital goals.",
}

export default function PortfolioPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section className="relative bg-background py-24 sm:py-32 text-center border-b">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
                            Proven Results
                        </div>
                        <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl">
                            Success Stories
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                            We don&apos;t just build software; we build value. See how our solutions have transformed businesses around the globe.
                        </p>
                    </div>
                </section>

                <Section className="bg-muted/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {portfolio.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                </Section>

                <section className="py-24 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6">Ready to write your success story?</h2>
                        <Button size="lg" asChild>
                            <Link href="/contact">Start Your Project</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
