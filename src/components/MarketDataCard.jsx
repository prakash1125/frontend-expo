import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import { useTranslation } from 'react-i18next';

const MarketData = ({ league }) => {
  // ==================================CALLING THE API DATA======================================

  let globalMarketOddsData = useSelector(
    (state) => state?.GobalMarketOdds?.globalMarketOdds
  );
  
  // ===============================================================================================

  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  return (
    <div className="rounded-md  w-full bg-skin-nav drop-shadow-md">
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex w-full items-center bg-skin-cardhead rounded-t-md justify-between h-[40px] px-4 cursor-pointer "
      >
        <div className="flex items-center ">
          <div className="flex items-center text-sm text-skin-secondary  font-medium ">
            {league?.leagueName}
          </div>
        </div>
        <div className="flex items-center space-x-8 px-1">
          <div className="flex text-sm font-bold text-skin-primary">
            {league?.events?.length}
            {isDropdownOpen ? (
              <RiArrowUpSLine className="ml-2 text-xl m-auto" />
            ) : (
              <IoIosArrowDown className="ml-2 text-lg  m-auto" />
            )}
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <>
          {league?.events?.map((event) => {
            var exist;
            const matchOdds = event?.markets?.find(
              (obj) => obj.slugName === "match-odds"
            );
            return (
              <Link
                to="/cricket-league"
                state={{
                  leagueName: league?.leagueName,
                  eventName: event?.name,
                  eventDate: event?.eventDate,
                  marketArray: event?.markets,
                }}
              >
                <div className="xl:flex lg:flex py-[10px] mb-[2px] border-b-2 border-mainbg">
                  <div className="  flex items-center flex-1  cursor-pointer select-none">
                    <div className="flex flex-col items-center justify-center w-10 h-10 ml-4 ">
                      <a href="#" className="rounded-full relative block">
                        <img
                          alt="profil"
                          src="https://sportsexch.com/images/icons/cricket.png"
                          className="mx-auto object-contain rounded-full h-8 w-8 bg-skin-imgbg  p-1.5"
                        />
                      </a>
                    </div>
                    <div className="flex pl-3 justify-between w-full">
                      <div>
                        <div className=" font-medium  text-skin-primary  text-sm">
                          {event?.name?.includes("@")
                            ? event?.name?.split(" @ ")[0]?.trim()
                            : event?.name?.split(" v ")[0]?.trim()}
                        </div>
                        <div className=" font-medium  text-skin-primary  text-sm">
                          {event?.name?.includes("@")
                            ? event?.name?.split(" @ ")[1]?.trim()
                            : event?.name?.split(" v ")[1]?.trim()}
                        </div>
                      </div>
                      <div className="text-[12px] font-bold pr-4 text-skin-primary ">
                        <div>
                          <div className="text-skin-secondary ">
                            {DateTime.fromISO(event?.eventDate).toFormat(
                              "dd MMM HH:mm"
                            )}
                          </div>
                          <div className="flex justify-end mt-1 ">
                            <div className=" mx-2 ml-4 px-2  h-[14px] text-center rounded-sm text-[10px]  bg-skin-cardsmall text-skin-dark ">
                              F 4
                            </div>
                            <div className="  px-1 h-[14px] text-center rounded-sm text-[10px]  bg-skin-cardsmall text-skin-dark ">
                              B
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    {(() => {
                 
                      if (matchOdds) {
                        exist = globalMarketOddsData?.find((obj) =>
                          Object.keys(obj)?.includes(matchOdds?.marketCode)
                        );
                      } else {
                        exist = globalMarketOddsData?.find((obj) =>
                          Object.keys(obj)?.includes(
                            event?.markets[0]?.marketCode
                          )
                        );
                      }
                    })()}
                    {exist &&
                    Object.keys(Object.values(exist)[0]).length !== 0 ? (
                      <>
                        <div className="inline-block ">
                          <div className="flex drop-shadow-sm rounded-sm ">
                            <div
                              className={`w-[50px] h-9 rounded-md m-1 flex justify-center text-md font-bold text-skin-blue  bg-skin-marketcard   cursor-pointer`}
                            >
                              <span className="m-auto brightness-125">
                                {
                                  Object.values(exist)[0]?.runners[0]?.ex
                                    ?.availableToBack[0]?.price
                                }
                              </span>
                            </div>
                            <div
                              className={`w-[50px] h-9 rounded-md m-1 flex justify-center text-md font-bold text-skin-pink  bg-skin-marketcard   cursor-pointer`}
                            >
                              <span className="m-auto brightness-125">
                                {
                                  Object.values(exist)[0]?.runners[0]?.ex
                                    ?.availableToLay[0]?.price
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* middle runner */}
                        <div className="inline-block ">
                          <div className="flex drop-shadow-sm rounded-sm ">
                            <div
                              className={`w-[50px] h-9 rounded-md m-1 flex justify-center text-md font-bold text-skin-blue  bg-skin-marketcard   cursor-pointer`}
                            >
                              <span className="m-auto brightness-125">
                                {Object.values(exist)[0]?.runners[2]?.ex
                                  ?.availableToBack[0]?.price
                                  ? Object.values(exist)[0]?.runners[2]?.ex
                                      ?.availableToBack[0]?.price
                                  : "-"}
                              </span>
                            </div>
                            <div
                              className={`w-[50px] h-9 rounded-md m-1 flex justify-center text-md font-bold text-skin-pink  bg-skin-marketcard   cursor-pointer`}
                            >
                              <span className="m-auto brightness-125">
                                {Object.values(exist)[0]?.runners[2]?.ex
                                  ?.availableToLay[0]?.price
                                  ? Object.values(exist)[0]?.runners[2]?.ex
                                      ?.availableToLay[0]?.price
                                  : "-"}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Last Runner  */}
                        <div className="inline-block ">
                          <div className="flex drop-shadow-sm rounded-sm ">
                            <div
                              className={`w-[50px] h-9 rounded-md m-1 flex justify-center text-md font-bold text-skin-blue  bg-skin-marketcard   cursor-pointer`}
                            >
                              <span className="m-auto brightness-125 ">
                                {
                                  Object.values(exist)[0]?.runners[1]?.ex
                                    ?.availableToBack[0]?.price
                                }
                              </span>
                            </div>
                            <div
                              className={`w-[50px] h-9 rounded-md m-1 flex justify-center text-md font-bold text-skin-pink  bg-skin-marketcard   cursor-pointer`}
                            >
                              <span className="m-auto brightness-125 ">
                                {
                                  Object.values(exist)[0]?.runners[1]?.ex
                                    ?.availableToLay[0]?.price
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
};

export default MarketData;
