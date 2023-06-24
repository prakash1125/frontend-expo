import React from "react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { i18n, t } = useTranslation();
    return (
        <>
            <div className="footer justify-center text-skin-secondary pt-16 pb-28">
                <div className="flex justify-center w-60 mb-4 font-semibold rounded-full py-2 mx-auto bg-skin-cardhead ">
                    <div className="Scroll-top_icon">
                        <a href="/" className="scrollToTop">
                            <span> {t("BACK_TO_TOP")}</span>
                        </a>
                    </div>
                </div>
                <div className="flex justify-between flex-wrap footer-menu gap-8 p-2">
                    <div className="footer-column mt-4 flex-grow ">
                        <div className="font-semibold text-lg footer-title mb-4">  {t("INFO")}</div>
                        <ul className="footer-menu-list">
                            <li className="py-3 text-sm">
                                <a href="/privacy-policy" target="_blank">
                                    {t("PRIVACY_POLICY")}
                                </a>
                            </li>
                            <li className="py-3 text-sm">
                                <a href="/terms-and-conditions"> {t("TERMS_AND_CONDITIONS")}</a>
                            </li>
                            <li className="py-3 text-sm">
                                <a href="/responsible-gambling"> {t("GAMBLING_CAN_BE_ADDICTIVE")}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column mt-4 flex-grow">
                        <div className="footer-title text-lg font-semibold mb-4"> {t("GET_STARTED")}</div>
                        <ul className="footer-menu-list">
                            <li className="py-3 text-sm">
                                <a href="/about-us" className>
                                    {t("ABOUT_US")}
                                </a>
                            </li>
                            <li className="py-3 text-sm">
                                <a href="/general-policy" className>
                                    {t("KYC_AND_PRIVACY_POLICY")}
                                </a>
                            </li>
                        </ul>
                    </div>{" "}
                    <div className="footer-column mt-4 flex-grow">
                        <div className="flex footer-title text-lg font-semibold mb-4">
                            {t("SPORTSSEXCH")}
                        </div>
                        <ul className="flex footer-menu-list">
                            <li className=" py-3 flex text-sm">
                                <div className="flex footer-apk-download">
                                    <a href="/get-apk" className="footer-download-apk">
                                        <img
                                            className="mr-1 rounded-sm bg-skin-imgbg"
                                            src="https://sportsexch.com/images/icons/android.png"
                                            width="24px"
                                            alt="apk"
                                        />
                                    </a>
                                    <span className="animate-btn">{t("DOWNLOAD_OUR_MOBILE_APP")}</span>
                                </div>


                                <div className="border w-72 m-auto rounded-xl helpline-numbers text-center p-1 flex flex-col">
                                    <div className="helpline-heading font-semibold ">
                                        <h5> {t("HELPLINE_NUMBER")}</h5>
                                    </div>
                                    <a
                                        href="https://wa.me/+917835999999"
                                        className="support-number my-3 "
                                    >
                                        <i aria-hidden="true" className="fa fa-whatsapp mr-2 fa-2x" />+ 91
                                        783 599 9999
                                    </a>
                                    <a href="https://wa.me/7834999999" className="support-number ">
                                        <i aria-hidden="true" className="fa fa-whatsapp mr-2 fa-2x" />+ 91
                                        783 499 9999
                                    </a>
                                </div>
                                <div className="flex justify-center mt-3 mb-3">
                                    <img
                                        src="https://sportsexch.com/images/bg/betfair.png"
                                        className="bg-skin-imgbg mb-3 betfair"
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
