import { Section } from "@/components/layout/section"

const team = [
    {
        name: 'Sarah Chen',
        role: 'CEO & Founder',
        bio: 'Former CTO with 20 years of experience in enterprise architecture and digital transformation.',
    },
    {
        name: 'Marcus Rodriguez',
        role: 'Head of Engineering',
        bio: 'Cloud infrastructure expert specialized in AWS and Azure migrations.',
    },
    {
        name: 'Jessica Wu',
        role: 'Director of Cybersecurity',
        bio: 'Certified ethical hacker leading our security operations center.',
    },
    {
        name: 'David Kim',
        role: 'VP of Product',
        bio: 'Product strategist focused on user-centric design and agile methodology.',
    },
]

export function TeamSection() {
    return (
        <Section className="bg-muted/30">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Meet our leadership</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    A diverse team of experts dedicated to your success.
                </p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {team.map((person) => (
                    <li key={person.name}>
                        <div className="flex items-center gap-x-6">
                            <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xl">
                                {person.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-foreground">{person.name}</h3>
                                <p className="text-sm font-semibold leading-6 text-primary">{person.role}</p>
                                <p className="text-sm leading-6 text-muted-foreground">{person.bio}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
