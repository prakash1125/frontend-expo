import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import MarketDataCard from "./MarketDataCard"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Sports = () => {
  
  let [categories] = useState({
    Cricket: [
        {
            id: 1,
            title: "One Day Internationals",
            team1: "Ireland",
            team2: "Bangladesh",
            
          },
          {
            id: 2,
            title: "T20 Internationals",
            team1: "Australia",
            team2: "India",
          },
          {
            id: 3,
            title: "Test Matches",
            team1: "England",
            team2: "New Zealand",
          },
          {
            id: 4,
            title: "ODI Series",
            team1: "Pakistan",
            team2: "West Indies",
          },
          {
            id: 5,
            title: "T20 Series",
            team1: "South Africa",
            team2: "Sri Lanka",
          },
    ],
    Football: [
      {
        id: 1,
        title: "One Day Internationals",
        team1: "Ireland",
        team2: "Bhangladesh",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 3,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 4,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    BasketBall: [
      {
        id: 1,
        title: "One Day Internationals",
        team1: "Ireland",
        team2: "Bhangladesh",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    BaseBall: [
      {
        id: 1,
        title: "One Day Internationals",
        team1: "Ireland",
        team2: "Bhangladesh",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
    Popular2: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending4: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });
  return (
    <div className="w-full sm:px-0 mb-16 ">
      <Tab.Group>
        <Tab.List className="flex gap-1 rounded-xl scroll-x p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-md p-1 py-2 text-xs font-medium leading-5 ",
                  "  ",
                  selected
                    ? "bg-[#FFF] "
                    : "text-[#CCD1D5] bg-[#22262a] hover:bg-[#393C40] hover:text-white"
                )
              }
            >
              <img alt="profil" src="https://sportsexch.com/images/icons/cricket.png" className="mx-auto bg-[#CCD1D5] rounded-full object-cover h-5 w-5 "></img>
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
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
                    {/* <div className="rounded-md shadow-md w-full bg-[#22262a]">
                      <div className="flex w-full items-center bg-[#32383e] rounded-t-md justify-between border-b p-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center text-sm text-[#f9fafa] font-bold ">
                            {post.title}
                          </div>
                        </div>
                        <div className="flex items-center space-x-8 px-6">
                          <div className="text-sm font-bold text-[#f9fafa]">2</div>
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
                    </div> */}
                    <MarketDataCard />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
