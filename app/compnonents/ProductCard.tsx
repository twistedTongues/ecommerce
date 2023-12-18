"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { addItem } = useShoppingCart();

  const addToCart = () => {
    // @ts-ignore
    addItem(product);
  };
  return (
    <article
      className="flex flex-col justify-between relative p-5 space-y-3 drop-shadow-lg snap-center"
    >
      <Image
        src={urlForImage({ ...product?.image }).url()}
        alt="hero"
        fill
        className="brightness-50 object-cover rounded-lg"
      />
      <Link href={`/buy/${product._id}`}>
        <div className="relative text-white space-y-3">
          <h4 className="w-56 text-3xl uppercase font-semibold ">
            {product.name}
          </h4>
          <p>
            {product.description}
          </p>
        </div>
      </Link>
      <div className="relative space-y-3">
        <div className="flex space-x-4 items-center w-full">
          <span className="text-rose-500 text-3xl font-semibold">
            {formatCurrencyString({ value: product.price, currency: "USD" })}
          </span>
          <p className="text-neutral-200">{product.slogan}</p>
        </div>
        <button
          onClick={() => addToCart()}
          className="text-white text-xl py-3 px-5 border border-white rounded-full hover:border-red-600 flex justify-center"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
