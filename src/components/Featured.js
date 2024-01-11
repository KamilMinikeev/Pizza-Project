import React, { useState, useEffect } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const sliders = [
  {
    url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
  },
  {
    url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
  },
  {
    url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
  },
];

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    if (currentIndex == 0) {
      setCurrentIndex(sliders.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const nextSlider = () => {
    if (currentIndex == sliders.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const moveToNextSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section>
      <div className="max-w-[1520px] h-[500px] w-full m-auto py-4 px-4 relative group">
        <div
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500 ease-linear"
          style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] translate-y-[-50%] left-8 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlider} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] translate-y-[-50%] right-8 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlider} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {sliders.map((dot, index) => (
            <RxDotFilled
              key={index}
              onClick={() => moveToNextSlide(index)}
              className={
                index == currentIndex
                  ? "text-orange-400 text-3xl cursor-pointer"
                  : "text-black text-3xl cursor-pointer"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
