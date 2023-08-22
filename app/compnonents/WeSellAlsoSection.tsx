import Link from "next/link";
import { client } from "@/sanity/lib/client";
import ProductCard from "./ProductCard";
import { Product } from "@/typings";

const query = `*[_type == "product"]`;

async function WeSellAlsoSection() {
  const products: Product[] = await client.fetch(query);
  return (
    <section className="min-w-0 flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
      <h2 className="relative text-3xl uppercase font-semibold">
        We Sell <br /> Also
      </h2>
      <div className="w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory h-fit">
        {products?.slice(-2).map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
      <div>
        <Link
          href="/buy"
          className="max-w-screen-sm mx-auto text-xl py-3 border border-neutral-700 rounded-full hover:bg-neutral-700 flex justify-center hover:text-white"
        >
          <button>View All</button>
        </Link>
      </div>
    </section>
  );
}

export default WeSellAlsoSection;
