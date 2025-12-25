"use client";

import { Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-24 px-6 border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-16">
                    <div className="space-y-8">
                        <div className="flex items-center gap-2">
                            <div className="relative w-32 h-10">
                                <Image
                                    src="/logo.png"
                                    alt="ESONLAB DAYZ"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="max-w-sm text-gray-400 font-medium leading-relaxed">
                            케어, 그 본질을 다시 생각하다. <br />
                            기존의 스킨케어가 끝나는 곳에서 데이즈가 시작됩니다.
                        </p>
                        <div className="space-y-2 text-[11px] font-bold text-gray-400 uppercase tracking-tighter">
                            <p>주소: 경남 통영시 노산4길 39-33, 2층</p>
                            <p>회사: 주식회사 이손랩 | 이메일: ESONLABDAYZ@GMAIL.COM</p>
                            <p>고객센터: 070-1234-5678 (10:00 - 17:00, 주말 및 공휴일 제외)</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-16">
                        <div className="space-y-6">
                            <h4 className="text-base font-black text-gray-900 uppercase tracking-[0.2em]">브랜드</h4>
                            <ul className="space-y-4">
                                <li><Link href="/about" className="text-base font-bold text-gray-400 hover:text-brand-primary transition-colors">브랜드</Link></li>
                                <li><Link href="/products" className="text-base font-bold text-gray-400 hover:text-brand-primary transition-colors">제품</Link></li>
                                <li><Link href="/contact" className="text-base font-bold text-gray-400 hover:text-brand-primary transition-colors">문의</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-base font-black text-gray-900 uppercase tracking-[0.2em]">쇼핑</h4>
                            <ul className="space-y-4">
                                <li><Link href="https://smartstore.naver.com/esonlab_dayz" target="_blank" className="text-base font-bold text-gray-400 hover:text-brand-primary transition-colors">네이버 스토어</Link></li>
                                <li><Link href="https://www.coupang.com/vp/products/9212950703" target="_blank" className="text-base font-bold text-gray-400 hover:text-brand-primary transition-colors">쿠팡</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-8 text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
                        <Link href="#" className="hover:text-gray-900 transition-colors">개인정보처리방침</Link>
                        <Link href="#" className="hover:text-gray-900 transition-colors">이용약관</Link>
                    </div>
                    <div className="text-[10px] font-black text-gray-200 uppercase tracking-[0.2em]">
                        © 2026 ESONLAB DAYZ. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
