"use client";
import Image from "next/image";
import { Product } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";
import { useState } from "react";
import { Modal } from "./Modal";
import { useShoppingCart } from "use-shopping-cart";

type Props = {
  product: Product;
};

const ProductGallery = ({ product }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const { addItem } = useShoppingCart();

  const addToCart = () => {
    addItem(product);
  };

  return (
    <section className="flex flex-col bg-gray-100 rounded-lg p-5 space-y-5 drop-shadow-lg">
      <div className="grid gap-4">
        <button
          onClick={() => setOpenModal(true)}
          className="relative h-32 md:h-96"
        >
          <Image
            priority
            className="object-cover h-auto max-w-full rounded-lg drop-shadow-lg"
            src={urlForImage({ ...product.image }).url()}
            fill
            alt=""
          />
        </button>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          image={product.image}
        />
        <div className="grid grid-cols-5 gap-4">
          <div className="relative">
            <Image
              className="object-cover h-auto max-w-full rounded-lg drop-shadow-lg"
              src={urlForImage({ ...product.productGallery[0] }).url()}
              fill
              alt=""
            />
          </div>
          <div className="relative">
            <img
              className="object-cover h-auto max-w-full rounded-lg drop-shadow-lg"
              src={urlForImage({ ...product.productGallery[1] }).url()}
              alt=""
            />
          </div>
          <div className="relative">
            <Image
              className="object-cover h-auto max-w-full rounded-lg drop-shadow-lg"
              src={urlForImage({ ...product.productGallery[2] }).url()}
              fill
              alt=""
            />
          </div>
          <div className="relative">
            <Image
              className="object-cover h-auto max-w-full rounded-lg drop-shadow-lg"
              src={urlForImage({ ...product.productGallery[3] }).url()}
              fill
              alt=""
            />
          </div>
          <div className="relative">
            <Image
              className="object-cover h-auto max-w-full rounded-lg drop-shadow-lg"
              src={urlForImage({ ...product.productGallery[4] }).url()}
              fill
              alt=""
            />
          </div>
        </div>
      </div>

      <p>Lorem ipsum dolor sit amet, tat.</p>

      <button
        onClick={() => addToCart()}
        className="bg-neutral-700 text-xl py-3 text-white rounded-full hover:bg-red-600 flex justify-center"
      >
        Buy Now
      </button>
    </section>
  );
};

export default ProductGallery;
