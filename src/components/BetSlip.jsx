import React, { useEffect, useState } from "react";
import Input from "./Input";
import { betOnBack, betOnLay } from "../utils/helper";
import { BiCheck } from "react-icons/bi";


const BetSlip = ({
  closeBetslip,
  slipData,
  setStakeAmount,
  stake,
  setStake,
  clearBetSlip,
  handlePlaceBet,
  setSlipData,
}) => {
  const [slipPrice, setSlipPrice] = useState(0);

  useEffect(() => {
    setSlipPrice(slipData?.price);
  }, [slipData]);

  //Mange BookData with Stake data Calculations
  const manageStakeData = (val) => {
    if (slipData?.type === "back") {
      let profit = betOnBack.profit(slipData?.price, val);
      let lose = betOnBack.lose(val);
      setStake(lose);
      setStakeAmount(profit);
    } else {
      let lose = betOnLay.lose(slipData?.price, val);
      let profit = betOnLay.profit(val);
      setStakeAmount(lose);
      setStake(profit);
    }
  };

  //Mange BookData with odds data Calculations
  const manageOddsData = (oddChange) => {
    if (slipData?.type === "back") {
      let profit = betOnBack.profit(oddChange, Math.abs(stake));
      setStakeAmount(profit);
    } else {
      let lose = betOnLay.lose(oddChange, stake);
      setStakeAmount(lose);
    }
  };

  const handleSpanClick = (spanValue) => {
    const val = Math.abs(stake) + spanValue;
    manageStakeData(val);
  };

  /* ------------------------ INPUT COMPONENT FUNCTIONS ----------------------- */

  const decrement = (type) => {
    if (type === "stake") {
      if (Math.abs(stake) > 0) {
        manageStakeData(Math.abs(stake) - 1);
      }
    } else {
      // setSlipPrice((prevValue) => {
      //   const decrementedValue = prevValue !== null ? prevValue - 0.01 : 0;
      //   const roundedValue = Number(decrementedValue.toFixed(2)); // because of JS floating point precise issue
      //   return roundedValue;
      // });
      setSlipData((prev) => ({
        ...prev,
        price:
          prev?.price !== null ? (Number(prev?.price) - 0.01).toFixed(2) : 0,
      }));
      manageOddsData((Number(slipData?.price) - 0.01).toFixed(2)); // because state update wont effect suddenly
    }
  };

  const increment = (type) => {
    if (type === "stake") {
      manageStakeData(Math.abs(stake) + 1);
    } else {
      setSlipData((prev) => ({
        ...prev,
        price:
          prev?.price !== null ? (Number(prev?.price) + 0.01).toFixed(2) : 0,
      }));
      manageOddsData((Number(slipData?.price) + 0.01).toFixed(2)); // because state update wont effect suddenly
    }
  };

  const handleChange = (e, type) => {
    if (type === "stake") {
      const newValue = e.target.value;
      manageStakeData(newValue);
    } else {
      const newValue = e.target.value;
      setSlipPrice(newValue !== "" ? newValue : null);
    }
  };

  return (
    <div className="w-full z-0 text-white text-base">
      <div
        className={` border-y-[3px] w-auto ${
          slipData?.type === "lay"
            ? "border-[#eb4d4da4] bg-[#372A2D]"
            : "border-[#0F60A0] bg-[#1F3140]"
        }  pr-2`}
      >
        <div className="offer-form flex flex-col items-end">
          <div className="offer-input-group flex ml-2 gap-2 mt-2 lg:w-[70%] w-auto">
            <Input
              placeholder="0"
              value={slipPrice}
              handleIncrement={increment}
              handleDecrement={decrement}
              handleChange={handleChange}
            />
            <Input
              placeholder="stake"
              value={Math.abs(stake)}
              handleIncrement={increment}
              handleDecrement={decrement}
              handleChange={handleChange}
            />
          </div>
          <div className="default-stake mt-1 w-full">
            <div className="stake grid grid-cols-3 gap-1 pl-2 w-full md:flex md:flex-wrap md:justify-end">
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer px-4 py-1 text-center font-medium mt-2"
                onClick={() => handleSpanClick(100)}
              >
                <span>100</span>
              </span>
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer mt-2 px-4 py-1 text-center font-medium "
                onClick={() => handleSpanClick(1000)}
              >
                <span>1,000</span>
              </span>
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer mt-2 px-4 py-1 text-center font-medium "
                onClick={() => handleSpanClick(2000)}
              >
                <span>2,000</span>
              </span>
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer mt-2 px-4 py-1 text-center font-medium "
                onClick={() => handleSpanClick(5000)}
              >
                <span>5,000</span>
              </span>
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer mt-2 px-4 py-1 text-center font-medium "
                onClick={() => handleSpanClick(10000)}
              >
                <span>10,000</span>
              </span>
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer mt-2 px-4 py-1 text-center font-medium "
                onClick={() => handleSpanClick(20000)}
              >
                <span>20,000</span>
              </span>
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer mt-2 px-4 py-1 text-center font-medium "
                onClick={() => handleSpanClick(50000)}
              >
                <span>50,000</span>
              </span>
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer mt-2 px-4 py-1 text-center font-medium "
                onClick={() => handleSpanClick(100000)}
              >
                <span>100,000</span>
              </span>
              <span
                onClick={() => clearBetSlip()}
                className="bg-[#DADADA] text-[#1c1c1c] rounded-md mt-2 cursor-pointer px-4 py-1 text-center font-medium"
              >
                Clear
              </span>
            </div>
          </div>
          <div className="multi-form-button pt-2 ">
            <div className="d-flex justify-content-end flex-wrap align-items-center mb-2 ">
              <button
                onClick={() => closeBetslip()}
                className="mr-1 bg-[#EF5049] font-medium rounded-md px-4 py-1 text-center"
              >
                <span>Cancel</span>
              </button>
              <button
                onClick={() => handlePlaceBet()}
                className="bg-[#169C59] font-medium rounded-md px-5 py-1 text-center"
              >
                <span className="flex items-center gap-1">
                  <span className="h-3  items-center"><BiCheck/></span> 
                  Place Bet</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
