import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CertificationSection from "@/components/sections/CertificationSection";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Header />
        <main>
          {children}
        </main>
        <CertificationSection />
        <Footer />
      </body>
    </html>
  );
}
