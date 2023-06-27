import Link from "next/link";

const Pagination = () => {
  return (
    <section className="bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg max-w-xs mx-auto">
      <div className="flex justify-around">
      <Link href="/" className="hover:underline">
        &larr; prev
      </Link>
      <Link href="/" className="hover:underline">
        next &rarr;
      </Link>
      </div>
    </section>
  );
};

export default Pagination;
