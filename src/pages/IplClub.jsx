import React from 'react'
import { IplClub } from '../components/IplClub'
import { RightNavbar } from '../components/RightNavbar'
import Footer from '../components/Footer'

export const IplClubPage = () => {
  return (
    <>
      <div className="w-full overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <IplClub />
        <Footer />
      </div>
      <div className=" hidden lg:flex lg:flex-col lg:basis-2/6 ">
        <RightNavbar />
      </div>
    </>
  )
}
