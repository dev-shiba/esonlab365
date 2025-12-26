import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CertificationSection from "@/components/sections/CertificationSection";
import StructuredData from "@/components/seo/StructuredData";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://esonlab.netlify.app";

  const isKorean = locale === "ko";

  return {
    title: isKorean
      ? "이손랩 데이즈 | 스피룰리나 수분 크림 | 색소와 향료 없이, 오직 성분으로만"
      : "ESONLAB DAYZ | Spirulina Moisturizing Cream | Only Ingredients, No Additives",
    description: isKorean
      ? "피부 회복을 넘어선 광채수분크림. 색소와 향료 없이, 오직 성분으로만 승부합니다. 스피룰리나 직접 배양, 쌀겨수 67%로 만든 수분 크림."
      : "Beyond Repair. Hydration That Reveals Healthy Radiance. Competing only with ingredients, without pigments or fragrances. Moisturizing cream with 67% Rice Bran Water + directly cultivated Spirulina.",
    keywords: isKorean
      ? ["이손랩 데이즈", "ESONLAB DAYZ", "스피룰리나 크림", "수분 크림", "무색소", "무향료", "민감성 피부", "저자극", "쌀겨수", "스피룰365"]
      : ["ESONLAB DAYZ", "spirulina cream", "moisturizing cream", "no pigments", "no fragrances", "sensitive skin", "hypoallergenic", "rice bran water", "SPIRUL365"],
    authors: [{ name: "ESONLAB DAYZ" }],
    creator: "ESONLAB DAYZ",
    publisher: "ESONLAB DAYZ",
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        ko: `${baseUrl}/ko`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: isKorean
        ? "이손랩 데이즈 | 스피룰리나 수분 크림"
        : "ESONLAB DAYZ | Spirulina Moisturizing Cream",
      description: isKorean
        ? "색소와 향료 없이, 오직 성분으로만 승부합니다. 모두의 피부를 위한 자극 없는 케어."
        : "Competing only with ingredients, without pigments or fragrances. Gentle care for everyone's skin.",
      url: `${baseUrl}/${locale}`,
      siteName: "ESONLAB DAYZ",
      locale: locale,
      alternateLocale: locale === "ko" ? "en" : "ko",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: isKorean ? "이손랩 데이즈 스피룰리나 수분 크림" : "ESONLAB DAYZ Spirulina Moisturizing Cream",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isKorean
        ? "이손랩 데이즈 | 스피룰리나 수분 크림"
        : "ESONLAB DAYZ | Spirulina Moisturizing Cream",
      description: isKorean
        ? "색소와 향료 없이, 오직 성분으로만 승부합니다."
        : "Competing only with ingredients, without pigments or fragrances.",
      images: [`${baseUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Google Search Console verification code를 여기에 추가하세요
      // google: "your-verification-code",
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="font-sans antialiased">
        <StructuredData />
        <NextIntlClientProvider messages={messages}>
          <BreadcrumbSchema />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
