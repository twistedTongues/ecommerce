import DisclaimerSection from "@/app/compnonents/DisclaimerSection";
import OurTechnologySection from "@/app/compnonents/OurTechnologySection";
import PageHeading from "@/app/compnonents/PageHeading";
import ProductGallery from "./components/ProductGallery";
import ReviewsSection from "./components/ReviewsSection";
import { Product } from "@/typings";
import { client } from "@/sanity/lib/client";

// type Props = {
//   params:
// }

async function ProductPage({ params }: { params: { productId: string } }) {
  const query = `*[_type == "product" && _id == '${params.productId}'][0]`;
  const product: Product = await client.fetch(query);

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-5">
        <div>
          <PageHeading
            heading={product.name}
            price={product.price}
            rating={{}}
          />
        </div>
        <div className="lg:col-span-4">
          <ProductGallery
            product={product}
          />
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <DisclaimerSection product={product} />
        <OurTechnologySection product={product} />
      </div>

      <ReviewsSection />
    </div>
  );
}

export default ProductPage;
