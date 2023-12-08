import lockpadIcon from "assets/icons/lockpad.svg";
import { AxiosError } from "axios";
import AuthStepperFormBreadCrumps from "components/authPages/AuthStepperFormBreadCrumbs";
import GeneralInfoForm from "components/authPages/signup-forms/GeneralInfoForm";
import LawyerLawFirmInfoForm from "components/authPages/signup-forms/LawyerLawFirmInfoForm";
import PasswordInfoForm from "components/authPages/signup-forms/PasswordInfoForm";
import Button from "components/ui/Button";
import FileInputField from "components/ui/inputs/FileInputField";
import TagRadioButton from "components/ui/inputs/TagRadioButton";
import { lawyersPracticeAreas } from "data/laywers";
import useAuth from "hooks/UseAuth";
import { ChangeEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { LawyerDTO } from "types/api";
import {
  GeneralInfoFormInputs,
  LawyerLawFirmInfoFormInput,
  LaywerSignupFormStep,
  PasswordInfoFormInputs,
} from "types/auth";

const formTitles = [
  "Personal information",
  "Personal information",
  "Proffessional information",
  "Practise areas",
  "Attach documents",
  "Verify Your Email Address",
];

const errorToastClasses = "px-12 py-10 border border-red-400/30 h-[60px]";

type LaywerSignupFormInputs = GeneralInfoFormInputs & PasswordInfoFormInputs;

const LawyerSignup = () => {
  const [formStep, setFormStep] = useState<LaywerSignupFormStep>(1);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<string>();
  const navigate = useNavigate();
  const { createLawyerMutation } = useAuth();

  const [lawyerSignupData, setLawyerSignupData] = useState<LaywerSignupFormInputs>(
    {} as LaywerSignupFormInputs
  );

  const generalInfoFormRef = useRef<HTMLFormElement>(null);
  const passwordInfoFormRef = useRef<HTMLFormElement>(null);
  const lawFirmInfoForm = useRef<HTMLFormElement>(null);

  const handleContinue = () => {
    if (formStep === 1) {
      generalInfoFormRef.current?.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }

    if (formStep === 2) {
      passwordInfoFormRef.current?.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }

    if (formStep === 3) {
      lawFirmInfoForm.current?.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  const handleSelectedPracticeAreaChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedPracticeArea(value);
  };

  const formTitle = formTitles[formStep - 1];

  const moveToStep2 = (formData: GeneralInfoFormInputs) => {
    setLawyerSignupData((prev) => ({ ...prev, ...formData }));
    setFormStep(2);
  };

  const moveToStep3 = (formData: PasswordInfoFormInputs) => {
    setLawyerSignupData((prev) => ({ ...prev, ...formData }));
    setFormStep(3);
  };

  const handleFinalSubmit = async (lawFirmInfoFormValues: LawyerLawFirmInfoFormInput) => {
    // confirm passwod is ignored since it is not needed in the backend
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordConfirm, firstName, lastName, ...rest } = lawyerSignupData;
    const newLawyerData: LawyerDTO = {
      ...rest,
      ...lawFirmInfoFormValues,
      city_address: "68d0a346-1e9a-4350-b865-982851a8fbab",
      names: `${firstName} ${lastName}`,
    };

    try {
      await createLawyerMutation.mutateAsync(newLawyerData);
      toast.success("Signed up successfully");
      navigate("/login", { state: { message: "Login with your new credentials" } });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message, {
          className: errorToastClasses,
        });
      } else
        toast.error("error occured", {
          className: errorToastClasses,
        });
    }
  };

  return (
    <div
      className={`flex flex-col mt-32 ml-24 ${formStep === 4 ? "max-w-[494px]" : "max-w-[384px]"}`}
    >
      <AuthStepperFormBreadCrumps formStep={formStep} />
      <div className="flex flex-col my-auto justify-self-center gap-4">
        {formStep === 5 && (
          <span className="mb-5">
            <img
              src={lockpadIcon}
              alt="lockpad icon"
              className="p-3 bg-primary-light-blue-200 rounded-xl"
            />
          </span>
        )}

        <h1 className="mb-3 text-2xl font-black text-primary-blue">{formTitle}</h1>
        {formStep === 5 && (
          <div className="flex flex-col -mt-8">
            <span className="max-w-xs mt-4">Secure Your Account and Access Exclusive Features</span>
            <span className="mt-1 text-primary-blue">Janusz Karpel@gmail.com</span>
          </div>
        )}
        {formStep === 1 && <GeneralInfoForm ref={generalInfoFormRef} onValidSubmit={moveToStep2} />}

        {formStep === 2 && (
          <PasswordInfoForm ref={passwordInfoFormRef} onValidSubmit={moveToStep3} />
        )}

        {formStep === 3 && (
          <LawyerLawFirmInfoForm ref={lawFirmInfoForm} onValidSubmit={handleFinalSubmit} />
        )}

        {formStep === 4 && (
          <div className="flex flex-wrap gap-4">
            {lawyersPracticeAreas.map((area, index) => (
              <TagRadioButton
                label={area}
                value={area}
                key={index}
                checked={selectedPracticeArea === area}
                name="practiceArea"
                onChange={handleSelectedPracticeAreaChange}
              />
            ))}
          </div>
        )}

        {formStep === 4 && (
          <>
            <FileInputField label="Work permit" id="work-permit" />
            <FileInputField label="Appendix" id="Appendix" />
            <FileInputField label="ZUS+MONTHLY ZUS Report" id="zus-monthly-zus-report" />
          </>
        )}

        <Button onClick={handleContinue} loading={createLawyerMutation.isLoading} className="mt-4">
          Continue
        </Button>
        <span className="self-center mt-2">
          Already have an account?
          <Link className="ml-1 text-primary-yellow" to="/login">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};
export default LawyerSignup;
