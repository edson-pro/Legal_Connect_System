import documentIcon from "assets/icons/document.svg";
import placeIcon from "assets/icons/place.svg";
import suitcaseIcon from "assets/icons/suitcase.svg";
import userIcon from "assets/icons/user.svg";

const AuthStepperFormBreadCrumps = () => {
  return (
    <div className="flex justify-between relative">
      <div className="p-2 bg-primary-yellow rounded-full z-10 h-8 flex justify-center items-center w-8">
        <img src={userIcon} alt="user icon" />
      </div>
      <div className="p-2 bg-primary-yellow rounded-full z-10">
        <img src={suitcaseIcon} alt="suitcase icon" />
      </div>
      <div className="p-2 bg-primary-yellow rounded-full z-10">
        <img src={placeIcon} alt="place icon" />
      </div>
      <div className="p-2 bg-primary-yellow rounded-full z-10">
        <img src={documentIcon} alt="document icon" />
      </div>

      <div className="absolute my-auto top-1/2 -translate-y-1/2 h-1 bg-black w-full"></div>
      <div className="absolute my-auto top-1/2 -translate-y-1/2 h-1 bg-red-500 w-[80%]"></div>
      {/* <span className="block bg-[#EFEFEF] h-1"></span>
        <div className="absolute flex items-center -translate-y-1/2 -mt-[1.8px]">
          

          <span className="h-1 block bg-red-500 z-10 w-5"></span>
        </div> */}
    </div>
  );
};
export default AuthStepperFormBreadCrumps;
