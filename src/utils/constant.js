import { BiCricketBall } from "react-icons/bi";
import { GiSoccerBall } from "react-icons/gi";
import { BiTennisBall } from "react-icons/bi";
import { FaGolfBall } from "react-icons/fa";
import { MdSportsRugby } from "react-icons/md";
import { GiBoxingGlove } from "react-icons/gi";
import { GiBasketballBasket } from "react-icons/gi";

import { MdOutlineSportsSoccer } from "react-icons/md";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { TfiCup } from "react-icons/tfi";
import { TbCards } from "react-icons/tb";
import { MdOutlineCasino } from "react-icons/md";

export const sidebarMenu = [
    { icon: BiCricketBall, gameName: "Cricket", subMenu: ["Indian Premier League"] },
    { icon: GiSoccerBall, gameName: "Soccer", subMenu: ["English Championship", "Italian Serie B", "Spanish Segunda Division", "Greek Super League"] },
    { icon: BiTennisBall, gameName: "Tennis", subMenu: ["Prague Challenger 2023", "ATP Mdrid 2023"] },
    { icon: FaGolfBall, gameName: "Golf", subMenu: [""] },
    { icon: MdSportsRugby, gameName: "Rugby", subMenu: [""] },
    { icon: GiBoxingGlove, gameName: "Boxing", subMenu: [""] },
    { icon: GiBasketballBasket, gameName: "Basketball", subMenu: [""] }
]

export const navMenu = [
    "sports", "in-play", "ipl-cup", "Indian Casino", "Live casino", "Slots"
]

export const liveScoreButton =
    [
        { icon: MdOutlineSportsSoccer, tabName: "Sports" },
        { icon: AiOutlinePlayCircle, tabName: "In-play" },
        { icon: TfiCup, tabName: "Ipl-cup" },
        { icon: TbCards, tabName: "Indian Casino" },
        { icon: MdOutlineCasino, tabName: "Live casino" }
    ]

export const liveSportsNameBtn =
    [
        { icon: MdOutlineSportsSoccer, tabName: "Cricket" },
        { icon: AiOutlinePlayCircle, tabName: "Soccer" },
        { icon: TfiCup, tabName: "Tennis" },
        { icon: TbCards, tabName: "Golf" },
        { icon: MdOutlineCasino, tabName: "Boxing" },
        { icon: MdOutlineCasino, tabName: "Basketball" },
        { icon: MdOutlineCasino, tabName: "Horse Racing" },
        { icon: MdOutlineCasino, tabName: "Esports" },
    ]

export const liveScores = [
    {
        tabName: "Winner",
        placeScores: [
            {
                placeName: "Gujarat",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
            {
                placeName: "Mumbai",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
        ]
    },
    {
        tabName: "Winner",
        placeScores: [
            {
                placeName: "Gujarat",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
            {
                placeName: "Mumbai",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
        ]
    }
]

export const inPlayLiveData = [

]

export const IplTabBtn = [
    {  tabName: "All" },
    {  tabName: "Match Odd" },
    {  tabName: "Bookmarked" },
    {  tabName: "Fancy" },
]

export const IplLiveData = [
    {
        tabName: "Winner",
        placeScores: [
            {
                icon: MdOutlineSportsSoccer,
                placeNameTop: "Gujarat Titans",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
            {
                icon: MdOutlineSportsSoccer,
                placeNameTop: "Mumbai Indians",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
            {
                icon: MdOutlineSportsSoccer,
                placeNameTop: "Kolkata Knight Riders",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
            {
                icon: MdOutlineSportsSoccer,
                placeNameTop: "Chennai Super Kings",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
            {
                icon: MdOutlineSportsSoccer,
                placeNameTop: "Rajasthan Royals",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
            {
                icon: MdOutlineSportsSoccer,
                placeNameTop: "Delhi Capitals",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
            {
                icon: MdOutlineSportsSoccer,
                placeNameTop: "Lucknow Super Giants",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
            {
                icon: MdOutlineSportsSoccer,
                placeNameTop: "Royal Challengers Bangalore",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
            {
                icon: MdOutlineSportsSoccer,
                placeNameTop: "Gujrat Titans",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
        ]

    },
    {
        tabName: "Bookmarked",
        placeScores: [
            {
                icon: MdOutlineSportsSoccer,
                placeNameTop: "Gujarat Titans",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
            {
                icon: MdOutlineSportsSoccer,
                placeNameTop: "Mumbai Indians",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
            {
                icon: MdOutlineSportsSoccer,
                placeNameTop: "Gujarat Titans",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },

        ]

    },
]


export const sportsLiveData = [
    {
        tabName: "One Day International",
        placeScores: [
            {
                icon: MdOutlineSportsSoccer,
                placeNameTop: "Ireland",
                placeNameBottom: "Bangladesh",
                time: "Today 19:30",
                leagueName: [
                    { name: "F 45" },
                    { name: "B" }
                ],
                values: [
                    { center: 1.73 },
                    { center: 1.73 },
                    { center: 1.73 },
                    { center: "--" },
                    { center: "--" },
                    { center: 1.73 }
                ]
            },
        ]
    },
    {
        tabName: "Indian Premier League",
        placeScores: [
            {
                placeNameTop: "Mumbai Indians",
                placeNameBottom: "Royal Challengers Bangalore",
                time: "28 May 19:30",
                leagueName: [
                    { name: "F 2" },
                    { name: "B" }
                ],
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
            {
                placeNameTop: "Indian Premire",
                placeNameBottom: "League",
                time: "Today 19:30",
                leagueName: [
                    { name: "F 45" },
                    { name: "B" }
                ],
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
        ]
    }
]

export const carousel = [
    { img: "https://sportsexch.com/images/banner/slider01.png" },
    { img: "https://sportsexch.com/images/banner/slider02.png" },
    { img: "https://sportsexch.com/images/banner/slider03.png" },
    { img: "https://sportsexch.com/images/banner/slider04.png" },
    { img: "https://sportsexch.com/images/banner/slider05.png" },
    { img: "https://sportsexch.com/images/banner/slider06.png" },
    { img: "https://sportsexch.com/images/banner/slider07.png" },
    { img: "https://sportsexch.com/images/banner/slider08.png" },
]