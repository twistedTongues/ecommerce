import MainProductSection from "./MainProductSection";
import MainProductImageSection from "./MainProductImageSection";
import MainProductDescriptionSection from "./MainProductDescriptionSection";
import HowItWorksSection from "./HowItWorksSection";
import DisclaimerSection from "./DisclaimerSection";
import OurTechnologySection from "./OurTechnologySection";
import WeSellAlsoSection from "./WeSellAlsoSection";

export default function Home() {
  return (
    <div className="space-y-5">
      <MainProductSection
        productName={"Smart tracker for tracking the location of pets"}
        price={350}
        slogan={"Your pet is always here"}
      />
      <MainProductImageSection />
      <MainProductDescriptionSection />
      <HowItWorksSection />
      <DisclaimerSection />
      <OurTechnologySection />
      <WeSellAlsoSection />
    </div>
  );
}
