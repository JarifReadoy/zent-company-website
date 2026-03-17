export interface NavItem {
    name: string
    href: string
}

export interface SiteConfig {
    name: string
    description: string
    mainNav: NavItem[]
    footerNav: {
        solutions: NavItem[]
        company: NavItem[]
        legal: NavItem[]
    }
}
