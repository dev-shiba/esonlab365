"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Globe, ShieldCheck } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ContactPage() {
    const t = useTranslations('ContactPage');

    return (
        <div className="pt-32 pb-40 px-6 bg-white min-h-screen">
            <section className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12"
                >
                    <div className="space-y-4">
                        <h2 className="text-base font-black text-brand-primary tracking-[0.4em] uppercase">{t('subtitle')}</h2>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
                            {t('title')}
                        </h1>
                    </div>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        {t.rich('description', {
                            br: () => <br />
                        })}
                    </p>

                    <div className="pt-20">
                        <Link
                            href={`mailto:${t('email')}`}
                            className="group inline-flex items-center gap-6 bg-gray-50 hover:bg-gray-100 p-10 rounded-[40px] transition-all border border-gray-100 hover:border-brand-primary/20"
                        >
                            <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                <Mail className="w-10 h-10" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{t('email_label')}</p>
                                <p className="text-xl md:text-3xl font-black text-gray-900 group-hover:text-brand-primary transition-colors">
                                    {t('email')}
                                </p>
                            </div>
                            <ArrowUpRight className="w-8 h-8 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
