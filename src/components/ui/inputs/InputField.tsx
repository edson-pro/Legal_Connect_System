import { FC, InputHTMLAttributes, forwardRef } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  Icon?: FC;
}

const InputField = forwardRef<HTMLInputElement, Props>(
  ({ label, className, required, error, errorMessage, Icon, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="label">
          <span className="label-text">
            {label} {required && <small className="text-sm text-red-500">*</small>}
          </span>
        </label>
        <div className="relative flex items-center">
          {Icon && (
            <span className="absolute mt-2 w-6 h-6 left-[20px] text-[#9B9B9B]">
              <Icon />
            </span>
          )}

          <input
            type={props.type ?? "text"}
            placeholder={props.placeholder}
            className={`w-full bg-primary-light-blue px-5 py-4 mt-2 rounded-xl border-2 active:outline outline-primary-blue border-gray-100 ${
              error ? "border-red-600" : "border-base-content/50"
            } ${Icon ? "pl-14" : "pl-5"} ${className ?? ""}`}
            ref={ref}
            {...props}
          />
        </div>

        {error && errorMessage && (
          <span className="ml-0.5 mt-[.375rem] text-sm text-red-600">{errorMessage}</span>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
