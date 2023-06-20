import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const InPlay = () => {
  const [categoryId, setCategoryId] = useState(0);
  // ==================================CALLING THE API DATA======================================

  let globalStateData = useSelector((state) => state.GlobalSportData);

  let sportsArray = globalStateData?.globalSportData;
  // ============================================================================================


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
        <Tab.List className="flex gap-1 scroll-x">

          {sportsArray?.map((category, index) => (
          <SwiperSlide>

            <Tab
              key={category}
              onClick={() => setCategoryId(index)}
              className={({ selected }) =>
                classNames(
                  " h-[52px] justify-center text-center rounded-md text-xs w-full font-semibold ",
                  "  ",
                  selected
                    ? "bg-skin-imgbg  font-semibold duration-200 "
                    : "text-skin-white bg-skin-nav  hover:bg-skin-hovercolor hover:text-skin-white"
                )
              }
            >
              <img
                alt="profil"
                src={require(`../assets/images/sidemenu/${category.sportSlugName}.png`)}
                className={`mx-auto ${
                  categoryId !== index && "invert"
                } object-cover  w-5 sidebar `}
              ></img>
              <div className=" inline-block overflow-x-hidden w-16 text-[11px] whitespace-nowrap ">
                {category?.sportName}
              </div>
            </Tab>
           </SwiperSlide> 
          ))}
        </Tab.List>
        </Swiper>
        <div className="mt-2 p-2 text-sm rounded-md w-full bg-skin-nav text-skin-secondary font-semibold ">
          There is a no match available at this time in{" "}
          <span className="text-green-600">InPlay.</span>
        </div>
        {/* <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(''
              //     // 'rounded-md w-full bg-white p-3',
              //     "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative pb-2"
                  >
                    <div className="rounded-md shadow-md w-full bg-skin-nav">
                      <div className="flex w-full items-center bg-[#32383e] rounded-t-md justify-between border-b p-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center text-sm text-skin-secondary font-bold ">
                            {post.title}
                          </div>
                        </div>
                        <div className="flex items-center space-x-8 px-6">
                          <div className="text-sm font-bold text-skin-secondary">2</div>
                        </div>
                      </div>

                      <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                        <div className="flex flex-col items-center justify-center w-10 h-10 mr-4 ">
                          <a href="#" className="relative block">
                            <img
                              alt="profil"
                              src="https://sportsexch.com/images/icons/cricket.png"
                              className="mx-auto object-cover rounded-full h-10 w-10 bg-white p-2"
                            />
                          </a>
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                          <div className="font-medium text-[#cfd4d8]">{post.team1}</div>
                          <div className="text-xs font-bold text-[#cfd4d8] ">
                            {post.team2}
                          </div>
                        </div>
                        <div className="text-xs font-bold text-[#cfd4d8] ">
                          6:00 AM
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels> */}
      </Tab.Group>
    </div>
  );
};
