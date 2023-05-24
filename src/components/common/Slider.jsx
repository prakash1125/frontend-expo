import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Sliders = ({
  dataArray,
  settings,
  imgClassName,
  parentClassName,
  title,
  titleClassName
}) => {
  return (
    <>
      <Slider {...settings}>
        {dataArray.map((img, index) => (
          <div key={index} className={parentClassName}>
            <img
              src={img?.link}
              className={`${imgClassName} w-full rounded-xl`}
              alt={`Slide ${index + 1}`}
            />
            {title && (
              <h5 className={`text-white text-center text-sm ${titleClassName}`}>{img?.name}</h5>
            )}
          </div>
        ))}
      </Slider>
    </>
  );
};
