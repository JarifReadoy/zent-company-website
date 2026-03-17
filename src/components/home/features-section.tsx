import { Cloud, Shield, Code2 } from "lucide-react"
import { Section } from "@/components/layout/section"

export function FeaturesSection() {
    return (
        <Section className="bg-muted/30">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Zent Technologies?</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Everything you need to scale securely
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    {[
                        {
                            name: 'Cloud Infrastructure',
                            description: 'Scalable and resilient cloud architecture designed for high availability and performance.',
                            icon: Cloud,
                        },
                        {
                            name: 'Advanced Cybersecurity',
                            description: 'Protect your assets with our state-of-the-art security protocols and 24/7 monitoring.',
                            icon: Shield,
                        },
                        {
                            name: 'Custom Development',
                            description: 'Tailored software solutions that perfectly align with your unique business requirements.',
                            icon: Code2,
                        },
                    ].map((feature) => (
                        <div key={feature.name} className="flex flex-col items-start">
                            <div className="rounded-lg bg-primary/10 p-2 ring-1 ring-primary/20">
                                <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-foreground">{feature.name}</dt>
                            <dd className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </Section>
    )
}
