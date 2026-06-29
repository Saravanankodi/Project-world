import * as React from "react";
import type { SVGProps } from "react";
const Filter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={7}
    fill="none"
    {...props}
  >
    <path
      fill="#161D16"
      d="M4.083 7V5.833h2.334V7zM1.75 4.083V2.917h7v1.166zM0 1.167V0h10.5v1.167z"
    />
  </svg>
);
export default Filter;
