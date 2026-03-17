
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { products } from "@/data/products"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, BarChart, CheckCircle2 } from "lucide-react"

interface ProductPageProps {
    params: {
        slug: string
    }
}

// Generate metadata dynamically
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const product = products.find((p) => p.slug === params.slug)

    if (!product) {
        return {
            title: "Product Not Found",
        }
    }

    return {
        title: `${product.title} | Zent Technologies Ltd.`,
        description: product.description,
    }
}

// Generate static params for all products
export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }))
}

export default function ProductPage({ params }: ProductPageProps) {
    const product = products.find((p) => p.slug === params.slug)

    if (!product) {
        notFound()
    }

    const { icon: Icon } = product

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-muted/20 py-20 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                            <div className="space-y-6">
                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Icon className="h-8 w-8" />
                                </div>
                                <h1 className="text-4xl font-display font-bold tracking-tight sm:text-5xl md:text-6xl">
                                    {product.title}
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                                    {product.fullDescription}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button size="lg" asChild>
                                        <Link href="/contact">Request Demo</Link>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild>
                                        <Link href="#features">Explore Features</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative aspect-video rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border p-8 flex items-center justify-center">
                                {/* Conceptual illustration placeholder */}
                                <div className="text-center space-y-4 opacity-50">
                                    <Icon className="h-32 w-32 mx-auto text-primary/40" />
                                    <p className="font-mono text-sm">Product Dashboard Preview</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <Section id="features">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Key Features</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Everything you need to succeed with {product.title}.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {product.features.map((feature, i) => (
                            <div key={i} className="flex p-6 rounded-2xl border bg-card hover:shadow-md transition-shadow">
                                <div className="mr-4 mt-1">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Zap className="h-5 w-5" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{feature}</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Powerful capability designed to optimize your workflow and results.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Benefits Section */}
                <Section className="bg-muted/10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Why Choose {product.title}?</h2>
                            <div className="space-y-4">
                                {product.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="h-6 w-6 text-primary flex-none mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-lg">{benefit}</h3>
                                            <p className="text-muted-foreground">Delivering tangible value to your bottom line.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative rounded-2xl bg-background border p-8 shadow-sm">
                            <h3 className="font-bold text-xl mb-4">Use Cases</h3>
                            <ul className="space-y-3">
                                {product.useCases.map((useCase, i) => (
                                    <li key={i} className="p-4 rounded-lg bg-muted/30 border flex items-center gap-3">
                                        <BarChart className="h-5 w-5 text-muted-foreground" />
                                        <span>{useCase}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Section>

                {/* CTA */}
                <section className="py-20 bg-primary text-primary-foreground text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                            Start Your Journey with {product.title}
                        </h2>
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">Get Started Now</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
