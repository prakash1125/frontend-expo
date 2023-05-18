import React from 'react'
import { RightNavbar } from '../components/RightNavbar'
import { InPlay } from "../components/InPlay";


export const InPlayPage = () => {
  return (
    <>
      <div className="w-full   md:p-2 overflow-y-scroll scrollbar-hide h-[91vh]  "><InPlay /></div>
      <div className="px-2 hidden md:block w-1/4" >
        <RightNavbar />
      </div>
    </>
  )
}
