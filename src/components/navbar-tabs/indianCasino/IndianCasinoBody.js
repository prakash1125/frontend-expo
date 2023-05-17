import React from 'react'
import "../../../assets/scss/component/IndianCasinoBody.scss"
import { IndianCasino } from "../../../utils/constant.js";
import { CasinoCarousels } from "../../../utils/constant.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Navigation]);


const CenterBody = ({ tabname }) => {
    const params = {
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
        breakpoints: {
            //1024 breakpoint
            1024: {
                slidesPerView: 3,
            },
            // 768px breakpoint
            768: {
                slidesPerView: 2,
            },
            // 480px breakpoint
            320: {
                slidesPerView: 1,
            },
        },
    };
    const handlePrevClick = () => {
        console.log('Previous button clicked');
    };

    return (
        <div className='casino-container' >
            <div className="swiper-container">
                <Swiper {...params}>
                    {CasinoCarousels.map((element, index) => (
                        <SwiperSlide key={index}>
                            <img src={element.img} alt={`Image ${index}`} />
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-prev" onClick={handlePrevClick}></div>
                    <div className="swiper-button-next"></div>
                </Swiper>
            </div>
            <h3 className='casino-tab'>{tabname}</h3>

            <div className='image-container'>
                {IndianCasino.map((element, index) => {
                    return (
                        <div key={index} className='content-container'>
                            <div className='casino-image'>
                                <img src={element.img} alt="Slide 1" />
                                <p className='play-button fade'><span>Play</span></p>
                            </div>
                            <div className='casino-name'>
                                {element.name}
                            </div>
                        </div>
                    )
                })
                }
            </div>

        </div >
    )
}


export default CenterBody