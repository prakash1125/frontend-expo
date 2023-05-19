import React, { useState } from 'react'
import { Tab } from "@headlessui/react";
import "../../../assets/scss/component/SlotsBody.scss"
import { CasinoCarousels } from "../../../utils/constant.js";
import { Slots } from "../../../utils/constant.js";
import { SlotsBtn } from "../../../utils/constant.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Button from '../../../commonComponents/button/Button.js';
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
    const otherCarousel = {
        autoplay: {
            delay: 2000, // 5 seconds
        },
        spaceBetween: 10,
        slidesPerView: 5,
        loop: true,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
            el: '.swiper-pagination',
        },
        breakpoints: {
            //1024 breakpoint
            1024: {
                slidesPerView: 5,
            },
            // 768px breakpoint
            768: {
                slidesPerView: 4,
            },
            // 480px breakpoint
            320: {
                slidesPerView: 2,
            },
        },
    };

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    let [categories] = useState({
        All: [
            {
                title: "Top Indian Games (14)",
                gamePlace: "All NetEnt",
                imageSet: [
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                ]
            },
            {
                title: "Top Indian Games (14)",
                gamePlace: "All Red Tiger",
                imageSet: [
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                ]
            },
        ],
        NetEnt: [
            {
                title: "Top Indian Games (14)",
                gamePlace: "All NetEnt",
                imageSet: [
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                ]
            },
            {
                title: "Top Indian Games (14)",
                gamePlace: "All Red Tiger",
                imageSet: [
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                ]
            },
            {
                title: "Top Indian Games (14)",
                gamePlace: "All Red Tiger",
                imageSet: [
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                    { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
                ]
            },
        ]
    });

    return (
        <>
            <Tab.Group>




                {
                    [categories].length > 0 ? (<>
                        <div className='casino-container' >
                            <div className="swiper-container">
                                <Swiper {...topCarousel}>
                                    {CasinoCarousels.map((element, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={element.img} alt={`Image ${index}`} />
                                        </SwiperSlide>
                                    ))}
                                    <div className="swiper-button-prev"></div>
                                    <div className="swiper-button-next"></div>
                                </Swiper>
                            </div>

                            <div className='btn-wrapper'>
                                <Tab.List className="flex  p-1 scroll-x">
                                    {Object.keys(categories).map((category, index) => (
                                        <Tab
                                            key={category}
                                            className={({ selected }) =>
                                                classNames(
                                                    "w-full rounded-md mx-2 text-sm font-medium leading-5",
                                                    "ring-opacity-60 ring-offset-2 max-w-[100px]",
                                                    selected
                                                        ? "text-white"
                                                        : "text-blue-100 text-[#32383e] bg-white hover:bg-white hover:text-[#32383e]"
                                                )
                                            }
                                        >
                                            <Button
                                                key={index}
                                                className="slots-score"
                                                name={truncate(category, 14)}
                                            />
                                        </Tab>
                                    ))}
                                </Tab.List>

                                {/* {
                                    SlotsBtn.map((element, index) => {
                                        return (
                                            <Button key={index} icon={<element.icon />} className="slots-score" name={truncate(element?.tabName, 14)} />
                                        )
                                    })
                                } */}
                            </div>

                            <div className='image-tab-container'>
                                <Tab.Panels className="mt-2">
                                    {Object.values(categories).map((posts, idx) => (
                                        <Tab.Panel
                                            key={idx}
                                            className={classNames(
                                                ""
                                                //     // 'rounded-md w-full bg-white p-3',
                                                //     "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                                            )}
                                        >
                                            {posts.map((post, index) => {
                                                return (
                                                    <>
                                                        <div className='slots-tab'>
                                                            <div className='slots-title'>{post.title}</div>
                                                            <div className='slots-gamePlace' ><a href="#">{post.gamePlace}</a></div>
                                                        </div>
                                                        <Swiper {...otherCarousel}>
                                                            <div key={index} className='content-container'>
                                                                {
                                                                    post.imageSet.map((image) => {
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
                                            })}
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>

                                {/* {Slots.map((element, index) => {
                                    return (
                                        <>
                                            <div className='slots-tab'>
                                                <div className='slots-title'>{element.title}</div>
                                                <div className='slots-gamePlace' ><a href="#">{element.gamePlace}</a></div>
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
                                } */}
                            </div>

                        </div >
                    </>) : (<>
                        <div className='btn-wrapper'>
                            {/* {
                                SlotsBtn.map((element, index) => {
                                    return (
                                        <Button key={index} icon={<element.icon />} className="live-score" name={truncate(element?.tabName, 14)} />
                                    )
                                })
                            } */}
                        </div>
                        <div className='match-availability'>
                            <p className='message'>There is a no match available at this time <span className='message-highlight'>{tabname}</span>.</p>
                        </div>
                    </>)
                }
            </Tab.Group>
        </>
    )




}
export default CenterBody;