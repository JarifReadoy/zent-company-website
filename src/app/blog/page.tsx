
import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/layout/section"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar } from "lucide-react"

export const metadata: Metadata = {
    title: "Insights & Blog | Zent Technologies Ltd.",
    description: "Latest trends, technology insights, and company news from Zent Technologies.",
}

const posts = [
    {
        id: 1,
        title: "The Future of AI in Enterprise",
        excerpt: "How artificial intelligence is reshaping business operations and decision-making processes.",
        date: "Oct 15, 2025",
        category: "Artificial Intelligence",
        author: "Dr. Alan Grant",
    },
    {
        id: 2,
        title: "Migrating to the Cloud: A CTO&apos;s Guide",
        excerpt: "Key strategies and pitfalls to avoid when moving your legacy infrastructure to the cloud.",
        date: "Oct 02, 2025",
        category: "Cloud Computing",
        author: "Sarah Connor",
    },
    {
        id: 3,
        title: "Cybersecurity Best Practices for 2026",
        excerpt: "Stay ahead of threats with these essential security protocols for modern organizations.",
        date: "Sep 28, 2025",
        category: "Security",
        author: "Elliot Alderson",
    },
    {
        id: 4,
        title: "Optimizing Supply Chains with IoT",
        excerpt: "Real-time tracking and analytics can save millions in logistics costs.",
        date: "Sep 15, 2025",
        category: "IoT",
        author: "Tony Stark",
    },
]

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section className="bg-muted/20 py-24 sm:py-32 text-center">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl">
                            Insights
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                            Expert perspectives on technology, innovation, and digital transformation.
                        </p>
                    </div>
                </section>

                <Section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                        <Calendar className="h-4 w-4" />
                                        {post.date}
                                        <span className="mx-1">•</span>
                                        <span className="text-primary font-medium">{post.category}</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display leading-tight group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground">{post.excerpt}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link" asChild className="p-0">
                                        <Link href="#">Read Article</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    )
}
