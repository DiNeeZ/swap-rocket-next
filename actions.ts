"use server";

import type { Currency, ExchangersListItem, Rates } from "@/types";

export async function getCurrencyList(): Promise<Currency[]> {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/currencys/`);

    const { objects }: { objects: Currency[] } = await res.json();
    return objects;
  } catch (error) {
    throw new Error(
      `Failed to fetch currency list: ${
        error instanceof Error && error.message
      }`
    );
  }
}

export async function getExchangersList(): Promise<ExchangersListItem[]> {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/exchangers/`);

    const { objects: exchangers }: { objects: ExchangersListItem[] } =
      await res.json();
    return exchangers;
  } catch (error) {
    throw new Error(
      `Failed to fetch exchangers list: ${
        error instanceof Error && error.message
      }`
    );
  }
}

export async function getCurrencyRaqtes() {
  try {
    const preliminaryRes = await fetch(`${process.env.NEXT_API_URL}/currency/`);
    const preliminaryData = await preliminaryRes.json();
    const { total_count: total } = preliminaryData.meta;

    const res = await fetch(
      `${process.env.NEXT_API_URL}/currencys/?limit=${total}`
    );

    const { objects: rates }: { objects: Rates[] } = await res.json();
    return rates;
  } catch (error) {
    throw new Error(
      `Failed to fetch exchangers list: ${
        error instanceof Error && error.message
      }`
    );
  }
}
