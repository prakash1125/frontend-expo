import React from "react";
import { IndianCasino } from "../components/IndianCasino";
import Footer from "../components/Footer";

export const IndianCasinoPage = () => {
  return (
    <>
      <div className="w-full p-2 overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <IndianCasino />
        <Footer />
      </div>
    </>
  );
};
