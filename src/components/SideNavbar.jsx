import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getSport,
  getAllSportData,
  globalSportData,
  globalMaketOdds,
} from "../redux/actions";
import { socket } from "../context/SocketContext";

export const SideNavbar = () => {
  // ==================================CALLING THE API DATA======================================

  const dispatch = useDispatch();

  const [data, setdata] = useState([]);
  const [allMarkets, setAllMarkets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sportData = await new Promise((resolve, reject) => {
          dispatch(getSport({ callback: resolve, errorCallback: reject }));
        });

        const allDataPromises = sportData.map(async (data) => {
          const id = data._id;
          const res = await new Promise((resolve, reject) => {
            dispatch(
              getAllSportData({ id, callback: resolve, errorCallback: reject })
            );
          });

          const sport = {
            sportName: data.name,
            sportSlugName: data.slugName,
            sportsCode: data.sportsCode,
            sportId: data._id,
            leagues: [],
          };

          if (res.length !== 0) {
            const leagues = res.map((item) => {
              const leagues = {
                leagueId: item._id,
                leagueCode: item.leagueCode,
                leagueName: item.name,
                events: item.events,
              };

              item.events?.forEach((data) => {
                data.markets.forEach((market) => {
                  const obj = { [market.marketCode]: {} };
                  allMarketsSet.add(obj);
                });
              });

              return leagues;
            });

            sport.leagues = leagues;
          }

          return sport;
        });

        const allData = await Promise.all(allDataPromises);

        setAllMarkets(Array.from(allMarketsSet));
        setdata(allData);
      } catch (error) {
        // Handle error
      }
    };

    const allMarketsSet = new Set();
    setdata([]);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    dispatch(globalSportData({ data: data }));
  }, [data, dispatch]);

  useEffect(() => {
    dispatch(globalMaketOdds({ data: allMarkets }));
  }, [allMarkets, dispatch]);

  // ===============================================================================================

  const [activeIndex, setActiveIndex] = useState(null);
  const [dropdownIndex, setdropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setdropdownIndex(dropdownIndex === index ? null : index);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    allMarkets.forEach((market) => {
      const socketKey = Object?.keys(market)[0];
      socket.on(socketKey, (data) => {
        setAllMarkets((prevDataArray) => {
          const updatedArray = prevDataArray?.map((val) =>
            Object.keys(val)[0] === socketKey ? { [socketKey]: data } : val
          );
          return updatedArray;
        });
      });
    });
  }, [allMarkets]);

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
        {data?.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer flex flex-col justify-between  mb-2 py-3   w-full  hover:bg-skin-cardhead hover:duration-200 rounded-md ${
              activeIndex === index ? "bg-skin-cardhead" : ""
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
                  <span className="flex justify-center bg-skin-imgbg rounded-sm w-5 h-4 rounded-xs font-semibold text-xs">
                    {item?.leagues ? item?.leagues?.length : 0}
                  </span>
                  <h5 className="flex justify-center text-skin-secondary  cursor-pointer">
                    {activeIndex === index ? (
                      <RiArrowUpSLine className="font-semibold" />
                    ) : (
                      <IoIosArrowDown className="font-semibold" />
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
                    className="justify-between pl-3 pr-4 rounded-md py-3 hover:bg-skin-hovercolorsecondary flex w-full"
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
                                <div className="text-skin-secondary block text-xs w-full font-semibold">
                                  {event?.name}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <IoIosArrowDown className="font-semibold text-white text-sm" />
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
