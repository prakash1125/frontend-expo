import { RightNavbar } from "../components/RightNavbar";
import { Sports } from "../components/Sports";

export const SportsPage = () => {
  return (
    <>
      <div className="w-full  md:p-2 overflow-y-scroll scrollbar-hide h-[91vh]  "><Sports /></div>
      <div className="px-2 hidden lg:block w-1/4" >
        <RightNavbar />
      </div>
    </>
  );
};
