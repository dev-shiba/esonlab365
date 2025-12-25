"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Zap, Droplet, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <div className="pt-32 pb-40 px-6 bg-white min-h-screen">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-40 text-center">
                <div className="flex flex-col items-center gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-10 max-w-3xl"
                    >
                        <div className="space-y-4">
                            <h2 className="text-base font-black text-brand-primary tracking-[0.4em] uppercase">비즈니스 협력</h2>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1] tracking-tighter uppercase">
                                스피룰365 <br />
                                <span className="text-brand-primary">그린 하이드로-락</span>
                            </h1>
                        </div>

                        <div className="space-y-6 text-lg text-gray-500 font-medium">
                            <p className="text-2xl text-gray-900 font-black">스피룰365 그린 수분 크림</p>
                            <ul className="space-y-3 max-w-lg mx-auto text-left">
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-brand-primary mt-1 shrink-0" />
                                    <span>쌀겨수 67% + 스피룰리나 (Micro algae)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-brand-primary mt-1 shrink-0" />
                                    <span>민감성 피부 적합 / 수분 개선 / 피부 컨디션 개선 / 저자극 테스트 완료</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-brand-primary mt-1 shrink-0" />
                                    <span>7 FREE (파라벤, 인공향료, 인공색소 등 유해성분 배제)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-brand-primary mt-1 shrink-0" />
                                    <span>하얀 색소를 넣지 않았습니다. 자연 그대로의 싱그러움을 느껴보세요.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <Link
                                href="https://smartstore.naver.com/esonlab_dayz?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn3XJBlQ_CU08fsk9FpeH-34YU0iDGnywbb8dFRnjbTHFuHKjwMCSV2dOBBQc_aem_NEdiIGnKpfwpoqamalAR5g"
                                target="_blank"
                                className="bg-[#2DB400] text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:scale-[1.05] transition-all"
                            >
                                네이버 스마트 스토어 <ArrowUpRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://www.coupang.com/vp/products/9212950703?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnP68ymiW01fSy18AvuM2o--Wvq9X6st4QtX-ne5c3UZySmijSlFVhs0RS7kQ_aem_kodkOKmYDqRUVFixnL0sXg"
                                target="_blank"
                                className="bg-[#0074E9] text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:scale-[1.05] transition-all"
                            >
                                쿠팡 <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative w-full aspect-square max-w-2xl bg-gray-50 rounded-[60px] overflow-hidden group mx-auto"
                    >
                        <Image
                            src="/product_box_45.png"
                            alt="SPIRUL365 Cream Package"
                            fill
                            className="object-contain p-20 group-hover:scale-110 transition-transform duration-700"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Asset Showcase */}
            <section className="max-w-7xl mx-auto space-y-20">
                <h2 className="text-center text-4xl font-black text-gray-900 tracking-tight">상세 비주얼</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="aspect-[3/4] rounded-[40px] bg-gray-50 relative overflow-hidden">
                        <Image src="/product_tube_open.png" alt="Tube Open" fill className="object-contain p-12" />
                    </div>
                    <div className="aspect-[3/4] rounded-[40px] bg-gray-100 relative overflow-hidden flex items-center justify-center">
                        <Image src="/ad_material_2.png" alt="Ad Material 2" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10 text-white text-center p-8">
                            <p className="text-xs font-black tracking-widest mb-2">HYDRATION</p>
                            <p className="text-2xl font-black">67% 쌀겨수 베이스</p>
                        </div>
                    </div>
                    <div className="aspect-[3/4] rounded-[40px] bg-gray-50 relative overflow-hidden">
                        <Image src="/product_box_front.png" alt="Box Front" fill className="object-contain p-12" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="aspect-video rounded-[40px] bg-gray-50 relative overflow-hidden">
                        <Image src="/ad_material_3.png" alt="Ad Material 3" fill className="object-cover" />
                    </div>
                    <div className="aspect-video rounded-[40px] bg-gray-50 relative overflow-hidden">
                        <Image src="/ad_material_4.png" alt="Ad Material 4" fill className="object-cover" />
                    </div>
                </div>
            </section>
        </div>
    );
}
