import { useShoppingCart } from "use-shopping-cart";
import { formatCurrencyString } from "use-shopping-cart";
import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { CartEntry } from "use-shopping-cart/core";

export default function CartItem({ item }: CartEntry) {
  const { name, image, quantity, price } = item;
  const { removeItem } = useShoppingCart();

  const removeItemFromCart = () => {
    removeItem(item.id);
  };

  return (
    <div className="flex items-center gap-4 mb-3">
      <Image
        src={image && urlForImage(image)?.url()}
        className="rounded-lg"
        alt="item"
        width={45}
        height={45}
      />
      <div>
        {name} <span className="text-xs">({quantity})</span>
      </div>
      <div className="ml-auto">
        {formatCurrencyString({ value: price, currency: "USD" })}
      </div>
      <button
        onClick={() => removeItemFromCart()}
        className="hover:bg-rose-50 transition-colors rounded-full duration-500 p-1"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
