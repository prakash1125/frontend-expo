import { Tab } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import { GoInfo } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export const CricketLeague = () => {
    // ==================================CALLING THE API DATA======================================

    let globalStateData = useSelector((state) => state);
    console.log("qwerty", globalStateData);


    // ===============================================================================================


    const [activeIndex, setActiveIndex] = useState(0);

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
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();
    const startTimer = () => {
        const countdownDate = new Date("May 24, 2023 00:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    const [isLive, setIsLive] = useState(false);

    const handleLiveTVClick = () => {
        setIsLive(!isLive);
    };

    return (
        <>
            <ul className="w-full px-2 pr-0 pt-2">
                <div className="bg-[#169C59] rounded-md min-w-full flex flex-col justify-center items-center px-4 py-2 ">
                    {
                        globalStateData?.GlobalSportData?.globalSportData?.map((element) => {
                            if (element.sportName === 'Cricket') {
                                if (element.leagues.length > 0) {
                                    const league = element.leagues[0];
                                    return (
                                        <React.Fragment key={element.sportId}>
                                            <h1 className="text-white text-xl">{league.leagueName}</h1>
                                        </React.Fragment>
                                    );
                                }
                            }
                            return null;
                        })
                    }
                    <div className="team-match text-[#fff] text-lg font-bold mb-2">
                        {
                            globalStateData?.GlobalSportData?.globalSportData?.map((element, index) => {
                                if (element.sportName === 'Cricket') {
                                    if (element.leagues.length > 0) {
                                        const league = element.leagues[0];
                                        const eventName = league.events.length > 0 ? league.events[1].name : '';

                                        const updatedEventName = eventName.replace(/\bv\b/gi, 'vs');

                                        return (
                                            <React.Fragment key={index}>
                                                <div className="flex gap-2 flex-row">
                                                    {updatedEventName.split(' ').map((part, partIndex) => (
                                                        <p className={`text-center ${part.toLowerCase() === 'vs' ? 'individual-vs' : ' '}`} key={partIndex}>
                                                            {part}
                                                        </p>
                                                    ))}
                                                </div>
                                            </React.Fragment>
                                        );
                                    }
                                }
                                return null;
                            })
                        }
                    </div>

                    <div className="flex items-center gap-4 font-bold text-[#eee] mb-2 border border-[#eee] p-2 px-4 rounded-md text-xl">
                        <section>
                            <p>{timerDays}</p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerHours}</p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerMinutes}</p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerSeconds}</p>
                        </section>
                    </div>
                </div>

                <div className="w-full mx-auto bg-skin-nav rounded-sm mt-2 mb-2">
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
                                    <div className="team-one font-semibold">Gujarat Titans</div>
                                    <div className="team-two font-semibold">
                                        Chennai Super Kings
                                    </div>
                                </div>

                                <div className="flex items-center text-[#eee] border-t-2 border-b-2">
                                    <div className="scorecard flex-grow cursor-pointer">Scorecard</div>
                                    <div className="statistics flex-grow cursor-pointer">Statistics</div>
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
                                            : "text-skin-white  bg-skin-nav hover:bg-skin-hovercolorsecondary  hover:text-skin-white "
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
                                            className={`flex flex-col justify-between mt-2 py-3  w-full bg-skin-cardhead  rounded-t-md ${activeIndex === index ? "bg-skin-cardhead " : ""
                                                }`}
                                        >
                                            <div className="flex  justify-between items-center gap-3 px-4">
                                                <div className="flex items-center gap-3  ">
                                                    {/* <img src={item.icon} alt="" className="w-4 h-4 invert" /> */}
                                                    <h4 className="text-skin-white  text-sm font-semibold">
                                                        {item.title}
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
                                            className={` ${activeIndex === index
                                                ? "flex flex-col justify-between  mb-2 pb-2   w-full bg-skin-nav  rounded-b-md"
                                                : ""
                                                }`}
                                        >
                                            {activeIndex === index && (
                                                <div className="flex flex-col items-start gap-1    ">
                                                    {item.data.map((Item, Index) => (
                                                        <>
                                                            {" "}
                                                            <hr className="border-t border-gray-200/10  w-full pt-1  " />
                                                            <div className="flex w-full justify-between gap-3 pl-4 pr-1">
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
                                                                                className={`${Score !== 3 && "hidden md:block "
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
                className={`flex flex-col justify-between mt-2 py-3  w-full bg-skin-cardhead  rounded-t-md ${
                  activeIndex === index ? "bg-skin-nav " : ""
                }`}
              >
                <div className="flex  justify-between items-center gap-3 px-4">
                  <div className="flex items-center gap-3 ">
                    <h4 className="text-[#EEE] text-sm font-semibold">
                      {item.title}
                    </h4>
                  </div>
                  {item?.data ? (
                    <div className="flex items-center gap-3">
                      <span className="flex justify-center   text-[#EEE] font-semibold text-xs">
                        <GoInfo className="w-4 h-4" />
                      </span>
                      <h4
                        className="flex justify-center text-[#EEE] cursor-pointer"
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
                    ? "flex flex-col justify-between  mb-2   w-full bg-skin-nav  rounded-b-md"
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
                          <div className="flex text-[#EEE] text-sm font-semibold justify-start items-center">
                            {Item.team}
                          </div>
                          <div className="flex items-center gap-1 rounded-md p-1 scroll-x">
                            {Item.score.map((Score, index) => (
                              <div
                                key={index}
                                className="flex justify-center w-full rounded-md py-2 px-2 scroll-x text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 min-w-[60px] bg-skin-cardhead  text-blue-100 hover:bg-skin-cardhead  hover:text-white rounded-b-md"
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
            </ul >
            {/* <Footer/> */}
        </>
    );
};
