import AuthStepperFormBreadCrumps from "components/authPages/AuthStepperFormBreadCrumbs";
import Button from "components/ui/Button";
import FileInputField from "components/ui/inputs/FileInputField";
import InputField from "components/ui/inputs/InputField";
import TagRadioButton from "components/ui/inputs/TagRadioButton";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Link } from "react-router-dom";

const formTitles = [
  "Personal information",
  "Proffessional information",
  "Practise areas",
  "Attach documents",
];

const practiceAreas = [
  "Labour law",
  "Criminal law",
  "Property law",
  "Family law",
  "Commercial law",
  "Administrative law",
  "Corporate law",
  "Intellectual property",
  "Real Estate",
  "Immigration law",
  "Tax law",
  "Health law",
  "Environmental law",
  "Admiralty law",
  "Construction law",
  "Bankruptcy",
  "Insurance law",
  "Dispute resolution",
];

const LawyerSignup = () => {
  const [formStep, setFormStep] = useState(1);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<string>();

  const handleContinue = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormStep((prev) => prev + 1);
  };

  const handleSelectedPracticeAreaChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedPracticeArea(value);
  };

  const formTitle = formTitles[formStep - 1];

  return (
    <div
      className={`flex flex-col mt-32 ml-24 ${formStep === 3 ? "max-w-[494px]" : "max-w-[384px]"}`}
    >
      <AuthStepperFormBreadCrumps />
      <div className="flex flex-col my-auto justify-self-center gap-4">
        <h1 className="mb-3 text-2xl font-black text-primary-blue">{formTitle}</h1>
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
            <div className="flex flex-wrap gap-4">
              {practiceAreas.map((area, index) => (
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
          </>
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
      </div>
    </div>
  );
};
export default LawyerSignup;
