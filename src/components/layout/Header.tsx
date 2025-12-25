"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

import LanguageSwitcher from "../common/LanguageSwitcher";

export default function Header() {
    const pathname = usePathname();
    const t = useTranslations('Navigation');

    const NAV_ITEMS = [
        { name: t('home'), href: "/" },
        { name: t('about'), href: "/about" },
        { name: t('products'), href: "/products" },
        { name: t('contact'), href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="liquid-glass h-16 md:h-20 flex items-center justify-between px-6 md:px-12 rounded-[32px] border border-white/50 shadow-2xl backdrop-blur-3xl bg-white/80">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-32 h-10 md:w-40 md:h-12">
                            <Image
                                src="/logo.png"
                                alt="ESONLAB DAYZ"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    <div className="hidden md:flex gap-10">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-base font-bold tracking-tight transition-all duration-300 relative group",
                                    pathname === item.href ? "text-brand-primary" : "text-black/80 hover:text-brand-primary"
                                )}
                            >
                                {item.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all duration-300",
                                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                                )} />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="https://smartstore.naver.com/esonlab_dayz"
                            target="_blank"
                            className="hidden lg:block text-sm font-bold text-black/60 hover:text-brand-primary transition-colors tracking-tight"
                        >
                            네이버 스토어
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-brand-primary text-white px-7 py-3 rounded-2xl text-xs font-black tracking-[0.1em] shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 hover:-translate-y-0.5 active:scale-95 transition-all"
                        >
                            {t('contact')}
                        </Link>
                        <div className="pl-2 border-l border-gray-200 ml-2">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
