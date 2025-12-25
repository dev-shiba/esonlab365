"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Leaf, ShieldCheck, Globe, Zap, Droplet } from "lucide-react";

export default function AboutPage() {
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
                        <h3 className="text-xl md:text-2xl font-black text-brand-primary uppercase tracking-[0.2em]">Care, Reconsidered. DAYZ</h3>
                        <div className="w-12 h-1 bg-brand-accent mx-auto"></div>
                    </div>

                    <div className="space-y-8 text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-4xl mx-auto">
                        <p>이손랩 데이즈는 기존의 스킨케어 공식을 넘어, <br className="hidden md:block" /> 더 나은 솔루션을 제안하는 브랜드입니다.</p>
                        <p>우리는 한국의 원료를 기반으로 하며 동시에 새로운 원료를 찾아 <br className="hidden md:block" /> 함께 배합하여 새로운 방향을 제시합니다. 그 첫 시작은 스피룰리나입니다.</p>
                    </div>

                    <div className="pt-8 space-y-2">
                        <p className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                            매일매일 검증된 효능과 안전성 위에 <br />
                            하나하나, 확실하게 만들어 갑니다
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
