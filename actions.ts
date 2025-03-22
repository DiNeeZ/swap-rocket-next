"use server";

import type { ExchangersListItem } from "@/types";

export async function getExchangersList(): Promise<ExchangersListItem[]> {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/exchangers/`, {
      cache: "no-cache",
    });

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
