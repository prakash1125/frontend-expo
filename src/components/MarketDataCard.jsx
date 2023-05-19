import React from 'react'
import { useState } from 'react';

const MarketData = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  return (
    
         <div class="rounded-md shadow-md w-full bg-[#22262a]">
          <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} class="flex w-full items-center bg-[#32383e] rounded-t-md justify-between p-3">
            <div class="flex items-center space-x-3">
              <div class="flex items-center text-sm text-[#f9fafa] font-bold ">
                Indian Premeier Leauge
              </div>
            </div>
            <div class="flex items-center space-x-8 px-6">
              <div class="text-sm font-bold text-[#f9fafa]">2 </div>
            </div>
          </div>
        {isDropdownOpen && (
          <div className="xl:flex lg:flex py-3 ">
          <div class="p-1 flex items-center flex-1  cursor-pointer select-none">
            <div class="flex flex-col items-center justify-center w-10 h-10 mr-4 ml-1  ">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/cricket.png"
                  class="mx-auto object-contain rounded-full h-8 w-8 bg-white p-2"
                />
              </a>
            </div>
            <div class="flex justify-between w-full">
              <div class="w-32 font-medium text-[#cfd4d8] text-sm">Indian Premeier Leauge</div>
              <div class="text-xs font-bold text-[#cfd4d8]">
                <p>28 May 6:00</p>
                <p className="w-[50%] rounded-sm p-0.5 m-0.5 ml-0 bg-white text-black">F-4 B</p>
              </div>
            </div>

          </div>

          <div className="flex p-1 gap-1 rounded-xl">
            <div
              className={
                "w-full rounded-md  p-2 px-4 text-md font-bold  text-[#008EFB] bg-[#32383e] cursor-pointer"
              }
            >
              3.35
            </div>
            <div
              className={
                "w-full rounded-md p-2 px-4 text-md font-bold  text-[#EF5480] bg-[#32383e] cursor-pointer"
              }
            >
              3.35
            </div>
            <div
              className={
                "w-full rounded-md p-2 px-4 text-md font-bold  text-[#008EFB] bg-[#32383e] cursor-pointer"
              }
            >
              3.35
            </div>
            <div
              className={
                "w-full rounded-md p-2 px-4 text-md font-bold  text-[#EF5480] bg-[#32383e] cursor-pointer"
              }
            >
              3.35
            </div>
            <div
              className={
                "w-full rounded-md p-2 px-4 text-md font-bold  text-[#008EFB] bg-[#32383e] cursor-pointer"
              }
            >
              3.35
            </div>
            <div
              className={
                "w-full rounded-md p-2 px-4 text-md font-bold  text-[#EF5480] bg-[#32383e] cursor-pointer"
              }
            >
              3.35
            </div>

          </div>
        </div>
            
            
          
        )}
          
        </div>
 
  )
}

export default MarketData




