import React from 'react'
import "../../../assets/scss/component/LiveCasinoBody.scss"
import { IndianCasino } from "../../../utils/constant.js";
import { LiveCasino } from "../../../utils/constant.js";
import { LiveCasinoBtn } from "../../../utils/constant.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Button from '../../../commonComponents/button/Button';
SwiperCore.use([Navigation]);


const CenterBody = ({ tabname }) => {
    const topCarousel = {
        autoplay: {
            delay: 2000, // 5 seconds
        },
        spaceBetween: 10,
        slidesPerView: 3,
        loop: true,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
            el: '.swiper-pagination',
        },
    };
    const otherCarousel = {
        spaceBetween: 10,
        slidesPerView: 6,
        loop: true,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
            el: '.swiper-pagination',
        },
    };

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }

    return (
        <>
            {
                LiveCasino.length > 0 ? (<>
                    <div className='casino-container' >
                        <div className="swiper-container">
                            <Swiper {...topCarousel}>
                                {IndianCasino.map((element, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={element.img} alt={`Image ${index}`} />
                                    </SwiperSlide>
                                ))}
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </Swiper>
                        </div>

                        <div className='btn-wrapper'>
                            {
                                LiveCasinoBtn.map((element, index) => {
                                    return (
                                        <Button key={index} icon={<element.icon />} className="live-score" name={truncate(element?.tabName, 14)} />
                                    )
                                })
                            }
                        </div>

                        <div className='image-tab-container'>
                            {LiveCasino.map((element, index) => {
                                return (
                                    <>
                                        <div className='live-casino-tab'>
                                            <div className='live-casino-title'>{element.title}</div>
                                            <div className='live-casino-gamePlace' ><a href="#">{element.gamePlace}</a></div>
                                        </div>
                                        <Swiper {...otherCarousel}>
                                            <div key={index} className='content-container'>
                                                {
                                                    element.imageSet.map((image) => {
                                                        return (
                                                            <SwiperSlide key={index}>
                                                                <div className='casino-image'>
                                                                    <img src={image.img} alt="Slide 1" />
                                                                    <p className='play-button fade'><span>Play</span></p>
                                                                </div>
                                                                <div className='casino-name'>
                                                                    {image.name}
                                                                </div>
                                                            </SwiperSlide>
                                                        )
                                                    })
                                                }

                                            </div>
                                            <div className="swiper-button-prev previous-btn"></div>
                                            <div className="swiper-button-next next-btn"></div>
                                        </Swiper>
                                    </>
                                )
                            })
                            }
                        </div>

                    </div >
                </>) : (<>
                    <div className='btn-wrapper'>
                        {
                            LiveCasinoBtn.map((element, index) => {
                                return (
                                    <Button key={index} className="ipl-score" name={element.tabName} />
                                )
                            })
                        }
                    </div>
                    <div className='match-availability'>
                        <p className='message'>There is a no match available at this time <span className='message-highlight'>{tabname}</span>.</p>
                    </div>
                </>)
            }
        </>
    )




}


export default CenterBody