import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RunnersCard = ({ market, odds }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  return (
    <div className="rounded-md mt-2 w-full bg-skin-nav drop-shadow-md">
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex w-full items-center bg-skin-cardhead rounded-t-md justify-between h-[40px] px-4 cursor-pointer "
      >
        <div className="flex items-center ">
          <div className="flex items-center text-sm text-skin-secondary  font-medium">
            {market?.marketName}
          </div>
        </div>
        <div className="flex items-center space-x-8 px-1">
          <div className="flex text-sm font-bold text-skin-primary">
            {isDropdownOpen ? (
              <RiArrowUpSLine className="ml-2 text-xl m-auto" />
            ) : (
              <IoIosArrowDown className="ml-2 text-lg  m-auto" />
            )}
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="flex flex-col items-start gap-1 pb-1">
          {market?.runners?.map((runner, index) => {
            const currentMarket = Object.values(odds)[0]?.runners.find(
              (odd) => {
                const data =
                  parseFloat(odd?.selectionId) ===
                  parseFloat(runner?.runnerCode);
                return data;
              }
            );
            return (
              <>
                <hr
                  className="border-t border-gray-200/10  w-full"
                  key={index}
                />
                <div className="flex w-full justify-between gap-3 pl-4 pr-1">
                  <div className="flex flex-col text-skin-white text-sm font-semibold justify-start items-start">
                    <p>{runner?.name}</p>
                    <span className="flex invisible">stake amount</span>
                  </div>
                  <div className="flex items-center gap-1 w-[55%] rounded-md  scroll-x">
                    {currentMarket?.ex?.availableToBack
                      ?.reverse()
                      ?.map((back, index) => {
                        console.log(currentMarket, "currentMarket");
                        return (
                          <Link
                            key={index}
                            className="flex flex-col items-center w-full rounded-md py-1 px-7  scroll-x    bg-skin-cardhead  hover:bg-skin-cardhead  rounded-b-md"
                          >
                            <p
                              className={`text-center text-[14.5px] font-bold ${
                                index === 2 ? "text-skin-blue" : "text-white"
                              }`}
                            >
                              {back?.price ? back?.price : "-"}
                            </p>
                            <p className="text-center text-skin-primary text-[11px]">
                              {back?.size ? back?.size : "-"}
                            </p>
                          </Link>
                        );
                      })}
                    {currentMarket?.ex?.availableToLay
                      ?.reverse()
                      ?.map((lay, index) => {
                        return (
                          <Link
                            key={index}
                            className="flex flex-col items-center w-full rounded-md py-1 px-7 scroll-x    bg-skin-cardhead  hover:bg-skin-cardhead hover:text-skin-white rounded-b-md"
                          >
                            <p
                              className={`text-center text-[14.5px] font-bold ${
                                index === 0 ? "text-skin-pink " : "text-white"
                              }`}
                            >
                              {lay?.price ? lay?.price : "-"}
                            </p>
                            <p className="text-center text-skin-primary text-[11px]">
                              {lay?.size ? lay?.size : "-"}
                            </p>
                          </Link>
                        );
                      })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RunnersCard;
