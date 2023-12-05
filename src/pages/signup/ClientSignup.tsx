import lockpadIcon from "assets/icons/lockpad.svg";
import { AxiosError } from "axios";
import GeneralInfoForm from "components/authPages/signup-forms/GeneralInfoForm";
import PasswordInfoForm from "components/authPages/signup-forms/PasswordInfoForm";
import Button from "components/ui/Button";
import useAuth from "hooks/UseAuth";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { ClientDTO } from "types/api";
import { GeneralInfoFormInputs, PasswordInfoFormInputs } from "types/auth";

const errorToastClasses = "px-12 py-10 border border-red-400/30 h-[60px]";

const ClientSignup = () => {
  const [formStep, setFormStep] = useState(1);
  const [generalInfoFormValues, setGeneralInfoFormValues] = useState<GeneralInfoFormInputs>();
  const navigate = useNavigate();
  const { createClientMutation } = useAuth();

  const generalInfoFormRef = useRef<HTMLFormElement>(null);
  const passwordInfoFormRef = useRef<HTMLFormElement>(null);

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
  };

  const moveToStep2 = (formData: GeneralInfoFormInputs) => {
    setGeneralInfoFormValues(formData);
    setFormStep((prev) => prev + 1);
  };

  const handleFinalSubmit = async (passwordInfoFormValues: PasswordInfoFormInputs) => {
    if (generalInfoFormValues == null) return;
    const { firstName, lastName, ...rest } = generalInfoFormValues;
    const newClientData: ClientDTO = {
      ...rest,
      ...passwordInfoFormValues,
      names: `${firstName} ${lastName}`,
      city_address: "f93fbe9f-323b-4083-b786-4836577a9eef",
    };

    try {
      await createClientMutation.mutateAsync(newClientData);
      navigate("/client-portal");
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

  const formTitle = formStep === 3 ? "Verify Your Email Address" : "Create account";
  const formSubTitle =
    formStep === 3
      ? "Secure Your Account and Access Exclusive Features"
      : "Fill in your information";

  return (
    <div className="flex flex-col justify-center mt-24 ml-24 w-96">
      {formStep === 3 && (
        <span className="mb-5">
          <img
            src={lockpadIcon}
            alt="lockpad icon"
            className="p-3 bg-primary-light-blue-200 rounded-xl"
          />
        </span>
      )}
      <h1 className="text-3xl font-black text-primary-blue">{formTitle}</h1>
      <span className="max-w-xs mt-4">{formSubTitle}</span>
      {formStep === 3 && (
        <span className="mt-1 text-primary-blue">Janusz fdf Karpel@gmail.com</span>
      )}
      <div className="flex flex-col mt-8 gap-4">
        {formStep === 1 && <GeneralInfoForm ref={generalInfoFormRef} onValidSubmit={moveToStep2} />}
        {formStep === 2 && (
          <PasswordInfoForm ref={passwordInfoFormRef} onValidSubmit={handleFinalSubmit} />
        )}
        <Button
          onClick={handleContinue}
          type="button"
          className="mt-4"
          loading={createClientMutation.isLoading}
        >
          Continue
        </Button>
      </div>

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
