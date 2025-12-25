"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const FAQS = [
        { q: "정말 실리콘이 들어가지 않았나요?", a: "네, 이손랩 데이즈는 실리콘 성분을 일절 사용하지 않고도 탱글한 푸딩 제형을 구현했습니다. 덕분에 모공 막힘 걱정 없이 예민한 피부도 편안하게 사용 가능합니다." },
        { q: "제형의 초록색은 인공 색소인가요?", a: "아니요. 고농축 스피룰리나 성분 본연의 색상입니다. 시간이 지남에 따라 자연스럽게 색상이 연해질 수 있으나 효능에는 지장이 없습니다." },
        { q: "향이 없는데 어떤 냄새가 나나요?", a: "인공 향료를 전혀 넣지 않았습니다. 베이스로 사용된 쌀겨수의 은은하고 구수한 곡물 본연의 향을 느끼실 수 있습니다." },
        { q: "영유아가 사용해도 안전한가요?", a: "네, 민감하고 여린 피부를 가진 아이들도 안심하고 사용할 수 있도록 자극 테스트를 거쳐 처방되었습니다." },
    ];

    return (
        <section id="FAQ" className="py-40 px-6 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,rgba(45,90,71,0.2)_0%,transparent_50%)]" />
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-32 space-y-6"
                >
                    <h2 className="text-lg font-bold text-brand-accent tracking-widest uppercase">자료 기반 정보</h2>
                    <p className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight">궁금해 하시는 모든 것</p>
                </motion.div>

                <div className="space-y-6">
                    {FAQS.map((faq, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden transition-all hover:bg-white/10">
                            <button
                                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                className="w-full px-10 py-8 flex items-center justify-between text-left group"
                            >
                                <span className="text-lg font-bold group-hover:text-brand-accent transition-colors">{faq.q}</span>
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                                    {activeFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeFaq === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-10 pb-10 text-brand-secondary/60 font-medium leading-relaxed"
                                    >
                                        {faq.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
