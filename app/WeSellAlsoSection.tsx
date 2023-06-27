import ProductCard from "./ProductCard";
import Link from "next/link";

const WeSellAlsoSection = () => {
  return (
      <section className="flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
        <h2 className="relative text-3xl uppercase font-semibold">
          We Sell <br /> Also
        </h2>
        <div className="w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory h-fit">
          <ProductCard productName={'A Smart tracker for tracking pets'} description={'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'} price={300} slogan={'Slogan1'}/>
          <ProductCard productName={'Smth product 123445'} description={'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'} price={300} slogan={'Slogan'} /> 
        </div>
      <div>
        <Link
          href="/buy"
          className="text-xl py-3 border border-neutral-700 rounded-full hover:bg-neutral-700 flex justify-center hover:text-white"
        >
          <button>View All</button>
        </Link>
        </div>
      </section>
  )
}

export default WeSellAlsoSection
