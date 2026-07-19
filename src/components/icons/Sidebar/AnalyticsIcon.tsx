import * as React from "react";
import type { SVGProps } from "react";
const SvgAnalyticsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.333 11.667H5V7.5H3.333zm6.667 0h1.667V3.333H10zm-3.333 0h1.666v-2.5H6.667zm0-4.167h1.666V5.833H6.667zm-5 7.5q-.688 0-1.177-.49A1.6 1.6 0 0 1 0 13.333V1.667Q0 .979.49.49.979 0 1.667 0h11.666q.688 0 1.177.49.49.489.49 1.177v11.666q0 .688-.49 1.177-.489.49-1.177.49zm0-1.667h11.666V1.667H1.667zm0-11.666v11.666z"
    />
  </svg>
);
export default SvgAnalyticsIcon;
