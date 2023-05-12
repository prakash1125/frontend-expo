import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./BodyCarousel.scss"
import { carousel } from "../../../utils/constant";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const BodyCarousel = () => {


  return (
    <>
      <Swiper
        navigation
        pagination={{ clickable: true}}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {carousel.map((image, index) => {
          return (
            <SwiperSlide key={index} className="slider">
              <img src={image.img} alt="Slide 1" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
};

export default BodyCarousel;
