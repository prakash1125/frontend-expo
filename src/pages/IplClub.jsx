import React from 'react'
import { IplClub } from '../components/IplClub'
import { RightNavbar } from '../components/RightNavbar'

export const IplClubPage = () => {
  return (
    <>
      <div className="w-full overflow-y-scroll scrollbar-hide h-[91vh]  "><IplClub /></div>
      <div className="px-2 hidden lg:block w-80" >
        <RightNavbar />
      </div>
    </>
  )
}
