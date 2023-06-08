import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/images/casinomarina.jpg";
import img2 from "../assets/images/casinomarina.jpg";
import img3 from "../assets/images/casinomarina.jpg";
import img4 from "../assets/images/casinomarina.jpg";
import img5 from "../assets/images/casinomarina.jpg";
import { useLocation } from "react-router-dom";
import Events from './Events'
import { useSelector } from "react-redux";

export const RightNavbar = () => {
    const location = useLocation();
    const isIndianPremierLeague = location.pathname === "/indian-premier-league";
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const images = [img1, img2, img3, img4, img5];

    const myBets = [
        {
            selection: "Mumbai Indians",
            odds: 10,
            stake: 500,
            pl: "4,500",
            time: "2023-05-19 02:30:50",
        },
    ];

    const [isLive, setIsLive] = useState(false);

    const handleLiveTVClick = () => {
        setIsLive(!isLive);
    };


    let globalStateData = useSelector((state) => state?.GlobalSportData);
    let sportsArray = globalStateData?.globalSportData;

    const cricketData = globalStateData?.globalSportData;
    console.log("asdfg", cricketData)



    return (
        <>
            {!isIndianPremierLeague && (
                <div class="max-w-xs mx-auto bg-skin-nav  rounded-md mt-2">
                    <div className="p-1 flex justify-center">
                        <button className=" text-skin-white  bg-skin-cardhead  p-3 text-sm rounded-md w-full font-semibold">
                            Live Casino Games
                        </button>
                    </div>

                    <Slider {...settings}>
                        {images.map((img, index) => (
                            <div key={index} className="">
                                <img
                                    src={img}
                                    className="w-full p-2 rounded-2xl"
                                    alt={`Slide ${index + 1}`}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            )}

            {location.pathname === "/indian-premier-league" && (
                <>
                    <div class="max-w-xs mx-auto bg-skin-nav  rounded-sm mt-2 mb-2">
                        <div className="p-1 flex justify-center">
                            <button
                                onClick={handleLiveTVClick}
                                className="flex justify-center items-center gap-2 text-skin-white  text-sm bg-skin-cardhead  p-3 rounded-md w-full font-semibold"
                            >
                                <span>Live TV</span>
                            </button>
                        </div>

                        {isLive && (
                            <div className="live-matches px-3 py-2 transition-transform duration-2000">
                                <div className="bg-[#000] text-center pt-5 h-64 w-full rounded">
                                    <span className="text-2xl font-extrabold text-[#d3d3d3]">
                                        Match Not live
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div class="max-w-xs mx-auto bg-skin-nav  rounded-sm mt-2 mb-2">
                        <div className="p-1 flex justify-center">
                            <button className="flex justify-center items-center gap-2 text-skin-white  text-sm bg-skin-cardhead  p-3 rounded-md w-full font-semibold">
                                <span>My Bets </span>
                                <span className="flex items-center justify-center bg-skin-imgbg text-skin-dark  rounded-full p-0.5 w-5 h-5 font-semibold text-xs">
                                    {myBets.length}{" "}
                                </span>
                            </button>
                        </div>

                        <div className="h-80">
                            <table class="overflow-scroll border-collapse w-full  text-center">
                                <thead>
                                    <tr>
                                        <th class=" text-xs font-bold text-center uppercase  px-2 py-2 text-skin-white ">
                                            SELECTION
                                        </th>
                                        <th class=" text-xs font-bold text-center uppercase px-2 py-2 text-skin-white ">
                                            ODD
                                        </th>
                                        <th class=" text-xs font-bold text-center uppercase px-2 py-2 text-skin-white ">
                                            STAKE
                                        </th>
                                        <th class=" text-xs font-bold text-center uppercase px-2 py-2 text-skin-white ">
                                            P/L
                                        </th>
                                        <th class=" text-xs font-bold text-center uppercase   px-2 py-2 text-skin-white ">
                                            TIME
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myBets.map((element, index) => (
                                        <tr className="border-t-[#f9fafa]" key={index}>
                                            <td class="bg-[#008efb] text-xs font-bold uppercase text-left px-2 py-1.5 text-skin-secondary ">
                                                {element.selection}
                                            </td>
                                            <td class="bg-[#008efb] text-xs font-bold uppercase text-left px-2 py-1.5 text-skin-secondary ">
                                                {element.odds}
                                            </td>
                                            <td class="bg-[#008efb] text-xs font-bold uppercase text-left px-2 py-1.5 text-skin-secondary ">
                                                {element.stake}
                                            </td>
                                            <td class="bg-[#008efb] text-xs font-bold uppercase text-left px-2 py-1.5 text-skin-secondary ">
                                                {element.pl}
                                            </td>
                                            <td class="bg-[#008efb] text-xs font-bold uppercase text-left px-2 py-1.5 text-skin-secondary ">
                                                {element.time}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}

            <div class="max-w-xs mx-auto bg-skin-nav  rounded-md mt-2 mb-2">
                <div className="p-1 flex justify-center">
                    <button className=" text-skin-white  text-sm bg-skin-cardhead  p-3 rounded-md w-full font-semibold">
                        Popular Events
                    </button>
                </div>

                {cricketData?.map((element) =>
                    element?.leagues?.map(
                        (j) => <Events league={j}/>
                    )
                )}





            </div>
        </>
    );
};
