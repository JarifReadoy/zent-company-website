import Link from "next/link"
import { ArrowRight, Check, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductCardProps {
    title: string
    description: string
    features: string[]
    href: string
    icon: React.ElementType
    featured?: boolean
}

export function ProductCard({
    title,
    description,
    features,
    href,
    icon: Icon,
    featured = false,
}: ProductCardProps) {
    return (
        <div
            className={cn(
                "flex flex-col overflow-hidden rounded-3xl bg-card border shadow-sm ring-1 ring-border transition-all hover:shadow-lg hover:-translate-y-1 duration-300",
                featured ? "lg:col-span-2 lg:row-span-2 bg-primary/5 border-primary/20" : ""
            )}
        >
            <div className="p-8 sm:p-10 flex-1">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-display font-bold tracking-tight text-foreground">
                    {title}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                    {description}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                    {features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                            <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-auto p-8 sm:p-10 pt-0">
                <Button asChild variant={featured ? "default" : "outline"} className="w-full">
                    <Link href={href}>
                        View Product <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}
