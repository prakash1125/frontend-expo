import React from "react";

const Footer = ({ scrollToTop }) => {
  return (
    <>
      <div className="footer justify-center text-skin-secondary pt-16 pb-28">
        {/* <div
          className="flex justify-center w-60 mb-4 font-semibold rounded-full py-2 mx-auto bg-skin-cardhead "
          onClick={scrollToTop}
        >
          <div className="Scroll-top_icon cursor-pointer">
            <span className="scrollToTop">
              <span>Back to Top</span>
            </span>
          </div>
        </div> */}
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
            <div className="footer-title text-lg font-semibold mb-4">
              Get started
            </div>
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
                      className="mr-1 rounded-sm bg-skin-imgbg"
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

        <div className="border w-72 m-auto rounded-xl helpline-numbers text-center p-1 flex flex-col">
          <div className="helpline-heading font-semibold ">
            <h5>Helpline Number</h5>
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
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
