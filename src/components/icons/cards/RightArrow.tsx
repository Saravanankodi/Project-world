import * as React from "react";
import type { SVGProps } from "react";
const RightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#006E2F"
      d="M9.131 6.75H0v-1.5h9.131l-4.2-4.2L6 0l6 6-6 6-1.069-1.05z"
    />
  </svg>
);
export default RightArrow;
