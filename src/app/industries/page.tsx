
import { Metadata } from "next"
import { industries } from "@/data/industries"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/layout/section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Industries We Serve | Zent Technologies Ltd.",
    description: "Tailored IT solutions for Healthcare, Finance, Education, Retail, and more.",
}

export default function IndustriesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section className="relative bg-muted/20 py-24 sm:py-32 text-center">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl">
                            Industries We Serve
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                            We bring deep domain expertise to every project, understanding the unique challenges and regulations of your sector.
                        </p>
                    </div>
                </section>

                <Section>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {industries.map((industry) => (
                            <Card key={industry.id} className="group hover:border-primary/50 transition-colors">
                                <CardContent className="p-8 flex flex-col items-center text-center">
                                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                        <industry.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                                    <p className="text-muted-foreground mb-6">{industry.description}</p>
                                    <Button variant="link" asChild className="mt-auto p-0 h-auto font-semibold">
                                        <Link href="/contact" className="gap-2">
                                            Consult an Expert <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Section>

                <section className="bg-primary text-primary-foreground py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Don&apos;t see your industry?</h2>
                        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Our adaptable technology solutions can be customized for any sector. Let&apos;s discuss your specific needs.
                        </p>
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
