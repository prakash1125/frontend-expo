import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const InPlay = () => {
  const [categoryId, setCategoryId] = useState(0);
  // ==================================CALLING THE API DATA======================================

  let globalStateData = useSelector((state) => state.GlobalSportData);

  let sportsArray = globalStateData?.globalSportData;
  // ============================================================================================

  const { i18n, t } = useTranslation();

  return (
    <div className="w-full sm:px-0 mb-16">
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
              <div className=" inline-block overflow-x-hidden w-16  whitespace-nowrap ">
                {category?.sportName}
              </div>
            </Tab>
          ))}
        </Tab.List>
        <div className="mt-2 p-2 text-sm rounded-md w-full bg-skin-nav text-skin-secondary font-semibold ">
          {t("NO_MATCH")} {" "}
          <span className="text-green-600"> {t("IN_PLAY")} </span>
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
