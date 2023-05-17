import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import NavLogo from "../../../assets/images/logo.png";
import "../../../assets/scss/layout/NavBar.scss"
import { navMenu } from "../../../utils/constant.js"
import { Link } from "react-router-dom";
import Button from '../../../commonComponents/button/Button';
import Sidebar from '../../sidebar/Sidebar';

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export const NavBar = () => {
    const [Toggle, setshowMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowMenu(window.innerWidth <= 768);
        };

        // Add event listener to window resize
        window.addEventListener('resize', handleResize);

        // Initial check for screen width
        handleResize();

        // Clean up the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <header className="header">

            <nav className="nav container">
                <div className='left'>
                    <Link to="/" className="-m-1.5 p-1.5 flex items-center">
                        <img className="h-10 logo-img" src={NavLogo} alt="" />
                    </Link>

                    {showMenu && showMenu ? (
                        <div className="nav-menu">
                            <ul className="nav-list">
                                {navMenu.map((element, index) => (
                                    <div className='mobileView'>
                                        <element.icon />
                                        <Link key={index} to={`/${element.tabName}`} className="text-sm nav-link font-semibold leading-6 text-gray-900">
                                            {element.tabName}
                                        </Link>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className="nav-menu">
                            <ul className="nav-list">
                                {navMenu.map((element, index) => (
                                    <Link key={index} to={`/${element.tabName}`} className="text-sm nav-link font-semibold leading-6 text-gray-900">
                                        {element.tabName}
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className='right'>
                    <Button className="login-btn" name="LOGIN"/>
                    <Button className="signup-btn" name="SIGNUP"/>
                </div>
            </nav>

        </header>
    )
}
