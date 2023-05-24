import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Slider from "react-slick";
import { Sliders } from "./../components/common/Slider";

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
    {
      id: 1,
      name: "teen patti",
      link: "https://sportsexch.com/images/live-casino/poster/slider05.png",
    },
    {
      id: 2,
      name: "teen patti",
      link: "https://sportsexch.com/images/live-casino/poster/slider06.png",
    },
    {
      id: 3,
      name: "teen patti",
      link: "https://sportsexch.com/images/live-casino/poster/slider04.png",
    },
    {
      id: 4,
      name: "teen patti",
      link: "https://sportsexch.com/images/live-casino/poster/slider02.png",
    },
    {
      id: 5,
      name: "teen patti",
      link: "https://sportsexch.com/images/live-casino/poster/slider03.png",
    }
  ];

  const slidertwo = [
    {
      id: 1,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_asgardian_stones/thumb.jpg",
    },
    {
      id: 2,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_blood_suckers/thumb.jpg",
    },
    {
      id: 3,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_butterfly_staxx/thumb.jpg",
    },
    {
      id: 4,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_codex_of_fortune/thumb.jpg",
    },
    {
      id: 5,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_dark_king_forbidden_riches/thumb.jpg",
    },
    {
      id: 6,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_dazzle_me/thumb.jpg",
    },
    {
      id: 7,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_dead_or_alive/thumb.jpg",
    },
    {
      id: 8,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_double_stacks/thumb.jpg",
    },
    {
      id: 9,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_elements_the_awakening/thumb.jpg",
    },
    {
      id: 10,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_fruit_blaze/thumb.jpg",
    },
    {
      id: 11,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_fruit_shop_christmas_edition/thumb.jpg",
    },
    {
      id: 13,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_gonzos_quest/thumb.jpg",
    },
    {
      id: 14,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_gordon_ramsay_hells_kitchen/thumb.jpg",
    },
    {
      id: 15,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_hotline/thumb.jpg",
    },
    {
      id: 16,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_jack_hammer/thumb.jpg",
    },
    {
      id: 17,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_joker_pro/thumb.jpg",
    },
    {
      id: 18,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_jumanji/thumb.jpg",
    },
    {
      id: 19,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_narcos/thumb.jpg",
    },
    {
      id: 20,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_space_wars/thumb.jpg",
    },
    {
      id: 21,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_victorious/thumb.jpg",
    },
    {
      id: 22,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_fruit_spin/thumb.jpg",
    },
    {
      id: 23,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_cornelius/thumb.jpg",
    },
    {
      id: 24,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_superstars/thumb.jpg",
    },
    {
      id: 25,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_wonders_of_christmas/thumb.jpg",
    },
    {
      id: 26,
      name: "teen patti",
      link: "https://luckmedia.link/ntn_cupcakes/thumb.jpg",
    },
  ];

  const sliderone = [
    {
      id: 1,
      name: "Asgardian Stones",
      link: "https://luckmedia.link/ntn_asgardian_stones/thumb.jpg",
    },
    {
      id: 2,
      name: "Blood Suckers",
      link: "https://luckmedia.link/ntn_blood_suckers/thumb.jpg",
    },
    {
      id: 3,
      name: "Butterfly Staxx",
      link: "https://luckmedia.link/ntn_butterfly_staxx/thumb.jpg",
    },
    {
      id: 4,
      name: "Codex of Fortune",
      link: "https://luckmedia.link/ntn_codex_of_fortune/thumb.jpg",
    },
    {
      id: 5,
      name: "Dark King: Forbidden Riches",
      link: "https://luckmedia.link/ntn_dark_king_forbidden_riches/thumb.jpg",
    },
    {
      id: 6,
      name: "Dazzle Me",
      link: "https://luckmedia.link/ntn_dazzle_me/thumb.jpg",
    },
    {
      id: 7,
      name: "Dead or Alive",
      link: "https://luckmedia.link/ntn_dead_or_alive/thumb.jpg",
    },
    {
      id: 8,
      name: "Double Stacks",
      link: "https://luckmedia.link/ntn_double_stacks/thumb.jpg",
    },
    {
      id: 9,
      name: "Elements: The Awakening",
      link: "https://luckmedia.link/ntn_elements_the_awakening/thumb.jpg",
    },
    {
      id: 10,
      name: "Fruit Blaze",
      link: "https://luckmedia.link/ntn_fruit_blaze/thumb.jpg",
    },
    {
      id: 11,
      name: "Fruit Shop Christmas Edition",
      link: "https://luckmedia.link/ntn_fruit_shop_christmas_edition/thumb.jpg",
    },
    {
      id: 13,
      name: "Gonzo's Quest",
      link: "https://luckmedia.link/ntn_gonzos_quest/thumb.jpg",
    },
    {
      id: 14,
      name: "Gordon Ramsay Hell's Kitchen",
      link: "https://luckmedia.link/ntn_gordon_ramsay_hells_kitchen/thumb.jpg",
    },
    {
      id: 15,
      name: "Hotline",
      link: "https://luckmedia.link/ntn_hotline/thumb.jpg",
    },
    {
      id: 16,
      name: "Jack Hammer",
      link: "https://luckmedia.link/ntn_jack_hammer/thumb.jpg",
    },
    {
      id: 17,
      name: "Joker Pro",
      link: "https://luckmedia.link/ntn_joker_pro/thumb.jpg",
    },
    {
      id: 18,
      name: "Jumanji",
      link: "https://luckmedia.link/ntn_jumanji/thumb.jpg",
    },
    {
      id: 19,
      name: "Narcos",
      link: "https://luckmedia.link/ntn_narcos/thumb.jpg",
    },
    {
      id: 20,
      name: "Space Wars",
      link: "https://luckmedia.link/ntn_space_wars/thumb.jpg",
    },
    {
      id: 21,
      name: "Victorius",
      link: "https://luckmedia.link/ntn_victorious/thumb.jpg",
    },
    {
      id: 22,
      name: "Fruit Spin",
      link: "https://luckmedia.link/ntn_fruit_spin/thumb.jpg",
    },
    {
      id: 23,
      name: "Cornelius",
      link: "https://luckmedia.link/ntn_cornelius/thumb.jpg",
    },
    {
      id: 24,
      name: "Superstars",
      link: "https://luckmedia.link/ntn_superstars/thumb.jpg",
    },
    {
      id: 25,
      name: "Wonders of Christmas",
      link: "https://luckmedia.link/ntn_wonders_of_christmas/thumb.jpg",
    },
    {
      id: 26,
      name: "Cupcakes",
      link: "https://luckmedia.link/ntn_cupcakes/thumb.jpg",
    },
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
      <Sliders dataArray={images} settings={settings} imgClassName={`p-2`}
          parentClassName={``} titleClassName ={``} />
      {/* <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="">
            <img
              src={img}
              className="w-full p-2 rounded-2xl"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider> */}

      <Tab.Group>
        
        <Tab.List className="flex gap-2 rounded-xl bg-blue-900/20 p-1 scroll-x">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-md py-2 px-2 text-sm font-medium leading-5 ",
                  " ring-opacity-60 ring-offset-2 max-w-[100px]",
                  selected
                    ? "bg-white"
                    : "text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
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
                    <div class="w-full p-4 md:p-4 text-white text-sm font-bold flex flex-col items-center">
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
      <div className="mt-4">
        <h1 class=" text-base font-medium pb-1 px-1 mt-4 text-white">
          NetEnt (25)
        </h1>

        <Sliders
          dataArray={sliderone}
          settings={settingsone}
          imgClassName={`h-18 w-48`}
          parentClassName={`pr-2`}
          titleClassName ={``}
          title={true}
        />
        {/* <Slider {...settingsone}>
          {sliderone.map((slider_one, index) => (
            <div key={index} className=" pr-2">
              <img
                src={slider_one?.link}
                className="  h-18 w-48 rounded-1xl"
                alt={`Slide ${index + 1}`}
              />
              <h5 className="text-white text-center text-sm">
                {slider_one?.name}
              </h5>
            </div>
          ))}
        </Slider> */}
      </div>

      <h2 class="text-base font-medium pb-1 px-1 mt-4 text-white">Red Tiger (25)</h2>
      {/* <Slider {...settingstwo}>
        {slidertwo.map((slider_two, index) => (
          <div key={index} className="">
            <img
              src={slider_two?.link}
              className=" p-4 m-0.5 mt-1 h-18 w-48 rounded-1xl"
              alt={`Slide ${index + 1}`}
            />
            <h6 className="text-white text-center text-sm pd-2">
              {slider_two?.name}
            </h6>
          </div>
        ))}q
      </Slider> */}

      <Sliders
          dataArray={slidertwo}
          settings={settingstwo}
          imgClassName={`h-18 w-48`}
          parentClassName={`pr-2`}
          titleClassName ={``}
          title={true}
        />

      <div class="container mx-auto py-5 flex">
        <div className="text-white text-center mx-auto">
          {/* <p className="font-bold bg-gray-400">Back to Top</p> */}
          <p className="font-bold bg-gray-400 w-32">Back</p>
        </div>

        <li className="">
          <div className="text-white text-left font-weight: 500 font-size: 18px line-height: 20px letter-spacing: normal margin: 0 0 16px font-semibold py-5 color: #f9fafa">
            Info
          </div>
          <div className="text-white text-left py-2">Privacy Policy</div>
          <div className="text-white text-left py-2">Terms & Conditions</div>
          <div className="text-white text-left py-2">
            Gambling can be addictive
          </div>
        </li>

        <li>
          <div className="text-white py-2 text-right font-semibold">
            Get Started
          </div>
          <div className="text-white py-2 text-right">About Us</div>
          <div className="text-white py-2 text-right">
            KYC and Privacy Policy
          </div>
        </li>

        <li>
          <span className="text-white py-8 font-semibold">Sportsexch</span>

          <span className="text-white py-2">Download our mobile</span>
        </li>
      </div>
    </div>
  );
};
