import React from "react";
import { AccountStatement } from "../components/AccountStatement";

export const AccountStatementPage = () => {
  return (
      <>
        <div className="w-full   md:p-2 overflow-y-scroll scrollbar-hide h-[91vh]  ">
          <AccountStatement />
        </div>
      </>
  );
};
