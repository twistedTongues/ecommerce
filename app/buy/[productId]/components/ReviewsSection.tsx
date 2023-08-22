import Review from "./Review";

const ReviewsSection = () => {
  return (
    <section id="review" className="flex flex-col bg-gray-100 rounded-lg p-5 space-y-5 drop-shadow-lg">
      <h2 className="relative text-3xl uppercase font-semibold">
        Reviews
      </h2>

      <div className="flex flex-col p-5 space-y-10">
        <Review />
        <hr className="h-px my-8 bg-gray-300 border-0"/>
        <Review />
        <hr className="h-px my-8 bg-gray-300 border-0"/>
        <Review />
      </div>
    </section>
  );
};

export default ReviewsSection;
