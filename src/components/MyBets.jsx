import { DateTime } from "luxon";
import React from "react";
import { betOnBack } from "../utils/helper";

const MyBets = ({ bets, eventId }) => {
  const currentEventBets = bets?.filter((obj) => obj.eventId === eventId);
  return (
    <div className={` mx-auto bg-skin-nav rounded-sm mt-2 mb-2`}>
      <div className="p-1 flex  justify-center">
        <button className="flex justify-center items-center gap-2 text-skin-white  text-sm bg-skin-cardhead  p-2.5 rounded-md w-full font-semibold">
          <span>My Bets </span>
          <span className="flex items-center justify-center bg-skin-imgbg text-skin-dark  rounded-full p-0.5 w-5 h-5 font-semibold text-xs">
            {currentEventBets?.length}
          </span>
        </button>
      </div>

      {currentEventBets?.length !== 0 ? (
        <div className="overflow-y-auto h-80 overflow-x-hidden   scrollbar-hide">
          <table className="overflow-scroll border-collapse w-full  text-center">
            <thead>
            <tr>
              <th className=" text-[12px] font-bold text-left uppercase  pl-1 pr-2 py-2 text-skin-white ">
                SELECTION
              </th>
              <th className=" text-[12px] font-bold text-left uppercase pr-2 py-2 text-skin-white ">
                ODDS
              </th>
              <th className=" text-[12px] font-bold text-left uppercase pr-2 py-2 text-skin-white ">
                STAKE
              </th>
              <th className=" text-[12px] font-bold text-right uppercase  py-2 text-skin-white ">
                P/L
              </th>
              <th className=" text-[12px] font-bold text-right    pr-1 py-2 text-skin-white ">
                Time
              </th>
            </tr>
            </thead>
            <tbody>
              {currentEventBets?.lengh !== 0 &&
                currentEventBets?.map((bet, index) => {
                  if (bet?.eventId === eventId) {
                    return (
                      <tr key={index} >
                      <td
                        className={`${
                          bet?.selectionType === "back"
                            ? "bg-[#008EFB]"
                            : "bg-[#E9564D]"
                        } text-[11.5px]  font-bold text-left py-1 pl-1 border-y-[1px]  text-white`}
                      >
                        {bet?.selection}
                      </td>
                      <td
                        className={`${
                          bet?.selectionType === "back"
                            ? "bg-[#008EFB]"
                            : "bg-[#E9564D]"
                        } text-[11.5px]  font-bold  text-left py-1   border-y-[1px]  text-white `}
                      >
                        {bet?.odds}
                      </td>
                      <td
                        className={`${
                          bet?.selectionType === "back"
                            ? "bg-[#008EFB]"
                            : "bg-[#E9564D]"
                        } text-[11.5px]  font-bold  text-left py-1   border-y-[1px]  text-white `}
                      >
                        {bet?.stake}
                      </td>
                      <td
                        className={`${
                          bet?.selectionType === "back"
                            ? "bg-[#008EFB]"
                            : "bg-[#E9564D]"
                        } text-[11.5px]  font-bold  text-right py-1   border-y-[1px] text-white `}
                      >
            
                        {Math.round(betOnBack.profit(bet?.odds, bet?.stake))}
                      </td>
                      <td
                        className={`${
                          bet?.selectionType === "back"
                            ? "bg-[#008EFB]"
                            : "bg-[#E9564D]"
                        } text-[11.5px]  font-bold  text-right py-1 pr-1 border-y-[1px] text-white `}
                      >
                         {DateTime.fromISO(bet?.createdAt).toFormat(
                                  "yyyy-MM-dd HH:mm:ss"
                                )}
                        {/* {new Date(bet?.createdAt).toLocaleString()} */}
                      </td>
                    </tr>
                    );
                  } else {
                    return null;
                  }
                })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p className="p-4 m-0 text-white font-semibold text-center">
            There is no Bets for this event to display
          </p>
        </div>
      )}
    </div>
  );
};

export default MyBets;
