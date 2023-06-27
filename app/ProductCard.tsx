import Image from "next/image";
import Link from "next/link";
import P2 from "@/public/2.jpg";

type Props = {
  productName: string;
  description: string;
  price: number;
  slogan: string;
};

const ProductCard = ({ productName, description, price, slogan }: Props) => {
  return (
    <article className="flex flex-col justify-between relative p-5 space-y-3 drop-shadow-lg snap-center">
      <Image
        src={P2}
        alt="hero"
        fill
        className="brightness-50 object-cover rounded-lg"
      />
      <div className="relative text-white space-y-3">
        <h4 className="w-56 text-3xl uppercase font-semibold ">
          {productName}
        </h4>
        <p>
          {description}
        </p>
      </div>
      <div className="relative space-y-3">
        <div className="flex space-x-4 items-center w-full">
          <span className="text-red-500 text-3xl font-semibold">{price}$</span>
          <p className="text-neutral-200">{slogan}</p>
        </div>
        <Link
          href="/"
          className="text-white text-xl py-3 border border-white rounded-full hover:border-red-600 flex justify-center hover:text-red-600"
        >
          <button>
            Add to cart
          </button>
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
