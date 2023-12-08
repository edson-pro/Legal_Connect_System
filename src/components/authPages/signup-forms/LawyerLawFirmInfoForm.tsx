import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "components/ui/inputs/InputField";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { LawyerLawFirmInfoFormInput } from "types/auth";
import { lawyerLawFirmSignupSchema } from "validations/auth";

interface Props {
  onValidSubmit: (formData: LawyerLawFirmInfoFormInput) => void;
}

const LawyerLawFirmInfoForm = forwardRef<HTMLFormElement, Props>(({ onValidSubmit }, ref) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(lawyerLawFirmSignupSchema) });

  return (
    <form className="flex flex-col gap-4" ref={ref} onSubmit={handleSubmit(onValidSubmit)}>
      <InputField
        label="Law firm"
        placeholder="Enter Law firm name"
        errorMessage={errors.law_firm?.message}
        error={!!errors.law_firm}
        {...register("law_firm")}
      />
      <InputField
        label="Bar licence number"
        placeholder="Enter firm bar licence number"
        errorMessage={errors.law_firm_license_number?.message}
        error={!!errors.law_firm_license_number}
        {...register("law_firm_license_number")}
      />
      <InputField
        label="State/province of licence"
        placeholder="Province of licence"
        errorMessage={errors.law_firm_address?.message}
        error={!!errors.law_firm_address}
        {...register("law_firm_address")}
      />
    </form>
  );
});

LawyerLawFirmInfoForm.displayName = "LawyerLawFirmInfoForm";

export default LawyerLawFirmInfoForm;
