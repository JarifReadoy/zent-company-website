import { BarChart3 } from "lucide-react"
import { Section } from "@/components/layout/section"

export function StatsSection() {
    return (
        <Section>
            <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Twice the speed, half the cost</h2>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        We optimize your IT infrastructure to deliver maximum efficiency. Our clients see significant improvements in operational speed and cost reduction.
                    </p>
                    <dl className="mt-8 flex gap-4">
                        <div className="flex flex-col gap-y-2 border-l-2 border-primary pl-4">
                            <dt className="text-sm leading-6 text-muted-foreground">Uptime Guarantee</dt>
                            <dd className="text-3xl font-bold tracking-tight text-foreground">99.99%</dd>
                        </div>
                        <div className="flex flex-col gap-y-2 border-l-2 border-primary pl-4">
                            <dt className="text-sm leading-6 text-muted-foreground">Cost Savings</dt>
                            <dd className="text-3xl font-bold tracking-tight text-foreground">40%</dd>
                        </div>
                        <div className="flex flex-col gap-y-2 border-l-2 border-primary pl-4">
                            <dt className="text-sm leading-6 text-muted-foreground">Security Threats Blocked</dt>
                            <dd className="text-3xl font-bold tracking-tight text-foreground">10k+</dd>
                        </div>
                    </dl>
                </div>
                <div className="relative h-full min-h-[300px] w-full rounded-xl bg-muted/50 overflow-hidden ring-1 ring-border">
                    {/* Abstract visualization or placeholder for image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <BarChart3 className="h-24 w-24 text-primary/40" />
                    </div>
                </div>
            </div>
        </Section>
    )
}
