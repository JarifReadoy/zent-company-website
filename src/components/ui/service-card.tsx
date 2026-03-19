import { ArrowRight, LucideIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
    title: string
    description: string
    icon: React.ElementType
    href: string
    className?: string
}

export function ServiceCard({
    title,
    description,
    icon: Icon,
    href,
    className,
}: ServiceCardProps) {
    return (
        <div
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-md",
                className
            )}
        >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
            </div>

            <div className="mb-4">
                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                    {title}
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                    {description}
                </p>
            </div>

            <div className="mt-auto pt-4">
                <Button variant="link" className="p-0 h-auto font-semibold text-primary group-hover:text-primary/80" asChild>
                    <Link href={href} className="flex items-center gap-1">
                        Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />
        </div>
    )
}
