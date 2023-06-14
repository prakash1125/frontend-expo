import React from 'react'
import { RightNavbar } from '../components/RightNavbar'
import { InPlay } from "../components/InPlay";


export const InPlayPage = () => {
  return (
    <>
      <div className="w-full p-2 overflow-y-scroll scrollbar-hide h-[91vh]  "><InPlay /></div>
      <div className=" hidden lg:flex lg:flex-col ">
        <RightNavbar />
      </div>
    </>
  )
}
