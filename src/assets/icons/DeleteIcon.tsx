import { SVGProps } from "react";

const DeleteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 28 28" {...props}>
      <path
        fill="currentColor"
        d="M11.5 6h5a2.5 2.5 0 0 0-5 0ZM10 6a4 4 0 0 1 8 0h6.25a.75.75 0 0 1 0 1.5h-1.31l-1.217 14.603A4.25 4.25 0 0 1 17.488 26h-6.976a4.25 4.25 0 0 1-4.235-3.897L5.06 7.5H3.75a.75.75 0 0 1 0-1.5H10Zm2.5 5.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5Zm3.75-.75a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-.75-.75Z"
      />
    </svg>
  );
};

export default DeleteIcon;
