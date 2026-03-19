import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

const navigation = {
    solutions: siteConfig.footerNav.solutions,
    company: siteConfig.footerNav.company,
    legal: siteConfig.footerNav.legal,
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: Facebook,
        },
        {
            name: 'Instagram',
            href: '#',
            icon: Instagram,
        },
        {
            name: 'Twitter',
            href: '#',
            icon: Twitter,
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: Linkedin,
        },
    ],
}

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center font-display text-2xl font-bold tracking-tight text-primary">
                            <Image src="/logo.svg" alt="Zent Technologies Logo" width={44} height={31} className="h-9 w-auto pr-1" />
                            <span>ent<span className="text-foreground">Technologies</span></span>
                        </Link>
                        <p className="text-sm leading-6 text-muted-foreground w-3/4">
                            Empowering enterprises with cutting-edge technology solutions. We build the future of digital infrastructure.
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-5 w-5" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-foreground">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-10 md:mt-0 md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-foreground">Contact</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="flex items-center gap-2 text-sm leading-6 text-muted-foreground">
                                        <MapPin className="h-4 w-4" />
                                        123 Innovation Dr, Tech City
                                    </li>
                                    <li className="flex items-center gap-2 text-sm leading-6 text-muted-foreground">
                                        <Phone className="h-4 w-4" />
                                        +1 (555) 123-4567
                                    </li>
                                    <li className="flex items-center gap-2 text-sm leading-6 text-muted-foreground">
                                        <Mail className="h-4 w-4" />
                                        contact@zenttechnologies.com
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-foreground">Subscribe</h3>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    Latest news and technology updates.
                                </p>
                                <form className="mt-4 sm:flex sm:max-w-md">
                                    <div className="flex gap-2">
                                        <input
                                            type="email"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            required
                                            className="min-w-0 flex-auto rounded-md border-0 bg-background px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            placeholder="Enter your email"
                                        />
                                        <Button type="submit">Subscribe</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-border/50 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-muted-foreground">
                        &copy; {new Date().getFullYear()} Zent Technologies Ltd., Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
