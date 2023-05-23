import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const AccountStatement = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const AccountStarement = [
    {
      date: "May 28 2023, 07:30 PM",
      description: "Withdrawal",
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: "Withdrawal",
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: "Withdrawal",
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: "Withdrawal",
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: "Withdrawal",
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: "Withdrawal",
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
    {
      date: "May 28 2023, 07:30 PM",
      description: "Withdrawal",
      cr: 0.3,
      dr: 0.0,
      balance: "-2,935.80",
    },
  ];

  return (
    <>
      <div className="profitloss-wrapper px-6 pb-4 bg-skin-nav rounded">
        <div className="text-center uppercase text-skin-white font-bold py-3 divide-y">
          Account Statement
        </div>

        <div className="flex flex-row-reverse items-center justify-end gap-1 my-3">
          <label className="text-[#b7b8b8] text-xs" htmlFor="checkbox">
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
            className={`bg-transparent ${
              isChecked ? "cursor-pointer" : "cursor-not-allowed"
            } border border-slate-700 hover:border-[#0d8247] text-[#b7b8b8] rounded p-2 w-64 focus:outline-none`}
            type="date"
            name=""
            id=""
            disabled={!isChecked}
          />
          <span className="bg-[#169c59] rounded px-2.5 font-semibold p-1.5  text-md text-skin-white hover:outline-green transition-colors duration-200 focus:outline-none">
            To
          </span>
          <input
            className={`bg-transparent ${
              isChecked ? "cursor-pointer" : "cursor-not-allowed"
            } border border-slate-700 hover:border-[#0d8247] text-[#b7b8b8] rounded p-2 w-64 focus:outline-none`}
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
        <table class=" border-collapse w-full border border-[#4c555e] overflow-x-scroll">
          <thead>
            <tr>
              <th class="whitespace-nowrap bg-skin-nav w-96 border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-skin-white">
                Date
              </th>
              <th class="whitespace-nowrap bg-skin-nav w-96 border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-skin-white">
                Description
              </th>
              <th class="whitespace-nowrap bg-skin-nav w-96 border border-gray-600 text-xs font-bold uppercase text-right px-2 py-2 text-skin-white">
                cr
              </th>
              <th class="whitespace-nowrap bg-skin-nav w-96 border border-gray-600 text-xs font-bold uppercase text-right px-2 py-2 text-skin-white">
                dr
              </th>
              <th class="whitespace-nowrap bg-skin-nav w-96 border border-gray-600 text-xs font-bold uppercase text-right px-2 py-2 text-skin-white">
                balance
              </th>
            </tr>
          </thead>
          <tbody>
            {AccountStarement.map((element, index) => (
              <tr key={index}>
                <td class="whitespace-nowrap border border-slate-700 bg-skin-cardhead text-xs font-bold uppercase text-left px-2 py-2 text-skin-secondary">
                  {element.date}
                </td>
                <td class="whitespace-nowrap border border-slate-700 bg-skin-cardhead text-xs font-bold uppercase text-left px-2 py-2 text-skin-secondary">
                  {element.description}
                </td>
                <td class="whitespace-nowrap border border-slate-700 bg-skin-cardhead text-sm font-bold uppercase text-right px-2 py-2 text-skin-secondary">
                  {element.cr}
                </td>
                <td class="whitespace-nowrap border border-slate-700 bg-skin-cardhead text-sm font-bold uppercase text-right px-2 py-2 text-skin-secondary">
                  {element.dr}
                </td>
                <td class="whitespace-nowrap border border-slate-700 bg-skin-cardhead text-sm font-bold uppercase text-right px-2 py-2 text-skin-secondary">
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
