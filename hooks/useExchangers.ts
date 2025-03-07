import { useQuery } from "@tanstack/react-query";
import { getExchangers } from "@/utils";
import { type Currency } from "@/data";

export const useExchangers = (
  currency: Currency | null,
  number: number | ""
) => {
  return useQuery({
    queryKey: ["exchangers"],
    queryFn: () => {
      if (currency && typeof number === "number") {
        return getExchangers(Number(currency.id), number);
      }
      return Promise.resolve(null);
    },
    enabled: false,
  });
};
