import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "ESONLAB DAYZ | 이손랩 데이즈",
  description: "Beyond Repair. Hydration That Reveals Healthy Radiance. 피부 회복을 넘어선 광채수분크림",
  keywords: ["이손랩 데이즈", "ESONLAB DAYZ", "스피룰리나 크림", "무실리콘 수분크림", "푸딩제형", "건강한광채", "속건조해결"],
  openGraph: {
    title: "ESONLAB DAYZ | 이손랩 데이즈",
    description: "Beyond Repair. Hydration That Reveals Healthy Radiance.",
    images: ["/og-image.png"],
  },
};

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
        <NextIntlClientProvider messages={messages}>
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
