import PageHeading from "../compnonents/PageHeading";
import ProductsList from "./components/ProductsList";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import { Product } from '@/typings'
import { client } from "@/sanity/lib/client";

const query = `*[_type == "product"]`;

async function BuyPage() {
  const products: Product[] = await client.fetch(query);
  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-4">
        <div>
          <PageHeading heading={"Made from smone,for you"} />
        </div>
        <div className="lg:col-span-3">
          <Search />
        </div>
      </div>

      <ProductsList products={products}/>
      <Pagination />
    </div>
  );
};

export default BuyPage;
      // <ProductsList data={search(data)} />
          // <Search onInputChange={e => setQuery(e.target.value)} />
