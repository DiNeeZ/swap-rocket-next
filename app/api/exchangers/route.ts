import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const currencyId = searchParams.get("currencyId");
  const sum = searchParams.get("sum");

  const res = await fetch(
    `${process.env
      .NEXT_API_URL!}/currencys/?currency=${currencyId}&sum__gte=${sum}`
  );

  const data = await res.json();
  return NextResponse.json(data);
}
