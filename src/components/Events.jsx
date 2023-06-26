import React from "react";
import { formatDate } from "../utils/helper";
import { Link } from "react-router-dom";

const Events = ({ league, sport }) => {
  return (
    <>
      {league?.events?.map((event, index) => {
        if (index === 0) {
          const date = formatDate(event?.eventDate);
          return (
            <Link
            key={index}
            to="/cricket-league"
            state={{
              leagueName: league?.leagueName,
              eventName: event?.name,
              eventId: event?._id,
              eventDate: event?.eventDate,
              marketArray: event?.markets
            }}
          >
            <div className=" py-[10px] mb-[2px] border-b border-mainbg" key={index}>
              <div className=" flex items-center   cursor-pointer select-none">
                <div className="flex flex-col items-center justify-center w-10 h-10 ml-2 ">
                  <a href="#js" className="rounded-full relative block">
                    <img
                      alt="profil"
                      src={require(`../assets/images/sidemenu/${sport}.png`)}
                      className="mx-auto object-contain rounded-full h-8 w-8 bg-skin-imgbg p-1.5"
                    />
                  </a>
                </div>

                <div
                  className="flex pl-3 justify-between w-full"
                  state={{
                    leagueName: league?.leagueName,
                    eventName: event?.name,
                    eventDate: event?.eventDate,
                  }}
                >
                  <div>
                    <div className=" font-medium whitespace-nowrap overflow-hidden  text-skin-primary text-sm">
                      {event?.name?.includes("@")
                        ? event?.name?.split(" @ ")[0]?.trim()
                        : event?.name?.split(" v ")[0]?.trim()}
                    </div>
                    <div className=" font-medium whitespace-nowrap overflow-hidden   text-skin-primary text-sm">
                      {event?.name?.includes("@")
                        ? event?.name?.split(" @ ")[1]?.trim()
                        : event?.name?.split(" v ")[1]?.trim()}
                    </div>
                  </div>
                  <div className="text-[12px] font-bold pr-2  text-skin-primary">
                    <div>
                      <div className="text-skin-secondary text-right">{date}</div>
                      <div className="flex justify-end mt-1 ">
                        <div className="  mx-2 ml-4 px-2  h-[14px] text-center rounded-sm text-[10px]  bg-skin-cardsmall text-skin-dark ">
                          F4
                        </div>
                        <div className="   px-1 h-[14px] text-center rounded-sm text-[10px]  bg-skin-cardsmall text-skin-dark ">
                          B
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          );
        }
      })}
    </>
  );
};

export default Events;
