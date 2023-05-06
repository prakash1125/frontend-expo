import React, { useEffect } from "react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./BodyCarousel.css"
import { carousel } from "../../../utils/constant";

const BodyCarousel = () => {


  return (
    <>
      <Swiper
        navigation
        pagination={{ clickable: true, type: 'bullets' }}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 500, disableOnInteraction: false }}
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
