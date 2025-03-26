import localFont from "next/font/local";
import Script from "next/script";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Contacts } from "@/components/contacts";
import { Services } from "@/components/services";
import { OrderBar } from "@/components/order-bar";
import OrderToast from "@/components/order-toast";
import PageDecor from "@/components/page-decor";

import { QueryProvider, ExchangersStoreProvider } from "@/providers";
import { RatesProvider } from "@/providers/rates-provider";

import type { Metadata } from "next";

import "@/styles/normalize.css";
import "@/styles/globals.css";

const eUkraine = localFont({
  src: [
    {
      path: "./fonts/e-ukraine-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/e-ukraine-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/e-ukraine-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Курс долара в Одесі сьогодні – актуальні обмінники та найкращий курс валют",
  description:
    "Шукаєте, де вигідно обміняти валюту в Одесі? Актуальний курс долара, євро та інших валют у наших обмінних пунктах. Оновлення щодня!",
  metadataBase: new URL("https://www.exprivat.com.ua/"),
  keywords:"курс долара Одеса, обмін валют Одеса, актуальний курс обміну, обмінники Одеса, курс євро до гривні",

  openGraph: {
    locale: "ua_UA",
    title: "Просто і вигідно обміняти валюту",
    description:
      "Шукаєте, де вигідно обміняти валюту в Одесі? Актуальний курс долара, євро та інших валют у наших обмінних пунктах. Оновлення щодня!",
    type: "website",
    url: "https://www.exprivat.com.ua/",
    images: {
      url: "/banner_og.png",
      width: "512px",
      height: "512px",
      alt: "Найкращий курс валют в Одесі сьогодні",
    },
    siteName: "exprivat.com.ua",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-STJ7PH7DVD"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-STJ7PH7DVD');
            `,
          }}
        />
      </head>
      <body className={`${eUkraine.className}`}>
        <QueryProvider>
          <ExchangersStoreProvider>
            <RatesProvider>
              <Header />
              <main>{children}</main>
              <Services />
              <Contacts />
              <Footer />
              <OrderBar />
              <OrderToast />
            </RatesProvider>
          </ExchangersStoreProvider>
        </QueryProvider>
        <PageDecor />
      </body>
    </html>
  );
}
