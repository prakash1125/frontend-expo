import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/images/casinomarina.jpg";
import img2 from "../assets/images/casinomarina.jpg";
import img3 from "../assets/images/casinomarina.jpg";
import img4 from "../assets/images/casinomarina.jpg";
import img5 from "../assets/images/casinomarina.jpg";
export const RightNavbar = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [img1, img2, img3, img4, img5];

  return (
    <>
      <div class="max-w-xs mx-auto bg-[#22262a] rounded-md mt-2">
        <div className="p-1 flex justify-center">
          <button className=" text-white bg-[#32383e] p-3 text-sm rounded-md w-full font-semibold">
            Live Casino Games
          </button>
        </div>

        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="">
              <img
                src={img}
                className="w-full p-2 rounded-2xl"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div class="max-w-xs mx-auto bg-[#22262a] rounded-sm mt-2 mb-2">
        <div className="p-1 flex justify-center">
          <button className=" text-white text-sm bg-[#32383e] p-3 rounded-md w-full font-semibold">
            Popular Events
          </button>
        </div>

        <div class="container flex flex-col items-center justify-center w-full mx-auto rounded-lg shadow dark:bg-gray-800">
          <ul class="flex flex-col divide-y divide-black w-full">
            <li class="flex flex-row">
              <div class="flex items-center flex-1 p-3 cursor-pointer select-none">
              <div class="flex flex-col items-center justify-center w-10 h-10 mr-4 ">
                  <a href="#" class="relative block">
                    <img
                      alt="profil"
                      src="https://sportsexch.com/images/icons/cricket.png"
                      class="mx-auto object-cover rounded-full h-10 w-10 bg-white p-2"
                    />
                  </a>
                </div>
                <div class="flex-1 pl-1 mr-16">
                  <div class="font-medium text-[#cfd4d8]">IreLand</div>
                  <div class="text-xs font-bold text-[#cfd4d8] ">
                   Bhangladesh
                  </div>
                </div>
                <div class="text-xs font-bold text-[#cfd4d8] ">
                  6:00 AM
                </div>
              </div>
            </li>
            <li class="flex flex-row">
              <div class="flex items-center flex-1 p-4 cursor-pointer select-none">
              <div class="flex flex-col items-center justify-center w-10 h-10 mr-4 ">
                  <a href="#" class="relative block">
                    <img
                      alt="profil"
                      src="https://sportsexch.com/images/icons/cricket.png"
                      class="mx-auto object-cover rounded-full h-10 w-10 bg-white p-2"
                    />
                  </a>
                </div>
                <div class="flex-1 pl-1 mr-16">
                  <div class="font-medium text-[#cfd4d8]">IreLand</div>
                  <div class="text-xs font-bold text-[#cfd4d8] ">
                   Bhangladesh
                  </div>
                </div>
                <div class="text-xs font-bold text-[#cfd4d8] ">
                  6:00 AM
                </div>
              </div>
            </li>
            <li class="flex flex-row">
              <div class="flex items-center flex-1 p-4 cursor-pointer select-none">
              <div class="flex flex-col items-center justify-center w-10 h-10 mr-4 ">
                  <a href="#" class="relative block">
                    <img
                      alt="profil"
                      src="https://sportsexch.com/images/icons/cricket.png"
                      class="mx-auto object-cover rounded-full h-10 w-10 bg-white p-2"
                    />
                  </a>
                </div>
                <div class="flex-1 pl-1 mr-16">
                  <div class="font-medium text-[#cfd4d8]">IreLand</div>
                  <div class="text-xs font-bold text-[#cfd4d8] ">
                   Bhangladesh
                  </div>
                </div>
                <div class="text-xs font-bold text-[#cfd4d8] ">
                  6:00 AM
                </div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};
