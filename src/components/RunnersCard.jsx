import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import BetSlip from "./BetSlip";
import { useDispatch, useSelector } from "react-redux";
import { placeBet } from "../redux/actions";
import { betOnBack, betOnLay } from "../utils/helper";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RunnersCard = ({ market, odds, eventId }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [isBetSlipOpen, setIsBetSlipOpen] = useState(false);
  const [slipData, setSlipData] = useState({ price: 0, type: "" });
  const [stakeAmount, setStakeAmount] = useState(null);
  const [stake, setStake] = useState(null);
  const [eventMarket, setEventMarket] = useState(market);
  const [bookData, setBookData] = useState([]);
  const myBets = useSelector((state) => state?.GetBet?.allBets);
  const dispatch = useDispatch();

  useEffect(() => {
    // const currentBet = myBets?.find(
    //   (bet) => bet?.marketId === market?.marketId
    // );
    let currentBet = {};
    myBets?.forEach((bet) => {
      if (bet?.marketId === market?.marketId) {
        currentBet.marketId = market?.marketId;
        if (currentBet?.hasOwnProperty(bet?.selection)) {
          if (bet?.selectionType === "back") {
            const profit = betOnBack.profit(bet?.odds, bet?.stake);
            const lose = betOnBack.lose(bet?.stake);
            console.log(profit);
            currentBet[bet.selection] = currentBet[bet.selection] + profit;
            currentBet.stake = currentBet.stake + lose;
          } else {
            const lose = betOnLay.lose(bet?.odds, bet?.stake);
            const profit = betOnLay.profit(bet?.stake);
            currentBet[bet.selection] = currentBet[bet.selection] + lose;
            currentBet.stake = currentBet.stake + profit;
          }
        } else {
          currentBet[bet.selection] = 0;
          currentBet.stake = 0;
          if (bet?.selectionType === "back") {
            const profit = betOnBack.profit(bet?.odds, bet?.stake);
            const lose = betOnBack.lose(bet?.stake);
            console.log(profit);
            currentBet[bet.selection] = currentBet[bet.selection] + profit;
            currentBet.stake = currentBet.stake + lose;
          } else {
            const lose = betOnLay.lose(bet?.odds, bet?.stake);
            const profit = betOnLay.profit(bet?.stake);
            currentBet[bet.selection] = currentBet[bet.selection] + lose;
            currentBet.stake = currentBet.stake + profit;
          }
        }
      }
    });
    console.log(currentBet, "currentBet");
    setBookData(currentBet);
    // if (currentBet) {
    //   let amount;
    //   let stake;
    //   if (currentBet?.selectionType === "back") {
    //     amount = betOnBack.profit(currentBet?.odds, currentBet?.stake);
    //     stake = betOnBack.lose(currentBet?.stake);
    //   } else {
    //     amount = betOnLay.lose(currentBet?.odds, currentBet?.stake);
    //     stake = betOnLay.profit(currentBet?.stake);
    //   }
    //   setBookData({
    //     type: currentBet?.selectionType,
    //     amount: amount,
    //     runner: currentBet?.selection,
    //     stake: stake,
    //     marketId: currentBet?.marketId,
    //   });
    // }
  }, [myBets, market?.marketId]);

  useEffect(() => {
    // Update the Event market data immediately
    setEventMarket(market);
  }, [market]);

  const handleOddsClick = (
    price,
    type,
    selectionId,
    marketId,
    marketType,
    runnerName
  ) => {
    handleClearClick();
    setIsBetSlipOpen(true);
    setSlipData({
      price: price,
      type: type,
      selectionId: selectionId,
      marketId: marketId,
      selectionName: runnerName,
      marketType: marketType,
    });
  };

  // To Clear BetSlip
  const handleClearClick = () => {
    setStake(0);
    setStakeAmount(null);
  };

  //To Cancel
  const handleBetSlipClose = () => {
    handleClearClick();
    setSlipData({ price: 0, type: "" });
    setIsBetSlipOpen(false);
  };

  //To place the Bet
  const handlePlaceBet = () => {
    const data = {
      eventId: eventId,
      stake: Math.abs(stake),
      selectionType: slipData?.type,
      odds: slipData?.price,
      marketId: slipData?.marketId,
      selection: slipData?.selectionName,
      marketType: slipData?.marketType,
    };
    if (localStorage?.getItem("token")) {
      dispatch(
        placeBet({
          data,
          callback: (data) => {
            if (data?.meta?.code === 200) handleBetSlipClose();
          },
        })
      );
    } else {
      alert("Please Login to Bet");
    }
  };

  return (
    <div className="rounded-md mt-2 w-full bg-skin-nav drop-shadow-md">
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex w-full items-center bg-skin-cardhead rounded-t-md justify-between h-[40px] px-4 cursor-pointer"
      >
        <div className="flex items-center">
          <div className="flex items-center text-sm text-skin-secondary font-medium">
            <span>{eventMarket?.marketName}</span> <span className="font-extrabold text-4xl pb-5 pl-2 text-green-600">.</span>
          </div>
        </div>
        <div className="flex items-center space-x-8 px-1">
          <div className="flex text-sm font-bold text-skin-primary">
            {isDropdownOpen ? (
              <RiArrowUpSLine className="ml-2 text-xl m-auto" />
            ) : (
              <IoIosArrowDown className="ml-2 text-lg m-auto" />
            )}
          </div>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="flex flex-col items-start gap-1 pb-1">
          {eventMarket?.runners?.map((runner, index) => {
            const currentMarket = Object.values(odds)[0]?.runners.find(
              (odd) => {
                const data =
                  parseFloat(odd?.selectionId) ===
                  parseFloat(runner?.runnerCode);
                return data;
              }
            );
            return (
              <React.Fragment key={index}>
                <hr className="border-t border-gray-200/10 w-full" />
                <div className="flex w-full justify-between gap-3 pl-4 pr-1">
                  <div className="flex flex-col text-skin-white text-sm font-semibold justify-start items-start">
                    <p>{runner?.name}</p>
                    {bookData &&
                    bookData?.marketId === eventMarket?.marketId ? (
                      <div className="flex items-center gap-1">
                        {bookData?.hasOwnProperty(runner?.name) ? (
                          <span
                            className={`flex text-xs ${
                              bookData?.[runner?.name] > 0
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                          >
                            {Math.abs(bookData?.[runner?.name])}
                          </span>
                        ) : (
                          <span
                            className={`flex text-xs ${
                              bookData?.stake < 0
                                ? "text-red-400"
                                : "text-green-400"
                            }
                            `}
                          >
                            {Math.abs(bookData?.stake)}
                          </span>
                        )}

                        <span
                          className={`flex text-xs ${
                            !stakeAmount ? "invisible" : ""
                          } ${
                            slipData?.type === "back"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {`>`}
                        </span>
                        {currentMarket?.selectionId ===
                        slipData?.selectionId ? (
                          <span
                            className={`flex text-xs ${
                              !stakeAmount ? "invisible" : ""
                            } ${
                              bookData?.[runner?.name]
                                ? bookData?.[runner?.name] + stakeAmount === 0
                                  ? "text-white"
                                  : bookData?.[runner?.name] + stakeAmount > 0
                                  ? "text-green-400"
                                  : "text-red-400"
                                : bookData?.stake + stakeAmount === 0
                                ? "text-white"
                                : bookData?.stake + stakeAmount > 0
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                          >
                            {bookData?.[runner?.name]
                              ? Math.abs(bookData?.[runner?.name] + stakeAmount)
                              : Math.abs(bookData?.stake + stakeAmount)}
                          </span>
                        ) : (
                          <span
                            className={`flex text-xs ${
                              !stakeAmount ? "invisible" : ""
                            } ${
                              bookData?.[runner?.name]
                                ? bookData?.[runner?.name] + stake === 0
                                  ? "text-white"
                                  : bookData?.[runner?.name] + stake > 0
                                  ? "text-green-400"
                                  : "text-red-400"
                                : bookData?.stake + stake === 0
                                ? "text-white"
                                : bookData?.stake + stake > 0
                                ? "text-green-400"
                                : "text-red-400"
                            }
                            `}
                          >
                            {bookData?.[runner?.name]
                              ? Math.abs(bookData?.[runner?.name] + stake)
                              : Math.abs(bookData?.stake + stake)}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center gap-1">
                        <span
                          className={`flex text-xs ${
                            !stakeAmount ? "invisible" : ""
                          } text-white`}
                        >
                          0
                        </span>
                        <span
                          className={`flex text-xs ${!stakeAmount ? "invisible" : ""
                            } ${slipData?.type === "lay"
                              ? "text-red-500"
                              : "text-green-600"
                            }`}
                        >
                          {`>`}
                        </span>
                        {currentMarket?.selectionId ===
                        slipData?.selectionId ? (
                          <span
                            className={`flex text-xs ${
                              !stakeAmount ? "invisible" : ""
                            } ${
                              slipData?.type === "back"
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                          >
                            {Math.abs(stakeAmount)}
                          </span>
                        ) : (
                          <span
                            className={`flex text-xs ${
                              !stakeAmount ? "invisible" : ""
                            } ${
                              slipData?.type === "lay"
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                          >
                            {Math.abs(stake)}
                          </span>
                        )}
                      </div>
                    )}

                  </div>
                  <div className="flex items-center gap-1 w-[55%] rounded-md">
                    {currentMarket?.ex?.availableToBack
                      ?.slice()
                      ?.reverse()
                      ?.map((back, index) => {
                        return (
                          <div
                            onClick={() =>
                              handleOddsClick(
                                back?.price,
                                "back",
                                currentMarket?.selectionId,
                                eventMarket?.marketId,
                                eventMarket?.marketType,
                                runner?.name
                              )
                            }
                            key={index}
                            className={`flex cursor-pointer flex-col items-center py-1 rounded-md w-[30%] ${index === 2 ? "text-skin-blue" : "text-white"
                              } font-bold bg-skin-cardhead rounded-b-md`}
                          >
                            <p className={`text-center text-[14.5px]`}>
                              {back?.price ? back?.price : "-"}
                            </p>
                            <p className="text-center text-skin-primary text-[11px]">
                              {back?.size ? back?.size : "-"}
                            </p>
                          </div>
                        );
                      })}
                    {currentMarket?.ex?.availableToLay
                      ?.slice()
                      ?.reverse()
                      ?.map((lay, index) => {
                        return (
                          <div
                            onClick={() =>
                              handleOddsClick(
                                lay?.price,
                                "lay",
                                currentMarket?.selectionId,
                                eventMarket?.marketId,
                                eventMarket?.marketType,
                                runner?.name
                              )
                            }
                            key={index}
                            className={`flex cursor-pointer flex-col items-center py-1 rounded-md w-[30%] ${index === 0 ? "text-skin-pink" : "text-white"
                              } font-bold bg-skin-cardhead rounded-b-md`}
                          >
                            <p className={`text-center text-[14.5px]`}>
                              {lay?.price ? lay?.price : "-"}
                            </p>
                            <p className="text-center text-skin-primary text-[11px]">
                              {lay?.size ? lay?.size : "-"}
                            </p>
                          </div>
                        );
                      })}
                  </div>

                </div>
                {currentMarket?.selectionId === slipData?.selectionId && isBetSlipOpen ? (
                  <BetSlip
                    closeBetslip={setIsBetSlipOpen}
                    slipData={slipData}
                    setStakeAmount={setStakeAmount}
                    stake={stake}
                    setStake={setStake}
                    clearBetSlip={handleClearClick}
                    handlePlaceBet={handlePlaceBet}
                  />
                ) : ''}
              </React.Fragment>
            );
          })}

        </div>
      )}
    </div>
  );
};

export default RunnersCard;
