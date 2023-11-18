import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  fullWidth?: boolean;
}

const Button: FC<Props> = ({ children, fullWidth, className, ...props }) => {
  return (
    <button
      className={`bg-primary-yellow py-[10px] rounded-md text-primary-blue ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
