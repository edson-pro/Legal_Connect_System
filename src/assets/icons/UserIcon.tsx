import { SVGProps } from "react";

const UserIcon = (props: SVGProps<SVGSVGElement>) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.84 18.1929C19.84 21.4889 15.32 21.8699 11.921 21.8699L11.6778 21.8697C9.5122 21.8644 4 21.7277 4 18.1729C4 14.9442 8.33835 14.5127 11.7115 14.4964L12.1642 14.4961C14.3296 14.5014 19.84 14.6381 19.84 18.1929ZM11.921 15.9959C7.66 15.9959 5.5 16.7279 5.5 18.1729C5.5 19.6309 7.66 20.3699 11.921 20.3699C16.181 20.3699 18.34 19.6379 18.34 18.1929C18.34 16.7349 16.181 15.9959 11.921 15.9959ZM11.921 1.99951C14.849 1.99951 17.23 4.38151 17.23 7.30951C17.23 10.2375 14.849 12.6185 11.921 12.6185H11.889C8.967 12.6095 6.6 10.2265 6.60997 7.30651C6.60997 4.38151 8.992 1.99951 11.921 1.99951ZM11.921 3.42751C9.78 3.42751 8.03798 5.16851 8.03798 7.30951C8.031 9.44351 9.76 11.1835 11.892 11.1915L11.921 11.9055V11.1915C14.061 11.1915 15.802 9.44951 15.802 7.30951C15.802 5.16851 14.061 3.42751 11.921 3.42751Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default UserIcon;
