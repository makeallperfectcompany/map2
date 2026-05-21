import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import ClientLayout from "./ClientLayout";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-onest",
  display: "swap",
});

const BASE_URL = "https://map2.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0f1a",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Make All Perfect — маркетинг полного цикла",
    template: "%s | Make All Perfect",
  },
  description:
    "Мы объединяем стратегию, дизайн, рекламу, контент и аналитику в единую систему роста бизнеса.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: BASE_URL,
    siteName: "Make All Perfect",
    title: "Make All Perfect — маркетинг полного цикла",
    description:
      "Мы объединяем стратегию, дизайн, рекламу, контент и аналитику в единую систему роста бизнеса.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Make All Perfect — маркетинговое агентство полного цикла | Стеклянный куб — символ прозрачности и системности",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Make All Perfect — маркетинг полного цикла",
    description:
      "Мы объединяем стратегию, дизайн, рекламу, контент и аналитику в единую систему роста бизнеса.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.webp", sizes: "32x32", type: "image/webp" },
      { url: "/favicon-32x32.webp", sizes: "32x32", type: "image/webp" },
      { url: "/android-chrome-192x192.webp", sizes: "192x192", type: "image/webp" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.webp",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "Make All Perfect",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.webp`,
  image: `${BASE_URL}/og-image.jpg`,
  description:
    "Маркетинговое агентство полного цикла: реклама, SEO, маркетплейсы, сайты, контент, CRM, PR и аналитика.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RU",
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Russian",
    url: `${BASE_URL}/contacts`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={onest.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
