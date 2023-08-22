"use client";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/app/compnonents/ProductCard";
import { Product } from "@/typings";

type Props = {
  products: Product[];
};

const ProductsList = ({ products }: Props) => {
  const searchParams = ["name", "description", "slogan", "price"];
  
  const useSearch = (items: Product[]) => {
    const searchQuery = useSearchParams().get("q")?.toString().toLowerCase()
      .trim() || "";
    return items.filter((product: Product) =>
      searchParams.some((param: string) =>
        product[param as keyof Product]?.toString().toLowerCase().includes(searchQuery)
      )
    );
  };

  const paginationQuery = Number(useSearchParams().get("start"));

  return (
    <section className="flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
        {useSearch(products)?.slice(0 + paginationQuery, 9 + paginationQuery).map((
          product,
        ) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
