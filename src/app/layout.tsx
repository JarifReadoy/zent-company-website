import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ScrollBucket } from "@/components/ui/scroll-bucket";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zent Technologies Ltd. | Enterprise Technology Partner",
  description: "Leading provider of scalable enterprise IT solutions, cloud infrastructure, and cybersecurity services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          outfit.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <ScrollBucket />
          {children}
        </div>
      </body>
    </html>
  );
}
