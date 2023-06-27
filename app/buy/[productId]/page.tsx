import DisclaimerSection from "@/app/DisclaimerSection";
import OurTechnologySection from "@/app/OurTechnologySection";
import PageHeading from "@/app/PageHeading";
import ProductGallery from "@/app/ProductGallery";
import ReviewsSection from "./ReviewsSection";

const ProductPage = () => {
  return (
    <div className="space-y-5">
      <PageHeading heading='Product Name' price={250} rating={{}} />
      <ProductGallery />
      <DisclaimerSection />
      <OurTechnologySection />
      <ReviewsSection />
    </div>
  );
};

export default ProductPage;
