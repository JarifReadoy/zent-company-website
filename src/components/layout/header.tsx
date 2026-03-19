"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

const navigation = siteConfig.mainNav

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    return (
        <>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center font-display text-2xl font-bold tracking-tight text-primary">
                        <Image src="/logo.svg" alt="Zent Technologies Logo" width={40} height={28} className="h-8 w-auto pr-1" priority />
                        <span>ent<span className="text-foreground">Technologies</span></span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button asChild>
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </nav>
        </header>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-50 lg:hidden block">
                        {/* Overlay Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-background/50 backdrop-blur-sm"
                        />
                        
                        {/* Side Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-background px-6 py-6 shadow-2xl flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-l"
                        >
                            <div className="flex items-center justify-between shrink-0">
                                <Link href="/" className="-m-1.5 p-1.5 flex items-center font-display text-2xl font-bold tracking-tight text-primary" onClick={() => setMobileMenuOpen(false)}>
                                    <Image src="/logo.svg" alt="Zent Technologies Logo" width={40} height={28} className="h-8 w-auto pr-1" priority />
                                    <span>ent<span className="text-foreground">Technologies</span></span>
                                </Link>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-muted-foreground hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <X className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            
                            <div className="mt-8 flex flex-col flex-1">
                                <div className="flex flex-col space-y-2">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block rounded-lg px-3 py-3 text-lg font-semibold leading-7 text-foreground hover:bg-muted transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-auto pt-8 pb-4">
                                    <Button size="lg" asChild className="w-full justify-center">
                                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                            Get in Touch <ChevronRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
