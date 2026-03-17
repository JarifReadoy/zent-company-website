
import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
    title: "Privacy Policy | Zent Technologies Ltd.",
    description: "Our commitment to protecting your privacy and personal data.",
}

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-16 sm:py-24">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
                        Privacy Policy
                    </h1>
                    <div className="prose prose-lg text-muted-foreground">
                        <p>Last updated: October 25, 2025</p>
                        <p>
                            At Zent Technologies Ltd., we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                        </p>
                        <h2 className="text-foreground mt-8 mb-4 text-xl font-bold">1. Information We Collect</h2>
                        <p>
                            We may collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
                        </p>
                        <h2 className="text-foreground mt-8 mb-4 text-xl font-bold">2. How We Use Your Information</h2>
                        <p>
                            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                        </p>
                        <h2 className="text-foreground mt-8 mb-4 text-xl font-bold">3. Sharing Your Information</h2>
                        <p>
                            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                        </p>
                        <h2 className="text-foreground mt-8 mb-4 text-xl font-bold">4. Contact Us</h2>
                        <p>
                            If you have any questions or concerns about this privacy policy, please contact us at privacy@zenttechnologies.com.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
