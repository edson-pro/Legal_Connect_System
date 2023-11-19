import exploreCardsBg from "assets/images/explore-cards-bg.png";
import { Outlet } from "react-router-dom";

const OnboardingSplitColumns = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="w-full h-screen bg-[#EBF9FF] flex justify-center items-center">
        <div className="flex flex-col items-center justify-center max-w-xl">
          <span className="px-4 py-3 rounded-lg text-primary-blue bg-primary-blue/10">
            Empower Your Legal Journey
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-center text-primary-blue">
            "Streamlining Your Search for the Right
            <span className="inline-block mx-1 text-primary-yellow">Lawyer</span>- Your Partner in
            Legal Hiring Success!"
          </h2>
          <img src={exploreCardsBg} alt="Hero background" className="w-11/12 mt-12" />
        </div>
      </div>

      <Outlet />
    </div>
  );
};
export default OnboardingSplitColumns;
