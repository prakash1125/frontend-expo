import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import BetSlip from "./BetSlip";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RunnersCard = ({ market, odds }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [isBetSlipOpen, setIsBetSlipOpen ] = useState(false);


  console.log(odds, "runner-global-odds");

  const handleOddsClick = (price)=>{
    setIsBetSlipOpen(true)
  }

  return (

    <div class="rounded-md mt-2 w-full bg-skin-nav drop-shadow-md">
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
        <div className="flex flex-col items-start gap-1 pb-1   ">


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
                    <span className="flex text-xs invisible  ">stake amount</span>
                  </div>
                  <div className="flex items-center gap-1 w-[55%] rounded-md ">
                    {currentMarket?.ex?.availableToBack?.reverse()?.map((back, index) => {
                      return (
                        <div
                          onClick={()=>handleOddsClick(back?.price)}
                          key={index}
                          className="flex cursor-pointer flex-col items-center py-1  rounded-md w-[30%] text-skin-blue  font-medium  bg-skin-cardhead   rounded-b-md"
                        >
                          <p className={`text-center text-[14.5px] `}>
                            {back?.price}
                          </p>
                          <p className="text-center text-skin-primary text-[11px]">
                            {back?.size}
                          </p>
                        </div>
                      );
                    })}
                    {currentMarket?.ex?.availableToLay?.reverse()?.map((lay, index) => {
                      return (
                        <div
                          key={index}
                          className="flex cursor-pointer flex-col items-center py-1  rounded-md w-[30%] text-skin-pink font-medium  bg-skin-cardhead   rounded-b-md"
                        >
                          <p className={`text-center text-[14.5px] `}>
                            {lay?.price}
                          </p>
                          <p className="text-center text-skin-primary text-[11px]">
                            {lay?.size}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </>

            );
          })}
          {isBetSlipOpen &&
          <BetSlip closeBetslip={setIsBetSlipOpen} />}
        </div>
      )}
    </div>
  );
};

export default RunnersCard;
