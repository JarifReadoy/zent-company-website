
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32">
                <p className="text-base font-semibold text-primary">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-muted-foreground">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button asChild size="lg">
                        <Link href="/">Go back home</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="/contact">Contact support <span aria-hidden="true">&rarr;</span></Link>
                    </Button>
                </div>
            </main>
            <Footer />
        </div>
    )
}
