import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-background pt-16 md:pt-20 lg:pt-32">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f2653a] to-[#85d1c8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32 text-center">
                    <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl">
                        Elevate Your Enterprise with Future-Ready IT
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        We provide scalable cloud infrastructure, advanced cybersecurity, and custom software solutions designed to propel your business forward.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button size="lg" asChild>
                            <Link href="/contact">
                                Get Started <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/services">
                                Explore Solutions
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
