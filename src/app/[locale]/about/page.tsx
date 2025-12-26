"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations('AboutPage');

    return (
        <div className="pt-40 md:pt-48 pb-40 px-6 bg-white min-h-screen">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-32 md:mb-40">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-8"
                >
                    <div className="space-y-6">
                        <h2 className="text-xs md:text-sm font-black text-brand-primary tracking-[0.3em] uppercase">{t('subtitle')}</h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
                            {t('hero_title_line1')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">{t('hero_title_line2')}</span>
                        </h1>
                    </div>
                    <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
                        {t.rich('hero_description', {
                            br: () => <br />
                        })}
                    </p>
                </motion.div>
            </section>

            {/* Brand Story Section */}
            <section className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-12 bg-gray-50/50 p-12 md:p-20 lg:p-24 rounded-[48px] md:rounded-[60px] border border-gray-100"
                >
                    <div className="space-y-4">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-black text-brand-primary uppercase tracking-[0.2em]">{t('title')}</h3>
                        <div className="w-12 h-1 bg-brand-accent mx-auto"></div>
                    </div>

                    <div className="space-y-6 md:space-y-8 text-base md:text-lg lg:text-xl text-gray-600 font-medium leading-relaxed max-w-4xl mx-auto">
                        <p>{t.rich('content_1', { br: () => <br /> })}</p>
                        <p>{t.rich('content_2', { br: () => <br /> })}</p>
                    </div>

                    <div className="pt-6 md:pt-8">
                        <p className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 leading-tight">
                            {t.rich('content_3', { br: () => <br /> })}
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
