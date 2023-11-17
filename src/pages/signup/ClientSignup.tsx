import lockpadIcon from "assets/icons/lockpad.svg";
import Button from "components/ui/Button";
import InputField from "components/ui/InputField";
import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";

const ClientSignup = () => {
  const [formStep, setFormStep] = useState(1);
  
  const handleContinue = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formStep === 3) return;
    setFormStep((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col justify-center mt-24 ml-24 w-96">
      {formStep === 3 && (
        <span className="mb-5">
          <img
            src={lockpadIcon}
            alt="lockpad icon"
            className="p-4 bg-primary-light-blue-200 rounded-xl"
          />
        </span>
      )}
      <h1 className="text-3xl font-black text-primary-blue">
        {formStep === 3 ? "Verify Your Email Address" : "Create account"}
      </h1>
      <span className="max-w-xs mt-4">
        {formStep === 3
          ? "Secure Your Account and Access Exclusive Features"
          : "Fill in your information"}
      </span>
      {formStep === 3 && <span className="mt-1 text-primary-blue">Janusz Karpel@gmail.com</span>}
      <form action="" className="flex flex-col mt-8 gap-4">
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
            <InputField label="Id or passport number" placeholder="Enter Id /Passport" />
            <InputField label="Create Password" placeholder="Create  password" type="password" />
            <InputField label="Confirm Password" type="password" placeholder="Confirm  password" />
          </>
        )}
        <Button onClick={handleContinue} className="mt-4">
          Continue
        </Button>
      </form>

      <span className="self-center mt-6">
        Already have an account?
        <Link className="ml-1 text-primary-yellow" to="/login">
          Login
        </Link>
      </span>
    </div>
  );
};
export default ClientSignup;
