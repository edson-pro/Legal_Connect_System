import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "components/ui/inputs/InputField";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { generalInfoSignupSchema } from "validations/auth";

// eslint-disable-next-line no-empty-pattern
const GeneralInfoForm = forwardRef<HTMLFormElement>(({}, ref) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(generalInfoSignupSchema) });

  const onValidSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <form className="flex flex-col gap-4" ref={ref} onSubmit={handleSubmit(onValidSubmit)}>
      <InputField
        label="First name"
        placeholder="Enter your first name"
        errorMessage={errors.fistName?.message}
        error={!!errors.fistName}
        {...register("fistName")}
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
        errorMessage={errors.phoneNumber?.message}
        error={!!errors.phoneNumber}
        {...register("phoneNumber")}
      />
    </form>
  );
});

GeneralInfoForm.displayName = "GeneralInfoForm";

export default GeneralInfoForm;
