"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Leaf, ShieldCheck, Globe, Zap, Droplet } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations('AboutPage');

    return (
        <div className="pt-32 pb-40 px-6 bg-white min-h-screen">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-40 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-brand-primary tracking-widest uppercase">브랜드 철학</h2>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-black text-gray-900 leading-[1] tracking-tighter uppercase p-4">
                            케어, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">그 본질을 다시 생각하다.</span>
                        </h1>
                    </div>
                    <p className="text-lg md:text-xl text-gray-500 font-medium leading-tight max-w-3xl mx-auto">
                        우리는 이미 충분히 복잡한 세상에 살고 있습니다. <br />
                        당신의 스킨케어만큼은 단순하고 명확해야 합니다.
                    </p>
                </motion.div>
            </section>

            {/* Brand Story Section */}
            <section className="max-w-7xl mx-auto pb-40">
                <div className="text-center space-y-12 bg-gray-50/50 p-16 md:p-24 rounded-[60px] border border-brand-primary/5">
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-black text-brand-primary uppercase tracking-[0.2em]">{t('title')}</h3>
                        <div className="w-12 h-1 bg-brand-accent mx-auto"></div>
                    </div>

                    <div className="space-y-8 text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-4xl mx-auto">
                        <p>{t.rich('content_1', { br: () => <br /> })}</p>
                        <p>{t.rich('content_2', { br: () => <br /> })}</p>
                    </div>

                    <div className="pt-8 space-y-2">
                        <p className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                            {t.rich('content_3', { br: () => <br /> })}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
