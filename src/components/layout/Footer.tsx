"use client";

import { Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations('Footer');
    const navT = useTranslations('Navigation');

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
                            {t.rich('tagline', {
                                br: () => <br />
                            })}
                        </p>
                        <div className="space-y-2 text-[11px] font-bold text-gray-400 uppercase tracking-tighter">
                            <p>{t('address')}</p>
                            <p>{t('company')}</p>
                            <p>{t('customer_center')}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-16">
                        <div className="space-y-6">
                            <h4 className="text-base font-black text-gray-900 uppercase tracking-[0.2em]">{t('brand_menu')}</h4>
                            <ul className="space-y-4">
                                <li><Link href="/about" className="text-base font-bold text-gray-400 hover:text-brand-primary transition-colors">{navT('about')}</Link></li>
                                <li><Link href="/products" className="text-base font-bold text-gray-400 hover:text-brand-primary transition-colors">{navT('products')}</Link></li>
                                <li><Link href="/contact" className="text-base font-bold text-gray-400 hover:text-brand-primary transition-colors">{navT('contact')}</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-base font-black text-gray-900 uppercase tracking-[0.2em]">{t('shopping_menu')}</h4>
                            <ul className="space-y-4">
                                <li><Link href="https://smartstore.naver.com/esonlab_dayz" target="_blank" className="text-base font-bold text-gray-400 hover:text-brand-primary transition-colors">{t('naver_store')}</Link></li>
                                <li><Link href="https://www.coupang.com/vp/products/9212950703" target="_blank" className="text-base font-bold text-gray-400 hover:text-brand-primary transition-colors">{t('coupang')}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-8 text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
                        <Link href="#" className="hover:text-gray-900 transition-colors">{t('privacy')}</Link>
                        <Link href="#" className="hover:text-gray-900 transition-colors">{t('terms')}</Link>
                    </div>
                    <div className="text-[10px] font-black text-gray-200 uppercase tracking-[0.2em]">
                        © 2026 ESONLAB DAYZ. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
