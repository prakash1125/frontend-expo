import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoIosArrowDown } from 'react-icons/io';
import { RiArrowUpSLine } from 'react-icons/ri';
import { sidebarMenu } from "../../utils/constant.js";
import "../../assets/scss/layout/Sidebar.scss"
import Button from "../../commonComponents/button/Button.js";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
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

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [display, setDisplay] = useState(true);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 768) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <div className="sideNav " >
        <Button className="toggle" icon={<img src="https://sportsexch.com/images/icons/menu.png" alt=""></img>} onClick={toggleDisplay} />
        <div className={`sidebar ${display ? 'visible' : 'hidden'}`} >
          <div className="w-full px-1" >
            <div className="flex flex-col justify-start mb-2">
              <button className="flex  justify-start text-white bg-[#000] p-3 rounded-md w-full text-xs font-semibold relative">
                SPORTS
              </button>
            </div>
          </div>
          <ul className="w-full px-1">
            {sidebarMenu.map((item, index) => (
              <li
                key={index}
                className={`flex flex-col side-menu justify-between  mb-2 py-3  w-full  hover:bg-[#e5e5e5] rounded-md ${activeIndex === index ? "bg-[#e5e5e5]]" : ""
                  }`}
              >
                <div className="flex  justify-between items-center gap-3 px-4">
                  <div className="flex items-center gap-3 ">
                    <item.icon />
                    <h4 className="text-[#22262a] text-sm font-semibold">
                      {item.gameName}
                    </h4>
                  </div>
                  {item?.subMenu ? (
                    <div className="flex items-center gap-3">
                      <span className="flex justify-center bg-gray-300 rounded-sm w-4 h-4 rounded-xs font-semibold text-xs">
                        {item?.subMenu?.length}{" "}
                      </span>
                      <h4
                        className="flex justify-center text-[22262a] cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                      >
                        {activeIndex === index ? <RiArrowUpSLine className="font-semibold" /> : <IoIosArrowDown className="font-semibold" />}
                      </h4>
                    </div>
                  ) : null}
                </div>
                {activeIndex === index && (
                  <div className="flex flex-col items-start gap-4 pt-2 px-4">
                    {item.subMenu.map((dropdownItem, dropdownIndex) => (
                      <h4
                        key={dropdownIndex}
                        className="text-[22262a] dropdown-menu"
                      >
                        {dropdownItem}
                      </h4>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

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
export default Sidebar

