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
    { icon: GiBasketballBasket, gameName: "Basketball", subMenu: [""] },
    { icon: GiBasketballBasket, gameName: "Basketball", subMenu: [""] },
]

export const navMenu = [
    { icon: MdOutlineSportsSoccer, tabName: "sports" },
    { icon: MdOutlineSportsSoccer, tabName: "in-play" },
    { icon: MdOutlineSportsSoccer, tabName: "ipl-cup" },
    { icon: MdOutlineSportsSoccer, tabName: "indian-casino" },
    { icon: MdOutlineSportsSoccer, tabName: "live-casino" },
    { icon: MdOutlineSportsSoccer, tabName: "Slots" }
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
    { tabName: "All" },
    { tabName: "Match Odd" },
    { tabName: "Bookmarked" },
    { tabName: "Fancy" },
]

export const PopularEvents = [
    {
        placeScores: [
            {
                icon: MdOutlineSportsSoccer,
                placeNameTop: "Lucknow Super Gaints",
                placeNameBottom: "Mumbai Indians",
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
                isLive: "LIVE",
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

export const IndianCasino = [
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/56767.jpg", name: "Teenpatti one day" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/56768.jpg", name: "Teenpatti T20" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/56967.jpg", name: "32 Card Casino" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/56968.jpg", name: "Hi Low" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67564.jpg", name: "Poker" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67564.jpg", name: "Poker" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67564.jpg", name: "Poker" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67564.jpg", name: "Poker" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67564.jpg", name: "Poker" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67564.jpg", name: "Poker" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67564.jpg", name: "Poker" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67564.jpg", name: "Poker" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67564.jpg", name: "Poker" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67564.jpg", name: "Poker" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67564.jpg", name: "Poker" },
]
export const LiveCasino = [
    {
        title: "Top Indian Games (14)",
        gamePlace: "All Top India",
        imageSet: [
            { img: "https://luckmedia.link/ezg_lucky_7/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_32_cards/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_dragon_tiger/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_teen_patti_3_card/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_bet_on_teen_patti/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_namaste_roulette/thumb.jpg", name: "Andha Bahar" },
        ]
    },
    {
        title: "Top Indian Games (14)",
        gamePlace: "All Top India",
        imageSet: [
            { img: "https://luckmedia.link/ezg_lucky_7/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_32_cards/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_dragon_tiger/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_namaste_roulette/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_bet_on_teen_patti/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_teen_patti_3_card/thumb.jpg", name: "Andha Bahar" },
        ]
    },
    {
        title: "Top Indian Games (14)",
        gamePlace: "All Top India",
        imageSet: [
            { img: "https://luckmedia.link/ezg_32_cards/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_lucky_7/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_teen_patti_3_card/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_dragon_tiger/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_namaste_roulette/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_bet_on_teen_patti/thumb.jpg", name: "Andha Bahar" },
        ]
    },
    {
        title: "Top Indian Games (14)",
        gamePlace: "All Top India",
        imageSet: [
            { img: "https://luckmedia.link/ezg_dragon_tiger/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_32_cards/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_teen_patti_3_card/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_bet_on_teen_patti/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_namaste_roulette/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_lucky_7/thumb.jpg", name: "Andha Bahar" },
        ]
    },
    {
        title: "Top Indian Games (14)",
        gamePlace: "All Top India",
        imageSet: [
            { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_32_cards/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_teen_patti_3_card/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_lucky_7/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_dragon_tiger/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_bet_on_teen_patti/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_namaste_roulette/thumb.jpg", name: "Andha Bahar" },
        ]
    },
    {
        title: "Top Indian Games (14)",
        gamePlace: "All Top India",
        imageSet: [
            { img: "https://luckmedia.link/ezg_namaste_roulette/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_32_cards/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_lucky_7/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_teen_patti_3_card/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_dragon_tiger/thumb.jpg", name: "Andha Bahar" },
            { img: "https://luckmedia.link/ezg_bet_on_teen_patti/thumb.jpg", name: "Andha Bahar" },
        ]
    },
    
]

export const LiveCasinoBtn = [
    { icon: MdOutlineSportsSoccer, tabName: "All" },
    { icon: AiOutlinePlayCircle, tabName: "Top Indian Game" },
    { icon: TfiCup, tabName: "Live Lobby" },
    { icon: TbCards, tabName: "Crash Games" },
    { icon: MdOutlineCasino, tabName: "Dragon Tiger" },
    { icon: MdOutlineCasino, tabName: "Game Show" },
    { icon: MdOutlineCasino, tabName: "Live Baccarat" },
    { icon: MdOutlineCasino, tabName: "Live Blackjack" },
    { icon: MdOutlineCasino, tabName: "Live Dealer" },
]


export const SlotsBtn = [
    { icon: MdOutlineSportsSoccer, tabName: "All" },
    { icon: MdOutlineSportsSoccer, tabName: "NetEnt" },
    { icon: MdOutlineSportsSoccer, tabName: "Red Tiger" },
]

// export const Slots = [
//     {
//         title: "Top Indian Games (14)",
//         gamePlace: "All NetEnt",
//         imageSet: [
//             { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
//             { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
//             { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
//             { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
//             { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
//             { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
//             { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
//         ]
//     },
//     {
//         title: "Top Indian Games (14)",
//         gamePlace: "All Red Tiger",
//         imageSet: [
//             { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
//             { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
//             { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
//             { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
//             { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
//             { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
//             { img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg", name: "Andha Bahar" },
//         ]
//     },
// ]

export const CasinoCarousels = [
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg" },
    { img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg" },
]

export const RightColumnImgs = [
    { img: "https://luckmedia.link/evo_crazy_time/thumb.jpg" },
    { img: "https://luckmedia.link/evo_crazy_time/thumb.jpg" },
    { img: "https://luckmedia.link/evo_crazy_time/thumb.jpg" },
    { img: "https://luckmedia.link/evo_crazy_time/thumb.jpg" },
    { img: "https://luckmedia.link/evo_crazy_time/thumb.jpg" },
]

export const FooterMenu = [
    { title: "Info", subMenu: ["Privacy Policy", "Terms and Condition", "Gambling can be addictive"] },
    { title: "Get Started", subMenu: ["About Us", "KYC and Privacy Policy"] },
    { title: "Sportsexch", subMenu: ["Download our mobile app"] },
]