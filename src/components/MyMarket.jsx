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
      <div className="mymarket-wrapper bg-skin-nav  rounded mt-2">
        <div className="uppercase text-center text-skin-white font-bold py-3 divide-y">
          My Market
        </div>

        <div className="max-w-full overflow-x-auto mt-3">
          <table class=" border-collapse w-full border border-[#4c555e] overflow-x-scroll">
            <thead>
              <tr>
                <th class="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-skin-white">
                  Date
                </th>
                <th class="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-skin-white">
                  Sports
                </th>
                <th class="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-skin-white">
                  Event
                </th>
                <th class="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-skin-white">
                  Bets
                </th>
              </tr>
            </thead>
            <tbody>
              {MarketData.map((element, index) => (
                <tr key={index}>
                  <td class="whitespace-nowrap border border-slate-600 bg-skin-cardhead text-sm font-bold uppercase text-left px-2 py-3.5 text-skin-secondary">
                    {element.date}
                  </td>
                  <td class="whitespace-nowrap border border-slate-600 bg-skin-cardhead text-sm font-bold uppercase text-left px-2 py-3.5 text-skin-secondary">
                    {element.sport}
                  </td>
                  <td class="whitespace-nowrap border border-slate-600 bg-skin-cardhead text-sm font-bold uppercase text-left px-2 py-3.5 text-[#20d97c]">
                    {element.event}
                  </td>
                  <td class="whitespace-nowrap border border-slate-600 bg-skin-cardhead text-sm font-bold uppercase text-left px-2 py-3.5 text-skin-secondary">
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
