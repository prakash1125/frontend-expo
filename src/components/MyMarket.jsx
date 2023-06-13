import React from "react";
import { useTranslation } from 'react-i18next';

export const MyMarket = () => {
  const MarketData = [
    {
      date: "May 28 2023, 07:30 PM",
      sport: "Football",
      event: "FIFA",
      bets: 2,
    },
  ];

  const { i18n, t } = useTranslation();

  return (
    <>
      <div className="mymarket-wrapper bg-skin-nav  rounded mt-2">
        <div className="uppercase text-center text-skin-white font-bold py-3 divide-y">
           {t("MY_MARKET")}
        </div>

        <div className="max-w-full overflow-x-auto mt-3">
          <table className=" border-collapse w-full border border-[#4c555e] overflow-x-scroll">
            <thead>
              <tr>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-skin-white">
                   {t("DATE")}
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-skin-white">
                 {t("SPORTS")}
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-skin-white">
                   {t("EVENTS")}
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-skin-white">
                  {t("BETS")}
                </th>
              </tr>
            </thead>
            <tbody>
              {MarketData.map((element, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap border border-slate-600 bg-skin-cardhead text-sm font-bold uppercase text-left px-2 py-3.5 text-skin-secondary">
                    {element.date}
                  </td>
                  <td className="whitespace-nowrap border border-slate-600 bg-skin-cardhead text-sm font-bold uppercase text-left px-2 py-3.5 text-skin-secondary">
                    {element.sport}
                  </td>
                  <td className="whitespace-nowrap border border-slate-600 bg-skin-cardhead text-sm font-bold uppercase text-left px-2 py-3.5 text-[#20d97c]">
                    {element.event}
                  </td>
                  <td className="whitespace-nowrap border border-slate-600 bg-skin-cardhead text-sm font-bold uppercase text-left px-2 py-3.5 text-skin-secondary">
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
