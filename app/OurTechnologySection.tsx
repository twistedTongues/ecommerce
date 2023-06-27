import Image from "next/image"
import P2 from '@/public/2.jpg'

const OurTechnologySection = () => {
  return (
      <section className="flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
        <h5 className="text-3xl uppercase font-semibold">
          Our <br /> Technology
        </h5>
        <ul className="space-y-3 pb-5">
          <li className="flex justify-between items-center tracking-wide border-b-2 border-neutral-300 pb-3">
            <p className="w-1/2">Aluminium D-ring</p>
            <span className="text-5xl font-extralight">+</span>
          </li>
          <li className="flex justify-between items-center tracking-wide border-b-2 border-neutral-300 pb-3">
            <p className="w-1/2">Different types of clasps</p>
            <span className="text-5xl font-extralight">+</span>
          </li>
          <li className="flex justify-between items-center tracking-wide border-b-2 border-neutral-300 pb-3">
            <p className="w-1/2">
              Never worry about your dog getting out again
            </p>
            <span className="text-5xl font-extralight">+</span>
          </li>
          <li className="flex justify-between items-center tracking-wide border-b-2 border-neutral-300 pb-3">
            <p className="w-1/2">
              Take your dog outdoors and let them run wild
            </p>
            <span className="text-5xl font-extralight">+</span>
          </li>
          <li className="flex justify-between items-center tracking-wide">
            <p className="w-1/2">
              Harness the power of GPS and network trackdog 24/7
            </p>
            <span className="text-5xl font-extralight">+</span>
          </li>
        </ul>
        <div className="relative h-96">
          <Image
            src={P2}
            alt="back"
            fill
            className="object-cover rounded-lg drop-shadow-lg"
          />
        </div>
      </section>
  )
}

export default OurTechnologySection
