import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  fullWidth?: boolean;
}

const Button: FC<Props> = ({ children, fullWidth, className, ...props }) => {
  return (
    <button
      className={twMerge(
        `bg-primary-yellow py-[10px] rounded-md text-primary-blue transition-transform duration-200 hover:bg-yellow-500 ease-out active:scale-[1.02] ${
          fullWidth ? "w-full" : ""
        } ${className}`
      )}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
