import Link from "next/link";

const ProductGallery = () => {
  return (
    <section className="flex flex-col bg-gray-100 rounded-lg p-5 space-y-5 drop-shadow-lg">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg drop-shadow-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
            alt=""
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg drop-shadow-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg drop-shadow-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg drop-shadow-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg drop-shadow-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg drop-shadow-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <p>Lorem ipsum dolor sit amet, tat.</p>

        <Link
          href="/"
          className="bg-neutral-700 text-xl py-3 text-white rounded-full hover:bg-red-600 flex justify-center"
        >
          <button>
            Buy Now
          </button>
        </Link>
    </section>
  );
};

export default ProductGallery;
