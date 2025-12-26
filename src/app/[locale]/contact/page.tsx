"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ContactPage() {
    const t = useTranslations('ContactPage');

    return (
        <div className="pt-40 md:pt-48 pb-40 px-6 bg-white min-h-screen">
            <section className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-12 md:space-y-16"
                >
                    <div className="space-y-6">
                        <h2 className="text-xs md:text-sm font-black text-brand-primary tracking-[0.3em] uppercase">{t('subtitle')}</h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
                            {t('title')}
                        </h1>
                    </div>
                    <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        {t.rich('description', {
                            br: () => <br />
                        })}
                    </p>

                    <div className="pt-8 md:pt-12">
                        <Link
                            href={`mailto:${t('email')}`}
                            className="group inline-flex flex-col sm:flex-row items-center gap-6 bg-gray-50 hover:bg-gray-100 p-8 md:p-10 rounded-[32px] md:rounded-[40px] transition-all duration-300 border border-gray-100 hover:border-brand-primary/20 hover:shadow-lg"
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                                <Mail className="w-7 h-7 md:w-8 md:h-8" />
                            </div>
                            <div className="space-y-2 text-center sm:text-left">
                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{t('email_label')}</p>
                                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-gray-900 group-hover:text-brand-primary transition-colors break-all">
                                    {t('email')}
                                </p>
                            </div>
                            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
