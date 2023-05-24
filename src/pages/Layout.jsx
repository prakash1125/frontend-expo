import { useEffect, useState } from "react";
import { MainNavbar } from "../components/MainNavbar";
import { MobileNavbar } from "../components/MobileNavbar";
import { RightNavbar } from "../components/RightNavbar";
import { SideNavbar } from "../components/SideNavbar";
import { Sports } from "../components/Sports";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";



export const Layout = () => {

  



  const [toggle, setToggle] = useState(true);
  const [isAboveXl, setisAbovexl] = useState(false);
  useEffect(() => {




    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Show on mobile and tablet screens (max-width: 768px)
        setToggle(false);
        setisAbovexl(false);
      } else if (window.innerWidth >= 1400) {
        console.log(window.innerWidth);
        setisAbovexl(true); // Show on screens between 768px and 1400px
      } else {
        setToggle(true);
        setisAbovexl(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (

    <div className="bg-skin-main  h-[100vh] overflow-y-hidden ">
      <div className={` mx-auto w-full `}>
        {<MainNavbar setToggle={setToggle} toggle={toggle} screen={isAboveXl} />}
      </div>
      <div className={`container mx-auto md:max-w-full md:mx-0  ${isAboveXl ? 'px-64' : ''}`}>
        <div className="">
          <div className="flex ">
            {toggle ? (
              <div className="h-[90vh] overflow-y-scroll scrollbar-hide bg-skin-main absolute md:relative z-40 w-2/4 max-w-[252px]">
                <SideNavbar />
              </div>
            ) : null}
            <Outlet />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:hidden ">
        <MobileNavbar />
      </div>

      <Footer />
    </div>

  );
};





