import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import Footer from "./Footer";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Slots = () => {
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
    "https://luckmedia.link/ntn_cupcakes/thumb.jpg"
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
    "https://luckmedia.link/ntn_cupcakes/thumb.jpg"
  ];

  let [categories] = useState({
    All: [
      /*{
        id: 1,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 2,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 3,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 4,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 5,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 6,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },*/
    ],
    NetEnt: [
      /*{
        id: 1,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 2,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 3,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 4,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 5,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 6,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 7,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 8,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 9,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },*/
    ],
    RedTiger: [
    /*{
        id: 1,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 2,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 3,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 4,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },*/
    ],
  });



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
        <Tab.List className="flex gap-2 rounded-xl bg-transparent p-1 scroll-x">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-md py-2 px-2 text-sm font-medium leading-5 ",
                  " ring-opacity-60 ring-offset-2 max-w-[100px]",
                  selected
                    ? "bg-skin-imgbg "
                    : "text-skin-secondary bg-skin-cardhead hover:bg-skin-cardhead hover:text-skin-white "
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
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
              <div class="-m-1 flex flex-wrap md:-m-2">
                {posts.map((post) => (
                  <div class="flex  w-1/4 flex-wrap">
                    <div class="w-full p-4 md:p-4 text-skin-white  text-sm font-bold flex flex-col items-center">
                      <img
                        alt="gallery"
                        class="block h-full w-full rounded-lg object-cover object-center"
                        src={post.img}
                      />
                      {post.title}
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

      <Slider {...settingsone}>
        {sliderone.map((img, index) => (
          <div key={index} className="">
            <img
              src={img}
              className=" p-5 h-18 w-48 rounded-2xl"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>

      

      <Slider {...settingstwo}>
        {slidertwo.map((img, index) => (
          <div key={index} className="">
            <img
              src={img}
              className=" p-5 h-18 w-48 rounded-2xl"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>


    <Footer/>
    </div>
  );
};
