"use client";

import { useTranslations } from "next-intl";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSchema() {
  const t = useTranslations("HomePage");

  // Define FAQ items - you can customize these based on your actual FAQ content
  const faqItems: FAQItem[] = [
    {
      question: t("faq_q1", { default: "스피룰365는 어떤 제품인가요?" }),
      answer: t("faq_a1", {
        default:
          "스피룰365는 쌀겨수 67%와 직접 배양한 스피룰리나로 만든 수분 크림입니다. 색소와 향료 없이 오직 성분으로만 만들어졌습니다.",
      }),
    },
    {
      question: t("faq_q2", { default: "민감성 피부에도 사용할 수 있나요?" }),
      answer: t("faq_a2", {
        default:
          "네, 저자극 테스트를 완료했으며 색소와 향료가 없어 민감성 피부에도 적합합니다.",
      }),
    },
    {
      question: t("faq_q3", { default: "스피룰리나의 효능은 무엇인가요?" }),
      answer: t("faq_a3", {
        default:
          "스피룰리나는 60% 이상의 단백질을 함유하고 있으며, 피부에 영양과 수분을 공급하여 건강한 피부 광채를 선사합니다.",
      }),
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
