"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ReviewsSection() {
    const REVIEWS = [
        { tag: "민감성", text: "민감 피부도 자극 전혀 없어요! 벌써 세 통째 쓰고 있습니다.", author: "김**님", emoji: "🧖‍♀️", span: "col-span-12 md:col-span-4" },
        { tag: "속건조", text: "속건조랑 당김이 싹 사라졌습니다. 밤에 바르고 자면 다음 날 광나요.", author: "이**님", emoji: "✨", span: "col-span-12 md:col-span-8" },
        { tag: "흡수력", text: "겉돌지 않고 빨리 흡수돼서 바쁜 아침에도 문제없어요.", author: "박**님", emoji: "💧", span: "col-span-12 md:col-span-8" },
        { tag: "무향", text: "인공향이 없어 부담 없이 데일리로 씁니다. 쌀겨향이 은근 매력적이에요.", author: "제**님", emoji: "🍚", span: "col-span-12 md:col-span-4" },
    ];

    return (
        <section id="리얼리뷰" className="py-40 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-32"
                >
                    <div className="space-y-6 max-w-2xl text-center lg:text-left">
                        <h2 className="text-lg font-bold text-brand-primary tracking-widest uppercase">사용자 후기</h2>
                        <p className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tighter">
                            이미 수천 명이 <br />
                            이손랩 데이즈를 경험했습니다
                        </p>
                    </div>
                    <div className="flex items-center gap-4 pb-4">
                        <div className="text-right">
                            <div className="text-2xl font-black text-gray-900">4.9 / 5.0</div>
                            <div className="text-xs font-bold text-gray-300">총 구매 만족도</div>
                        </div>
                    </div>
                </motion.div>

                <div className="bento-container auto-rows-[280px]">
                    {REVIEWS.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={cn(
                                "liquid-pop textured-grain p-10 rounded-[48px] flex flex-col justify-between group",
                                item.span
                            )}
                        >
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-2xl bg-brand-secondary flex items-center justify-center text-2xl shadow-inner">
                                    {item.emoji}
                                </div>
                                <p className="text-lg font-bold leading-relaxed text-gray-800 tracking-tight">"{item.text}"</p>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                                <span className="text-[11px] font-black text-brand-accent bg-brand-secondary px-4 py-1.5 rounded-full uppercase tracking-widest">#{item.tag}</span>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-50" />
                                    <span className="text-xs text-gray-400 font-black uppercase">{item.author}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
