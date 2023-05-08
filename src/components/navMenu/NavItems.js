import React, { useState } from 'react'
import "./NavItems.scss"
import { sidebarMenu } from "../../utils/constant.js";


const NavItems = ({ element }) => {
    const [toggle, setToggle] = useState(true)
    const [sublist, setSublist] = useState([]);
    const handleClick = () => {
        setToggle((prevState) => !prevState)
        setSublist(element?.subMenu);
    }

    // const sidebarMenuBtn = (e, element) => {
    // }

    return (
        <>
            <li className='menuItem'>
                <button onClick={(e) => handleClick(e, element)} type="button" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                    <element.icon />
                    <span className="flex-1 ml-3 text-left whitespace-nowrap">{element.gameName}</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-example" className={`${toggle ? 'hidden' : "block"} py-2 space-y-2`}>
                    {sublist.map((subMenu, index) => {
                        return (
                            <li key={index}>
                                <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{subMenu}</a>
                            </li>
                        )
                    })}

                </ul>
            </li>
        </>
    )
}

export default NavItems