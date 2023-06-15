import { DateTime } from "luxon";
import React from "react";
import { betOnBack } from "../utils/helper";

const MyBets = ({ bets }) => {
  return (
    <div className={` mx-auto bg-skin-nav rounded-sm mt-2 mb-2`}>
      <div className="p-1 flex  justify-center">
        <button className="flex justify-center items-center gap-2 text-skin-white  text-sm bg-skin-cardhead  p-2.5 rounded-md w-full font-semibold">
          <span>My Bets </span>
          <span className="flex items-center justify-center bg-skin-imgbg text-skin-dark  rounded-full p-0.5 w-5 h-5 font-semibold text-xs">
            {bets?.length}
          </span>
        </button>
      </div>

      <div className=" overflow-y-auto h-80 overflow-x-hidden   scrollbar-hide">
        <table className="overflow-scroll border-collapse w-full  text-center">
          <thead>
            <tr>
              <th className=" text-xs font-bold text-left uppercase  px-1 pr-1 py-2 text-skin-white ">
                SELECTION
              </th>
              <th className=" text-xs font-bold text-left uppercase pr-1 py-2 text-skin-white ">
                ODDS
              </th>
              <th className=" text-xs font-bold text-left uppercase pr-1 py-2 text-skin-white ">
                STAKE
              </th>
              <th className=" text-xs font-bold text-left uppercase pr-1 py-2 text-skin-white ">
                P/L
              </th>
              <th className=" text-xs font-bold text-right    px-1 py-2 text-skin-white ">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {bets?.length !== 0 &&
              bets?.map((bet, index) => (
                <tr key={index} >
                  <td
                    className={`${
                      bet?.selectionType === "back"
                        ? "bg-[#008EFB]"
                        : "bg-[#E9564D]"
                    } text-[11px]  font-bold text-left py-1 px-1  border-y-[1px]  text-white`}
                  >
                    {bet?.selection}
                  </td>
                  <td
                    className={`${
                      bet?.selectionType === "back"
                        ? "bg-[#008EFB]"
                        : "bg-[#E9564D]"
                    } text-[11px]  font-bold  text-left py-1   border-y-[1px]  text-white `}
                  >
                    {bet?.odds}
                  </td>
                  <td
                    className={`${
                      bet?.selectionType === "back"
                        ? "bg-[#008EFB]"
                        : "bg-[#E9564D]"
                    } text-[11px]  font-bold  text-left py-1   border-y-[1px]  text-white `}
                  >
                    {bet?.stake}
                  </td>
                  <td
                    className={`${
                      bet?.selectionType === "back"
                        ? "bg-[#008EFB]"
                        : "bg-[#E9564D]"
                    } text-[11px]  font-bold  text-left py-1   border-y-[1px] text-white `}
                  >
        
                    {Math.round(betOnBack.profit(bet?.odds, bet?.stake))}
                  </td>
                  <td
                    className={`${
                      bet?.selectionType === "back"
                        ? "bg-[#008EFB]"
                        : "bg-[#E9564D]"
                    } text-[11px]  font-bold  text-right py-1 px-1  border-y-[1px] text-white `}
                  >
                     {DateTime.fromISO(bet?.createdAt).toFormat(
                              "yyyy-MM-dd HH:mm:ss"
                            )}
                    {/* {new Date(bet?.createdAt).toLocaleString()} */}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBets;
