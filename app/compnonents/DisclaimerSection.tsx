import Image from "next/image";
import { Product } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  product: Product;
};

const DisclaimerSection = ({ product }: Props) => {
  return (
    <section className="min-w-0 relative flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
      <Image
        src={urlForImage({ ...product?.disclaimerSection.image }).url()}
        alt="hero"
        fill
        className="brightness-50 object-cover rounded-lg"
      />
      <div className="relative text-white pb-52 lg:flex-grow">
        <h5 className="text-3xl uppercase font-semibold w-56">
          {product.disclaimerSection.slogan}
        </h5>
        <p>
          {product.disclaimerSection.description}
        </p>
      </div>
      <p className="relative text-white uppercase font-semibold">
        {product.disclaimerSection.disclaimer}
      </p>
    </section>
  );
};

export default DisclaimerSection;
