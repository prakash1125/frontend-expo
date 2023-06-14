import React from "react";
import { IndianCasino } from "../components/IndianCasino";
import { Footer } from "flowbite-react";

export const IndianCasinoPage = () => {
  return (
    <>
      <div className="w-full p-2 overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <IndianCasino />
        
      </div>
    </>
  );
};
