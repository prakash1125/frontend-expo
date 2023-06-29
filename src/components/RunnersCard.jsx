import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import BetSlip from "./BetSlip";
import { useDispatch, useSelector } from "react-redux";
import {
  betOnBack,
  betOnLay,
  findRunnerOdds,
  notifyWarning,
} from "../utils/helper";
import { placeBet } from "../redux/actions";
import { BsFillInfoCircleFill } from "react-icons/bs";

const RunnersCard = ({ market, odds, eventId }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [isBetSlipOpen, setIsBetSlipOpen] = useState(false);
  const [betLoader, setBetLoader] = useState(false);
  const [slipData, setSlipData] = useState({ price: 0, type: "" });
  const [stakeAmount, setStakeAmount] = useState(null);
  const [stake, setStake] = useState(null);
  const [eventMarket, setEventMarket] = useState(market);
  const [bookData, setBookData] = useState([]);
  const [showStake, setShowStake] = useState(false);
  const [myBets, setMyBets] = useState([]);
  const bets = useSelector((state) => state?.GetBet?.allBets);
  const newBet = useSelector((state) => state?.PlaceBet?.bets);

  const dispatch = useDispatch();

  useEffect(() => {
    setMyBets(newBet?.allBets);
  }, [newBet]);

  useEffect(() => {
    setMyBets(bets);
  }, [bets]);

  // For Showing if there any previously placed Bets

  useEffect(() => {
    let runnerBook = [];
    eventMarket?.runners?.forEach((runner) => {
      const data = {
        name: runner?.name,
        pl_pr: 0,
        pl: 0,
      };
      runnerBook.push(data);
    });
    myBets?.forEach((bet) => {
      if (bet?.marketId === market?.marketId) {
        runnerBook?.forEach((runner) => {
          if (String(runner?.name) === String(bet?.selection)) {
            if (bet?.selectionType === "back") {
              runner.pl += betOnBack.profit(bet?.odds, bet?.stake);
            } else {
              runner.pl -= Math.abs(betOnLay.lose(bet?.odds, bet?.stake));
            }
          } else {
            if (bet?.selectionType === "back") {
              runner.pl -= bet?.stake;
            } else {
              runner.pl += bet?.stake;
            }
          }
        });
      }
    });
    setBookData(runnerBook);
  }, [myBets, market?.marketId, eventMarket.runners]);

  useEffect(() => {
    // Update the Event market data immediately
    setEventMarket(market);
  }, [market]);

  //Handle the Odds Click for place Bet
  const handleOddsClick = (
    price,
    type,
    selectionId,
    marketId,
    marketType,
    runnerName,
    marketCode
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
      marketCode: marketCode,
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
    if (localStorage?.getItem("token")) {
      const data = {
        eventId: eventId,
        stake: Math.abs(stake),
        selectionType: slipData?.type,
        odds: slipData?.price,
        marketId: slipData?.marketId,
        selection: slipData?.selectionName,
        marketType: slipData?.marketType,
        marketCode: slipData?.marketCode,
        selectionId: slipData?.selectionId,
      };
      dispatch(
        placeBet({
          data,
          callback: (data) => {
            if (data?.meta?.code === 200) {
              handleBetSlipClose();
            }
          },
        })
      );
    } else {
      notifyWarning("Please Login to Bet");
    }
  };

  return (
    <div className="rounded-md mt-2 w-full bg-skin-nav drop-shadow-md">
      <div className="flex w-full items-center bg-skin-cardhead rounded-t-md justify-between h-[40px] px-4 cursor-pointer">
        <div className="flex items-center">
          <div className="flex items-center text-sm text-skin-secondary font-medium">
            {eventMarket?.marketName}
            <span className="ml-2 text-[45px] font-bold pb-7 text-green-600">
              .
            </span>
          </div>
        </div>
        <div className="flex items-center px-1">
          <div className="flex items-center">
            {showStake && (
              <span className="bg-[#4c555e] rounded p-1.5">
                <div className="flex text-white text-xs m-1.5 font-semibold">
                  {" "}
                  Stake Limit: <span>100-</span> <span> 100K</span>
                </div>
              </span>
            )}
            <BsFillInfoCircleFill
              className=" text-skin-primary hover:brightness-50"
              onClick={() => setShowStake(!showStake)}
            />
          </div>

          <div
            className="flex text-sm font-bold text-skin-primary"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {isDropdownOpen ? (
              <IoIosArrowUp className="ml-2 text-lg m-auto hover:brightness-50" />
            ) : (
              <IoIosArrowDown className="ml-2 text-lg m-auto hover:brightness-50" />
            )}
          </div>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="flex flex-col items-start gap-1 pb-1">
          {eventMarket?.runners?.map((runner, index) => {
            const currentMarket = findRunnerOdds(odds, runner?.runnerCode);
            return (
              <React.Fragment key={index}>
                <hr className="border-t border-gray-200/10 w-full" />
                <div className="flex w-full justify-between gap-3 pl-4 pr-1">
                  <div className="flex flex-col w-full text-skin-white text-sm font-semibold justify-start items-start">
                    <p>{runner?.name}</p>
                    {bookData ? (
                      <>
                        {bookData?.map((data, index) => {
                          if (runner?.name === data?.name) {
                            return (
                              <div
                                className="flex items-center gap-1"
                                key={index}
                              >
                                <span
                                  className={`flex text-xs ${
                                    data?.pl === 0
                                      ? "text-white"
                                      : data?.pl > 0
                                      ? "text-green-400"
                                      : "text-red-400"
                                  }`}
                                >
                                  {data?.pl === 0 && stakeAmount
                                    ? 0
                                    : data?.pl !== 0 && Math.abs(data?.pl)}
                                </span>

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
                                      data?.name === runner?.name //if this runner already have a placed bet
                                        ? data?.pl + stakeAmount === 0
                                          ? "text-white"
                                          : data?.pl + stakeAmount > 0
                                          ? "text-green-400"
                                          : "text-red-400"
                                        : data?.pl + stakeAmount === 0
                                        ? "text-white"
                                        : data?.pl + stakeAmount > 0
                                        ? "text-green-400"
                                        : "text-red-400"
                                    }`}
                                  >
                                    {data?.name === runner?.name
                                      ? Math.abs(data?.pl + stakeAmount)
                                      : Math.abs(bookData?.stake + stakeAmount)}
                                  </span>
                                ) : (
                                  <span
                                    className={`flex text-xs ${
                                      !stakeAmount ? "invisible" : ""
                                    } ${
                                      data?.name === runner?.name //if this runner already have a placed bet
                                        ? data?.pl + stake === 0
                                          ? "text-white"
                                          : data?.pl + stake > 0
                                          ? "text-green-400"
                                          : "text-red-400"
                                        : data?.pl + stake === 0
                                        ? "text-white"
                                        : data?.pl + stake > 0
                                        ? "text-green-400"
                                        : "text-red-400"
                                    }
                                `}
                                  >
                                    {data?.name
                                      ? Math.abs(data?.pl + stake)
                                      : Math.abs(bookData?.stake + stake)}
                                  </span>
                                )}
                              </div>
                            );
                          }
                        })}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex justify-end gap-1 w-[80%] rounded-md">
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
                                runner?.name,
                                currentMarket?.marketId
                              )
                            }
                            key={index}
                            className={`flex cursor-pointer flex-col items-center py-1 rounded-md w-[70px] ${
                              index === 2
                                ? "text-skin-blue "
                                : "text-white hidden md:block  "
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
                      // ?.slice()
                      // ?.reverse()
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
                                runner?.name,
                                currentMarket?.marketId
                              )
                            }
                            key={index}
                            className={`flex cursor-pointer flex-col items-center py-1 rounded-md w-[70px] ${
                              index === 0
                                ? "text-skin-pink "
                                : "text-white hidden md:block  "
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
                {currentMarket?.selectionId === slipData?.selectionId &&
                isBetSlipOpen ? (
                  <BetSlip
                    // betLoader={betLoader}
                    closeBetslip={handleBetSlipClose}
                    slipData={slipData}
                    setSlipData={setSlipData}
                    setStakeAmount={setStakeAmount}
                    stake={stake}
                    setStake={setStake}
                    clearBetSlip={handleClearClick}
                    handlePlaceBet={handlePlaceBet}
                  />
                ) : (
                  ""
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RunnersCard;
