import React from 'react'
import { MyMarket } from '../components/MyMarket'

export const MyMarketPage = () => {
  return (
    <>
      <div className="w-full   md:p-2 overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <MyMarket />
      </div>
    </>
  )
}
