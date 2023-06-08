import React from 'react'
import { DateTime } from "luxon";


const Events = ({ league }) => {
    


    return (
        <div className="xl:flex lg:flex py-[10px] mb-[2px] border-b border-mainbg">

            <div class=" flex items-center flex-1  cursor-pointer select-none">
                <div class="flex flex-col items-center justify-center w-10 h-10 ml-4 ">
                    <a href="#" class="rounded-full relative block">
                        <img
                            alt="profil"
                            src="https://sportsexch.com/images/icons/cricket.png"
                            class="mx-auto object-contain rounded-full h-8 w-8 bg-skin-imgbg p-1.5"
                        />
                    </a>
                </div>

                {
                    league?.events?.map((event) => {
                        return (
                            <div class="flex pl-2 justify-between w-full"
                                state={{
                                    leagueName: league?.leagueName,
                                    eventName: event?.name,
                                    eventDate: event?.eventDate,
                                }}>
                                <div>
                                    <div class=" font-medium  text-skin-primary  text-sm">
                                        {event?.name?.includes("@")
                                            ? event?.name?.split(" @ ")[0]?.trim()
                                            : event?.name?.split(" v ")[0]?.trim()}
                                    </div>
                                    <div class=" font-medium  text-skin-primary  text-sm">
                                        {event?.name?.includes("@")
                                            ? event?.name?.split(" @ ")[1]?.trim()
                                            : event?.name?.split(" v ")[1]?.trim()}
                                    </div>
                                </div>
                                <div class="text-[12px] font-bold pr-4 text-skin-primary">
                                    <div>
                                        <div className="text-skin-secondary ">
                                            {DateTime.fromISO(event?.eventDate).toFormat(
                                                "dd MMM HH:mm"
                                            )}
                                        </div>
                                        <div className='flex justify-end mt-1 '>
                                            <div className=" mx-2 ml-4 px-2 w-full h-[14px] text-center rounded-sm text-[10px]  bg-skin-cardsmall text-skin-dark">F4</div>
                                            <div className=" w-full  h-[14px] text-center rounded-sm text-[10px]  bg-skin-cardsmall text-skin-dark">B</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>


        </div>
    )
}

export default Events