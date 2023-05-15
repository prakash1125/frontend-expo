import React from 'react'
import { LiveCasino } from '../components/LiveCasino'

export const LiveCasinoPage = () => {
  return (
    <>
      <div className="w-full   md:p-2 overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <LiveCasino />
      </div>
    </>
  )
}
