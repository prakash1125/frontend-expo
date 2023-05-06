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
    "Sports", "in-play", "ipl-cup", "Indian Casino", "Live casino", "Slots"
]

export const liveScoreButton =
    [
        { icon: MdOutlineSportsSoccer, tabName: "Sports" },
        { icon: AiOutlinePlayCircle, tabName: "In-play" },
        { icon: TfiCup, tabName: "Ipl-cup" },
        { icon: TbCards, tabName: "Indian Casino" },
        { icon: MdOutlineCasino, tabName: "Live casino" }
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

export const carousel = [
    { img: "https://sportsexch.com/images/banner/slider09.png" },
    { img: "https://sportsexch.com/images/banner/slider01.png" },
    { img: "https://sportsexch.com/images/banner/slider02.png" },
    { img: "https://sportsexch.com/images/banner/slider03.png" },
    { img: "https://sportsexch.com/images/banner/slider04.png" },
    { img: "https://sportsexch.com/images/banner/slider05.png" },
    { img: "https://sportsexch.com/images/banner/slider06.png" },
    { img: "https://sportsexch.com/images/banner/slider07.png" },
    { img: "https://sportsexch.com/images/banner/slider08.png" },
]