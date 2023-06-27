import PageHeading from "../PageHeading";
import ProductsList from "./ProductsList";
import Pagination from "./Pagination";
import Search from "./Search";

const BuyPage = () => {
  return (
    <div className="space-y-5">
      <PageHeading heading={'Made from smone,for you'}/>
      <Search />
      <ProductsList />
      <Pagination />
    </div>
  );
};

export default BuyPage;
