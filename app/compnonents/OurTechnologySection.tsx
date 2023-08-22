import Image from "next/image";
import { Product } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  product: Product;
};

const OurTechnologySection = ({ product }: Props) => {
  return (
    <section className="min-w-0 flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
      <h5 className="text-3xl uppercase font-semibold">
        Our <br /> Technology
      </h5>
      <div className="divide-y divide-gray-300">
        <details className="group" open>
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 tracking-wide">
            {product.technologySection.technology1}
            <div className="text-rose-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="block h-5 w-5 group-open:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden h-5 w-5 group-open:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </div>
          </summary>
          <div className="pb-4 text-secondary-500">
            {product.technologySection.description1}
          </div>
        </details>
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 tracking-wide">
            {product.technologySection.technology2}
            <div className="text-rose-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="block h-5 w-5 group-open:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden h-5 w-5 group-open:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </div>
          </summary>
          <div className="pb-4 text-secondary-500">
            {product.technologySection.description2}
          </div>
        </details>
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 tracking-wide">
            {product.technologySection.technology3}
            <div className="text-rose-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="block h-5 w-5 group-open:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden h-5 w-5 group-open:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </div>
          </summary>
          <div className="pb-4 text-secondary-500">
            {product.technologySection.description3}
          </div>
        </details>
      </div>
      <div className="relative h-96">
        <Image
          src={urlForImage({...product?.technologySection.image}).url()}
          alt="back"
          fill
          className="object-cover rounded-lg drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default OurTechnologySection;
