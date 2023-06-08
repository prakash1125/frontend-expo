import React from "react";
import { BsWhatsapp } from "react-icons/bs"

const Footer = () => {
    const goToBtn = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <div className="footer justify-center text-[#f9fafa] pt-16 pb-28">
                <div className="flex justify-center cursor-pointer w-60 mb-4 font-semibold rounded-full py-2 mx-auto bg-[#4c555e] ">
                    <div className="Scroll-top_icon">
                        <div className="scrollToTop" onClick={goToBtn}>
                            <span>Back to Top</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between flex-wrap footer-menu gap-8 p-2 ">
                    <div className="footer-column mt-4 flex-grow ">
                        <div className="font-semibold text-lg footer-title mb-4">Info</div>
                        <ul className="footer-menu-list">
                            <li className="py-3 text-sm">
                                <a href="/privacy-policy" target="_blank">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="py-3 text-sm">
                                <a href="/terms-and-conditions">Terms and Conditions</a>
                            </li>
                            <li className="py-3 text-sm">
                                <a href="/responsible-gambling">Gambling can be addictive</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column mt-4 flex-grow">
                        <div className="footer-title text-lg font-semibold mb-4">Get started</div>
                        <ul className="footer-menu-list">
                            <li className="py-3 text-sm">
                                <a href="/about-us" className>
                                    About Us
                                </a>
                            </li>
                            <li className="py-3 text-sm">
                                <a href="/general-policy" className>
                                    KYC and Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>{" "}
                    <div className="footer-column mt-4 flex-grow">
                        <div className="flex footer-title text-lg font-semibold mb-4">
                            Sportsexch
                        </div>
                        <ul className="flex footer-menu-list">
                            <li className=" py-3 flex text-sm">
                                <div className="flex footer-apk-download">
                                    <a href="/get-apk" className="footer-download-apk">
                                        <img
                                            className="mr-1 rounded-sm bg-white"
                                            src="https://sportsexch.com/images/icons/android.png"
                                            width="24px"
                                            alt="apk"
                                        />
                                    </a>
                                    <span className="animate-btn">Download our mobile app</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="border border-[#333] w-72 m-auto rounded-xl helpline-numbers text-center p-6 flex flex-col">
                    <div className="helpline-heading font-semibold mb-3">
                        <p className="text-xl font-bold">Helpline Number</p>
                    </div>
                    <a
                        href="https://wa.me/+917835999999"
                        className="flex items-center justify-center gap-1 font-bold support-number my-3 text-[18px] text-[#169c59]"
                    >
                        <BsWhatsapp className="mr-2 fa-2x text-2xl" />+ 91
                        783 599 9999
                    </a>
                    <a href="https://wa.me/7834999999" className="flex items-center justify-center gap-1 font-bold support-number text-[18px] text-[#169c59]">
                        <BsWhatsapp className="mr-2 fa-2x text-2xl" />+ 91
                        783 499 9999
                    </a>
                </div>
                <div className="flex justify-center mt-3 mb-3">
                    <img
                        src="https://sportsexch.com/images/bg/betfair.png"
                        className="invert mb-3 betfair"
                    />
                </div>
            </div>
        </>
    );
};

export default Footer;
