import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { socket } from "../context/SocketContext";

const MarketData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("realtimeData", (datas) => {
      console.log("sssssssssssssssssss");
      console.log(datas);
      console.log("ssssssssssssssssss");
      setData((prevState) => {
        // Find the index of the object with the matching code
        const existingIndex = prevState.findIndex(
          (obj) => obj.index === datas.index
        );

        if (existingIndex !== -1) {
          // Code already exists, update the corresponding data value
          const updatedState = [...prevState];
          updatedState[existingIndex].data = datas.data;

          return updatedState;
        } else {
          // Code doesn't exist, add a new object to the state array
          const newDataObj = { index: datas.index, data: datas.data };
          return [...prevState, newDataObj];
        }
      });
    });

    return () => {
      socket.off("connect");
      socket.off("message");
    };
  }, [data]);

  console.log("lllllllllllllllllll");
  console.log(data);
  console.log("lllllllllllllllllllll");

  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  // const data = [2.18, 2.25, 2.18, 2.25, 2.18, 2.25];

  return (
    <div class="rounded-md  w-full bg-skin-nav drop-shadow-md">
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        class="flex w-full items-center bg-skin-cardhead rounded-t-md justify-between h-[40px] px-4 cursor-pointer "
      >
        <div class="flex items-center ">
          <div class="flex items-center text-sm text-skin-secondary  font-medium ">
            Indian Premeier Leauge
          </div>
        </div>
        <div class="flex items-center space-x-8 px-1">
          <div class="flex text-sm font-bold text-skin-primary   ">
            2
            {isDropdownOpen ? (
              <RiArrowUpSLine className="ml-2 text-xl m-auto" />
            ) : (
              <IoIosArrowDown className="ml-2 text-lg  m-auto" />
            )}
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <>
          <Link to="/cricket-league">
            <div className="xl:flex lg:flex py-[10px] mb-[2px] border-b-2 border-mainbg    ">
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
                    <div class="w-32 font-medium  text-skin-primary  text-sm">
                      Indian Premeier
                    </div>
                    <div class="w-32 font-medium  text-skin-primary  text-sm">
                      League
                    </div>
                  </div>
                  <div class="text-[12px] font-bold pr-4 text-skin-primary ">
                    <div>
                      <div className="text-skin-secondary ">28 May 6:00</div>
                      <div className="flex justify-end mt-1 ">
                        <div className=" mx-2 ml-4 px-2 w-full h-[14px] text-center rounded-sm text-[10px]  bg-skin-cardsmall text-skin-dark ">
                          F4
                        </div>
                        <div className=" w-full  h-[14px] text-center rounded-sm text-[10px]  bg-skin-cardsmall text-skin-dark ">
                          B
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 drop-shadow-sm rounded-sm pr-4 pl-2">
                {data.slice(0, 1)?.map((val) => (
                  <>
                    {val?.data?.map((item, i) => (
                      <div
                        className={`w-[50px] h-9 rounded-md  flex justify-center text-md font-bold ${
                          i % 2 === 1 && "text-skin-pink"
                        } text-skin-blue  bg-skin-marketcard   cursor-pointer`}
                      >
                        <span className="m-auto brightness-125">
                          {item?.code}
                        </span>
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </div>
            <div className="xl:flex lg:flex py-[10px] mb-[2px] border-b-2 border-mainbg  ">
              <div class=" flex items-center flex-1  cursor-pointer select-none">
                <div class="flex flex-col items-center justify-center w-10 h-10 ml-4 ">
                  <a href="#j" class="rounded-full relative block">
                    <img
                      alt="profil"
                      src="https://sportsexch.com/images/icons/cricket.png"
                      class="mx-auto object-contain rounded-full h-8 w-8 bg-skin-imgbg  p-1.5"
                    />
                  </a>
                </div>
                <div class="flex pl-3 justify-between w-full">
                  <div>
                    <div class="w-32 font-medium  text-skin-primary  text-sm">
                      Indian Premeier
                    </div>
                    <div class="w-32 font-medium  text-skin-primary  text-sm">
                      League
                    </div>
                  </div>
                  <div class="text-[12px] font-bold pr-4 text-skin-primary ">
                    <div>
                      <div className="text-skin-secondary ">28 May 6:00</div>
                      <div className="flex justify-end mt-1 ">
                        <div className=" mx-2 ml-4 px-2 w-full h-[14px] text-center rounded-sm text-[10px]  bg-skin-cardsmall text-skin-dark ">
                          F4
                        </div>
                        <div className=" w-full  h-[14px] text-center rounded-sm text-[10px]  bg-skin-cardsmall text-skin-dark ">
                          B
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 rounded-sm pr-4 pl-2 ">
                {data.slice(1, 2)?.map((val) => (
                  <>
                    {val?.data?.map((item, i) => (
                      <div
                        className={`w-[50px] h-9 rounded-md  flex justify-center text-md font-bold  ${
                          i % 2 === 1 && "text-skin-pink"
                        } text-skin-blue  bg-skin-marketcard  cursor-pointer`}
                      >
                        <span className="m-auto brightness-125">
                          {item?.code}
                        </span>
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default MarketData;
