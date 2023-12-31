import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import Spinner from "./Spinner";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: FC<Props> = ({ children, fullWidth, className, loading, ...props }) => {
  return (
    <button
      className={twMerge(
        `bg-primary-yellow h-fit py-[10px] px-2 rounded-md text-primary-blue transition-transform duration-200 hover:bg-yellow-500 ease-out active:scale-[1.02] ${
          fullWidth ? "w-full" : ""
        } ${className}`
      )}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};
export default Button;
