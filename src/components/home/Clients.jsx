import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa6";

const reviews = [
  {
    name: "Jess Hopkins",
    initial: "J",
    color: "bg-red-500",
    rating: 4.5,
    review: "Gorgeous design! Even more responsive than the previous version. A pleasure to use!",
  },
  {
    name: "Alice Banks",
    initial: "A",
    color: "bg-yellow-500",
    rating: 5,
    review: "The device has a clean design and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.",
  },
  {
    name: "Omar Hassan",
    initial: "O",
    color: "bg-sky-400",
    rating: 4,
    review: "Outstanding digital marketing service—delivers exceptional results with clear communication and innovative strategies.",
  },
  {
    name: "Ming Zhao",
    initial: "M",
    color: "bg-green-500",
    rating: 4.5,
    review: "Exceptional digital marketing expertise drives impactful results with creativity and professionalism.",
  },
];

const ReviewCard = ({ name, initial, color, rating, review }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
        {Array(fullStars)
          .fill(null)
          .map((_, index) => (
            <FaStar key={index} />
          ))}
        {halfStar && <FaStarHalf />}
      </>
    );
  };

  return (
    <div className="flex flex-col gap-4 bg-gray-700 p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className={`w-7 h-7 text-center rounded-full ${color} text-white`}>{initial}</div>
          <span>{name}</span>
        </div>
        <div className="flex p-1 gap-1 text-orange-300">
          {renderStars(rating)}
        </div>
      </div>
      <div className="text-white">{review}</div>
    </div>
  );
};

const Clients = () => {
  return (
    <div className="bg-limegreen flex justify-center items-center min-h-screen p-10">
      <div className="md:w-3/5 w-3/4 px-10 flex flex-col gap-2 p-5 bg-gray-800 text-white">
        <h1 className="py-5 text-lg">Reviews</h1>
        <div className="flex flex-col gap-3 mt-14">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
