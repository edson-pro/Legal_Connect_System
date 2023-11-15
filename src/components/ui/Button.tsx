import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  fullWidth?: boolean;
}

const Button: FC<Props> = ({ children, fullWidth, className }) => {
  return (
    <button
      className={`bg-primary-yellow py-3 rounded-md text-primary-blue ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
