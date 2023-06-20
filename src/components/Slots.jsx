import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Slots = ({scrollToTop}) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const settingsone = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const settingstwo = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    "https://sportsexch.com/images/live-casino/poster/slider05.png",
    "https://sportsexch.com/images/live-casino/poster/slider06.png",
    "https://sportsexch.com/images/live-casino/poster/slider04.png",
    "https://sportsexch.com/images/live-casino/poster/slider02.png",
    "https://sportsexch.com/images/live-casino/poster/slider03.png",
  ];

  const sliderone = [
    "https://luckmedia.link/ntn_asgardian_stones/thumb.jpg",
    "https://luckmedia.link/ntn_blood_suckers/thumb.jpg",
    "https://luckmedia.link/ntn_butterfly_staxx/thumb.jpg",
    "https://luckmedia.link/ntn_codex_of_fortune/thumb.jpg",
    "https://luckmedia.link/ntn_dark_king_forbidden_riches/thumb.jpg",
    "https://luckmedia.link/ntn_dazzle_me/thumb.jpg",
    "https://luckmedia.link/ntn_dead_or_alive/thumb.jpg",
    "https://luckmedia.link/ntn_double_stacks/thumb.jpg",
    "https://luckmedia.link/ntn_elements_the_awakening/thumb.jpg",
    "https://luckmedia.link/ntn_fruit_blaze/thumb.jpg",
    "https://luckmedia.link/ntn_fruit_shop_christmas_edition/thumb.jpg",
    "https://luckmedia.link/ntn_gonzos_quest/thumb.jpg",
    "https://luckmedia.link/ntn_gordon_ramsay_hells_kitchen/thumb.jpg",
    "https://luckmedia.link/ntn_hotline/thumb.jpg",
    "https://luckmedia.link/ntn_jack_hammer/thumb.jpg",
    "https://luckmedia.link/ntn_joker_pro/thumb.jpg",
    "https://luckmedia.link/ntn_jumanji/thumb.jpg",
    "https://luckmedia.link/ntn_narcos/thumb.jpg",
    "https://luckmedia.link/ntn_space_wars/thumb.jpg",
    "https://luckmedia.link/ntn_victorious/thumb.jpg",
    "https://luckmedia.link/ntn_fruit_spin/thumb.jpg",
    "https://luckmedia.link/ntn_cornelius/thumb.jpg",
    "https://luckmedia.link/ntn_superstars/thumb.jpg",
    "https://luckmedia.link/ntn_wonders_of_christmas/thumb.jpg",
    "https://luckmedia.link/ntn_cupcakes/thumb.jpg",
  ];

  const slidertwo = [
    "https://luckmedia.link/ntn_asgardian_stones/thumb.jpg",
    "https://luckmedia.link/ntn_blood_suckers/thumb.jpg",
    "https://luckmedia.link/ntn_butterfly_staxx/thumb.jpg",
    "https://luckmedia.link/ntn_codex_of_fortune/thumb.jpg",
    "https://luckmedia.link/ntn_dark_king_forbidden_riches/thumb.jpg",
    "https://luckmedia.link/ntn_dazzle_me/thumb.jpg",
    "https://luckmedia.link/ntn_dead_or_alive/thumb.jpg",
    "https://luckmedia.link/ntn_double_stacks/thumb.jpg",
    "https://luckmedia.link/ntn_elements_the_awakening/thumb.jpg",
    "https://luckmedia.link/ntn_fruit_blaze/thumb.jpg",
    "https://luckmedia.link/ntn_fruit_shop_christmas_edition/thumb.jpg",
    "https://luckmedia.link/ntn_gonzos_quest/thumb.jpg",
    "https://luckmedia.link/ntn_gordon_ramsay_hells_kitchen/thumb.jpg",
    "https://luckmedia.link/ntn_hotline/thumb.jpg",
    "https://luckmedia.link/ntn_jack_hammer/thumb.jpg",
    "https://luckmedia.link/ntn_joker_pro/thumb.jpg",
    "https://luckmedia.link/ntn_jumanji/thumb.jpg",
    "https://luckmedia.link/ntn_narcos/thumb.jpg",
    "https://luckmedia.link/ntn_space_wars/thumb.jpg",
    "https://luckmedia.link/ntn_victorious/thumb.jpg",
    "https://luckmedia.link/ntn_fruit_spin/thumb.jpg",
    "https://luckmedia.link/ntn_cornelius/thumb.jpg",
    "https://luckmedia.link/ntn_superstars/thumb.jpg",
    "https://luckmedia.link/ntn_wonders_of_christmas/thumb.jpg",
    "https://luckmedia.link/ntn_cupcakes/thumb.jpg",
  ];

  let [categories] = useState({
    All: [
      {
        title: "Top Indian Games (14)",
        gamePlace: "All NetEnt",
        imageSet: [
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
        ],
      },
      {
        title: "Top Indian Games (14)",
        gamePlace: "All Red Tiger",
        imageSet: [
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
        ],
      },
    ],
    NetEnt: [
      {
        title: "Top Indian Games (14)",
        gamePlace: "All NetEnt",
        imageSet: [
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
        ],
      },
      {
        title: "Top Indian Games (14)",
        gamePlace: "All Red Tiger",
        imageSet: [
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
        ],
      },
      {
        title: "Top Indian Games (14)",
        gamePlace: "All Red Tiger",
        imageSet: [
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
          {
            img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
            name: "Andha Bahar",
          },
        ],
      },
    ],
  });

  const otherCarousel = {
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div>
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
      <Tab.Group>
        <Tab.List className="flex gap-2 rounded-xl  p-1 scroll-x">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-md py-2 px-2 text-sm font-medium leading-5 ",
                  " ring-opacity-60 ring-offset-2 max-w-[100px]",
                  selected
                    ? "bg-white "
                    : "text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <div className="image-tab-container">
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
                      <div className="slots-tab flex items-center justify-between mt-2 mb-0.5 text-[#fff]" key={index}>
                        <div className="slots-title text-xl text-left font-medium mb-0.5">
                          {post.title}
                        </div>
                        <div className="slots-gamePlace text-sm bg-[#22262a] cursor-pointer hover:bg-[#4c555e] px-5 py-3 my-2 rounded-md w-28">
                          <a className=" " href="#">
                            {truncate(post.gamePlace, 10)}
                          </a>
                        </div>
                      </div>

                      <Slider {...otherCarousel}>
                        {post.imageSet.map((image, index) => (
                          <div className="flex flex-col " key={index}>
                            <div className="casino-image mx-2">
                              <img
                                className="rounded"
                                src={image.img}
                                alt={`Slide ${index + 1}`}
                              />
                            </div>
                            <div className="casino-name text-[#fff] text-center">
                              {image.name}
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </>
                  );
                })}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>     

      <Footer scrollToTop={scrollToTop}/>
    </div>
  );
};
