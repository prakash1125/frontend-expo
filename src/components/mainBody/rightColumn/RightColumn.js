import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import "../../../assets/scss/component/RightColumn.scss"
import { RightColumnImgs } from "../../../utils/constant.js";
import { PopularEvents } from "../../../utils/constant.js";
import RightColumnData from "./RightColumnData.js";
SwiperCore.use([Navigation]);


export const RightColumn = ({ topEventName, bottomEventName }) => {
    const params = {
        autoplay: {
            delay: 2000, // 5 seconds
        },
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
            el: '.swiper-pagination',
        },
    };

    return (
        <>
            <div className="px-2 hidden md:block right-section-col" >
                <div className="max-w-xs mx-auto top-bg rounded-sm">
                    <div className="p-1 flex justify-center">
                        <button className=" text-white bg-[#32383e] p-3 text-sm rounded-md w-full font-semibold">
                            {topEventName}
                        </button>
                    </div>

                    <Swiper {...params}>
                        {RightColumnImgs.map((element, index) => (
                            <SwiperSlide key={index}>
                                <img src={element.img} className="w-full rounded-2xl" alt={`Slide ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-prev right-col-prev-btn"></div>
                        <div className="swiper-button-next right-col-next-btn"></div>
                    </Swiper>
                </div>


                <div className="max-w-xs mx-auto bottom-bg rounded-sm mt-2 mb-2">
                    <div className="p-1 flex justify-center">
                        <button className=" text-white text-sm bg-[#32383e] p-3 rounded-md w-full font-semibold">
                            {bottomEventName}
                        </button>
                    </div>

                    <div className="flex flex-col items-center w-full shadow dark:bg-gray-800">
                        {PopularEvents.map((element, index) => {
                            return (
                                <RightColumnData element={element} />
                            )
                        })
                        }
                    </div>
                </div>
            </div>

        </>
    );
};
