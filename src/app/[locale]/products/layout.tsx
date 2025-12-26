import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProductsPage" });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://esonlab.netlify.app";

  return {
    title: locale === "ko"
      ? "제품 소개 | 스피룰365 그린 수분 크림 | 이손랩 데이즈"
      : "Products | SPIRUL365 Green Hydro-Lock Cream | ESONLAB DAYZ",
    description: locale === "ko"
      ? "쌀겨수 67% + 스피룰리나로 만든 수분 크림. 민감성 피부 적합, 저자극 테스트 완료, 색소와 향료 무첨가."
      : "Moisturizing cream with 67% Rice Bran Water + Spirulina. Suitable for sensitive skin, hypoallergenic tested, free from pigments and fragrances.",
    keywords: locale === "ko"
      ? ["스피룰365", "수분 크림", "스피룰리나 크림", "쌀겨수", "민감성 피부", "저자극", "무색소", "무향료"]
      : ["SPIRUL365", "moisturizing cream", "spirulina cream", "rice bran water", "sensitive skin", "hypoallergenic", "no pigments", "no fragrances"],
    alternates: {
      canonical: `${baseUrl}/${locale}/products`,
      languages: {
        ko: `${baseUrl}/ko/products`,
        en: `${baseUrl}/en/products`,
      },
    },
    openGraph: {
      title: locale === "ko"
        ? "제품 소개 | 스피룰365 그린 수분 크림"
        : "Products | SPIRUL365 Green Hydro-Lock Cream",
      description: locale === "ko"
        ? "쌀겨수 67% + 스피룰리나로 만든 수분 크림"
        : "Moisturizing cream with 67% Rice Bran Water + Spirulina",
      url: `${baseUrl}/${locale}/products`,
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
        ? "제품 소개 | 스피룰365 그린 수분 크림"
        : "Products | SPIRUL365 Green Hydro-Lock Cream",
      description: locale === "ko"
        ? "쌀겨수 67% + 스피룰리나로 만든 수분 크림"
        : "Moisturizing cream with 67% Rice Bran Water + Spirulina",
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

