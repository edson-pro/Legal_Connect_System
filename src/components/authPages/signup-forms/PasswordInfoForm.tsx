import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "components/ui/inputs/InputField";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { PasswordInfoFormInputs } from "types/auth";
import { passwordInfoSignupSchema } from "validations/auth";

interface Props {
  onValidSubmit: (formData: PasswordInfoFormInputs) => void;
}

const PasswordInfoForm = forwardRef<HTMLFormElement, Props>(({ onValidSubmit }, ref) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(passwordInfoSignupSchema) });

  return (
    <form className="flex flex-col gap-4" ref={ref} onSubmit={handleSubmit(onValidSubmit)}>
      <InputField
        label="Id or passport number"
        placeholder="Enter Id /Passport"
        errorMessage={errors.id_passport_number?.message}
        error={!!errors.id_passport_number}
        {...register("id_passport_number")}
      />
      <InputField
        label="Create Password"
        placeholder="Create password"
        type="password"
        errorMessage={errors.password?.message}
        error={!!errors.password}
        {...register("password")}
      />
      <InputField
        label="Confirm Password"
        type="password"
        placeholder="Confirm  password"
        errorMessage={errors.passwordConfirm?.message}
        error={!!errors.passwordConfirm}
        {...register("passwordConfirm")}
      />
    </form>
  );
});

PasswordInfoForm.displayName = "PasswordInfoForm";

export default PasswordInfoForm;
