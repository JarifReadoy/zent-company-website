
import { Section } from "@/components/layout/section"
import { company } from "@/data/company"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
    return (
        <Section className="bg-muted/20">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
                <h2 className="text-base font-semibold leading-7 text-primary">Testimonials</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Trusted by Industry Leaders
                </p>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {company.testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-background border-none shadow-md">
                            <CardContent className="p-8">
                                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                                <p className="text-lg font-medium leading-8 text-foreground mb-6">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <div className="flex items-center gap-x-4">
                                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-xs font-bold">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                                        <p className="text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    )
}
