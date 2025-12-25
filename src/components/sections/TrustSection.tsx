"use client";

import { motion } from "framer-motion";

export default function TrustSection() {
    return (
        <section className="py-40 px-6 relative bg-white overflow-hidden border-y border-gray-50">
            <div className="max-w-7xl mx-auto text-center space-y-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-lg font-bold text-brand-primary tracking-widest uppercase"
                >
                    전문 파트너
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight"
                >
                    우리는 오직 진정으로 <br /> 효과적인 것만을 만듭니다
                </motion.h2>
                <p className="text-xl text-gray-400 font-bold">
                    독특한 원료 배합과 효과적인 제품만을 선보입니다
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-20">
                    {["바이오테크", "자연 연구소", "한국 케어", "글로벌 바이오"].map((partner) => (
                        <div key={partner} className="h-24 bg-gray-50 rounded-3xl flex items-center justify-center text-gray-300 font-black text-sm tracking-widest border border-gray-100 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 cursor-default">
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
