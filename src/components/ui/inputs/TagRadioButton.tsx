import AddIcon from "assets/icons/AddIcon";
import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
  errorMessage?: string;
}

const TagRadioButton: FC<Props> = ({ label, value, checked, ...restProps }) => {
  return (
    <div className="relative">
      <div
        className={`flex w-fit items-center justify-center gap-1 p-3 rounded-xl relative ${
          checked ? "bg-primary-blue text-white" : "bg-[#F1F1F1]"
        }`}
      >
        <input
          type="radio"
          className="absolute z-10 w-full h-full opacity-0 cursor-pointer"
          value={value}
          checked={checked}
          {...restProps}
        />
        <AddIcon />
        <span>{label}</span>
      </div>
    </div>
  );
};
export default TagRadioButton;
