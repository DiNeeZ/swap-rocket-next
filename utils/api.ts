import { ExchangersResponse } from "@/types";

export async function getPosts(): Promise<ExchangersResponse> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL!);
  return response.json();
}
