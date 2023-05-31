import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { LoginModal } from "./LoginModal";
import { SignupModal } from "./SignupModal";
import { ChipSetting } from "./ChipSetting";
import { ChangePassword } from "./ChangePassword";
import { ThemeContext } from "../context/ThemeContext";
import lamp from "../assets/images/lamp.png"
import lampDark from "../assets/images/lampdark.png"




const navigation = [
  { name: "SPORTS", href: "/all-sports", current: true },
  { name: "IN-PLAY", href: "/in-play", current: false },
  { name: "IPL CUP", href: "/indian-premier-league", current: false },
  { name: "INDIAN CASINO", href: "/indian-casino", current: false },
  { name: "LIVE CASINO", href: "/live-casino", current: false },
  { name: "SLOTS", href: "/slots", current: false },
];
const loginRightMenu = [
  { name: "D", href: "/deposit", current: false },
  { name: "W", href: "/withdrawal-request", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const MainNavbar = ({ setToggle, toggle, screen }) => {
  const location = useLocation();
  const currentRoute = location.pathname;

  const { theme, setTheme } = useContext(ThemeContext);


  console.log(currentRoute, screen, "jiii");
  const walletBalance = [
    { name: "Balance", amount: "5,564.20" },
    { name: "Bonus", amount: "0.20" },
    { name: "Exposure", amount: "1500.00" },
  ];
  const profileMenu = [
    { icon: FaUser, list: "My Market", href: "/my-market", current: false },
    { icon: IoIosStats, list: "Profit-loss", href: "/reports", current: false },
    { icon: IoIosStats, list: "Account Statement", href: "/account-statement", current: false },
    { icon: IoIosStats, list: "Chips Setting", modal: true },
    { icon: IoIosStats, list: "Terms & condition" },
    { icon: IoIosStats, list: "Change Password", modal: true },
    { icon: IoIosStats, list: "Logout" },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const handleMenuClick = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsDropdownOpen(isDropdownOpen);
  };

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isChipSettingOpen, setisChipSettingOpen] = useState(false);
  const [isChangePasswordOpen, setisChangePasswordOpen] = useState(false);


  const closeModal = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  const handleThemeClick = () => {
    setTheme(!theme)
  }

  const handleModal = (id) => {
    
    if (id === "Change Password") {
      setisChangePasswordOpen(true)
    } else if (id === "Chips Setting") {
      setisChipSettingOpen(true)
    }

    handleMenuClick()
  }

  return (
    <>

      <Disclosure
        as="nav"
        className={`border-b z-0 border-gray-200/10 bg-skin-navtop  ${screen ? "px-64" : ""
          } `}
      >
        {({ open }) => (
          <>
            <div className="px-2 sm:px-6 lg:px-6">
              <div className="relative flex items-center justify-between
             gap-3">
                <div
                  className={`text-skin-white  ${toggle ? "text-[20px]" : "text-[20px]"
                    }  md:hidden`}
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? <AiOutlineClose /> : <BiMenuAltLeft />}
                </div>

                <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center ">
                    <Link to="/">
                      <img
                        className="block h-8 w-full lg:hidden"
                        src="https://sportsexch.com/images/logo/main.png"
                        alt="Your Company"
                      />
                      <img
                        className="hidden h-12 w-auto lg:block "
                        src="https://sportsexch.com/images/logo/main.png"
                        alt="Your Company"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 md:block">
                    <div className="flex h-full items-center">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.href == currentRoute &&
                            "bg-skin-cardhead text-skin-white ",
                            "px-3 py-5 text-xs font-font-family font-bold text-skin-navtext hover:bg-skin-navheading hover:text-skin-navtext "
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>


                {/* AFTER LOGIN */}

                <div className="flex gap-1.5 items-center relative ">
                  {loginRightMenu.map((element, index) => {
                    return (
                      <Link
                        key={index}
                        to={element.href}
                        type="button"
                        className={`bg-green-900 rounded-md px-3 font-semibold py-2.5 p-2 text-xs text-skin-white  hover:text-skin-white  focus:outline-none  ${element.name === "D" ? "#1f4d34" : "bg-sky-900"
                          }`}
                      >
                        {element.name}
                      </Link>
                    );
                  })}

                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="  wallet bg-zinc-600 hover:bg-zinc-500 p-0.5 rounded-md flex items-center cursor-pointer"
                  >
                    <span className="text-skin-white  text-xs font-semibold mx-2.5">
                      &#x20B9;5,564.20
                    </span>
                    <button
                      type="button"
                      className="bg-green-600 rounded-md px-2.5 font-semibold p-0.5  text-xl text-skin-white  hover:text-skin-white  focus:outline-none "
                    >
                      +
                    </button>
                  </div>
                  {isDropdownOpen && (
                    <div className="w-64 absolute rounded-md top-12 bg-[rgba(0,0,0,0.8)] z-50 backdrop-blur-md divide-y">
                      <div className="text-center text-skin-white  font-bold py-3 divide-y">
                        Wallet Active
                        <div className="tabs flex mx-2.5 my-1.5">
                          <button
                            onClick={()=>alert("Wallet changed")}
                            type="button"
                            className="bg-skin-cardhead active:bg-[#169c59]  hover:bg-[#169c59] rounded-r-none rounded-md px-3 py-1 grow font-semibold p-2 text-md text-skin-white  hover:text-skin-white  focus:outline-none "
                          >
                            Balance
                          </button>
                          <button
                          onClick={()=>alert("Wallet changed")}
                            type="button"
                            className="bg-skin-cardhead active:bg-[#169c59] hover:bg-[#169c59] rounded-l-none rounded-md px-3 py-1 grow font-semibold p-2 text-md text-skin-white  hover:text-skin-white  focus:outline-none "
                          >
                            Bonus
                          </button>
                        </div>
                      </div>
                      <div className="wallet-balance px-2.5 py-1 rounded">
                        {walletBalance.map((element, index) => {
                          return (
                            <div className="flex justify-between" key={index}>
                              <span className="py-2 text-sm text-skin-white ">
                                {element.name}
                              </span>
                              <span className="py-2 text-sm text-skin-white ">
                                {element.amount}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    type="button"
                    className="bg-zinc-600 hover:bg-zinc-500 rounded-md px-3 py-2.5 font-semibold p-2 text-md text-skin-white  hover:text-skin-white  focus:outline-none "
                  >
                    <FaUser />
                  </button>
                  {isProfileOpen && (
                    <div className="w-64 absolute top-12 flex flex-col px-1.5 py-2 bg-[rgba(0,0,0,0.8)] z-50 backdrop-blur-md rounded ">
                      {profileMenu.map((element, index) => {
                        return (
                          <Link
                            onClick={element?.modal ? () => handleModal(element?.list) : handleMenuClick}
                            to={element.href}
                            className="flex items-center gap-2.5 py-2 px-3 rounded cursor-pointer active:bg-skin-nav  hover:bg-skin-nav  "
                          >
                            <div className="text-skin-white  icon group">
                              {<element.icon />}
                            </div>
                            <div className="text-skin-white  group menu-list cursor-pointer ">
                              {element.list}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>


                {/* BEFORE LOGIN */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
                  <button
                    // onClick={()=> {document.getElementById("theme").classList.add("light-theme")}}
                    onClick={handleThemeClick}
                    type="button"
                    className="  font-semibold p-2 text-lg text-skin-navtext hover:text-skin-white  focus:outline-none  "
                  >
                    {theme ? <img className="hover:brightness-90 w-8" src={lampDark}></img> : <img className=" hover:brightness-95 w-8" src={lamp}></img>}
                  </button>
                  <button
                    onClick={() => { setIsLoginOpen(true); }}
                    type="button"
                    className="  font-semibold p-2 text-xs text-skin-navtext hover:text-skin-white  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    LOG IN
                  </button>


                  {/* {isChipSettingOpen && (
                    <ChipSetting className="z-50" closeModal={setisChipSettingOpen} />
                  )} */}

                  <button
                    onClick={() => { setIsSignupOpen(true); }}
                    type="button"
                    className="p-3 px-4 font-semibold rounded-md hover:bg-[#0D8247] bg-[#169c59] hover:bg-skin-nav hover:text-skin-white text-xs text-skin-navtext  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    SIGN UP
                  </button>
                  {isSignupOpen && (
                    <SignupModal className="z-50" closeModal={closeModal} />
                  )}

                </div>


              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-skin-white "
                        : "text-gray-300 hover:bg-gray-700 hover:text-skin-white ",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {isLoginOpen && (
        <LoginModal className="z-50" closeModal={closeModal} />
      )}
      {isChipSettingOpen && (
        <ChipSetting className="z-50" closeModal={setisChipSettingOpen} />
      )}
      {isChangePasswordOpen && (
        <ChangePassword className="z-50" closeModal={setisChangePasswordOpen} />
      )}
    </>
  );
};
