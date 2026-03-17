import { Users, History, Award, Globe } from "lucide-react"
import { Section } from "@/components/layout/section"

const values = [
    {
        name: 'Innovation First',
        description: 'We constantly push the boundaries of what technology can achieve for your business.',
        icon: Globe,
    },
    {
        name: 'Client Partnership',
        description: 'We act as an extension of your team, deeply invested in your long-term success.',
        icon: Users,
    },
    {
        name: 'Excellence Always',
        description: 'We maintain the highest standards in code quality, security, and project delivery.',
        icon: Award,
    },
    {
        name: 'Integrity',
        description: 'Transparent communication and honest consultancy are the cornerstones of our practice.',
        icon: History,
    },
]

export function CompanyValues() {
    return (
        <Section>
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-primary">Our Values</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Principles that drive our success
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                    {values.map((value) => (
                        <div key={value.name} className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                                <value.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                {value.name}
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                <p className="flex-auto">{value.description}</p>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </Section>
    )
}
