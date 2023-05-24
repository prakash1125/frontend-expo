import React from "react";
import Footer from "./Footer";
import Slider from "react-slick";

export const IndianCasino = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const images = [
    "https://sportsexch.com/images/live-casino/poster/poster03.png",
    "https://sportsexch.com/images/live-casino/poster/poster04.png",
    "https://sportsexch.com/images/live-casino/poster/poster01.png",
    "https://sportsexch.com/images/live-casino/poster/poster02.png",
  ];

  const IndianCasino = [
    {
      image: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/56767.jpg",
      name: " Teenpatti one day ",
    },
    {
      image: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/56767.jpg",
      name: " Teenpatti one day ",
    },
    {
      image: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/56767.jpg",
      name: " Teenpatti one day ",
    },
    {
      image: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/56767.jpg",
      name: " Teenpatti one day ",
    },
    {
      image: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/56767.jpg",
      name: " Teenpatti one day ",
    },
    {
      image: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/56767.jpg",
      name: " Teenpatti one day ",
    },
    {
      image: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/56767.jpg",
      name: " Teenpatti one day ",
    },
    {
      image: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/56767.jpg",
      name: " Teenpatti one day ",
    },
    {
      image: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/56767.jpg",
      name: " Teenpatti one day ",
    },
    {
      image: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/56767.jpg",
      name: " Teenpatti one day ",
    },
    {
      image: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/56767.jpg",
      name: " Teenpatti one day ",
    },
  ];

  return (
    <>
      <div className="">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="">
              <img
                src={img}
                className="w-full p-2 rounded-2xl"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div class="mx-auto py-2">
        <p className="text-lg font-semibold text-white px-2 py-4">
          Indian Casino
        </p>
        <div class="gap-4  -m-1 grid lg:grid-cols-5 md:grid-cols-3 xs:grid-cols-2 md:-m-2">
            {IndianCasino.map((element, index) => {
              return (
                <div class="flex flex-wrap">
                <div class="w-full gap-2 text-white text-sm font-bold flex flex-col items-center">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={element.image}
                  />
                  {element.name}
                </div>
          </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
};
