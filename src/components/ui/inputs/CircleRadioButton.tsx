import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string; // required to link a label and it's unique input
}

const CircleRadioButton: FC<Props> = ({ label, name, id, ...restProps }) => {
  return (
    <div className="flex items-center gap-2">
      <input type="radio" name={name} id={id} className="px-3 accent-primary-blue" {...restProps} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
export default CircleRadioButton;
