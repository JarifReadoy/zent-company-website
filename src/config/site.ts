import { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
    name: "Zent Technologies",
    description: "Leading provider of scalable enterprise IT solutions, cloud infrastructure, and cybersecurity services.",
    mainNav: [
        { name: "Services", href: "/services" },
        { name: "Products", href: "/products" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],
    footerNav: {
        solutions: [
            { name: 'Cloud Infrastructure', href: '/products/zent-cloud-suite' },
            { name: 'Cybersecurity', href: '/products/secureguard-pro' },
            { name: 'Software Development', href: '/services' },
            { name: 'Data Analytics', href: '/products/dataflow-analytics' },
        ],
        company: [
            { name: 'About', href: '/about' },
            { name: 'Careers', href: '/careers' },
            { name: 'Blog', href: '/blog' },
            { name: 'Portfolio', href: '/portfolio' },
        ],
        legal: [
            { name: 'Privacy', href: '/privacy' },
            { name: 'Terms', href: '/terms' },
            { name: 'Cookie Policy', href: '#' },
        ],
    },
}
