import React from 'react'
import { ProfitLoss } from "../components/ProfitLoss";
import Footer from '../components/Footer';

export const ProfitLossPage = () => {
  return (
    <>
      <div className="w-full md:p-2 overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <ProfitLoss />
        <Footer/>
      </div>
    </>
  )
}
