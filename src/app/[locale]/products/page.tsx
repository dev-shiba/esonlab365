"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ProductsPage() {
    const t = useTranslations('ProductsPage');

    return (
        <div className="pt-40 md:pt-48 pb-40 px-6 bg-white min-h-screen">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-32 md:mb-40">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-20 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-8 md:space-y-10 max-w-2xl lg:max-w-none"
                    >
                        <div className="space-y-6 md:space-y-8">
                            <h2 className="text-xs md:text-sm font-bold text-brand-primary tracking-[0.3em] uppercase">{t('subtitle')}</h2>
                            <div className="space-y-3 md:space-y-4">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
                                    {t('product_title_line1')}
                                </h1>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-primary leading-[1.1] tracking-tight">
                                    {t('product_title_line2')}
                                </h1>
                            </div>
                            <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-black pt-2">
                                {t('name')}
                            </p>
                        </div>

                        <div className="space-y-4 md:space-y-5 pt-4">
                            {(t.raw('features') as string[]).map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 + 0.3 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="shrink-0 mt-0.5">
                                        <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" strokeWidth={2.5} />
                                    </div>
                                    <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed flex-1">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3 md:gap-4 pt-6">
                            <Link
                                href="https://smartstore.naver.com/esonlab_dayz?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn3XJBlQ_CU08fsk9FpeH-34YU0iDGnywbb8dFRnjbTHFuHKjwMCSV2dOBBQc_aem_NEdiIGnKpfwpoqamalAR5g"
                                target="_blank"
                                className="bg-[#2DB400] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black flex items-center gap-2 hover:scale-[1.05] transition-all text-base md:text-lg shadow-lg hover:shadow-xl"
                            >
                                {t('buy_naver')} <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                            </Link>
                            <Link
                                href="https://www.coupang.com/vp/products/9212950703?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnP68ymiW01fSy18AvuM2o--Wvq9X6st4QtX-ne5c3UZySmijSlFVhs0RS7kQ_aem_kodkOKmYDqRUVFixnL0sXg"
                                target="_blank"
                                className="bg-[#0074E9] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black flex items-center gap-2 hover:scale-[1.05] transition-all text-base md:text-lg shadow-lg hover:shadow-xl"
                            >
                                {t('buy_coupang')} <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative w-full aspect-square max-w-4xl lg:max-w-5xl xl:max-w-6xl bg-gray-50 rounded-[48px] md:rounded-[60px] overflow-hidden"
                    >
                        <Image
                            src="/product_hero.webp"
                            alt="SPIRUL365 Cream Package"
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Asset Showcase */}
            <section className="max-w-7xl mx-auto space-y-16 md:space-y-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-3xl md:text-4xl font-black text-gray-900 tracking-tight"
                >
                    {t('visual_title')}
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {[
                        { src: "/product_tube_open.png", alt: "Tube Open", bg: "bg-gray-50" },
                        { src: "/ad_material_2.png", alt: "Ad Material 2", bg: "bg-gray-100", overlay: true },
                        { src: "/product_box_front.png", alt: "Box Front", bg: "bg-gray-50" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`aspect-3/4 rounded-[32px] md:rounded-[40px] ${item.bg} relative overflow-hidden ${item.overlay ? 'flex items-center justify-center' : ''}`}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className={item.overlay ? "object-cover" : "object-contain p-8 md:p-12"}
                            />
                            {item.overlay && (
                                <>
                                    <div className="absolute inset-0 bg-black/10"></div>
                                    <div className="relative z-10 text-white text-center p-6 md:p-8">
                                        <p className="text-xs font-black tracking-widest mb-2">HYDRATION</p>
                                        <p className="text-xl md:text-2xl font-black">{t('visual_hydration')}</p>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {[
                        { src: "/ad_material_3.png", alt: "Ad Material 3" },
                        { src: "/ad_material_4.png", alt: "Ad Material 4" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="rounded-[32px] md:rounded-[40px] bg-gray-50 overflow-hidden w-full"
                        >
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-contain p-4 md:p-6"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
