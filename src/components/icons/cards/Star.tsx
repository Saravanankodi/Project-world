import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="#9E4036"
      d="m2.231 11.083.948-4.098L0 4.23l4.2-.364L5.833 0l1.634 3.865 4.2.364-3.18 2.756.948 4.098L5.833 8.91z"
    />
  </svg>
);
export default SvgStar;
