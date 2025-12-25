"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Droplet,
  Sparkles,
  Leaf,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  Maximize2
} from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

import HeroSection from "@/components/sections/HeroSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";

import { useTranslations } from "next-intl";
import CertificationSection from "@/components/sections/CertificationSection";

export default function Home() {
  const t = useTranslations('HomePage');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scrollTopOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white font-sans selection:bg-brand-secondary selection:text-brand-primary">

      <HeroSection />

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute top-[80vh] left-1/2 -ml-3 flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <div className="w-6 h-10 rounded-full border-2 border-brand-primary/30 flex justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-2 bg-brand-primary rounded-full"
          />
        </div>
        <span className="text-[10px] font-black text-brand-primary/40 uppercase tracking-[0.2em]">{t('scroll_text')}</span>
      </motion.div>


      {/* Philosophy Brief -> New Section */}
      <section className="py-24 px-6 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.2] tracking-tight">
              {t.rich('trust_text', {
                br: () => <br />
              })}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Unique Ingredients - 크기 축소 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-[32px] bg-gray-50 shadow-xl border border-gray-100"
            >
              <Image
                src="/k_beauty_ingredients_v3.png"
                alt="Unique Ingredients"
                fill
                className="object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-end p-8">
                <div className="relative z-10">
                  <h3 className="text-xl font-black text-gray-900 drop-shadow-sm">{t('ingredients_title')}</h3>
                  <p className="text-gray-600 font-bold drop-shadow-sm">{t('ingredients_desc')}</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Effective Product - 크기 축소 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-[32px] bg-white shadow-xl border border-gray-100"
            >
              <Image
                src="/effective_product_melon.png"
                alt="Effective Product"
                fill
                className="object-cover transition-transform duration-700"
              />

              <div className="absolute inset-0 flex items-end p-8">
                <div className="relative z-10">
                  <h3 className="text-xl font-black text-gray-900">{t('effective_title')}</h3>
                  <p className="text-gray-600 font-bold">{t('effective_desc')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Content Showcase Section */}
      <section className="py-40 px-6 bg-brand-secondary/10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-[450px] flex-shrink-0 space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight text-gray-900">
                {t.rich('no_additives_title', {
                  br: () => <br />,
                  highlight: (chunks) => <span className="text-gradient">{chunks}</span>
                })}
              </h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                {t.rich('no_additives_desc', {
                  br: () => <br />
                })}
              </p>
            </div>
          </motion.div>

          <div className="flex-1 relative h-[500px] md:h-[650px] lg:h-[750px] w-full mt-32 md:mt-24 lg:mt-0 perspective-2000 flex justify-center lg:justify-start lg:ml-[15%]">
            <div className="relative w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-full">
              {[
                { src: "/concept_spirulina.png", label: t('pure_spirulina'), x: 0, y: -60 },
                { src: "/concept_rice_water.png", label: t('rice_bran_water'), x: 70, y: -20 },
                { src: "/concept_pudding_cream.png", label: t('pudding_texture'), x: 140, y: 20 },
                { src: "/concept_nature.png", label: t('clean_science'), x: 210, y: 60 }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 100, rotateY: 45 }}
                  whileInView={{
                    opacity: 1,
                    x: item.x,
                    y: item.y,
                    rotateY: -30,
                    rotateX: 10,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{
                    zIndex: 50,
                    scale: 1.08,
                    rotateY: -5,
                    rotateX: 0,
                    x: item.x + 30,
                    y: item.y - 10,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                  }}
                  className="absolute top-1/2 left-0 -translate-y-1/2 w-36 md:w-48 lg:w-56 aspect-[3/4] rounded-[24px] md:rounded-[32px] lg:rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.45)] border border-white/20 bg-white group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-sm font-black uppercase tracking-widest">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* <ReviewsSection /> */}

      {/* Brand Story (Philosophy) */}
      <section id="연구스토리" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 lg:space-y-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-12 lg:gap-24">
            {/* 이미지 영역 - 왼쪽 (모바일에서 숨김) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block flex-1 relative h-[500px] md:h-[600px] lg:h-[700px] w-full"
            >
              <Image
                src="/Gemini_Generated_Image_e6ren3e6ren3e6re.png"
                alt="Brand Philosophy"
                fill
                className="object-cover rounded-[32px] md:rounded-[40px]"
                priority
              />
            </motion.div>

            {/* 텍스트 영역 - 오른쪽 (모바일에서 전체 너비) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:flex-1 space-y-6 md:space-y-8 lg:space-y-10"
            >
              <div className="space-y-3 md:space-y-4 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.2] tracking-tight">
                  {t.rich('philosophy_title', {
                    br: () => <br />,
                    highlight: (chunks) => <span className="text-gradient">{chunks}</span>
                  })}
                </h2>
                <div className="w-12 md:w-16 h-0.5 bg-brand-primary mx-auto lg:mx-0"></div>
              </div>

              <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center lg:text-left">
                <p className="font-medium">
                  {t.rich('philosophy_desc_1', {
                    br: () => <br />
                  })}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.rich('philosophy_desc_2', {
                    desktop: (chunks) => <><br className="hidden md:block" />{chunks}</>
                  })}
                </p>
              </div>

              {/* 통계 - 2x2 그리드 */}
              <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 mt-6 md:mt-8">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                  {[
                    { label: t('stats_protein'), value: "60%", unit: t('stats_protein_unit') },
                    { label: t('stats_purity'), value: "0%", unit: t('stats_purity_unit') },
                    { label: t('stats_skin'), value: "100%", unit: t('stats_skin_unit') },
                    { label: t('stats_moisture'), value: "24h", unit: t('stats_moisture_unit') }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2 text-center"
                    >
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-brand-primary leading-none">{stat.value}</span>
                      <div className="flex flex-col gap-0.5 sm:gap-1">
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-gray-900 leading-tight">{stat.label}</span>
                        <span className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium leading-tight">{stat.unit}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* CertificationSection - 하단, 전체 너비 */}
          <div className="pt-8 md:pt-12 border-t border-gray-100">
            <CertificationSection />
          </div>
        </div>

      </section>



      {/* CTA Section */}
      <section className="py-60 px-6 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-brand-secondary/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] tracking-tighter"
          >
            {t.rich('cta_title', {
              br: () => <br />
            })}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-bold tracking-tight"
          >
            {t.rich('cta_desc', {
              br: () => <br />
            })}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <Link href="/about" className="bg-brand-primary text-white px-12 py-6 rounded-3xl font-black text-xl shadow-2xl shadow-brand-primary/40 hover:scale-[1.05] transition-all text-center">
              {t('cta_brand')}
            </Link>
            <Link href="/products" className="liquid-glass bg-white text-gray-900 px-12 py-6 rounded-3xl font-black text-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 border-gray-100 border">
              {t('cta_product')} <ArrowUpRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scroll Top Button */}
      <motion.button
        style={{ opacity: scrollTopOpacity, pointerEvents: useTransform(scrollYProgress, v => v > 0.1 ? 'auto' : 'none') }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-12 right-12 w-16 h-16 rounded-[24px] bg-white border border-gray-100 shadow-2xl flex items-center justify-center text-brand-primary z-40 transition-colors hover:bg-gray-50"
      >
        <ArrowUpRight className="w-8 h-8 -rotate-45" />
      </motion.button>
    </div>
  );
}
