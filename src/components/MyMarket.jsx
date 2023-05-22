import React from "react";

export const MyMarket = () => {
  const MarketData = [
    {
      date: "May 28 2023, 07:30 PM",
      sport: "Football",
      event: "FIFA",
      bets: 2,
    },
  ];
  return (
    <>
      <div className="mymarket-wrapper bg-[#22262a] rounded mt-2">
        <div className="uppercase text-center text-white font-bold py-3 divide-y">
          My Market
        </div>

        <div className="max-w-full overflow-x-auto mt-3">
          <table className=" border-collapse w-full border border-[#4c555e] overflow-x-scroll">
            <thead>
              <tr>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Date
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Sports
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Event
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Bets
                </th>
              </tr>
            </thead>
            <tbody>
              {MarketData.map((element, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap border border-slate-600 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {element.date}
                  </td>
                  <td className="whitespace-nowrap border border-slate-600 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {element.sport}
                  </td>
                  <td className="whitespace-nowrap border border-slate-600 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#20d97c]">
                    {element.event}
                  </td>
                  <td className="whitespace-nowrap border border-slate-600 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {element.bets}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
