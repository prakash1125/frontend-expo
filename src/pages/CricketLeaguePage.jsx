import React from "react";
import { CricketLeague } from "../components/CricketLeague ";
import { RightNavbar } from "../components/RightNavbar";

const CricketLeaguePage = () => {
  return (
    <>
      <div className="w-full overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <CricketLeague />
      </div>
      <div className=" hidden lg:flex lg:flex-col ">
        <RightNavbar />
      </div>
    </>
  );
};

export default CricketLeaguePage;
