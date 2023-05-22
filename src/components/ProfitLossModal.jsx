import React from "react";
import { MdOutlineClose } from "react-icons/md";

export const ProfitLossModal = ({ closeModal, title, modal }) => {
  return (
    <div className="z-50">
      <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
        <div className="relative bg-[black] p-5 rounded-xl w-3/5    ">
          <div className="flex items-start gap-2 justify-between mb-6">
            <h1 className="font-semibold capitalize whitespace-normal text-center text-lg text-[#169c59] mb-5 ">
              {title}
            </h1>
            <button className="" type="button" onClick={closeModal}>
              <MdOutlineClose className="text-[#CCD1D5] text-3xl font-bold" />
            </button>
          </div>

          <div className="table-wrapper max-w-full overflow-x-auto">
            <table className=" border-collapse w-full border border-[#4c555e] overflow-x-scroll">
              <thead>
                <tr>
                  <th className="whitespace-nowrap bg-[#22262a] border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                    Selection
                  </th>
                  <th className="whitespace-nowrap bg-[#22262a] border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                    Odds
                  </th>
                  <th className="whitespace-nowrap bg-[#22262a] border border-gray-600 text-xs font-bold uppercase text-right px-2 py-2 text-white">
                    Stake
                  </th>
                  <th className="whitespace-nowrap bg-[#22262a] border border-gray-600 text-xs font-bold uppercase text-right px-2 py-2 text-white">
                    Profit
                  </th>
                  <th className="whitespace-nowrap bg-[#22262a] border border-gray-600 text-xs font-bold uppercase text-right px-2 py-2 text-white">
                    loss
                  </th>
                  <th className="whitespace-nowrap bg-[#22262a] border border-gray-600 text-xs font-bold uppercase text-right px-2 py-2 text-white">
                    date
                  </th>
                  <th className="whitespace-nowrap bg-[#22262a] border border-gray-600 text-xs font-bold uppercase text-right px-2 py-2 text-white">
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#008efb]">
                  <td className="whitespace-nowrap border border-slate-700  text-xs font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {modal.selection}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 text-xs font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {modal.odds}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 text-xs font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {modal.stake}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 text-xs font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {modal.profit}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 text-xs font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {modal.loss}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 text-xs font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {modal.date}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 text-xs font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {modal.status   }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
