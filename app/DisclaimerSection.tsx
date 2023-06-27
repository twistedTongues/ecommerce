import Image from "next/image";
import P2 from "@/public/2.jpg";

const DisclaimerSection = () => {
  return (
    <section className="relative flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
      <Image
        src={P2}
        alt="hero"
        fill
        className="brightness-50 object-cover rounded-lg"
      />
      <div className="relative text-white pb-52">
        <h5 className="text-3xl uppercase font-semibold">
          Buy a <br /> tracker for <br /> your pet
        </h5>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>
      <p className="relative text-white uppercase font-semibold">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
    </section>
  );
};

export default DisclaimerSection;
