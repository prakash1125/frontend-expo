import { useEffect, useState } from "react";
import { MainNavbar } from "../components/MainNavbar";
import { MobileNavbar } from "../components/MobileNavbar";
import { RightNavbar } from "../components/RightNavbar";
import { SideNavbar } from "../components/SideNavbar";
import { Sports } from "../components/Sports";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Chatbot } from "../components/Chatbot";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  const [toggle, setToggle] = useState(true);
  const [isAboveXl, setisAbovexl] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        // Show on mobile and tablet screens (max-width: 768px)
        setToggle(false);
        setisAbovexl(false);
      } else if (window.innerWidth >= 1400) {
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

    <div className="bg-skin-main h-[100vh] overflow-y-hidden ">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      <Chatbot />
      <div className={` mx-auto w-full `}>
        {
          <MainNavbar
            setToggle={setToggle}
            toggle={toggle}
            screen={isAboveXl}
          />
        }
      </div>
      <div className={` drop-shadow-sm  mx-auto  max-w-[1440px] `}>
        <div className="">
          <div className="flex ">
            {toggle ? (
              <div className="h-[94vh]  overflow-y-scroll scrollbar-hide bg-skin-sidebarbg absolute md:relative z-40 w-2/4 max-w-[252px]">
                <SideNavbar />
              </div>
            ) : null}
            <Outlet />
          </div>
        </div>
      </div>
      <div className=" mx-auto px-6 lg:hidden ">
        <MobileNavbar />
      </div>

      <Footer />
     
    </div>

  );
};
