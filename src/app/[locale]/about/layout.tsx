import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://esonlab.netlify.app";

  return {
    title: locale === "ko"
      ? "브랜드 스토리 | 이손랩 데이즈"
      : "Brand Story | ESONLAB DAYZ",
    description: locale === "ko"
      ? "케어, 그 본질을 다시 생각하다. 이손랩 데이즈는 기존의 스킨케어 공식을 넘어, 더 나은 솔루션을 제안하는 브랜드입니다."
      : "Care, Reconsidered. ESONLAB DAYZ is a brand that proposes better solutions beyond conventional skincare formulas.",
    keywords: locale === "ko"
      ? ["이손랩 데이즈", "브랜드 스토리", "스킨케어", "스피룰리나", "자연 성분"]
      : ["ESONLAB DAYZ", "brand story", "skincare", "spirulina", "natural ingredients"],
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: {
        ko: `${baseUrl}/ko/about`,
        en: `${baseUrl}/en/about`,
      },
    },
    openGraph: {
      title: locale === "ko"
        ? "브랜드 스토리 | 이손랩 데이즈"
        : "Brand Story | ESONLAB DAYZ",
      description: locale === "ko"
        ? "케어, 그 본질을 다시 생각하다."
        : "Care, Reconsidered.",
      url: `${baseUrl}/${locale}/about`,
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
        ? "브랜드 스토리 | 이손랩 데이즈"
        : "Brand Story | ESONLAB DAYZ",
      description: locale === "ko"
        ? "케어, 그 본질을 다시 생각하다."
        : "Care, Reconsidered.",
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

