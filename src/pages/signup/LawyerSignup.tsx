/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import lockpadIcon from "assets/icons/lockpad.svg";
import axios, { AxiosError } from "axios";
import AuthStepperFormBreadCrumps from "components/authPages/AuthStepperFormBreadCrumbs";
import Button from "components/ui/Button";
import FileInputField from "components/ui/inputs/FileInputField";
import InputField from "components/ui/inputs/InputField";
import TagRadioButton from "components/ui/inputs/TagRadioButton";
import { lawyersPracticeAreas } from "data/laywers";
import { ChangeEvent, MouseEvent, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const formTitles = [
  "Personal information",
  "Personal information",
  "Proffessional information",
  "Practise areas",
  "Attach documents",
  "Verify Your Email Address",
];

const errorToastClasses = "px-12 py-10 border border-red-400/30 h-[60px]";

const LawyerSignup = () => {
  const [formStep, setFormStep] = useState(1);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<string>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>({});

  const handleContinue = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (formStep === 3) {
      const userData = {
        ...formData,
        names: formData.firstName + " " + formData.lastName,
        law_firm_address: "f93fbe9f-323b-4083-b786-4836577a9eef",
      };

      const { firstName, lastName, ...goodData } = userData;

      try {
        await axios.post("http://api.legalc.net/api/v1/users/lawyers", goodData);
        toast.success("lawyer created successfully");
        navigate("/login");
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
      return;
    }

    if (formStep === 5) return navigate("/account-confirmation-status");
    setFormStep((prev) => prev + 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSelectedPracticeAreaChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedPracticeArea(value);
  };

  const formTitle = formTitles[formStep - 1];

  return (
    <div
      className={`flex flex-col mt-32 ml-24 ${formStep === 4 ? "max-w-[494px]" : "max-w-[384px]"}`}
    >
      <AuthStepperFormBreadCrumps />
      <form className="flex flex-col my-auto justify-self-center gap-4">
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
        {formStep === 1 && (
          <>
            <InputField
              label="First name"
              placeholder="Enter your first name"
              name="firstName"
              required
              onChange={handleChange}
            />
            <InputField
              label="Last name"
              placeholder="Enter your last name"
              name="lastName"
              required
              onChange={handleChange}
            />
            <InputField
              label="Email"
              type="email"
              required
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
            />
            <InputField
              label="Phone number"
              placeholder="Enter your phone number"
              name="telephone"
              required
              onChange={handleChange}
            />
          </>
        )}

        {formStep === 2 && (
          <>
            <InputField
              label="Id or passport number"
              placeholder="Enter Id /Passport"
              name="id_passport_number"
              onChange={handleChange}
            />
            <InputField
              label="Create Password"
              placeholder="Create password"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <InputField label="Confirm Password" type="password" placeholder="Confirm  password" />
          </>
        )}

        {formStep === 3 && (
          <>
            <InputField
              label="Law firm"
              placeholder="Enter Law firm name"
              name="law_firm"
              onChange={handleChange}
            />
            <InputField
              label="Bar licence number"
              placeholder="Enter licence number"
              name="law_firm_license_number"
              onChange={handleChange}
            />
            {/* <InputField
              label="State/province of licence"
              placeholder="Province of licence"
              name="law_firm_license_number"
            /> */}
          </>
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

        <Button onClick={handleContinue} className="mt-4">
          Continue
        </Button>
        <span className="self-center mt-2">
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
