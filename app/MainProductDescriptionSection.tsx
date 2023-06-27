import Image from "next/image"
import P1 from '@/public/1.jpg' 

const MainProductDescriptionSection = () => {
  return (
      <section className="flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
        <h3 className="text-3xl uppercase font-semibold">
          Our <br /> tracker
        </h3>
        <p>
          There is an SOS <br /> button if the pet is lost
        </p>
        <div className="flex justify-between space-x-7 pb-5">
          <div className="space-y-3">
            <p>
              Works inside <br /> buildings
            </p>
            <p>
              Works even <br /> underwater
            </p>
          </div>
          <div className="space-y-3">
            <p>
              The tracker is small,<br /> you can hang it on a cat
            </p>
            <p>
              Take your dog outdoors<br /> and let them run wild
            </p>
          </div>
        </div>
        <div className="relative h-96">
          <Image
            src={P1}
            alt="back"
            fill
            className="object-cover rounded-lg drop-shadow-lg"
          />
        </div>
      </section>
  )
}

export default MainProductDescriptionSection

