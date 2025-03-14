import { useQuery } from "@tanstack/react-query";
import { getExchangers } from "@/utils";
import { type Currency } from "@/types";

function extractId(str: string): number | null {
  const match = str.match(/\/currency\/(\d+)\//);
  if (match) {
    return Number(match[1]);
  }
  return null; // Если ID не найден
}

export const useExchangers = (
  currency: Currency | null,
  number: number | ""
) => {
  return useQuery({
    queryKey: ["exchangers"],
    queryFn: () => {
      if (currency && typeof number === "number") {
        return getExchangers(Number(extractId(currency.currency)), number);
      }
      return Promise.resolve(null);
    },
    enabled: false,
  });
};
