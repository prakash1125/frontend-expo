import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
  const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings2 = {
    // dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
  };
  const images = [
    "https://sportsexch.com/images/banner/slider06.png",
    "https://sportsexch.com/images/banner/slider05.png",
    "https://sportsexch.com/images/banner/slider04.png",
    "https://sportsexch.com/images/banner/slider03.png",
    "https://sportsexch.com/images/banner/slider02.png",
  ];

  return (
    <div className="w-full sm:px-0 mb-4">
      <div>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="">
              <img
                src={img}
                className="w-full rounded-2xl"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex overflow-x-scroll w-full scroll-x">
        <div className="flex gap-2 rounded-xl bg-blue-900/20 p-1">
          <div
            className={
              "px-10 w-full rounded-md py-2 p-2 text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
            }
          >
            <div className="">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/cricket.png"
                  class="mx-auto object-cover rounded-full h-5 w-5 bg-white "
                />
              </a>
            </div>
            <p>Sports</p>
          </div>
          <div
            className={
              "px-10 w-full rounded-md py-2 p-2 text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
            }
          >
            <div className="">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/cricket.png"
                  class="mx-auto object-cover rounded-full h-5 w-5 bg-white "
                />
              </a>
            </div>
            <p>Sports</p>
          </div>
          <div
            className={
              "px-10 w-full rounded-md py-2 p-2 text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
            }
          >
            <div className="">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/cricket.png"
                  class="mx-auto object-cover rounded-full h-5 w-5 bg-white "
                />
              </a>
            </div>
            <p>Sports</p>
          </div>
          <div
            className={
              "px-10 w-full rounded-md py-2 p-2 text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
            }
          >
            <div className="">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/cricket.png"
                  class="mx-auto object-cover rounded-full h-5 w-5 bg-white "
                />
              </a>
            </div>
            <p>Sports</p>
          </div>
          <div
            className={
              "px-10 w-full rounded-md py-2 p-2 text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
            }
          >
            <div className="">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/cricket.png"
                  class="mx-auto object-cover rounded-full h-5 w-5 bg-white "
                />
              </a>
            </div>
            <p>Sports</p>
          </div>
          <div
            className={
              "px-10 w-full rounded-md py-2 p-2 text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
            }
          >
            <div className="">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/cricket.png"
                  class="mx-auto object-cover rounded-full h-5 w-5 bg-white "
                />
              </a>
            </div>
            <p>Sports</p>
          </div>
          <div
            className={
              "px-10 w-full rounded-md py-2 p-2 text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
            }
          >
            <div className="">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/cricket.png"
                  class="mx-auto object-cover rounded-full h-5 w-5 bg-white "
                />
              </a>
            </div>
            <p>Sports</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mt-3">
          <p className="text-white pb-2 px-2 text-lg font-bold">Cricket</p>
          <p className="text-white pb-2 px-2 text-lg font-bold">1 Event</p>
        </div>
        <div class="rounded-md shadow-md w-full bg-[#22262a]">
          <div class="flex w-full items-center bg-[#32383e] rounded-t-md justify-between border-b p-3">
            <div class="flex items-center space-x-3">
              <div class="flex items-center text-sm text-[#f9fafa] font-bold ">
                Indian Premeier Leauge
              </div>
            </div>
            <div class="flex items-center space-x-8 px-6">
              <div class="text-sm font-bold text-[#f9fafa]">2</div>
            </div>
          </div>

          <div class="flex items-center flex-1 p-4 cursor-pointer select-none">
            <div class="flex flex-col items-center justify-center w-10 h-10 mr-4 ">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://sportsexch.com/images/icons/cricket.png"
                  class="mx-auto object-cover rounded-full h-10 w-10 bg-white p-2"
                />
              </a>
            </div>
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium text-[#cfd4d8]">Indian Premeier</div>
              <div class="text-xs font-bold text-[#cfd4d8] ">Leauge</div>
            </div>
            <div class="text-xs font-bold text-[#cfd4d8] ">6:00 AM</div>
          </div>

          <div className="flex gap-2 rounded-xl  p-1">
            <div
              className={
                "px-6 w-full rounded-md py-2 p-2 text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
              }
            >
              3.35
            </div>
            <div
              className={
                "px-6 w-full rounded-md py-2 p-2 text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
              }
            >
              3.35
            </div>
            <div
              className={
                "px-6 w-full rounded-md py-2 p-2 text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
              }
            >
              3.35
            </div>
            <div
              className={
                "px-6 w-full rounded-md py-2 p-2 text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
              }
            >
              3.35
            </div>
            <div
              className={
                "px-6 w-full rounded-md py-2 p-2 text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
              }
            >
              3.35
            </div>
            <div
              className={
                "px-6 w-full rounded-md py-2 p-2 text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
              }
            >
              3.35
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mt-3">
          <p className="text-white pb-2 px-2 text-lg font-bold">Cricket</p>
          <p className="text-white pb-2 px-2 text-lg font-bold">1 Event</p>
        </div>
        <Slider {...settings2}>
          {images.map((img, index) => (
            <div key={index} className="flex  w-full scroll-x gap-14 pb-6">
            <div key={index} className="p-3 w-[165px] flex flex-col">
              <img
                src={img}
                className="h-28 min-w-[200px] rounded-md"
                alt={`Slide ${index + 1}`}
              />
            </div>
            </div>
          ))}
        </Slider>
      </div>
     
    </div>
  );
};
