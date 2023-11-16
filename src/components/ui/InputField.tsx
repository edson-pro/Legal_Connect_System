import { InputHTMLAttributes, forwardRef } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, className, required, error, errorMessage, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="label">
          <span className="label-text">
            {label} {required && <small className="text-sm text-red-500">*</small>}
          </span>
        </label>
        <input
          type={props.type ?? "text"}
          placeholder={props.placeholder}
          className={`w-full bg-primary-light-blue px-5 py-4 mt-2 rounded-xl border-2 active:outline outline-primary-blue border-gray-100 ${
            error ? "border-red-600" : "border-base-content/50"
          } ${className ?? ""}`}
          ref={ref}
          {...props}
        />
        {error && errorMessage && (
          <span className="ml-0.5 mt-[.375rem] text-sm text-red-600">{errorMessage}</span>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
