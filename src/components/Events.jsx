import React from "react";

const Events = () => {
  return (
    <div className="xl:flex lg:flex py-[10px] mb-[2px] border-b border-mainbg">
      <div className=" flex items-center flex-1  cursor-pointer select-none">
        <div className="flex flex-col items-center justify-center w-10 h-10 ml-4 ">
          <a href="#" className="rounded-full relative block">
            <img
              alt="profil"
              src="https://sportsexch.com/images/icons/cricket.png"
              className="mx-auto object-contain rounded-full h-8 w-8 bg-skin-imgbg p-1.5"
            />
          </a>
        </div>
        <div className="flex pl-3 justify-between w-full">
          <div>
            <div className="w-32 font-medium  text-skin-primary text-sm">
              Punjab Kings
            </div>
            <div className="w-32 font-medium  text-skin-primary text-sm">
              Rajasthan Royals
            </div>
          </div>
          <div className="text-[12px] font-bold pr-4 text-skin-primary">
            <div>
              <div className="text-skin-secondary">28 May 6:00</div>
              <div className="flex justify-end mt-1 ">
                <div className=" mx-2 ml-4 px-2 w-full h-[14px] text-center rounded-sm text-[10px]  bg-skin-cardsmall text-skin-dark">
                  F4
                </div>
                <div className=" w-full  h-[14px] text-center rounded-sm text-[10px]  bg-skin-cardsmall text-skin-dark">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
