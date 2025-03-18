"use client";

import { useEffect } from "react";
import { Currency } from "@/types";
import { getUniqueByCode } from "@/utils";
import { useExchangersStore } from "./exchangers-store-provider";

export function RatesProvider({ children }: { children: React.ReactNode }) {
  const setCurrencyList = useExchangersStore((state) => state.setCurrencyList);

  const updateCurrencyList = async () => {
    try {
      const response = await fetch("/api/currency-list");
      const newData = (await response.json()) as Currency[];
      const uniqueData = getUniqueByCode(newData);
      setCurrencyList(uniqueData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    updateCurrencyList();

    const interval = setInterval(() => {
      updateCurrencyList();
    }, 300000);
    return () => clearInterval(interval);
  });

  return <>{children}</>;
}
