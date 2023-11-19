import { FC } from "react";

interface Props {
  className?: string;
}

const TickIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <g clip-path="url(#clip0_1229_187)">
        <path
          d="M0 11.2675L1.7675 9.5L6.255 13.9862L18.2413 2L20.0088 3.7675L6.25375 17.5212L0 11.2675Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1229_187">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default TickIcon;
