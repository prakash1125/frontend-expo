import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import MarketDataCard from "./MarketDataCard";
import Footer from "./Footer";

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
        <div className="flex gap-2 rounded-xl bg-black p-1 w-full">
          <div
            className={
              " cursor-pointer px-10 w-full rounded-md py-2 p-2 text-xs font-medium leading-5 ring-opacity-60 ring-offset-2 text-white bg-[#22262a] hover:bg-[#393C40]  hover:text-white"
            }
          >
            <div className="">
              <a href="#" className="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/sports.png"
                  className="mx-auto object-cover rounded-full h-5 w-5 bg-[#22262a]"
                />
              </a>  
            </div>
            <p className="text-center">Sports</p>
          </div>
          <div
            className={
              "cursor-pointer px-10 w-full rounded-md py-2 p-2 text-xs font-medium leading-5 ring-opacity-60 ring-offset-2 text-white bg-[#22262a] hover:bg-[#393C40] hover:text-white"
            }
          >
            <div className="">
              <a href="#" className="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/live.png"
                  className="mx-auto object-cover rounded-full h-5 w-5 bg-[#22262a] "
                />
              </a>
            </div>
            <p className="text-center">Sports</p>
          </div>
          <div
            className={
              "cursor-pointer px-10 w-full rounded-md py-2 p-2 text-xs font-medium leading-5 ring-opacity-60 ring-offset-2 text-white bg-[#22262a] hover:bg-[#393C40] hover:text-white"
            }
          >
            <div className="">
              <a href="#" className="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/trophy.png"
                  className="mx-auto object-contain  h-5 w-5 "
                />
              </a>
            </div>
            <p className="text-center">Sports</p>
          </div>
          <div
            className={
              "cursor-pointer px-10 w-full rounded-md py-2 p-2 text-xs font-medium leading-5 ring-opacity-60 ring-offset-2 text-white bg-[#22262a] hover:bg-[#393C40] hover:text-white"
            }
          >
            <div className="">
              <a href="#" className="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/indian-casino.png"
                  className="mx-auto object-cover h-5 w-5 bg-[#22262a] "
                />
              </a>
            </div>
            <p className="text-center">Sports</p>
          </div>
          <div
            className={
              "cursor-pointer px-10 w-full rounded-md py-2 p-2 text-xs font-medium leading-5 ring-opacity-60 ring-offset-2 text-white bg-[#22262a] hover:bg-[#393C40] hover:text-white"
            }
          >
            <div className="">
              <a href="#" className="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/live-casino.png"
                  className="mx-auto object-cover  h-5 w-5 bg-[#22262a]"
                />
              </a>
            </div>
            <p className="text-center">Sports</p>
          </div>
          <div
            className={
              "cursor-pointer px-10 w-full rounded-md py-2 p-2 text-xs font-medium leading-5 ring-opacity-60 ring-offset-2 text-white bg-[#22262a] hover:bg-[#393C40] hover:text-white"
            }
          >
            <div className="">
              <a href="#" className="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/slot.png"
                  className="mx-auto object-cover  h-5 w-5 bg-[#22262a]"
                />
              </a>
            </div>
            <p className="text-center">Sports</p>
          </div>
       </div>
      </div>


      
        

       

      <div>
        <div className="flex justify-between mt-3">
          <p className="text-white pb-2 px-2 text-lg font-bold">Cricket</p>
          <p className="text-white pb-2 px-2 text-lg font-bold">1 Event</p>
        </div>
        
       
        <MarketDataCard/>
      </div>




      <div>
        <div className="flex justify-between mt-16">
          <p className="text-white pb-2 px-2 text-lg font-bold">Cricket</p>
          <p className="text-white pb-2 px-2 text-lg font-bold">1 Event</p>
        </div>
        <Slider {...settings2}>
          {images2.map((img, index) => (
            <div key={index} className="flex  w-full scroll-x pb-6">
              <div key={index} className="p-1  flex flex-col">
                <img
                  src={img}
                  className="h-30 min-w-[200px] rounded-md"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
            <Footer/>
    </div>
  );
};
