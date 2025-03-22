"use client";

import { useEffect } from "react";
import { Rates } from "@/types";
import { useExchangersStore } from "./exchangers-store-provider";

export function RatesProvider({ children }: { children: React.ReactNode }) {
  const setCurrencyList = useExchangersStore((state) => state.setRatesList);

  const updateCurrencyList = async () => {
    try {
      const response = await fetch("/api/rates");
      const data = await response.json();
      setCurrencyList(data as Rates[]);
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
