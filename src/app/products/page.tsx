import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/layout/section"
import { ProductCard } from "@/components/ui/product-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { products } from "@/data/products"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Enterprise Software Products | Zent Technologies Ltd.",
    description: "Discover our suite of enterprise-grade software products designed to streamline operations and enhance security.",
}

export default function ProductsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="relative bg-muted/20 pt-24 pb-12 sm:pt-32 sm:pb-16 text-center">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl">
                            Enterprise-Grade Products
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                            Built for scale, security, and performance. Our software products empower your team to achieve more with less.
                        </p>
                    </div>
                </section>

                {/* Products Grid */}
                <Section>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                description={product.description}
                                icon={product.icon}
                                href={`/products/${product.slug}`}
                                features={product.features.slice(0, 3)} // Show only top 3 features on card
                            />
                        ))}
                    </div>
                </Section>

                {/* Integration Section */}
                <Section className="bg-muted/10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Seamless Integration</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our products are designed to work together and integrate with your existing technology stack.
                        </p>
                        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 grayscale opacity-60">
                            {/* Placeholders for logos */}
                            <div className="flex items-center justify-center p-6 bg-background rounded-xl border font-bold text-xl">AWS</div>
                            <div className="flex items-center justify-center p-6 bg-background rounded-xl border font-bold text-xl">Azure</div>
                            <div className="flex items-center justify-center p-6 bg-background rounded-xl border font-bold text-xl">Google Cloud</div>
                            <div className="flex items-center justify-center p-6 bg-background rounded-xl border font-bold text-xl">Kubernetes</div>
                        </div>
                    </div>
                </Section>

                {/* CTA */}
                <section className="relative isolate overflow-hidden bg-primary py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
                            Schedule a personalized demo with our solution architects today.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">Book a Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
