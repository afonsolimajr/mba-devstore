import { Product } from "@/data/types/product";

export default function PriceTag({
  product,
  small,
}: {
  product: Product;
  small?: boolean;
}) {
  const bottom = small ? "bottom-4 md:bottom-10" : "bottom-8 md:bottom-28";
  const right = small ? "right-4 md:right-8" : "right-4 md:right-28";

  return (
    <div
      className={
        small
          ? `absolute ${bottom} ${right} h-8 sm:h-12 flex items-center gap-2 max-w-28 md:max-w-72 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5`
          : `absolute ${bottom} ${right} h-12 sm:h-16 flex items-center gap-2 max-w-64 sm:max-w-72 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5`
      }
    >
      <span className="text-sm truncate">{product.title}</span>
      <span
        className={
          small
            ? "flex h-full items-center justify-center rounded-full bg-violet-500 px-2 md:px-4 font-semibold"
            : "flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold"
        }
      >
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </span>
    </div>
  );
}
