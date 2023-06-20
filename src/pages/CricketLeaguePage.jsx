import React from "react";
import { CricketLeague } from "../components/CricketLeague ";
import { RightNavbar } from "../components/RightNavbar";
import Footer from "../components/Footer";

const CricketLeaguePage = () => {
  return (
    <>
      <div className="w-full overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <CricketLeague />
        <Footer />
      </div>
      <div className=" hidden lg:flex lg:flex-col lg:basis-2/6 ">
        <RightNavbar />
      </div>
    </>
  );
};

export default CricketLeaguePage;
