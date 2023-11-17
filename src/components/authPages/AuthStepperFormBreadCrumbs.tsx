import documentIcon from "assets/icons/document.svg";
import placeIcon from "assets/icons/place.svg";
import suitcaseIcon from "assets/icons/suitcase.svg";
import userIcon from "assets/icons/user.svg";
import { useState } from "react";

type LineWidthClass = "w-1/5" | "w-1/2" | "w-[80%]" | "w-full";
type FormStep = 1 | 2 | 3 | 4;

const AuthStepperFormBreadCrumps = () => {
  const [formStep, setFormStep] = useState<FormStep>(1);

  const setLineWidthClass = (): LineWidthClass => {
    if (formStep === 1) return "w-1/5";
    if (formStep === 2) return "w-1/2";
    if (formStep === 3) return "w-[80%]";
    return "w-full";
  };

  const changeStep = (newStep: FormStep) => {
    if (formStep === newStep) return;
    setFormStep(newStep);
  };

  return (
    <div className="relative flex justify-between">
      <button
        className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary-blue duration-200 transition-all ease-out"
        onClick={() => {
          changeStep(1);
        }}
      >
        <img src={userIcon} alt="user icon" />
      </button>

      <button
        className={`z-10 flex items-center justify-center w-8 h-8 rounded-full duration-200 transition-all ease-out ${
          formStep < 2 ? "bg-gray-300" : "bg-primary-blue"
        }`}
        onClick={() => {
          changeStep(2);
        }}
      >
        <img src={suitcaseIcon} alt="suitcase icon" />
      </button>

      <button
        className={`z-10 flex items-center justify-center w-8 h-8 rounded-full duration-200 transition-all ease-out ${
          formStep < 3 ? "bg-gray-300" : "bg-primary-blue"
        }`}
        onClick={() => {
          changeStep(3);
        }}
      >
        <img src={placeIcon} alt="place icon" />
      </button>
      <button
        className={`z-10 flex items-center justify-center w-8 h-8 rounded-full duration-200 transition-all ease-out ${
          formStep < 4 ? "bg-gray-300" : "bg-primary-blue"
        }`}
        onClick={() => {
          changeStep(4);
        }}
      >
        <img src={documentIcon} alt="document icon" />
      </button>

      <div className="absolute w-full h-1 my-auto bg-gray-300 top-1/2 -translate-y-1/2"></div>
      <div
        className={`absolute my-auto top-1/2 -translate-y-1/2 h-1 bg-primary-blue duration-200 transition-all ease-out ${setLineWidthClass()}`}
      ></div>
    </div>
  );
};
export default AuthStepperFormBreadCrumps;
