import * as React from "react";
import type { SVGProps } from "react";
const BookMarkFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    fill="none"
    {...props}
  >
    <path
      fill="#006E2F"
      d="M0 18V2Q0 1.176.588.588A1.93 1.93 0 0 1 2 0h10q.825 0 1.412.588Q14 1.175 14 2v16l-7-3z"
    />
  </svg>
);
export default BookMarkFilled;
