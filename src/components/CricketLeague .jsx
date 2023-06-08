import { useLocation } from "react-router-dom";
import { Tab } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import { GoInfo } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import Countdown from "./Countdown";
import { useDispatch, useSelector } from "react-redux";
import RunnersCard from "./RunnersCard";
import { getRunnerData } from "../redux/actions/runnerData/getRunnerDataAction";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const CricketLeague = () => {
  const [expandedTables, setExpandedTables] = useState([]);
  const [eventMarkets, setEventMarkets] = useState([]);

  const dispatch = useDispatch();

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

  useEffect(() => {
    location?.state?.marketArray?.map((market, index) => {
      return (
        dispatch(getRunnerData({
          id: market?._id, callback: (data) => {
            console.log(data, "callback data");
            if (data?.length !== 0) {

              const allData = {
                marketName: market?.name,
                marketId: market?._id,
                marketCode: market?.marketCode,
                runners: data
              }
              setEventMarkets((prev) => [...prev, allData])
            }
          }
        }))
      )
    })
  }, [])

  console.log(eventMarkets, "EventMArkets");
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
            {eventMarkets?.map((market, index) => {
              return (
               
                  <RunnersCard market={market} />
             
              )
            })}
          </Tab.Panels>
        </Tab.Group>
      </ul>
      {/* <Footer/> */}
    </>
  );
};
