import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
// BiRightArrowAlt
const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : (prev) => prev - 1);
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : (next) => next + 1);
  }
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div style={{transform: `translateX(-${currentSlide * 100}vw)`}} className="w-[200vw] h-full flex transition-transform duration-1000">
          {data.map((img) => {
            return (
              <img
                className="w-screen h-full object-cover"
                src={img}
                alt="img"
                loading="priority"
              />
            );
          })}
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <HiArrowLeft />
          </div>
          <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
