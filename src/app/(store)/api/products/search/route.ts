import { z } from "zod";
import data from "../data.json";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const query = z.string().parse(searchParams.get("q"));

  const products = data.products.filter((prod) =>
    prod.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  return Response.json(products);
}
