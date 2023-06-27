import Image from 'next/image'
import Link from 'next/link'
import P1 from '@/public/1.jpg'

type Props = {
  productName: string,
  price: number,
  slogan: string,
}

const MainProductSection = ({productName, price, slogan}: Props) => {
  return (
      <section className="flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
        <h2 className="w-64 text-3xl uppercase font-semibold">
          {productName}
        </h2>
        <div className="relative h-52 w-8/12">
          <Image
            priority
            src={P1}
            alt="hero"
            fill
            className="object-cover rounded-lg drop-shadow-lg"
          />
        </div>
        <div className="flex space-x-4 items-center w-full">
          <span className="text-3xl font-semibold">{price}$</span>
          <p className="text-stone-500">{slogan}</p>
        </div>
        <Link
          href="/"
          className="text-xl py-3 border border-neutral-700 rounded-full hover:border-red-600 flex justify-center"
        >
          <button>
            Free Trial
          </button>
        </Link>
        <Link
          href="/"
          className="bg-neutral-700 text-xl py-3 text-white rounded-full hover:bg-red-600 flex justify-center"
        >
          <button>
            Buy Now
          </button>
        </Link>
      </section>
  )
}

export default MainProductSection;
