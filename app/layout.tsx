import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/styles/normalize.css";
import "@/styles/globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/footer";

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
  title: "Swap Rocket - Просто и выгодно обменять валюту",
  description:
    "Сайт по поиску обменных пунктов рядом с вами и возможность забронировать нужную сумму.",
  metadataBase: new URL("https://swap-rocket-next.vercel.app/"),

  openGraph: {
    locale: "ru_UA",
    title: "private-exchange | Просто и выгодно обменять валюту",
    description:
      "Сайт по поиску обменных пунктов рядом с вами и возможность забронировать нужную сумму.",
    type: "website",
    url: "https://swap-rocket-next.vercel.app/",
    images: {
      url: "/banner_og.png",
      width: "512px",
      height: "512px",
      alt: "Сайт по поиску обменных пунктов рядом с вами и возможность забронировать нужную сумму",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
