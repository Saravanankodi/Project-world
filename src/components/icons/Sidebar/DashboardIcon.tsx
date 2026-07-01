import * as React from "react";
import type { SVGProps } from "react";
const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
   
    // width={15}
    // height={15}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.333 5V0H15v5zM0 8.333V0h6.667v8.333zM8.333 15V6.667H15V15zM0 15v-5h6.667v5z"
    />
  </svg>
);
export default DashboardIcon;
