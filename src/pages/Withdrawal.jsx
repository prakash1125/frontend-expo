import React from 'react'
import { Withdrawal } from '../components/Withdrawal'
import Footer from '../components/Footer'

export const WithdrawalPage = () => {
  return (
    <>
      <div className="w-full   md:p-2 overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <Withdrawal />
        <Footer />
      </div>
    </>
  )
}
