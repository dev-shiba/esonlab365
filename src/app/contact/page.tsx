"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Globe, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-40 px-6 bg-white min-h-screen">
            <section className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-10 max-w-3xl mx-auto" // Added mx-auto to center the motion.div
                >
                    <div className="space-y-4">
                        <h2 className="text-base font-black text-brand-primary tracking-[0.4em] uppercase">비즈니스 협력</h2>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
                            문의하기
                        </h1>
                    </div>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        비즈니스 제휴 및 대량 구매 문의를 기다립니다. <br className="hidden md:block" />
                        이손랩 데이즈와 함께 새로운 성장을 경험하세요.
                    </p>

                    <div className="pt-20">
                        <Link
                            href="mailto:ESONLABDAYZ@GMAIL.COM"
                            className="group inline-flex flex-col items-center gap-6 p-12 md:p-20 rounded-[60px] border border-gray-100 bg-gray-50 hover:bg-brand-secondary hover:border-brand-primary/20 transition-all duration-500 mx-auto"
                        >
                            <div className="w-20 h-20 rounded-[30px] bg-brand-primary text-white flex items-center justify-center shadow-2xl shadow-brand-primary/20 group-hover:scale-110 transition-transform duration-500">
                                <Mail className="w-10 h-10" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">제휴 문의 이메일</p>
                                <p className="text-xl md:text-3xl font-black text-gray-900 group-hover:text-brand-primary transition-colors">
                                    ESONLABDAYZ@GMAIL.COM
                                </p>
                            </div>
                            <ArrowUpRight className="w-8 h-8 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </div>
                </motion.div>

                <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-10 text-left md:text-center">
                    <div className="p-10 rounded-[40px] border border-gray-50 space-y-6 bg-gray-50/50">
                        <Globe className="w-8 h-8 text-brand-primary mx-auto" />
                        <h3 className="text-xl font-black text-gray-900 uppercase">글로벌 수출 문의</h3>
                        <p className="text-gray-500 font-medium leading-relaxed">프리미엄 K-스킨케어에 관심 있는 전 세계 바이어들의 문의를 환영합니다. 필요한 모든 서류와 물류 지원을 제공할 준비가 되어 있습니다.</p>
                    </div>
                    <div className="p-10 rounded-[40px] border border-gray-50 space-y-6 bg-gray-50/50">
                        <ShieldCheck className="w-8 h-8 text-brand-primary mx-auto" />
                        <h3 className="text-xl font-black text-gray-900 uppercase">B2B 파트너십</h3>
                        <p className="text-gray-500 font-medium leading-relaxed">국내 도매 및 유통 기회를 위해 회사 프로필과 희망 채널을 포함하여 문의해 주세요.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
