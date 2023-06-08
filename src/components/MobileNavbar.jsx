import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { GiCardAceClubs } from 'react-icons/gi'
import { BsFillDice5Fill } from 'react-icons/bs'
import { MdOutlineScoreboard, MdAccessTimeFilled } from 'react-icons/md'

export const MobileNavbar = () => {
    const Menus = [
        // {name:'Settings',link:'#',icon:HiOutlineCog,dis:"translate-x-64"},
        { name: 'Home', link: '/', icon: AiFillHome, dis: "translate-x-82" },
        { name: 'Sports', link: '/all-sports', icon: MdOutlineScoreboard, dis: "translate-x-32" },
        { name: 'In-play', link: '/in-play', icon: MdAccessTimeFilled, dis: "translate-x-0" },
        { name: 'Indian Casino', link: '/indian-casino', icon: GiCardAceClubs, dis: "translate-x-48" },
        { name: 'Live Casino', link: '/live-casino', icon: BsFillDice5Fill, dis: "translate-x-16" },
        // {name:'Slots',link:'/slots',icon:BsFillDice5Fill,dis:"translate-x-16"},
    ]

    const [active, setActive] = useState()

    return (
        <div className='bg-skin-navtop max-h-[3.5rem] px-2 pb-5 fixed inset-x-0 bottom-0 rounded-t-md '>
            {/* text-skin-white  */}
            <ul className='flex relative justify-between'>
                {/* <span className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-white h-16 w-16  -top-5 rounded-full`}></span> */}

                {Menus.map((menu, i) => (
                    <li key={i} className="w-full">
                        <Link to={menu?.link} className={`flex flex-col  pt-2 pb-2 text-skin-navtext `} onClick={() => setActive(i)}>
                            <span className={`flex justify-center text-xl pl-2 cursor-pointer ${i === active && " text-green-600"}`}>{React.createElement(menu?.icon, { size: "25" })}</span>
                            {/* {menu.name} */}
                            <span className={`flex justify-center text-xs text-skin-navtext  font-semibold ${i === active && " text-green-600"}`}>{menu.name}</span>
                            {/* <span className={`text-xs text-skin-white  ${active === i ? "translate-y-4 duration-700 opacity-100 text-skin-white " : "opacity-0 translate-y-10 hidden text-skin-white "}` }>{menu.name}</span> */}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}
