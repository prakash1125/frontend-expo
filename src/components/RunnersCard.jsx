import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import { GoInfo } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RunnersCard = ({ market, odds }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  console.log(odds, "runner-global-odds");

  return (
    <div class="rounded-md mt-2 w-full bg-skin-nav drop-shadow-md">
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        class="flex w-full items-center bg-skin-cardhead rounded-t-md justify-between h-[40px] px-4 cursor-pointer "
      >
        <div class="flex items-center ">
          <div class="flex items-center text-sm text-skin-secondary  font-medium ">
            {market?.marketName}
          </div>
        </div>
        <div class="flex items-center space-x-8 px-1">
          <div class="flex text-sm font-bold text-skin-primary">
            {isDropdownOpen ? (
              <RiArrowUpSLine className="ml-2 text-xl m-auto" />
            ) : (
              <IoIosArrowDown className="ml-2 text-lg  m-auto" />
            )}
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="flex flex-col items-start gap-1 pb-1   ">
          {market?.runners?.map((runner, index) => {
            console.log(runner);
            console.log("runner");
            console.log(Object.values(odds)[0]);
            console.log(
              typeof parseFloat(runner?.runnerCode),
              "ppapapapapapapap"
            );
            const currentMarket = Object.values(odds)[0]?.runners.find(
              (odd) => {
                const data =
                  parseFloat(odd?.selectionId) ===
                  parseFloat(runner?.runnerCode);
                return data;
              }
            );
            console.log(currentMarket, "currentMarket");
            return (
              <>
                <hr
                  className="border-t border-gray-200/10  w-full"
                  key={index}
                />
                <div className="flex w-full justify-between gap-3 pl-4 pr-1">
                  <div className="flex flex-col text-skin-white text-sm font-semibold justify-start items-start">
                    <p>{runner?.name}</p>
                    <span className="flex invisible  ">stake amount</span>
                  </div>
                  <div className="flex items-center gap-1 w-[55%] rounded-md  scroll-x">
                    {currentMarket?.ex?.availableToBack?.map((back, index) => {
                      return (
                        <Link
                          key={index}
                          className="flex flex-col items-center w-full rounded-md py-1 px-7 text-skin-blue scroll-x  font-medium  bg-skin-cardhead  hover:bg-skin-cardhead hover:text-skin-white rounded-b-md"
                        >
                          <p className={`text-center text-[14.5px] `}>
                            {back?.price}
                          </p>
                          <p className="text-center text-skin-primary text-[11px]">
                            {back?.size}
                          </p>
                        </Link>
                      );
                    })}
                    {currentMarket?.ex?.availableToBack?.map((lay, index) => {
                      return (
                        <Link
                          key={index}
                          className="flex flex-col items-center w-full rounded-md py-1 px-7 scroll-x text-skin-pink  font-medium  bg-skin-cardhead  hover:bg-skin-cardhead hover:text-skin-white rounded-b-md"
                        >
                          <p className={`text-center text-[14.5px] `}>
                            {lay?.price}
                          </p>
                          <p className="text-center text-skin-primary text-[11px]">
                            {lay?.size}
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
