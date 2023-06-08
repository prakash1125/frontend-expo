import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const ProfitLoss = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const PLReport = [
    {
      date: "May 28 2023, 07:30 PM",
      description: [
        {
          top: "Cricket > Indian Premier League > Gujarat Titans v Sunrisers Hyderabad > Match Odds",
          bottom: "Result: Gujarat Titans",
        },
      ],
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: [
        {
          top: "Cricket > Indian Premier League > Gujarat Titans v Sunrisers Hyderabad > Match Odds",
          bottom: "Result: Gujarat Titans",
        },
      ],
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: [
        {
          top: "Cricket > Indian Premier League > Gujarat Titans v Sunrisers Hyderabad > Match Odds",
          bottom: "Result: Gujarat Titans",
        },
      ],
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: [
        {
          top: "Cricket > Indian Premier League > Gujarat Titans v Sunrisers Hyderabad > Match Odds",
          bottom: "Result: Gujarat Titans",
        },
      ],
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: [
        {
          top: "Cricket > Indian Premier League > Gujarat Titans v Sunrisers Hyderabad > Match Odds",
          bottom: "Result: Gujarat Titans",
        },
      ],
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: [
        {
          top: "Cricket > Indian Premier League > Gujarat Titans v Sunrisers Hyderabad > Match Odds",
          bottom: "Result: Gujarat Titans",
        },
      ],
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: [
        {
          top: "Cricket > Indian Premier League > Gujarat Titans v Sunrisers Hyderabad > Match Odds",
          bottom: "Result: Gujarat Titans",
        },
      ],
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: [
        {
          top: "Cricket > Indian Premier League > Gujarat Titans v Sunrisers Hyderabad > Match Odds",
          bottom: "Result: Gujarat Titans",
        },
      ],
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: [
        {
          top: "Cricket > Indian Premier League > Gujarat Titans v Sunrisers Hyderabad > Match Odds",
          bottom: "Result: Gujarat Titans",
        },
      ],
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: [
        {
          top: "Cricket > Indian Premier League > Gujarat Titans v Sunrisers Hyderabad > Match Odds",
          bottom: "Result: Gujarat Titans",
        },
      ],
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: [
        {
          top: "Cricket > Indian Premier League > Gujarat Titans v Sunrisers Hyderabad > Match Odds",
          bottom: "Result: Gujarat Titans",
        },
      ],
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
  ];

  return (
    <>
      <div className="profitloss-wrapper px-6 pb-4 bg-skin-nav  rounded">
        <div className="text-center uppercase text-skin-white font-bold py-3 divide-y">
          PROFIT &amp; LOSS REPORT
        </div>

        <div className="flex flex-row-reverse items-center justify-end gap-1 my-3">
          <label className="text-skin-secondary text-xs" htmlFor="checkbox">
            Date Wise
          </label>
          <input
            className="text-lg checked:bg-gray-500 bg-transparent w-4 h-4 rounded  "
            type="checkbox"
            name=""
            id="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>

        <div className="date-wrapper flex items-center gap-2">
          <input
            className={`bg-transparent ${isChecked ? "cursor-pointer" : "cursor-not-allowed"} border border-slate-700 hover:border-[#0d8247] text-skin-secondary rounded p-2 w-64 focus:outline-none`}
            type="date"
            name=""
            id=""
            disabled={!isChecked}
          />
          <span className="bg-[#169c59] rounded px-2.5 font-semibold p-1.5  text-md text-skin-white hover:outline-green transition-colors duration-200 focus:outline-none">
            To
          </span>
          <input
            className={`bg-transparent ${isChecked ? "cursor-pointer" : "cursor-not-allowed"} border border-slate-700 hover:border-[#0d8247] text-skin-secondary rounded p-2 w-64 focus:outline-none`}
            type="date"
            name=""
            id=""
            disabled={!isChecked}
          />
          <button
            type="button"
            className="bg-[#169c59] flex items-center gap-1 rounded px-2.5 font-semibold p-1.5  text-md text-skin-white hover:bg-[#0d8247] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <AiOutlineSearch className="text-lg font-bold" /> Search
          </button>
        </div>
      </div>

      <div className="table-wrapper max-w-full overflow-x-auto">
        <table className=" border-collapse w-full border border-[#4c555e] overflow-x-scroll">
          <thead>
            <tr>
              <th className="whitespace-nowrap bg-skin-nav  border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-skin-white">
                Date
              </th>
              <th className="whitespace-nowrap bg-skin-nav  w-3/5 border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-skin-white">
                Description
              </th>
              <th className="whitespace-nowrap bg-skin-nav  border border-gray-600 text-xs font-bold uppercase text-right px-2 py-2 text-skin-white">
                cr
              </th>
              <th className="whitespace-nowrap bg-skin-nav  border border-gray-600 text-xs font-bold uppercase text-right px-2 py-2 text-skin-white">
                dr
              </th>
              <th className="whitespace-nowrap bg-skin-nav  border border-gray-600 text-xs font-bold uppercase text-right px-2 py-2 text-skin-white">
                balance
              </th>
            </tr>
          </thead>
          <tbody>
            {PLReport.map((element, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap border border-slate-700 bg-skin-cardhead  text-xs font-bold uppercase text-left px-2 py-3.5 text-skin-secondary">
                  {element.date}
                </td>
                <td className="whitespace-nowrap border border-slate-700 bg-skin-cardhead  text-xs font-bold uppercase text-left px-2 py-3.5 text-skin-secondary">
                  {element.description.map((element) => {
                    return (
                      <div className="flex flex-col">
                        <span className="text-[#1fda7d] cursor-pointer">
                          {element.top}
                        </span>
                        <span className="text-[#d3fade]">{element.bottom}</span>
                      </div>
                    );
                  })}
                </td>
                <td className="whitespace-nowrap border border-slate-700 bg-skin-cardhead  text-sm font-bold uppercase text-right px-2 py-3.5 text-skin-secondary">
                  {element.cr}
                </td>
                <td className="whitespace-nowrap border border-slate-700 bg-skin-cardhead  text-sm font-bold uppercase text-right px-2 py-3.5 text-skin-secondary">
                  {element.dr}
                </td>
                <td className="whitespace-nowrap border border-slate-700 bg-skin-cardhead  text-sm font-bold uppercase text-right px-2 py-3.5 text-skin-secondary">
                  {element.balance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
