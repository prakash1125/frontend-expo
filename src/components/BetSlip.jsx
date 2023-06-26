import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Input from "./Input";
import { betOnBack, betOnLay } from "../utils/helper";
import { BiCheck } from "react-icons/bi";
import Chip from "./Chip";
import DefaultChip from "./DefaultChip";

const BetSlip = ({
  betLoader,
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
  const [chipData, setChipData] = useState(false)
  const loading = useSelector((state) => state?.PlaceBet?.loading);
  const chipDatas = useSelector((state) => state?.GetChipSetting?.chipData?.data)
  const updatedChipData = useSelector((state) => state?.ChipSetting?.newChip)
  console.log(chipData, "___________CHIPDATA");


  useEffect(() => {
    setSlipPrice(slipData?.price);
  }, [slipData]);

  // To Update ChipData when there is realTime Update
  useEffect(() => {
    setChipData(updatedChipData)
  }, [updatedChipData])


  // To Update ChipData with initial render
  useEffect(() => {
    setChipData(chipDatas)
  }, [chipDatas])

  //Mange BookData with Stake data Calculations
  const manageStakeData = (val) => {
    if (slipData?.type === "back") {
      let profit = betOnBack.profit(slipData?.price, val);
      let lose = betOnBack.lose(val);
      console.log(profit);
      console.log(lose);
      setStake(lose);
      setStakeAmount(profit);
    } else {
      console.log("in else");
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
    if (type === "Stake") {
      if (Math.abs(stake) > 0) {
        manageStakeData(Math.abs(stake) - 1);
      }
    } else {
      console.log("else");
      setSlipData((prev) => ({
        ...prev,
        price:
          prev?.price !== null ? (Number(prev?.price) - 0.01).toFixed(2) : 0,
      }));
      manageOddsData((Number(slipData?.price) - 0.01).toFixed(2)); // because state update wont effect suddenly
    }
  };

  const increment = (type) => {
    if (type === "Stake") {
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
    if (type === "Stake") {
      const newValue = e.target.value;
      manageStakeData(newValue);
    } else {
      const newValue = e.target.value;
      setSlipData((prev) => ({
        ...prev,
        price: newValue,
      }));
      manageOddsData(newValue); // because state update wont effect suddenly
    }
  };
  console.log("ooooooooopp", betLoader)
  return (
    <div className="w-full z-0 text-white text-base">
      {loading ? <div
        className={` border-y-[3px] w-auto ${slipData?.type === "lay"
          ? "border-[#eb4d4da4] bg-[#372A2D]"
          : "border-[#0F60A0] bg-[#1F3140]"
          }  pr-2`}
      >
        <div className="flex h-52 md:h-[136px] items-center">
          <div className=" m-auto ">
            <div className="animate-pulse" role="status">
              <svg aria-hidden="true" className={`w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 ${slipData?.type === "back" ? 'fill-[#0F60A0]' : 'fill-[#eb4d4d]'}`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              {/* <span className="sr-only">Loading...</span> */}
            </div>
          </div>
        </div>
      </div> : <div
        className={` border-y-[3px] w-auto ${slipData?.type === "lay"
          ? "border-[#eb4d4da4] bg-[#372A2D]"
          : "border-[#0F60A0] bg-[#1F3140]"
          }  pr-2`}
      >
        <div className="offer-form flex flex-col items-end">
          <div className="offer-input-group flex justify-end ml-2 gap-2 mt-2 lg:w-[70%] w-auto">
            <Input
              placeholder="0"
              value={slipPrice}
              handleIncrement={increment}
              handleDecrement={decrement}
              handleChange={handleChange}
            />
            <Input
              placeholder="Stake"
              value={Math.abs(stake)}
              handleIncrement={increment}
              handleDecrement={decrement}
              handleChange={handleChange}
            />
          </div>
          <div className="default-stake mt-1 w-full">
            <div className="stake grid grid-cols-3 gap-1 pl-2 w-full md:flex md:flex-wrap md:justify-end">
                {chipData ? (
                  <Chip handleClick={handleSpanClick} chipData={chipData?.chip} />
                ) : (
                  <DefaultChip handleClick={handleSpanClick} />
                )}
              <span
                onClick={() => clearBetSlip()}
                className="bg-[#DADADA] text-[#1c1c1c]  rounded-md mt-2 cursor-pointer px-4 py-1 text-center font-medium"
              >
                Clear
              </span>
            </div>
          </div>
          <div className="multi-form-button pt-2 ">
            <div className="d-flex justify-content-end flex-wrap align-items-center mb-2 ">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeBetslip()
                }}
                className="mr-1 bg-[#EF5049] font-medium rounded-md px-4 py-1 text-center"
              >
                <span>Cancel</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlaceBet();
                }}
                className="bg-[#169C59] font-medium rounded-md px-5 py-1 text-center"
              >
                <span className="flex items-center gap-1">
                  <span className="h-3  items-center"><BiCheck /></span>
                  Place Bet</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      }

    </div>
  );
};

export default BetSlip;
