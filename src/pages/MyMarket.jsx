import React from 'react'
import { MyMarket } from '../components/MyMarket'
import Footer from '../components/Footer'

export const MyMarketPage = () => {
  return (
    <>
      <div className="w-full   md:p-2 overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <MyMarket />
        <Footer />
      </div>
    </>
  )
}
