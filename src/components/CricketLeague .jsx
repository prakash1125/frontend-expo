import { useLocation } from "react-router-dom";
import { Tab } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import { GoInfo } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import Countdown from "./Countdown";
import { useSelector } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const CricketLeague = () => {
  const [expandedTables, setExpandedTables] = useState([]);

  let globalMarketOddsData = useSelector(
    (state) => state?.GobalMarketOdds?.globalMarketOdds
  );

  console.log(globalMarketOddsData, "globalMarketOddsData in CricketLeagues");

  const handleClick = (index) => {
    if (expandedTables.includes(index)) {
      setExpandedTables(expandedTables.filter((item) => item !== index));
    } else {
      setExpandedTables([...expandedTables, index]);
    }
  };

  const location = useLocation();

  let [categories] = useState({
    All: [
      {
        id: 1,
        title: "All",
        data: [
          {
            team: "Gujarat",
            score: [1, 2, 3, 4, 5, 6],
          },
          {
            team: "Punjab",
            score: [1, 2, 3, 4, 5, 6],
          },
          {
            team: "Rajastan",
            score: [1, 2, 3, 4, 5, 6],
          },
          {
            team: "Lucknow",
            score: [1, 2, 3, 4, 5, 6],
          },
        ],
      },
    ],
    MatchOdd: [
      {
        id: 1,
        title: "Winner",
        data: [
          {
            team: "Gujarat",
            score: [1, 2, 3, 4, 5, 6],
          },
          {
            team: "Punjab",
            score: [1, 2, 3, 4, 5, 6],
          },
          {
            team: "Rajastan",
            score: [1, 2, 3, 4, 5, 6],
          },
          {
            team: "Lucknow",
            score: [1, 2, 3, 4, 5, 6],
          },
          {
            team: "Chennai",
            score: [1, 2, 3, 4, 5, 6],
          },
          {
            team: "Delhi Capitals",
            score: [1, 2, 3, 4, 5, 6],
          },
        ],
      },
    ],
    Bookmaker: [
      {
        id: 1,
        title: "Book Marker",
        data: [
          {
            team: "Gujarat",
            score: [1, 2, 3, 4, 5, 6],
          },
          {
            team: "Punjab",
            score: [1, 2, 3, 4, 5, 6],
          },
          {
            team: "Rajastan",
            score: [1, 2, 3, 4, 5, 6],
          },
          {
            team: "Lucknow",
            score: [1, 2, 3, 4, 5, 6],
          },
        ],
      },
    ],
    Fancy: [
      {
        id: 2,
        title: "Winner",
        data: [
          {
            team: "Gujarat",
            score: [1, 2, 3, 4, 5, 6],
          },
        ],
      },
    ],
  });

  const runnersDummy = [1, 2, 3, 4, 5, 6];

  const [isLive, setIsLive] = useState(false);

  const handleLiveTVClick = () => {
    setIsLive(!isLive);
  };

  console.log(
    location,
    "asdfasfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd"
  );

  const firstRunner = location?.state?.eventName?.includes("@")
    ? location?.state?.eventName?.split(" @ ")[0]?.trim()
    : location?.state?.eventName?.split(" v ")[0]?.trim();
  const secondRunner = location?.state?.eventName?.includes("@")
    ? location?.state?.eventName?.split(" @ ")[1]?.trim()
    : location?.state?.eventName?.split(" v ")[1]?.trim();

  useEffect(() => {
    const defaultIndices = Object.keys(categories).map((_, index) => index);
    setExpandedTables(defaultIndices);
  }, [categories]);

  return (
    <>
      <ul className="w-full px-2 pr-0 pt-2">
        <div className="bg-[#169C59] rounded-md min-w-full flex flex-col justify-center items-center px-4 py-2 ">
          <h1 className="text-white text-xl">{location?.state?.leagueName}</h1>
          <div className="team-match text-[#fff] text-xl mb-2">
            {firstRunner}
            <span className="text-lg font-bold mx-2">
              {secondRunner && " vs "}
            </span>
            {secondRunner}
          </div>

          <div className="flex items-center font-bold text-[#eee] mb-2 border bg-[#2EA66A] border-[#eeeeee8c] h-8 p-2 px-5 rounded-md text-xl">
            <Countdown targetDateTime={location?.state?.eventDate} />
          </div>
        </div>

        <div className="w-full  mx-auto bg-skin-nav rounded-md mt-2 mb-2">
          <div className="p-1 flex justify-center">
            <button
              onClick={handleLiveTVClick}
              className="flex justify-center items-center gap-2 text-skin-white text-sm bg-skin-cardhead p-3 rounded-md w-full font-semibold"
            >
              <span>Live TV</span>
            </button>
          </div>

          {isLive && (
            <div className="live-matches px-3 py-2 transition-transform duration-2000">
              <div className="bg-[#000] text-center h-64 w-full rounded ">
                <span className="text-xs font-extrabold text-[#d3d3d3] ">
                  23 MAY | 19:30
                </span>
                <div className="flex items-center justify-between px-3 text-[#eee] mb-5">
                  <div className="team-one font-semibold">{firstRunner} </div>
                  <div className="team-two font-semibold">{secondRunner}</div>
                </div>

                <div className="flex items-center text-[#eee] border-t-2 border-b-2">
                  <div className="scorecard flex-grow cursor-pointer">
                    Scorecard
                  </div>
                  <div className="statistics flex-grow cursor-pointer">
                    Statistics
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <Tab.Group>
          <Tab.List className="flex gap-2 rounded-sm my-2 scroll-x h-11">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-md outline-none text-center text-sm font-medium ",

                    selected
                      ? "bg-skin-hovercolorsecondary text-skin-white "
                      : "text-skin-white  bg-skin-nav hover:bg-skin-hovercolorsecondary  hover:text-skin-white hover:duration-200 "
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.entries(categories).map(([category, posts], idx) => (
              <Tab.Panel
                key={category}
                className={classNames(
                  ""
                  //     // 'rounded-md w-full bg-white p-3',
                  //     "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                {posts?.map((item, index) => (
                  <React.Fragment key={item.id}>
                    {" "}
                    <li
                      key={index}
                      className={`flex flex-col justify-between mt-2 py-3  w-full bg-skin-cardhead  rounded-t-md ${
                        expandedTables.includes(index)
                          ? "bg-skin-cardhead "
                          : ""
                      }`}
                    >
                      <div className="flex  justify-between items-center gap-3 px-4">
                        <div className="flex items-center gap-3  ">
                          {/* <img src={item.icon} alt="" className="w-4 h-4 invert" /> */}
                          <h4 className="text-skin-white  text-sm font-semibold">
                            {item?.title}
                          </h4>
                          {/* <p className='text-green-500 '>.</p> */}
                        </div>
                        {item?.data ? (
                          <div className="flex items-center gap-3">
                            <span className="flex justify-center   text-skin-white  font-semibold text-xs">
                              <GoInfo className="w-4 h-4" />
                            </span>
                            <h4
                              className="flex justify-center text-skin-white  cursor-pointer"
                              onClick={() => handleClick(index)}
                            >
                              {expandedTables.includes(index) ? (
                                <RiArrowUpSLine className="font-semibold" />
                              ) : (
                                <IoIosArrowDown className="font-semibold" />
                              )}
                            </h4>
                          </div>
                        ) : null}
                      </div>
                    </li>
                    {expandedTables.includes(index) && (
                      <li
                        key={index}
                        className={` ${
                          expandedTables.includes(index)
                            ? "flex flex-col justify-between  mb-2 pb-2   w-full bg-skin-nav  rounded-b-md"
                            : ""
                        }`}
                      >
                        <div className="flex flex-col items-start gap-1    ">
                          {location?.state?.marketArray?.map((Item, Index) => {
                            const currentRuner = globalMarketOddsData?.find(
                              (data) =>
                                Object.keys(data)?.includes(Item?.marketCode)
                            );
                            return (
                              <>
                                {currentRuner !== undefined &&
                                Object.keys(Object.values(currentRuner)[0])
                                  .length !== 0 ? (
                                  <React.Fragment key={Item?.name}>
                                    <hr className="border-t border-gray-200/10  w-full pt-1  " />
                                    <div className="flex w-full justify-between gap-3 pl-4 pr-1">
                                      <div className="flex flex-col text-skin-white text-sm font-semibold justify-start items-start">
                                        <p>{Item?.name}</p>
                                        <span className="flex invisible ">
                                          stake amount
                                        </span>
                                      </div>

                                      {/* Runners Starts Here  */}
                                      <div className="flex gap-1 rounded-md w-[55%]">
                                        {/* First  */}
                                        <div className="flex flex-col items-center w-full rounded-md py-1 px-7 scroll-x  font-medium cursor-pointer  bg-skin-cardhead text-skin-white hover:bg-skin-cardhead hover:text-skin-white rounded-b-md">
                                          <p
                                            className="font-bold text-[14.5px]"
                                          >
                                            {Object.values(currentRuner)[0]
                                              ?.runners[0]?.ex
                                              ?.availableToBack[0]?.price
                                              ? Object.values(currentRuner)[0]
                                                  ?.runners[0]?.ex
                                                  ?.availableToBack[0]?.price
                                              : "-"}
                                          </p>
                                          <p className=" text-skin-primary text-[11px] ">
                                            {Object.values(currentRuner)[0]
                                              ?.runners[0]?.ex
                                              ?.availableToBack[0]?.size
                                              ? Object.values(currentRuner)[0]
                                                  ?.runners[0]?.ex
                                                  ?.availableToBack[0]?.size
                                              : "-"}
                                          </p>
                                        </div>
                                        <div className="flex flex-col items-center w-full min-w-3xl rounded-md py-1 px-7 scroll-x  font-medium cursor-pointer  bg-skin-cardhead text-skin-white hover:bg-skin-cardhead hover:text-skin-white rounded-b-md">
                                          {console.log(currentRuner, "pppppp")}

                                          <p
                                            className={`font-bold text-[14.5px] `}
                                          >
                                            {Object.values(currentRuner)[0]
                                              ?.runners[0]?.ex
                                              ?.availableToLay[0]?.price
                                              ? Object.values(currentRuner)[0]
                                                  ?.runners[0]?.ex
                                                  ?.availableToLay[0]?.price
                                              : "-"}
                                          </p>
                                          <p className="text-center text-skin-primary text-[11px] ">
                                            {Object.values(currentRuner)[0]
                                              ?.runners[0]?.ex
                                              ?.availableToLay[0]?.size
                                              ? Object.values(currentRuner)[0]
                                                  ?.runners[0]?.ex
                                                  ?.availableToLay[0]?.size
                                              : "-"}
                                          </p>
                                        </div>
                                        {/* Second  */}
                                        <div className="flex flex-col items-center w-full min-w-3xl rounded-md py-1 px-7 scroll-x  font-medium cursor-pointer bg-skin-cardhead text-skin-white hover:bg-skin-cardhead hover:text-skin-white rounded-b-md">
                                          {console.log(currentRuner, "pppppp")}

                                          <p
                                            className={`font-bold text-skin-blue text-[14.5px] `}
                                          >
                                            {Object.values(currentRuner)[0]
                                              ?.runners[2]?.ex
                                              ?.availableToBack[0]?.price
                                              ? Object.values(currentRuner)[0]
                                                  ?.runners[2]?.ex
                                                  ?.availableToBack[0]?.price
                                              : "-"}
                                          </p>
                                          <p className="text-center text-skin-primary text-[11px]">
                                            {Object.values(currentRuner)[0]
                                              ?.runners[2]?.ex
                                              ?.availableToBack[0]?.size
                                              ? Object.values(currentRuner)[0]
                                                  ?.runners[2]?.ex
                                                  ?.availableToBack[0]?.size
                                              : "-"}
                                          </p>
                                        </div>
                                        <div
                                          className="flex flex-col items-center w-full min-w-3xl rounded-md py-1 px-7 scroll-x  font-medium cursor-pointer bg-skin-cardhead text-skin-white hover:bg-skin-cardhead hover:text-skin-white rounded-b-md"
                                        >
                                          {console.log(currentRuner, "pppppp")}

                                          <p
                                            className={`font-bold text-[14.5px] text-skin-pink`}
                                          >
                                            {Object.values(currentRuner)[0]
                                              ?.runners[2]?.ex
                                              ?.availableToLay[0]?.price
                                              ? Object.values(currentRuner)[0]
                                                  ?.runners[2]?.ex
                                                  ?.availableToLay[0]?.price
                                              : "-"}
                                          </p>
                                          <p className="text-center text-skin-primary text-[11px]">
                                            {Object.values(currentRuner)[0]
                                              ?.runners[2]?.ex
                                              ?.availableToLay[0]?.size
                                              ? Object.values(currentRuner)[0]
                                                  ?.runners[2]?.ex
                                                  ?.availableToLay[0]?.size
                                              : "-"}
                                          </p>
                                        </div>
                                        {/* Third  */}
                                        <div
                                          className="flex flex-col items-center w-full min-w-3xl rounded-md py-1 px-7 scroll-x  font-medium cursor-pointer bg-skin-cardhead text-skin-white hover:bg-skin-cardhead hover:text-skin-white rounded-b-md"
                                        >
                                          {console.log(currentRuner, "pppppp")}

                                          <p
                                            className={`font-bold text-[14.5px] `}
                                          >
                                            {Object.values(currentRuner)[0]
                                              ?.runners[1]?.ex
                                              ?.availableToBack[0]?.price
                                              ? Object.values(currentRuner)[0]
                                                  ?.runners[1]?.ex
                                                  ?.availableToBack[0]?.price
                                              : "-"}
                                          </p>
                                          <p className="text-center text-skin-primary text-[11px]">
                                            {Object.values(currentRuner)[0]
                                              ?.runners[1]?.ex
                                              ?.availableToBack[0]?.size
                                              ? Object.values(currentRuner)[0]
                                                  ?.runners[1]?.ex
                                                  ?.availableToBack[0]?.size
                                              : "-"}
                                          </p>
                                        </div>
                                        <div
                                          className="flex flex-col items-center w-full min-w-3xl rounded-md py-1 px-7 scroll-x  font-medium cursor-pointer bg-skin-cardhead text-skin-white hover:bg-skin-cardhead hover:text-skin-white rounded-b-md"
                                        >
                                          {console.log(currentRuner, "pppppp")}

                                          <p
                                            className={`font-bold text-[14.5px] `}
                                          > 
                                            {Object.values(currentRuner)[0]
                                              ?.runners[1]?.ex
                                              ?.availableToLay[0]?.price
                                              ? Object.values(currentRuner)[0]
                                                  ?.runners[1]?.ex
                                                  ?.availableToLay[0]?.price
                                              : "-"}
                                          </p>
                                          <p className="text-center text-skin-primary text-[11px]">
                                            {Object.values(currentRuner)[0]
                                              ?.runners[1]?.ex
                                              ?.availableToLay[0]?.size
                                              ? Object.values(currentRuner)[0]
                                                  ?.runners[1]?.ex
                                                  ?.availableToLay[0]?.size
                                              : "-"}
                                          </p>
                                        </div>
                                      </div>
                                      {/* Runners End  */}
                                    </div>
                                  </React.Fragment>
                                ) : (
                                  ""
                                )}
                              </>
                            );
                          })}
                        </div>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </ul>
      {/* <Footer/> */}
    </>
  );
};
