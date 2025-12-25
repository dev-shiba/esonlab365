"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative min-h-[85vh] lg:h-[90vh] flex items-center pt-32 pb-24 px-6 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 relative z-10 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block liquid-glass textured-grain px-8 py-10 md:px-16 md:py-14 rounded-2xl shadow-2xl space-y-4"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-base md:text-lg font-extrabold text-brand-primary tracking-widest mb-1"
                    >
                        이손랩 데이즈
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-gray-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
                    >
                        피부 회복을 넘어선 <br />
                        <span className="text-gradient drop-shadow-[0_2px_15px_rgba(37,99,235,0.4)]">광채수분크림</span>
                    </motion.h1>
                </motion.div>
            </div>
        </section>
    );
}
