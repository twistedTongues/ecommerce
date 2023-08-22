import Image from "next/image";
import P1 from "@/public/1.jpg";
import { Product } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  mainProduct: Product;
};

const MainProductDescriptionSection = ({ mainProduct }: Props) => {
  return (
    <section className="min-w-0 flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
      <h3 className="text-3xl uppercase font-semibold w-48">
        {mainProduct.descriptionSection.slogan}
      </h3>
      <p className="w-40 pb-5">
        {mainProduct.descriptionSection.feature1}
      </p>
      <div className="flex justify-between space-x-10 pb-5 lg:w-3/4 lg:flex-grow">
        <div className="space-y-10 w-44">
          <p>
            {mainProduct.descriptionSection.feature2}
          </p>
          <p>
            {mainProduct.descriptionSection.feature3}
          </p>
        </div>
        <div className="space-y-10 w-96">
          <p>
            {mainProduct.descriptionSection.feature4}
          </p>
          <p>
            {mainProduct.descriptionSection.feature5}
          </p>
        </div>
      </div>
      <div className="relative h-96 lg:h-3/4">
        <Image
          src={urlForImage({ ...mainProduct?.descriptionSection.image }).url()}
          alt="back"
          fill
          className="object-cover rounded-lg drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default MainProductDescriptionSection;
