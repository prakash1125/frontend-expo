import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  getSport,
  getAllSportData,
  globalSportData,
  globalMaketOdds,
} from "../redux/actions";
import { socket } from "../context/SocketContext";

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
  let AllSportData = useSelector((state) => state.GetAllSportData);
  let globalStateData = useSelector((state) => state.GlobalSportData);
  const [data, setdata] = useState([]);
  const [allMarkets, setAllMarkets] = useState([]);

  // console.log("globalStateData", globalStateData);
  // console.log("getSportData", getSportData);
  useEffect(() => {
    setdata([]);
    dispatch(
      getSport({
        callback: (data) => {
          let datas = {};
          // console.log(data, "qwedfghjnm");
          const allSportData = [];
          data?.map((data) => {
            const id = data?._id;
            dispatch(
              getAllSportData({
                id,
                callback: (res) => {
                  // console.log(res, "all ressssss");
                  const sport = {
                    sportName: data?.name,
                    sportSlugName: data?.slugName,
                    sportsCode: data?.sportsCode,
                    sportId: data?._id,
                  };
                  if (res.length !== 0) {
                    const leagues = res?.map((item) => {
                      const leagues = {
                        leagueId: item?._id,
                        leagueCode: item?.leagueCode,
                        leagueName: item?.name,
                        events: item?.events,
                      };
                      item?.events?.map((data) => {
                        data.markets.map((market) => {
                          const obj = {};

                          obj[market?.marketCode] = {};
                          if (!allMarkets.includes(market?.marketCode)) {
                            setAllMarkets((markets) => [...markets, obj]);
                          }
                          return null;
                        });
                        return null;
                      });
                      return leagues;
                    });
                    datas = {
                      ...sport,
                    };
                    sport.leagues = leagues;
                    // console.log(leagues, "leeeaagueeessss");
                    setdata((prevState) => [...prevState, sport]);

                    // console.log('allSport res zzzzzzzzz', sport);
                    // console.log(allSportData, "allSportDataallSportDataallSportDataallSportDataallSportDataallSportDataallSportDataallSportData");
                    return sport;
                  } else {
                    setdata((prevState) => [...prevState, sport]);
                  }
                },
              })
            );
          });
          // console.log("datas", datas);
        },
      })
    );
  }, []);

  useEffect(() => {
    dispatch(globalSportData({ data: data }));
  }, [data, dispatch]);

  useEffect(() => {
    // console.log(allMarkets, "alalalalalalaalalalalaayayyayaya");
    dispatch(globalMaketOdds({ data: allMarkets }));
  }, [allMarkets, dispatch]);
  // ===============================================================================================

  // console.log("data", data);

  const [activeIndex, setActiveIndex] = useState(null);
  const [dropdownIndex, setdropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setdropdownIndex(dropdownIndex === index ? null : index);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // let sdfds = allMarkets.filter(())
    allMarkets.forEach((market, index) => {
      const key = Object?.keys(market)[0];
      socket.on(key, (data) => {
        console.log("1111111111111111111111111111111", data);
        const updatedArray = [...allMarkets];
        console.log(updatedArray, "updated Array");
        console.log(index, "updated index");
        const newData = {};
        newData[key] = data;
        updatedArray[index] = newData;
        setAllMarkets(updatedArray);
      });
    });
    return () => {
      allMarkets.forEach((channel) => {
        socket.off(Object?.keys(channel)[0]);
      });
      // socket.disconnect();
    };
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
              <div className="flex items-center gap-3 ">
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
                    {item?.sportName?.length}{" "}
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
                    onClick={() => toggleDropdown(index)}
                    className="justify-between pl-3 pr-4 rounded-md py-3 hover:bg-skin-hovercolorsecondary flex w-full"
                  >
                    <div>
                      <div className="text-skin-secondary block text-[12px] font-semibold">
                        {league?.leagueName}
                      </div>

                      {dropdownIndex === index && (
                        <div className="flex flex-col items-start  pt-2 ">
                          {league?.events.map((i, index) => (
                            <div className="justify-between pl-2 pr-4 rounded-md py-3 hover:bg-skin-cardhead flex w-full">
                              <div className="text-skin-secondary block text-xs w-full font-semibold">
                                {i?.name}
                              </div>
                            </div>
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
