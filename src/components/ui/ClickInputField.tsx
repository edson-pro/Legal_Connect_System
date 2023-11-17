import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  iconUrl: string;
}

const ClickInputField: FC<Props> = ({ label, type, iconUrl, ...restProps }) => {
  return (
    <div className="relative overflow-hidden border border-gray-100 bg-primary-light-blue rounded-xl hover:bg-primary-blue/10">
      <input
        type={type}
        readOnly
        className="absolute z-10 block w-full h-full bg-transparent outline-none rounded-3xl m x-4 cursor-pointer"
        {...restProps}
      />
      <div className="flex items-center px-6 py-5  gap-7">
        <span className="inline-block p-3 bg-primary-blue rounded-xl">
          <img src={iconUrl} alt="law icon" />
        </span>
        <span className="text-lg">{label}</span>
      </div>
    </div>
  );
};
export default ClickInputField;
