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

export const RightNavbar = () => {
  const dispatch = useDispatch();
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
    dispatch(getBet());
  }, [dispatch, Login, newBet]);

  return (
    <div className="overflow-y-auto h-[100vh] px-2 scrollbar-hide overflow-x-hidden">
      <ul>
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
          <div className=" mx-auto bg-skin-nav  rounded-sm my-2">
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

          {myBets && myBets.length !== 0 ? (
            <MyBets bets={myBets} />
          ) : (""
            // <div className=" mx-auto bg-skin-nav  rounded-md mt-2">
            //   <div className="p-1 flex justify-center">
            //     <button className=" text-skin-white  bg-skin-cardhead  p-3 text-sm rounded-md w-full font-semibold">
            //       Live Casino Games
            //     </button>
            //   </div>

            //   <Slider {...settings}>
            //     {images.map((img, index) => (
            //       <div key={index} className="">
            //         <img
            //           src={img}
            //           className="w-full p-2 rounded-2xl"
            //           alt={`Slide ${index + 1}`}
            //         />
            //       </div>
            //     ))}
            //   </Slider>
            // </div>
          )}
        </>
        {/* )} */}

        <div className=" mx-auto bg-skin-nav  rounded-md mt-2 mb-2">
          <div className="p-1 flex justify-center">
            <button className=" text-skin-white  text-sm bg-skin-cardhead  p-3 rounded-md w-full font-semibold">
              Popular Events
            </button>
          </div>
          <Events />
          <Events />
          <Events />
          <Events />
          <Events />
        </div>
      </ul>
    </div>
  );
};
