import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import { useEffect } from "react";
import MarketDataCard from "./MarketDataCard";
import Footer from "./Footer";
import Modal from "./Modal";
import { socket } from "../context/SocketContext";

export const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
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
      <div className="flex overflow-x-scroll w-full scroll-x">
        <div className="flex gap-1 rounded-xl bg-skin-main   w-full">
          <div
            className={
              " cursor-pointer  px-10 w-full rounded-md  py-2 p-2 text-xs font-medium leading-5 ring-opacity-60 ring-offset-2 text-skin-white bg-skin-nav hover:bg-skin-hovercolor  hover:text-skin-white"
            }
          >
            <div className="">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/sports.png"
                  class="mx-auto object-cover rounded-full h-5 w-5 bg-skin-nav"
                />
              </a>
            </div>
            <p className="text-center">Sports</p>
          </div>
          <div
            className={
              "cursor-pointer px-10 w-full rounded-md py-2 p-2 text-xs font-medium leading-5 ring-opacity-60 ring-offset-2 text-skin-white bg-skin-nav hover:bg-skin-hovercolor hover:text-skin-white"
            }
          >
            <div className="">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/live.png"
                  class="mx-auto object-cover rounded-full h-5 w-5 bg-skin-nav "
                />
              </a>
            </div>
            <p className="text-center">Sports</p>
          </div>
          <div
            className={
              "cursor-pointer px-10 w-full rounded-md py-2 p-2 text-xs font-medium leading-5 ring-opacity-60 ring-offset-2 text-skin-white bg-skin-nav hover:bg-skin-hovercolor hover:text-skin-white"
            }
          >
            <div className="">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/trophy.png"
                  class="mx-auto object-contain  h-5 w-5 "
                />
              </a>
            </div>
            <p className="text-center">Sports</p>
          </div>
          <div
            className={
              "cursor-pointer px-10 w-full rounded-md py-2 p-2 text-xs font-medium leading-5 ring-opacity-60 ring-offset-2 text-skin-white bg-skin-nav hover:bg-skin-hovercolor hover:text-skin-white"
            }
          >
            <div className="">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/indian-casino.png"
                  class="mx-auto object-cover h-5 w-5 bg-skin-nav "
                />
              </a>
            </div>
            <p className="text-center">Sports</p>
          </div>
          <div
            className={
              "cursor-pointer px-10 w-full rounded-md py-2 p-2 text-xs font-medium leading-5 ring-opacity-60 ring-offset-2 text-skin-white bg-skin-nav hover:bg-skin-hovercolor hover:text-skin-white"
            }
          >
            <div className="">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/live-casino.png"
                  class="mx-auto object-cover  h-5 w-5 bg-skin-nav"
                />
              </a>
            </div>
            <p className="text-center">Sports</p>
          </div>
          <div
            className={
              "cursor-pointer px-10 w-full rounded-md py-2 p-2 text-xs font-medium leading-5 ring-opacity-60 ring-offset-2 text-skin-white bg-skin-nav hover:bg-skin-hovercolor hover:text-skin-white"
            }
          >
            <div className="">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/slot.png"
                  class="mx-auto object-cover  h-5 w-5 bg-skin-nav"
                />
              </a>
            </div>
            <p className="text-center">Sports</p>
          </div>
          <div
            className={
              "cursor-pointer px-10 w-full rounded-md py-2 p-2 text-xs font-medium leading-5 ring-opacity-60 ring-offset-2 text-skin-white bg-skin-nav hover:bg-skin-hovercolor hover:text-skin-white"
            }
          >
            <div className="">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/slot.png"
                  class="mx-auto object-cover  h-5 w-5 bg-skin-nav"
                />
              </a>
            </div>
            <p className="text-center">Sports</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mt-3">
          <p
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-skin-white pb-2 px-2 text-lg font-semibold cursor-pointer flex"
          >
            Cricket
            {isDropdownOpen ? (
              <RiArrowUpSLine className="ml-2 text-xl m-auto" />
            ) : (
              <IoIosArrowDown className="ml-2 text-lg  m-auto" />
            )}
          </p>
          <p className="text-skin-white pb-2 px-2 text-lg font-semibold">
            1 Event
          </p>
        </div>
        {isDropdownOpen && <MarketDataCard />}
      </div>

      <div>
        <div className="flex justify-between mt-16">
          <p className="text-skin-white pb-2 px-2 text-lg font-semibold">
            Indian Casino
          </p>
          <button className=" text-skin-primary hover:bg-skin-hovercolor text-sm bg-skin-nav px-2 p-2 mb-2  rounded-md font-semibold">
            All Indian Casino
          </button>
        </div>
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
