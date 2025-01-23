import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";

export default async function Search() {
  async function getProducts(): Promise<Product[]> {
    const response = await api(`/products/search?q=${""}`, {
      next: {
        revalidate: 60 * 60,
      },
    });

    const products = await response.json();

    return products;
  }

  const products: Product[] = await getProducts();
  console.log("search", products);

  return (
    <div>
      <p className="text-sm">
        Resultados para: <span className="font-semibold">pesquisa</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.slug}`}
              className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
            >
              <Image
                src={product.image}
                alt=""
                className="group-hover:scale-105 transition-transform divide-purple-500"
                width={920}
                height={920}
                quality={100}
              />

              <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                <span className="text-sm truncate">{product.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
