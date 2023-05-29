import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoIosArrowDown } from 'react-icons/io';
import { RiArrowUpSLine } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux"
import { getSport } from "../redux/actions"

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

  // ==================================CALLING THE API DATA======================================

  const dispatch = useDispatch();
  let getSportData = useSelector((state) => state.GetSport);
  // let sportName = getSportData.getSport.data;

  // let allSports = [sportName.map((item)=>(item.name))]; 


  console.log("getSportData", getSportData)
  useEffect(() => {
    dispatch(
      getSport()
    );
  }, [])
// ===============================================================================================

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
          <button className="flex justify-start text-skin-primary  bg-skin-cardhead p-3 rounded-md w-full text-xs font-semibold relative">
            SPORTS
          </button>
        </div>
      </div>
      <ul className="w-full px-4">
        {getSportData?.getSport?.data?.map((item, index) => (
          <li
            onClick={() => toggleAccordion(index)}
            key={index}
            className={`cursor-pointer flex flex-col justify-between  mb-2 py-3   w-full  hover:bg-skin-cardhead rounded-md ${activeIndex === index ? "bg-skin-cardhead" : ""

              }`}
          >
            <div className="flex  justify-between items-center px-4">
              <div className="flex items-center gap-3 ">
                <img src={require(`../assets/images/sidemenu/${item.slugName}.png`)} alt="" className="w-4 h-4 invert sidebar " />
                <h4 className="text-skin-primary  text-[14px] font-semibold">
                  
                  {item.name}
                </h4>
              </div>
              {item?.name ? (
                <div className="flex items-center gap-3">
                  <span className="flex justify-center bg-skin-imgbg rounded-sm w-5 h-4 rounded-xs font-semibold text-xs">
                    {item?.name?.length}{" "}
                  </span>
                  <h4
                    className="flex justify-center text-skin-secondary  cursor-pointer"

                  >
                    {activeIndex === index ? <RiArrowUpSLine className="font-semibold" /> : <IoIosArrowDown className="font-semibold" />}
                  </h4>
                </div>
              ) : null}
            </div>
            {activeIndex === index && (
              <div className="flex flex-col items-start  pt-2 m-1">
                  <div className="justify-between pl-3 pr-4 rounded-md py-3 hover:bg-skin-cardhead  flex w-full">
                    <h4
                      className="text-skin-secondary text-sm font-semibold"
                    >
                      {item.sportsCode}
                    </h4>
                    <IoIosArrowDown className="font-semibold text-white text-sm" />
                  </div>
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

      <li className="flex justify-between gap-4 mb-2 py-3 px-3 w-full hover:bg-skin-nav  rounded-md">
        <div className="flex items-center gap-3">
          <img src={item.icon} alt="" className="w-4 h-4 invert " />
          <h4 className="text-skin-secondary  text-sm font-bold"> {item.title} </h4>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex justify-center bg-gray-300  rounded-sm w-4 h-4 rounded-xs text-xs">2</span>
          <h4 className="flex justify-center text-skin-secondary ">{">"}</h4>
        </div>
      </li>
    )
  })
}
</ul> */
// }
