import CaseDescription from "components/client-portal-onboarding-forms/CaseDescription";
import CaseDetails from "components/client-portal-onboarding-forms/CaseDetails";
import LaywerLocation from "components/client-portal-onboarding-forms/LaywerLocation";
import LaywerSkills from "components/client-portal-onboarding-forms/LaywerSkills";
import Button from "components/ui/Button";
import { MouseEvent, useState } from "react";

const ClientPortalOnboarding = () => {
  const [onboardingStep, setOnboardingStep] = useState(1);

  const handleContinue = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOnboardingStep((prev) => prev + 1);
  };

  return (
    <div>
      <form className="flex flex-col h-full justify-center ml-24 gap-6 max-w-[494px]">
        {onboardingStep === 1 && <LaywerSkills />}
        {onboardingStep === 2 && <CaseDescription />}
        {onboardingStep === 3 && <LaywerLocation />}
        {onboardingStep === 4 && <CaseDetails />}
        <Button type="button" className="mt-4" onClick={handleContinue}>
          Continue
        </Button>
        <button className="ease-out hover:scale-[1.02]">Skip</button>
      </form>
    </div>
  );
};
export default ClientPortalOnboarding;
