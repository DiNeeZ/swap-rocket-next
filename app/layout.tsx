import type { Metadata } from "next";
import localFont from "next/font/local";

import { QueryProvider, ExchangersStoreProvider } from "@/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "@/styles/normalize.css";
import "@/styles/globals.css";
import { OrderBar } from "@/components/order-bar";
import OrderToast from "@/components/order-toast";
import PageDecor from "@/components/page-decor";

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
  title: "Private Exchangers - Просто і вигідно обміняти валюту",
  description:
    "Сайт із пошуку обмінних пунктів поруч із вами та можливість забронювати потрібну суму.",
  metadataBase: new URL("https://swap-rocket-next.vercel.app/"),

  openGraph: {
    locale: "ua_UA",
    title: "Private Exchangers | Просто і вигідно обміняти валюту",
    description:
      "Сайт із пошуку обмінних пунктів поруч із вами та можливість забронювати потрібну суму.",
    type: "website",
    url: "https://swap-rocket-next.vercel.app/",
    images: {
      url: "/banner_og.png",
      width: "512px",
      height: "512px",
      alt: "Сайт із пошуку обмінних пунктів поруч із вами та можливість забронювати потрібну суму.",
    },
    siteName: "swap-rocket-next",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${eUkraine.className}`}>
        <QueryProvider>
          <ExchangersStoreProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <OrderBar />
            <OrderToast />
          </ExchangersStoreProvider>
        </QueryProvider>
        <PageDecor />
      </body>
    </html>
  );
}
