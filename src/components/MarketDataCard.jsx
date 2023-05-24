import React from 'react'
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { RiArrowUpSLine } from 'react-icons/ri';

const MarketData = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const data = [2.18, 2.25, 2.18, 2.25, 2.18, 2.25,]

  return (

    <div class="rounded-md shadow-md w-full bg-[#22262a]">
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} class="flex w-full items-center bg-[#32383e] rounded-t-md justify-between h-[40px] px-4 cursor-pointer ">
        <div class="flex items-center ">
          <div class="flex items-center text-sm text-[#f9fafa] font-medium ">
            Indian Premeier Leauge
          </div>
        </div>
        <div class="flex items-center space-x-8 px-1">
          <div class="flex text-sm font-bold text-[#CCC]   ">2 

            {isDropdownOpen ? <RiArrowUpSLine className='ml-2 text-xl m-auto'/>   : <IoIosArrowDown className='ml-2 text-lg  m-auto' /> }
          
            </div>
        </div>
      </div>
      {isDropdownOpen && (
        <>
          <div   className="xl:flex lg:flex lg:flex-wrap  py-[10px] mb-[2px] border-b-2 border-black   ">

            <div class=" flex items-center flex-1  cursor-pointer select-none">
              <div class="flex flex-col items-center justify-center w-10 h-10 ml-4 ">
                <a href="#" class="rounded-full relative block">
                  <img
                    alt="profil"
                    src="https://sportsexch.com/images/icons/cricket.png"
                    class="mx-auto object-contain rounded-full h-8 w-8 bg-white p-1.5"
                  />
                </a>
              </div>
              <div class="flex pl-3 justify-between w-full">
                <div>
                  <div class="w-32 font-medium  text-[#cfd4d8] text-sm">Indian Premeier</div>
                  <div class="w-32 font-medium  text-[#cfd4d8] text-sm">League</div>
                </div>
                <div class="text-[12px] font-bold pr-4 text-[#cfd4d8]">
                  <div>
                    <div className='text-[#f9fafa]'>28 May 6:00</div>
                    <div className='flex justify-end mt-1 '>
                      <div className=" mx-2 ml-4 px-2 w-full h-[14px] text-center rounded-sm text-[10px]  bg-[#f9fafa] text-[#32383e]">F4</div>
                      <div className=" w-full  h-[14px] text-center rounded-sm text-[10px]  bg-[#f9fafa] text-[#32383e]">B</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex gap-1 w-full rounded-sm pr-4 pl-2">
              {data.map((item) =>
                <div className={`flex-grow px-4 py-2  rounded-md  flex justify-center text-md font-bold ${item === 2.25  && 'text-[#EF5480]' } text-[#008EFB] bg-[#32383e] cursor-pointer`}>
                  <span className='m-auto brightness-125'>{item}</span>
                </div>
              )}

            </div>
          </div>
          <div className="xl:flex lg:flex lg:flex-wrap py-[10px] mb-[2px] border-b-2 border-black   ">

            <div class=" flex items-center flex-1  cursor-pointer select-none">
              <div class="flex flex-col items-center justify-center w-10 h-10 ml-4 ">
                <a href="#" class="rounded-full relative block">
                  <img
                    alt="profil"
                    src="https://sportsexch.com/images/icons/cricket.png"
                    class="mx-auto object-contain rounded-full h-8 w-8 bg-white p-1.5"
                  />
                </a>
              </div>
              <div class="flex pl-3 justify-between w-full">
                <div>
                  <div class="w-32 font-medium  text-[#cfd4d8] text-sm">Indian Premeier</div>
                  <div class="w-32 font-medium  text-[#cfd4d8] text-sm">League</div>
                </div>
                <div class="text-[12px] font-bold pr-4 text-[#cfd4d8]">
                  <div>
                    <div className='text-[#f9fafa]'>28 May 6:00</div>
                    <div className='flex justify-end mt-1 '>
                      <div className=" mx-2 ml-4 px-2 w-full h-[14px] text-center rounded-sm text-[10px]  bg-[#f9fafa] text-[#32383e]">F4</div>
                      <div className=" w-full  h-[14px] text-center rounded-sm text-[10px]  bg-[#f9fafa] text-[#32383e]">B</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex gap-1 w-full rounded-sm pr-4 pl-2 ">
              {data.map((item) =>
                <div className={`flex-grow px-4 py-2 rounded-md  flex justify-center text-md font-bold  ${item === 2.25  && 'text-[#EF5480]' } text-[#008EFB] bg-[#32383e] cursor-pointer`}>
                  <span className='m-auto brightness-125'>{item}</span>
                </div>
              )}

            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default MarketData



