
import { Section } from "@/components/layout/section"
import { company } from "@/data/company"

export function WorkProcess() {
    return (
        <Section>
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
                <h2 className="text-base font-semibold leading-7 text-primary">Our Process</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    How We Deliver Success
                </p>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative">
                    {/* Line connector for desktop */}
                    <div className="absolute top-8 left-0 hidden w-full border-t border-muted md:block" aria-hidden="true" />

                    <ul role="list" className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-x-8">
                        {company.process.map((step) => (
                            <li key={step.title} className="relative pt-6 md:pt-16">
                                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border bg-background md:left-1/2 md:-ml-6 md:-top-6 shadow-sm">
                                    <span className="text-lg font-bold text-primary">{step.step}</span>
                                </div>
                                <div className="pl-16 md:pl-0 md:text-center mt-2 md:mt-0">
                                    <h3 className="text-lg font-semibold leading-8 text-foreground">{step.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    )
}
