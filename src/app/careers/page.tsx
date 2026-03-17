
import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
    title: "Careers | Zent Technologies Ltd.",
    description: "Join our team of innovators and help build the future of enterprise technology.",
}

const positions = [
    {
        id: 1,
        title: "Senior Full Stack Engineer",
        department: "Engineering",
        location: "Tech City / Remote",
        type: "Full-time",
    },
    {
        id: 2,
        title: "Product Manager",
        department: "Product",
        location: "Tech City",
        type: "Full-time",
    },
    {
        id: 3,
        title: "Cloud Architect",
        department: "Infrastructure",
        location: "Remote",
        type: "Contract",
    },
    {
        id: 4,
        title: "UI/UX Designer",
        department: "Design",
        location: "Tech City",
        type: "Full-time",
    },
]

export default function CareersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section className="relative bg-primary text-primary-foreground py-24 sm:py-32 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h1 className="text-4xl font-display font-bold tracking-tight sm:text-6xl">
                            Join the Zent
                        </h1>
                        <p className="mt-6 text-lg leading-8 opacity-90 max-w-2xl mx-auto">
                            We&apos;re looking for passionate problem-solvers to help us build the next generation of enterprise software.
                        </p>
                        <div className="mt-10">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="#openings">View Open Positions</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <Section id="openings">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="text-3xl font-bold mb-10 text-center">Open Positions</h2>
                        <div className="space-y-4">
                            {positions.map((job) => (
                                <div key={job.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl border bg-card hover:border-primary transition-colors">
                                    <div className="mb-4 sm:mb-0">
                                        <h3 className="text-xl font-bold">{job.title}</h3>
                                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="h-4 w-4" /> {job.department}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="h-4 w-4" /> {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" /> {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <Button asChild>
                                        <Link href="/contact">Apply Now</Link>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    )
}
