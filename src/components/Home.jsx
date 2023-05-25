import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import MarketDataCard from "./MarketDataCard";
import Footer from "./Footer";
import Modal from "./Modal";

import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";

export const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const bodyButton = [
    {
      icon: "https://sportsexch.com/images/icons/sports.png",
      buttonName: "Sports",
    },
    {
      icon: "https://sportsexch.com/images/icons/live.png",
      buttonName: "In-Play",
    },
    {
      icon: "https://sportsexch.com/images/icons/sports.png",
      buttonName: "IPL Cup",
    },
    {
      icon: "https://sportsexch.com/images/icons/trophy.png",
      buttonName: "Sports",
    },
    {
      icon: "https://sportsexch.com/images/icons/indian-casino.png",
      buttonName: "Sports",
    },
    {
      icon: "https://sportsexch.com/images/icons/live-casino.png",
      buttonName: "Sports",
    },
    {
      icon: "https://sportsexch.com/images/icons/trophy.png",
      buttonName: "Sports",
    },
  ];

  const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings2 = {
    // dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
  };

  const images = [
    "https://sportsexch.com/images/banner/slider06.png",
    "https://sportsexch.com/images/banner/slider05.png",
    "https://sportsexch.com/images/banner/slider04.png",
    "https://sportsexch.com/images/banner/slider03.png",
    "https://sportsexch.com/images/banner/slider02.png",
  ];

  const images2 = [
    "https://d2.fawk.app/assets/images/LeftSiteMenu/games/98790.jpg",
    "https://d2.fawk.app/assets/images/LeftSiteMenu/games/98790.jpg",
    "https://d2.fawk.app/assets/images/LeftSiteMenu/games/98790.jpg",
    "https://d2.fawk.app/assets/images/LeftSiteMenu/games/98790.jpg",
    "https://d2.fawk.app/assets/images/LeftSiteMenu/games/98790.jpg",
    "https://d2.fawk.app/assets/images/LeftSiteMenu/games/98790.jpg",
    "https://d2.fawk.app/assets/images/LeftSiteMenu/games/98790.jpg",
    "https://d2.fawk.app/assets/images/LeftSiteMenu/games/98790.jpg",
  ];

  return (
    <div className="w-full sm:px-0 mb-4">
      {/* Home Slider */}
      <div>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="">
              <img
                src={img}
                className="w-full rounded-xl"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Home Page buttons */}
      <div className="flex ">
        <div className="flex overflow-x-scroll w-full scroll-x gap-1 rounded-xl bg-black w-full">
          {/* Mapping to the button */}
          {bodyButton.map((element, index) => {
            return (
              <div
                className={
                  " cursor-pointer flex flex-col items-center  flex-grow px-10 w-full rounded-md  py-2 p-2 text-xs font-medium leading-5 ring-opacity-60 ring-offset-2 text-white bg-[#22262a] hover:bg-[#393C40]  hover:text-white"
                }
              >
                  <a href="#" class="relative block">
                    <img
                      alt="profil"
                      src={element.icon}
                      class="mx-auto object-cover rounded-full h-5 w-5 bg-[#22262a]"
                    />
                  </a>
                <p className="text-center break-normal w-14">{element.buttonName}</p>
              </div>
            );
          })}
        </div>
      </div>


          {/* Dropdown games */}
      <div>
        <div className="flex justify-between mt-3">
          <p
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white pb-2 px-2 text-lg font-semibold cursor-pointer flex"
          >
            Cricket
            {isDropdownOpen ? (
              <RiArrowUpSLine className="ml-2 text-xl m-auto" />
            ) : (
              <IoIosArrowDown className="ml-2 text-lg  m-auto" />
            )}
          </p>
          <p className="text-white pb-2 px-2 text-lg font-semibold">1 Event</p>
        </div>
        {isDropdownOpen && <MarketDataCard />}
      </div>

      <div>
        <div className="flex justify-between mt-16">
          <p className="text-white pb-2 px-2 text-lg font-semibold">
            Indian Casino
          </p>
          <button className=" text-[#dde0e3] text-sm bg-[#22262a] px-2 p-2 mb-2  rounded-md font-semibold">
            All Indian Casino
          </button>
        </div>

        {/* Home page bottom slider */}
        <Slider {...settings2}>
          {images2.map((img, index) => (
            <div key={index} className=" scroll-x pb-6">
              <div key={index} className="px-1">
                <img
                  src={img}
                  className="  object-cover rounded-md "
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* <Footer /> */}
      {/* <Modal/> */}
    </div>
  );
};
