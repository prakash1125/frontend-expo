import React from 'react'
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { RiArrowUpSLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {DateTime } from 'luxon'

const MarketData = ({ league }) => {


  // ==================================CALLING THE API DATA======================================

  let globalStateData = useSelector((state) => state);


  // ===============================================================================================

  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const data = [2.18, 2.25, 2.18, 2.25, 2.18, 2.25,]
  const word = " v " || " @ ";
  return (

    <div class="rounded-md  w-full bg-skin-nav drop-shadow-md">
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}  class="flex w-full items-center bg-skin-cardhead rounded-t-md justify-between h-[40px] px-4 cursor-pointer ">
        <div class="flex items-center ">
          <div class="flex items-center text-sm text-skin-secondary  font-medium ">
            {league?.leagueName}
          </div>
        </div>
        <div class="flex items-center space-x-8 px-1">
          <div class="flex text-sm font-bold text-skin-primary   ">2

            {isDropdownOpen ? <RiArrowUpSLine className='ml-2 text-xl m-auto' /> : <IoIosArrowDown className='ml-2 text-lg  m-auto' />}

          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <>
          {league?.events?.map((event, index) => (
            <Link to="/cricket-league" >
              <div className="xl:flex lg:flex py-[10px] mb-[2px] border-b-2 border-mainbg">

                <div class=" flex items-center flex-1  cursor-pointer select-none">
                  <div class="flex flex-col items-center justify-center w-10 h-10 ml-4 ">
                    <a href="#" class="rounded-full relative block">
                      <img
                        alt="profil"
                        src="https://sportsexch.com/images/icons/cricket.png"
                        class="mx-auto object-contain rounded-full h-8 w-8 bg-skin-imgbg  p-1.5"
                      />
                    </a>
                  </div>
                  <div class="flex pl-3 justify-between w-full">
                    <div>
                      <div class=" font-medium  text-skin-primary  text-sm">{event?.name?.includes("@") ? event?.name?.split(" @ ")[0]?.trim() : event?.name?.split(" v ")[0]?.trim()}</div>
                      <div class=" font-medium  text-skin-primary  text-sm">{event?.name?.includes("@") ? event?.name?.split(" @ ")[1]?.trim() : event?.name?.split(" v ")[1]?.trim()}</div>
                    </div>
                    <div class="text-[12px] font-bold pr-4 text-skin-primary ">
                      <div>
                        <div className='text-skin-secondary '>{DateTime.fromISO(event?.eventDate).toFormat("dd MMM HH:mm")}</div>
                        <div className='flex justify-end mt-1 '>
                          <div className=" mx-2 ml-4 px-2  h-[14px] text-center rounded-sm text-[10px]  bg-skin-cardsmall text-skin-dark ">F 4</div>
                          <div className="  px-1 h-[14px] text-center rounded-sm text-[10px]  bg-skin-cardsmall text-skin-dark ">B</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 drop-shadow-sm rounded-sm pr-4 pl-2">
                  {data.map((item) =>
                    <div className={`w-[50px] h-9 rounded-md  flex justify-center text-md font-bold ${item === 2.25 && 'text-skin-pink'} text-skin-blue  bg-skin-marketcard   cursor-pointer`}>
                      <span className='m-auto brightness-125'>{item}</span>
                    </div>
                  )}

                </div>
              </div>

            </Link>
          ))}
        </>
      )}
    </div>
  )
}

export default MarketData



