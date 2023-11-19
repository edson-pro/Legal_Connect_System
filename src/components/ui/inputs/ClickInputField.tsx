import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  active?: boolean;
  Icon: FC;
}

const ClickInputField: FC<Props> = ({ label, type, Icon, active, ...restProps }) => {
  return (
    <div
      className={`relative overflow-hidden border-2 bg-primary-light-blue rounded-xl hover:bg-primary-light-blue-200/60 ${
        active ? "border-primary-yellow" : "border-gray-100"
      }`}
    >
      <input
        type={type}
        readOnly
        className="absolute z-10 block w-full h-full bg-transparent outline-none cursor-pointer rounded-3xl m x-4"
        {...restProps}
      />
      <div className="flex items-center px-6 py-5  gap-7">
        <span className="inline-block p-3 bg-primary-blue rounded-xl">
          <Icon />
        </span>
        <span className="text-lg">{label}</span>
      </div>
    </div>
  );
};
export default ClickInputField;
