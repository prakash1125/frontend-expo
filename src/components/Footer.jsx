import React from 'react'

const Footer = () => {
    return (
        <>

            <div className="footer justify-center text-[#f9fafa] pt-16 pb-28">
                <div className="flex justify-center w-[25%] mb-4 font-semibold rounded-full py-2 mx-auto bg-[#4c555e] ">
                    <div className="Scroll-top_icon">
                        <a href="/" className="scrollToTop">
                            <span>Back to Top</span></a></div></div>
                <div className="flex justify-between  footer-menu p-4 ">
                    <div className="footer-column ">
                        <div className="font-semibold footer-title mb-4">Info</div>
                        <ul className="footer-menu-list">
                            <li className='py-3 text-sm'><a href="/privacy-policy" target="_blank">Privacy Policy</a></li>
                            <li className='py-3 text-sm'><a href="/terms-and-conditions" >Terms and Conditions</a></li>
                            <li className='py-3 text-sm'><a href="/responsible-gambling" >Gambling can be addictive</a></li></ul></div>
                    <div className="footer-column">
                        <div className="footer-title font-semibold mb-4">Get started</div>
                        <ul className="footer-menu-list">
                            <li className='py-3 text-sm'><a href="/about-us" className>About Us</a></li>
                            <li className='py-3 text-sm'><a href="/general-policy" className>KYC and Privacy Policy</a></li></ul>
                    </div> <div className="footer-column">
                        <div className="flex footer-title font-semibold mb-4">Sportsexch</div>
                        <ul className="flex footer-menu-list">
                            <li className=" py-3 flex text-sm">
                                <div className="flex footer-apk-download">
                                    <a href="/get-apk" className="footer-download-apk">
                                        <img className='mr-1 rounded-sm bg-white' src="https://sportsexch.com/images/icons/android.png" width="24px" alt="apk" /></a>
                                    <span className="animate-btn">Download our mobile app</span>
                                </div>
                            </li></ul></div>
                </div>
                <div className="border rounded-xl helpline-numbers text-center mx-64 p-1 flex flex-col">
                    <div className="helpline-heading font-semibold "><h5>Helpline Number</h5></div>
                    <a href="https://wa.me/+917835999999" className="support-number my-3 "><i aria-hidden="true" className="fa fa-whatsapp mr-2 fa-2x" />+ 91 783 599 9999</a>
                    <a href="https://wa.me/7834999999" className="support-number "><i aria-hidden="true" className="fa fa-whatsapp mr-2 fa-2x" />+ 91 783 499 9999</a>
                </div>
                <div className="flex justify-center mt-3 mb-3">
                    <img src="https://sportsexch.com/images/bg/betfair.png" className="bg-white mb-3 betfair" /></div>
            </div>
        </>

    )
}

export default Footer



