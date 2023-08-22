import MainProductSection from "./compnonents/MainProductSection";
import MainProductImageSection from "./compnonents/MainProductImageSection";
import MainProductDescriptionSection from "./compnonents/MainProductDescriptionSection";
import HowItWorksSection from "./compnonents/HowItWorksSection";
import DisclaimerSection from "./compnonents/DisclaimerSection";
import OurTechnologySection from "./compnonents/OurTechnologySection";
import WeSellAlsoSection from "./compnonents/WeSellAlsoSection";
import { client } from "@/sanity/lib/client";
import { Product } from "@/typings";

const query = `*[_type == "product" && mainProduct == true][0]`;

export default async function Home() {
  const mainProduct: Product = await client.fetch(query);
  console.log(mainProduct);
  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-2">
        <MainProductSection
          mainProduct={mainProduct}
        />
        <MainProductImageSection
          mainProduct={mainProduct}
        />

        <MainProductDescriptionSection
          mainProduct={mainProduct}
        />
        <HowItWorksSection
          mainProduct={mainProduct}
        />

        <DisclaimerSection
          product={mainProduct}
        />
        <OurTechnologySection
          product={mainProduct}
        />
      </div>
      <WeSellAlsoSection
      />
    </div>
  );
}
