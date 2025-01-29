import type { Metadata } from "next";
import localFont from "next/font/local";

import "./css/normalize.css";
import "./css/globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${eUkraine.className}`}>{children}</body>
    </html>
  );
}
