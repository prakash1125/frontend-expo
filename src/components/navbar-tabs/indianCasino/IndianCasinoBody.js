import React from 'react'
import "../../../assets/scss/component/IndianCasinoBody.scss"
import { IndianCasino } from "../../../utils/constant.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import IndianCasinoRows from './IndianCasinoRows';
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
    };
    const handlePrevClick = () => {
        console.log('Previous button clicked');
    };

    return (
        <div className='casino-container' >
            <div className="swiper-container">
                <Swiper {...params}>
                    {IndianCasino.map((element, index) => (
                        <SwiperSlide key={index}>
                            <img src={element.img} alt={`Image ${index}`} />
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-prev" onClick={handlePrevClick}></div>
                    <div className="swiper-button-next"></div>
                </Swiper>
            </div>
            <h3 className='casino-tab'>{tabname}</h3>

            {IndianCasino.map((element, index) => {
                return (
                    <div className='image-container'>
                        <IndianCasinoRows element={element} />
                    </div>
                )
            })

            }

        </div >
    )
}


export default CenterBody