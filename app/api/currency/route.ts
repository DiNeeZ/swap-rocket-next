import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.NEXT_API_URL}/currency/`);

  const data = await res.json();
  return NextResponse.json(data);
}
