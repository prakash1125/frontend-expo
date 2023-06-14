import React from 'react'
import { IplClub } from '../components/IplClub'
import { RightNavbar } from '../components/RightNavbar'

export const IplClubPage = () => {
  return (
    <>
      <div className="w-full overflow-y-scroll scrollbar-hide h-[91vh]  "><IplClub /></div>
      <div className=" hidden lg:flex lg:flex-col ">
        <RightNavbar />
      </div>
    </>
  )
}
