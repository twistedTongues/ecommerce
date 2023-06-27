import Image from "next/image" 
import P2 from '@/public/2.jpg'

const MainProductImageSection = () => {
  return (
      <section className="flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
        <div className="relative h-96">
          <Image
            src={P2}
            alt="photo"
            fill
            className="object-cover rounded-lg drop-shadow-lg"
          />
        </div>
      </section>

  )
}

export default MainProductImageSection
