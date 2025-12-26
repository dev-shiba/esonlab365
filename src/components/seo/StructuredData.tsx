"use client";

export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://esonlab.netlify.app";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ESONLAB DAYZ",
    alternateName: "이손랩 데이즈",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: "Premium Korean skincare brand specializing in spirulina-based moisturizing products",
    contactPoint: {
      "@type": "ContactPoint",
      email: "ESONLABDAYZ@GMAIL.COM",
      contactType: "customer service",
      availableLanguage: ["Korean", "English"],
    },
    sameAs: [
      // 소셜 미디어 링크를 여기에 추가하세요
      // "https://www.instagram.com/esonlabdayz",
      // "https://www.facebook.com/esonlabdayz",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ESONLAB DAYZ",
    alternateName: "이손랩 데이즈",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#business`,
    name: "ESONLAB DAYZ",
    alternateName: "이손랩 데이즈",
    description: "색소와 향료 없이, 오직 성분으로만 만든 스피룰리나 수분 크림",
    url: baseUrl,
    telephone: "",
    email: "ESONLABDAYZ@GMAIL.COM",
    priceRange: "$$",
    image: `${baseUrl}/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}

