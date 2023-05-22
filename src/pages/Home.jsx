import { RightNavbar } from "../components/RightNavbar";
import { Home } from "../components/Home";

export const HomePage = () => {
  return (
    <>
      <div className="w-full md:w-3/4 md:p-2 overflow-y-scroll scrollbar-hide h-[91vh] "><Home /></div>
      <div className="px-2 hidden md:block w-1/4 z-0" >
        <RightNavbar />
      </div>
    </>
  );
};
