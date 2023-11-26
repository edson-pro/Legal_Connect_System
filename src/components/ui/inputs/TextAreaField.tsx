/* eslint-disable @typescript-eslint/no-unused-vars */
import { TextareaHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

const TextAreaField = forwardRef<HTMLInputElement, Props>(
  ({ label, className, required, error, errorMessage, ...props }, _ref) => {
    return (
      <div className="w-full">
        <label className="label">
          <span className="label-text">
            {label} {required && <small className="text-sm text-red-500">*</small>}
          </span>
        </label>
        <div className="relative flex items-center">
          <textarea
            placeholder={props.placeholder}
            className={twMerge(
              `w-full resize-y bg-primary-light-blue px-5 py-4 mt-2 rounded-xl border-2 active:outline outline-primary-blue border-gray-100 ${
                error ? "border-red-600" : "border-base-content/50"
              } ${className ?? ""}`
            )}
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

TextAreaField.displayName = "TextAreaField";

export default TextAreaField;
