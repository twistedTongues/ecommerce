"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

type Props = {
  mainProduct: Product;
};

const MainProductSection = ({ mainProduct }: Props) => {
  const { addItem } = useShoppingCart();

  const addToCart = () => {
    // addItem(productsStripe[2]);
    addItem(mainProduct);
  };
  return (
    <section className="min-w-0 flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
      <h2 className="w-64 text-3xl uppercase font-semibold">
        {mainProduct.name}
      </h2>
      <div className="relative h-52 md:h-80 lg:h-96 w-8/12">
        <Image
          priority
          src={urlForImage({ ...mainProduct?.image }).url()}
          alt="hero"
          fill
          className="object-cover rounded-lg drop-shadow-lg"
        />
      </div>
      <div className="flex space-x-4 items-center w-full">
        <span className="text-3xl font-semibold text-red-700">
          {formatCurrencyString({ value: mainProduct.price, currency: "USD" })}
        </span>
        <p className="text-stone-500">{mainProduct.slogan}</p>
      </div>
      <Link
        href="/"
        className="text-xl py-3 border border-neutral-700 rounded-full hover:border-red-600 flex justify-center"
      >
        <button>
          Free Trial
        </button>
      </Link>
      <button
        onClick={() => addToCart()}
        className="bg-neutral-700 text-xl py-3 text-white rounded-full hover:bg-red-600 flex justify-center"
      >
        Buy Now
      </button>
    </section>
  );
};

export default MainProductSection;
