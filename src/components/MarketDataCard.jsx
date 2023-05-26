import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";

const MarketData = ({ element }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const data = [2.18, 2.25, 2.18, 2.25, 2.18, 2.25];

  const place = [
    {
      placeNameTop: "Ireland",
      placeNameBottom: "Ireland",
      time: "Today 19:30",
    },
  ];

  return (
    <div className="livedata flex flex-wrap xl:flex-nowrap items-center  px-3 py-2 gap-3 border border-[#000]">
      <div className="livedata-place sm:w-full  top-name flex justify-between flex-grow leading-5 font-semibold">
        {place.map((element, index) => {
          return (
            <div className="names text-sm text-[#fff]">
              {element.placeNameTop}
              <br />
              {element.placeNameBottom}
            </div>
          );
        })}
        {/* {element.time && element.leagueName && element.leagueName.length > 0 ? ( */}
          <div className="match-time flex items-center gap-3 text-[#fff]">
            <div className="matchIsLive text-xs bg-[#169c59] px-1 rounded-sm">
              Live
            </div>
            <div className="livedata-time text-sm font-medium">
              <div className="time">
              Today 19:30
                <br />
                <div className="league-name flex justify-end gap-2">
                  {element.leagueName.map((data, index) => (
                    <span
                      className="text-[#000] text-xs bg-[#f9fafa]  px-1 rounded-sm"
                      key={index}
                    >
                      {data.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        {/* ) : null} */}
      </div>

      <div className="right-live md:gap-4 w-full">
        <div className="livedata-wrapper w-full sm:flex sm:items-center sm:justify-between flex items-center">
          {element.values.map((value, index) => {
            return (
              <div
                key={index}
                className={`livedata-tab xs:w-1/6 xs:px-2 px-4 py-3 m-1  flex flex-col bg-[#32383e] ${
                  index % 2 === 0 ? "text-[#00b9ff]" : "text-[#ff6da6]"
                } rounded-md text-center flex-grow`}
              >
                {value.top && (
                  <span className="top text-sm font-bold">300</span>
                )}
                {value.bottom && (
                  <span className="bottom text-xs">240</span>
                )}
                {value.center && (
                  <span className="center text-sm font-bold ">
                    2.34
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>

    // <div class="rounded-md shadow-md w-full bg-[#22262a]">
    //   <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} class="flex w-full items-center bg-[#32383e] rounded-t-md justify-between h-[40px] px-4 cursor-pointer ">
    //     <div class="flex items-center ">
    //       <div class="flex items-center text-sm text-[#f9fafa] font-medium ">
    //         Indian Premeier Leauge
    //       </div>
    //     </div>
    //     <div class="flex items-center space-x-8 px-1">
    //       <div class="flex text-sm font-bold text-[#CCC]   ">2

    //         {isDropdownOpen ? <RiArrowUpSLine className='ml-2 text-xl m-auto'/>   : <IoIosArrowDown className='ml-2 text-lg  m-auto' /> }

    //         </div>
    //     </div>
    //   </div>
    //   {isDropdownOpen && (
    //     <>
    //       <div   className="xl:flex lg:flex lg:flex-wrap xl:flex-nowrap  py-[10px] mb-[2px] border-b-2 border-black   ">

    //         <div class=" flex items-center flex-1  cursor-pointer select-none">
    //           <div class="flex flex-col items-center justify-center w-10 h-10 ml-4 ">
    //             <a href="#" class="rounded-full relative block">
    //               <img
    //                 alt="profil"
    //                 src="https://sportsexch.com/images/icons/cricket.png"
    //                 class="mx-auto object-contain rounded-full h-8 w-8 bg-white p-1.5"
    //               />
    //             </a>
    //           </div>
    //           <div class="flex pl-3 justify-between w-full">
    //             <div>
    //               <div class="w-32 font-medium  text-[#cfd4d8] text-sm">Indian Premeier</div>
    //               <div class="w-32 font-medium  text-[#cfd4d8] text-sm">League</div>
    //             </div>
    //             <div class="text-[12px] font-bold pr-4 text-[#cfd4d8]">
    //               <div>
    //                 <div className='text-[#f9fafa]'>28 May 6:00</div>
    //                 <div className='flex justify-end mt-1 '>
    //                   <div className=" mx-2 ml-4 px-2 w-full h-[14px] text-center rounded-sm text-[10px]  bg-[#f9fafa] text-[#32383e]">F4</div>
    //                   <div className=" w-full  h-[14px] text-center rounded-sm text-[10px]  bg-[#f9fafa] text-[#32383e]">B</div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //         </div>

    //         <div className="flex gap-1 w-full rounded-sm pr-4 pl-2">
    //           {data.map((item) =>
    //             <div className={`md:flex-grow xl:grow-0  px-4 py-2  rounded-md  flex justify-center text-md font-bold ${item === 2.25  && 'text-[#EF5480]' } text-[#008EFB] bg-[#32383e] cursor-pointer`}>
    //               <span className='m-auto brightness-125'>{item}</span>
    //             </div>
    //           )}

    //         </div>
    //       </div>

    //     </>
    //   )}
    // </div>
  );
};

export default MarketData;
