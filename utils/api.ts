import { ExchangersResponse, OrderPostData } from "@/types";

export async function getExchangers(
  currencyId: number,
  sum: number
): Promise<ExchangersResponse> {
  const response = await fetch(
    `/api/exchangers?currencyId=${currencyId}&sum=${sum}`
  );

  const exchangers = await response.json();
  return exchangers;
}

export async function createOrder(data: OrderPostData): Promise<void> {
  const res = await fetch(`/api/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  console.log(result);
}
