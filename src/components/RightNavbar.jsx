import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/images/casinomarina.jpg";
import img2 from "../assets/images/casinomarina.jpg";
import img3 from "../assets/images/casinomarina.jpg";
import img4 from "../assets/images/casinomarina.jpg";
import img5 from "../assets/images/casinomarina.jpg";
import { useLocation } from "react-router-dom";
export const RightNavbar = () => {
  const location = useLocation();
  const isIndianPremierLeague = location.pathname === "/indian-premier-league";
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [img1, img2, img3, img4, img5];

  const myBets = [
    {
      selection: "Mumbai Indians",
      odds: 10,
      stake: 500,
      pl: "4,500",
      time: "2023-05-19 02:30:50",
    },
  ];

  const [isLive, setIsLive] = useState(false);

  const handleLiveTVClick = () => {
    setIsLive(!isLive);
  };

  return (
    <>
      {!isIndianPremierLeague && (
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
      )}

      {location.pathname === "/indian-premier-league" && (
        <>
          <div class="max-w-xs mx-auto bg-[#22262a] rounded-sm mt-2 mb-2">
            <div className="p-1 flex justify-center">
              <button
                onClick={handleLiveTVClick}
                className="flex justify-center items-center gap-2 text-white text-sm bg-[#32383e] p-3 rounded-md w-full font-semibold"
              >
                <span>Live TV</span>
              </button>
            </div>

            {isLive && (
              <div className="live-matches px-3 py-2 transition-transform duration-2000">
                <div className="bg-[#000] text-center pt-5 h-64 w-full rounded">
                  <span className="text-2xl font-extrabold text-[#d3d3d3]">
                    Match Not live
                  </span>
                </div>
              </div>
            )}
          </div>

          <div class="max-w-xs mx-auto bg-[#22262a] rounded-sm mt-2 mb-2">
            <div className="p-1 flex justify-center">
              <button className="flex justify-center items-center gap-2 text-white text-sm bg-[#32383e] p-3 rounded-md w-full font-semibold">
                <span>My Bets </span>
                <span className="flex items-center justify-center bg-[#EEE] text-[#000] rounded-full p-0.5 w-5 h-5 font-semibold text-xs">
                  {myBets.length}{" "}
                </span>
              </button>
            </div>

            <div className="h-80">
              <table class="overflow-scroll border-collapse w-full  text-center">
                <thead>
                  <tr>
                    <th class=" text-xs font-bold text-center uppercase text-left px-2 py-2 text-white">
                      SELECTION
                    </th>
                    <th class=" text-xs font-bold text-center uppercase text-left px-2 py-2 text-white">
                      ODD
                    </th>
                    <th class=" text-xs font-bold text-center uppercase text-left px-2 py-2 text-white">
                      STAKE
                    </th>
                    <th class=" text-xs font-bold text-center uppercase text-left px-2 py-2 text-white">
                      P/L
                    </th>
                    <th class=" text-xs font-bold text-center uppercase text-left px-2 py-2 text-white">
                      TIME
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {myBets.map((element, index) => (
                    <tr className="border-t-[#f9fafa]" key={index}>
                      <td class="bg-[#008efb] text-xs font-bold uppercase text-left px-2 py-1.5 text-[#f9fafa]">
                        {element.selection}
                      </td>
                      <td class="bg-[#008efb] text-xs font-bold uppercase text-left px-2 py-1.5 text-[#f9fafa]">
                        {element.odds}
                      </td>
                      <td class="bg-[#008efb] text-xs font-bold uppercase text-left px-2 py-1.5 text-[#f9fafa]">
                        {element.stake}
                      </td>
                      <td class="bg-[#008efb] text-xs font-bold uppercase text-left px-2 py-1.5 text-[#f9fafa]">
                        {element.pl}
                      </td>
                      <td class="bg-[#008efb] text-xs font-bold uppercase text-left px-2 py-1.5 text-[#f9fafa]">
                        {element.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

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
                <div class="text-xs font-bold text-[#cfd4d8] ">6:00 AM</div>
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
                <div class="text-xs font-bold text-[#cfd4d8] ">6:00 AM</div>
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
                <div class="text-xs font-bold text-[#cfd4d8] ">6:00 AM</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
