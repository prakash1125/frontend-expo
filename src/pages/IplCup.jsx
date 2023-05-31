import React from 'react'
import { IplCup } from '../components/IplCup'
import { RightNavbar } from '../components/RightNavbar'

export const IplCupPage = () => {
  return (
    <>
      <div className="w-full overflow-y-scroll scrollbar-hide h-[91vh]  "><IplCup /></div>
      <div className="px-2 hidden md:block w-1/4" >
        <RightNavbar />
      </div>
    </>
  )
}
