import React from "react";
import { Deposit } from "../components/Deposit";

export const DepositPage = () => {
  return (
    <>
      <div className="w-full   md:p-2 overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <Deposit />
      </div>
    </>
  );
};
