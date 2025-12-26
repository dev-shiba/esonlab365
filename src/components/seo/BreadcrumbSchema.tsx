"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export default function BreadcrumbSchema() {
  const pathname = usePathname();
  const locale = useLocale();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://esonlab.netlify.app";

  // Generate breadcrumb items based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      {
        name: locale === "ko" ? "홈" : "Home",
        url: `${baseUrl}/${locale}`,
      },
    ];

    // Remove locale from pathname for parsing
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

    if (pathWithoutLocale === "/") {
      return items;
    }

    const segments = pathWithoutLocale.split("/").filter(Boolean);

    segments.forEach((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join("/")}`;
      let name = segment.charAt(0).toUpperCase() + segment.slice(1);

      // Translate common paths
      if (locale === "ko") {
        const translations: Record<string, string> = {
          products: "제품",
          about: "브랜드 스토리",
          contact: "문의하기",
        };
        name = translations[segment] || name;
      }

      items.push({
        name,
        url: `${baseUrl}/${locale}${path}`,
      });
    });

    return items;
  };

  const breadcrumbs = generateBreadcrumbs();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}
