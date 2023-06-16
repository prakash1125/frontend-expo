import React from "react";
import { Slots } from "../components/Slots";
import Footer from "../components/Footer";

export const SlotsPage = () => {
  return (
    <>
      <div className="w-full   md:p-1 overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <Slots />
        <Footer />
      </div>
    </>
  );
};
