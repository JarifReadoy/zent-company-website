import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CareersCta() {
    return (
        <section className="relative isolate overflow-hidden bg-background py-16 sm:py-24 border-t">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Join our team
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                    We&apos;re always looking for talented individuals to join our mission.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button size="lg" asChild>
                        <Link href="/contact">View Openings</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
