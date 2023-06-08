import { Tab } from '@headlessui/react'
import React, { useState } from 'react'
import { GoInfo } from 'react-icons/go'
import { IoIosArrowDown } from 'react-icons/io'
import { RiArrowUpSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const RunnersCard = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(true);

    return (
        <>
        <div class="rounded-md mt-2 w-full bg-skin-nav drop-shadow-md">
            <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                class="flex w-full items-center bg-skin-cardhead rounded-t-md justify-between h-[40px] px-4 cursor-pointer "
            >
                <div class="flex items-center ">
                    <div class="flex items-center text-sm text-skin-secondary  font-medium ">
                        TITLE
                    </div>
                </div>
                <div class="flex items-center space-x-8 px-1">
                    <div class="flex text-sm font-bold text-skin-primary">

                        {isDropdownOpen ? (
                            <RiArrowUpSLine className="ml-2 text-xl m-auto" />
                        ) : (
                            <IoIosArrowDown className="ml-2 text-lg  m-auto" />
                        )}
                    </div>
                </div>
            </div>
            {isDropdownOpen && (



                <div className="flex flex-col items-start gap-1    ">



                    <hr className="border-t border-gray-200/10  w-full pt-1  " />
                    <div className="flex w-full justify-between gap-3 pl-4 pr-1">
                        <div className="flex flex-col text-skin-white text-sm font-semibold justify-start items-start">
                            <p>Runner</p>
                            <span className="flex  ">stake amount</span>
                        </div>
                        <div className="flex items-center gap-1 rounded-md mb-2 scroll-x">

                            <Link
                                className="flex flex-col justify-center w-full rounded-md py-1 px-7 scroll-x  font-medium  bg-skin-cardhead text-skin-white hover:bg-skin-cardhead hover:text-skin-white rounded-b-md" >
                                <p className={`text-center text-[14.5px] `} >
                                    4000
                                </p>
                                <p className="text-center text-skin-primary text-[11px]">
                                    20
                                </p>
                            </Link>
                            <Link
                                className="flex flex-col justify-center w-full rounded-md py-1 px-7 scroll-x  font-medium  bg-skin-cardhead text-skin-white hover:bg-skin-cardhead hover:text-skin-white rounded-b-md" >
                                <p className={`text-center text-[14.5px] `} >
                                    4000
                                </p>
                                <p className="text-center text-skin-primary text-[11px]">
                                    20
                                </p>
                            </Link>
                            <Link
                                className="flex flex-col justify-center w-full rounded-md py-1 px-7 scroll-x  font-medium  bg-skin-cardhead text-skin-white hover:bg-skin-cardhead hover:text-skin-white rounded-b-md" >
                                <p className={`text-center text-[14.5px] `} >
                                    4000
                                </p>
                                <p className="text-center text-skin-primary text-[11px]">
                                    20
                                </p>
                            </Link>

                        </div>
                    </div>


                </div>




            )}
        </div>
        </>

    )
}

export default RunnersCard