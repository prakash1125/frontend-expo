import React from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const navigation = [
  { name: "SPORTS", href: "/all-sports", current: true },
  { name: "IN-PLAY", href: "/in-play", current: false },
  { name: "IPL CLUB", href: "/indian-premier-league", current: false },
  { name: "INDIAN CASINO", href: "/indian-casino", current: false },
  { name: "LIVE CASINO", href: "/live-casino", current: false },
  { name: "SLOTS", href: "/slots", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const MainNavbar = ({ setToggle, toggle, screen }) => {
  const location = useLocation();
  const currentRoute = location.pathname;
  console.log(currentRoute, screen, "jiii");

  return (
    <Disclosure
      as="nav"
      className={`bg-nav-bg ${screen ? "px-36" : ""}`}
    >
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between gap-3">
              <div
                className={`text-white ${
                  toggle ? "text-[20px]" : "text-[20px]"
                }  md:hidden`}
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? <AiOutlineClose /> : <BiMenuAltLeft />}
              </div>

              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="block h-10 w-auto lg:hidden"
                      src="https://sportsexch.com/images/logo/main.png"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-12 w-auto lg:block"
                      src="https://sportsexch.com/images/logo/main.png"
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 md:block">
                  <div className="flex space-x-2 h-full items-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.href == currentRoute &&
                            "bg-[#6c757d] text-white",
                          "px-3 py-5 text-xs font-font-family font-semibold text-white hover:bg-gray-700 hover:text-white"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
                <button
                  type="button"
                  className=" font-semibold p-2 text-xs text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  LOGIN
                </button>

                {/* Profile dropdown */}
                <button
                  type="button"
                  className=" font-semibold rounded-md bg-green-500 p-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  SIGN UP
                </button>
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
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
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
  );
};
