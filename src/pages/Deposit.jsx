import React from "react";
import { Deposit } from "../components/Deposit";
import Footer from "../components/Footer";

export const DepositPage = () => {
  return (
    <>
      <div className="w-full   md:p-2 overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <Deposit />
        <Footer />
      </div>
    </>
  );
};
