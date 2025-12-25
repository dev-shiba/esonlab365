"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  { code: "ko", label: "한국어", short: "KOR", flag: "🇰🇷" },
  { code: "en", label: "English", short: "ENG", flag: "🇺🇸" },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    router.replace(pathname, { locale: newLocale });
  };

  const currentLang = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  return (
    <div ref={containerRef} className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-black/5 transition-colors"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-sm font-bold tracking-tight text-gray-700">
          {currentLang.short}
        </span>
        <Globe className="w-3.5 h-3.5 text-gray-400 opacity-0 md:opacity-100" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-36 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2"
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors",
                  locale === lang.code ? "text-brand-primary" : "text-gray-600"
                )}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{lang.flag}</span>
                  {lang.label}
                </span>
                {locale === lang.code && <Check className="w-3.5 h-3.5" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
