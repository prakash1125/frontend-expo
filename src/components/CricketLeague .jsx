import { useLocation } from "react-router-dom";
import { Tab } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import { useDispatch, useSelector } from "react-redux";
import RunnersCard from "./RunnersCard";
import { getRunnerData } from "../redux/actions/runnerData/getRunnerDataAction";
import { Footer } from "flowbite-react";
import { IoMdTrendingUp } from "react-icons/io";
import { getBet, getSportSetting } from "../redux/actions";

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
  const Login = useSelector((state) => state?.Login?.login);

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

  const [isLive, setIsLive] = useState(false);

  const handleLiveTVClick = () => {
    setIsLive(!isLive);
  };

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

  // useEffect(() => {
  //   setEventMarkets([]);
  // }, [location?.state?.eventId]);

  useEffect(() => {
    setEventMarkets([]);
    location?.state?.marketArray?.map((market) => {
      return dispatch(
        getRunnerData({
          id: market?._id,
          callback: (data) => {
            if (data?.length !== 0) {
              const allData = {
                marketName: market?.name,
                marketId: market?._id,
                marketCode: market?.marketCode,
                marketType: market?.type,
                runners: data,
              };
              setEventMarkets((prev) => [...prev, allData]);
            }
          },
        })
      );
    });
  }, [dispatch, location?.state?.marketArray]);

  //Fetching my Bets

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getBet());
    }
  }, [dispatch, Login]);

  useEffect(() => {
    dispatch(getSportSetting({ id: location?.state?.sportId })); // add sport id
  }, [dispatch, location?.state?.sportId]);

  return (
    <>
      <ul className="w-full px-2 pt-2">
        <div className="bg-[#169C59]  rounded-md min-w-full flex flex-col justify-center items-center px-4 py-2 relative overflow-hidden">
          <h1 className="text-white text-xl">{location?.state?.leagueName}</h1>
          <div className="team-match text-[#fff] text-xl mb-2">
            {firstRunner}
            <span className="text-lg  font-bold mx-2">
              {secondRunner && " vs "}
            </span>
            {secondRunner}
          </div>
          <div className="flex items-center font-bold text-[#eee] mb-2 border bg-[#2EA66A] border-[#eeeeee8c] h-8 p-2 px-5 rounded-md text-xl">
            <Countdown targetDateTime={location?.state?.eventDate} />
          </div>
          <img
            width={100}
            height={70}
            className="absolute left-12 top-14 opacity-20 "
            src={require(`../assets/images/sidemenu/${location?.state?.sportName}.png`)}
            alt=""
          />

          <img
            width={100}
            height={70}
            className="absolute transform rotate-180  right-12 bottom-14 opacity-20 "
            src={require(`../assets/images/sidemenu/${location?.state?.sportName}.png`)}
            alt=""
          />
        </div>

        <div className="w-full  mx-auto bg-skin-nav rounded-md mt-2 mb-2">
          <div className="p-1 flex justify-center">
            <button
              onClick={handleLiveTVClick}
              className={`flex justify-center items-center gap-2 text-skin-white text-sm ${
                isLive ? "bg-skin-hovercolorsecondary" : "bg-skin-nav"
              }  p-2.5 rounded-md w-full font-bold`}
            >
              <span className="flex items-center gap-2 text-md">
                <IoMdTrendingUp /> Live Score
              </span>
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
                    "w-full rounded-md outline-none text-center text-sm font-bold ",
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
              const odds = globalMarketOddsData?.find((odds) =>
                Object.keys(odds).includes(market?.marketCode)
              );
              if (odds && Object.keys(Object.values(odds)[0])?.length) {
                return (
                  <RunnersCard
                    market={market}
                    odds={odds}
                    eventId={location?.state?.eventId}
                    key={index}
                  />
                );
              } else {
                return null;
              }
            })}
          </Tab.Panels>
        </Tab.Group>
      </ul>
      <Footer />
    </>
  );
};
