import { ExchangersResponse, OrderPostData } from "@/types";

export async function getExchangers(
  currencyId: number,
  sum: number
): Promise<ExchangersResponse> {
  const response = await fetch(
    `${process.env
      .NEXT_PUBLIC_API_URL!}/currencys/?currency=${currencyId}&sum__gte=${sum}`
  );

  const exchangers = await response.json();
  return exchangers;
}

export async function createOrder(data: OrderPostData): Promise<void> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL!}/orders/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `ApiKey ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Помилка при створенні замовлення");
  }
}
