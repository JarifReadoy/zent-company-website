"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ScrollBucket() {
    const { scrollY, scrollYProgress } = useScroll()
    const [isScrollingActive, setIsScrollingActive] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    // Smoothly interpolate raw scroll progress using a spring physics curve
    const smoothScrollProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    // Map the smoothed 0-1 progress into a CSS height percentage for the water fill
    const waterFillHeight = useTransform(smoothScrollProgress, [0, 1], ["0%", "100%"])

    useEffect(() => {
        setIsMounted(true)
        let inactivityTimer: NodeJS.Timeout

        // Show the bucket while scrolling; hide it 1s after scroll stops
        const unsubscribeScrollListener = scrollY.on("change", () => {
            setIsScrollingActive(true)
            clearTimeout(inactivityTimer)
            inactivityTimer = setTimeout(() => setIsScrollingActive(false), 1000)
        })

        return () => {
            unsubscribeScrollListener()
            clearTimeout(inactivityTimer)
        }
    }, [scrollY])

    // Prevent hydration mismatch by not rendering on the server
    if (!isMounted) return null

    return (
        <div
            className={cn(
                "fixed bottom-8 right-8 z-[100] transition-opacity duration-500 pointer-events-none flex flex-col items-center",
                isScrollingActive ? "opacity-100" : "opacity-0"
            )}
        >
            {/* Faucet SVG Icon */}
            <div className="relative w-14 h-14 -ml-4 flex justify-center items-end text-primary/90">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full drop-shadow-sm -scale-x-100"
                    aria-hidden="true"
                >
                    {/* Pipe body curving into the spout */}
                    <path d="M4 12h10a4 4 0 0 1 4 4v2" />
                    {/* Spout rim */}
                    <path d="M15 18h6" />
                    {/* Valve body */}
                    <rect x="7" y="9" width="6" height="8" rx="2" />
                    {/* Valve stem */}
                    <path d="M10 9V5" />
                    {/* Valve handle */}
                    <path d="M6 5h8" />
                </svg>
            </div>

            {/* Animated Water Stream Falling from Spout */}
            <div className="relative w-1.5 h-4 bg-secondary/80 blur-[0.5px] rounded-full overflow-hidden shadow-[0_0_10px_rgba(133,209,200,0.6)] ml-[-42px] mt-[-6px] z-10">
                <motion.div
                    className="w-full h-full bg-white/40"
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 0.3 }}
                />
            </div>

            {/* Bucket Body */}
            <div className="relative w-12 h-14 border-x-4 border-b-4 border-primary/80 rounded-b-lg overflow-hidden backdrop-blur-sm bg-black/10 mt-[-4px] ml-[-42px]">

                {/* Bucket Carry Handle (above bucket, outside overflow boundary) */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-6 border-t-2 border-x-2 border-primary/80 rounded-t-full pointer-events-none" />

                {/* Rising Water Fill — height is driven by scroll progress */}
                <motion.div
                    className="absolute bottom-0 left-0 w-full bg-secondary"
                    style={{
                        height: waterFillHeight,
                        boxShadow: "inset 0 4px 6px rgba(255,255,255,0.3), 0 0 15px rgba(133,209,200,0.6)",
                    }}
                >
                    {/* Wave animation on water surface — CSS defined in globals.css */}
                    <div className="absolute -top-1 left-0 w-[200%] h-2 flex animate-wave">
                        <div className="w-1/2 h-full bg-[radial-gradient(ellipse_at_top,_transparent_50%,_#85d1c8_51%)] bg-[size:16px_4px] bg-repeat-x" />
                        <div className="w-1/2 h-full bg-[radial-gradient(ellipse_at_top,_transparent_50%,_#85d1c8_51%)] bg-[size:16px_4px] bg-repeat-x" />
                    </div>
                    {/* Thin highlight at water surface edge */}
                    <div className="absolute top-[1px] left-0 w-full h-[1px] bg-white/40" />
                </motion.div>

                {/* Left-side light reflection on bucket wall */}
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/20 to-transparent pointer-events-none" />
            </div>
        </div>
    )
}
