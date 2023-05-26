import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import MarketDataCard from "./MarketDataCard";
import { MdOutlineSportsSoccer } from "react-icons/md";
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

  const [expandedTables, setExpandedTables] = useState([]);

  const handleClick = (index) => {
    if (expandedTables.includes(index)) {
      setExpandedTables(expandedTables.filter((item) => item !== index));
    } else {
      setExpandedTables([...expandedTables, index]);
    }
  };

  const sportsLiveData = [
    {
      tabName: "One Day International",
      placeScores: [
        {
          icon: MdOutlineSportsSoccer,
          placeNameTop: "Ireland",
          placeNameBottom: "Bangladesh",
          time: "Today 19:30",
          isLive: "LIVE",
          leagueName: [{ name: "F 45" }, { name: "B" }],
          values: [
            { center: 1.73 },
            { center: 1.73 },
            { center: 1.73 },
            { center: "--" },
            { center: "--" },
            { center: 1.73 },
          ],
        },
      ],
    },
    {
      tabName: "Indian Premier League",
      placeScores: [
        {
          placeNameTop: "Mumbai Indians",
          placeNameBottom: "Royal Challengers Bangalore",
          time: "28 May 19:30",
          leagueName: [{ name: "F 2" }, { name: "B" }],
          values: [
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
          ],
        },
        {
          placeNameTop: "Indian Premire",
          placeNameBottom: "League",
          time: "Today 19:30",
          leagueName: [{ name: "F 45" }, { name: "B" }],
          values: [
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
          ],
        },
      ],
    },
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
                <p className="text-center break-normal w-14">
                  {element.buttonName}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dropdown games */}
      <div>
        {sportsLiveData.length > 0 ? (
          <>
            {/* <div className="btn-wrapper">
              {liveSportsNameBtn.map((element, index) => {
                return (
                  <Button
                    icon={<element.icon />}
                    key={index}
                    className="live-score"
                    name={element.tabName}
                  />
                );
              })}
            </div> */}

            {sportsLiveData.map((data, index) => (
              <div key={index} className="liveScore-table">
                <button
                  type="button"
                  onClick={() => handleClick(index)}
                  className={`flex items-center w-full p-2 mt-3 text-gray-900 bg-[#32383e] transition duration-75 rounded-lg rounded-b-none group  dark:text-white dark:hover:bg-gray-700 ${
                    expandedTables.includes(index)
                      ? "bg-[#32383e] dark:bg-gray-700 text-[#000]"
                      : ""
                  }`}
                  aria-controls={`dropdown-example-${index}`}
                  data-collapse-toggle={`dropdown-example-${index}`}
                >
                  <span className="flex-1 ml-3 text-left tab-name text-white active:text-[#000] whitespace-nowrap">
                    {data.tabName}
                  </span>
                  <svg
                    className={`w-6 h-6 ${
                      expandedTables.includes(index)
                        ? "rotate-animation"
                        : "remove-rotation-animation"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`transition-transform bg-[#22262a] ${
                    expandedTables.includes(index)
                      ? "translate-x-0"
                      : "translate-x-full"
                  } ${expandedTables.includes(index) ? "block" : "hidden"}`}
                  id={`dropdown-example-${index}`}
                >
                  {data.placeScores.map((element, index) => {
                    return <MarketDataCard key={index} element={element} />;
                  })}
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {/* <div className="btn-wrapper">
              {liveSportsNameBtn.map((element, index) => {
                return (
                  <Button
                    icon={<element.icon />}
                    key={index}
                    className="live-score"
                    name={element.tabName}
                  />
                );
              })}
            </div> */}
            <div className="match-availability">
              <p className="message">
                There is a no match available at this time{" "}
                {/* <span className="message-highlight">{tabname}</span>. */}
              </p>
            </div>
          </>
        )}
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
