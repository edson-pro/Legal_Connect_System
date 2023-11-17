import AuthStepperFormBreadCrumps from "components/authPages/AuthStepperFormBreadCrumbs";
import Button from "components/ui/Button";
import InputField from "components/ui/InputField";
import RadioButton from "components/ui/shared/TagRadioButton";
import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";

const formTitles = [
  "Personal information",
  "Proffessional information",
  "Practise areas",
  "Attach documents",
];

const LawyerSignup = () => {
  const [formStep, setFormStep] = useState(1);

  const handleContinue = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormStep((prev) => prev + 1);
  };

  const formTitle = formTitles[formStep - 1];

  return (
    <div className="flex flex-col mt-32 ml-24 w-[364px]">
      <AuthStepperFormBreadCrumps />
      <form className="flex flex-col justify-self-center my-auto gap-4">
        <h1 className="text-2xl font-black text-primary-blue mb-3">{formTitle}</h1>
        {formStep === 1 && (
          <>
            <InputField label="First name" placeholder="Enter your first name" />
            <InputField label="Last name" placeholder="Enter your last name" />
            <InputField label="Email" type="email" placeholder="Enter your email" />
            <InputField label="Phone number" placeholder="Enter your phone number" />
          </>
        )}

        {formStep === 2 && (
          <>
            <InputField label="Law firm" placeholder="Enter Law firm name" />
            <InputField label="Bar licence number" placeholder="Enter licence number" />
            <InputField label="State/province of licence" placeholder="Province of licence" />
          </>
        )}

        {formStep === 3 && (
          <>
            <RadioButton />
          </>
        )}

        <Button onClick={handleContinue} className="mt-4">
          Continue
        </Button>
        <span className="self-center mt-6">
          Already have an account?
          <Link className="ml-1 text-primary-yellow" to="/login">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};
export default LawyerSignup;
