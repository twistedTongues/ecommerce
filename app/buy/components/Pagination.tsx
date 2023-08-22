"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Pagination = () => {
  const searchParams = useSearchParams();
  const startIndex = Number(searchParams.get("start"));
  const searchQuery = searchParams.get("q");

  return (
    <section className="bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg max-w-xs mx-auto">
      <div className="flex justify-around">
        {startIndex >= 9 && (
          <Link
            href={`/buy?q=${searchQuery || ""}&start=${startIndex - 9}`}
            className="hover:underline hover:text-rose-700"
          >
            &larr; prev
          </Link>
        )}
        <Link
          href={`/buy?q=${searchQuery || ""}&start=${startIndex + 9}`}
          className="hover:underline hover:text-rose-700"
        >
          next &rarr;
        </Link>
      </div>
    </section>
  );
};

export default Pagination;
