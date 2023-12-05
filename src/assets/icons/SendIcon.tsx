import { SVGProps } from "react";

const SendIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M19.4918 4.52378C19.0417 4.06174 18.3754 3.8896 17.7541 4.0708L3.2672 8.28357C2.61173 8.46567 2.14714 8.98842 2.02199 9.6525C1.89413 10.3284 2.34072 11.1863 2.92416 11.5451L7.45391 14.3291C7.9185 14.6145 8.51815 14.5429 8.9026 14.1552L14.0896 8.93587C14.3507 8.66408 14.7829 8.66408 15.044 8.93587C15.3051 9.1986 15.3051 9.62441 15.044 9.8962L9.84799 15.1164C9.46263 15.5033 9.3906 16.1057 9.67422 16.5732L12.442 21.1484C12.7661 21.692 13.3243 22 13.9366 22C14.0086 22 14.0896 22 14.1617 21.9909C14.8639 21.9003 15.4222 21.4202 15.6293 20.7407L19.924 6.27231C20.1131 5.65625 19.942 4.98583 19.4918 4.52378Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SendIcon;