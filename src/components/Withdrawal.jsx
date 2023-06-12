import React from "react";
import { RiPencilLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';

export const Withdrawal = () => {
  const AccountDetails = [
    {
      account_number: "1234567890",
      account_name: "John Doe",
      bank_name: "Example Bank",
      ifsc_code: "ABCD1234567",
      account_type: "Savings",
      action: RiPencilLine,
    },
    {
      account_number: "9876543210",
      account_name: "Jane Smith",
      bank_name: "Another Bank",
      ifsc_code: "EFGH9876543",
      account_type: "Checking",
      action: RiPencilLine,
    },
  ];

  const WithdrawalStatus = [
    {
      account_number: "1234567890",
      account_name: "John Doe",
      amount: 1000,
      bank_name: "Example Bank",
      ifsc_code: "ABCD1234567",
      account_type: "Savings",
      date: "2023-04-24 13:12:26",
      status: "Payment Rejected",
    },
  ];

  const { i18n, t } = useTranslation();

  return (
    <>
      <div className="deposit wrapper max-w-full pt-4 bg-[#22262a] rounded">
        <div className="flex justify-between px-6">
          <div className="text-white text-lg font-bold">Bank Accounts {t("BANK_ACCCOUNTS")} </div>
          <div className="">
            <button
              type="button"
              className="bg-[#169c59] rounded px-2.5 font-semibold p-1.5  text-sm text-white hover:bg-[#0d8247] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Add Bank Account {t("ADD_BANK_ACCOUNT")}
            </button>
          </div>
        </div>

        <div className="max-w-full overflow-x-auto mt-3">
          <table className=" border-collapse w-full border border-[#4c555e] overflow-x-scroll">
            <thead>
              <tr>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Account Number {t("ACCOUNT_NUMBER")}
                </th>
                <th className="whitespace-border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Account Name {t("ACCOUNT_NAME")}
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Bank Name {t("BANK_NAME")}
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  IFSC Code {t("IFSC_CODE")}
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Account Type {t("ACCOUNT_TYPE")}
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Action {t("ACTION")}
                </th>
              </tr>
            </thead>
            <tbody>
              {AccountDetails.map((element, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap border border-slate-700 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {element.account_number}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {element.account_name}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {element.bank_name}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {element.ifsc_code}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {element.account_type}
                  </td>
                  <td className="border border-slate-700 bg-[#32383e] text-4xl font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {
                      <element.action className="bg-[#17a2b8] rounded p-1 cursor-pointer text-white" />
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="deposit-wrapper bg-[#22262a] rounded mt-2">
        <div className="text-center text-white font-bold py-3 divide-y">
          Withdrawal Request {t("WITHDRAWAL_REQUEST")}
        </div>

        <div className="px-6">
          <div className="input-wrapper flex mb-6">
            <div className="amount flex flex-col grow mr-3">
              <label
                className="text-xs text-[#f9fafa] font-semibold my-2"
                htmlFor=""
              >
                Amount {t("AMOUNT")}
              </label>
              <input
                className="w-full bg-transparent border border-gray-700 rounded p-2.5 px-3 focus:outline-none"
                placeholder="Amount"
                type="number"
                name=""
                id=""
              />
            </div>
            <div className="bank flex flex-col grow ml-3">
              <label
                className="text-xs text-[#f9fafa] font-semibold my-2"
                htmlFor=""
              >
                Select Bank Account {t("SELECT_BANK_ACCOUNT")}
              </label>
              <select
                className="appearance-none w-full bg-transparent border border-gray-700 rounded p-2.5 px-3  focus:outline-none"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <button
            type="button"
            className="bg-[#169c59] rounded px-2.5 font-semibold p-1.5  text-sm text-white hover:bg-[#0d8247] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Submit Request {t("SUBMIT_REQUEST")}
          </button>
        </div>

        <div className="max-w-full overflow-x-auto status mt-6">
          <table className="border-collapse w-full border border-[#4c555e] overflow-x-scroll">
            <thead>
              <tr>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Account Number {t("ACCOUNT_NUMBER")}
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Account Name {t("ACCOUNT_NAME")}
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Amount {t("AMOUNT")}
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Bank Name {t("BANK_NAME")}
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  IFSC Code {t("IFSC_CODE")}
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Account Type {t("ACCOUNT_TYPE")}
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Date {t("DATE")}
                </th>
                <th className="whitespace-nowrap border border-gray-600 text-xs font-bold uppercase text-left px-2 py-2 text-white">
                  Status {t("STATUS")}
                </th>
              </tr>
            </thead>
            <tbody>
              {WithdrawalStatus.map((element, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap border border-slate-700 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {element.account_number}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {element.account_name}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {element.amount}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {element.bank_name}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {element.ifsc_code}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {element.account_type}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    {element.date}
                  </td>
                  <td className="whitespace-nowrap border border-slate-700 bg-[#32383e] text-sm font-bold uppercase text-left px-2 py-3.5 text-[#f9fafa]">
                    <button
                      type="button"
                      className="bg-[#f12e5e] rounded px-2.5 font-semibold p-1  text-xs text-white  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      {element.status}
                    </button>
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
