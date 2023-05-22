import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoIosArrowDown } from 'react-icons/io';
import { RiArrowUpSLine } from 'react-icons/ri';
const navigation = [
  { name: "SPORTS", href: "#", current: true },
  { name: "IN-PLAY", href: "#", current: false },
  { name: "IPL CLUB", href: "#", current: false },
  { name: "INDIAN CASINO", href: "#", current: false },
  { name: "LIVE CASINO", href: "#", current: false },
  { name: "SLOTS", href: "#", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const SideNavbar = () => { 
  const menu = [
    {
      title: "Cricket",
      icon: "https://sportsexch.com/images/icons/cricket.png",
      data: ["dropdown1", "dropdown2", "dropdown3"],
    },
    {
      title: "Soccer",
      icon: "https://sportsexch.com/images/icons/soccer.png",
      data: ["dropdown1", "dropdown2", "dropdown3"],
    },
    {
      title: "Tennis",
      icon: "https://sportsexch.com/images/icons/tennis.png",
      data: ["dropdown1", "dropdown2", "dropdown3"],
    },
    {
      title: "Golf",
      icon: "https://sportsexch.com/images/icons/golf.png",
      data: ["dropdown1", "dropdown2", "dropdown3"],
    },
    {
      title: "Rugby League",
      icon: "https://sportsexch.com/images/icons/rugby-league.png",
    },
    {
      title: "Boxing",
      icon: "https://sportsexch.com/images/icons/boxing.png",
    },
    {
      title: "Basket Ball",
      icon: "https://sportsexch.com/images/icons/basketball.png",
    },
    {
      title: "Horse Racing",
      icon: "https://sportsexch.com/images/icons/horse-racing.png",
    },
    {
      title: "Esports",
      icon: "https://sportsexch.com/images/icons/esports.png",
    },
    {
      title: "VolleyBall",
      icon: "https://sportsexch.com/images/icons/volleyball.png",
    },
    {
      title: "Cycling",
      icon: "https://sportsexch.com/images/icons/cycling.png",
    },
    {
      title: "Snooker",
      icon: "https://sportsexch.com/images/icons/snooker.png",
    },
    {
      title: "Base ball",
      icon: "https://sportsexch.com/images/icons/baseball.png",
    },
    {
      title: "Net Ball",
      icon: "https://sportsexch.com/images/icons/netball.png",
    },
    {
      title: "Mixed Martial Arts",
      icon: "https://sportsexch.com/images/icons/mixed-martial-arts.png",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-full px-4 pt-2 z-40">
        <div className="flex flex-col justify-start mb-2">
          <button className="flex justify-start text-[#CCD1D5] bg-[#22262a] p-3 rounded-md w-full text-xs font-semibold relative">
            SPORTS
          </button>
        </div>
      </div>
      <ul className="w-full px-4">
        {menu.map((item, index) => (
          <li
          onClick={() => toggleAccordion(index)}
            key={index}
            className={`cursor-pointer flex flex-col justify-between  mb-2 py-3  w-full  hover:bg-[#22262a] rounded-md ${
              activeIndex === index ? "bg-[#22262a]" : ""
              
            }`}
          >
            <div className="flex  justify-between items-center gap-3 px-4">
              <div className="flex items-center gap-3 ">
                <img src={item.icon} alt="" className="w-4 h-4 invert" />
                <h4 className="text-[#CCD1D5] text-[14px] font-semibold">
                  {item.title}
                </h4>
              </div>
              {item?.data ? (
                <div className="flex items-center gap-3">
                  <span className="flex justify-center bg-[#EEE] rounded-sm w-5 h-4 rounded-xs font-semibold text-xs">
                    {item?.data?.length}{" "}
                  </span>
                  <h4
                    className="flex justify-center text-[#EEE] cursor-pointer"
                    
                  >
                    {activeIndex === index ?<RiArrowUpSLine className="font-semibold"/> : <IoIosArrowDown className="font-semibold"/>}
                  </h4>
                </div>
              ) : null}
            </div>
            {activeIndex === index && (
              <div className="flex flex-col items-start gap-4 pt-2 px-4">
                {item.data.map((dropdownItem, dropdownIndex) => (
                  // <li key={dropdownIndex}>{dropdownItem}</li>
                  <h4
                    key={dropdownIndex}
                    className="text-[#EEE] text-sm font-semibold"
                  >
                    {dropdownItem} 
                  </h4>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

// {
/* <ul className="w-100">
{
  menu.map((item) => {
    return (

      <li className="flex justify-between gap-4 mb-2 py-3 px-3 w-full hover:bg-[#22262a] rounded-md">
        <div className="flex items-center gap-3">
          <img src={item.icon} alt="" className="w-4 h-4 invert " />
          <h4 className="text-[#EEE] text-sm font-bold"> {item.title} </h4>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex justify-center bg-gray-300  rounded-sm w-4 h-4 rounded-xs text-xs">2</span>
          <h4 className="flex justify-center text-[#EEE]">{">"}</h4>
        </div>
      </li>
    )
  })
}
</ul> */
// }
