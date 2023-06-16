import React from 'react'
import { RightNavbar } from '../components/RightNavbar'
import { InPlay } from "../components/InPlay";
import Footer from '../components/Footer';


export const InPlayPage = () => {
  return (
    <>
      <div className="w-full p-2 overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <InPlay />
        <Footer />
      </div>
      <div className=" hidden lg:flex lg:flex-col lg:basis-2/6 ">
        <RightNavbar />
      </div>
    </>
  )
}
