import React from 'react'

const Events = () => {
  return (
    <div className="xl:flex lg:flex py-[10px] mb-[2px] border-b border-black  ">

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
          <div class="w-32 font-medium  text-[#cfd4d8] text-sm">Punjab Kings</div>
          <div class="w-32 font-medium  text-[#cfd4d8] text-sm">Rajasthan Royals</div>
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

   
  </div>
  )
}

export default Events