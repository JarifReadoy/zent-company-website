
import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
    title: "Terms of Service | Zent Technologies Ltd.",
    description: "Terms and conditions for using Zent Technologies Ltd. services.",
}

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-16 sm:py-24">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
                        Terms of Service
                    </h1>
                    <div className="prose prose-lg text-muted-foreground">
                        <p>Last updated: October 25, 2025</p>
                        <p>
                            Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the Zent Technologies Ltd. website operated by us.
                        </p>
                        <h2 className="text-foreground mt-8 mb-4 text-xl font-bold">1. Conditions of Use</h2>
                        <p>
                            By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly.
                        </p>
                        <h2 className="text-foreground mt-8 mb-4 text-xl font-bold">2. Intellectual Property</h2>
                        <p>
                            You agree that all materials, products, and services provided on this website are the property of Zent Technologies Ltd., its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property.
                        </p>
                        <h2 className="text-foreground mt-8 mb-4 text-xl font-bold">3. User Accounts</h2>
                        <p>
                            As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information.
                        </p>
                        <h2 className="text-foreground mt-8 mb-4 text-xl font-bold">4. Applicable Law</h2>
                        <p>
                            By visiting this website, you agree that the laws of our jurisdiction, without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between Zent Technologies Ltd. and you.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
