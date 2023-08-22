import Image from "next/image";
import P2 from "@/public/2.jpg";
import { Product } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  mainProduct: Product;
};

const MainProductImageSection = ({ mainProduct }: Props) => {
  return (
    <section className="min-w-0 flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
      <div className="relative min-h-[24rem] h-full">
        <Image
          src={urlForImage({...mainProduct?.mainProductBigPicture}).url()}
          alt="photo"
          fill
          className="object-cover rounded-lg drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default MainProductImageSection;
