import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SideNavbar = () => {

  let data = useSelector((state) => state.GlobalSportData?.globalSportData);

  const [activeIndex, setActiveIndex] = useState(null);
  const [dropdownIndex, setdropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setdropdownIndex(dropdownIndex === index ? null : index);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-full px-4 pl-3 pt-2 z-40">
        <div className="flex flex-col justify-start mb-2">
          <button className="flex justify-start text-skin-primary  bg-skin-cardhead p-3 rounded-md w-full text-xs font-semibold relative">
            SPORTS
          </button>
        </div>
      </div>
      <ul className="w-full px-4 pl-3">
        {data?.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer flex flex-col justify-between  mb-2 py-3   w-full  hover:bg-skin-cardhead hover:duration-200 rounded-md ${activeIndex === index ? "bg-skin-cardhead" : ""
              }`}
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="flex  justify-between items-center px-2"
            >
              <div className="flex items-center gap-3">
                <img
                  src={require(`../assets/images/sidemenu/${item?.sportSlugName}.png`)}
                  alt=""
                  className="w-4 h-4 invert sidebar "
                />
                <h4 className=" text-skin-primary  text-[14px] font-semibold">
                  {item?.sportName}
                </h4>
              </div>
              {item?.sportName ? (
                <div className="flex items-center gap-3">
                  <span className="flex justify-center bg-skin-imgbg rounded-sm w-6 h-4 rounded-xs font-semibold text-xs">
                    {item?.leagues ? item?.leagues?.length : 0}
                  </span>
                  <h5 className=" text-sm justify-center text-skin-secondary  cursor-pointer">
                    {activeIndex === index ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </h5>
                </div>
              ) : null}
            </div>
            {activeIndex === index && (
              <div className="flex flex-col items-start  pt-2 m-1">
                {item?.leagues?.map((league, index) => (
                  <div
                    key={index}
                    onClick={() => toggleDropdown(index)}
                    className="justify-between pl-3 pr-[15px] rounded-md py-3 hover:bg-skin-hovercolorsecondary flex w-full"
                  >
                    <div>
                      <div className="text-skin-secondary block text-[12px] font-semibold">
                        {league?.leagueName}
                      </div>

                      {dropdownIndex === index && (
                        <div className="flex flex-col items-start  pt-2 ">
                          {league?.events.map((event, index) => (
                            <Link
                              key={index}
                              to="/cricket-league"
                              state={{
                                leagueName: league?.leagueName,
                                eventId: event?._id,
                                eventName: event?.name,
                                eventDate: event?.eventDate,
                                marketArray: event?.markets,
                              }}
                            >
                              <div className="justify-between pl-2 pr-4 rounded-md py-3 hover:bg-skin-cardhead flex w-full">
                                <div className="text-skin-primary block text-xs w-full font-semibold">
                                  {event?.name}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <h5 className="w-1 text-sm text-skin-secondary  cursor-pointer">
                      {dropdownIndex === index ? (
                        <IoIosArrowUp className="" />
                      ) : (
                        <IoIosArrowDown className="" />
                      )}
                    </h5>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
