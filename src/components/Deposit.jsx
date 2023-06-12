import React from "react";
import { useTranslation } from 'react-i18next';

const { i18n, t } = useTranslation();


export const Deposit = () => {
  return (
    <div className="deposit wrapper px-6 pb-9 bg-[#22262a] rounded">
      <div className="text-center text-white font-bold py-3 divide-y">
        Deposit {t("DEPOSIT")}
      </div>
      <div className="flex items-center gap-2">
        <div className="scan-barcode w-64">
          <button className="bg-[#fff] rounded  group">
            <img
              className="w-full"
              src="https://sportsexch.com/images/bg/upi.png"
              alt="scan barcode"
            />
            <p className="text-xs text-left mt-6 mb-4 ml-2 font-bold text-[#333333] group-hover:underline">
              UPI{t("UPI")} <br /> <span className="">SCAN BARCODE {t("SCAN_BARCODE")}</span>
            </p>
          </button>
        </div>
        <div className="get-id w-64">
          <button className="bg-[#fff] rounded p-0.5 group">
            <img
              className="w-full"
              src="https://sportsexch.com/images/bg/whatsapp.png"
              alt="get id"
            />
          </button>
        </div>
      </div>
      <input
        type="number"
        className="w-full bg-transparent focus:bg-[white] border border-gray-700 rounded p-2 px-3 my-6 focus:ring-1 focus:ring-sky-500 focus:outline-none"
        placeholder="amount"
        name=""
        id=""
      />
      <button
        type="button"
        className="bg-[#169c59] rounded px-2.5 font-semibold p-1.5  text-md text-white hover:bg-[#0d8247] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        Deposit Via Upi {t("DEPOSIT_VIA_UPI")}
      </button>
    </div>
  );
};
