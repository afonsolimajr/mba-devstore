import { z } from "zod";
import data from "../data.json";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const slug = z.string().parse(params.slug);

  const product = data.products.find((prod) => prod.slug === slug);

  if (!product) {
    return Response.json({ message: "Product not found" }, { status: 400 });
  }

  return Response.json(product);
}
