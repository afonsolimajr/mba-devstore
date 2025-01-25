import PriceTag from "@/components/price-tag";
import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured", {
    next: {
      revalidate: 60 * 60,
    },
  });

  const products = await response.json();

  return products;
}

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const [highLightedProduct, ...otherProducts] = await getFeaturedProducts();

  return (
    <div className="grid max-h-[920px] grid-cols-6 grid-rows-9 grid-flow-col md:grid-cols-9 md:grid-rows-6 gap-6">
      <Link
        href={`/product/${highLightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
      >
        <Image
          src={highLightedProduct.image}
          alt=""
          className="group-hover:scale-105 transition-transform divide-purple-500"
          width={920}
          height={920}
          quality={100}
        />

        <PriceTag product={highLightedProduct} />
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
          >
            <Image
              src={product.image}
              alt=""
              className="group-hover:scale-105 transition-transform divide-purple-500"
              width={920}
              height={920}
              quality={100}
            />

            <PriceTag product={product} small mini />
          </Link>
        );
      })}
    </div>
  );
}
