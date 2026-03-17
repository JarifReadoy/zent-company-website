import { Section } from "@/components/layout/section"

const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Global Clients', value: '120' },
    { label: 'Team Members', value: '75' },
]

export function AboutStats() {
    return (
        <Section className="border-y bg-background">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-muted-foreground">{stat.label}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                            {stat.value}
                        </dd>
                    </div>
                ))}
            </dl>
        </Section>
    )
}
