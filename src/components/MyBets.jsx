import React from "react";
import { betOnBack } from "../utils/helper";

const MyBets = ({ bets, eventId }) => {
  const currentEventBets = bets?.filter((obj) => obj.eventId === eventId);
  return (
    <div className={`max-w-xs mx-auto bg-skin-nav  rounded-sm mt-2 mb-2`}>
      <div className="p-1 flex justify-center">
        <button className="flex justify-center items-center gap-2 text-skin-white  text-sm bg-skin-cardhead  p-3 rounded-md w-full font-semibold">
          <span>My Bets </span>
          <span className="flex items-center justify-center bg-skin-imgbg text-skin-dark  rounded-full p-0.5 w-5 h-5 font-semibold text-xs">
            {currentEventBets?.length}
          </span>
        </button>
      </div>

      {currentEventBets?.length !== 0 ? (
        <div className="h-80">
          <table className="overflow-scroll border-collapse w-full  text-center">
            <thead>
              <tr>
                <th className=" text-xs font-bold text-center uppercase  px-2 py-2 text-skin-white ">
                  SELECTION
                </th>
                <th className=" text-xs font-bold text-center uppercase px-2 py-2 text-skin-white ">
                  ODD
                </th>
                <th className=" text-xs font-bold text-center uppercase px-2 py-2 text-skin-white ">
                  STAKE
                </th>
                <th className=" text-xs font-bold text-center uppercase px-2 py-2 text-skin-white ">
                  P/L
                </th>
                <th className=" text-xs font-bold text-center uppercase   px-2 py-2 text-skin-white ">
                  TIME
                </th>
              </tr>
            </thead>
            <tbody>
              {currentEventBets?.lengh !== 0 &&
                currentEventBets?.map((bet, index) => {
                  if (bet?.eventId === eventId) {
                    return (
                      <tr className="border-y-[#f9fafa] border" key={index}>
                        <td
                          className={`${
                            bet?.selectionType === "back"
                              ? "bg-[#008efb]"
                              : "bg-[#E9564D]"
                          } text-xs font-bold uppercase text-left px-2 py-1.5 text-skin-secondary`}
                        >
                          {bet?.selection}
                        </td>
                        <td
                          className={`${
                            bet?.selectionType === "back"
                              ? "bg-[#008EFB]"
                              : "bg-[#E9564D]"
                          } text-xs font-bold uppercase text-left px-2 py-1.5 text-skin-secondary `}
                        >
                          {bet?.odds}
                        </td>
                        <td
                          className={`${
                            bet?.selectionType === "back"
                              ? "bg-[#008EFB]"
                              : "bg-[#E9564D]"
                          } text-xs font-bold uppercase text-left px-2 py-1.5 text-skin-secondary `}
                        >
                          {bet?.stake}
                        </td>
                        <td
                          className={`${
                            bet?.selectionType === "back"
                              ? "bg-[#008EFB]"
                              : "bg-[#E9564D]"
                          } text-xs font-bold uppercase text-left px-2 py-1.5 text-skin-secondary `}
                        >
                          {Math.round(betOnBack.profit(bet?.odds, bet?.stake))}
                        </td>
                        <td
                          className={`${
                            bet?.selectionType === "back"
                              ? "bg-[#008EFB]"
                              : "bg-[#E9564D]"
                          } text-xs font-bold uppercase text-left px-2 py-1.5 text-skin-secondary `}
                        >
                          {new Date(bet?.createdAt).toLocaleString()}
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
