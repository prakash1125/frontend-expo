import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const FooterMenu = [
    {
      title: "Info",
      subMenu: [
        "Privacy Policy",
        "Terms and Condition",
        "Gambling can be addictive",
      ],
    },
    { title: "Get Started", subMenu: ["About Us", "KYC and Privacy Policy"] },
    { title: "Sportsexch", subMenu: ["Download our mobile app"] },
  ];

  return (
    <>
      <footer className="footer justify-center text-[#f9fafa] pt-16 pb-28">
        <div className="flex justify-center w-60 mb-4 font-semibold rounded-full py-2 mx-auto bg-[#4c555e]">
          <div className="Scroll-top_icon">
            <a href="/" className="scrollToTop">
              <span>Back to Top</span>
            </a>
          </div>
        </div>

        {/* Footer Menu */}
        <div className="menu flex flex-wrap">
          {FooterMenu.map((element, index) => {
            return (
              <div key={index} className="menu-column flex-grow pl-4 mt-4">
                <h2 className="footer-title font-semibold text-lg footer-title mb-4">
                  {element.title}
                </h2>
                <ul className="footer-menu-list">
                  {element.subMenu.map((list) => {
                    return (
                      <li className="py-2 text-sm" key={list}>
                        <a href="#" className="">
                          {list}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

          {/* Helpline Number */}
        <div className="bottom flex flex-col items-center my-8 ">
          <div className="helpline text-center flex flex-col items-center gap-4 border border-[#333] rounded-lg py-5 px-10 mb-5">
            <div className="helpline-title text-2xl font-bold">
              <h5>Helpline Number</h5>
            </div>
            <a href="#" className=" text-[#169c59] hover:text-[#5c6060] gap-3 text-xl support-number flex items-center">
              <BsWhatsapp className="icon text-3xl" /> + 91 783 599 9999
            </a>
            <a href="#" className=" text-[#169c59] hover:text-[#5c6060] gap-3 text-xl support-number flex items-center">
              <BsWhatsapp className="icon text-3xl" /> + 91 783 499 9999
            </a>
          </div>
          <div className="powered-by invert">
            <img src="https://sportsexch.com/images/bg/betfair.png"></img>
          </div>
        </div>
      </footer>

      
    </>
  );
};

export default Footer;
