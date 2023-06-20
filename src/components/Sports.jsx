<<<<<<< HEAD
import React, { useEffect, useState, useRef } from "react";
=======
import React, { useState } from "react";
>>>>>>> cf3a5b3ced196397c236e7f53c6f51b7d9ff9eec
import { Tab } from "@headlessui/react";
import MarketDataCard from "./MarketDataCard";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Sports = ({ scrollToTop }) => {

  // ==================================CALLING THE API DATA======================================

  let globalStateData = useSelector((state) => state.GlobalSportData);

  let sportsArray = globalStateData?.globalSportData;
  let leaguesArray = sportsArray?.map((i) => i?.leagues);
  let eventsArray = leaguesArray?.map((i) => i?.map((j) => j?.events));

  // ============================================================================================

  const [categoryId, setCategoryId] = useState(0);

  const breakpoints = {
    // Define breakpoints based on your design requirements
    sm: 300, // Small screens (e.g., smartphones)
    md: 768, // Medium screens (e.g., tablets)
    lg: 1024, // Large screens (e.g., laptops, desktops)
    xl: 1280, // Extra-large screens (e.g., large desktops, wide screens)
  };

  const slidesPerView = {
    sm: 4, // Show 1 slide on small screens
    md: 10, // Show 2 slides on medium screens
    lg: 6, // Show 3 slides on large screens
    xl: 10, // Show 4 slides on extra-large screens
  };


  return (
    <div className="w-full sm:px-0 mb-16 ">
      <Tab.Group>
        <Swiper
          spaceBetween={5}
          breakpoints={{
            // Define breakpoints and number of slides per view
            [breakpoints.sm]: {
              slidesPerView: slidesPerView.sm,
            },
            [breakpoints.md]: {
              slidesPerView: slidesPerView.md,
            },
            [breakpoints.lg]: {
              slidesPerView: slidesPerView.lg,
            },
            [breakpoints.xl]: {
              slidesPerView: slidesPerView.xl,
            },
          }}
        >
          <Tab.List className="flex  ">
            {sportsArray?.map((category, index) => (
              <SwiperSlide>
                <Tab
                  key={category.sportSlugName}
                  onClick={() => setCategoryId(index)}
                  className={({ selected }) =>
                    classNames(
                      ` h-[52px] justify-center text-center rounded-md text-xs w-full  font-semibold 
                  ${selected
                        ? "bg-skin-imgbg  font-semibold duration-200  "
                        : "text-skin-white bg-skin-nav  hover:bg-skin-hovercolor hover:text-skin-white hover:duration-200"
                      }
                `
                    )
                  }
                >
                  <img
                    alt="profil"
                    src={require(`../assets/images/sidemenu/${category.sportSlugName}.png`)}
                    className={`mx-auto ${categoryId !== index && "invert"
                      } object-cover  w-5 sidebar `}
                  ></img>
                  <div className=" inline-block overflow-x-hidden w-16  text-[11px] whitespace-nowrap ">
                    {category?.sportName}
                  </div>
                </Tab>
              </SwiperSlide>
            ))}
          </Tab.List>
        </Swiper>
        <Tab.Panels className="mt-2">
          {sportsArray?.map((posts, idx) => (
            <Tab.Panel>
              <ul key={idx}>
                {posts?.leagues?.map((post) => (
                  <li key={post.id} className="relative ">
                    <MarketDataCard league={post} />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
<<<<<<< HEAD
      <Footer scrollToTop={scrollToTop}/>
=======
  
>>>>>>> cf3a5b3ced196397c236e7f53c6f51b7d9ff9eec
    </div>
  );
};
