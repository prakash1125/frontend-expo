import React, { useState } from 'react'
import "./Sidebar.css"
import { sidebarMenu } from "../../utils/constant.js";
import NavItems from '../navMenu/NavItems';
import LiveScore from '../mainBody/liveScore/LiveScore';

const Sidebar = () => {

    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle((prevState) => !prevState)
    }
    return (
        <>
            <button onClick={handleClick} type="button" className="sm:hidden inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <aside className={`sticky top-0 left-0 z-40 h-screen flex transition-transform ${toggle ? "hidden" : "block"} md:block sm:translate-x-0 `}>

                <div className="h-full w-80 px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {
                            sidebarMenu.map((element) => {
                                return (
                                    <NavItems key={element.gameName} toggle={toggle} element={element} />
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="p-4 w-full">
                    <div className="p-0 gap-4 flex dark:border-gray-700">

                        <main className="main main-body -ml-48 flex flex-grow flex-col p-0 transition-all duration-150 ease-in md:ml-0">
                            <div className="h-screen justify-center bg-gray-50 shadow-md">
                                <LiveScore />
                            </div>
                        </main>
                        <main className="main w-80 -ml-48 w-64 flex flex-grow flex-col p-0 transition-all duration-150 ease-in md:ml-0">
                            <div className="h-screen justify-center bg-gray-50 shadow-md">
                                <LiveScore />
                            </div>
                        </main>

                    </div>
                </div>
            </aside>

        </>
    )
}

export default Sidebar