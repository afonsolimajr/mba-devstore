import CartWidget from "@/app/(store)/product/cart-widget";
import Image from "next/image";
import Link from "next/link";
import { SearchForm } from "./search-form";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col md:flex-row gap-1 md:gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <SearchForm />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-4">
        <CartWidget />

        <div className="hidden md:flex w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/afonsolimajr.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
