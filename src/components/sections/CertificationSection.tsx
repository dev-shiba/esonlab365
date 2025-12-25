"use client";

import { Baby, Sprout, ShieldCheck, Ban } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CertificationSection() {
    const t = useTranslations('HomePage');
    const certifications = t.raw('certifications') as Array<{
        title: string;
        desc: string;
    }>;

    const icons = [Baby, Sprout, Ban, ShieldCheck];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {certifications.map((item, idx) => {
                    const Icon = icons[idx];
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="flex flex-col items-center text-center space-y-5"
                        >
                            <div className="relative w-36 h-36 md:w-40 md:h-40 flex items-center justify-center">
                                {/* 회전하는 원형 텍스트 - 모바일 */}
                                <svg
                                    className="absolute inset-0 w-full h-full animate-spin-slow md:hidden"
                                    viewBox="0 0 144 144"
                                    style={{ animationDuration: '20s' }}
                                >
                                    <defs>
                                        <path
                                            id={`circle-path-mobile-${idx}`}
                                            d="M 72,72 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                                        />
                                    </defs>
                                    <text className="fill-gray-500 text-[6px] font-medium uppercase tracking-wider">
                                        <textPath
                                            href={`#circle-path-mobile-${idx}`}
                                            startOffset="0%"
                                        >
                                            {item.desc} • {item.desc} • {item.desc} • {item.desc} •
                                        </textPath>
                                    </text>
                                </svg>

                                {/* 회전하는 원형 텍스트 - 데스크톱 */}
                                <svg
                                    className="hidden md:block absolute inset-0 w-full h-full animate-spin-slow"
                                    viewBox="0 0 160 160"
                                    style={{ animationDuration: '20s' }}
                                >
                                    <defs>
                                        <path
                                            id={`circle-path-desktop-${idx}`}
                                            d="M 80,80 m -58,0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
                                        />
                                    </defs>
                                    <text className="fill-gray-500 text-[7px] font-medium uppercase tracking-wider">
                                        <textPath
                                            href={`#circle-path-desktop-${idx}`}
                                            startOffset="0%"
                                        >
                                            {item.desc} • {item.desc} • {item.desc} • {item.desc} •
                                        </textPath>
                                    </text>
                                </svg>

                                {/* 아이콘 컨테이너 */}
                                <div className="relative z-10">
                                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-white via-gray-50 to-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                                        <Icon strokeWidth={1.5} className="w-12 h-12 md:w-14 md:h-14 text-gray-800" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-base md:text-lg font-black text-gray-900 leading-tight tracking-tight">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
