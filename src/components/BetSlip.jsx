import React, { useEffect, useState } from "react";
import Input from "./Input";
import { betOnBack, betOnLay } from "../utils/helper";

const BetSlip = ({
  closeBetslip,
  slipData,
  setStakeAmount,
  stake,
  setStake,
  clearBetSlip,
  handlePlaceBet,
}) => {
  const [slipPrice, setSlipPrice] = useState(0);

  useEffect(() => {
    setSlipPrice(slipData?.price);
  }, [slipData]);

  const handleStakeChange = (value) => {
    if (slipData?.type === "back") {
      setStake(-1 * value);
    } else {
      setStake(value);
    }
  };

  const handleSpanClick = (spanValue) => {
    // setStake((prevStake) => prevStake + spanValue);
    const val = stake + spanValue;
    if (slipData?.type === "back") {
      let profit = betOnBack.profit(slipData?.price, val);
      let lose = betOnBack.lose(val);
      setStake(lose);
      setStakeAmount(profit);
    } else {
      let lose = betOnLay.lose(slipData?.price, val);
      let profit = betOnLay.profit(val);
      console.log(lose, "lose");
      console.log(profit, "profit");
      setStakeAmount(lose);
      setStake(profit);
    }
  };

  return (
    <div className="w-full z-0 text-white text-base">
      <div
        className={` border-y-[3px] ${
          slipData?.type === "lay"
            ? "border-[#eb4d4da4] bg-[#372A2D]"
            : "border-[#0F60A0] bg-[#1F3140]"
        }  pr-2`}
      >
        <div className="offer-form flex flex-col items-end">
          <div className="offer-input-group flex gap-2 mt-2 w-[55%]">
            <Input placeholder="0" value={slipPrice} setValue={setSlipPrice} />
            <Input
              placeholder="stake"
              value={stake}
              onChange={handleStakeChange}
            />
          </div>
          <div className="default-stake mt-3">
            <div className="stake flex">
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer px-4 py-1 text-center font-medium mr-1"
                onClick={() => handleSpanClick(100)}
              >
                <span>100</span>
              </span>
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer px-4 py-1 text-center font-medium mr-1"
                onClick={() => handleSpanClick(1000)}
              >
                <span>1,000</span>
              </span>
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer px-4 py-1 text-center font-medium mr-1"
                onClick={() => handleSpanClick(2000)}
              >
                <span>2,000</span>
              </span>
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer px-4 py-1 text-center font-medium mr-1"
                onClick={() => handleSpanClick(5000)}
              >
                <span>5,000</span>
              </span>
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer px-4 py-1 text-center font-medium mr-1"
                onClick={() => handleSpanClick(10000)}
              >
                <span>10,000</span>
              </span>
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer px-4 py-1 text-center font-medium mr-1"
                onClick={() => handleSpanClick(20000)}
              >
                <span>20,000</span>
              </span>
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer px-4 py-1 text-center font-medium mr-1"
                onClick={() => handleSpanClick(50000)}
              >
                <span>50,000</span>
              </span>
              <span
                className="bg-[#4C555E] rounded-md cursor-pointer px-4 py-1 text-center font-medium mr-1"
                onClick={() => handleSpanClick(100000)}
              >
                <span>100,000</span>
              </span>
              <span
                onClick={() => clearBetSlip()}
                className="bg-[#DADADA] text-[#1c1c1c] rounded-md cursor-pointer px-4 py-1 text-center font-medium"
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
                <span>Place Bet</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
