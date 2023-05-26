import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { MdOutlineSportsSoccer } from "react-icons/md";
import MarketDataCard from "./MarketDataCard";
import Footer from "./Footer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Sports = () => {
  const [categoryId, setCategoryId] = useState(0);
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

  const [visibleCategories, setVisibleCategories] = useState([]);

  useEffect(() => {
    const updateVisibleCategories = () => {
      const screenWidth = window.innerWidth;
      const maxVisibleTabs = screenWidth >= 480 ? 9999 : 4; // Show all tabs if screen width is greater than or equal to 480px

      const categoryKeys = Object.keys(categories);
      const visibleTabs = categoryKeys.slice(0, maxVisibleTabs);
      setVisibleCategories(visibleTabs);
    };

    updateVisibleCategories(); // Initial update

    window.addEventListener("resize", updateVisibleCategories); // Update visible categories on window resize

    return () => {
      window.removeEventListener("resize", updateVisibleCategories); // Cleanup event listener on component unmount
    };
  }, [categories]);
  const [expandedTables, setExpandedTables] = useState([]);

  const handleClick = (index) => {
    if (expandedTables.includes(index)) {
      setExpandedTables(expandedTables.filter((item) => item !== index));
    } else {
      setExpandedTables([...expandedTables, index]);
    }
  };
  const sportsLiveData = [
    {
      tabName: "One Day International",
      placeScores: [
        {
          icon: MdOutlineSportsSoccer,
          placeNameTop: "Ireland",
          placeNameBottom: "Bangladesh",
          time: "Today 19:30",
          isLive: "LIVE",
          leagueName: [{ name: "F 45" }, { name: "B" }],
          values: [
            { center: 1.73 },
            { center: 1.73 },
            { center: 1.73 },
            { center: "--" },
            { center: "--" },
            { center: 1.73 },
          ],
        },
      ],
    },
    {
      tabName: "Indian Premier League",
      placeScores: [
        {
          placeNameTop: "Mumbai Indians",
          placeNameBottom: "Royal Challengers Bangalore",
          time: "28 May 19:30",
          leagueName: [{ name: "F 2" }, { name: "B" }],
          values: [
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
          ],
        },
        {
          placeNameTop: "Indian Premire",
          placeNameBottom: "League",
          time: "Today 19:30",
          leagueName: [{ name: "F 45" }, { name: "B" }],
          values: [
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
            { top: 3.6, bottom: 100 },
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-full sm:px-0 mb-16 ">
      <Tab.Group>
        <Tab.List className="flex gap-1 scroll-x">
          {visibleCategories.map((category, index) => (
            <Tab
              key={category}
              onClick={() => setCategoryId(index)}
              className={({ selected }) =>
                classNames(
                  "w-[85px] h-[52px] rounded-md  flex-grow text-xs font-semibold leading-5",
                  selected
                    ? "bg-[#FFF]  font-semibold"
                    : "text-[#fff] bg-[#22262a] hover:bg-[#393C40] hover:text-white"
                )
              }
            >
              <img
                alt="profil"
                src="https://sportsexch.com/images/icons/cricket.png"
                className={`mx-auto ${
                  categoryId !== index && "invert"
                } object-cover w-5`}
              ></img>

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
              <div>
                {sportsLiveData.length > 0 ? (
                  <>
                    {/* <div className="btn-wrapper">
              {liveSportsNameBtn.map((element, index) => {
                return (
                  <Button
                    icon={<element.icon />}
                    key={index}
                    className="live-score"
                    name={element.tabName}
                  />
                );
              })}
            </div> */}

                    {sportsLiveData.map((data, index) => (
                      <div key={index} className="liveScore-table">
                        <button
                          type="button"
                          onClick={() => handleClick(index)}
                          className={`flex items-center w-full p-2 mt-3 text-gray-900 bg-[#32383e] transition duration-75 rounded-lg rounded-b-none group  dark:text-white dark:hover:bg-gray-700 ${
                            expandedTables.includes(index)
                              ? "bg-[#32383e] dark:bg-gray-700 text-[#000]"
                              : ""
                          }`}
                          aria-controls={`dropdown-example-${index}`}
                          data-collapse-toggle={`dropdown-example-${index}`}
                        >
                          <span className="flex-1 ml-3 text-left tab-name text-white active:text-[#000] whitespace-nowrap">
                            {data.tabName}
                          </span>
                          <svg
                            className={`w-6 h-6 ${
                              expandedTables.includes(index)
                                ? "rotate-animation"
                                : "remove-rotation-animation"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <div
                          className={`transition-transform bg-[#22262a] ${
                            expandedTables.includes(index)
                              ? "translate-x-0"
                              : "translate-x-full"
                          } ${
                            expandedTables.includes(index) ? "block" : "hidden"
                          }`}
                          id={`dropdown-example-${index}`}
                        >
                          {data.placeScores.map((element, index) => {
                            return (
                              <MarketDataCard key={index} element={element} />
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {/* <div className="btn-wrapper">
              {liveSportsNameBtn.map((element, index) => {
                return (
                  <Button
                    icon={<element.icon />}
                    key={index}
                    className="live-score"
                    name={element.tabName}
                  />
                );
              })}
            </div> */}
                    <div className="match-availability">
                      <p className="message">
                        There is a no match available at this time{" "}
                        {/* <span className="message-highlight">{tabname}</span>. */}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <Footer />
    </div>
  );
};
