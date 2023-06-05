import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import MarketDataCard from "./MarketDataCard"
import Footer from "./Footer";
import { useSelector } from "react-redux";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Sports = () => {

  // ==================================CALLING THE API DATA======================================

  let globalStateData = useSelector((state) => state.GlobalSportData);



  let sportsArray = globalStateData?.globalSportData;
  let leaguesArray = sportsArray?.map((i) => (i?.leagues))
  let eventsArray = leaguesArray?.map((i) => (i?.map((j) => (j?.events))))

  console.log("EventsArrayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", eventsArray);
  console.log("LeaguesArrayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", leaguesArray);
  console.log("SportsArrayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", sportsArray);

  // ============================================================================================


  const [categoryId, setCategoryId] = useState(0);

 
  return (
    <div className="w-full sm:px-0 mb-16 ">
      <Tab.Group>
        <Tab.List className="flex gap-1 scroll-x">
          {sportsArray?.map((category, index) => (
            <Tab
              key={category}
              onClick={() => setCategoryId(index)}
              className={({ selected }) =>
                classNames(
                  " h-[52px] justify-center text-center rounded-md text-xs min-w-[85px] font-semibold ",
                  "  ",
                  selected
                    ? "bg-skin-imgbg  font-semibold duration-300  "
                    : "text-skin-white bg-skin-nav  hover:bg-skin-hovercolor hover:text-skin-white hover:duration-300"
                )
              }
            >
              <img alt="profil" src={require(`../assets/images/sidemenu/${category.sportSlugName}.png`)} class={`mx-auto ${categoryId !== index && 'invert'} object-cover  w-5 sidebar `}></img>
              <div className=" inline-block overflow-x-hidden w-16  whitespace-nowrap ">
                {category?.sportName}
              </div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {sportsArray?.map((posts, idx) => (
            <Tab.Panel
              key={idx}
            >
              <ul>
                {posts?.leagues?.map((post) => (
                  <li
                    key={post.id}
                    className="relative pb-2"
                  >
                      < MarketDataCard league={post} />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <Footer />
    </div>
  );
};