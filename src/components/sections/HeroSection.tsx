"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HeroSection() {
    const t = useTranslations('HomePage');

    return (
        <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-blue-50/20 via-white to-blue-50/10">
            {/* Wavy Lines Background */}
            <div className="absolute inset-0 z-0">
                {/* Wavy Line 1 */}
                <svg className="absolute top-0 left-0 w-full h-full opacity-15" viewBox="0 0 1440 800" preserveAspectRatio="none">
                    <path
                        className="animate-wave-path-1"
                        d="M0,400 Q360,300 720,400 T1440,400"
                        stroke="rgb(59, 130, 246)"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>

                {/* Wavy Line 2 */}
                <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1440 800" preserveAspectRatio="none">
                    <path
                        className="animate-wave-path-2"
                        d="M0,300 Q360,200 720,300 T1440,300"
                        stroke="rgb(96, 165, 250)"
                        strokeWidth="1.5"
                        fill="none"
                    />
                </svg>

                {/* Wavy Line 3 */}
                <svg className="absolute top-0 left-0 w-full h-full opacity-8" viewBox="0 0 1440 800" preserveAspectRatio="none">
                    <path
                        className="animate-wave-path-3"
                        d="M0,500 Q360,600 720,500 T1440,500"
                        stroke="rgb(147, 197, 253)"
                        strokeWidth="1.5"
                        fill="none"
                    />
                </svg>

                {/* Floating bubble elements */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 15, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-blue-100/20 to-transparent blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 25, 0],
                        x: [0, -20, 0],
                        scale: [1, 1.08, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-50/25 to-transparent blur-3xl"
                />
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8"
                >
                    {/* Brand Tag */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block"
                    >
                        <span className="text-xs font-black text-brand-primary tracking-[0.3em] uppercase">
                            SKINCARE BRAND
                        </span>
                    </motion.div>

                    {/* Brand Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1]"
                    >
                        {t('hero_title')}
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 leading-relaxed max-w-3xl mx-auto"
                    >
                        {t.rich('hero_copy', {
                            br: () => <br />,
                            highlight: (chunks) => <span className="font-bold text-brand-primary">{chunks}</span>
                        })}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
