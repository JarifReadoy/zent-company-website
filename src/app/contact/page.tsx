import { Metadata } from "next"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Contact Us | Zent Technologies Ltd.",
    description: "Get in touch with Zent Technologies Ltd. for inquiries, support, or to schedule a consultation.",
}

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section className="relative bg-muted/20 py-20 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl">
                            Get in Touch
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                            Have a project in mind or need technical support?
                            Our team is ready to assist you.
                        </p>
                    </div>
                </section>

                <Section>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
                        {/* Contact Info */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-foreground">Contact Information</h2>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    Reach out to us directly or fill out the form. We typically respond within 24 hours.
                                </p>
                            </div>

                            <dl className="space-y-6 text-base leading-7 text-muted-foreground">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Address</span>
                                        <MapPin className="h-7 w-6 text-primary" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        123 Innovation Dr<br />
                                        Tech City, TC 90210
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Telephone</span>
                                        <Phone className="h-7 w-6 text-primary" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-foreground" href="tel:+1 (555) 123-4567">
                                            +1 (555) 123-4567
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <Mail className="h-7 w-6 text-primary" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-foreground" href="mailto:contact@zenttechnologies.com">
                                            contact@zenttechnologies.com
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        {/* Contact Form */}
                        <form action="#" method="POST" className="rounded-2xl border bg-card p-8 shadow-sm">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-foreground">Name</label>
                                    <div className="mt-2.5">
                                        <input type="text" name="name" id="name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-background" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">Email</label>
                                    <div className="mt-2.5">
                                        <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-background" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">Message</label>
                                    <div className="mt-2.5">
                                        <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-background"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <Button type="submit" size="lg" className="w-full sm:w-auto">
                                    Send Message <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    )
}
