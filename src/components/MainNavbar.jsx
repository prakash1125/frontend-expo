import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { LoginModal } from "./LoginModal";
import { ChipSetting } from "./ChipSetting";
import { ChangePassword } from "./ChangePassword";
import { ThemeContext } from "../context/ThemeContext";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import lamp from "../assets/images/lamp.png";
import lampDark from "../assets/images/lampdark.png";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/actions/auth/logoutAction";
import {
  getAllSportData,
  getSport,
  getUserData,
  globalMaketOdds,
  globalSportData,
  getChipSetting,
} from "../redux/actions";
import { socket } from "../context/SocketContext";
import { notify, notifySuccess } from "../utils/helper";

const navigation = [
  { name: "SPORTS", href: "/all-sports", current: true },
  { name: "IN-PLAY", href: "/in-play", current: false },
  // { name: "IPL CLUB", href: "/indian-premier-league", current: false },
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
  const dispatch = useDispatch();
  const currentRoute = location.pathname;
  const userData = useSelector((state) => state?.GetUserData?.userData);
  const exposure = useSelector((state) => state?.PlaceBet);
  
  const { theme, setTheme } = useContext(ThemeContext);
  const walletBalance = [
    { name: "Balance", amount: Math.abs(userData?.data?.balance) - Math.abs(userData?.data?.exposure) },
    { name: "Credit Reference", amount: userData?.data?.creditReference ? userData?.data?.creditReference : 0 },
    { name: "Exposure", amount: Math.abs(userData?.data?.exposure) ? Math.abs(userData?.data?.exposure) : 0 },
  ];
  const profileMenu = [
    { icon: FaUser, list: "My Market", href: "/my-market", current: false },
    { icon: IoIosStats, list: "Profit-loss", href: "/reports", current: false },
    {
      icon: IoIosStats,
      list: "Account Statement",
      href: "/account-statement",
      current: false,
    },
    { icon: IoIosStats, list: "Chips Setting", modal: true },
    { icon: IoIosStats, list: "Terms & condition" },
    { icon: IoIosStats, list: "Change Password", modal: true },
    { icon: IoIosStats, list: "Logout" },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // const [exposureVal, setExposureVal] = useState('');
  const handleMenuClick = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsDropdownOpen(isDropdownOpen);
  };
  const navigate = useNavigate()
  const handleNavigate =(href)=>{
    navigate(href)
  }

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isChipSettingOpen, setisChipSettingOpen] = useState(false);
  const [isChangePasswordOpen, setisChangePasswordOpen] = useState(false);

  const [data, setdata] = useState([]);
  const [allMarkets, setAllMarkets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sportData = await new Promise((resolve, reject) => {
          dispatch(getSport({ callback: resolve, errorCallback: reject }));
        });

        const allDataPromises = sportData.map(async (data) => {
          const id = data._id;
          const res = await new Promise((resolve, reject) => {
            dispatch(
              getAllSportData({ id, callback: resolve, errorCallback: reject })
            );
          });
          const sport = {
            sportName: data.name,
            sportSlugName: data.slugName,
            sportsCode: data.sportsCode,
            sportId: data._id,
            leagues: [],
          };
          if (res.length !== 0) {
            const leagues = res.map((item) => {
              const leagues = {
                leagueId: item._id,
                leagueCode: item.leagueCode,
                leagueName: item.name,
                events: item.events,
              };
              item.events?.forEach((data) => {
                data.markets.forEach((market) => {
                  const obj = { [market.marketCode]: {} };
                  allMarketsSet.add(obj);
                });
              });
              return leagues;
            });
            sport.leagues = leagues;
          }
          return sport;
        });
        const allData = await Promise.all(allDataPromises);
        setAllMarkets(Array.from(allMarketsSet));
        setdata(allData);
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };
    const allMarketsSet = new Set();
    setdata([]);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    dispatch(globalSportData({ data: data }));
  }, [data, dispatch]);

  useEffect(() => {
    dispatch(globalMaketOdds({ data: allMarkets }));
  }, [allMarkets, dispatch]);

  //Taking realtime socket-Data for market Runners
  useEffect(() => {
    allMarkets.forEach((market) => {
      const socketKey = Object?.keys(market)[0];
      socket.on(socketKey, (data) => {
        setAllMarkets((prevDataArray) => {
          const updatedArray = prevDataArray?.map((val) =>
            Object.keys(val)[0] === socketKey ? { [socketKey]: data } : val
          );
          return updatedArray;
        });
      });
    });
  }, [allMarkets]);

  useEffect(() => {
    dispatch(getUserData())
  }, [exposure])

  const closeModal = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  const handleThemeClick = () => {
    setTheme(!theme);
  };

  const handleModal = (id) => {
    if (id === "Change Password") {
      setisChangePasswordOpen(true);
    } else if (id === "Chips Setting") {
      setisChipSettingOpen(true);
    }

    handleMenuClick();
  };

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the login status is stored in localStorage
    const storedLoggedIn = localStorage.getItem("token");
    if (storedLoggedIn) {
      setLoggedIn(true);
      dispatch(getUserData());
      dispatch(getChipSetting());
    }
  }, [dispatch, loggedIn]);



  const handleLogout = () => {
    // Update the loggedIn state to false
    setLoggedIn(false);
    notifySuccess("Logged Out")

    // Remove the login status from localStorage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("token");
    dispatch(logOut());
    // Log the logout message
  };

  return (
    <>
      <Disclosure
        as="nav"
        className={`border-b z-0 border-gray-200/10 bg-skin-navtop  `}
      >
        {({ open }) => (
          <>
            <div className="px-2  mx-auto  max-w-[1440px]">
              <div
                className="relative flex items-center justify-between
             sm:gap-3 gap-1"
              >
                {/* Mobile Navbar Toggle Button */}
                {/* <div
                  className={`text-skin-white  ${
                    toggle ? "text-[20px]" : "text-[20px]"
                  }  lg:hidden`}
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? <AiOutlineClose /> : <BiMenuAltLeft />}
                </div> */}

                <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                  <div className="flex items-center ">
                    <Link to="/">
                      <img
                        className=" h-7 w-full sm:h-9  lg:h-12 "
                        src="https://sportsexch.com/images/logo/main.png"
                        alt="Your Company"
                      />
                    </Link>
                  </div>

                  {/* Navbar Links */}
                  <div className="hidden ml-11 lg:block">
                    <div className="flex h-full items-center">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.href == currentRoute &&
                            "bg-skin-cardhead text-skin-white ",
                            "px-3 py-5 text-xs font-font-family font-bold text-skin-navtext hover:bg-skin-mainNavbarHoverColor hover:text-white "
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* THEME TOGGLE */}
                {/* <button
                  onClick={handleThemeClick}
                  type="button"
                  className="  font-semibold  text-lg text-skin-navtext hover:text-skin-white  focus:outline-none  "
                >
                  {theme ? (
                    <img
                      className="hover:brightness-90 w-5  sm:w-6 lg:w-7"
                      src={lampDark}
                      alt="lampDark"
                    ></img>
                  ) : (
                    <img
                      className=" hover:brightness-95 w-5  sm:w-6 lg:w-7"
                      src={lamp}
                      alt="lampLight"
                    ></img>
                  )}
                </button> */}

                <label class="relative mt-4 inline-flex items-center mb-3 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <IoMoonOutline className="fas fa-moon text-white-500 absolute top-1/2 right-4 transform -translate-y-1/2 -translate-x-1/2 " />
                  <div onClick={handleThemeClick} class="p-2 py-3 w-11 h-6 bg-skin-cardhead peer-focus:outline-none pt-3 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-transparent-600">
                    <IoSunnySharp className="fas fa-sun text-black-500 absolute top-1/2 left-8 transform -translate-x-1/2 -translate-y-1/2 " />

                  </div>
                </label>

                {/* AFTER LOGIN */}
                {loggedIn && (
                  <div className="flex gap-1.5 py-2 lg:p-0  items-center relative">
                    {loginRightMenu.map((element, index) => {
                      return (
                        <Link
                          key={index}
                          to={element.href}
                          type="button"
                          className={`bg-green-900 rounded-md px-3 font-semibold py-2.5 p-2 text-xs text-white  hover:text-white  focus:outline-none  ${element.name === "D" ? "1f4d34" : "bg-sky-900"
                            }`}
                        >
                          {element.name}
                        </Link>
                      );
                    })}

                    <div
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="  wallet bg-skin-cardhead hover:bg-skin-sidenavhover p-0.5 rounded-md flex items-center cursor-pointer"
                    >
                      <span className="text-skin-balance text-xs font-semibold mx-2.5">
                        &#x20B9; {Math.abs(userData?.data?.balance) - Math.abs(userData?.data?.exposure)}
                      </span>
                      <button
                        type="button"
                        className="bg-green-600 rounded-md px-2.5 font-semibold p-0.5  text-xl text-white  hover:text-white  focus:outline-none "
                      >
                        +
                      </button>
                    </div>
                    {isDropdownOpen && (
                      <div className="w-64 absolute rounded-md top-12 right-1 bg-[rgba(0,0,0,0.8)] z-50 backdrop-blur-sm divide-y">
                        <div className="text-center text-skin-white  font-bold py-3 divide-y">
                          Wallet Active
                          <div className="tabs flex mx-2.5 my-1.5">
                            <button
                              onClick={() => notifySuccess("Wallet Changed")}
                              type="button"
                              className="bg-[#169c59]  hover:bg-[#169c59] hover:brightness-90 rounded-r-none rounded-md px-3 py-1 grow font-semibold p-2 text-md text-skin-white  hover:text-skin-white  focus:outline-none "
                            >
                              Balance
                            </button>
                            <button
                              onClick={() => notifySuccess("Wallet Changed")}
                              type="button"
                              className="bg-skin-cardhead active:bg-[#169c59] hover:brightness-90 rounded-l-none rounded-md px-3 py-1 grow font-semibold p-2 text-md text-skin-white  hover:text-skin-white  focus:outline-none "
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
                                  {element?.amount}
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
                      className="bg-skin-cardhead hover:bg-skin-hovercolorsecondary rounded-md px-3 py-2.5 font-semibold p-2 text-md text-skin-white  hover:text-skin-white  focus:outline-none "
                    >
                      <FaUser />
                    </button>
                    {isProfileOpen && (
                      <div className="w-64 absolute top-12 right-1 flex flex-col px-1.5 py-2 bg-[rgba(0,0,0,0.8)] z-50 backdrop-blur-sm rounded ">
                        {profileMenu.map((element, index) => (
                          
                          <div
                            onClick={
                              element.list === "Logout"
                                ? handleLogout
                                : element?.modal
                                  ? () => handleModal(element?.list)
                                  : () => handleNavigate(element.href)
                            }
                           
                            className="flex items-center gap-2.5 py-2 px-3 rounded cursor-pointer active:bg-skin-nav hover:bg-skin-nav"
                            key={index}
                          >
                            <div className="text-skin-white icon group">
                              {React.createElement(element.icon)}
                            </div>
                            <div className="text-skin-white group menu-list cursor-pointer">
                              {element.list}
                            </div>``
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* BEFORE LOGIN */}
                {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2"> */}

                {!loggedIn && (
                  <button
                    onClick={() => {
                      setIsLoginOpen(true);
                    }}
                    type="button"
                    className="font-semibold p-2 py-3 text-xs text-skin-navtext hover:text-skin-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    LOG IN
                  </button>
                )}

                {/* <button
                    onClick={() => { setIsSignupOpen(true); }}
                    type="button"
                    className="p-3 px-4 font-semibold rounded-md hover:bg-[#0D8247] bg-[#169c59] text-xs text-skin-navtext  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    SIGN UP
                  </button>
                  {isSignupOpen && (
                    <SignupModal className="z-50" closeModal={closeModal} />
                  )} */}
                {/* </div> */}
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
        <LoginModal
          className="z-50"
          closeModal={closeModal}
          onLogin={setLoggedIn}
        />
      )}
      {/* {isSignupOpen && (
                <SignupModal className="z-50" closeModal={closeModal} />
            )} */}
      {isChipSettingOpen && (
        <ChipSetting className="z-50" closeModal={setisChipSettingOpen} />
      )}
      {isChangePasswordOpen && (
        <ChangePassword className="z-50" closeModal={setisChangePasswordOpen} />
      )}
    </>
  );
};
