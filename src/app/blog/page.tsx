import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/layout/section"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { readData } from "@/lib/content"

interface BlogPost {
  id: string; title: string; excerpt: string; date: string;
  category: string; author: string; slug: string; published: boolean;
}

export const metadata: Metadata = {
  title: "Insights & Blog | Zent Technologies Ltd.",
  description: "Latest trends, technology insights, and company news from Zent Technologies.",
}

export default function BlogPage() {
  const posts = readData<BlogPost[]>('blog.json').filter(p => p.published)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="bg-muted/20 py-24 sm:py-32 text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl">Insights</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">Expert perspectives on technology, innovation, and digital transformation.</p>
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
                  <h3 className="text-xl font-bold font-display leading-tight">{post.title}</h3>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0">
                    <Link href={`/blog/${post.slug}`}>Read Article</Link>
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
