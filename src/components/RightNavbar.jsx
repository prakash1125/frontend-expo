import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/images/casinomarina.jpg";
import img2 from "../assets/images/casinomarina.jpg";
import img3 from "../assets/images/casinomarina.jpg";
import img4 from "../assets/images/casinomarina.jpg";
import img5 from "../assets/images/casinomarina.jpg";
import { useLocation } from "react-router-dom";
import Events from "./Events";
import MyBets from "./MyBets";
import { useDispatch, useSelector } from "react-redux";
import { getBet } from "../redux/actions";
import { IoMdDesktop } from "react-icons/io";


export const RightNavbar = () => {

  let globalStateData = useSelector((state) => state?.GlobalSportData);
  const cricketData = globalStateData?.globalSportData;

  const dispatch = useDispatch();
  const location = useLocation();
  const myBets = useSelector((state) => state?.GetBet?.allBets);
  const Login = useSelector((state) => state?.Login?.login);
  const newBet = useSelector((state) => state?.PlaceBet);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [img1, img2, img3, img4, img5];

  const [isLive, setIsLive] = useState(false);

  const handleLiveTVClick = () => {
    setIsLive(!isLive);
  };
  //Fetching my Bets

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getBet());
    }
  }, [dispatch, Login, newBet]);

  return (
    <div className="overflow-y-auto px-2 pr-0 h-[95vh] justify-start flex scrollbar-hide overflow-x-hidden">
      <ul className="">
        {/* {!isIndianPremierLeague && (
        <div className=" mx-auto bg-skin-nav  rounded-md mt-2">
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
      )} */}

        {/* {location.pathname === "/indian-premier-league" && ( */}
        <>
          <div className=" mx-auto bg-skin-nav    rounded-md my-2">
            <div className="p-1 flex justify-center">
              <button
                onClick={handleLiveTVClick}
                className="flex justify-center items-center text-skin-white  text-sm bg-skin-cardhead  p-2.5 rounded-md w-full font-semibold"
              >
                <span className="flex items-center gap-2"><IoMdDesktop /> Live TV</span>
              </button>
            </div>

            {isLive && (
              <div className="live-matches px-3 py-2 ">
                <div className="bg-[#000] text-center pt-5 h-64 rounded">
                  <span className="text-2xl font-bold text-[#d3d3d3]">
                    Match Is Not live
                  </span>
                </div>
              </div>
            )}
          </div>

          {location?.state?.hasOwnProperty("eventId") && myBets ? (
            <MyBets bets={myBets} eventId={location?.state?.eventId} />
          ) : (
            <div className="w-[295px]  bg-skin-nav  rounded-md mt-2">
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
        </>
        {/* )} */}

        <div className=" mx-auto bg-skin-nav  rounded-md mt-2 mb-2">
          <div className="p-1 flex justify-center">
            <button className=" text-skin-white  text-sm bg-skin-cardhead  p-2.5 rounded-md w-full font-semibold">
              Popular Events
            </button>
          </div>
          {cricketData?.map((element) =>
            element?.leagues?.map(
              (j) => <Events league={j} />
            )
          )}
        </div>
      </ul>
    </div>
  );
};
