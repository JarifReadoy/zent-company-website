
import { Section } from "@/components/layout/section"

import { company } from "@/data/company"

export function WhyChooseUs() {
    return (
        <Section className="bg-muted/10">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
                <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Us</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Driven by Innovation, Committed to Excellence
                </p>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    We don&apos;t just deliver software; we provide strategic partnerships that help you navigate digital transformation with confidence.
                </p>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {company.values.map((value) => (
                        <div key={value.title} className="relative pl-16">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <value.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                            </div>
                            <dt className="text-base font-semibold leading-7 text-foreground">
                                {value.title}
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-muted-foreground">
                                {value.description}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </Section>
    )
}
