import { ExchangersResponse } from "@/types";

export async function getExchangers(
  currencyId: number,
  sum: number
): Promise<ExchangersResponse> {
  const response = await fetch(
    `${process.env
      .NEXT_PUBLIC_API_URL!}/currencys/?currency=${currencyId}&sum__gte=${sum}`
  );
  return response.json();
}
