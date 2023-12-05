import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "components/ui/inputs/InputField";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { GeneralInfoFormInputs } from "types/auth";
import { generalInfoSignupSchema } from "validations/auth";

interface Props {
  onValidSubmit: (formData: GeneralInfoFormInputs) => void;
}

const GeneralInfoForm = forwardRef<HTMLFormElement, Props>(({ onValidSubmit }, ref) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(generalInfoSignupSchema) });

  return (
    <form className="flex flex-col gap-4" ref={ref} onSubmit={handleSubmit(onValidSubmit)}>
      <InputField
        label="First name"
        placeholder="Enter your first name"
        errorMessage={errors.firstName?.message}
        error={!!errors.firstName}
        {...register("firstName")}
      />
      <InputField
        label="Last name"
        placeholder="Enter your last name"
        errorMessage={errors.lastName?.message}
        error={!!errors.lastName}
        {...register("lastName")}
      />
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        errorMessage={errors.email?.message}
        error={!!errors.email}
        {...register("email")}
      />
      <InputField
        label="Phone number"
        placeholder="Enter your phone number"
        errorMessage={errors.telephone?.message}
        error={!!errors.telephone}
        {...register("telephone")}
      />
    </form>
  );
});

GeneralInfoForm.displayName = "GeneralInfoForm";

export default GeneralInfoForm;
