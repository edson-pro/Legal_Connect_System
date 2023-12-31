import { SVGProps } from "react";

const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M3 4h18v2H3V4Zm6 7h12v2H9v-2Zm-6 7h18v2H3v-2Z" />
    </svg>
  );
};
export default MenuIcon;
