import { Product } from "@/typings";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  mainProduct: Product;
};

const HowItWorksSection = ({ mainProduct }: Props) => {
  return (
    <section className="min-w-0 flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
      <h4 className="text-3xl uppercase font-semibold">
        How it <br /> Works
      </h4>
      <p>
        {mainProduct.howItWorksSection.description1}
      </p>
      <p className="pb-10">
        {mainProduct.howItWorksSection.description2}
      </p>

      <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl drop-shadow-lg">
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute">
        </div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg">
        </div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg">
        </div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg">
        </div>
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
          <Image
            src={urlForImage({...mainProduct?.howItWorksSection.image}).url()}
            className="object-cover rounded-3xl w-[272px] h-[572px]"
            alt="image-in-mockup"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
