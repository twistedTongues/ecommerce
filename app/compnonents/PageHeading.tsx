"use client";
import Link from "next/link";
import { formatCurrencyString } from "use-shopping-cart";

type Props = {
  heading: string;
  rating?: object;
  price?: number;
};

const PageHeading = ({ heading, rating, price }: Props) => {
  return (
    <section className="flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
      <h1 className="text-4xl font-semibold uppercase">{heading}</h1>

      {rating && (
        <div className="flex items-center">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <p className="ml-2 text-md font-semibold text-gray-900">4.95</p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full">
          </span>
          <Link
            href="#review"
            className="text-md text-rose-900 underline hover:no-underline scroll-smooth"
          >
            73 reviews
          </Link>
        </div>
      )}

      {price && (
        <span className="text-2xl font-semibold text-red-700">
          {formatCurrencyString({ value: price, currency: "USD" })}
        </span>
      )}
    </section>
  );
};

export default PageHeading;
