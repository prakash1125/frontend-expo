import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import { GoInfo } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import Footer from "./Footer";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const IplClub = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  //   const menu = [
  //     {
  //       id: 1,
  //       title: "Winner",
  //       data: [
  //         {
  //           team: "Gujarat",
  //           score: [1, 2, 3, 4, 5, 6],
  //         },
  //         {
  //           team: "Punjab",
  //           score: [1, 2, 3, 4, 5, 6],
  //         },
  //         {
  //           team: "Rajastan",
  //           score: [1, 2, 3, 4, 5, 6],
  //         },
  //         {
  //           team: "Lucknow",
  //           score: [1, 2, 3, 4, 5, 6],
  //         },
  //         {
  //           team: "Chennai",
  //           score: [1, 2, 3, 4, 5, 6],
  //         },
  //         {
  //           team: "Delhi Capitals",
  //           score: [1, 2, 3, 4, 5, 6],
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "Winner",
  //       data: [
  //         {
  //           team: "Gujarat",
  //           score: [1, 2, 3, 4, 5, 6],
  //         },
  //       ],
  //     },
  //   ];
  //   const menu = [
  //     {
  //       id: 1,
  //       title: "Winner",
  //       data: [
  //         {
  //           team: "Gujarat",
  //           score: [1, 2, 3, 4, 5, 6],
  //         },
  //         {
  //           team: "Punjab",
  //           score: [1, 2, 3, 4, 5, 6],
  //         },
  //         {
  //           team: "Rajastan",
  //           score: [1, 2, 3, 4, 5, 6],
  //         },
  //         {
  //           team: "Lucknow",
  //           score: [1, 2, 3, 4, 5, 6],
  //         },
  //         {
  //           team: "Chennai",
  //           score: [1, 2, 3, 4, 5, 6],
  //         },
  //         {
  //           team: "Delhi Capitals",
  //           score: [1, 2, 3, 4, 5, 6],
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "Winner",
  //       data: [
  //         {
  //           team: "Gujarat",
  //           score: [1, 2, 3, 4, 5, 6],
  //         },
  //       ],
  //     },
  //   ];
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  let [categories] = useState({
    All: [
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
      {
        id: 2,
        title: "Fancy Market",
        data: [
          {
            team: "Gujarat",
            score: [1, 2, 3, 4, 5, 6],
          },
          {
            team: "Hyderabad",
            score: [1, 2, 3, 4, 5, 6],
          },
          {
            team: "RCB",
            score: [1, 2, 3, 4, 5, 6],
          },
        ],
      },
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
    BookMarker: [
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

  return (
    <>
      <ul className="w-full px-2 pr-0 pt-2">
        <div className="bg-[#169C59] rounded-md min-w-full flex flex-col justify-center items-center px-4 p-1 ">
          <h1 className="text-skin-white text-xl m-2 ">
            Indian Premier League
          </h1>
          <button
            className="text-skin-white bg-[#2EA66A] p-1 px-4 mb-1  rounded-md border-1 border-white test-sm font-semibold"
            style={{
              background: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              border: "1px solid white",
            }}
          >
            IN-PLAY
          </button>
        </div>

        <Tab.Group>
          <Tab.List className="flex gap-2 rounded-sm my-2 scroll-x h-11">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-md outline-none text-center text-sm font-medium  ",

                    selected
                      ? "bg-skin-hovercolorsecondary text-skin-white  "
                      : "text-skin-white bg-skin-nav hover:bg-skin-hovercolorsecondary  hover:text-skin-white hover:duration-300"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  ""
                  //     // 'rounded-md w-full bg-white p-3',
                  //     "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                {posts.map((item, index) => (
                  <>
                    {" "}
                    <li
                      key={index}
                      className={`flex flex-col justify-between mt-2 py-3  w-full bg-skin-cardhead rounded-t-md ${
                        activeIndex === index ? "bg-skin-cardhead" : ""
                      }`}
                    >
                      <div className="flex  justify-between items-center gap-3 px-4">
                        <div className="flex items-center gap-3  ">
                          {/* <img src={item.icon} alt="" className="w-4 h-4 invert" /> */}
                          <h4 className="text-skin-white text-sm font-semibold">
                            {item.title}
                          </h4>
                          {/* <p className='text-green-500 '>.</p> */}
                        </div>
                        {item?.data ? (
                          <div className="flex items-center gap-3">
                            <span className="flex justify-center   text-skin-white font-semibold text-xs">
                              <GoInfo className="w-4 h-4" />
                            </span>
                            <h4
                              className="flex justify-center text-skin-white cursor-pointer"
                              onClick={() => toggleAccordion(index)}
                            >
                              {activeIndex === index ? (
                                <RiArrowUpSLine className="font-semibold" />
                              ) : (
                                <IoIosArrowDown className="font-semibold" />
                              )}
                            </h4>
                          </div>
                        ) : null}
                      </div>
                    </li>
                    <li
                      key={index}
                      className={` ${
                        activeIndex === index
                          ? "flex flex-col justify-between  mb-2   w-full bg-skin-nav rounded-b-md"
                          : ""
                      }`}
                    >
                      {activeIndex === index && (
                        <div className="flex flex-col pb-2 items-start gap-1    ">
                          {item.data.map((Item, Index) => (
                            <>
                              {" "}
                              <hr className="border-t border-gray-200/10  w-full pt-1  " />
                              <div
                                className="flex w-full justify-between gap-3 pl-4 pr-1"
                                key={index}
                              >
                                <div className="flex flex-col text-skin-white text-sm font-semibold justify-start items-start">
                                  <p>{Item.team}</p>
                                  <span className="flex ">stake amount</span>
                                </div>
                                <div className="flex items-center gap-1 rounded-md scroll-x">
                                  {Item.score.map((Score, index) => (
                                    <div
                                      key={index}
                                      className="flex flex-col justify-center w-full rounded-md py-1 px-7 scroll-x  font-medium  bg-skin-cardhead text-skin-white hover:bg-skin-cardhead hover:text-skin-white rounded-b-md"
                                    >
                                      <p
                                        className={`${
                                          Score !== 3 && "hidden md:block "
                                        }text-center text-[14.5px] `}
                                      >
                                        {Score}
                                      </p>
                                      <p className="text-center text-skin-primary text-[11px]">
                                        20
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                      )}
                    </li>
                  </>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        {/* {`${(Score !== 3 || Score !==4) ? ('hidden lg:block text-center text-[14.5px] ') */}

        {/* {menu.map((item, index) => (
          <>
            {" "}
            <li
              key={index}
              className={`flex flex-col justify-between mt-2 py-3  w-full bg-skin-cardhead rounded-t-md ${
                activeIndex === index ? "bg-skin-nav" : ""
              }`}
            >
              <div className="flex  justify-between items-center gap-3 px-4">
                <div className="flex items-center gap-3 ">
                  <h4 className="text-skin-white text-sm font-semibold">
                    {item.title}
                  </h4>
                </div>
                {item?.data ? (
                  <div className="flex items-center gap-3">
                    <span className="flex justify-center   text-skin-white font-semibold text-xs">
                      <GoInfo className="w-4 h-4" />
                    </span>
                    <h4
                      className="flex justify-center text-skin-white cursor-pointer"
                      onClick={() => toggleAccordion(index)}
                    >
                      {activeIndex === index ? (
                        <RiArrowUpSLine className="font-semibold" />
                      ) : (
                        <IoIosArrowDown className="font-semibold" />
                      )}
                    </h4>
                  </div>
                ) : null}
              </div>
            </li>
            <li
              key={index}
              className={` ${
                activeIndex === index
                  ? "flex flex-col justify-between  mb-2   w-full bg-skin-nav rounded-b-md"
                  : ""
              }`}
            >
              {activeIndex === index && (
                <div className="flex flex-col items-start gap-1    ">
                  {item.data.map((Item, Index) => (
                    <>
                      {" "}
                      <hr className="border-t border-gray-300 w-full pt-1  " />
                      <div className="flex w-full justify-between gap-3 px-4">
                        <div className="flex text-skin-white text-sm font-semibold justify-start items-center">
                          {Item.team}
                        </div>
                        <div className="flex items-center gap-1 rounded-md p-1 scroll-x">
                          {Item.score.map((Score, index) => (
                            <div
                              key={index}
                              className="flex justify-center w-full rounded-md py-2 px-2 scroll-x text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 min-w-[60px] bg-skin-cardhead text-skin-white hover:bg-skin-cardhead hover:text-skin-white rounded-b-md"
                            >
                              {Score}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              )}
            </li>
          </>
        ))} */}
      </ul>
      <Footer />
    </>
  );
};
