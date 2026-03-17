import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean
}

export function Section({
    className,
    container = true,
    children,
    ...props
}: SectionProps) {
    return (
        <section
            className={cn("py-16 md:py-24 lg:py-32", className)}
            {...props}
        >
            {container ? (
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    )
}
