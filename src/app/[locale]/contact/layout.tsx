import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://esonlab.netlify.app";

  return {
    title: locale === "ko"
      ? "문의하기 | 비즈니스 협력 | 이손랩 데이즈"
      : "Contact Us | Business Partnership | ESONLAB DAYZ",
    description: locale === "ko"
      ? "비즈니스 제휴 및 대량 구매 문의를 기다립니다. 이손랩 데이즈와 함께 새로운 성장을 경험하세요."
      : "We look forward to business partnership and bulk purchase inquiries. Experience new growth with ESONLAB DAYZ.",
    keywords: locale === "ko"
      ? ["문의하기", "비즈니스 협력", "제휴", "대량 구매", "이손랩 데이즈"]
      : ["contact", "business partnership", "partnership", "bulk purchase", "ESONLAB DAYZ"],
    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
      languages: {
        ko: `${baseUrl}/ko/contact`,
        en: `${baseUrl}/en/contact`,
      },
    },
    openGraph: {
      title: locale === "ko"
        ? "문의하기 | 비즈니스 협력"
        : "Contact Us | Business Partnership",
      description: locale === "ko"
        ? "비즈니스 제휴 및 대량 구매 문의를 기다립니다."
        : "We look forward to business partnership and bulk purchase inquiries.",
      url: `${baseUrl}/${locale}/contact`,
      siteName: "ESONLAB DAYZ",
      locale: locale,
      alternateLocale: locale === "ko" ? "en" : "ko",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: locale === "ko" ? "이손랩 데이즈 스피룰리나 수분 크림" : "ESONLAB DAYZ Spirulina Moisturizing Cream",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: locale === "ko"
        ? "문의하기 | 비즈니스 협력"
        : "Contact Us | Business Partnership",
      description: locale === "ko"
        ? "비즈니스 제휴 및 대량 구매 문의를 기다립니다."
        : "We look forward to business partnership and bulk purchase inquiries.",
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

