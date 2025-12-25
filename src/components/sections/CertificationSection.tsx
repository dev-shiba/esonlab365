"use client";

import { Baby, Sprout, ShieldCheck, Ban } from "lucide-react";

export default function CertificationSection() {
    const certifications = [
        {
            icon: Baby,
            title: "영유아 안심 성분",
            desc: "Formulated with Baby-Friendly Ingredients Only"
        },
        {
            icon: Sprout,
            title: "슈퍼푸드 원료 함유",
            desc: "Enriched with Superfood Spirulina Micro-Algae"
        },
        {
            icon: Ban,
            title: "인공색소/향료 무첨가",
            desc: "Free from Artificial Fragrances & Colorants"
        },
        {
            icon: ShieldCheck,
            title: "전성분 그린등급",
            desc: "Formulated without harmful ingredients for sensitive skin"
        }
    ];

    return (
        <section className="py-20 px-6 bg-white border-t border-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {certifications.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center space-y-4"
                        >
                            <div className="w-32 h-32 rounded-full border-[3px] border-black flex items-center justify-center mb-2">
                                <item.icon strokeWidth={1.5} className="w-20 h-20 text-black" />
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-lg md:text-xl font-black text-gray-900 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider max-w-[200px] mx-auto leading-tight">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
