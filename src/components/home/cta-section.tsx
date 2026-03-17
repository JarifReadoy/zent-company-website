import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
    return (
        <section className="relative isolate overflow-hidden bg-primary py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                        Ready to transform your business?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">
                        Join hundreds of enterprise clients who trust Zent Technologies for their critical infrastructure needs.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">Contact Sales</Link>
                        </Button>
                        <Link href="/about" className="text-sm font-semibold leading-6 text-primary-foreground hover:underline">
                            Learn more <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
