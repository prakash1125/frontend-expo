import React, { useEffect } from 'react'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { VscTriangleDown } from 'react-icons/vsc'
import { BsGlobe } from "react-icons/bs";
import { languages } from "../utils/constants"
import "flag-icon-css/css/flag-icons.min.css";
import i18next from 'i18next'
import cookies from 'js-cookie'

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export const LanguageBtn = () => {
    const currentLangCode = cookies.get('i18next') || 'en';
    const currentLang = languages.find((l) => l.code == currentLangCode)

    useEffect(() => {
        document.body.dir = currentLang.dir || "ltr"
    }, [currentLang])

    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-transparent  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 md:rounded-full hover:rounded-full hover:bg-[#4c555e] transition duration-150 ease-in ">
                        <span className='text-md text-[#cfd4d8]'>LNG</span >
                        <VscTriangleDown className="-mr-1 h-3 w-3 text-[#cfd4d8]" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >

                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl bg-transparent shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1 rounded-md  bg-[#0b0d0e] ">
                            {
                                languages.map(({ code, name, country_code }) => {
                                    return (
                                        <Menu.Item key={country_code}>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => i18next.changeLanguage(code)}
                                                    className={classNames(
                                                        'block px-4 py-2 text-sm w-full flex gap-2 items-center hover:ring-1 ring-[#474747] ring-inset')}
                                                    disabled={code === currentLangCode}
                                                    style={{ opacity: code === currentLangCode ? 0.5 : 1 }}
                                                >
                                                    <span className={`flag-icon flag-icon-${country_code} text-[18px] mx-2.5`} ></span>
                                                    <span className='font-semibold text-[16px] text-[#cfd4d8]'>{name}</span>
                                                </button>
                                            )
                                            }
                                        </Menu.Item>
                                    )
                                })
                            }

                        </div>
                    </Menu.Items>
                </Transition>
            </Menu >
        </>
    )
}
